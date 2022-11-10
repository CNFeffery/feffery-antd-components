# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdtree

"""
    'feffery'_antdtree(;kwargs...)

An AntdTree component.

Keyword arguments:
- `id` (String; optional)
- `checkStrictly` (Bool; optional)
- `checkable` (Bool; optional)
- `checkedKeys` (Array; optional)
- `className` (String; optional)
- `defaultCheckedKeys` (Array of Strings; optional)
- `defaultExpandAll` (Bool; optional)
- `defaultExpandParent` (Bool; optional)
- `defaultExpandedKeys` (Array of Strings; optional)
- `defaultSelectedKeys` (Array of Strings; optional)
- `draggable` (Bool; optional)
- `expandedKeys` (Array of Strings; optional)
- `halfCheckedKeys` (Array; optional)
- `height` (Real; optional)
- `key` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `multiple` (Bool; optional)
- `persisted_props` (Array of a value equal to: 'selectedKeys', 'checkedKeys', 'expandedKeys's; optional): Properties whose user interactions will persist after refreshing the
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
- `selectable` (Bool; optional)
- `selectedKeys` (Array; optional)
- `showIcon` (Bool; optional)
- `showLine` (optional): . showLine has the following type: Bool | lists containing elements 'showLeafIcon'.
Those elements have the following types:
  - `showLeafIcon` (Bool; optional)
- `style` (Dict; optional)
- `treeData` (Array; optional)
- `treeDataMode` (a value equal to: 'tree', 'flat'; optional)
"""
function 'feffery'_antdtree(; kwargs...)
        available_props = Symbol[:id, :checkStrictly, :checkable, :checkedKeys, :className, :defaultCheckedKeys, :defaultExpandAll, :defaultExpandParent, :defaultExpandedKeys, :defaultSelectedKeys, :draggable, :expandedKeys, :halfCheckedKeys, :height, :key, :loading_state, :multiple, :persisted_props, :persistence, :persistence_type, :selectable, :selectedKeys, :showIcon, :showLine, :style, :treeData, :treeDataMode]
        wild_props = Symbol[]
        return Component("'feffery'_antdtree", "AntdTree", "feffery_antd_components", available_props, wild_props; kwargs...)
end

