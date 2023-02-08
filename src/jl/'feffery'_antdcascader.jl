# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdcascader

"""
    'feffery'_antdcascader(;kwargs...)

An AntdCascader component.

Keyword arguments:
- `id` (String; optional)
- `allowClear` (Bool; optional)
- `bordered` (Bool; optional)
- `changeOnSelect` (Bool; optional)
- `className` (String | Dict; optional)
- `defaultValue` (Array of Strings | Array of Array of Stringss; optional)
- `disabled` (Bool; optional)
- `expandTrigger` (a value equal to: 'click', 'hover'; optional)
- `key` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `locale` (a value equal to: 'zh-cn', 'en-us'; optional)
- `maxTagCount` (Real | a value equal to: 'responsive'; optional)
- `multiple` (Bool; optional)
- `options` (Array; required)
- `optionsMode` (a value equal to: 'tree', 'flat'; optional)
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
- `placement` (a value equal to: 'bottomLeft', 'bottomRight', 'topLeft', 'topRight'; optional)
- `popupContainer` (a value equal to: 'parent', 'body'; optional)
- `readOnly` (Bool; optional)
- `showCheckedStrategy` (a value equal to: 'show-parent', 'show-child'; optional)
- `size` (a value equal to: 'small', 'middle', 'large'; optional)
- `status` (a value equal to: 'error', 'warning'; optional)
- `style` (Dict; optional)
- `value` (Array of Strings | Array of Array of Stringss; optional)
"""
function 'feffery'_antdcascader(; kwargs...)
        available_props = Symbol[:id, :allowClear, :bordered, :changeOnSelect, :className, :defaultValue, :disabled, :expandTrigger, :key, :loading_state, :locale, :maxTagCount, :multiple, :options, :optionsMode, :persisted_props, :persistence, :persistence_type, :placeholder, :placement, :popupContainer, :readOnly, :showCheckedStrategy, :size, :status, :style, :value]
        wild_props = Symbol[]
        return Component("'feffery'_antdcascader", "AntdCascader", "feffery_antd_components", available_props, wild_props; kwargs...)
end

