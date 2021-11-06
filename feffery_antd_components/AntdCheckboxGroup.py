# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdCheckboxGroup(Component):
    """An AntdCheckboxGroup component.


Keyword arguments:

- id (string; optional)

- className (string; optional)

- disabled (boolean; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- options (list of dicts; optional)

    `options` is a list of dicts with keys:

    - disabled (boolean; optional)

    - label (string; optional)

    - value (string; optional)

- style (dict; optional)

- title (string; optional)

- value (list of strings; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, disabled=Component.UNDEFINED, title=Component.UNDEFINED, options=Component.UNDEFINED, value=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'disabled', 'loading_state', 'options', 'style', 'title', 'value']
        self._type = 'AntdCheckboxGroup'
        self._namespace = 'feffery_antd_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'disabled', 'loading_state', 'options', 'style', 'title', 'value']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdCheckboxGroup, self).__init__(**args)
