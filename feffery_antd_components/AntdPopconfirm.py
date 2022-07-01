# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdPopconfirm(Component):
    """An AntdPopconfirm component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The content of the tab - will only be displayed if this tab is
    selected.

- id (string; optional)

- cancelButtonProps (dict; optional)

- cancelCounts (number; default 0)

- cancelText (string; optional)

- className (string; optional)

- confirmCounts (number; default 0)

- containerStrategy (a value equal to: 'parent', 'body'; default 'parent')

- disabled (boolean; optional)

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

- mouseEnterDelay (number; optional)

- mouseLeaveDelay (number; optional)

- okButtonProps (dict; optional)

- okText (string; optional)

- overlayInnerStyle (dict; optional)

- overlayStyle (dict; optional)

- placement (a value equal to: 'top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom'; optional)

- style (dict; optional)

- title (a list of or a singular dash component, string or number; optional)

- trigger (a value equal to: 'hover', 'focus', 'click' | list of a value equal to: 'hover', 'focus', 'click's; optional)"""
    _children_props = ['title']
    _base_nodes = ['title', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdPopconfirm'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, locale=Component.UNDEFINED, title=Component.UNDEFINED, disabled=Component.UNDEFINED, placement=Component.UNDEFINED, mouseEnterDelay=Component.UNDEFINED, mouseLeaveDelay=Component.UNDEFINED, overlayStyle=Component.UNDEFINED, overlayInnerStyle=Component.UNDEFINED, okText=Component.UNDEFINED, okButtonProps=Component.UNDEFINED, cancelText=Component.UNDEFINED, cancelButtonProps=Component.UNDEFINED, confirmCounts=Component.UNDEFINED, cancelCounts=Component.UNDEFINED, containerStrategy=Component.UNDEFINED, trigger=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'cancelButtonProps', 'cancelCounts', 'cancelText', 'className', 'confirmCounts', 'containerStrategy', 'disabled', 'key', 'loading_state', 'locale', 'mouseEnterDelay', 'mouseLeaveDelay', 'okButtonProps', 'okText', 'overlayInnerStyle', 'overlayStyle', 'placement', 'style', 'title', 'trigger']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'cancelButtonProps', 'cancelCounts', 'cancelText', 'className', 'confirmCounts', 'containerStrategy', 'disabled', 'key', 'loading_state', 'locale', 'mouseEnterDelay', 'mouseLeaveDelay', 'okButtonProps', 'okText', 'overlayInnerStyle', 'overlayStyle', 'placement', 'style', 'title', 'trigger']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdPopconfirm, self).__init__(children=children, **args)
