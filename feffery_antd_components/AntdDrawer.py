# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdDrawer(Component):
    """An AntdDrawer component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional)

- id (string; optional)

- bodyStyle (dict; optional)

- className (string | dict; optional)

- classNames (dict; optional)

    `classNames` is a dict with keys:

    - body (string; optional)

    - content (string; optional)

    - footer (string; optional)

    - header (string; optional)

    - mask (string; optional)

    - wrapper (string; optional)

- closable (boolean; default True)

- containerId (string; optional)

- containerSelector (string; optional)

- contentWrapperStyle (dict; optional)

- destroyOnClose (boolean; default False)

- drawerStyle (dict; optional)

- extra (a list of or a singular dash component, string or number; optional)

- footer (a list of or a singular dash component, string or number; optional)

- footerStyle (dict; optional)

- forceRender (boolean; default False)

- headerStyle (dict; optional)

- height (number | string; default 256)

- key (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- mask (boolean; default True)

- maskClosable (boolean; default True)

- maskStyle (dict; optional)

- placement (a value equal to: 'left', 'right', 'top', 'bottom'; default 'right')

- style (dict; optional)

- styles (dict; optional)

    `styles` is a dict with keys:

    - body (dict; optional)

    - content (dict; optional)

    - footer (dict; optional)

    - header (dict; optional)

    - mask (dict; optional)

    - wrapper (dict; optional)

- title (a list of or a singular dash component, string or number; optional)

- visible (boolean; default False)

- width (number | string; default 256)

- zIndex (number; default 1000)"""
    _children_props = ['title', 'extra', 'footer']
    _base_nodes = ['title', 'extra', 'footer', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdDrawer'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, classNames=Component.UNDEFINED, styles=Component.UNDEFINED, drawerStyle=Component.UNDEFINED, bodyStyle=Component.UNDEFINED, contentWrapperStyle=Component.UNDEFINED, headerStyle=Component.UNDEFINED, footerStyle=Component.UNDEFINED, maskStyle=Component.UNDEFINED, key=Component.UNDEFINED, visible=Component.UNDEFINED, title=Component.UNDEFINED, placement=Component.UNDEFINED, closable=Component.UNDEFINED, forceRender=Component.UNDEFINED, destroyOnClose=Component.UNDEFINED, width=Component.UNDEFINED, height=Component.UNDEFINED, mask=Component.UNDEFINED, maskClosable=Component.UNDEFINED, zIndex=Component.UNDEFINED, extra=Component.UNDEFINED, footer=Component.UNDEFINED, containerId=Component.UNDEFINED, containerSelector=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'bodyStyle', 'className', 'classNames', 'closable', 'containerId', 'containerSelector', 'contentWrapperStyle', 'destroyOnClose', 'drawerStyle', 'extra', 'footer', 'footerStyle', 'forceRender', 'headerStyle', 'height', 'key', 'loading_state', 'mask', 'maskClosable', 'maskStyle', 'placement', 'style', 'styles', 'title', 'visible', 'width', 'zIndex']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'bodyStyle', 'className', 'classNames', 'closable', 'containerId', 'containerSelector', 'contentWrapperStyle', 'destroyOnClose', 'drawerStyle', 'extra', 'footer', 'footerStyle', 'forceRender', 'headerStyle', 'height', 'key', 'loading_state', 'mask', 'maskClosable', 'maskStyle', 'placement', 'style', 'styles', 'title', 'visible', 'width', 'zIndex']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdDrawer, self).__init__(children=children, **args)
