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


class AntdSkeletonAvatar(Component):
    """An AntdSkeletonAvatar component.
骨骼屏头像占位图组件AntdSkeletonAvatar

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- active (boolean; default False):
    是否显示动画  默认值：`False`.

- shape (a value equal to: 'circle', 'square'; default 'circle'):
    头像占位图形状，可选项有`'circle'`、`'square'`  默认值：`'circle'`.

- size (number | a value equal to: 'large', 'small', 'default'; default 'default'):
    头像占位图尺寸，传入数值型表示像素尺寸，也可传入预设的尺寸规格，可选项有`'large'`、`'small'`、`'default'`
    默认值：`'default'`.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdSkeletonAvatar'


    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        active: typing.Optional[bool] = None,
        shape: typing.Optional[Literal["circle", "square"]] = None,
        size: typing.Optional[typing.Union[NumberType, Literal["large", "small", "default"]]] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'style', 'className', 'active', 'shape', 'size', 'data-*', 'aria-*']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'style', 'className', 'active', 'shape', 'size', 'data-*', 'aria-*']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdSkeletonAvatar, self).__init__(**args)

setattr(AntdSkeletonAvatar, "__init__", _explicitize_args(AntdSkeletonAvatar.__init__))
