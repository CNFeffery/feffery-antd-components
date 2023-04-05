# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdcheckcardgroup

"""
    'feffery'_antdcheckcardgroup(;kwargs...)
    'feffery'_antdcheckcardgroup(children::Any;kwargs...)
    'feffery'_antdcheckcardgroup(children_maker::Function;kwargs...)


An AntdCheckCardGroup component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `bordered` (Bool; optional)
- `className` (String | Dict; optional)
- `defaultValue` (Real | String | Array of Real | Strings; optional)
- `disabled` (Bool; optional)
- `key` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `multiple` (Bool; optional)
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
- `size` (a value equal to: 'small', 'default', 'large'; optional)
- `style` (Dict; optional)
- `value` (Real | String | Array of Real | Strings; optional)
"""
function 'feffery'_antdcheckcardgroup(; kwargs...)
        available_props = Symbol[:children, :id, :bordered, :className, :defaultValue, :disabled, :key, :loading_state, :multiple, :persisted_props, :persistence, :persistence_type, :size, :style, :value]
        wild_props = Symbol[]
        return Component("'feffery'_antdcheckcardgroup", "AntdCheckCardGroup", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdcheckcardgroup(children::Any; kwargs...) = 'feffery'_antdcheckcardgroup(;kwargs..., children = children)
'feffery'_antdcheckcardgroup(children_maker::Function; kwargs...) = 'feffery'_antdcheckcardgroup(children_maker(); kwargs...)

