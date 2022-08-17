# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdinputnumber

"""
    'feffery'_antdinputnumber(;kwargs...)

An AntdInputNumber component.

Keyword arguments:
- `id` (String; optional)
- `addonAfter` (a list of or a singular dash component, string or number; optional)
- `addonBefore` (a list of or a singular dash component, string or number; optional)
- `bordered` (Bool; optional)
- `className` (String; optional)
- `controls` (Bool; optional)
- `defaultValue` (Real | String; optional)
- `disabled` (Bool; optional)
- `key` (String; optional)
- `keyboard` (Bool; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `max` (Real | String; optional)
- `min` (Real | String; optional)
- `nSubmit` (Real; optional)
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
- `precision` (Real; optional)
- `prefix` (a list of or a singular dash component, string or number; optional)
- `readOnly` (Bool; optional)
- `size` (a value equal to: 'small', 'middle', 'large'; optional)
- `status` (a value equal to: 'error', 'warning'; optional)
- `step` (Real | String; optional)
- `stringMode` (Bool; optional)
- `style` (Dict; optional)
- `suffix` (a list of or a singular dash component, string or number; optional)
- `value` (Real | String; optional)
"""
function 'feffery'_antdinputnumber(; kwargs...)
        available_props = Symbol[:id, :addonAfter, :addonBefore, :bordered, :className, :controls, :defaultValue, :disabled, :key, :keyboard, :loading_state, :max, :min, :nSubmit, :persisted_props, :persistence, :persistence_type, :placeholder, :precision, :prefix, :readOnly, :size, :status, :step, :stringMode, :style, :suffix, :value]
        wild_props = Symbol[]
        return Component("'feffery'_antdinputnumber", "AntdInputNumber", "feffery_antd_components", available_props, wild_props; kwargs...)
end

