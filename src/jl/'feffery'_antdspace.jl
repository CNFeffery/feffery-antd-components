# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdspace

"""
    'feffery'_antdspace(;kwargs...)
    'feffery'_antdspace(children::Any;kwargs...)
    'feffery'_antdspace(children_maker::Function;kwargs...)


An AntdSpace component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The content of the tab - will only be displayed if this tab is selected
- `id` (String; optional)
- `addSplitLine` (Bool; optional)
- `align` (a value equal to: 'start', 'end', 'center', 'baseline'; optional)
- `className` (String | Dict; optional)
- `customSplit` (a list of or a singular dash component, string or number; optional)
- `direction` (a value equal to: 'vertical', 'horizontal'; optional)
- `key` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `size` (a value equal to: 'small', 'middle', 'large' | Real; optional)
- `style` (Dict; optional)
- `wrap` (Bool; optional)
"""
function 'feffery'_antdspace(; kwargs...)
        available_props = Symbol[:children, :id, :addSplitLine, :align, :className, :customSplit, :direction, :key, :loading_state, :size, :style, :wrap]
        wild_props = Symbol[]
        return Component("'feffery'_antdspace", "AntdSpace", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdspace(children::Any; kwargs...) = 'feffery'_antdspace(;kwargs..., children = children)
'feffery'_antdspace(children_maker::Function; kwargs...) = 'feffery'_antdspace(children_maker(); kwargs...)

