# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdInputNumber(Component):
    """An AntdInputNumber component.


Keyword arguments:

- id (string; optional)

- addonAfter (string; optional)

- addonBefore (string; optional)

- bordered (boolean; optional)

- className (string; optional)

- controls (boolean; optional)

- defaultValue (number | string; optional)

- disabled (boolean; optional)

- keyboard (boolean; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- max (number | string; optional)

- min (number | string; optional)

- nSubmit (number; default 0)

- precision (number; optional)

- readOnly (boolean; optional)

- size (a value equal to: 'small', 'middle', 'large'; optional)

- step (number | string; optional)

- stringMode (boolean; optional)

- style (dict; optional)

- value (number | string; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, size=Component.UNDEFINED, addonBefore=Component.UNDEFINED, addonAfter=Component.UNDEFINED, bordered=Component.UNDEFINED, controls=Component.UNDEFINED, defaultValue=Component.UNDEFINED, value=Component.UNDEFINED, disabled=Component.UNDEFINED, keyboard=Component.UNDEFINED, min=Component.UNDEFINED, max=Component.UNDEFINED, step=Component.UNDEFINED, precision=Component.UNDEFINED, readOnly=Component.UNDEFINED, stringMode=Component.UNDEFINED, nSubmit=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'addonAfter', 'addonBefore', 'bordered', 'className', 'controls', 'defaultValue', 'disabled', 'keyboard', 'loading_state', 'max', 'min', 'nSubmit', 'precision', 'readOnly', 'size', 'step', 'stringMode', 'style', 'value']
        self._type = 'AntdInputNumber'
        self._namespace = 'feffery_antd_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'addonAfter', 'addonBefore', 'bordered', 'className', 'controls', 'defaultValue', 'disabled', 'keyboard', 'loading_state', 'max', 'min', 'nSubmit', 'precision', 'readOnly', 'size', 'step', 'stringMode', 'style', 'value']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdInputNumber, self).__init__(**args)
