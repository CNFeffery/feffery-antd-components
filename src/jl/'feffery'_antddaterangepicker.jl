# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antddaterangepicker

"""
    'feffery'_antddaterangepicker(;kwargs...)

An AntdDateRangePicker component.

Keyword arguments:
- `id` (String; optional)
- `bordered` (Bool; optional)
- `className` (String; optional)
- `defaultPickerValue` (optional): . defaultPickerValue has the following type: lists containing elements 'value', 'format'.
Those elements have the following types:
  - `value` (String; optional)
  - `format` (String; optional)
- `disabledEnd` (Bool; optional)
- `disabledStart` (Bool; optional)
- `loading_state` (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `picker` (String; optional)
- `placeholderEnd` (String; optional)
- `placeholderStart` (String; optional)
- `selectedEndDate` (String; optional)
- `selectedStartDate` (String; optional)
- `showTime` (Bool; optional)
- `style` (Dict; optional)
"""
function 'feffery'_antddaterangepicker(; kwargs...)
        available_props = Symbol[:id, :bordered, :className, :defaultPickerValue, :disabledEnd, :disabledStart, :loading_state, :picker, :placeholderEnd, :placeholderStart, :selectedEndDate, :selectedStartDate, :showTime, :style]
        wild_props = Symbol[]
        return Component("'feffery'_antddaterangepicker", "AntdDateRangePicker", "feffery_antd_components", available_props, wild_props; kwargs...)
end

