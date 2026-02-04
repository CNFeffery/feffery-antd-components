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


class AntdIcon(Component):
    """An AntdIcon component.
    图标组件AntdIcon

    Keyword arguments:

    - id (string; optional):
        组件唯一id.

    - key (string; optional):
        对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

    - className (string | dict; optional):
        当前组件css类名，支持[动态css](/advanced-classname).

    - mode (a value equal to: 'default', 'iconfont'; default 'default'):
        图标调用模式，可选项有`'default'`（内置图标）、`'iconfont'`（阿里巴巴矢量图标）
        默认值：`'default'`.

    - icon (string; optional):
        当`mode='default'`时，设置内置图标名称，当`mode='iconfont'`时，设置自定义源图标名称.

    - scriptUrl (string | list of strings; optional):
        当`mode='iconfont'`时，设置单个或多个阿里巴巴矢量图标源（在iconfont.cn上制作）.

    - nClicks (number; default 0):
        图标累计点击次数，用于监听图标点击行为 默认值：`0`.

    - debounceWait (number; default 0):
        图标点击事件监听防抖延时，单位：毫秒 默认值：`0`.

    - data-* (string; optional):
        `data-*`格式属性通配.

    - aria-* (string; optional):
        `aria-*`格式属性通配."""

    _children_props: typing.List[str] = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdIcon'

    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        mode: typing.Optional[Literal['default', 'iconfont']] = None,
        icon: typing.Optional[str] = None,
        scriptUrl: typing.Optional[typing.Union[str, typing.Sequence[str]]] = None,
        nClicks: typing.Optional[NumberType] = None,
        debounceWait: typing.Optional[NumberType] = None,
        **kwargs,
    ):
        self._prop_names = [
            'id',
            'key',
            'style',
            'className',
            'mode',
            'icon',
            'scriptUrl',
            'nClicks',
            'debounceWait',
            'data-*',
            'aria-*',
        ]
        self._valid_wildcard_attributes = ['data-', 'aria-']
        self.available_properties = [
            'id',
            'key',
            'style',
            'className',
            'mode',
            'icon',
            'scriptUrl',
            'nClicks',
            'debounceWait',
            'data-*',
            'aria-*',
        ]
        self.available_wildcard_properties = ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdIcon, self).__init__(**args)


setattr(AntdIcon, '__init__', _explicitize_args(AntdIcon.__init__))
