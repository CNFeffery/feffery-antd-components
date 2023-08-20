# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdTimeRangePicker(Component):
    """An AntdTimeRangePicker component.


Keyword arguments:

- id (string; optional)

- allowClear (boolean; default True)

- bordered (boolean; default True)

- className (string | dict; optional)

- defaultValue (list of strings; optional)

- disabled (list of booleans; default [False, False])

- extraFooter (a list of or a singular dash component, string or number; optional)

- format (string; default 'HH:mm:ss')

- hourStep (number; default 1)

- key (string; optional)

- loading_state (dict; optional):
    Object that holds the loading state object coming from
    dash-renderer.

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- locale (a value equal to: 'zh-cn', 'en-us'; default 'zh-cn')

- minuteStep (number; default 1)

- open (boolean; optional)

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

- placeholder (list of strings; optional)

- placement (a value equal to: 'bottomLeft', 'bottomRight', 'topLeft', 'topRight'; default 'bottomLeft')

- popupContainer (a value equal to: 'parent', 'body'; default 'body')

- readOnly (boolean; optional)

- secondStep (number; default 1)

- size (a value equal to: 'small', 'middle', 'large'; default 'middle')

- status (a value equal to: 'error', 'warning'; optional)

- style (dict; optional)

- use12Hours (boolean; default False)

- value (list of strings; optional)"""
    _children_props = ['extraFooter']
    _base_nodes = ['extraFooter', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdTimeRangePicker'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, locale=Component.UNDEFINED, hourStep=Component.UNDEFINED, minuteStep=Component.UNDEFINED, secondStep=Component.UNDEFINED, format=Component.UNDEFINED, use12Hours=Component.UNDEFINED, allowClear=Component.UNDEFINED, placeholder=Component.UNDEFINED, placement=Component.UNDEFINED, disabled=Component.UNDEFINED, value=Component.UNDEFINED, defaultValue=Component.UNDEFINED, bordered=Component.UNDEFINED, size=Component.UNDEFINED, open=Component.UNDEFINED, status=Component.UNDEFINED, readOnly=Component.UNDEFINED, extraFooter=Component.UNDEFINED, popupContainer=Component.UNDEFINED, loading_state=Component.UNDEFINED, persistence=Component.UNDEFINED, persisted_props=Component.UNDEFINED, persistence_type=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'allowClear', 'bordered', 'className', 'defaultValue', 'disabled', 'extraFooter', 'format', 'hourStep', 'key', 'loading_state', 'locale', 'minuteStep', 'open', 'persisted_props', 'persistence', 'persistence_type', 'placeholder', 'placement', 'popupContainer', 'readOnly', 'secondStep', 'size', 'status', 'style', 'use12Hours', 'value']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'allowClear', 'bordered', 'className', 'defaultValue', 'disabled', 'extraFooter', 'format', 'hourStep', 'key', 'loading_state', 'locale', 'minuteStep', 'open', 'persisted_props', 'persistence', 'persistence_type', 'placeholder', 'placement', 'popupContainer', 'readOnly', 'secondStep', 'size', 'status', 'style', 'use12Hours', 'value']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdTimeRangePicker, self).__init__(**args)
