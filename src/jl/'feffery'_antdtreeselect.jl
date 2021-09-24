# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdtreeselect

"""
    'feffery'_antdtreeselect(;kwargs...)

An AntdTreeSelect component.

Keyword arguments:
- `id` (String; optional)
- `allowClear` (Bool; optional)
- `bordered` (Bool; optional)
- `className` (String; optional)
- `defaultValue` (String | Real | Array of String | Reals; optional)
- `disabled` (Bool; optional)
- `listHeight` (Real; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `maxTagCount` (Real; optional)
- `multiple` (Bool; optional)
- `placeholder` (String; optional)
- `size` (String; optional)
- `style` (Dict; optional)
- `treeCheckStrictly` (Bool; optional)
- `treeCheckable` (Bool; optional)
- `treeData` (optional)
- `treeDefaultExpandAll` (Bool; optional)
- `treeDefaultExpandedKeys` (Array of Strings; optional)
- `treeExpandedKeys` (Array of Strings; optional)
- `value` (String | Real | Array of String | Reals; optional)
- `virtual` (Bool; optional)
"""
function 'feffery'_antdtreeselect(; kwargs...)
        available_props = Symbol[:id, :allowClear, :bordered, :className, :defaultValue, :disabled, :listHeight, :loading_state, :maxTagCount, :multiple, :placeholder, :size, :style, :treeCheckStrictly, :treeCheckable, :treeData, :treeDefaultExpandAll, :treeDefaultExpandedKeys, :treeExpandedKeys, :value, :virtual]
        wild_props = Symbol[]
        return Component("'feffery'_antdtreeselect", "AntdTreeSelect", "feffery_antd_components", available_props, wild_props; kwargs...)
end

