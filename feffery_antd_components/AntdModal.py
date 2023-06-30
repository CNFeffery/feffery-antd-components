# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdModal(Component):
    """An AntdModal component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional)

- id (string; optional)

- bodyStyle (dict; optional)

- cancelButtonProps (dict; optional)

    `cancelButtonProps` is a dict with keys:

    - className (string; optional)

    - danger (boolean; optional)

    - disabled (boolean; optional)

    - shape (a value equal to: 'circle', 'round'; optional)

    - size (a value equal to: 'small', 'middle', 'large'; optional)

    - style (dict; optional)

    - type (a value equal to: 'primary', 'ghost', 'dashed', 'link', 'text', 'default'; optional)

- cancelCounts (number; default 0)

- cancelText (a list of or a singular dash component, string or number; optional)

- centered (boolean; default False)

- className (string | dict; optional)

- closable (boolean; default True)

- closeCounts (number; default 0)

- confirmAutoSpin (boolean; default False)

- confirmLoading (boolean; default False)

- destroyOnClose (boolean; default True)

- key (string; optional)

- keyboard (boolean; default True)

- loadingOkText (a list of or a singular dash component, string or number; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- locale (a value equal to: 'zh-cn', 'en-us'; default 'zh-cn')

- mask (boolean; default True)

- maskClosable (boolean; default True)

- maskStyle (dict; optional)

- okButtonProps (dict; optional)

    `okButtonProps` is a dict with keys:

    - className (string; optional)

    - danger (boolean; optional)

    - disabled (boolean; optional)

    - shape (a value equal to: 'circle', 'round'; optional)

    - size (a value equal to: 'small', 'middle', 'large'; optional)

    - style (dict; optional)

    - type (a value equal to: 'primary', 'ghost', 'dashed', 'link', 'text', 'default'; optional)

- okClickClose (boolean; default True)

- okCounts (number; default 0)

- okText (a list of or a singular dash component, string or number; optional)

- renderFooter (boolean; default False)

- style (dict; optional)

- title (a list of or a singular dash component, string or number; optional)

- transitionType (a value equal to: 'none', 'fade', 'zoom', 'zoom-big', 'zoom-big-fast', 'slide-up', 'slide-down', 'slide-left', 'slide-right', 'move-up', 'move-down', 'move-left', 'move-right'; default 'zoom')

- visible (boolean; default False)

- width (number | string; default 520)

- zIndex (number; default 1000)"""
    _children_props = ['title', 'okText', 'cancelText', 'loadingOkText']
    _base_nodes = ['title', 'okText', 'cancelText', 'loadingOkText', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdModal'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, locale=Component.UNDEFINED, visible=Component.UNDEFINED, title=Component.UNDEFINED, renderFooter=Component.UNDEFINED, okText=Component.UNDEFINED, okButtonProps=Component.UNDEFINED, cancelText=Component.UNDEFINED, cancelButtonProps=Component.UNDEFINED, width=Component.UNDEFINED, centered=Component.UNDEFINED, keyboard=Component.UNDEFINED, closable=Component.UNDEFINED, mask=Component.UNDEFINED, maskClosable=Component.UNDEFINED, okClickClose=Component.UNDEFINED, zIndex=Component.UNDEFINED, maskStyle=Component.UNDEFINED, bodyStyle=Component.UNDEFINED, okCounts=Component.UNDEFINED, cancelCounts=Component.UNDEFINED, closeCounts=Component.UNDEFINED, confirmAutoSpin=Component.UNDEFINED, loadingOkText=Component.UNDEFINED, confirmLoading=Component.UNDEFINED, transitionType=Component.UNDEFINED, destroyOnClose=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'bodyStyle', 'cancelButtonProps', 'cancelCounts', 'cancelText', 'centered', 'className', 'closable', 'closeCounts', 'confirmAutoSpin', 'confirmLoading', 'destroyOnClose', 'key', 'keyboard', 'loadingOkText', 'loading_state', 'locale', 'mask', 'maskClosable', 'maskStyle', 'okButtonProps', 'okClickClose', 'okCounts', 'okText', 'renderFooter', 'style', 'title', 'transitionType', 'visible', 'width', 'zIndex']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'bodyStyle', 'cancelButtonProps', 'cancelCounts', 'cancelText', 'centered', 'className', 'closable', 'closeCounts', 'confirmAutoSpin', 'confirmLoading', 'destroyOnClose', 'key', 'keyboard', 'loadingOkText', 'loading_state', 'locale', 'mask', 'maskClosable', 'maskStyle', 'okButtonProps', 'okClickClose', 'okCounts', 'okText', 'renderFooter', 'style', 'title', 'transitionType', 'visible', 'width', 'zIndex']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdModal, self).__init__(children=children, **args)
