# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdCountdown(Component):
    """An AntdCountdown component.


Keyword arguments:

- id (string; optional)

- className (string | dict; optional)

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

- prefix (a list of or a singular dash component, string or number; optional)

- style (dict; optional)

- suffix (a list of or a singular dash component, string or number; optional)

- title (a list of or a singular dash component, string or number; optional)

- titleTooltip (string; optional)

- value (string; optional)

- valueFormat (string; default 'YYYY-MM-DD hh:mm:ss')

- valueStyle (dict; optional)"""
    _children_props = ['prefix', 'suffix', 'title']
    _base_nodes = ['prefix', 'suffix', 'title', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdCountdown'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, format=Component.UNDEFINED, value=Component.UNDEFINED, valueFormat=Component.UNDEFINED, prefix=Component.UNDEFINED, suffix=Component.UNDEFINED, title=Component.UNDEFINED, titleTooltip=Component.UNDEFINED, valueStyle=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'format', 'key', 'loading_state', 'prefix', 'style', 'suffix', 'title', 'titleTooltip', 'value', 'valueFormat', 'valueStyle']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'format', 'key', 'loading_state', 'prefix', 'style', 'suffix', 'title', 'titleTooltip', 'value', 'valueFormat', 'valueStyle']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdCountdown, self).__init__(**args)
