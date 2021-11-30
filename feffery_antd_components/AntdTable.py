# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdTable(Component):
    """An AntdTable component.


Keyword arguments:

- id (string; optional)

- bordered (boolean; default False)

- className (string; optional)

- clickedContent (string; optional)

- columns (list of dicts; optional)

    `columns` is a list of dicts with keys:

    - align (a value equal to: 'left', 'center', 'right'; optional)

    - dataIndex (string; required)

    - editable (boolean; optional)

    - ellipsis (boolean | number | string | dict | list; optional)

    - fixed (a value equal to: 'left', 'right'; optional)

    - render (boolean | number | string | dict | list; optional)

    - renderOptions (dict; optional)

        `renderOptions` is a dict with keys:

        - renderButtonPopConfirmProps (dict; optional)

            `renderButtonPopConfirmProps` is a dict with keys:

            - cancelText (string; optional)

            - okText (string; optional)

            - title (string; required)

        - renderLinkText (string; optional)

        - renderType (a value equal to: 'link', 'ellipsis', 'mini-line', 'mini-bar', 'mini-progress', 'mini-area', 'tags', 'button'; optional)

    - sorter (boolean | number | string | dict | list; optional)

    - title (string; required)

    - title_ (string; optional)

    - width (number | string; optional)

- currentData (list; optional)

- data (list of dicts; optional)

- filter (dict; optional)

- filterOptions (dict; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- maxHeight (number; optional)

- mode (a value equal to: 'client-side', 'server-side'; default 'client-side')

- nClicksButton (number; default 0)

- pagination (dict; optional)

    `pagination` is a boolean | dict with keys:

    - current (number; optional)

    - hideOnSinglePage (boolean; optional)

    - pageSize (number; optional)

    - pageSizeOptions (list of numbers; optional)

    - position (a value equal to: 'topLeft', 'topCenter', 'topRight', 'bottomLeft', 'bottomCenter', 'bottomRight'; optional)

    - showQuickJumper (boolean; optional)

    - showTotalPrefix (string; optional)

    - showTotalSuffix (string; optional)

    - simple (boolean; optional)

    - total (number; optional)

- popupContainerId (string; optional)

- recentlyButtonClickedRow (dict; optional)

- recentlyChangedRow (dict; optional)

- recentlyClickedColumn (string; optional)

- recentlyClickedRow (string; optional)

- recentlyMouseEnterColumn (string; optional)

- recentlyMouseEnterRow (string; optional)

- recentlyMouseLeaveColumn (string; optional)

- recentlyMouseLeaveRow (string; optional)

- rowSelectionType (a value equal to: 'checkbox', 'radio'; optional)

- selectedRowKeys (list of strings; optional)

- selectedRows (list; optional)

- size (a value equal to: 'small', 'default', 'large'; default 'default')

- sortOptions (dict; default {    sortDataIndexes: []})

    `sortOptions` is a dict with keys:

    - multiple (boolean; optional)

    - sortDataIndexes (list of strings; optional)

- sorter (dict; optional)

    `sorter` is a dict with keys:

    - columns (list of strings; optional)

    - orders (list of a value equal to: 'ascend', 'descend's; optional)

- style (dict; optional)

- titlePopoverInfo (dict; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, columns=Component.UNDEFINED, size=Component.UNDEFINED, rowSelectionType=Component.UNDEFINED, selectedRowKeys=Component.UNDEFINED, selectedRows=Component.UNDEFINED, recentlyClickedColumn=Component.UNDEFINED, recentlyMouseEnterColumn=Component.UNDEFINED, recentlyMouseLeaveColumn=Component.UNDEFINED, recentlyClickedRow=Component.UNDEFINED, recentlyMouseEnterRow=Component.UNDEFINED, recentlyMouseLeaveRow=Component.UNDEFINED, titlePopoverInfo=Component.UNDEFINED, data=Component.UNDEFINED, sortOptions=Component.UNDEFINED, filterOptions=Component.UNDEFINED, pagination=Component.UNDEFINED, bordered=Component.UNDEFINED, maxHeight=Component.UNDEFINED, currentData=Component.UNDEFINED, recentlyChangedRow=Component.UNDEFINED, recentlyButtonClickedRow=Component.UNDEFINED, nClicksButton=Component.UNDEFINED, clickedContent=Component.UNDEFINED, sorter=Component.UNDEFINED, filter=Component.UNDEFINED, mode=Component.UNDEFINED, popupContainerId=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'bordered', 'className', 'clickedContent', 'columns', 'currentData', 'data', 'filter', 'filterOptions', 'loading_state', 'maxHeight', 'mode', 'nClicksButton', 'pagination', 'popupContainerId', 'recentlyButtonClickedRow', 'recentlyChangedRow', 'recentlyClickedColumn', 'recentlyClickedRow', 'recentlyMouseEnterColumn', 'recentlyMouseEnterRow', 'recentlyMouseLeaveColumn', 'recentlyMouseLeaveRow', 'rowSelectionType', 'selectedRowKeys', 'selectedRows', 'size', 'sortOptions', 'sorter', 'style', 'titlePopoverInfo']
        self._type = 'AntdTable'
        self._namespace = 'feffery_antd_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'bordered', 'className', 'clickedContent', 'columns', 'currentData', 'data', 'filter', 'filterOptions', 'loading_state', 'maxHeight', 'mode', 'nClicksButton', 'pagination', 'popupContainerId', 'recentlyButtonClickedRow', 'recentlyChangedRow', 'recentlyClickedColumn', 'recentlyClickedRow', 'recentlyMouseEnterColumn', 'recentlyMouseEnterRow', 'recentlyMouseLeaveColumn', 'recentlyMouseLeaveRow', 'rowSelectionType', 'selectedRowKeys', 'selectedRows', 'size', 'sortOptions', 'sorter', 'style', 'titlePopoverInfo']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdTable, self).__init__(**args)
