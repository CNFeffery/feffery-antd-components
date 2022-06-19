# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdCountdown(Component):
    """An AntdCountdown component.


Keyword arguments:

- id (string; optional)

- className (string; optional)

- format (string; optional)

- key (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- prefix (dict; optional)

    `prefix` is a dict with keys:

    - content (string; optional)

    - mode (a value equal to: 'text', 'icon'; optional)

- style (dict; optional)

- suffix (dict; optional)

    `suffix` is a dict with keys:

    - content (string; optional)

    - mode (a value equal to: 'text', 'icon'; optional)

- title (string; optional)

- value (string; optional)

- valueFormat (string; default 'YYYY-MM-DD hh:mm:ss')

- valueStyle (dict; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdCountdown'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, format=Component.UNDEFINED, value=Component.UNDEFINED, valueFormat=Component.UNDEFINED, prefix=Component.UNDEFINED, suffix=Component.UNDEFINED, title=Component.UNDEFINED, valueStyle=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'format', 'key', 'loading_state', 'prefix', 'style', 'suffix', 'title', 'value', 'valueFormat', 'valueStyle']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'format', 'key', 'loading_state', 'prefix', 'style', 'suffix', 'title', 'value', 'valueFormat', 'valueStyle']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdCountdown, self).__init__(**args)
