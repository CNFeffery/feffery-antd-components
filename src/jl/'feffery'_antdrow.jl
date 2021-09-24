# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdrow

"""
    'feffery'_antdrow(;kwargs...)
    'feffery'_antdrow(children::Any;kwargs...)
    'feffery'_antdrow(children_maker::Function;kwargs...)


An AntdRow component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The content of the tab - will only be displayed if this tab is selected
- `id` (String; optional)
- `align` (String; optional)
- `className` (String; optional)
- `gutter` (Real | String | Array of Reals; optional)
- `justify` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `style` (Dict; optional)
- `wrap` (Bool; optional)
"""
function 'feffery'_antdrow(; kwargs...)
        available_props = Symbol[:children, :id, :align, :className, :gutter, :justify, :loading_state, :style, :wrap]
        wild_props = Symbol[]
        return Component("'feffery'_antdrow", "AntdRow", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdrow(children::Any; kwargs...) = 'feffery'_antdrow(;kwargs..., children = children)
'feffery'_antdrow(children_maker::Function; kwargs...) = 'feffery'_antdrow(children_maker(); kwargs...)

