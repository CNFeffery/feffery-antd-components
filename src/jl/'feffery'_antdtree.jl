# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdtree

"""
    'feffery'_antdtree(;kwargs...)

An AntdTree component.

Keyword arguments:
- `id` (String; optional)
- `checkable` (Bool; optional)
- `checkedKeys` (Array; optional)
- `className` (String; optional)
- `defaultExpandAll` (Bool; optional)
- `defaultExpandParent` (Bool; optional)
- `defaultExpandedKeys` (Array of Strings; optional)
- `height` (Real; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `multiple` (Bool; optional)
- `selectable` (Bool; optional)
- `selectedKeys` (Array; optional)
- `showIcon` (Bool; optional)
- `showLine` (optional): . showLine has the following type: Bool | lists containing elements 'showLeafIcon'.
Those elements have the following types:
  - `showLeafIcon` (Bool; optional)
- `style` (Dict; optional)
- `treeData` (optional)
"""
function 'feffery'_antdtree(; kwargs...)
        available_props = Symbol[:id, :checkable, :checkedKeys, :className, :defaultExpandAll, :defaultExpandParent, :defaultExpandedKeys, :height, :loading_state, :multiple, :selectable, :selectedKeys, :showIcon, :showLine, :style, :treeData]
        wild_props = Symbol[]
        return Component("'feffery'_antdtree", "AntdTree", "feffery_antd_components", available_props, wild_props; kwargs...)
end

