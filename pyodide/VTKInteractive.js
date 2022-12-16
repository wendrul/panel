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
  const env_spec = ['https://cdn.holoviz.org/panel/0.14.2/dist/wheels/bokeh-2.4.3-py3-none-any.whl', 'https://cdn.holoviz.org/panel/0.14.2/dist/wheels/panel-0.14.2-py3-none-any.whl', 'pyodide-http==0.1.0', 'pyvista']
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
import pyvista as pv
from pyvista import examples
pn.extension('vtk', sizing_mode="stretch_width")


# For this example we use the pyvista library to load a dataset and generate easily a VTK scene

# In[ ]:


m = examples.download_st_helens().warp_by_scalar()

# default camera position
cpos = [(567000.9232163235, 5119147.423216323, 6460.423216322832),
 (562835.0, 5114981.5, 2294.5),
 (-0.4082482904638299, -0.40824829046381844, 0.8164965809277649)]

# pyvista plotter
pl = pv.Plotter(notebook=True);
actor = pl.add_mesh(m, smooth_shading=True, lighting=True)
pl.camera_position = cpos #set camera position

# save initial camera properties
renderer = list(pl.ren_win.GetRenderers())[0]
initial_camera = renderer.GetActiveCamera()
initial_camera_pos = {"focalPoint": initial_camera.GetFocalPoint(),
                      "position": initial_camera.GetPosition(),
                      "viewUp": initial_camera.GetViewUp()}

# Panel creation using the VTK Scene created by the plotter pyvista
orientation_widget = True
enable_keybindings = True
vtkpan = pn.panel(pl.ren_win, sizing_mode='stretch_both', orientation_widget=orientation_widget,
                  enable_keybindings=enable_keybindings, height=600)
vtkpan


# WidgetBox with colorbars and actor selection

# In[ ]:


# Creation of a mapping between Custom name and the VTK object reference
actor_ref = ["None", actor.__this__]
actor_names = ["None", 'St Helen']
actor_opts = {k:v for k,v in zip(actor_names, actor_ref)}

options = {}
actor_selection = pn.widgets.Select(value=None, options = actor_opts , name="Actor Selection")
actor_selection


# WidgetBoxes with general parameters of the vtk Scene (Widgets, Background, Lights,...)

# In[ ]:


# Scene Layout
scene_props = pn.WidgetBox()
bind_and_orient = pn.widgets.CheckBoxGroup(value=['Orientation Widget', 'Key Bindings'], options=['Orientation Widget', 'Key Bindings']) #initialisation => coherence with panel params
reset_camera = pn.widgets.Button(name='Reset Camera')
background_color = pn.widgets.ColorPicker(value=''.join(['#'] + ['{:02x}'.format(int(v*255)) for v in pl.background_color]),
                                          name='Background Color')
[scene_props.append(w) for w in [bind_and_orient, reset_camera, background_color]]

# Light properties
light_props = pn.WidgetBox()
light_box_title = pn.widgets.StaticText(value='Light properties')
light_type = pn.widgets.Select(value='HeadLight', options=['HeadLight','SceneLight','CameraLight'])
light_intensity = pn.widgets.FloatSlider(start=0, end=1, value=1, name="Intensity")


[light_props.append(w) for w in [light_box_title, light_type, light_intensity]]
pn.Row(scene_props, light_props)


# WidgetBox with properties of the Actors

# In[ ]:


#layout actor props
actor_props = pn.WidgetBox()
opacity = pn.widgets.FloatSlider(value=1, start=0, end=1, name='Opacity', disabled=True)
lighting = pn.widgets.Toggle(value=True, name='Lighting', disabled=True)
interpolation = pn.widgets.Select(value='Phong', options=['Flat','Phong'], name='Interpolation', disabled=True)
edges = pn.widgets.Toggle(value=False, name='Show Edges', disabled=True)
edges_color = pn.widgets.ColorPicker(value='#ffffff', name='Edges Color', disabled=True)
representation = pn.widgets.Select(value='Surface', options=['Points','Wireframe','Surface'], name='Representation', disabled=True)
frontface_culling = pn.widgets.Toggle(value=False, name='Frontface Culling', disabled=True)
backface_culling = pn.widgets.Toggle(value=False, name='Backface Culling', disabled=True)
ambient = pn.widgets.FloatSlider(value=0, start=-1, end=1, name='Ambient', disabled=True)
diffuse = pn.widgets.FloatSlider(value=1, start=0, end=2, name='Diffuse', disabled=True)
specular = pn.widgets.FloatSlider(value=0, start=0, end=10, name='Specular', disabled=True)
specular_power = pn.widgets.FloatSlider(value=100, start=0, end=100, name='Specular Power', disabled=True)
[actor_props.append(w) for w in [opacity, lighting, interpolation, edges, edges_color,
                                 representation,frontface_culling,backface_culling, ambient,
                                 diffuse, specular, specular_power]]
