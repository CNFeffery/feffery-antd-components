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

- pageSize (number; optional)

- pageSizeOptions (list of numbers; optional)

- persisted_props (list of a value equal to: 'current', 'pageSize's; default ['current', 'pageSize']):
    Properties whose user interactions will persist after refreshing
    the  component or the page. Since only `value` is allowed this
    prop can  normally be ignored.

- persistence (boolean | string | number; optional):
    Used to allow user interactions in this component to be persisted
    when  the component - or the page - is refreshed. If `persisted`
    is truthy and  hasn't changed from its previous value, a `value`
    that the user has  changed while using the app will keep that
    change, as long as  the new `value` also matches what was given
    originally.  Used in conjunction with `persistence_type`.

- persistence_type (a value equal to: 'local', 'session', 'memory'; default 'local'):
    Where persisted user changes will be stored:  memory: only kept in
    memory, reset on page refresh.  local: window.localStorage, data
    is kept after the browser quit.  session: window.sessionStorage,
    data is cleared once the browser quit.

- showQuickJumper (boolean; optional)

- showSizeChanger (boolean; optional)

- showTotalPrefix (string; optional)

- showTotalSuffix (string; optional)

- simple (boolean; optional)

- size (a value equal to: 'default', 'small'; optional)

- style (dict; optional)

- total (number; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdPagination'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, locale=Component.UNDEFINED, defaultCurrent=Component.UNDEFINED, defaultPageSize=Component.UNDEFINED, current=Component.UNDEFINED, disabled=Component.UNDEFINED, hideOnSinglePage=Component.UNDEFINED, pageSize=Component.UNDEFINED, pageSizeOptions=Component.UNDEFINED, showQuickJumper=Component.UNDEFINED, showSizeChanger=Component.UNDEFINED, showTotalPrefix=Component.UNDEFINED, showTotalSuffix=Component.UNDEFINED, simple=Component.UNDEFINED, size=Component.UNDEFINED, total=Component.UNDEFINED, loading_state=Component.UNDEFINED, persistence=Component.UNDEFINED, persisted_props=Component.UNDEFINED, persistence_type=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'current', 'defaultCurrent', 'defaultPageSize', 'disabled', 'hideOnSinglePage', 'key', 'loading_state', 'locale', 'pageSize', 'pageSizeOptions', 'persisted_props', 'persistence', 'persistence_type', 'showQuickJumper', 'showSizeChanger', 'showTotalPrefix', 'showTotalSuffix', 'simple', 'size', 'style', 'total']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'current', 'defaultCurrent', 'defaultPageSize', 'disabled', 'hideOnSinglePage', 'key', 'loading_state', 'locale', 'pageSize', 'pageSizeOptions', 'persisted_props', 'persistence', 'persistence_type', 'showQuickJumper', 'showSizeChanger', 'showTotalPrefix', 'showTotalSuffix', 'simple', 'size', 'style', 'total']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdPagination, self).__init__(**args)
