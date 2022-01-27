# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdcalendar

"""
    'feffery'_antdcalendar(;kwargs...)

An AntdCalendar component.

Keyword arguments:
- `id` (String; optional)
- `className` (String; optional)
- `defaultValue` (String; optional)
- `format` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
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
- `size` (a value equal to: 'default', 'large'; optional)
- `style` (Dict; optional)
- `value` (String; optional)
"""
function 'feffery'_antdcalendar(; kwargs...)
        available_props = Symbol[:id, :className, :defaultValue, :format, :loading_state, :locale, :persisted_props, :persistence, :persistence_type, :size, :style, :value]
        wild_props = Symbol[]
        return Component("'feffery'_antdcalendar", "AntdCalendar", "feffery_antd_components", available_props, wild_props; kwargs...)
end

