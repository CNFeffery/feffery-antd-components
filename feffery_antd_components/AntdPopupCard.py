# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdPopupCard(Component):
    """An AntdPopupCard component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional)

- id (string; optional)

- bodyStyle (dict; optional)

- className (string; optional)

- closable (boolean; default True)

- closeIconType (a value equal to: 'default', 'outlined', 'two-tone'; default 'default')

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

- locale (a value equal to: 'zh-cn', 'en-us'; default 'zh-cn')

- style (dict; optional)

- title (a list of or a singular dash component, string or number; optional)

- transitionType (a value equal to: 'none', 'fade', 'zoom', 'zoom-big', 'zoom-big-fast', 'zoom-up', 'zoom-down', 'zoom-left', 'zoom-right', 'slide-up', 'slide-down', 'slide-left', 'slide-right', 'move-up', 'move-down', 'move-left', 'move-right'; default 'fade')

- visible (boolean; default True)

- width (number | string; optional)

- zIndex (number; optional)"""
    _children_props = ['title']
    _base_nodes = ['title', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdPopupCard'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, locale=Component.UNDEFINED, title=Component.UNDEFINED, visible=Component.UNDEFINED, width=Component.UNDEFINED, transitionType=Component.UNDEFINED, closable=Component.UNDEFINED, closeIconType=Component.UNDEFINED, draggable=Component.UNDEFINED, zIndex=Component.UNDEFINED, bodyStyle=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'bodyStyle', 'className', 'closable', 'closeIconType', 'draggable', 'key', 'loading_state', 'locale', 'style', 'title', 'transitionType', 'visible', 'width', 'zIndex']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'bodyStyle', 'className', 'closable', 'closeIconType', 'draggable', 'key', 'loading_state', 'locale', 'style', 'title', 'transitionType', 'visible', 'width', 'zIndex']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdPopupCard, self).__init__(children=children, **args)
