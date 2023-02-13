# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdformitem

"""
    'feffery'_antdformitem(;kwargs...)
    'feffery'_antdformitem(children::Any;kwargs...)
    'feffery'_antdformitem(children_maker::Function;kwargs...)


An AntdFormItem component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The content of the tab - will only be displayed if this tab is selected
- `id` (String; optional)
- `className` (String | Dict; optional)
- `colon` (Bool; optional)
- `extra` (a list of or a singular dash component, string or number; optional)
- `help` (a list of or a singular dash component, string or number; optional)
- `hidden` (Bool; optional)
- `key` (String; optional)
- `label` (a list of or a singular dash component, string or number; optional)
- `labelAlign` (a value equal to: 'left', 'right'; optional)
- `labelCol` (optional): . labelCol has the following type: lists containing elements 'span', 'offset'.
Those elements have the following types:
  - `span` (Real; optional)
  - `offset` (Real; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `required` (Bool; optional)
- `style` (Dict; optional)
- `tooltip` (a list of or a singular dash component, string or number; optional)
- `validateStatus` (a value equal to: 'success', 'warning', 'error', 'validating'; optional)
- `wrapperCol` (optional): . wrapperCol has the following type: lists containing elements 'span', 'offset'.
Those elements have the following types:
  - `span` (Real; optional)
  - `offset` (Real; optional)
"""
function 'feffery'_antdformitem(; kwargs...)
        available_props = Symbol[:children, :id, :className, :colon, :extra, :help, :hidden, :key, :label, :labelAlign, :labelCol, :loading_state, :required, :style, :tooltip, :validateStatus, :wrapperCol]
        wild_props = Symbol[]
        return Component("'feffery'_antdformitem", "AntdFormItem", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdformitem(children::Any; kwargs...) = 'feffery'_antdformitem(;kwargs..., children = children)
'feffery'_antdformitem(children_maker::Function; kwargs...) = 'feffery'_antdformitem(children_maker(); kwargs...)

