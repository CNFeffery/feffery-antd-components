# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
import numbers # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args
try:
    from dash.development.base_component import ComponentType # noqa: F401
except ImportError:
    ComponentType = typing.TypeVar("ComponentType", bound=Component)


class AntdBackTop(Component):
    """An AntdBackTop component.
回到顶部组件AntdBackTop

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- style (dict; optional):
    当前组件css样式.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- duration (number; default 0.45):
    回到顶部过程耗时，单位：秒  默认值：`0.45`.

- visibilityHeight (number; default 400):
    回到顶部按钮显示时对应的页面滚动像素高度阈值  默认值：`400`.

- containerId (string; optional):
    滚动事件监听的特定目标容器id.

- containerSelector (string; optional):
    滚动事件监听的特定目标容器js选择代码，优先级低于containerId.

- nClicks (number; default 0):
    监听回到顶部按钮累计被点击次数  默认值：`0`.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdBackTop'

    @_explicitize_args
    def __init__(
        self,
        id: typing.Optional[str] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[dict] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        duration: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        visibilityHeight: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        containerId: typing.Optional[str] = None,
        containerSelector: typing.Optional[str] = None,
        nClicks: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'style', 'className', 'duration', 'visibilityHeight', 'containerId', 'containerSelector', 'nClicks', 'data-*', 'aria-*']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'style', 'className', 'duration', 'visibilityHeight', 'containerId', 'containerSelector', 'nClicks', 'data-*', 'aria-*']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdBackTop, self).__init__(**args)
