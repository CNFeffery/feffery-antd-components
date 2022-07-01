# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdpopconfirm

"""
    'feffery'_antdpopconfirm(;kwargs...)
    'feffery'_antdpopconfirm(children::Any;kwargs...)
    'feffery'_antdpopconfirm(children_maker::Function;kwargs...)


An AntdPopconfirm component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The content of the tab - will only be displayed if this tab is selected
- `id` (String; optional)
- `cancelButtonProps` (Dict; optional)
- `cancelCounts` (Real; optional)
- `cancelText` (String; optional)
- `className` (String; optional)
- `confirmCounts` (Real; optional)
- `containerStrategy` (a value equal to: 'parent', 'body'; optional)
- `disabled` (Bool; optional)
- `key` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `locale` (a value equal to: 'zh-cn', 'en-us'; optional)
- `mouseEnterDelay` (Real; optional)
- `mouseLeaveDelay` (Real; optional)
- `okButtonProps` (Dict; optional)
- `okText` (String; optional)
- `overlayInnerStyle` (Dict; optional)
- `overlayStyle` (Dict; optional)
- `placement` (a value equal to: 'top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom'; optional)
- `style` (Dict; optional)
- `title` (a list of or a singular dash component, string or number; optional)
- `trigger` (a value equal to: 'hover', 'focus', 'click' | Array of a value equal to: 'hover', 'focus', 'click's; optional)
"""
function 'feffery'_antdpopconfirm(; kwargs...)
        available_props = Symbol[:children, :id, :cancelButtonProps, :cancelCounts, :cancelText, :className, :confirmCounts, :containerStrategy, :disabled, :key, :loading_state, :locale, :mouseEnterDelay, :mouseLeaveDelay, :okButtonProps, :okText, :overlayInnerStyle, :overlayStyle, :placement, :style, :title, :trigger]
        wild_props = Symbol[]
        return Component("'feffery'_antdpopconfirm", "AntdPopconfirm", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdpopconfirm(children::Any; kwargs...) = 'feffery'_antdpopconfirm(;kwargs..., children = children)
'feffery'_antdpopconfirm(children_maker::Function; kwargs...) = 'feffery'_antdpopconfirm(children_maker(); kwargs...)

