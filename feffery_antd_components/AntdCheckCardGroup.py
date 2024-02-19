# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdCheckCardGroup(Component):
    """An AntdCheckCardGroup component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional)

- id (string; optional)

- allowNoValue (boolean; default True)

- bordered (boolean; default True)

- className (string | dict; optional)

- defaultValue (number | string | list of number | strings; optional)

- disabled (boolean; default False)

- key (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- multiple (boolean; default False)

- name (string; optional):
    用于在基于AntdForm的表单值自动搜集功能中，充当当前表单项的字段名  缺省时会以id作为字段名.

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

- readOnly (boolean; default False)

- size (a value equal to: 'small', 'default', 'large'; default 'default')

- style (dict; optional)

- value (number | string | list of number | strings; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdCheckCardGroup'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, name=Component.UNDEFINED, multiple=Component.UNDEFINED, allowNoValue=Component.UNDEFINED, bordered=Component.UNDEFINED, value=Component.UNDEFINED, defaultValue=Component.UNDEFINED, disabled=Component.UNDEFINED, size=Component.UNDEFINED, readOnly=Component.UNDEFINED, loading_state=Component.UNDEFINED, persistence=Component.UNDEFINED, persisted_props=Component.UNDEFINED, persistence_type=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'allowNoValue', 'bordered', 'className', 'defaultValue', 'disabled', 'key', 'loading_state', 'multiple', 'name', 'persisted_props', 'persistence', 'persistence_type', 'readOnly', 'size', 'style', 'value']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'allowNoValue', 'bordered', 'className', 'defaultValue', 'disabled', 'key', 'loading_state', 'multiple', 'name', 'persisted_props', 'persistence', 'persistence_type', 'readOnly', 'size', 'style', 'value']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdCheckCardGroup, self).__init__(children=children, **args)
