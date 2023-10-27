# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdCardMeta(Component):
    """An AntdCardMeta component.


Keyword arguments:

- id (string; optional)

- avatar (a list of or a singular dash component, string or number; optional)

- className (string | dict; optional)

- description (a list of or a singular dash component, string or number; optional)

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

- title (a list of or a singular dash component, string or number; optional)"""
    _children_props = ['avatar', 'description', 'title']
    _base_nodes = ['avatar', 'description', 'title', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdCardMeta'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, avatar=Component.UNDEFINED, description=Component.UNDEFINED, title=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'avatar', 'className', 'description', 'key', 'loading_state', 'style', 'title']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'avatar', 'className', 'description', 'key', 'loading_state', 'style', 'title']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdCardMeta, self).__init__(**args)
