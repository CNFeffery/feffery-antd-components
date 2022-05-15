# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdrate

"""
    'feffery'_antdrate(;kwargs...)

An AntdRate component.

Keyword arguments:
- `id` (String; optional)
- `allowClear` (Bool; optional)
- `allowHalf` (Bool; optional)
- `className` (String; optional)
- `count` (Real; optional)
- `defaultValue` (Real; optional)
- `disabled` (Bool; optional)
- `key` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `style` (Dict; optional)
- `tooltips` (Array of Strings; optional)
- `value` (Real; optional)
"""
function 'feffery'_antdrate(; kwargs...)
        available_props = Symbol[:id, :allowClear, :allowHalf, :className, :count, :defaultValue, :disabled, :key, :loading_state, :style, :tooltips, :value]
        wild_props = Symbol[]
        return Component("'feffery'_antdrate", "AntdRate", "feffery_antd_components", available_props, wild_props; kwargs...)
end

