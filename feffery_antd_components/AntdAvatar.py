# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args

ComponentType = typing.Union[
    str,
    int,
    float,
    Component,
    None,
    typing.Sequence[typing.Union[str, int, float, Component, None]],
]

NumberType = typing.Union[
    typing.SupportsFloat, typing.SupportsInt, typing.SupportsComplex
]


class AntdAvatar(Component):
    """An AntdAvatar component.
头像组件AntdAvatar

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- mode (a value equal to: 'text', 'icon', 'image'; default 'icon'):
    头像模式，可选项有`'text'`、`'icon'`、`'image'`  默认值：`'icon'`.

- gap (number; default 4):
    `mode='text'`时，设置字符距离左右两侧边界的像素距离  默认值：`4`.

- text (string; optional):
    `mode='text'`时，设置文字内容.

- icon (string; optional):
    `mode='icon'`时，设置图标，同**AntdIcon**的`icon`参数.

- iconRenderer (a value equal to: 'AntdIcon', 'fontawesome'; default 'AntdIcon'):
    `mode='icon'`时，设置图标渲染方式，可选项有`'AntdIcon'`、`'fontawesome'`.

- alt (string; optional):
    `mode='image'`时，设置图像无法显示时的占位文字.

- src (string; optional):
    `mode='image'`时，设置图片地址.

- srcSet (string; optional):
    `mode='image'`时，设置图片base64地址.

- draggable (boolean | a value equal to: 'true', 'false'; optional):
    `mode='image'`时，设置图片是否允许拖拽.

- crossOrigin (a value equal to: 'anonymous', 'use-credentials', ''; optional):
    `mode='image'`时，设置图片的CORS属性，可选项有`'anonymous'`、`'use-credentials'`、`''`.

- size (dict; optional):
    配置头像尺寸，可传入数值型代表像素尺寸（支持响应式），或传入字符型使用预设尺寸规格，可选项有`'large'`、`'small'`、`'default'`.

    `size` is a number | a value equal to: 'large', 'small', 'default'
    | dict with keys:

    - xs (number; optional)

    - sm (number; optional)

    - md (number; optional)

    - lg (number; optional)

    - xl (number; optional)

    - xxl (number; optional)

- shape (a value equal to: 'circle', 'square'; default 'circle'):
    头像形状，可选项有`'circle'`、`'square'`  默认值：`'circle'`.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配."""
    _children_props: typing.List[str] = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdAvatar'
    Size = TypedDict(
        "Size",
            {
            "xs": NotRequired[NumberType],
            "sm": NotRequired[NumberType],
            "md": NotRequired[NumberType],
            "lg": NotRequired[NumberType],
            "xl": NotRequired[NumberType],
            "xxl": NotRequired[NumberType]
        }
    )


    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        mode: typing.Optional[Literal["text", "icon", "image"]] = None,
        gap: typing.Optional[NumberType] = None,
        text: typing.Optional[str] = None,
        icon: typing.Optional[str] = None,
        iconRenderer: typing.Optional[Literal["AntdIcon", "fontawesome"]] = None,
        alt: typing.Optional[str] = None,
        src: typing.Optional[str] = None,
        srcSet: typing.Optional[str] = None,
        draggable: typing.Optional[typing.Union[bool, Literal["true", "false"]]] = None,
        crossOrigin: typing.Optional[Literal["anonymous", "use-credentials", ""]] = None,
        size: typing.Optional[typing.Union[NumberType, Literal["large", "small", "default"], "Size"]] = None,
        shape: typing.Optional[Literal["circle", "square"]] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'style', 'className', 'mode', 'gap', 'text', 'icon', 'iconRenderer', 'alt', 'src', 'srcSet', 'draggable', 'crossOrigin', 'size', 'shape', 'data-*', 'aria-*']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'style', 'className', 'mode', 'gap', 'text', 'icon', 'iconRenderer', 'alt', 'src', 'srcSet', 'draggable', 'crossOrigin', 'size', 'shape', 'data-*', 'aria-*']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdAvatar, self).__init__(**args)

setattr(AntdAvatar, "__init__", _explicitize_args(AntdAvatar.__init__))
