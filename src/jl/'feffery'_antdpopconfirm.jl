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
- `cancelButtonProps` (optional): . cancelButtonProps has the following type: lists containing elements 'size', 'type', 'danger', 'disabled', 'shape'.
Those elements have the following types:
  - `size` (a value equal to: 'small', 'middle', 'large'; optional)
  - `type` (a value equal to: 'primary', 'ghost', 'dashed', 'link', 'text', 'default'; optional)
  - `danger` (Bool; optional)
  - `disabled` (Bool; optional)
  - `shape` (a value equal to: 'circle', 'round'; optional)
- `cancelCounts` (Real; optional)
- `cancelText` (a list of or a singular dash component, string or number; optional)
- `className` (String | Dict; optional)
- `confirmCounts` (Real; optional)
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
- `okButtonProps` (optional): . okButtonProps has the following type: lists containing elements 'size', 'type', 'danger', 'disabled', 'shape'.
Those elements have the following types:
  - `size` (a value equal to: 'small', 'middle', 'large'; optional)
  - `type` (a value equal to: 'primary', 'ghost', 'dashed', 'link', 'text', 'default'; optional)
  - `danger` (Bool; optional)
  - `disabled` (Bool; optional)
  - `shape` (a value equal to: 'circle', 'round'; optional)
- `okText` (a list of or a singular dash component, string or number; optional)
- `overlayClassName` (String | Dict; optional)
- `overlayInnerStyle` (Dict; optional)
- `overlayStyle` (Dict; optional)
- `placement` (a value equal to: 'top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom'; optional)
- `popupContainer` (a value equal to: 'parent', 'body'; optional)
- `style` (Dict; optional)
- `title` (a list of or a singular dash component, string or number; optional)
- `trigger` (a value equal to: 'hover', 'focus', 'click' | Array of a value equal to: 'hover', 'focus', 'click's; optional)
"""
function 'feffery'_antdpopconfirm(; kwargs...)
        available_props = Symbol[:children, :id, :cancelButtonProps, :cancelCounts, :cancelText, :className, :confirmCounts, :disabled, :key, :loading_state, :locale, :mouseEnterDelay, :mouseLeaveDelay, :okButtonProps, :okText, :overlayClassName, :overlayInnerStyle, :overlayStyle, :placement, :popupContainer, :style, :title, :trigger]
        wild_props = Symbol[]
        return Component("'feffery'_antdpopconfirm", "AntdPopconfirm", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdpopconfirm(children::Any; kwargs...) = 'feffery'_antdpopconfirm(;kwargs..., children = children)
'feffery'_antdpopconfirm(children_maker::Function; kwargs...) = 'feffery'_antdpopconfirm(children_maker(); kwargs...)

