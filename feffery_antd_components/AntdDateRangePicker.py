# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdDateRangePicker(Component):
    """An AntdDateRangePicker component.


Keyword arguments:

- id (string; optional)

- bordered (boolean; default True)

- className (string; optional)

- defaultPickerValue (dict; optional)

    `defaultPickerValue` is a dict with keys:

    - format (string; optional)

    - value (string; optional)

- disabledEnd (boolean; optional)

- disabledStart (boolean; optional)

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

- picker (a value equal to: 'date', 'week', 'month', 'quarter', 'year'; default 'date')

- placeholderEnd (string; optional)

- placeholderStart (string; optional)

- selectedEndDate (string; optional)

- selectedStartDate (string; optional)

- showTime (boolean; default False)

- size (a value equal to: 'small', 'middle', 'large'; optional)

- style (dict; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, picker=Component.UNDEFINED, showTime=Component.UNDEFINED, placeholderStart=Component.UNDEFINED, placeholderEnd=Component.UNDEFINED, disabledStart=Component.UNDEFINED, disabledEnd=Component.UNDEFINED, selectedStartDate=Component.UNDEFINED, selectedEndDate=Component.UNDEFINED, bordered=Component.UNDEFINED, size=Component.UNDEFINED, defaultPickerValue=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'bordered', 'className', 'defaultPickerValue', 'disabledEnd', 'disabledStart', 'loading_state', 'picker', 'placeholderEnd', 'placeholderStart', 'selectedEndDate', 'selectedStartDate', 'showTime', 'size', 'style']
        self._type = 'AntdDateRangePicker'
        self._namespace = 'feffery_antd_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'bordered', 'className', 'defaultPickerValue', 'disabledEnd', 'disabledStart', 'loading_state', 'picker', 'placeholderEnd', 'placeholderStart', 'selectedEndDate', 'selectedStartDate', 'showTime', 'size', 'style']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdDateRangePicker, self).__init__(**args)
