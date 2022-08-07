# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdSelect(Component):
    """An AntdSelect component.


Keyword arguments:

- id (string; optional)

- allowClear (boolean; default True)

- className (string; optional)

- colorsMode (a value equal to: 'sequential', 'diverging'; default 'sequential')

- colorsNameWidth (number; default 40)

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

- maxTagCount (number; default 5)

- mode (a value equal to: 'multiple', 'tags'; optional)

- optionFilterProp (a value equal to: 'value', 'label'; default 'value')

- options (list of dicts; optional)

    `options` is a list of dicts with keys:

    - colors (list of strings; optional)

    - disabled (boolean; optional)

    - label (string

      Or number; required)

    - value (string | number; required) | dict with keys:

    - group (string; required)

    - options (list of dicts; optional)

        `options` is a list of dicts with keys:

        - colors (list of strings; optional)

        - disabled (boolean; optional)

        - label (string | number; required)

        - value (string | number; required)

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

- value (string | number | list of string | numbers; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdSelect'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, locale=Component.UNDEFINED, options=Component.UNDEFINED, colorsNameWidth=Component.UNDEFINED, allowClear=Component.UNDEFINED, mode=Component.UNDEFINED, disabled=Component.UNDEFINED, placeholder=Component.UNDEFINED, size=Component.UNDEFINED, value=Component.UNDEFINED, defaultValue=Component.UNDEFINED, maxTagCount=Component.UNDEFINED, listHeight=Component.UNDEFINED, colorsMode=Component.UNDEFINED, placement=Component.UNDEFINED, status=Component.UNDEFINED, optionFilterProp=Component.UNDEFINED, loading_state=Component.UNDEFINED, persistence=Component.UNDEFINED, persisted_props=Component.UNDEFINED, persistence_type=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'allowClear', 'className', 'colorsMode', 'colorsNameWidth', 'defaultValue', 'disabled', 'key', 'listHeight', 'loading_state', 'locale', 'maxTagCount', 'mode', 'optionFilterProp', 'options', 'persisted_props', 'persistence', 'persistence_type', 'placeholder', 'placement', 'size', 'status', 'style', 'value']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'allowClear', 'className', 'colorsMode', 'colorsNameWidth', 'defaultValue', 'disabled', 'key', 'listHeight', 'loading_state', 'locale', 'maxTagCount', 'mode', 'optionFilterProp', 'options', 'persisted_props', 'persistence', 'persistence_type', 'placeholder', 'placement', 'size', 'status', 'style', 'value']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdSelect, self).__init__(**args)
