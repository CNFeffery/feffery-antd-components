# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdWatermark(Component):
    """An AntdWatermark component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The content of the tab - will only be displayed if this tab is
    selected.

- id (string; optional)

- className (string; optional)

- content (string; optional)

- fontColor (string; optional)

- fontSize (number; optional)

- gapX (number; optional)

- gapY (number; optional)

- key (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- rotate (number; optional)

- style (dict; optional)

- zIndex (number; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdWatermark'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, content=Component.UNDEFINED, rotate=Component.UNDEFINED, zIndex=Component.UNDEFINED, fontColor=Component.UNDEFINED, fontSize=Component.UNDEFINED, gapX=Component.UNDEFINED, gapY=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'content', 'fontColor', 'fontSize', 'gapX', 'gapY', 'key', 'loading_state', 'rotate', 'style', 'zIndex']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'content', 'fontColor', 'fontSize', 'gapX', 'gapY', 'key', 'loading_state', 'rotate', 'style', 'zIndex']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdWatermark, self).__init__(children=children, **args)
