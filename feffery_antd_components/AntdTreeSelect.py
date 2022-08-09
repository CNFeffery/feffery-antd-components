# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdTreeSelect(Component):
    """An AntdTreeSelect component.


Keyword arguments:

- id (string; optional)

- allowClear (boolean; default True)

- bordered (boolean; optional)

- className (string; optional)

- defaultValue (string | number | list of string | numbers; optional)

- disabled (boolean; optional)

- key (string; optional)

- listHeight (number; default 256)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- locale (a value equal to: 'zh-cn', 'en-us'; default 'zh-cn')

- maxTagCount (number; optional)

- multiple (boolean; optional)

- persisted_props (list of a value equal to: 'value's; default ['value']):
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

- placeholder (string; optional)

- placement (a value equal to: 'bottomLeft', 'bottomRight', 'topLeft', 'topRight'; optional)

- size (a value equal to: 'small', 'middle', 'large'; optional)

- status (a value equal to: 'error', 'warning'; optional)

- style (dict; optional)

- treeCheckStrictly (boolean; optional)

- treeCheckable (boolean; optional)

- treeData (optional)

- treeDefaultExpandAll (boolean; optional)

- treeDefaultExpandedKeys (list of strings; optional)

- treeExpandedKeys (list of strings; optional)

- treeLine (boolean; optional)

- treeNodeFilterProp (a value equal to: 'title', 'value'; default 'value')

- value (string | number | list of string | numbers; optional)

- virtual (boolean; default False)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdTreeSelect'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, locale=Component.UNDEFINED, treeData=Component.UNDEFINED, allowClear=Component.UNDEFINED, bordered=Component.UNDEFINED, treeLine=Component.UNDEFINED, placeholder=Component.UNDEFINED, value=Component.UNDEFINED, defaultValue=Component.UNDEFINED, maxTagCount=Component.UNDEFINED, listHeight=Component.UNDEFINED, multiple=Component.UNDEFINED, size=Component.UNDEFINED, treeCheckable=Component.UNDEFINED, treeCheckStrictly=Component.UNDEFINED, treeDefaultExpandAll=Component.UNDEFINED, treeDefaultExpandedKeys=Component.UNDEFINED, treeExpandedKeys=Component.UNDEFINED, virtual=Component.UNDEFINED, disabled=Component.UNDEFINED, placement=Component.UNDEFINED, status=Component.UNDEFINED, treeNodeFilterProp=Component.UNDEFINED, loading_state=Component.UNDEFINED, persistence=Component.UNDEFINED, persisted_props=Component.UNDEFINED, persistence_type=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'allowClear', 'bordered', 'className', 'defaultValue', 'disabled', 'key', 'listHeight', 'loading_state', 'locale', 'maxTagCount', 'multiple', 'persisted_props', 'persistence', 'persistence_type', 'placeholder', 'placement', 'size', 'status', 'style', 'treeCheckStrictly', 'treeCheckable', 'treeData', 'treeDefaultExpandAll', 'treeDefaultExpandedKeys', 'treeExpandedKeys', 'treeLine', 'treeNodeFilterProp', 'value', 'virtual']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'allowClear', 'bordered', 'className', 'defaultValue', 'disabled', 'key', 'listHeight', 'loading_state', 'locale', 'maxTagCount', 'multiple', 'persisted_props', 'persistence', 'persistence_type', 'placeholder', 'placement', 'size', 'status', 'style', 'treeCheckStrictly', 'treeCheckable', 'treeData', 'treeDefaultExpandAll', 'treeDefaultExpandedKeys', 'treeExpandedKeys', 'treeLine', 'treeNodeFilterProp', 'value', 'virtual']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdTreeSelect, self).__init__(**args)
