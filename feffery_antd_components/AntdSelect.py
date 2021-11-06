# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdSelect(Component):
    """An AntdSelect component.


Keyword arguments:

- id (string; optional)

- allowClear (boolean; default True)

- className (string; optional)

- colorsMode (a value equal to: 'sequential', 'diverging'; default 'sequential')

- colorsNameWidth (number; default 40)

- defaultValue (string | number | list of string | numbers; optional)

- disabled (boolean; optional)

- listHeight (number; default 256)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- maxTagCount (number; default 5)

- mode (a value equal to: 'multiple', 'tags'; optional)

- options (list of dicts; optional)

    `options` is a list of dicts with keys:

    - colors (list of strings; optional)

    - disabled (boolean; optional)

    - label (string

      Or number; required)

    - value (string | number; required) | dict with keys:

    - group (string; required)

    - options (list of dicts; optional)

        `options` is a list of dicts with keys:

        - colors (list of strings; optional)

        - disabled (boolean; optional)

        - label (string | number; required)

        - value (string | number; required)

- placeholder (string; optional)

- size (a value equal to: 'small', 'middle', 'large'; optional)

- style (dict; optional)

- value (string | number | list of string | numbers; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, options=Component.UNDEFINED, colorsNameWidth=Component.UNDEFINED, allowClear=Component.UNDEFINED, mode=Component.UNDEFINED, disabled=Component.UNDEFINED, placeholder=Component.UNDEFINED, size=Component.UNDEFINED, value=Component.UNDEFINED, defaultValue=Component.UNDEFINED, maxTagCount=Component.UNDEFINED, listHeight=Component.UNDEFINED, colorsMode=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'allowClear', 'className', 'colorsMode', 'colorsNameWidth', 'defaultValue', 'disabled', 'listHeight', 'loading_state', 'maxTagCount', 'mode', 'options', 'placeholder', 'size', 'style', 'value']
        self._type = 'AntdSelect'
        self._namespace = 'feffery_antd_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'allowClear', 'className', 'colorsMode', 'colorsNameWidth', 'defaultValue', 'disabled', 'listHeight', 'loading_state', 'maxTagCount', 'mode', 'options', 'placeholder', 'size', 'style', 'value']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdSelect, self).__init__(**args)
