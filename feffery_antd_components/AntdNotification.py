# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdNotification(Component):
    """An AntdNotification component.


Keyword arguments:

- id (string; optional)

- bottom (number; optional)

- className (string; optional)

- description (string; optional)

- duration (number; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- message (string; optional)

- placement (string; optional)

- style (dict; optional)

- top (number; optional)

- type (string; default 'default')"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, loading_state=Component.UNDEFINED, message=Component.UNDEFINED, description=Component.UNDEFINED, type=Component.UNDEFINED, placement=Component.UNDEFINED, top=Component.UNDEFINED, bottom=Component.UNDEFINED, duration=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'bottom', 'className', 'description', 'duration', 'loading_state', 'message', 'placement', 'style', 'top', 'type']
        self._type = 'AntdNotification'
        self._namespace = 'feffery_antd_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'bottom', 'className', 'description', 'duration', 'loading_state', 'message', 'placement', 'style', 'top', 'type']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdNotification, self).__init__(**args)
