# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdmenu

"""
    'feffery'_antdmenu(;kwargs...)

An AntdMenu component.

Keyword arguments:
- `id` (String; optional)
- `className` (String; optional)
- `currentKey` (String; optional)
- `defaultOpenKeys` (Array of Strings; optional)
- `defaultSelectedKey` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `menuItems` (Array; optional)
- `mode` (a value equal to: 'vertical', 'horizontal', 'inline'; optional)
- `openKeys` (Array of Strings; optional)
- `persisted_props` (Array of a value equal to: 'currentKey', 'openKeys's; optional): Properties whose user interactions will persist after refreshing the
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
- `renderCollapsedButton` (Bool; optional)
- `style` (Dict; optional)
- `theme` (a value equal to: 'light', 'dark'; optional)
"""
function 'feffery'_antdmenu(; kwargs...)
        available_props = Symbol[:id, :className, :currentKey, :defaultOpenKeys, :defaultSelectedKey, :loading_state, :menuItems, :mode, :openKeys, :persisted_props, :persistence, :persistence_type, :renderCollapsedButton, :style, :theme]
        wild_props = Symbol[]
        return Component("'feffery'_antdmenu", "AntdMenu", "feffery_antd_components", available_props, wild_props; kwargs...)
end

