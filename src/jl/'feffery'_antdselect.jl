# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdselect

"""
    'feffery'_antdselect(;kwargs...)

An AntdSelect component.

Keyword arguments:
- `id` (String; optional)
- `allowClear` (Bool; optional)
- `className` (String; optional)
- `colorsMode` (a value equal to: 'sequential', 'diverging'; optional)
- `colorsNameWidth` (Real; optional)
- `defaultValue` (String | Real | Array of String | Reals; optional)
- `disabled` (Bool; optional)
- `listHeight` (Real; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `locale` (a value equal to: 'zh-cn', 'en-us'; optional)
- `maxTagCount` (Real; optional)
- `mode` (a value equal to: 'multiple', 'tags'; optional)
- `options` (optional): . options has the following type: Array of lists containing elements 'label', 'value', 'disabled', 'colors'.
Those elements have the following types:
  - `label` (String | Real; required)
  - `value` (String | Real; required)
  - `disabled` (Bool; optional)
  - `colors` (Array of Strings; optional) | lists containing elements 'group', 'options'.
Those elements have the following types:
  - `group` (String; required)
  - `options` (optional): . options has the following type: Array of lists containing elements 'label', 'value', 'disabled', 'colors'.
Those elements have the following types:
  - `label` (String | Real; required)
  - `value` (String | Real; required)
  - `disabled` (Bool; optional)
  - `colors` (Array of Strings; optional)ss
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
- `size` (a value equal to: 'small', 'middle', 'large'; optional)
- `style` (Dict; optional)
- `value` (String | Real | Array of String | Reals; optional)
"""
function 'feffery'_antdselect(; kwargs...)
        available_props = Symbol[:id, :allowClear, :className, :colorsMode, :colorsNameWidth, :defaultValue, :disabled, :listHeight, :loading_state, :locale, :maxTagCount, :mode, :options, :persisted_props, :persistence, :persistence_type, :placeholder, :size, :style, :value]
        wild_props = Symbol[]
        return Component("'feffery'_antdselect", "AntdSelect", "feffery_antd_components", available_props, wild_props; kwargs...)
end

