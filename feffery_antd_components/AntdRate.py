# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdRate(Component):
    """An AntdRate component.


Keyword arguments:

- id (string; optional)

- allowClear (boolean; optional)

- allowHalf (boolean; optional)

- className (string; optional)

- count (number; optional)

- defaultValue (number; optional)

- disabled (boolean; optional)

- key (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- style (dict; optional)

- tooltips (list of strings; optional)

- value (number; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdRate'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, allowClear=Component.UNDEFINED, allowHalf=Component.UNDEFINED, count=Component.UNDEFINED, defaultValue=Component.UNDEFINED, disabled=Component.UNDEFINED, tooltips=Component.UNDEFINED, value=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'allowClear', 'allowHalf', 'className', 'count', 'defaultValue', 'disabled', 'key', 'loading_state', 'style', 'tooltips', 'value']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'allowClear', 'allowHalf', 'className', 'count', 'defaultValue', 'disabled', 'key', 'loading_state', 'style', 'tooltips', 'value']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdRate, self).__init__(**args)
