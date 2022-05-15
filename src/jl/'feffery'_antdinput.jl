# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdinput

"""
    'feffery'_antdinput(;kwargs...)

An AntdInput component.

Keyword arguments:
- `id` (String; optional)
- `addonAfter` (String; optional)
- `addonBefore` (String; optional)
- `allowClear` (Bool; optional)
- `autoComplete` (a value equal to: 'off', 'on'; optional)
- `bordered` (Bool; optional)
- `className` (String; optional)
- `defaultValue` (String; optional)
- `disabled` (Bool; optional)
- `key` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `maxLength` (Real; optional)
- `md5Value` (String; optional)
- `mode` (a value equal to: 'default', 'search', 'text-area', 'password'; optional)
- `nClicksSearch` (Real; optional)
- `nSubmit` (Real; optional)
- `passwordUseMd5` (Bool; optional)
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
- `placeholder` (String; optional)
- `showCount` (Bool; optional)
- `size` (a value equal to: 'small', 'middle', 'large'; optional)
- `status` (a value equal to: 'error', 'warning'; optional)
- `style` (Dict; optional)
- `value` (String; optional)
"""
function 'feffery'_antdinput(; kwargs...)
        available_props = Symbol[:id, :addonAfter, :addonBefore, :allowClear, :autoComplete, :bordered, :className, :defaultValue, :disabled, :key, :loading_state, :maxLength, :md5Value, :mode, :nClicksSearch, :nSubmit, :passwordUseMd5, :persisted_props, :persistence, :persistence_type, :placeholder, :showCount, :size, :status, :style, :value]
        wild_props = Symbol[]
        return Component("'feffery'_antdinput", "AntdInput", "feffery_antd_components", available_props, wild_props; kwargs...)
end

