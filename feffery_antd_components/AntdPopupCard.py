# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdPopupCard(Component):
    """An AntdPopupCard component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional)

- id (string; optional)

- aria-* (string; optional):
    `aria-*`格式属性通配.

- bodyStyle (dict; optional)

- className (string | dict; optional)

- closable (boolean; default True)

- closeIconType (a value equal to: 'default', 'outlined', 'two-tone'; default 'default')

- data-* (string; optional):
    `data-*`格式属性通配.

- dragClassName (string | dict; optional)

- draggable (boolean; default False)

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

- title (a list of or a singular dash component, string or number; optional)

- transitionType (a value equal to: 'none', 'fade', 'zoom', 'zoom-big', 'zoom-big-fast', 'slide-up', 'slide-down', 'slide-left', 'slide-right', 'move-up', 'move-down', 'move-left', 'move-right'; default 'fade')

- visible (boolean; default True)

- width (number | string; optional)

- zIndex (number; default 1000)"""
    _children_props = ['title']
    _base_nodes = ['title', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdPopupCard'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, title=Component.UNDEFINED, visible=Component.UNDEFINED, width=Component.UNDEFINED, transitionType=Component.UNDEFINED, closable=Component.UNDEFINED, closeIconType=Component.UNDEFINED, draggable=Component.UNDEFINED, dragClassName=Component.UNDEFINED, zIndex=Component.UNDEFINED, bodyStyle=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'aria-*', 'bodyStyle', 'className', 'closable', 'closeIconType', 'data-*', 'dragClassName', 'draggable', 'key', 'loading_state', 'style', 'title', 'transitionType', 'visible', 'width', 'zIndex']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'aria-*', 'bodyStyle', 'className', 'closable', 'closeIconType', 'data-*', 'dragClassName', 'draggable', 'key', 'loading_state', 'style', 'title', 'transitionType', 'visible', 'width', 'zIndex']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdPopupCard, self).__init__(children=children, **args)
