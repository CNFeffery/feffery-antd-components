# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdTable(Component):
    """An AntdTable component.


Keyword arguments:

- id (string; optional)

- bordered (boolean; default False)

- cellUpdateOptimize (boolean; default False)

- className (string; optional)

- clickedContent (string; optional)

- columns (list of dicts; optional)

    `columns` is a list of dicts with keys:

    - align (a value equal to: 'left', 'center', 'right'; optional)

    - dataIndex (string; required)

    - editOptions (dict; optional)

        `editOptions` is a dict with keys:

        - autoSize (dict; optional)

            `autoSize` is a boolean

          Or dict with keys:

    - maxRows (number; optional)

    - minRows (number; optional)

        - maxLength (number; optional)

        - mode (a value equal to: 'default', 'text-area'; optional)

        - placeholder (string; optional)

    - editable (boolean; optional)

    - ellipsis (boolean | number | string | dict | list; optional)

    - filterResetToDefaultFilteredValue (boolean; optional):
        若当前字段通过defaultFilteredValues设置了初始化默认选中筛选值，
        用于设置是否在用户点击重置按钮后恢复默认选中筛选项  默认：False.

    - fixed (a value equal to: 'left', 'right'; optional)

    - group (string | list of strings; optional)

    - hidden (boolean; optional)

    - onCell (boolean | number | string | dict | list; optional)

    - render (boolean | number | string | dict | list; optional)

    - renderOptions (dict; optional)

        `renderOptions` is a dict with keys:

        - dropdownProps (dict; optional)

            `dropdownProps` is a dict with keys:

            - arrow (boolean; optional)

            - disabled (boolean; optional)

            - overlayClassName (string; optional)

            - overlayStyle (dict; optional)

            - placement (a value equal to: 'bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight'; optional)

            - title (string; optional)

        - progressOneHundredPercentColor (string; optional)

        - renderButtonPopConfirmProps (dict; optional)

            `renderButtonPopConfirmProps` is a dict with keys:

            - cancelText (string; optional)

            - okText (string; optional)

            - title (string; optional)

        - renderLinkText (string; optional)

        - renderType (a value equal to: 'link', 'ellipsis', 'copyable', 'ellipsis-copyable', 'tags', 'status-badge', 'image', 'custom-format', 'corner-mark', 'row-merge', 'dropdown', 'dropdown-links', 'image-avatar', 'mini-line', 'mini-bar', 'mini-progress', 'mini-ring-progress', 'mini-area', 'button', 'checkbox', 'switch', 'select'; optional)

        - ringProgressFontSize (number; optional)

        - tooltipCustomContent (string; optional)

    - sorter (boolean | number | string | dict | list; optional)

    - title (a list of or a singular dash component, string or number; required)

    - title_ (boolean | number | string | dict | list; optional)

    - width (number | string; optional)

- columnsFormatConstraint (dict; optional)

    `columnsFormatConstraint` is a dict with strings as keys and
    values of type dict with keys:

    - content (string; optional)

    - rule (string; optional)

- columnsWidthResizable (boolean; default False)

- conditionalStyleFuncs (dict with strings as keys and values of type string; optional)

- containerId (string; optional)

- currentData (list; optional)

- customFormatFuncs (dict with strings as keys and values of type string; optional)

- data (list of dicts; optional)

    `data` is a list of dicts with strings as keys and values of type
    list of boolean | number | string | dict | lists | a list of or a
    singular dash component, string or number | string | number | dict
    with keys:

    - content (string; optional)

    - disabled (boolean; optional)

    - href (string; optional)

    - target (string; optional)

      Or list of numbers | dict with keys:

    - color (string; optional)

    - tag (string | number; optional) | list of dicts with keys:

    - color (string; optional)

    - tag (string | number; optional) | dict with keys:

    - content (string; optional)

    - custom (boolean | number | string | dict | list; optional)

    - danger (boolean; optional)

    - disabled (boolean; optional)

    - href (string; optional)

    - icon (string; optional)

    - iconRenderer (a value equal to: 'AntdIcon', 'fontawesome'; optional)

    - style (dict; optional)

    - target (string; optional)

    - type (a value equal to: 'primary', 'ghost', 'dashed', 'link', 'text', 'default'; optional) | list of dicts with keys:

    - content (string; optional)

    - custom (boolean | number | string | dict | list; optional)

    - danger (boolean; optional)

    - disabled (boolean; optional)

    - href (string; optional)

    - icon (string; optional)

    - iconRenderer (a value equal to: 'AntdIcon', 'fontawesome'; optional)

    - style (dict; optional)

    - target (string; optional)

    - type (a value equal to: 'primary', 'ghost', 'dashed', 'link', 'text', 'default'; optional) | dict with keys:

    - status (a value equal to: 'success', 'processing', 'default', 'error', 'warning'; optional)

    - text (string | number; optional) | dict with keys:

    - height (string | number; optional)

    - preview (boolean; optional)

    - src (string; optional) | dict with keys:

    - color (string; optional)

    - content (number | string; optional)

    - hide (boolean; optional)

    - offsetX (number; optional)

    - offsetY (number; optional)

    - placement (a value equal to: 'top-left', 'top-right', 'bottom-left', 'bottom-right'; optional) | dict with keys:

    - checked (boolean; optional)

    - custom (boolean | number | string | dict | list; optional)

    - disabled (boolean; optional)

    - label (string; optional) | dict with keys:

    - checked (boolean; optional)

    - checkedChildren (string; optional)

    - custom (boolean | number | string | dict | list; optional)

    - disabled (boolean; optional)

    - unCheckedChildren (string; optional) | dict with keys:

    - content (number | string; optional)

    - rowSpan (number; optional) | list of dicts with keys:

    - custom (boolean | number | string | dict | list; optional)

    - disabled (boolean; optional)

    - icon (string; optional)

    - iconRenderer (a value equal to: 'AntdIcon', 'fontawesome'; optional)

    - isDivider (boolean; optional)

    - title (string; optional) | list of dicts with keys:

    - disabled (boolean; optional)

    - href (string; optional)

    - icon (string; optional)

    - iconRenderer (a value equal to: 'AntdIcon', 'fontawesome'; optional)

    - isDivider (boolean; optional)

    - title (string; optional) | dict with keys:

    - shape (a value equal to: 'circle', 'square'; optional)

    - size (dict; optional)

        `size` is a number | a value equal to: 'large', 'small',
        'default' | dict with keys:

        - lg (number; optional)

        - md (number; optional)

        - sm (number; optional)

        - xl (number; optional)

        - xs (number; optional)

        - xxl (number; optional)

    - src (string; optional) | dict with keys:

    - allowClear (boolean; optional)

    - bordered (boolean; optional)

    - className (string; optional)

    - disabled (boolean; optional)

    - listHeight (number; optional)

    - maxTagCount (number | a value equal to: 'responsive'; optional)

    - mode (a value equal to: 'multiple', 'tags'; optional)

    - optionFilterProp (a value equal to: 'value', 'label'; optional)

    - options (list of dicts; optional)

        `options` is a list of dicts with keys:

        - label (string; optional)

        - value (string | number; optional)

    - placeholder (string; optional)

    - placement (a value equal to: 'bottomLeft', 'bottomRight', 'topLeft', 'topRight'; optional)

    - size (a value equal to: 'small', 'middle', 'large'; optional)

    - style (dict; optional)

    - value (string | number | list of string | numbers; optional)

- defaultExpandedRowKeys (list of strings; optional)

- defaultFilteredValues (dict with strings as keys and values of type list; optional):
    监听或设置各字段筛选功能初始化时已选中值.

- emptyContent (a list of or a singular dash component, string or number; optional)

- enableCellClickListenColumns (list of strings; optional)

- enableHoverListen (boolean; default False)

- expandRowByClick (boolean; default False)

- expandedRowKeyToContent (list of dicts; optional)

    `expandedRowKeyToContent` is a list of dicts with keys:

    - content (a list of or a singular dash component, string or number; optional)

    - key (string | number; required)

- expandedRowWidth (string | number; optional)

- filter (dict; optional)

- filterOptions (dict; optional)

    `filterOptions` is a dict with strings as keys and values of type
    dict with keys:

    - filterCustomItems (list | boolean | number | string | dict | list; optional)

    - filterMode (a value equal to: 'checkbox', 'keyword'; optional)

    - filterMultiple (boolean; optional)

    - filterSearch (boolean; optional)

- hiddenRowKeys (list of strings; optional)

- key (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- locale (a value equal to: 'zh-cn', 'en-us'; default 'zh-cn')

- maxHeight (number; optional)

- maxWidth (number; optional)

- miniChartAnimation (boolean; default False)

- miniChartHeight (number; default 30)

- mode (a value equal to: 'client-side', 'server-side'; default 'client-side')

- nClicksButton (number; default 0)

- nClicksCell (number; default 0)

- nClicksDropdownItem (number; default 0)

- nDoubleClicksCell (number; default 0)

- pagination (dict; optional)

    `pagination` is a dict with keys:

    - current (number; optional)

    - disabled (boolean; optional)

    - hideOnSinglePage (boolean; optional)

    - pageSize (number; optional)

    - pageSizeOptions (list of numbers; optional)

    - position (a value equal to: 'topLeft', 'topCenter', 'topRight', 'bottomLeft', 'bottomCenter', 'bottomRight'; optional)

    - showQuickJumper (boolean; optional)

    - showSizeChanger (boolean; optional)

    - showTitle (boolean; optional)

    - showTotalPrefix (string; optional)

    - showTotalSuffix (string; optional)

    - simple (boolean; optional)

    - size (a value equal to: 'default', 'small'; optional)

    - total (number; optional) | boolean

- recentlyButtonClickedDataIndex (string; optional)

- recentlyButtonClickedRow (dict; optional)

- recentlyCellClickColumn (string; optional)

- recentlyCellClickRecord (dict; optional)

- recentlyCellDoubleClickColumn (string; optional)

- recentlyCellDoubleClickRecord (dict; optional)

- recentlyChangedRow (dict; optional)

- recentlyCheckedDataIndex (string; optional)

- recentlyCheckedLabel (string; optional)

- recentlyCheckedRow (dict; optional)

- recentlyCheckedStatus (boolean; optional)

- recentlyClickedDropdownItemTitle (string; optional)

- recentlyDropdownItemClickedDataIndex (string; optional)

- recentlyDropdownItemClickedRow (dict; optional)

- recentlyMouseEnterColumnDataIndex (string; optional)

- recentlyMouseEnterRow (dict; optional)

- recentlyMouseEnterRowKey (string | number; optional)

- recentlySelectDataIndex (string; optional)

- recentlySelectRow (dict; optional)

- recentlySelectValue (number | string | list of number | strings; optional)

- recentlySwitchDataIndex (string; optional)

- recentlySwitchRow (dict; optional)

- recentlySwitchStatus (boolean; optional)

- rowSelectionType (a value equal to: 'checkbox', 'radio'; optional)

- rowSelectionWidth (string | number; default 32)

- selectedRowKeys (list of string | numbers; optional)

- selectedRows (list; optional)

- selectedRowsSyncWithData (boolean; default False)

- size (a value equal to: 'small', 'default', 'large'; default 'default')

- sortOptions (dict; default {    sortDataIndexes: []})

    `sortOptions` is a dict with keys:

    - multiple (boolean | a value equal to: 'auto'; optional)

    - sortDataIndexes (list of strings; optional)

- sorter (dict; optional)

    `sorter` is a dict with keys:

    - columns (list of strings; optional)

    - orders (list of a value equal to: 'ascend', 'descend's; optional)

- sticky (dict; default False)

    `sticky` is a boolean | dict with keys:

    - offsetHeader (number; optional)

- style (dict; optional)

- summaryRowContents (list of dicts; optional)

    `summaryRowContents` is a list of dicts with keys:

    - align (a value equal to: 'left', 'center', 'right'; optional)

    - colSpan (number; optional)

    - content (a list of or a singular dash component, string or number; optional)

- summaryRowFixed (boolean; default False)

- titlePopoverInfo (dict; optional)

    `titlePopoverInfo` is a dict with strings as keys and values of
    type dict with keys:

    - content (string; optional)

    - overlayStyle (dict; optional)

    - placement (a value equal to: 'top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom'; optional)

    - title (string; optional)"""
    _children_props = ['columns[].title', 'data[]{}', 'summaryRowContents[].content', 'expandedRowKeyToContent[].content', 'emptyContent']
    _base_nodes = ['emptyContent', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdTable'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, locale=Component.UNDEFINED, containerId=Component.UNDEFINED, columns=Component.UNDEFINED, data=Component.UNDEFINED, bordered=Component.UNDEFINED, maxHeight=Component.UNDEFINED, maxWidth=Component.UNDEFINED, size=Component.UNDEFINED, rowSelectionType=Component.UNDEFINED, selectedRowKeys=Component.UNDEFINED, rowSelectionWidth=Component.UNDEFINED, selectedRows=Component.UNDEFINED, selectedRowsSyncWithData=Component.UNDEFINED, sticky=Component.UNDEFINED, enableHoverListen=Component.UNDEFINED, recentlyMouseEnterColumnDataIndex=Component.UNDEFINED, recentlyMouseEnterRowKey=Component.UNDEFINED, recentlyMouseEnterRow=Component.UNDEFINED, titlePopoverInfo=Component.UNDEFINED, columnsFormatConstraint=Component.UNDEFINED, sortOptions=Component.UNDEFINED, filterOptions=Component.UNDEFINED, defaultFilteredValues=Component.UNDEFINED, pagination=Component.UNDEFINED, currentData=Component.UNDEFINED, recentlyChangedRow=Component.UNDEFINED, sorter=Component.UNDEFINED, filter=Component.UNDEFINED, mode=Component.UNDEFINED, summaryRowContents=Component.UNDEFINED, summaryRowFixed=Component.UNDEFINED, conditionalStyleFuncs=Component.UNDEFINED, expandedRowKeyToContent=Component.UNDEFINED, expandedRowWidth=Component.UNDEFINED, expandRowByClick=Component.UNDEFINED, defaultExpandedRowKeys=Component.UNDEFINED, enableCellClickListenColumns=Component.UNDEFINED, recentlyCellClickColumn=Component.UNDEFINED, recentlyCellClickRecord=Component.UNDEFINED, nClicksCell=Component.UNDEFINED, recentlyCellDoubleClickColumn=Component.UNDEFINED, recentlyCellDoubleClickRecord=Component.UNDEFINED, nDoubleClicksCell=Component.UNDEFINED, emptyContent=Component.UNDEFINED, cellUpdateOptimize=Component.UNDEFINED, miniChartHeight=Component.UNDEFINED, miniChartAnimation=Component.UNDEFINED, recentlyButtonClickedRow=Component.UNDEFINED, nClicksButton=Component.UNDEFINED, clickedContent=Component.UNDEFINED, recentlyButtonClickedDataIndex=Component.UNDEFINED, customFormatFuncs=Component.UNDEFINED, recentlyCheckedRow=Component.UNDEFINED, recentlyCheckedLabel=Component.UNDEFINED, recentlyCheckedDataIndex=Component.UNDEFINED, recentlyCheckedStatus=Component.UNDEFINED, recentlySwitchRow=Component.UNDEFINED, recentlySwitchDataIndex=Component.UNDEFINED, recentlySwitchStatus=Component.UNDEFINED, nClicksDropdownItem=Component.UNDEFINED, recentlyClickedDropdownItemTitle=Component.UNDEFINED, recentlyDropdownItemClickedDataIndex=Component.UNDEFINED, recentlyDropdownItemClickedRow=Component.UNDEFINED, recentlySelectRow=Component.UNDEFINED, recentlySelectDataIndex=Component.UNDEFINED, recentlySelectValue=Component.UNDEFINED, hiddenRowKeys=Component.UNDEFINED, columnsWidthResizable=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'bordered', 'cellUpdateOptimize', 'className', 'clickedContent', 'columns', 'columnsFormatConstraint', 'columnsWidthResizable', 'conditionalStyleFuncs', 'containerId', 'currentData', 'customFormatFuncs', 'data', 'defaultExpandedRowKeys', 'defaultFilteredValues', 'emptyContent', 'enableCellClickListenColumns', 'enableHoverListen', 'expandRowByClick', 'expandedRowKeyToContent', 'expandedRowWidth', 'filter', 'filterOptions', 'hiddenRowKeys', 'key', 'loading_state', 'locale', 'maxHeight', 'maxWidth', 'miniChartAnimation', 'miniChartHeight', 'mode', 'nClicksButton', 'nClicksCell', 'nClicksDropdownItem', 'nDoubleClicksCell', 'pagination', 'recentlyButtonClickedDataIndex', 'recentlyButtonClickedRow', 'recentlyCellClickColumn', 'recentlyCellClickRecord', 'recentlyCellDoubleClickColumn', 'recentlyCellDoubleClickRecord', 'recentlyChangedRow', 'recentlyCheckedDataIndex', 'recentlyCheckedLabel', 'recentlyCheckedRow', 'recentlyCheckedStatus', 'recentlyClickedDropdownItemTitle', 'recentlyDropdownItemClickedDataIndex', 'recentlyDropdownItemClickedRow', 'recentlyMouseEnterColumnDataIndex', 'recentlyMouseEnterRow', 'recentlyMouseEnterRowKey', 'recentlySelectDataIndex', 'recentlySelectRow', 'recentlySelectValue', 'recentlySwitchDataIndex', 'recentlySwitchRow', 'recentlySwitchStatus', 'rowSelectionType', 'rowSelectionWidth', 'selectedRowKeys', 'selectedRows', 'selectedRowsSyncWithData', 'size', 'sortOptions', 'sorter', 'sticky', 'style', 'summaryRowContents', 'summaryRowFixed', 'titlePopoverInfo']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'bordered', 'cellUpdateOptimize', 'className', 'clickedContent', 'columns', 'columnsFormatConstraint', 'columnsWidthResizable', 'conditionalStyleFuncs', 'containerId', 'currentData', 'customFormatFuncs', 'data', 'defaultExpandedRowKeys', 'defaultFilteredValues', 'emptyContent', 'enableCellClickListenColumns', 'enableHoverListen', 'expandRowByClick', 'expandedRowKeyToContent', 'expandedRowWidth', 'filter', 'filterOptions', 'hiddenRowKeys', 'key', 'loading_state', 'locale', 'maxHeight', 'maxWidth', 'miniChartAnimation', 'miniChartHeight', 'mode', 'nClicksButton', 'nClicksCell', 'nClicksDropdownItem', 'nDoubleClicksCell', 'pagination', 'recentlyButtonClickedDataIndex', 'recentlyButtonClickedRow', 'recentlyCellClickColumn', 'recentlyCellClickRecord', 'recentlyCellDoubleClickColumn', 'recentlyCellDoubleClickRecord', 'recentlyChangedRow', 'recentlyCheckedDataIndex', 'recentlyCheckedLabel', 'recentlyCheckedRow', 'recentlyCheckedStatus', 'recentlyClickedDropdownItemTitle', 'recentlyDropdownItemClickedDataIndex', 'recentlyDropdownItemClickedRow', 'recentlyMouseEnterColumnDataIndex', 'recentlyMouseEnterRow', 'recentlyMouseEnterRowKey', 'recentlySelectDataIndex', 'recentlySelectRow', 'recentlySelectValue', 'recentlySwitchDataIndex', 'recentlySwitchRow', 'recentlySwitchStatus', 'rowSelectionType', 'rowSelectionWidth', 'selectedRowKeys', 'selectedRows', 'selectedRowsSyncWithData', 'size', 'sortOptions', 'sorter', 'sticky', 'style', 'summaryRowContents', 'summaryRowFixed', 'titlePopoverInfo']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdTable, self).__init__(**args)
