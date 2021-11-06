# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdtransfer

"""
    'feffery'_antdtransfer(;kwargs...)

An AntdTransfer component.

Keyword arguments:
- `id` (String; optional)
- `className` (String; optional)
- `dataSource` (optional): . dataSource has the following type: Array of lists containing elements 'key', 'title'.
Those elements have the following types:
  - `key` (String | Real; optional)
  - `title` (String; optional)s
- `disabled` (Bool; optional)
- `height` (String; optional)
- `moveDirection` (String; optional)
- `moveKeys` (Array; optional)
- `operations` (Array; optional)
- `pagination` (optional): . pagination has the following type: Bool | lists containing elements 'pageSize'.
Those elements have the following types:
  - `pageSize` (Real; optional)
- `showSearch` (Bool; optional)
- `showSelectAll` (Bool; optional)
- `style` (Dict; optional)
- `targetKeys` (Array; optional)
- `titles` (Array; optional)
"""
function 'feffery'_antdtransfer(; kwargs...)
        available_props = Symbol[:id, :className, :dataSource, :disabled, :height, :moveDirection, :moveKeys, :operations, :pagination, :showSearch, :showSelectAll, :style, :targetKeys, :titles]
        wild_props = Symbol[]
        return Component("'feffery'_antdtransfer", "AntdTransfer", "feffery_antd_components", available_props, wild_props; kwargs...)
end

