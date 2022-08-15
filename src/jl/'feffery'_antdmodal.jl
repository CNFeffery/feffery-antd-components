# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdmodal

"""
    'feffery'_antdmodal(;kwargs...)
    'feffery'_antdmodal(children::Any;kwargs...)
    'feffery'_antdmodal(children_maker::Function;kwargs...)


An AntdModal component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `cancelButtonProps` (Dict; optional)
- `cancelCounts` (Real; optional)
- `cancelText` (String; optional)
- `centered` (Bool; optional)
- `className` (String; optional)
- `closable` (Bool; optional)
- `closeCounts` (Real; optional)
- `key` (String; optional)
- `keyboard` (Bool; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `locale` (a value equal to: 'zh-cn', 'en-us'; optional)
- `mask` (Bool; optional)
- `maskClosable` (Bool; optional)
- `okButtonProps` (Dict; optional)
- `okClickClose` (Bool; optional)
- `okCounts` (Real; optional)
- `okText` (String; optional)
- `renderFooter` (Bool; optional)
- `style` (Dict; optional)
- `title` (a list of or a singular dash component, string or number; optional)
- `visible` (Bool; optional)
- `width` (Real | String; optional)
"""
function 'feffery'_antdmodal(; kwargs...)
        available_props = Symbol[:children, :id, :cancelButtonProps, :cancelCounts, :cancelText, :centered, :className, :closable, :closeCounts, :key, :keyboard, :loading_state, :locale, :mask, :maskClosable, :okButtonProps, :okClickClose, :okCounts, :okText, :renderFooter, :style, :title, :visible, :width]
        wild_props = Symbol[]
        return Component("'feffery'_antdmodal", "AntdModal", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdmodal(children::Any; kwargs...) = 'feffery'_antdmodal(;kwargs..., children = children)
'feffery'_antdmodal(children_maker::Function; kwargs...) = 'feffery'_antdmodal(children_maker(); kwargs...)

