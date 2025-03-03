# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
import numbers # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args
try:
    from dash.development.base_component import ComponentType # noqa: F401
except ImportError:
    ComponentType = typing.TypeVar("ComponentType", bound=Component)


class AntdCountdown(Component):
    """An AntdCountdown component.
倒计时组件AntdCountdown

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- style (dict; optional):
    当前组件css样式.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- format (string; optional):
    日期时间显示格式，[参考资料](https://day.js.org/docs/en/display/format)，如`HH:mm:ss`代表`时:分:秒`.

- value (string; optional):
    目标截止日期时间字符串，与`valueFormat`对应.

- valueFormat (string; default 'YYYY-MM-DD hh:mm:ss'):
    针对`value`设置对应的日期时间解析格式，[参考资料](https://day.js.org/docs/en/display/format)
    默认值：`'YYYY-MM-DD hh:mm:ss'`.

- prefix (a list of or a singular dash component, string or number; optional):
    组件型，数值前缀内容.

- suffix (a list of or a singular dash component, string or number; optional):
    组件型，数值后缀内容.

- title (a list of or a singular dash component, string or number; optional):
    组件型，标题内容.

- titleTooltip (string; optional):
    为标题内容添加额外鼠标悬停提示信息.

- valueStyle (dict; optional):
    数值内容css样式.

- finishEvent (dict; optional):
    监听倒计时结束事件.

    `finishEvent` is a dict with keys:

    - timestamp (number; optional):
        事件时间戳.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配."""
    _children_props = ['prefix', 'suffix', 'title']
    _base_nodes = ['prefix', 'suffix', 'title', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdCountdown'
    FinishEvent = TypedDict(
        "FinishEvent",
            {
            "timestamp": NotRequired[typing.Union[int, float, numbers.Number]]
        }
    )

    @_explicitize_args
    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[dict] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        format: typing.Optional[str] = None,
        value: typing.Optional[str] = None,
        valueFormat: typing.Optional[str] = None,
        prefix: typing.Optional[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]] = None,
        suffix: typing.Optional[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]] = None,
        title: typing.Optional[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]] = None,
        titleTooltip: typing.Optional[str] = None,
        valueStyle: typing.Optional[dict] = None,
        finishEvent: typing.Optional["FinishEvent"] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'style', 'className', 'format', 'value', 'valueFormat', 'prefix', 'suffix', 'title', 'titleTooltip', 'valueStyle', 'finishEvent', 'data-*', 'aria-*']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'style', 'className', 'format', 'value', 'valueFormat', 'prefix', 'suffix', 'title', 'titleTooltip', 'valueStyle', 'finishEvent', 'data-*', 'aria-*']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdCountdown, self).__init__(**args)
