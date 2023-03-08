# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdtooltip

"""
    'feffery'_antdtooltip(;kwargs...)
    'feffery'_antdtooltip(children::Any;kwargs...)
    'feffery'_antdtooltip(children_maker::Function;kwargs...)


An AntdTooltip component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `arrowPointAtCenter` (Bool; optional)
- `className` (String | Dict; optional)
- `color` (String; optional)
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
- `popupContainer` (a value equal to: 'parent', 'body'; optional)
- `style` (Dict; optional)
- `title` (a list of or a singular dash component, string or number; optional)
- `trigger` (a value equal to: 'hover', 'focus', 'click' | Array of a value equal to: 'hover', 'focus', 'click's; optional)
- `zIndex` (Real; optional)
"""
function 'feffery'_antdtooltip(; kwargs...)
        available_props = Symbol[:children, :id, :arrowPointAtCenter, :className, :color, :key, :loading_state, :mouseEnterDelay, :mouseLeaveDelay, :overlayInnerStyle, :overlayStyle, :placement, :popupContainer, :style, :title, :trigger, :zIndex]
        wild_props = Symbol[]
        return Component("'feffery'_antdtooltip", "AntdTooltip", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdtooltip(children::Any; kwargs...) = 'feffery'_antdtooltip(;kwargs..., children = children)
'feffery'_antdtooltip(children_maker::Function; kwargs...) = 'feffery'_antdtooltip(children_maker(); kwargs...)

