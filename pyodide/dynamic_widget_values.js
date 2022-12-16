importScripts("https://cdn.jsdelivr.net/pyodide/v0.21.3/full/pyodide.js");

function sendPatch(patch, buffers, msg_id) {
  self.postMessage({
    type: 'patch',
    patch: patch,
    buffers: buffers
  })
}

async function startApplication() {
  console.log("Loading pyodide!");
  self.postMessage({type: 'status', msg: 'Loading pyodide'})
  self.pyodide = await loadPyodide();
  self.pyodide.globals.set("sendPatch", sendPatch);
  console.log("Loaded!");
  await self.pyodide.loadPackage("micropip");
  const env_spec = ['https://cdn.holoviz.org/panel/0.14.2/dist/wheels/bokeh-2.4.3-py3-none-any.whl', 'https://cdn.holoviz.org/panel/0.14.2/dist/wheels/panel-0.14.2-py3-none-any.whl', 'pyodide-http==0.1.0']
  for (const pkg of env_spec) {
    let pkg_name;
    if (pkg.endsWith('.whl')) {
      pkg_name = pkg.split('/').slice(-1)[0].split('-')[0]
    } else {
      pkg_name = pkg
    }
    self.postMessage({type: 'status', msg: `Installing ${pkg_name}`})
    try {
      await self.pyodide.runPythonAsync(`
        import micropip
        await micropip.install('${pkg}');
      `);
    } catch(e) {
      console.log(e)
      self.postMessage({
	type: 'status',
	msg: `Error while installing ${pkg_name}`
      });
    }
  }
  console.log("Packages loaded!");
  self.postMessage({type: 'status', msg: 'Executing code'})
  const code = `
  
import asyncio

from panel.io.pyodide import init_doc, write_doc

init_doc()

#!/usr/bin/env python
# coding: utf-8

# In[ ]:


import panel as pn

pn.extension(sizing_mode="stretch_width")


# This example demonstrates **how to control one set of widgets with another set of widgets**, such as when the value of one widget changes the allowable values of another. Here the \`\`title_widget\`\` and \`\`value_widget\`\` control the title and ranges of the other set of widgets, respectively.

# In[ ]:


title_widget = pn.widgets.TextInput(name='This controls labels', value='LABEL TEXT')
value_widget = pn.widgets.IntSlider(name='This controls values', start=0, end=10, value=5)

meta_widgets = pn.WidgetBox(
    title_widget,
    value_widget,
)

widgets = pn.WidgetBox(
    pn.widgets.TextInput(),
    pn.widgets.Spinner(),
    pn.widgets.IntSlider(),
    pn.widgets.RangeSlider(),
    pn.widgets.FloatSlider(),
)

def update_titles(event):
    for w in widgets:
        w.name = '%s %s' % (w.__class__.__name__, event.new)

title_widget.param.watch(update_titles, 'value')
title_widget.param.trigger('value')

def update_values(event):
    for w in widgets:
        if isinstance(w.value, (int, float)):
            w.value = event.new
            w.end = event.new

value_widget.param.watch(update_values, 'value')

pn.Row(meta_widgets, widgets)


# ## App
# 
# Lets wrap it into nice template that can be served via \`panel serve dynamic_widget_values.ipynb\`

# In[ ]:


pn.template.FastListTemplate(site="Panel", title="Dynamic Widget Labels and Values", sidebar=[meta_widgets], main=["This example demonstrates **how to control one set of widgets with another set of widgets**.", widgets]).servable();



await write_doc()
  `

  try {
    const [docs_json, render_items, root_ids] = await self.pyodide.runPythonAsync(code)
    self.postMessage({
      type: 'render',
      docs_json: docs_json,
      render_items: render_items,
      root_ids: root_ids
    })
  } catch(e) {
    const traceback = `${e}`
    const tblines = traceback.split('\n')
    self.postMessage({
      type: 'status',
      msg: tblines[tblines.length-2]
    });
    throw e
  }
}

self.onmessage = async (event) => {
  const msg = event.data
  if (msg.type === 'rendered') {
    self.pyodide.runPythonAsync(`
    from panel.io.state import state
    from panel.io.pyodide import _link_docs_worker

    _link_docs_worker(state.curdoc, sendPatch, setter='js')
    `)
  } else if (msg.type === 'patch') {
    self.pyodide.runPythonAsync(`
    import json

    state.curdoc.apply_json_patch(json.loads('${msg.patch}'), setter='js')
    `)
    self.postMessage({type: 'idle'})
  } else if (msg.type === 'location') {
    self.pyodide.runPythonAsync(`
    import json
    from panel.io.state import state
    from panel.util import edit_readonly
    if state.location:
        loc_data = json.loads("""${msg.location}""")
        with edit_readonly(state.location):
            state.location.param.update({
                k: v for k, v in loc_data.items() if k in state.location.param
            })
    `)
  }
}

startApplication()