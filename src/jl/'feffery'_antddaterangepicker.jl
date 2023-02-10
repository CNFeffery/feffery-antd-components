# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antddaterangepicker

"""
    'feffery'_antddaterangepicker(;kwargs...)

An AntdDateRangePicker component.

Keyword arguments:
- `id` (String; optional)
- `allowClear` (Bool; optional)
- `bordered` (Bool; optional)
- `className` (String | Dict; optional)
- `defaultPickerValue` (String; optional)
- `defaultValue` (Array of Strings; optional)
- `disabled` (Array of Bools; optional)
- `disabledDatesStrategy` (optional): . disabledDatesStrategy has the following type: Array of lists containing elements 'mode', 'target', 'value'.
Those elements have the following types:
  - `mode` (a value equal to: 'eq', 'ne', 'le', 'lt', 'ge', 'gt', 'in', 'not-in', 'in-enumerate-dates', 'not-in-enumerate-dates'; optional)
  - `target` (a value equal to: 'day', 'month', 'quarter', 'year', 'dayOfYear', 'dayOfWeek', 'specific-date'; optional)
  - `value` (Real | String | Array of Reals | Array of Strings; optional)s
- `format` (String; optional)
- `key` (String; optional)
- `loading_state` (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `locale` (a value equal to: 'zh-cn', 'en-us'; optional)
- `persisted_props` (Array of a value equal to: 'value's; optional): Properties whose user interactions will persist after refreshing the
component or the page. Since only `value` is allowed this prop can
normally be ignored.
- `persistence` (Bool | String | Real; optional): Used to allow user interactions in this component to be persisted when
the component - or the page - is refreshed. If `persisted` is truthy and
hasn't changed from its previous value, a `value` that the user has
changed while using the app will keep that change, as long as
the new `value` also matches what was given originally.
Used in conjunction with `persistence_type`.
- `persistence_type` (a value equal to: 'local', 'session', 'memory'; optional): Where persisted user changes will be stored:
memory: only kept in memory, reset on page refresh.
local: window.localStorage, data is kept after the browser quit.
session: window.sessionStorage, data is cleared once the browser quit.
- `picker` (a value equal to: 'date', 'week', 'month', 'quarter', 'year'; optional)
- `placeholder` (Array of Strings; optional)
- `placement` (a value equal to: 'bottomLeft', 'bottomRight', 'topLeft', 'topRight'; optional)
- `popupContainer` (a value equal to: 'parent', 'body'; optional)
- `readOnly` (Bool; optional)
- `showTime` (Bool; optional)
- `size` (a value equal to: 'small', 'middle', 'large'; optional)
- `status` (a value equal to: 'error', 'warning'; optional)
- `style` (Dict; optional)
- `value` (Array of Strings; optional)
"""
function 'feffery'_antddaterangepicker(; kwargs...)
        available_props = Symbol[:id, :allowClear, :bordered, :className, :defaultPickerValue, :defaultValue, :disabled, :disabledDatesStrategy, :format, :key, :loading_state, :locale, :persisted_props, :persistence, :persistence_type, :picker, :placeholder, :placement, :popupContainer, :readOnly, :showTime, :size, :status, :style, :value]
        wild_props = Symbol[]
        return Component("'feffery'_antddaterangepicker", "AntdDateRangePicker", "feffery_antd_components", available_props, wild_props; kwargs...)
end

