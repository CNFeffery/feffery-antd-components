# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdtable

"""
    'feffery'_antdtable(;kwargs...)

An AntdTable component.

Keyword arguments:
- `id` (String; optional)
- `bordered` (Bool; optional)
- `className` (String; optional)
- `clickedContent` (String; optional)
- `columns` (optional): . columns has the following type: Array of lists containing elements 'title', 'dataIndex', 'renderOptions', 'fixed', 'editable', 'align', 'width', 'ellipsis', 'sorter', 'render', 'title_'.
Those elements have the following types:
  - `title` (String; required)
  - `dataIndex` (String; required)
  - `renderOptions` (optional): . renderOptions has the following type: lists containing elements 'renderType', 'renderLinkText', 'renderButtonPopConfirmProps'.
Those elements have the following types:
  - `renderType` (a value equal to: 'link', 'ellipsis', 'mini-line', 'mini-bar', 'mini-progress', 'mini-area', 'tags', 'button', 'copyable'; optional)
  - `renderLinkText` (String; optional)
  - `renderButtonPopConfirmProps` (optional): . renderButtonPopConfirmProps has the following type: lists containing elements 'title', 'okText', 'cancelText'.
Those elements have the following types:
  - `title` (String; required)
  - `okText` (String; optional)
  - `cancelText` (String; optional)
  - `fixed` (a value equal to: 'left', 'right'; optional)
  - `editable` (Bool; optional)
  - `align` (a value equal to: 'left', 'center', 'right'; optional)
  - `width` (Real | String; optional)
  - `ellipsis` (Bool | Real | String | Dict | Array; optional)
  - `sorter` (Bool | Real | String | Dict | Array; optional)
  - `render` (Bool | Real | String | Dict | Array; optional)
  - `title_` (String; optional)s
- `columnsFormatConstraint` (optional): . columnsFormatConstraint has the following type: Dict with Strings as keys and values of type lists containing elements 'rule', 'content'.
Those elements have the following types:
  - `rule` (String; optional)
  - `content` (String; optional)
- `containerId` (String; optional)
- `currentData` (Array; optional)
- `data` (Array of Dicts; optional)
- `enableHoverListen` (Bool; optional)
- `filter` (Dict; optional)
- `filterOptions` (Dict; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `locale` (a value equal to: 'zh-cn', 'en-us'; optional)
- `maxHeight` (Real; optional)
- `mode` (a value equal to: 'client-side', 'server-side'; optional)
- `nClicksButton` (Real; optional)
- `pagination` (optional): . pagination has the following type: Bool | lists containing elements 'position', 'pageSize', 'current', 'pageSizeOptions', 'showQuickJumper', 'showTotalPrefix', 'showTotalSuffix', 'total', 'hideOnSinglePage', 'simple'.
Those elements have the following types:
  - `position` (a value equal to: 'topLeft', 'topCenter', 'topRight', 'bottomLeft', 'bottomCenter', 'bottomRight'; optional)
  - `pageSize` (Real; optional)
  - `current` (Real; optional)
  - `pageSizeOptions` (Array of Reals; optional)
  - `showQuickJumper` (Bool; optional)
  - `showTotalPrefix` (String; optional)
  - `showTotalSuffix` (String; optional)
  - `total` (Real; optional)
  - `hideOnSinglePage` (Bool; optional)
  - `simple` (Bool; optional)
- `recentlyButtonClickedRow` (Dict; optional)
- `recentlyChangedRow` (Dict; optional)
- `recentlyMouseEnterColumn` (String; optional)
- `recentlyMouseEnterRow` (String | Real; optional)
- `rowSelectionType` (a value equal to: 'checkbox', 'radio'; optional)
- `rowSelectionWidth` (String | Real; optional)
- `selectedRowKeys` (Array of String | Reals; optional)
- `selectedRows` (Array; optional)
- `size` (a value equal to: 'small', 'default', 'large'; optional)
- `sortOptions` (optional): . sortOptions has the following type: lists containing elements 'sortDataIndexes', 'multiple'.
Those elements have the following types:
  - `sortDataIndexes` (Array of Strings; optional)
  - `multiple` (Bool; optional)
- `sorter` (optional): . sorter has the following type: lists containing elements 'columns', 'orders'.
Those elements have the following types:
  - `columns` (Array of Strings; optional)
  - `orders` (Array of a value equal to: 'ascend', 'descend's; optional)
- `sticky` (Bool; optional)
- `style` (Dict; optional)
- `titlePopoverInfo` (Dict; optional)
"""
function 'feffery'_antdtable(; kwargs...)
        available_props = Symbol[:id, :bordered, :className, :clickedContent, :columns, :columnsFormatConstraint, :containerId, :currentData, :data, :enableHoverListen, :filter, :filterOptions, :loading_state, :locale, :maxHeight, :mode, :nClicksButton, :pagination, :recentlyButtonClickedRow, :recentlyChangedRow, :recentlyMouseEnterColumn, :recentlyMouseEnterRow, :rowSelectionType, :rowSelectionWidth, :selectedRowKeys, :selectedRows, :size, :sortOptions, :sorter, :sticky, :style, :titlePopoverInfo]
        wild_props = Symbol[]
        return Component("'feffery'_antdtable", "AntdTable", "feffery_antd_components", available_props, wild_props; kwargs...)
end

