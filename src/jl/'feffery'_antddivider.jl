# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antddivider

"""
    'feffery'_antddivider(;kwargs...)
    'feffery'_antddivider(children::Any;kwargs...)
    'feffery'_antddivider(children_maker::Function;kwargs...)


An AntdDivider component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): Text content of the inline text.
- `id` (String; optional): Component id.
- `className` (String | Dict; optional): CSS class name.
- `direction` (a value equal to: "horizontal", "vertical"; optional): Direction of the divider. Possible values are 'horizontal' and 'vertical'. Default is 'horizontal'.
- `fontColor` (String; optional): Color of the inline text. Accepts valid color values in CSS.
- `fontFamily` (String; optional): Font family of the inline text. Accepts valid font-family values in CSS.
- `fontSize` (String; optional): Font size of the inline text. Accepts valid font-size values in CSS.
- `fontStyle` (String; optional): Font style of the inline text. Accepts valid font-style values in CSS.
- `fontWeight` (String; optional): Font weight of the inline text. Accepts valid font-weight values in CSS.
- `innerTextOrientation` (a value equal to: "left", "center", "right"; optional): Text alignment of the inline text. Possible values are 'left', 'center', and 'right'. Default is 'center'.
- `isDashed` (Bool; optional): Whether to render the divider as dashed line. true for dashed line, false for solid line. Default is false.
- `key` (String; optional): A unique identifier key used for refreshing assistance.
- `lineColor` (String; optional): Color of the divider. Accepts valid color values in CSS.
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
"""
function 'feffery'_antddivider(; kwargs...)
        available_props = Symbol[:children, :id, :className, :direction, :fontColor, :fontFamily, :fontSize, :fontStyle, :fontWeight, :innerTextOrientation, :isDashed, :key, :lineColor, :loading_state]
        wild_props = Symbol[]
        return Component("'feffery'_antddivider", "AntdDivider", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antddivider(children::Any; kwargs...) = 'feffery'_antddivider(;kwargs..., children = children)
'feffery'_antddivider(children_maker::Function; kwargs...) = 'feffery'_antddivider(children_maker(); kwargs...)

