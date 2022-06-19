# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdTimeline(Component):
    """An AntdTimeline component.


Keyword arguments:

- id (string; optional)

- className (string; optional)

- items (list of dicts; optional)

    `items` is a list of dicts with keys:

    - color (string; optional)

    - content (string; optional)

    - contentStyle (dict; optional)

    - icon (string; optional)

    - iconStyle (dict; optional)

    - label (string; optional)

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

- pending (string; optional)

- reverse (boolean; optional)

- style (dict; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdTimeline'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, items=Component.UNDEFINED, mode=Component.UNDEFINED, pending=Component.UNDEFINED, reverse=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'items', 'key', 'loading_state', 'mode', 'pending', 'reverse', 'style']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'items', 'key', 'loading_state', 'mode', 'pending', 'reverse', 'style']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdTimeline, self).__init__(**args)
