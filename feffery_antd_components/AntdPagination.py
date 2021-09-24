# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdPagination(Component):
    """An AntdPagination component.


Keyword arguments:

- id (string; optional)

- className (string; optional)

- current (number; optional)

- defaultCurrent (number; default 1)

- defaultPageSize (number; default 10)

- disabled (boolean; optional)

- hideOnSinglePage (boolean; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- pageSize (number; optional)

- pageSizeOptions (list of numbers; optional)

- showQuickJumper (boolean; optional)

- showSizeChanger (boolean; optional)

- showTotalPrefix (string; optional)

- showTotalSuffix (string; optional)

- simple (boolean; optional)

- size (string; optional)

- style (dict; optional)

- total (number; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, defaultCurrent=Component.UNDEFINED, defaultPageSize=Component.UNDEFINED, current=Component.UNDEFINED, disabled=Component.UNDEFINED, hideOnSinglePage=Component.UNDEFINED, pageSize=Component.UNDEFINED, pageSizeOptions=Component.UNDEFINED, showQuickJumper=Component.UNDEFINED, showSizeChanger=Component.UNDEFINED, showTotalPrefix=Component.UNDEFINED, showTotalSuffix=Component.UNDEFINED, simple=Component.UNDEFINED, size=Component.UNDEFINED, total=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'current', 'defaultCurrent', 'defaultPageSize', 'disabled', 'hideOnSinglePage', 'loading_state', 'pageSize', 'pageSizeOptions', 'showQuickJumper', 'showSizeChanger', 'showTotalPrefix', 'showTotalSuffix', 'simple', 'size', 'style', 'total']
        self._type = 'AntdPagination'
        self._namespace = 'feffery_antd_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'current', 'defaultCurrent', 'defaultPageSize', 'disabled', 'hideOnSinglePage', 'loading_state', 'pageSize', 'pageSizeOptions', 'showQuickJumper', 'showSizeChanger', 'showTotalPrefix', 'showTotalSuffix', 'simple', 'size', 'style', 'total']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdPagination, self).__init__(**args)
