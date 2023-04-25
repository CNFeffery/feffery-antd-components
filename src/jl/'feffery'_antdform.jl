# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdform

"""
    'feffery'_antdform(;kwargs...)
    'feffery'_antdform(children::Any;kwargs...)
    'feffery'_antdform(children_maker::Function;kwargs...)


An AntdForm component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional): The content of the tab - will only be displayed if this tab is selected
- `id` (String; optional)
- `className` (String | Dict; optional)
- `colon` (Bool; optional)
- `disabled` (Bool; optional)
- `key` (String; optional)
- `labelAlign` (a value equal to: 'left', 'right'; optional)
- `labelCol` (optional): . labelCol has the following type: lists containing elements 'span', 'offset'.
Those elements have the following types:
  - `span` (Real; optional)
  - `offset` (Real; optional)
- `layout` (a value equal to: 'horizontal', 'vertical', 'inline'; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `size` (a value equal to: 'small', 'middle', 'large'; optional)
- `style` (Dict; optional)
- `wrapperCol` (optional): . wrapperCol has the following type: lists containing elements 'span', 'offset'.
Those elements have the following types:
  - `span` (Real; optional)
  - `offset` (Real; optional)
"""
function 'feffery'_antdform(; kwargs...)
        available_props = Symbol[:children, :id, :className, :colon, :disabled, :key, :labelAlign, :labelCol, :layout, :loading_state, :size, :style, :wrapperCol]
        wild_props = Symbol[]
        return Component("'feffery'_antdform", "AntdForm", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdform(children::Any; kwargs...) = 'feffery'_antdform(;kwargs..., children = children)
'feffery'_antdform(children_maker::Function; kwargs...) = 'feffery'_antdform(children_maker(); kwargs...)

