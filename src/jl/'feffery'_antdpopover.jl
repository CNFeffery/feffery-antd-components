# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdpopover

"""
    'feffery'_antdpopover(;kwargs...)
    'feffery'_antdpopover(children::Any;kwargs...)
    'feffery'_antdpopover(children_maker::Function;kwargs...)


An AntdPopover component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The content of the tab - will only be displayed if this tab is selected
- `id` (String; optional)
- `className` (String; optional)
- `color` (String; optional)
- `content` (Array; optional)
- `key` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `mouseEnterDelay` (Real; optional)
- `mouseLeaveDelay` (Real; optional)
- `overlayInnerStyle` (Dict; optional)
- `overlayStyle` (Dict; optional)
- `placement` (a value equal to: 'top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom'; optional)
- `style` (Dict; optional)
- `title` (optional): . title has the following type: String | lists containing elements 'content', 'prefixIcon'.
Those elements have the following types:
  - `content` (String; optional)
  - `prefixIcon` (String; optional)
- `trigger` (a value equal to: 'hover', 'focus', 'click' | Array of a value equal to: 'hover', 'focus', 'click's; optional)
"""
function 'feffery'_antdpopover(; kwargs...)
        available_props = Symbol[:children, :id, :className, :color, :content, :key, :loading_state, :mouseEnterDelay, :mouseLeaveDelay, :overlayInnerStyle, :overlayStyle, :placement, :style, :title, :trigger]
        wild_props = Symbol[]
        return Component("'feffery'_antdpopover", "AntdPopover", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdpopover(children::Any; kwargs...) = 'feffery'_antdpopover(;kwargs..., children = children)
'feffery'_antdpopover(children_maker::Function; kwargs...) = 'feffery'_antdpopover(children_maker(); kwargs...)

