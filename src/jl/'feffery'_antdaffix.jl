# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdaffix

"""
    'feffery'_antdaffix(;kwargs...)
    'feffery'_antdaffix(children::Any;kwargs...)
    'feffery'_antdaffix(children_maker::Function;kwargs...)


An AntdAffix component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `className` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `offsetBottom` (Real; optional)
- `offsetTop` (Real; optional)
- `style` (Dict; optional)
- `target` (String; optional)
"""
function 'feffery'_antdaffix(; kwargs...)
        available_props = Symbol[:children, :id, :className, :loading_state, :offsetBottom, :offsetTop, :style, :target]
        wild_props = Symbol[]
        return Component("'feffery'_antdaffix", "AntdAffix", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdaffix(children::Any; kwargs...) = 'feffery'_antdaffix(;kwargs..., children = children)
'feffery'_antdaffix(children_maker::Function; kwargs...) = 'feffery'_antdaffix(children_maker(); kwargs...)

