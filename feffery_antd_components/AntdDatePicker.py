# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdDatePicker(Component):
    """An AntdDatePicker component.


Keyword arguments:

- id (string; optional)

- allowClear (boolean; default True)

- bordered (boolean; default True)

- className (string; optional)

- defaultPickerValue (dict; optional)

    `defaultPickerValue` is a dict with keys:

    - format (string; optional)

    - value (string; optional)

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

- picker (string; default 'date')

- placeholder (string; optional)

- selectedDate (string; optional)

- showTime (boolean; default False)

- style (dict; default {    width: 220})"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, picker=Component.UNDEFINED, selectedDate=Component.UNDEFINED, showTime=Component.UNDEFINED, allowClear=Component.UNDEFINED, defaultPickerValue=Component.UNDEFINED, placeholder=Component.UNDEFINED, bordered=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'allowClear', 'bordered', 'className', 'defaultPickerValue', 'loading_state', 'picker', 'placeholder', 'selectedDate', 'showTime', 'style']
        self._type = 'AntdDatePicker'
        self._namespace = 'feffery_antd_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'allowClear', 'bordered', 'className', 'defaultPickerValue', 'loading_state', 'picker', 'placeholder', 'selectedDate', 'showTime', 'style']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdDatePicker, self).__init__(**args)
