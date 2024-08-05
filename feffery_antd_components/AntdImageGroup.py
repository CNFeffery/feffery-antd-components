# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdImageGroup(Component):
    """An AntdImageGroup component.
图片组合组件AntdImageGroup

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    组件型，定义组内需要嵌套的`AntdImage`组件.

- id (string; optional):
    组件唯一id.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- data-* (string; optional):
    `data-*`格式属性通配.

- fallback (string; optional):
    图片加载失败占位图资源地址.

- items (list of strings; optional):
    控制图片组合内部实际展示的图片资源地址数组，顺序依次展示.

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

- preview (dict; default True):
    配置图片预览相关功能，传入`False`时会禁用预览功能  默认值：`True`.

    `preview` is a boolean | dict with keys:

    - mask (a list of or a singular dash component, string or number; optional):
        组件型，用于自定义缩略图遮罩元素.

    - visible (boolean; optional):
        是否展示预览层.

- style (dict; optional):
    当前组件css样式.

- visible (boolean; optional):
    监听或设置当前图片组是否处于全屏预览状态."""
    _children_props = ['preview.mask']
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdImageGroup'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, locale=Component.UNDEFINED, items=Component.UNDEFINED, fallback=Component.UNDEFINED, preview=Component.UNDEFINED, visible=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'aria-*', 'className', 'data-*', 'fallback', 'items', 'key', 'loading_state', 'locale', 'preview', 'style', 'visible']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'aria-*', 'className', 'data-*', 'fallback', 'items', 'key', 'loading_state', 'locale', 'preview', 'style', 'visible']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdImageGroup, self).__init__(children=children, **args)
