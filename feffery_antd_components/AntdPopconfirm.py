# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdPopconfirm(Component):
    """An AntdPopconfirm component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The content of the tab - will only be displayed if this tab is
    selected.

- id (string; optional)

- aria-* (string; optional):
    `aria-*`格式属性通配.

- arrow (a value equal to: 'show', 'hide', 'center'; default 'show')

- cancelButtonProps (dict; optional)

    `cancelButtonProps` is a dict with keys:

    - danger (boolean; optional)

    - disabled (boolean; optional)

    - shape (a value equal to: 'circle', 'round'; optional)

    - size (a value equal to: 'small', 'middle', 'large'; optional)

    - type (a value equal to: 'primary', 'ghost', 'dashed', 'link', 'text', 'default'; optional)

- cancelCounts (number; default 0)

- cancelText (a list of or a singular dash component, string or number; optional)

- className (string | dict; optional)

- confirmCounts (number; default 0)

- data-* (string; optional):
    `data-*`格式属性通配.

- description (a list of or a singular dash component, string or number; optional)

- disabled (boolean; default False)

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

- locale (a value equal to: 'zh-cn', 'en-us'; default 'zh-cn')

- mouseEnterDelay (number; default 0.1)

- mouseLeaveDelay (number; default 0.1)

- okButtonProps (dict; optional)

    `okButtonProps` is a dict with keys:

    - danger (boolean; optional)

    - disabled (boolean; optional)

    - shape (a value equal to: 'circle', 'round'; optional)

    - size (a value equal to: 'small', 'middle', 'large'; optional)

    - type (a value equal to: 'primary', 'ghost', 'dashed', 'link', 'text', 'default'; optional)

- okText (a list of or a singular dash component, string or number; optional)

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
    _children_props = ['title', 'description', 'okText', 'cancelText']
    _base_nodes = ['title', 'description', 'okText', 'cancelText', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdPopconfirm'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, locale=Component.UNDEFINED, title=Component.UNDEFINED, description=Component.UNDEFINED, disabled=Component.UNDEFINED, placement=Component.UNDEFINED, mouseEnterDelay=Component.UNDEFINED, mouseLeaveDelay=Component.UNDEFINED, overlayClassName=Component.UNDEFINED, overlayStyle=Component.UNDEFINED, overlayInnerStyle=Component.UNDEFINED, okText=Component.UNDEFINED, okButtonProps=Component.UNDEFINED, cancelText=Component.UNDEFINED, cancelButtonProps=Component.UNDEFINED, confirmCounts=Component.UNDEFINED, cancelCounts=Component.UNDEFINED, trigger=Component.UNDEFINED, zIndex=Component.UNDEFINED, arrow=Component.UNDEFINED, fresh=Component.UNDEFINED, open=Component.UNDEFINED, permanent=Component.UNDEFINED, popupContainer=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'aria-*', 'arrow', 'cancelButtonProps', 'cancelCounts', 'cancelText', 'className', 'confirmCounts', 'data-*', 'description', 'disabled', 'fresh', 'key', 'loading_state', 'locale', 'mouseEnterDelay', 'mouseLeaveDelay', 'okButtonProps', 'okText', 'open', 'overlayClassName', 'overlayInnerStyle', 'overlayStyle', 'permanent', 'placement', 'popupContainer', 'style', 'title', 'trigger', 'zIndex']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'aria-*', 'arrow', 'cancelButtonProps', 'cancelCounts', 'cancelText', 'className', 'confirmCounts', 'data-*', 'description', 'disabled', 'fresh', 'key', 'loading_state', 'locale', 'mouseEnterDelay', 'mouseLeaveDelay', 'okButtonProps', 'okText', 'open', 'overlayClassName', 'overlayInnerStyle', 'overlayStyle', 'permanent', 'placement', 'popupContainer', 'style', 'title', 'trigger', 'zIndex']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdPopconfirm, self).__init__(children=children, **args)
