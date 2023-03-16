# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdmessage

"""
    'feffery'_antdmessage(;kwargs...)

An AntdMessage component.

Keyword arguments:
- `id` (String; optional)
- `className` (String; optional)
- `content` (String; optional)
- `duration` (Real; optional)
- `icon` (String; optional)
- `key` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `maxCount` (Real; optional)
- `style` (Dict; optional)
- `top` (Real; optional)
- `type` (a value equal to: 'default', 'success', 'error', 'info', 'warning'; optional)
"""
function 'feffery'_antdmessage(; kwargs...)
        available_props = Symbol[:id, :className, :content, :duration, :icon, :key, :loading_state, :maxCount, :style, :top, :type]
        wild_props = Symbol[]
        return Component("'feffery'_antdmessage", "AntdMessage", "feffery_antd_components", available_props, wild_props; kwargs...)
end

