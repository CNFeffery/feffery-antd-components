# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antddatepicker

"""
    'feffery'_antddatepicker(;kwargs...)

An AntdDatePicker component.

Keyword arguments:
- `id` (String; optional)
- `allowClear` (Bool; optional)
- `bordered` (Bool; optional)
- `className` (String; optional)
- `defaultPickerValue` (optional): . defaultPickerValue has the following type: lists containing elements 'value', 'format'.
Those elements have the following types:
  - `value` (String; optional)
  - `format` (String; optional)
- `disabled` (Bool; optional)
- `loading_state` (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `picker` (a value equal to: 'date', 'week', 'month', 'quarter', 'year'; optional)
- `placeholder` (String; optional)
- `selectedDate` (String; optional)
- `showTime` (Bool; optional)
- `size` (a value equal to: 'small', 'middle', 'large'; optional)
- `style` (Dict; optional)
"""
function 'feffery'_antddatepicker(; kwargs...)
        available_props = Symbol[:id, :allowClear, :bordered, :className, :defaultPickerValue, :disabled, :loading_state, :picker, :placeholder, :selectedDate, :showTime, :size, :style]
        wild_props = Symbol[]
        return Component("'feffery'_antddatepicker", "AntdDatePicker", "feffery_antd_components", available_props, wild_props; kwargs...)
end

