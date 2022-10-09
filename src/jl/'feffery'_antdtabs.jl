# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdtabs

"""
    'feffery'_antdtabs(;kwargs...)
    'feffery'_antdtabs(children::Any;kwargs...)
    'feffery'_antdtabs(children_maker::Function;kwargs...)


An AntdTabs component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `activeKey` (String; optional)
- `centered` (Bool; optional)
- `className` (String; optional)
- `defaultActiveKey` (String; optional)
- `inkBarAnimated` (Bool; optional)
- `items` (optional): . items has the following type: Array of lists containing elements 'label', 'key', 'children', 'disabled', 'forceRender', 'closable'.
Those elements have the following types:
  - `label` (a list of or a singular dash component, string or number; optional)
  - `key` (String; optional)
  - `children` (a list of or a singular dash component, string or number; optional)
  - `disabled` (Bool; optional)
  - `forceRender` (Bool; optional)
  - `closable` (Bool; optional)s
- `key` (String; optional)
- `latestDeletePane` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `persisted_props` (Array of a value equal to: 'activeKey's; optional): Properties whose user interactions will persist after refreshing the
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
- `tabBarGutter` (Real; optional)
- `tabBarLeftExtraContent` (a list of or a singular dash component, string or number; optional)
- `tabBarRightExtraContent` (a list of or a singular dash component, string or number; optional)
- `tabPaneAnimated` (Bool; optional)
- `tabPosition` (a value equal to: 'top', 'left', 'right', 'bottom'; optional)
- `type` (a value equal to: 'line', 'card', 'editable-card'; optional)
"""
function 'feffery'_antdtabs(; kwargs...)
        available_props = Symbol[:children, :id, :activeKey, :centered, :className, :defaultActiveKey, :inkBarAnimated, :items, :key, :latestDeletePane, :loading_state, :persisted_props, :persistence, :persistence_type, :size, :style, :tabBarGutter, :tabBarLeftExtraContent, :tabBarRightExtraContent, :tabPaneAnimated, :tabPosition, :type]
        wild_props = Symbol[]
        return Component("'feffery'_antdtabs", "AntdTabs", "feffery_antd_components", available_props, wild_props; kwargs...)
end

'feffery'_antdtabs(children::Any; kwargs...) = 'feffery'_antdtabs(;kwargs..., children = children)
'feffery'_antdtabs(children_maker::Function; kwargs...) = 'feffery'_antdtabs(children_maker(); kwargs...)

