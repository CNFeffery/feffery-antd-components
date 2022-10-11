# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdtable

"""
    'feffery'_antdtable(;kwargs...)

An AntdTable component.

Keyword arguments:
- `id` (String; optional)
- `bordered` (Bool; optional)
- `checkedDataIndex` (String; optional)
- `className` (String; optional)
- `clickedContent` (String; optional)
- `columns` (optional): . columns has the following type: Array of lists containing elements 'title', 'dataIndex', 'renderOptions', 'fixed', 'editable', 'align', 'width', 'ellipsis', 'sorter', 'render', 'onCell', 'title_'.
Those elements have the following types:
  - `title` (String; required)
  - `dataIndex` (String; required)
  - `renderOptions` (optional): . renderOptions has the following type: lists containing elements 'renderType', 'renderLinkText', 'renderButtonPopConfirmProps', 'tooltipCustomContent', 'progressOneHundredPercentColor', 'ringProgressFontSize'.
Those elements have the following types:
  - `renderType` (a value equal to: 'link', 'ellipsis', 'mini-line', 'mini-bar', 'mini-progress', 'mini-ring-progress', 'mini-area', 'tags', 'button', 'copyable', 'status-badge', 'image', 'custom-format', 'ellipsis-copyable', 'corner-mark', 'checkbox', 'switch', 'row-merge'; optional)
  - `renderLinkText` (String; optional)
  - `renderButtonPopConfirmProps` (optional): . renderButtonPopConfirmProps has the following type: lists containing elements 'title', 'okText', 'cancelText'.
Those elements have the following types:
  - `title` (String; required)
  - `okText` (String; optional)
  - `cancelText` (String; optional)
  - `tooltipCustomContent` (String; optional)
  - `progressOneHundredPercentColor` (String; optional)
  - `ringProgressFontSize` (Real; optional)
  - `fixed` (a value equal to: 'left', 'right'; optional)
  - `editable` (Bool; optional)
  - `align` (a value equal to: 'left', 'center', 'right'; optional)
  - `width` (Real | String; optional)
  - `ellipsis` (Bool | Real | String | Dict | Array; optional)
  - `sorter` (Bool | Real | String | Dict | Array; optional)
  - `render` (Bool | Real | String | Dict | Array; optional)
  - `onCell` (Bool | Real | String | Dict | Array; optional)
  - `title_` (String; optional)s
- `columnsFormatConstraint` (optional): . columnsFormatConstraint has the following type: Dict with Strings as keys and values of type lists containing elements 'rule', 'content'.
Those elements have the following types:
  - `rule` (String; optional)
  - `content` (String; optional)
- `conditionalStyleFuncs` (Dict with Strings as keys and values of type String; optional)
- `containerId` (String; optional)
- `currentData` (Array; optional)
- `customFormatFuncs` (Dict with Strings as keys and values of type String; optional)
- `data` (optional): . data has the following type: Array of Dict with Strings as keys and values of type String | Real | lists containing elements 'content', 'href', 'target', 'disabled'.
Those elements have the following types:
  - `content` (String; optional)
  - `href` (String; optional)
  - `target` (String; optional)
  - `disabled` (Bool; optional) | Array of Reals | Array of lists containing elements 'color', 'tag'.
Those elements have the following types:
  - `color` (String; optional)
  - `tag` (String | Real; optional)s | lists containing elements 'disabled', 'type', 'danger', 'style', 'content', 'href', 'target'.
Those elements have the following types:
  - `disabled` (Bool; optional)
  - `type` (a value equal to: 'primary', 'ghost', 'dashed', 'link', 'text', 'default'; optional)
  - `danger` (Bool; optional)
  - `style` (Dict; optional)
  - `content` (String | Real; optional)
  - `href` (String; optional)
  - `target` (String; optional) | Array of lists containing elements 'disabled', 'type', 'danger', 'style', 'content'.
Those elements have the following types:
  - `disabled` (Bool; optional)
  - `type` (a value equal to: 'primary', 'ghost', 'dashed', 'link', 'text', 'default'; optional)
  - `danger` (Bool; optional)
  - `style` (Dict; optional)
  - `content` (String | Real; optional)s | lists containing elements 'status', 'text'.
Those elements have the following types:
  - `status` (a value equal to: 'success', 'processing', 'default', 'error', 'warning'; optional)
  - `text` (String | Real; optional) | lists containing elements 'src', 'height', 'preview'.
Those elements have the following types:
  - `src` (String; optional)
  - `height` (String | Real; optional)
  - `preview` (Bool; optional) | lists containing elements 'placement', 'color', 'content', 'offsetX', 'offsetY', 'hide'.
Those elements have the following types:
  - `placement` (a value equal to: 'top-left', 'top-right', 'bottom-left', 'bottom-right'; optional)
  - `color` (String; optional)
  - `content` (Real | String; optional)
  - `offsetX` (Real; optional)
  - `offsetY` (Real; optional)
  - `hide` (Bool; optional) | lists containing elements 'checked', 'disabled', 'label'.
Those elements have the following types:
  - `checked` (Bool; optional)
  - `disabled` (Bool; optional)
  - `label` (String; optional) | lists containing elements 'checked', 'disabled', 'label', 'checkedChildren', 'unCheckedChildren'.
Those elements have the following types:
  - `checked` (Bool; optional)
  - `disabled` (Bool; optional)
  - `label` (String; optional)
  - `checkedChildren` (String; optional)
  - `unCheckedChildren` (String; optional) | lists containing elements 'content', 'rowSpan'.
Those elements have the following types:
  - `content` (Real | String; optional)
  - `rowSpan` (Real; optional)s
- `emptyContent` (a list of or a singular dash component, string or number; optional)
- `enableCellClickListenColumns` (Bool; optional)
- `enableHoverListen` (Bool; optional)
- `expandRowByClick` (Bool; optional)
- `expandedRowKeyToContent` (optional): . expandedRowKeyToContent has the following type: Array of lists containing elements 'key', 'content'.
Those elements have the following types:
  - `key` (String | Real; required)
  - `content` (a list of or a singular dash component, string or number; optional)s
- `expandedRowWidth` (String | Real; optional)
- `filter` (Dict; optional)
- `filterOptions` (optional): . filterOptions has the following type: Dict with Strings as keys and values of type lists containing elements 'filterMode', 'filterCustomItems', 'filterMultiple', 'filterSearch'.
Those elements have the following types:
  - `filterMode` (a value equal to: 'checkbox', 'keyword'; optional)
  - `filterCustomItems` (Array | Bool | Real | String | Dict | Array; optional)
  - `filterMultiple` (Bool; optional)
  - `filterSearch` (Bool; optional)
- `key` (String; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `locale` (a value equal to: 'zh-cn', 'en-us'; optional)
- `maxHeight` (Real; optional)
- `maxWidth` (Real; optional)
- `miniChartAnimation` (Bool; optional)
- `miniChartHeight` (Real; optional)
- `mode` (a value equal to: 'client-side', 'server-side'; optional)
- `nClicksButton` (Real; optional)
- `nClicksCell` (Real; optional)
- `pagination` (optional): . pagination has the following type: lists containing elements 'position', 'pageSize', 'current', 'showSizeChanger', 'pageSizeOptions', 'showTitle', 'showQuickJumper', 'showTotalPrefix', 'showTotalSuffix', 'total', 'hideOnSinglePage', 'simple', 'disabled', 'responsive', 'size'.
Those elements have the following types:
  - `position` (a value equal to: 'topLeft', 'topCenter', 'topRight', 'bottomLeft', 'bottomCenter', 'bottomRight'; optional)
  - `pageSize` (Real; optional)
  - `current` (Real; optional)
  - `showSizeChanger` (Bool; optional)
  - `pageSizeOptions` (Array of Reals; optional)
  - `showTitle` (Bool; optional)
  - `showQuickJumper` (Bool; optional)
  - `showTotalPrefix` (String; optional)
  - `showTotalSuffix` (String; optional)
  - `total` (Real; optional)
  - `hideOnSinglePage` (Bool; optional)
  - `simple` (Bool; optional)
  - `disabled` (Bool; optional)
  - `responsive` (Bool; optional)
  - `size` (a value equal to: 'default', 'small'; optional)
- `recentlyButtonClickedRow` (Dict; optional)
- `recentlyCellClickColumn` (String; optional)
- `recentlyCellClickRecord` (String | Real; optional)
- `recentlyChangedRow` (Dict; optional)
- `recentlyCheckedLabel` (String; optional)
- `recentlyCheckedRow` (Dict; optional)
- `recentlyCheckedStatus` (Bool; optional)
- `recentlyMouseEnterColumn` (String; optional)
- `recentlyMouseEnterRow` (String | Real; optional)
- `recentlySwtichRow` (Dict; optional)
- `recentlySwtichStatus` (Bool; optional)
- `rowSelectionType` (a value equal to: 'checkbox', 'radio'; optional)
- `rowSelectionWidth` (String | Real; optional)
- `selectedRowKeys` (Array of String | Reals; optional)
- `selectedRows` (Array; optional)
- `size` (a value equal to: 'small', 'default', 'large'; optional)
- `sortOptions` (optional): . sortOptions has the following type: lists containing elements 'sortDataIndexes', 'multiple'.
Those elements have the following types:
  - `sortDataIndexes` (Array of Strings; optional)
  - `multiple` (Bool | a value equal to: 'auto'; optional)
- `sorter` (optional): . sorter has the following type: lists containing elements 'columns', 'orders'.
Those elements have the following types:
  - `columns` (Array of Strings; optional)
  - `orders` (Array of a value equal to: 'ascend', 'descend's; optional)
- `sticky` (optional): . sticky has the following type: Bool | lists containing elements 'offsetHeader'.
Those elements have the following types:
  - `offsetHeader` (Real; optional)
- `style` (Dict; optional)
- `summaryRowContents` (optional): . summaryRowContents has the following type: Array of lists containing elements 'content', 'colSpan', 'align'.
Those elements have the following types:
  - `content` (String | Real; optional)
  - `colSpan` (Real; optional)
  - `align` (a value equal to: 'left', 'center', 'right'; optional)s
- `summaryRowFixed` (Bool; optional)
- `swtichDataIndex` (String; optional)
- `titlePopoverInfo` (Dict; optional)
"""
function 'feffery'_antdtable(; kwargs...)
        available_props = Symbol[:id, :bordered, :checkedDataIndex, :className, :clickedContent, :columns, :columnsFormatConstraint, :conditionalStyleFuncs, :containerId, :currentData, :customFormatFuncs, :data, :emptyContent, :enableCellClickListenColumns, :enableHoverListen, :expandRowByClick, :expandedRowKeyToContent, :expandedRowWidth, :filter, :filterOptions, :key, :loading_state, :locale, :maxHeight, :maxWidth, :miniChartAnimation, :miniChartHeight, :mode, :nClicksButton, :nClicksCell, :pagination, :recentlyButtonClickedRow, :recentlyCellClickColumn, :recentlyCellClickRecord, :recentlyChangedRow, :recentlyCheckedLabel, :recentlyCheckedRow, :recentlyCheckedStatus, :recentlyMouseEnterColumn, :recentlyMouseEnterRow, :recentlySwtichRow, :recentlySwtichStatus, :rowSelectionType, :rowSelectionWidth, :selectedRowKeys, :selectedRows, :size, :sortOptions, :sorter, :sticky, :style, :summaryRowContents, :summaryRowFixed, :swtichDataIndex, :titlePopoverInfo]
        wild_props = Symbol[]
        return Component("'feffery'_antdtable", "AntdTable", "feffery_antd_components", available_props, wild_props; kwargs...)
end

