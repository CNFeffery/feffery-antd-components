# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdAvatar(Component):
    """An AntdAvatar component.
头像组件AntdAvatar

Keyword arguments:

- id (string; optional):
    组件唯一id.

- alt (string; optional):
    `mode='image'`时，设置图像无法显示时的占位文字.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- crossOrigin (a value equal to: 'anonymous', 'use-credentials', ''; optional):
    `mode='image'`时，设置图片的CORS属性，可选项有`'anonymous'`、`'use-credentials'`、`''`.

- data-* (string; optional):
    `data-*`格式属性通配.

- draggable (boolean | a value equal to: 'true', 'false'; optional):
    `mode='image'`时，设置图片是否允许拖拽.

- gap (number; default 4):
    `mode='text'`时，设置字符距离左右两侧边界的像素距离  默认值：`4`.

- icon (string; optional):
    `mode='icon'`时，设置图标，同**AntdIcon**的`icon`参数.

- iconRenderer (a value equal to: 'AntdIcon', 'fontawesome'; default 'AntdIcon'):
    `mode='icon'`时，设置图标渲染方式，可选项有`'AntdIcon'`、`'fontawesome'`.

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

- mode (a value equal to: 'text', 'icon', 'image'; default 'icon'):
    头像模式，可选项有`'text'`、`'icon'`、`'image'`  默认值：`'icon'`.

- shape (a value equal to: 'circle', 'square'; default 'circle'):
    头像形状，可选项有`'circle'`、`'square'`  默认值：`'circle'`.

- size (dict; optional):
    配置头像尺寸，可传入数值型代表像素尺寸（支持响应式），或传入字符型使用预设尺寸规格，可选项有`'large'`、`'small'`、`'default'`.

    `size` is a number | a value equal to: 'large', 'small', 'default'
    | dict with keys:

    - lg (number; optional)

    - md (number; optional)

    - sm (number; optional)

    - xl (number; optional)

    - xs (number; optional)

    - xxl (number; optional)

- src (string; optional):
    `mode='image'`时，设置图片地址.

- srcSet (string; optional):
    `mode='image'`时，设置图片base64地址.

- style (dict; optional):
    当前组件css样式.

- text (string; optional):
    `mode='text'`时，设置文字内容."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdAvatar'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, mode=Component.UNDEFINED, gap=Component.UNDEFINED, text=Component.UNDEFINED, icon=Component.UNDEFINED, iconRenderer=Component.UNDEFINED, alt=Component.UNDEFINED, src=Component.UNDEFINED, srcSet=Component.UNDEFINED, draggable=Component.UNDEFINED, crossOrigin=Component.UNDEFINED, size=Component.UNDEFINED, shape=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'alt', 'aria-*', 'className', 'crossOrigin', 'data-*', 'draggable', 'gap', 'icon', 'iconRenderer', 'key', 'loading_state', 'mode', 'shape', 'size', 'src', 'srcSet', 'style', 'text']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'alt', 'aria-*', 'className', 'crossOrigin', 'data-*', 'draggable', 'gap', 'icon', 'iconRenderer', 'key', 'loading_state', 'mode', 'shape', 'size', 'src', 'srcSet', 'style', 'text']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdAvatar, self).__init__(**args)
