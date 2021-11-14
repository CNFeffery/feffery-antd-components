# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdCascader(Component):
    """An AntdCascader component.


Keyword arguments:

- id (string; optional)

- bordered (boolean; optional)

- changeOnSelect (boolean; default False)

- className (string; optional)

- defaultValue (list of strings; optional)

- disabled (boolean; optional)

- expandTrigger (a value equal to: 'click', 'hover'; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- maxTagCount (number | a value equal to: 'responsive'; optional)

- multiple (boolean; optional)

- options (optional)

- placeholder (string; optional)

- placement (a value equal to: 'bottomLeft', 'bottomRight', 'topLeft', 'topRight'; optional)

- size (a value equal to: 'small', 'middle', 'large'; optional)

- style (dict; optional)

- value (list of boolean | number | string | dict | lists; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, options=Component.UNDEFINED, disabled=Component.UNDEFINED, changeOnSelect=Component.UNDEFINED, size=Component.UNDEFINED, bordered=Component.UNDEFINED, placeholder=Component.UNDEFINED, placement=Component.UNDEFINED, defaultValue=Component.UNDEFINED, maxTagCount=Component.UNDEFINED, multiple=Component.UNDEFINED, value=Component.UNDEFINED, expandTrigger=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'bordered', 'changeOnSelect', 'className', 'defaultValue', 'disabled', 'expandTrigger', 'loading_state', 'maxTagCount', 'multiple', 'options', 'placeholder', 'placement', 'size', 'style', 'value']
        self._type = 'AntdCascader'
        self._namespace = 'feffery_antd_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'bordered', 'changeOnSelect', 'className', 'defaultValue', 'disabled', 'expandTrigger', 'loading_state', 'maxTagCount', 'multiple', 'options', 'placeholder', 'placement', 'size', 'style', 'value']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdCascader, self).__init__(**args)
