# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdribbon

"""
    'feffery'_antdribbon(;kwargs...)
    'feffery'_antdribbon(children::Any;kwargs...)
    'feffery'_antdribbon(children_maker::Function;kwargs...)


An AntdRibbon component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `className` (String; optional)
- `color` (String; optional)
- `key` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `placement` (a value equal to: 'start', 'end'; optional)
- `style` (Dict; optional)
- `text` (String; optional)
"""
function 'feffery'_antdribbon(; kwargs...)
        available_props = Symbol[:children, :id, :className, :color, :key, :loading_state, :placement, :style, :text]
        wild_props = Symbol[]
        return Component("'feffery'_antdribbon", "AntdRibbon", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdribbon(children::Any; kwargs...) = 'feffery'_antdribbon(;kwargs..., children = children)
'feffery'_antdribbon(children_maker::Function; kwargs...) = 'feffery'_antdribbon(children_maker(); kwargs...)

