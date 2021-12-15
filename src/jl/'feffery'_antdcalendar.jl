# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdcalendar

"""
    'feffery'_antdcalendar(;kwargs...)

An AntdCalendar component.

Keyword arguments:
- `id` (String; optional)
- `className` (String; optional)
- `defaultValue` (optional): . defaultValue has the following type: lists containing elements 'value', 'format'.
Those elements have the following types:
  - `value` (String; optional)
  - `format` (String; optional)
- `disabledDates` (optional): . disabledDates has the following type: lists containing elements 'dates', 'format'.
Those elements have the following types:
  - `dates` (Array of Strings; optional)
  - `format` (String; optional)
- `format` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `size` (a value equal to: 'default', 'large'; optional)
- `style` (Dict; optional)
- `validRange` (optional): . validRange has the following type: Array of lists containing elements 'value', 'format'.
Those elements have the following types:
  - `value` (String; optional)
  - `format` (String; optional)s
"""
function 'feffery'_antdcalendar(; kwargs...)
        available_props = Symbol[:id, :className, :defaultValue, :disabledDates, :format, :loading_state, :size, :style, :validRange]
        wild_props = Symbol[]
        return Component("'feffery'_antdcalendar", "AntdCalendar", "feffery_antd_components", available_props, wild_props; kwargs...)
end

