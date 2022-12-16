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
  const env_spec = ['https://cdn.holoviz.org/panel/0.14.2/dist/wheels/bokeh-2.4.3-py3-none-any.whl', 'https://cdn.holoviz.org/panel/0.14.2/dist/wheels/panel-0.14.2-py3-none-any.whl', 'pyodide-http==0.1.0', 'colorcet', 'datashader', 'numba', 'numpy', 'pandas']
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


import numpy as np
import pandas as pd
import datashader as ds
import panel as pn

from numba import jit
from datashader import transfer_functions as tf
from colorcet import palette_n

pn.extension(sizing_mode="stretch_width")


# This example demonstrates how to use the \`\`pn.interact\`\` function to trigger updates in an image of a Clifford [attractor](https://en.wikipedia.org/wiki/Attractor) generated using the [Datashader](https://datashader.org) library.

# In[ ]:


@jit(nopython=True)
def clifford_trajectory(a, b, c, d, x0, y0, n):
    xs, ys = np.zeros(n), np.zeros(n)
    xs[0], ys[0] = x0, y0
    for i in np.arange(n-1):
        xs[i+1] = np.sin(a * ys[i]) + c * np.cos(a * xs[i])
        ys[i+1] = np.sin(b * xs[i]) + d * np.cos(b * ys[i])
    return xs, ys

ps = {k:p[::-1] for k,p in palette_n.items()}

def clifford_plot(a=1.9, b=1.9, c=1.9, d=0.8, n=1000000, cmap=ps['kbc']):
    cvs = ds.Canvas(plot_width=600, plot_height=600)
    xs, ys = clifford_trajectory(a, b, c, d, 0, 0, n)
    df = pd.DataFrame(dict(x=xs,y=ys))
    agg = cvs.points(df, 'x', 'y')
    return tf.shade(agg, cmap=cmap)

pane = pn.interact(clifford_plot, a=(0,2), b=(0,2), c=(0,2), d=(0,2), n=(int(1),int(2e7)), cmap=ps)

logo = "https://tinyurl.com/y9c2zn65/logo_stacked_s.png"
text = pn.pane.Markdown("""
This example demonstrates **how to use the \`\`pn.interact\`\` function** to trigger updates in an image of a Clifford [attractor](https://en.wikipedia.org/wiki/Attractor) generated using the [Datashader](https://datashader.org) library. We speed up things using the **[numba](http://numba.pydata.org/) \`jit\` decorator**.

You can **use the widgets** to vary the parameters of this [Clifford attractor](https://anaconda.org/jbednar/clifford_attractor).

**Many values result in nearly blank plots** that contain only a few scattered points.""")

pn.Row(pn.Column(logo, text, pane[0], width=400, sizing_mode="fixed"), pn.layout.VSpacer(width=50), pane[1])


# ## App
# 
# Lets wrap it into nice template that can be served via \`panel serve clifford_interact.ipynb\`

# In[ ]:


pn.template.FastListTemplate(
    site="Panel", 
    title="Clifford Attractor using Panel Interact, Numba and Datashader", 
    sidebar=[logo, pane[0]], 
    main=[text, pane[1]],
    main_max_width="650px"
).servable();



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