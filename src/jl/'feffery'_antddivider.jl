# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antddivider

"""
    'feffery'_antddivider(;kwargs...)
    'feffery'_antddivider(children::Any;kwargs...)
    'feffery'_antddivider(children_maker::Function;kwargs...)


An AntdDivider component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `className` (String; optional)
- `direction` (a value equal to: 'horizontal', 'vertical'; optional)
- `fontFamily` (String; optional)
- `fontSize` (String; optional)
- `fontStyle` (String; optional)
- `fontWeight` (String; optional)
- `innerTextOrientation` (a value equal to: 'left', 'center', 'right'; optional)
- `isDashed` (Bool; optional)
- `key` (String; optional)
- `lineColor` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
"""
function 'feffery'_antddivider(; kwargs...)
        available_props = Symbol[:children, :id, :className, :direction, :fontFamily, :fontSize, :fontStyle, :fontWeight, :innerTextOrientation, :isDashed, :key, :lineColor, :loading_state]
        wild_props = Symbol[]
        return Component("'feffery'_antddivider", "AntdDivider", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antddivider(children::Any; kwargs...) = 'feffery'_antddivider(;kwargs..., children = children)
'feffery'_antddivider(children_maker::Function; kwargs...) = 'feffery'_antddivider(children_maker(); kwargs...)

