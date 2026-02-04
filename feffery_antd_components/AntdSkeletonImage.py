# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401

from dash.development.base_component import Component, _explicitize_args
from typing_extensions import Literal, NotRequired, TypedDict  # noqa: F401

ComponentSingleType = typing.Union[str, int, float, Component, None]
ComponentType = typing.Union[
    ComponentSingleType,
    typing.Sequence[ComponentSingleType],
]

NumberType = typing.Union[typing.SupportsFloat, typing.SupportsInt, typing.SupportsComplex]


class AntdSkeletonImage(Component):
    """An AntdSkeletonImage component.
    骨骼屏图片占位图组件AntdSkeletonImage

    Keyword arguments:

    - id (string; optional):
        组件唯一id.

    - key (string; optional):
        对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

    - className (string | dict; optional):
        当前组件css类名，支持[动态css](/advanced-classname).

    - data-* (string; optional):
        `data-*`格式属性通配.

    - aria-* (string; optional):
        `aria-*`格式属性通配."""

    _children_props: typing.List[str] = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdSkeletonImage'

    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        **kwargs,
    ):
        self._prop_names = ['id', 'key', 'style', 'className', 'data-*', 'aria-*']
        self._valid_wildcard_attributes = ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'style', 'className', 'data-*', 'aria-*']
        self.available_wildcard_properties = ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdSkeletonImage, self).__init__(**args)


setattr(AntdSkeletonImage, '__init__', _explicitize_args(AntdSkeletonImage.__init__))
