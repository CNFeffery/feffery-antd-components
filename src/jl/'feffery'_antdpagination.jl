# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdpagination

"""
    'feffery'_antdpagination(;kwargs...)

An AntdPagination component.

Keyword arguments:
- `id` (String; optional)
- `className` (String; optional)
- `current` (Real; optional)
- `defaultCurrent` (Real; optional)
- `defaultPageSize` (Real; optional)
- `disabled` (Bool; optional)
- `hideOnSinglePage` (Bool; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `pageSize` (Real; optional)
- `pageSizeOptions` (Array of Reals; optional)
- `showQuickJumper` (Bool; optional)
- `showSizeChanger` (Bool; optional)
- `showTotalPrefix` (String; optional)
- `showTotalSuffix` (String; optional)
- `simple` (Bool; optional)
- `size` (String; optional)
- `style` (Dict; optional)
- `total` (Real; optional)
"""
function 'feffery'_antdpagination(; kwargs...)
        available_props = Symbol[:id, :className, :current, :defaultCurrent, :defaultPageSize, :disabled, :hideOnSinglePage, :loading_state, :pageSize, :pageSizeOptions, :showQuickJumper, :showSizeChanger, :showTotalPrefix, :showTotalSuffix, :simple, :size, :style, :total]
        wild_props = Symbol[]
        return Component("'feffery'_antdpagination", "AntdPagination", "feffery_antd_components", available_props, wild_props; kwargs...)
end

