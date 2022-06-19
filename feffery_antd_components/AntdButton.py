# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdButton(Component):
    """An AntdButton component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional)

- id (string; optional)

- block (boolean; default False)

- className (string; optional)

- danger (boolean; default False)

- disabled (boolean; default False)

- href (string; optional)

- key (string; optional)

- loading (boolean; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- nClicks (number; default 0)

- shape (a value equal to: 'circle', 'round'; optional)

- size (a value equal to: 'small', 'middle', 'large'; optional)

- style (dict; optional)

- target (string; optional)

- type (a value equal to: 'primary', 'ghost', 'dashed', 'link', 'text', 'default'; default 'default')"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdButton'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, type=Component.UNDEFINED, href=Component.UNDEFINED, target=Component.UNDEFINED, block=Component.UNDEFINED, danger=Component.UNDEFINED, disabled=Component.UNDEFINED, shape=Component.UNDEFINED, size=Component.UNDEFINED, nClicks=Component.UNDEFINED, loading=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'block', 'className', 'danger', 'disabled', 'href', 'key', 'loading', 'loading_state', 'nClicks', 'shape', 'size', 'style', 'target', 'type']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'block', 'className', 'danger', 'disabled', 'href', 'key', 'loading', 'loading_state', 'nClicks', 'shape', 'size', 'style', 'target', 'type']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdButton, self).__init__(children=children, **args)
