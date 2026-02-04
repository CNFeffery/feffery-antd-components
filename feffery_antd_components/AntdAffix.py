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


class AntdAffix(Component):
    """An AntdAffix component.
    固钉组件AntdAffix

    Keyword arguments:

    - id (string; optional):
        组件唯一id.

    - key (string; optional):
        对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

    - children (a list of or a singular dash component, string or number; optional):
        组件型，内嵌元素.

    - className (string | dict; optional):
        当前组件css类名，支持[动态css](/advanced-classname).

    - offsetBottom (number; optional):
        触发固钉效果的视窗底部距离像素阈值.

    - offsetTop (number; default 0):
        触发固钉效果的视窗顶部距离像素阈值 默认值：`0`.

    - target (string; optional):
        滚动事件监听的特定目标容器id.

    - affixed (boolean; optional):
        监听当前目标是否已触发固定.

    - data-* (string; optional):
        `data-*`格式属性通配.

    - aria-* (string; optional):
        `aria-*`格式属性通配."""

    _children_props: typing.List[str] = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdAffix'

    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        offsetBottom: typing.Optional[NumberType] = None,
        offsetTop: typing.Optional[NumberType] = None,
        target: typing.Optional[str] = None,
        affixed: typing.Optional[bool] = None,
        **kwargs,
    ):
        self._prop_names = [
            'id',
            'key',
            'children',
            'style',
            'className',
            'offsetBottom',
            'offsetTop',
            'target',
            'affixed',
            'data-*',
            'aria-*',
        ]
        self._valid_wildcard_attributes = ['data-', 'aria-']
        self.available_properties = [
            'id',
            'key',
            'children',
            'style',
            'className',
            'offsetBottom',
            'offsetTop',
            'target',
            'affixed',
            'data-*',
            'aria-*',
        ]
        self.available_wildcard_properties = ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdAffix, self).__init__(children=children, **args)


setattr(AntdAffix, '__init__', _explicitize_args(AntdAffix.__init__))
