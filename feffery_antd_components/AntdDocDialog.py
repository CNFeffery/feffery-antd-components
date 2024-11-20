# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdDocDialog(Component):
    """An AntdDocDialog component.
文档嵌入弹框组件AntdDocDialog

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- style (dict; optional):
    当前组件css样式.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- visible (boolean; default False):
    组件是否显示  默认值：`False`.

- title (string; default '帮助文档'):
    标题  默认值：`'帮助文档'`.

- defaultTop (number; optional):
    距离屏幕顶部距离.

- embedConfig (dict; optional):
    嵌入模式一般属性配置.

    `embedConfig` is a dict with keys:

    - min (list of numbers; optional):
        弹窗缩放最小限制[宽，高].

    - max (list of numbers; optional):
        弹窗缩放最大限制[宽，高].

    - width (number; optional):
        弹窗默认宽度  默认值：`520`.

    - height (number; optional):
        弹窗默认高度  默认值：`600`.

    - left (number; optional):
        弹窗默认位置.

    - top (number; optional):
        弹窗默认位置.

- normalConfig (dict; optional):
    弹窗模式一般属性配置.

    `normalConfig` is a dict with keys:

    - min (list of numbers; optional):
        弹窗缩放最小限制[宽，高].

    - max (list of numbers; optional):
        弹窗缩放最大限制[宽，高].

    - width (number; optional):
        弹窗默认宽度  默认值：`520`.

    - height (number; optional):
        弹窗默认高度  默认值：`600`.

    - left (number; optional):
        弹窗默认位置.

    - top (number; optional):
        弹窗默认位置.

- docUrls (dict with strings as keys and values of type string; optional):
    帮助文档链接地址，`key`为当前路由的`pathname`，`value`为链接地址.

- fallbackUrl (string; optional):
    帮助文档重定向地址，若当前路由不在`docUrls`的`key`中，则跳转至此地址.

- closeTimestamp (number; optional):
    监听关闭按钮点击行为.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

    - component_name (string; optional):
        Holds the name of the component that is loading."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdDocDialog'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, visible=Component.UNDEFINED, title=Component.UNDEFINED, defaultTop=Component.UNDEFINED, embedConfig=Component.UNDEFINED, normalConfig=Component.UNDEFINED, docUrls=Component.UNDEFINED, fallbackUrl=Component.UNDEFINED, closeTimestamp=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'style', 'className', 'visible', 'title', 'defaultTop', 'embedConfig', 'normalConfig', 'docUrls', 'fallbackUrl', 'closeTimestamp', 'data-*', 'aria-*', 'loading_state']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'style', 'className', 'visible', 'title', 'defaultTop', 'embedConfig', 'normalConfig', 'docUrls', 'fallbackUrl', 'closeTimestamp', 'data-*', 'aria-*', 'loading_state']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdDocDialog, self).__init__(**args)