actor_props


# Linking all widgets together using jslinks

# In[ ]:


#Linking
light_type.jslink(vtkpan, code={'value':"""
const light = target.renderer_el.getRenderer().getLights()[0]
if (source.value == 'HeadLight')
    light.setLightTypeToHeadLight()
else if (source.value == 'CameraLight')
    light.setLightTypeToCameraLight()
else if (source.value == 'SceneLight')
    light.setLightTypeToSceneLight()
target.renderer_el.getRenderWindow().render()
"""})

light_intensity.jslink(vtkpan, code={'value':"""
const light = target.renderer_el.getRenderer().getLights()[0]
light.setIntensity(source.value)
target.renderer_el.getRenderWindow().render()
"""})


bind_and_orient.jslink(vtkpan, code = {'active':"""
target.orientation_widget = source.active.includes(0)
target.enable_keybindings = source.active.includes(1)
"""})

reset_camera.js_on_click(args={'target': vtkpan, 'initial_camera':initial_camera_pos},
                         code="target.camera = initial_camera");

background_color.jslink(vtkpan, code={'value':"""
const hextoarr = (color) => {return [parseInt(color.slice(1,3),16)/255, parseInt(color.slice(3,5),16)/255, parseInt(color.slice(5,7),16)/255]}
target.renderer_el.getRenderer().setBackground(hextoarr(source.color))
target.renderer_el.getRenderWindow().render()
"""});

opacity.jscallback(args={"target":vtkpan, "actor_selection":actor_selection}, value="""
if (actor_selection.value!="None"){
    const actor = target.getActors(actor_selection.value)[0]
    actor.getProperty().setOpacity(source.value)
    target.renderer_el.getRenderWindow().render()
}
""")

lighting.jscallback(args={"target":vtkpan, "actor_selection":actor_selection}, value="""
if (actor_selection.value!="None"){
    const actor = target.getActors(actor_selection.value)[0]
    actor.getProperty().setLighting(source.active)
    target.renderer_el.getRenderWindow().render()
}
""")

edges.jscallback(args={"target":vtkpan, "actor_selection":actor_selection}, value="""
if (actor_selection.value!="None"){
    const actor = target.getActors(actor_selection.value)[0]
    actor.getProperty().setEdgeVisibility(source.active)
    target.renderer_el.getRenderWindow().render()
}
""")

interpolation.jscallback(args={"target":vtkpan, "actor_selection":actor_selection}, value="""
if (actor_selection.value!="None"){
    const actor = target.getActors(actor_selection.value)[0]
    if(source.value=="Flat"){
        actor.getProperty().setInterpolationToFlat()
    }else{
        actor.getProperty().setInterpolationToPhong()
    }
    target.renderer_el.getRenderWindow().render()
}
""")

edges_color.jscallback(args={"target":vtkpan, "actor_selection":actor_selection}, value="""
if (actor_selection.value!="None"){
    const hextoarr = (color) => {return [parseInt(color.slice(1,3),16)/255, parseInt(color.slice(3,5),16)/255, parseInt(color.slice(5,7),16)/255]}
    const actor = target.getActors(actor_selection.value)[0]
    actor.getProperty().setEdgeColor(hextoarr(source.color))
    target.renderer_el.getRenderWindow().render()
}
""")

representation.jscallback(args={"target":vtkpan, "actor_selection":actor_selection}, value="""
if (actor_selection.value!="None"){
    const actor = target.getActors(actor_selection.value)[0]
    if(source.value=="Points"){
        actor.getProperty().setRepresentationToPoints()
    }else if(source.value=="Wireframe"){
        actor.getProperty().setRepresentationToWireframe()
    }else if(source.value=="Surface"){
        actor.getProperty().setRepresentationToSurface()
    }
    target.renderer_el.getRenderWindow().render()
}
""")

frontface_culling.jscallback(args={"target":vtkpan, "actor_selection":actor_selection}, value="""
if (actor_selection.value!="None"){
    const actor = target.getActors(actor_selection.value)[0]
    actor.getProperty().setFrontfaceCulling(source.active)
    target.renderer_el.getRenderWindow().render()
}
""")

backface_culling.jscallback(args={"target":vtkpan, "actor_selection":actor_selection}, value="""
if (actor_selection.value!="None"){
    const actor = target.getActors(actor_selection.value)[0]
    actor.getProperty().setBackfaceCulling(source.active)
    target.renderer_el.getRenderWindow().render()
}
""")

