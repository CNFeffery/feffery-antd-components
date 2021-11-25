# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdtimepicker

"""
    'feffery'_antdtimepicker(;kwargs...)

An AntdTimePicker component.

Keyword arguments:
- `id` (String; optional)
- `allowClear` (Bool; optional)
- `bordered` (Bool; optional)
- `className` (String; optional)
- `defaultValue` (optional): . defaultValue has the following type: lists containing elements 'value', 'format'.
Those elements have the following types:
  - `value` (String; optional)
  - `format` (String; optional)
- `disabled` (Bool; optional)
- `format` (String; optional)
- `hourStep` (Real; optional)
- `inputReadOnly` (Bool; optional)
- `loading_state` (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `minuteStep` (Real; optional)
- `placeholder` (String; optional)
- `secondStep` (Real; optional)
- `selectedTime` (String; optional)
- `size` (a value equal to: 'small', 'middle', 'large'; optional)
- `style` (Dict; optional)
- `use12Hours` (Bool; optional)
"""
function 'feffery'_antdtimepicker(; kwargs...)
        available_props = Symbol[:id, :allowClear, :bordered, :className, :defaultValue, :disabled, :format, :hourStep, :inputReadOnly, :loading_state, :minuteStep, :placeholder, :secondStep, :selectedTime, :size, :style, :use12Hours]
        wild_props = Symbol[]
        return Component("'feffery'_antdtimepicker", "AntdTimePicker", "feffery_antd_components", available_props, wild_props; kwargs...)
end

