# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
import numbers # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component
try:
    from dash.development.base_component import ComponentType # noqa: F401
except ImportError:
    ComponentType = typing.TypeVar("ComponentType", bound=Component)


class AntdPageHeader(Component):
    """An AntdPageHeader component.
页头组件AntdPageHeader

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- children (a list of or a singular dash component, string or number; optional):
    组件型，内嵌元素.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- title (a list of or a singular dash component, string or number; optional):
    组件型，页头标题内容.

- subTitle (a list of or a singular dash component, string or number; optional):
    组件型，页头副标题内容.

- showBackIcon (boolean; default True):
    是否渲染返回按钮  默认值：`True`.

- historyBackDisabled (boolean; default False):
    是否禁用点击返回按钮回退上一地址的功能  默认值：`False`.

- backClicks (number; default 0):
    返回按钮累计点击次数，用于监听返回按钮点击行为  默认值：`0`.

- ghost (boolean; default False):
    是否开启透明背景模式  默认值：`False`.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配."""
    _children_props = ['title', 'subTitle']
    _base_nodes = ['title', 'subTitle', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdPageHeader'

    _explicitize_dash_init = True

    def __init__(
        self,
        children: typing.Optional[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        title: typing.Optional[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]] = None,
        subTitle: typing.Optional[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]] = None,
        showBackIcon: typing.Optional[bool] = None,
        historyBackDisabled: typing.Optional[bool] = None,
        backClicks: typing.Optional[typing.Union[typing.SupportsFloat, typing.SupportsInt, typing.SupportsComplex]] = None,
        ghost: typing.Optional[bool] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'children', 'style', 'className', 'title', 'subTitle', 'showBackIcon', 'historyBackDisabled', 'backClicks', 'ghost', 'data-*', 'aria-*']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'children', 'style', 'className', 'title', 'subTitle', 'showBackIcon', 'historyBackDisabled', 'backClicks', 'ghost', 'data-*', 'aria-*']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdPageHeader, self).__init__(children=children, **args)
