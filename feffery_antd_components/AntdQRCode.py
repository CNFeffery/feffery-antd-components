# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdQRCode(Component):
    """An AntdQRCode component.
二维码组件AntdQRCode

Keyword arguments:

- id (string; optional):
    组件唯一id.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- autoSpin (boolean; default False):
    是否在`value`处于回调更新中时，自动切换为`loading`状态  默认值：`False`.

- bgColor (string; default 'transparent'):
    二维码背景颜色  默认值：`'transparent'`.

- bordered (boolean; default True):
    二维码是否渲染边框  默认值：`True`.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- color (string; default '#000'):
    二维码颜色  默认值：`'#000'`.

- data-* (string; optional):
    `data-*`格式属性通配.

- errorLevel (a value equal to: 'L', 'M', 'Q', 'H'; default 'M'):
    二维码纠错级别，可选项有`'L'`、`'M'`、`'Q'`、`'H'`  默认值：`'M'`.

- expires (number; optional):
    当前二维码过期时间，单位：秒，到期后二维码状态将会被强制更新为`'expired'`.

- icon (string; optional):
    二维码内嵌图片地址.

- iconSize (dict; default 40):
    二维码内嵌图片像素边长  默认值：`40`.

    `iconSize` is a number | dict with keys:

    - height (number; optional)

    - width (number; optional)

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- locale (a value equal to: 'zh-cn', 'en-us'; default 'zh-cn'):
    组件文案语种，可选项有`'zh-cn'`、`'en-us'`  默认值：`'zh-cn'`.

- refreshClicks (number; default 0):
    监听当前\"点击刷新\"按钮累计点击次数，仅在`status`为`'expired'`时有效  默认值：`0`.

- size (number; default 160):
    二维码像素边长  默认值：`160`.

- status (a value equal to: 'active', 'expired', 'loading', 'scanned'; default 'active'):
    二维码状态，可选项有`'active'`、`'expired'`、`'loading'`、`'scanned'`
    默认值：`'active'`.

- style (dict; optional):
    当前组件css样式.

- type (a value equal to: 'canvas', 'svg'; default 'canvas'):
    渲染方式，可选项有`'canvas'`、`'svg'`  默认值：`'canvas'`.

- value (string; optional):
    二维码解析结果."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdQRCode'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, locale=Component.UNDEFINED, value=Component.UNDEFINED, type=Component.UNDEFINED, icon=Component.UNDEFINED, size=Component.UNDEFINED, iconSize=Component.UNDEFINED, color=Component.UNDEFINED, bgColor=Component.UNDEFINED, bordered=Component.UNDEFINED, errorLevel=Component.UNDEFINED, status=Component.UNDEFINED, expires=Component.UNDEFINED, autoSpin=Component.UNDEFINED, refreshClicks=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'aria-*', 'autoSpin', 'bgColor', 'bordered', 'className', 'color', 'data-*', 'errorLevel', 'expires', 'icon', 'iconSize', 'key', 'loading_state', 'locale', 'refreshClicks', 'size', 'status', 'style', 'type', 'value']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'aria-*', 'autoSpin', 'bgColor', 'bordered', 'className', 'color', 'data-*', 'errorLevel', 'expires', 'icon', 'iconSize', 'key', 'loading_state', 'locale', 'refreshClicks', 'size', 'status', 'style', 'type', 'value']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdQRCode, self).__init__(**args)
