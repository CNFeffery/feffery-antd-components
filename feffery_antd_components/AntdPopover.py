# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdPopover(Component):
    """An AntdPopover component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The content of the tab - will only be displayed if this tab is
    selected.

- id (string; optional)

- arrow (a value equal to: 'show', 'hide', 'center'; default 'show')

- className (string | dict; optional)

- color (string; optional)

- content (a list of or a singular dash component, string or number; optional)

- fresh (boolean; default False)

- key (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- mouseEnterDelay (number; default 0.1)

- mouseLeaveDelay (number; default 0.1)

- open (boolean; default False)

- overlayClassName (string | dict; optional)

- overlayInnerStyle (dict; optional)

- overlayStyle (dict; optional)

- permanent (boolean; default False)

- placement (a value equal to: 'top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom'; default 'top')

- popupContainer (a value equal to: 'parent', 'body'; default 'body')

- style (dict; optional)

- title (a list of or a singular dash component, string or number; optional)

- trigger (a value equal to: 'hover', 'focus', 'click' | list of a value equal to: 'hover', 'focus', 'click's; default 'hover')

- zIndex (number; optional)"""
    _children_props = ['title', 'content']
    _base_nodes = ['title', 'content', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdPopover'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, title=Component.UNDEFINED, content=Component.UNDEFINED, placement=Component.UNDEFINED, color=Component.UNDEFINED, mouseEnterDelay=Component.UNDEFINED, mouseLeaveDelay=Component.UNDEFINED, overlayClassName=Component.UNDEFINED, overlayStyle=Component.UNDEFINED, overlayInnerStyle=Component.UNDEFINED, trigger=Component.UNDEFINED, zIndex=Component.UNDEFINED, arrow=Component.UNDEFINED, fresh=Component.UNDEFINED, open=Component.UNDEFINED, permanent=Component.UNDEFINED, popupContainer=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'arrow', 'className', 'color', 'content', 'fresh', 'key', 'loading_state', 'mouseEnterDelay', 'mouseLeaveDelay', 'open', 'overlayClassName', 'overlayInnerStyle', 'overlayStyle', 'permanent', 'placement', 'popupContainer', 'style', 'title', 'trigger', 'zIndex']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'arrow', 'className', 'color', 'content', 'fresh', 'key', 'loading_state', 'mouseEnterDelay', 'mouseLeaveDelay', 'open', 'overlayClassName', 'overlayInnerStyle', 'overlayStyle', 'permanent', 'placement', 'popupContainer', 'style', 'title', 'trigger', 'zIndex']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdPopover, self).__init__(children=children, **args)
