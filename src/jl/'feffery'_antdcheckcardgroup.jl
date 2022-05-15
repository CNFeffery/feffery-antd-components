# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdcheckcardgroup

"""
    'feffery'_antdcheckcardgroup(;kwargs...)
    'feffery'_antdcheckcardgroup(children::Any;kwargs...)
    'feffery'_antdcheckcardgroup(children_maker::Function;kwargs...)


An AntdCheckCardGroup component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `bordered` (Bool; optional)
- `className` (String; optional)
- `defaultValue` (String | Array of Strings; optional)
- `disabled` (Bool; optional)
- `key` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `multiple` (Bool; optional)
- `size` (a value equal to: 'small', 'default', 'large'; optional)
- `style` (Dict; optional)
- `value` (String | Array of Strings; optional)
"""
function 'feffery'_antdcheckcardgroup(; kwargs...)
        available_props = Symbol[:children, :id, :bordered, :className, :defaultValue, :disabled, :key, :loading_state, :multiple, :size, :style, :value]
        wild_props = Symbol[]
        return Component("'feffery'_antdcheckcardgroup", "AntdCheckCardGroup", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdcheckcardgroup(children::Any; kwargs...) = 'feffery'_antdcheckcardgroup(;kwargs..., children = children)
'feffery'_antdcheckcardgroup(children_maker::Function; kwargs...) = 'feffery'_antdcheckcardgroup(children_maker(); kwargs...)

