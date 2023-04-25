# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdTag(Component):
    """An AntdTag component.


Keyword arguments:

- id (string; optional)

- className (string | dict; optional)

- color (string; optional)

- content (a list of or a singular dash component, string or number; optional)

- href (string; optional)

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

- target (string; default '_blank')"""
    _children_props = ['content']
    _base_nodes = ['content', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdTag'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, content=Component.UNDEFINED, color=Component.UNDEFINED, href=Component.UNDEFINED, target=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'color', 'content', 'href', 'key', 'loading_state', 'style', 'target']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'color', 'content', 'href', 'key', 'loading_state', 'style', 'target']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdTag, self).__init__(**args)
