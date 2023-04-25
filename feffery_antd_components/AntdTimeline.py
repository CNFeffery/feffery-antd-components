# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdTimeline(Component):
    """An AntdTimeline component.


Keyword arguments:

- id (string; optional)

- className (string | dict; optional)

- items (list of dicts; required)

    `items` is a list of dicts with keys:

    - color (string; optional)

    - content (a list of or a singular dash component, string or number; optional)

    - icon (a list of or a singular dash component, string or number; optional)

    - label (a list of or a singular dash component, string or number; optional)

- key (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- mode (a value equal to: 'left', 'alternate', 'right'; default 'left')

- pending (a list of or a singular dash component, string or number; optional)

- pendingDot (a list of or a singular dash component, string or number; optional)

- reverse (boolean; default False)

- style (dict; optional)"""
    _children_props = ['items[].content', 'items[].icon', 'items[].label', 'pending', 'pendingDot']
    _base_nodes = ['pending', 'pendingDot', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdTimeline'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, items=Component.REQUIRED, mode=Component.UNDEFINED, pending=Component.UNDEFINED, pendingDot=Component.UNDEFINED, reverse=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'items', 'key', 'loading_state', 'mode', 'pending', 'pendingDot', 'reverse', 'style']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'items', 'key', 'loading_state', 'mode', 'pending', 'pendingDot', 'reverse', 'style']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        for k in ['items']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(AntdTimeline, self).__init__(**args)
