# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdfooter

"""
    'feffery'_antdfooter(;kwargs...)
    'feffery'_antdfooter(children::Any;kwargs...)
    'feffery'_antdfooter(children_maker::Function;kwargs...)


An AntdFooter component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The content of the tab - will only be displayed if this tab is selected
- `id` (String; optional)
- `className` (String | Dict; optional)
- `key` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `style` (Dict; optional)
"""
function 'feffery'_antdfooter(; kwargs...)
        available_props = Symbol[:children, :id, :className, :key, :loading_state, :style]
        wild_props = Symbol[]
        return Component("'feffery'_antdfooter", "AntdFooter", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdfooter(children::Any; kwargs...) = 'feffery'_antdfooter(;kwargs..., children = children)
'feffery'_antdfooter(children_maker::Function; kwargs...) = 'feffery'_antdfooter(children_maker(); kwargs...)

