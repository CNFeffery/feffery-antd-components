# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdTreeSelect(Component):
    """An AntdTreeSelect component.


Keyword arguments:

- id (string; optional)

- allowClear (boolean; default True)

- autoClearSearchValue (boolean; default True)

- bordered (boolean; default True)

- className (string | dict; optional)

- defaultValue (string | number | list of string | numbers; optional)

- disabled (boolean; default False)

- dropdownAfter (a list of or a singular dash component, string or number; optional)

- dropdownBefore (a list of or a singular dash component, string or number; optional)

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

- maxTagCount (number | a value equal to: 'responsive'; optional)

- multiple (boolean; default False)

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

- placement (a value equal to: 'bottomLeft', 'bottomRight', 'topLeft', 'topRight'; default 'bottomLeft')

- popupContainer (a value equal to: 'parent', 'body'; default 'body')

- readOnly (boolean; optional)

- showCheckedStrategy (a value equal to: 'show-all', 'show-parent', 'show-child'; default 'show-all')

- size (a value equal to: 'small', 'middle', 'large'; default 'middle')

- status (a value equal to: 'error', 'warning'; optional)

- style (dict; optional)

- treeCheckStrictly (boolean; default False)

- treeCheckable (boolean; default False)

- treeData (list; required)

- treeDataMode (a value equal to: 'tree', 'flat'; default 'tree')

- treeDefaultExpandAll (boolean; default False)

- treeDefaultExpandedKeys (list of strings; optional)

- treeExpandedKeys (list of strings; optional)

- treeLine (boolean; default False)

- treeNodeFilterProp (a value equal to: 'title', 'value'; default 'value')

- value (string | number | list of string | numbers; optional)

- virtual (boolean; default True)"""
    _children_props = ['dropdownBefore', 'dropdownAfter']
    _base_nodes = ['dropdownBefore', 'dropdownAfter', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdTreeSelect'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, locale=Component.UNDEFINED, treeDataMode=Component.UNDEFINED, treeData=Component.REQUIRED, disabled=Component.UNDEFINED, size=Component.UNDEFINED, bordered=Component.UNDEFINED, placeholder=Component.UNDEFINED, placement=Component.UNDEFINED, treeLine=Component.UNDEFINED, value=Component.UNDEFINED, defaultValue=Component.UNDEFINED, maxTagCount=Component.UNDEFINED, listHeight=Component.UNDEFINED, multiple=Component.UNDEFINED, treeCheckable=Component.UNDEFINED, treeCheckStrictly=Component.UNDEFINED, treeDefaultExpandAll=Component.UNDEFINED, treeDefaultExpandedKeys=Component.UNDEFINED, treeExpandedKeys=Component.UNDEFINED, virtual=Component.UNDEFINED, status=Component.UNDEFINED, allowClear=Component.UNDEFINED, treeNodeFilterProp=Component.UNDEFINED, autoClearSearchValue=Component.UNDEFINED, showCheckedStrategy=Component.UNDEFINED, dropdownBefore=Component.UNDEFINED, dropdownAfter=Component.UNDEFINED, readOnly=Component.UNDEFINED, popupContainer=Component.UNDEFINED, loading_state=Component.UNDEFINED, persistence=Component.UNDEFINED, persisted_props=Component.UNDEFINED, persistence_type=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'allowClear', 'autoClearSearchValue', 'bordered', 'className', 'defaultValue', 'disabled', 'dropdownAfter', 'dropdownBefore', 'key', 'listHeight', 'loading_state', 'locale', 'maxTagCount', 'multiple', 'persisted_props', 'persistence', 'persistence_type', 'placeholder', 'placement', 'popupContainer', 'readOnly', 'showCheckedStrategy', 'size', 'status', 'style', 'treeCheckStrictly', 'treeCheckable', 'treeData', 'treeDataMode', 'treeDefaultExpandAll', 'treeDefaultExpandedKeys', 'treeExpandedKeys', 'treeLine', 'treeNodeFilterProp', 'value', 'virtual']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'allowClear', 'autoClearSearchValue', 'bordered', 'className', 'defaultValue', 'disabled', 'dropdownAfter', 'dropdownBefore', 'key', 'listHeight', 'loading_state', 'locale', 'maxTagCount', 'multiple', 'persisted_props', 'persistence', 'persistence_type', 'placeholder', 'placement', 'popupContainer', 'readOnly', 'showCheckedStrategy', 'size', 'status', 'style', 'treeCheckStrictly', 'treeCheckable', 'treeData', 'treeDataMode', 'treeDefaultExpandAll', 'treeDefaultExpandedKeys', 'treeExpandedKeys', 'treeLine', 'treeNodeFilterProp', 'value', 'virtual']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        for k in ['treeData']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(AntdTreeSelect, self).__init__(**args)
