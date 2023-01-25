# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdTable(Component):
    """An AntdTable component.


Keyword arguments:

- id (string; optional)

- bordered (boolean; default False)

- checkedDataIndex (string; optional)

- className (string; optional)

- clickedContent (string; optional)

- columns (list of dicts; optional)

    `columns` is a list of dicts with keys:

    - align (a value equal to: 'left', 'center', 'right'; optional)

    - dataIndex (string; required)

    - editable (boolean; optional)

    - ellipsis (boolean | number | string | dict | list; optional)

    - fixed (a value equal to: 'left', 'right'; optional)

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

            - title (string; required)

        - renderLinkText (string; optional)

        - renderType (a value equal to: 'link', 'ellipsis', 'mini-line', 'mini-bar', 'mini-progress', 'mini-ring-progress', 'mini-area', 'tags', 'button', 'copyable', 'status-badge', 'image', 'custom-format', 'ellipsis-copyable', 'corner-mark', 'checkbox', 'switch', 'row-merge', 'dropdown-links', 'image-avatar'; optional)

        - ringProgressFontSize (number; optional)

        - tooltipCustomContent (string; optional)

    - sorter (boolean | number | string | dict | list; optional)

    - title (string; required)

    - title_ (string; optional)

    - width (number | string; optional)

- columnsFormatConstraint (dict; optional)

    `columnsFormatConstraint` is a dict with strings as keys and
    values of type dict with keys:

    - content (string; optional)

    - rule (string; optional)

- conditionalStyleFuncs (dict with strings as keys and values of type string; optional)

- containerId (string; optional)

- currentData (list; optional)

- customFormatFuncs (dict with strings as keys and values of type string; optional)

- data (list of dicts; optional)

    `data` is a list of dicts with strings as keys and values of type
    string | number | dict with keys:

    - content (string; optional)

    - disabled (boolean; optional)

    - href (string; optional)

    - target (string; optional)

      Or list of numbers | dict with keys:

    - color (string; optional)

    - tag (string | number; optional) | list of dicts with keys:

    - color (string; optional)

    - tag (string | number; optional) | dict with keys:

    - content (string | number; optional)

    - danger (boolean; optional)

    - disabled (boolean; optional)

    - href (string; optional)

    - style (dict; optional)

    - target (string; optional)

    - type (a value equal to: 'primary', 'ghost', 'dashed', 'link', 'text', 'default'; optional) | list of dicts with keys:

    - content (string | number; optional)

    - danger (boolean; optional)

    - disabled (boolean; optional)

    - href (string; optional)

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

    - disabled (boolean; optional)

    - label (string; optional) | dict with keys:

    - checked (boolean; optional)

    - checkedChildren (string; optional)

    - disabled (boolean; optional)

    - label (string; optional)

    - unCheckedChildren (string; optional) | dict with keys:

    - content (number | string; optional)

    - rowSpan (number; optional) | list of dicts with keys:

    - disabled (boolean; optional)

    - href (string; optional)

    - icon (string; optional)

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

    - src (string; optional)

- emptyContent (a list of or a singular dash component, string or number; optional)

- enableCellClickListenColumns (boolean; optional)

- enableHoverListen (boolean; default False)

- expandRowByClick (boolean; optional)

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

- pagination (dict; optional)

    `pagination` is a dict with keys:

    - current (number; optional)

    - disabled (boolean; optional)

    - hideOnSinglePage (boolean; optional)

    - pageSize (number; optional)

    - pageSizeOptions (list of numbers; optional)

    - position (a value equal to: 'topLeft', 'topCenter', 'topRight', 'bottomLeft', 'bottomCenter', 'bottomRight'; optional)

    - responsive (boolean; optional)

    - showQuickJumper (boolean; optional)

    - showSizeChanger (boolean; optional)

    - showTitle (boolean; optional)

    - showTotalPrefix (string; optional)

    - showTotalSuffix (string; optional)

    - simple (boolean; optional)

    - size (a value equal to: 'default', 'small'; optional)

    - total (number; optional)

- recentlyButtonClickedRow (dict; optional)

- recentlyCellClickColumn (string; optional)

- recentlyCellClickRecord (string | number; optional)

- recentlyChangedRow (dict; optional)

- recentlyCheckedLabel (string; optional)

- recentlyCheckedRow (dict; optional)

- recentlyCheckedStatus (boolean; optional)

- recentlyMouseEnterColumn (string; optional)

- recentlyMouseEnterRow (string | number; optional)

- recentlySwitchRow (dict; optional)

- recentlySwitchStatus (boolean; optional)

- rowSelectionType (a value equal to: 'checkbox', 'radio'; optional)

- rowSelectionWidth (string | number; optional)

- selectedRowKeys (list of string | numbers; optional)

- selectedRows (list; optional)

- size (a value equal to: 'small', 'default', 'large'; default 'default')

- sortOptions (dict; default {    sortDataIndexes: []})

    `sortOptions` is a dict with keys:

    - multiple (boolean | a value equal to: 'auto'; optional)

    - sortDataIndexes (list of strings; optional)

- sorter (dict; optional)

    `sorter` is a dict with keys:

    - columns (list of strings; optional)

    - orders (list of a value equal to: 'ascend', 'descend's; optional)

- sticky (dict; optional)

    `sticky` is a boolean | dict with keys:

    - offsetHeader (number; optional)

- style (dict; optional)

- summaryRowContents (list of dicts; optional)

    `summaryRowContents` is a list of dicts with keys:

    - align (a value equal to: 'left', 'center', 'right'; optional)

    - colSpan (number; optional)

    - content (string | number; optional)

- summaryRowFixed (boolean; default False)

- switchDataIndex (string; optional)

- titlePopoverInfo (dict; optional)

    `titlePopoverInfo` is a dict with strings as keys and values of
    type dict with keys:

    - content (string; optional)

    - overlayStyle (dict; optional)

    - placement (a value equal to: 'top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom'; optional)

    - title (string; optional)"""
    _children_props = ['expandedRowKeyToContent[].content', 'emptyContent']
    _base_nodes = ['emptyContent', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdTable'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, locale=Component.UNDEFINED, containerId=Component.UNDEFINED, columns=Component.UNDEFINED, miniChartHeight=Component.UNDEFINED, miniChartAnimation=Component.UNDEFINED, size=Component.UNDEFINED, rowSelectionType=Component.UNDEFINED, selectedRowKeys=Component.UNDEFINED, rowSelectionWidth=Component.UNDEFINED, selectedRows=Component.UNDEFINED, sticky=Component.UNDEFINED, enableHoverListen=Component.UNDEFINED, recentlyMouseEnterColumn=Component.UNDEFINED, recentlyMouseEnterRow=Component.UNDEFINED, titlePopoverInfo=Component.UNDEFINED, columnsFormatConstraint=Component.UNDEFINED, data=Component.UNDEFINED, sortOptions=Component.UNDEFINED, filterOptions=Component.UNDEFINED, pagination=Component.UNDEFINED, bordered=Component.UNDEFINED, maxHeight=Component.UNDEFINED, maxWidth=Component.UNDEFINED, currentData=Component.UNDEFINED, recentlyChangedRow=Component.UNDEFINED, recentlyButtonClickedRow=Component.UNDEFINED, nClicksButton=Component.UNDEFINED, clickedContent=Component.UNDEFINED, sorter=Component.UNDEFINED, filter=Component.UNDEFINED, mode=Component.UNDEFINED, summaryRowContents=Component.UNDEFINED, summaryRowFixed=Component.UNDEFINED, customFormatFuncs=Component.UNDEFINED, conditionalStyleFuncs=Component.UNDEFINED, expandedRowKeyToContent=Component.UNDEFINED, expandedRowWidth=Component.UNDEFINED, expandRowByClick=Component.UNDEFINED, recentlyCheckedRow=Component.UNDEFINED, recentlyCheckedLabel=Component.UNDEFINED, checkedDataIndex=Component.UNDEFINED, recentlyCheckedStatus=Component.UNDEFINED, recentlySwitchRow=Component.UNDEFINED, switchDataIndex=Component.UNDEFINED, recentlySwitchStatus=Component.UNDEFINED, enableCellClickListenColumns=Component.UNDEFINED, recentlyCellClickColumn=Component.UNDEFINED, recentlyCellClickRecord=Component.UNDEFINED, nClicksCell=Component.UNDEFINED, emptyContent=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'bordered', 'checkedDataIndex', 'className', 'clickedContent', 'columns', 'columnsFormatConstraint', 'conditionalStyleFuncs', 'containerId', 'currentData', 'customFormatFuncs', 'data', 'emptyContent', 'enableCellClickListenColumns', 'enableHoverListen', 'expandRowByClick', 'expandedRowKeyToContent', 'expandedRowWidth', 'filter', 'filterOptions', 'key', 'loading_state', 'locale', 'maxHeight', 'maxWidth', 'miniChartAnimation', 'miniChartHeight', 'mode', 'nClicksButton', 'nClicksCell', 'pagination', 'recentlyButtonClickedRow', 'recentlyCellClickColumn', 'recentlyCellClickRecord', 'recentlyChangedRow', 'recentlyCheckedLabel', 'recentlyCheckedRow', 'recentlyCheckedStatus', 'recentlyMouseEnterColumn', 'recentlyMouseEnterRow', 'recentlySwitchRow', 'recentlySwitchStatus', 'rowSelectionType', 'rowSelectionWidth', 'selectedRowKeys', 'selectedRows', 'size', 'sortOptions', 'sorter', 'sticky', 'style', 'summaryRowContents', 'summaryRowFixed', 'switchDataIndex', 'titlePopoverInfo']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'bordered', 'checkedDataIndex', 'className', 'clickedContent', 'columns', 'columnsFormatConstraint', 'conditionalStyleFuncs', 'containerId', 'currentData', 'customFormatFuncs', 'data', 'emptyContent', 'enableCellClickListenColumns', 'enableHoverListen', 'expandRowByClick', 'expandedRowKeyToContent', 'expandedRowWidth', 'filter', 'filterOptions', 'key', 'loading_state', 'locale', 'maxHeight', 'maxWidth', 'miniChartAnimation', 'miniChartHeight', 'mode', 'nClicksButton', 'nClicksCell', 'pagination', 'recentlyButtonClickedRow', 'recentlyCellClickColumn', 'recentlyCellClickRecord', 'recentlyChangedRow', 'recentlyCheckedLabel', 'recentlyCheckedRow', 'recentlyCheckedStatus', 'recentlyMouseEnterColumn', 'recentlyMouseEnterRow', 'recentlySwitchRow', 'recentlySwitchStatus', 'rowSelectionType', 'rowSelectionWidth', 'selectedRowKeys', 'selectedRows', 'size', 'sortOptions', 'sorter', 'sticky', 'style', 'summaryRowContents', 'summaryRowFixed', 'switchDataIndex', 'titlePopoverInfo']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdTable, self).__init__(**args)
