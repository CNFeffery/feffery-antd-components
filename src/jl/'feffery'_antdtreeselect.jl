# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdtreeselect

"""
    'feffery'_antdtreeselect(;kwargs...)

An AntdTreeSelect component.

Keyword arguments:
- `id` (String; optional)
- `allowClear` (Bool; optional)
- `autoClearSearchValue` (Bool; optional)
- `bordered` (Bool; optional)
- `className` (String; optional)
- `defaultValue` (String | Real | Array of String | Reals; optional)
- `disabled` (Bool; optional)
- `key` (String; optional)
- `listHeight` (Real; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `locale` (a value equal to: 'zh-cn', 'en-us'; optional)
- `maxTagCount` (Real | a value equal to: 'responsive'; optional)
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
- `placeholder` (String; optional)
- `placement` (a value equal to: 'bottomLeft', 'bottomRight', 'topLeft', 'topRight'; optional)
- `popupContainer` (a value equal to: 'parent', 'body'; optional)
- `readOnly` (Bool; optional)
- `showCheckedStrategy` (a value equal to: 'show-all', 'show-parent', 'show-child'; optional)
- `size` (a value equal to: 'small', 'middle', 'large'; optional)
- `status` (a value equal to: 'error', 'warning'; optional)
- `style` (Dict; optional)
- `treeCheckStrictly` (Bool; optional)
- `treeCheckable` (Bool; optional)
- `treeData` (Array; required)
- `treeDataMode` (a value equal to: 'tree', 'flat'; optional)
- `treeDefaultExpandAll` (Bool; optional)
- `treeDefaultExpandedKeys` (Array of Strings; optional)
- `treeExpandedKeys` (Array of Strings; optional)
- `treeLine` (Bool; optional)
- `treeNodeFilterProp` (a value equal to: 'title', 'value'; optional)
- `value` (String | Real | Array of String | Reals; optional)
- `virtual` (Bool; optional)
"""
function 'feffery'_antdtreeselect(; kwargs...)
        available_props = Symbol[:id, :allowClear, :autoClearSearchValue, :bordered, :className, :defaultValue, :disabled, :key, :listHeight, :loading_state, :locale, :maxTagCount, :multiple, :persisted_props, :persistence, :persistence_type, :placeholder, :placement, :popupContainer, :readOnly, :showCheckedStrategy, :size, :status, :style, :treeCheckStrictly, :treeCheckable, :treeData, :treeDataMode, :treeDefaultExpandAll, :treeDefaultExpandedKeys, :treeExpandedKeys, :treeLine, :treeNodeFilterProp, :value, :virtual]
        wild_props = Symbol[]
        return Component("'feffery'_antdtreeselect", "AntdTreeSelect", "feffery_antd_components", available_props, wild_props; kwargs...)
end

