# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdSlider(Component):
    """An AntdSlider component.


Keyword arguments:

- id (string; optional)

- className (string | dict; optional)

- defaultValue (number | list of numbers; optional)

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

- marks (dict with strings as keys and values of type string; optional)

- max (number; default 100)

- min (number; default 0)

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

- popupContainer (a value equal to: 'parent', 'body'; default 'body')

- railStyle (dict; optional)

- range (boolean; default False)

- readOnly (boolean; default False)

- step (number; default 1)

- style (dict; optional)

- tooltipPrefix (string; default '')

- tooltipSuffix (string; default '')

- tooltipVisible (boolean; optional)

- value (number | list of numbers; optional)

- vertical (boolean; default False)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdSlider'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, railStyle=Component.UNDEFINED, key=Component.UNDEFINED, vertical=Component.UNDEFINED, range=Component.UNDEFINED, min=Component.UNDEFINED, max=Component.UNDEFINED, step=Component.UNDEFINED, marks=Component.UNDEFINED, tooltipVisible=Component.UNDEFINED, tooltipPrefix=Component.UNDEFINED, tooltipSuffix=Component.UNDEFINED, disabled=Component.UNDEFINED, value=Component.UNDEFINED, defaultValue=Component.UNDEFINED, popupContainer=Component.UNDEFINED, readOnly=Component.UNDEFINED, loading_state=Component.UNDEFINED, persistence=Component.UNDEFINED, persisted_props=Component.UNDEFINED, persistence_type=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'defaultValue', 'disabled', 'key', 'loading_state', 'marks', 'max', 'min', 'persisted_props', 'persistence', 'persistence_type', 'popupContainer', 'railStyle', 'range', 'readOnly', 'step', 'style', 'tooltipPrefix', 'tooltipSuffix', 'tooltipVisible', 'value', 'vertical']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'defaultValue', 'disabled', 'key', 'loading_state', 'marks', 'max', 'min', 'persisted_props', 'persistence', 'persistence_type', 'popupContainer', 'railStyle', 'range', 'readOnly', 'step', 'style', 'tooltipPrefix', 'tooltipSuffix', 'tooltipVisible', 'value', 'vertical']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdSlider, self).__init__(**args)
