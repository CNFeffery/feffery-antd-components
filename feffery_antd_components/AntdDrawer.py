# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdDrawer(Component):
    """An AntdDrawer component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional)

- id (string; optional)

- className (string; optional)

- closable (boolean; optional)

- containerId (string; optional)

- destroyOnClose (boolean; default True)

- extra (a list of or a singular dash component, string or number; optional)

- forceRender (boolean; default False)

- height (number | string; optional)

- key (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- mask (boolean; optional)

- maskClosable (boolean; optional)

- placement (a value equal to: 'left', 'right', 'top', 'bottom'; optional)

- style (dict; optional)

- title (string; optional)

- visible (boolean; optional)

- width (number | string; optional)

- zIndex (number; optional)"""
    _children_props = ['extra']
    _base_nodes = ['extra', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdDrawer'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, visible=Component.UNDEFINED, title=Component.UNDEFINED, placement=Component.UNDEFINED, closable=Component.UNDEFINED, forceRender=Component.UNDEFINED, destroyOnClose=Component.UNDEFINED, containerId=Component.UNDEFINED, height=Component.UNDEFINED, mask=Component.UNDEFINED, maskClosable=Component.UNDEFINED, width=Component.UNDEFINED, zIndex=Component.UNDEFINED, extra=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'closable', 'containerId', 'destroyOnClose', 'extra', 'forceRender', 'height', 'key', 'loading_state', 'mask', 'maskClosable', 'placement', 'style', 'title', 'visible', 'width', 'zIndex']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'closable', 'containerId', 'destroyOnClose', 'extra', 'forceRender', 'height', 'key', 'loading_state', 'mask', 'maskClosable', 'placement', 'style', 'title', 'visible', 'width', 'zIndex']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdDrawer, self).__init__(children=children, **args)
