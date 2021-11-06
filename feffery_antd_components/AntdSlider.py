# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdSlider(Component):
    """An AntdSlider component.


Keyword arguments:

- id (string; optional)

- className (string; optional)

- defaultValue (number | list of numbers; optional)

- disabled (boolean; default False)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- marks (dict; optional)

- max (number; default 100)

- min (number; default 0)

- range (boolean; default False)

- step (number; default 1)

- style (dict; optional)

- tooltipPrefix (string; default '')

- tooltipSuffix (string; default '')

- tooltipVisible (boolean; optional)

- value (number | list of numbers; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, defaultValue=Component.UNDEFINED, disabled=Component.UNDEFINED, range=Component.UNDEFINED, min=Component.UNDEFINED, max=Component.UNDEFINED, step=Component.UNDEFINED, value=Component.UNDEFINED, marks=Component.UNDEFINED, tooltipVisible=Component.UNDEFINED, tooltipPrefix=Component.UNDEFINED, tooltipSuffix=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'defaultValue', 'disabled', 'loading_state', 'marks', 'max', 'min', 'range', 'step', 'style', 'tooltipPrefix', 'tooltipSuffix', 'tooltipVisible', 'value']
        self._type = 'AntdSlider'
        self._namespace = 'feffery_antd_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'defaultValue', 'disabled', 'loading_state', 'marks', 'max', 'min', 'range', 'step', 'style', 'tooltipPrefix', 'tooltipSuffix', 'tooltipVisible', 'value']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdSlider, self).__init__(**args)
