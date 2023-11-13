# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdQRCode(Component):
    """An AntdQRCode component.


Keyword arguments:

- id (string; optional)

- bgColor (string; default 'transparent'):
    设置二维码背景颜色  默认：'transparent'.

- bordered (boolean; default True):
    设置二维码是否有边框  默认：True.

- className (string | dict; optional)

- color (string; default '#000'):
    设置二维码颜色  默认：'#000'.

- errorLevel (a value equal to: 'L', 'M', 'Q', 'H'; default 'M'):
    设置二维码纠错等级  默认：'M'.

- icon (string; optional):
    用于设置二维码中图片的地址（目前只支持图片地址）.

- iconSize (number; default 40):
    设置二维码中图片的大小  默认：40.

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

- refreshClicks (number; default 0):
    监听当前\"点击刷新\"按钮累计点击次数，仅在status为'expired'的时候生效.

- size (number; default 160):
    设置二维码大小  默认：160.

- status (a value equal to: 'active', 'expired', 'loading'; default 'active'):
    设置二维码状态  默认：'active'.

- style (dict; optional)

- type (a value equal to: 'canvas', 'svg'; default 'canvas'):
    设置渲染类型，可选的有'canvas'、'primary'  默认：'canvas'.

- value (string; optional):
    用于设置扫描后的文本."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdQRCode'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, locale=Component.UNDEFINED, value=Component.UNDEFINED, type=Component.UNDEFINED, icon=Component.UNDEFINED, size=Component.UNDEFINED, iconSize=Component.UNDEFINED, color=Component.UNDEFINED, bgColor=Component.UNDEFINED, bordered=Component.UNDEFINED, errorLevel=Component.UNDEFINED, status=Component.UNDEFINED, refreshClicks=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'bgColor', 'bordered', 'className', 'color', 'errorLevel', 'icon', 'iconSize', 'key', 'loading_state', 'locale', 'refreshClicks', 'size', 'status', 'style', 'type', 'value']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'bgColor', 'bordered', 'className', 'color', 'errorLevel', 'icon', 'iconSize', 'key', 'loading_state', 'locale', 'refreshClicks', 'size', 'status', 'style', 'type', 'value']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdQRCode, self).__init__(**args)
