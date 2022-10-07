# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdDatePicker(Component):
    """An AntdDatePicker component.


Keyword arguments:

- id (string; optional)

- allowClear (boolean; default True)

- bordered (boolean; default True)

- className (string; optional)

- defaultPickerValue (string; optional)

- defaultValue (string; optional)

- disabled (boolean; optional)

- disabledDatesStrategy (list of dicts; optional)

    `disabledDatesStrategy` is a list of dicts with keys:

    - mode (a value equal to: 'eq', 'ne', 'le', 'lt', 'ge', 'gt', 'in', 'not-in', 'in-enumerate-dates', 'not-in-enumerate-dates'; optional)

    - target (a value equal to: 'day', 'month', 'quarter', 'year', 'dayOfYear', 'dayOfWeek'; optional)

    - value (number | list of numbers | list of strings; optional)

- format (string; optional)

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

- picker (a value equal to: 'date', 'week', 'month', 'quarter', 'year'; default 'date')

- placeholder (string; optional)

- popupContainer (a value equal to: 'parent', 'body'; default 'body')

- showTime (boolean; default False)

- size (a value equal to: 'small', 'middle', 'large'; optional)

- status (a value equal to: 'error', 'warning'; optional)

- style (dict; default {    width: 220})

- value (string; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdDatePicker'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, locale=Component.UNDEFINED, format=Component.UNDEFINED, picker=Component.UNDEFINED, disabled=Component.UNDEFINED, value=Component.UNDEFINED, showTime=Component.UNDEFINED, allowClear=Component.UNDEFINED, defaultPickerValue=Component.UNDEFINED, defaultValue=Component.UNDEFINED, disabledDatesStrategy=Component.UNDEFINED, placeholder=Component.UNDEFINED, bordered=Component.UNDEFINED, size=Component.UNDEFINED, status=Component.UNDEFINED, popupContainer=Component.UNDEFINED, loading_state=Component.UNDEFINED, persistence=Component.UNDEFINED, persisted_props=Component.UNDEFINED, persistence_type=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'allowClear', 'bordered', 'className', 'defaultPickerValue', 'defaultValue', 'disabled', 'disabledDatesStrategy', 'format', 'key', 'loading_state', 'locale', 'persisted_props', 'persistence', 'persistence_type', 'picker', 'placeholder', 'popupContainer', 'showTime', 'size', 'status', 'style', 'value']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'allowClear', 'bordered', 'className', 'defaultPickerValue', 'defaultValue', 'disabled', 'disabledDatesStrategy', 'format', 'key', 'loading_state', 'locale', 'persisted_props', 'persistence', 'persistence_type', 'picker', 'placeholder', 'popupContainer', 'showTime', 'size', 'status', 'style', 'value']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdDatePicker, self).__init__(**args)
