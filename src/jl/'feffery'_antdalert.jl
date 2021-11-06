# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdalert

"""
    'feffery'_antdalert(;kwargs...)
    'feffery'_antdalert(children::Any;kwargs...)
    'feffery'_antdalert(children_maker::Function;kwargs...)


An AntdAlert component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `className` (String; optional)
- `closable` (Bool; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `message` (String | Array of Strings; optional)
- `renderLoopText` (Bool; optional)
- `showIcon` (Bool; optional)
- `style` (Dict; optional)
- `type` (a value equal to: 'success', 'info', 'warning', 'error'; optional)
"""
function 'feffery'_antdalert(; kwargs...)
        available_props = Symbol[:children, :id, :className, :closable, :loading_state, :message, :renderLoopText, :showIcon, :style, :type]
        wild_props = Symbol[]
        return Component("'feffery'_antdalert", "AntdAlert", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdalert(children::Any; kwargs...) = 'feffery'_antdalert(;kwargs..., children = children)
'feffery'_antdalert(children_maker::Function; kwargs...) = 'feffery'_antdalert(children_maker(); kwargs...)