ambient.jscallback(args={"target":vtkpan, "actor_selection":actor_selection}, value="""
if (actor_selection.value!="None"){
    const actor = target.getActors(actor_selection.value)[0]
    actor.getProperty().setAmbient(source.value)
    target.renderer_el.getRenderWindow().render()
}
""")

diffuse.jscallback(args={"target":vtkpan, "actor_selection":actor_selection}, value="""
if (actor_selection.value!="None"){
    const actor = target.getActors(actor_selection.value)[0]
    actor.getProperty().setDiffuse(source.value)
    target.renderer_el.getRenderWindow().render()
}
""")

specular.jscallback(args={"target":vtkpan, "actor_selection":actor_selection}, value="""
if (actor_selection.value!="None"){
    const actor = target.getActors(actor_selection.value)[0]
    actor.getProperty().setSpecular(source.value)
    target.renderer_el.getRenderWindow().render()
}
""")

specular_power.jscallback(args={"target":vtkpan, "actor_selection":actor_selection}, value="""
if (actor_selection.value!="None"){
    const actor = target.getActors(actor_selection.value)[0]
    actor.getProperty().setSpecularPower(source.value)
    target.renderer_el.getRenderWindow().render()
}
""")

actor_selection.jslink(target=vtkpan, code = {'value' : """
if (source.value!="None"){
    const actor = target.getActors(source.value)[0]
    target.outline.setInputData(actor.getMapper().getInputData())
    target.renderer_el.getRenderer().addActor(target.outline_actor)
    
    //synchronize actor props and widgets values
    const properties = actor.getProperty()
    opacity.setv({value: properties.getOpacity()}, {silent: true})
    lighting.setv({active: !!properties.getLighting()}, {silent: true})
    edges.active = !!properties.getEdgeVisibility()
    const actor_color = "#" + properties.getEdgeColor().map((c) => ("0" + Math.round(255*c).toString(16,2)).slice(-2)).join('')
    edges_color.setv({color: actor_color}, {silent: true})
    const interp_string = properties.getInterpolationAsString()
    interpolation.setv({value: interp_string[0] + interp_string.slice(1).toLocaleLowerCase()}, {silent: true})
    const repr_string = properties.getRepresentationAsString()
    representation.setv({value: repr_string[0] + repr_string.slice(1).toLocaleLowerCase()}, {silent: true})
    frontface_culling.setv({active: !!properties.getFrontfaceCulling()}, {silent: true})
    backface_culling.setv({active: !!properties.getBackfaceCulling()}, {silent: true})
    ambient.setv({value: properties.getAmbient()}, {silent: true})
    diffuse.setv({value: properties.getDiffuse()}, {silent: true})
    specular.setv({value: properties.getSpecular()}, {silent: true})
    specular_power.setv({value: properties.getSpecularPower()}, {silent: true})
    //enable widgets modifications
    opacity.disabled = false
    lighting.disabled = false
    interpolation.disabled = false
    edges.disabled = false
    edges_color.disabled = false
    representation.disabled = false
    frontface_culling.disabled = false
    backface_culling.disabled = false
    ambient.disabled = false
    diffuse.disabled = false
    specular.disabled = false
    specular_power.disabled = false
} else {
    target.renderer_el.getRenderer().removeActor(target.outline_actor)
    opacity.disabled = true
    lighting.disabled = true
    interpolation.disabled = true
    edges.disabled = true
    edges_color.disabled = true
    representation.disabled = true
    frontface_culling.disabled = true
    backface_culling.disabled = true
    ambient.disabled = true
    diffuse.disabled = true
    specular.disabled = true
    specular_power.disabled = true
}
target.renderer_el.getRenderWindow().render()

"""}, args={"opacity":opacity, "lighting":lighting, "interpolation": interpolation, "edges": edges, "edges_color": edges_color,
            "representation": representation, "frontface_culling": frontface_culling, "backface_culling": backface_culling,
            "ambient": ambient, "diffuse": diffuse, "specular": specular, "specular_power": specular_power});


# Display all together

# In[ ]:


settings = pn.Column(actor_selection,pn.Tabs(('Scene controller', pn.Column(scene_props, light_props)), ('Actor properties',actor_props)))
pn.Row(vtkpan, settings)


# ## App
# 
# Lets wrap it into nice template that can be served via \`panel serve VTKInteractive.ipynb\`

# In[ ]:


description="This example demonstrates the use of **VTK and pyvista** to display a *scene*"
pn.template.FastListTemplate(site="Panel", title="VTK Interactive", sidebar=[settings], main=[description, vtkpan]).servable();



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