# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdtimerangepicker

"""
    'feffery'_antdtimerangepicker(;kwargs...)

An AntdTimeRangePicker component.

Keyword arguments:
- `id` (String; optional)
- `allowClear` (Bool; optional)
- `bordered` (Bool; optional)
- `className` (String | Dict; optional)
- `defaultValue` (Array of Strings; optional)
- `disabled` (Array of Bools; optional)
- `format` (String; optional)
- `hourStep` (Real; optional)
- `key` (String; optional)
- `loading_state` (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `locale` (a value equal to: 'zh-cn', 'en-us'; optional)
- `minuteStep` (Real; optional)
- `open` (Bool; optional)
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
- `placeholder` (Array of Strings; optional)
- `placement` (a value equal to: 'bottomLeft', 'bottomRight', 'topLeft', 'topRight'; optional)
- `popupContainer` (a value equal to: 'parent', 'body'; optional)
- `readOnly` (Bool; optional)
- `secondStep` (Real; optional)
- `size` (a value equal to: 'small', 'middle', 'large'; optional)
- `status` (a value equal to: 'error', 'warning'; optional)
- `style` (Dict; optional)
- `use12Hours` (Bool; optional)
- `value` (Array of Strings; optional)
"""
function 'feffery'_antdtimerangepicker(; kwargs...)
        available_props = Symbol[:id, :allowClear, :bordered, :className, :defaultValue, :disabled, :format, :hourStep, :key, :loading_state, :locale, :minuteStep, :open, :persisted_props, :persistence, :persistence_type, :placeholder, :placement, :popupContainer, :readOnly, :secondStep, :size, :status, :style, :use12Hours, :value]
        wild_props = Symbol[]
        return Component("'feffery'_antdtimerangepicker", "AntdTimeRangePicker", "feffery_antd_components", available_props, wild_props; kwargs...)
end

