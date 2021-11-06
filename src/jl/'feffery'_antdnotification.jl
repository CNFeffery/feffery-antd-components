# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdnotification

"""
    'feffery'_antdnotification(;kwargs...)

An AntdNotification component.

Keyword arguments:
- `id` (String; optional)
- `bottom` (Real; optional)
- `className` (String; optional)
- `description` (String; optional)
- `duration` (Real; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `message` (String; optional)
- `placement` (a value equal to: 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'; optional)
- `style` (Dict; optional)
- `top` (Real; optional)
- `type` (optional)
"""
function 'feffery'_antdnotification(; kwargs...)
        available_props = Symbol[:id, :bottom, :className, :description, :duration, :loading_state, :message, :placement, :style, :top, :type]
        wild_props = Symbol[]
        return Component("'feffery'_antdnotification", "AntdNotification", "feffery_antd_components", available_props, wild_props; kwargs...)
end

