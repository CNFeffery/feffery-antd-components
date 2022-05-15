# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antddrawer

"""
    'feffery'_antddrawer(;kwargs...)
    'feffery'_antddrawer(children::Any;kwargs...)
    'feffery'_antddrawer(children_maker::Function;kwargs...)


An AntdDrawer component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `className` (String; optional)
- `closable` (Bool; optional)
- `containerId` (String; optional)
- `destroyOnClose` (Bool; optional)
- `forceRender` (Bool; optional)
- `height` (Real; optional)
- `key` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `mask` (Bool; optional)
- `maskClosable` (Bool; optional)
- `placement` (a value equal to: 'left', 'right', 'top', 'bottom'; optional)
- `style` (Dict; optional)
- `title` (String; optional)
- `visible` (Bool; optional)
- `width` (Real; optional)
- `zIndex` (Real; optional)
"""
function 'feffery'_antddrawer(; kwargs...)
        available_props = Symbol[:children, :id, :className, :closable, :containerId, :destroyOnClose, :forceRender, :height, :key, :loading_state, :mask, :maskClosable, :placement, :style, :title, :visible, :width, :zIndex]
        wild_props = Symbol[]
        return Component("'feffery'_antddrawer", "AntdDrawer", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antddrawer(children::Any; kwargs...) = 'feffery'_antddrawer(;kwargs..., children = children)
'feffery'_antddrawer(children_maker::Function; kwargs...) = 'feffery'_antddrawer(children_maker(); kwargs...)

