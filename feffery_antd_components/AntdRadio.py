# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdRadio(Component):
    """An AntdRadio component.


Keyword arguments:

- id (string; optional)

- checked (boolean; optional)

- className (string; optional)

- disabled (boolean; optional)

- label (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- mode (string; optional)

- style (dict; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, mode=Component.UNDEFINED, disabled=Component.UNDEFINED, label=Component.UNDEFINED, checked=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'checked', 'className', 'disabled', 'label', 'loading_state', 'mode', 'style']
        self._type = 'AntdRadio'
        self._namespace = 'feffery_antd_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'checked', 'className', 'disabled', 'label', 'loading_state', 'mode', 'style']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdRadio, self).__init__(**args)
