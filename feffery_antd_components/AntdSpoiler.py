# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
import numbers # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component
try:
    from dash.development.base_component import ComponentType # noqa: F401
except ImportError:
    ComponentType = typing.TypeVar("ComponentType", bound=Component)


class AntdSpoiler(Component):
    """An AntdSpoiler component.
展开收起组件AntdSpoiler

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- children (a list of or a singular dash component, string or number; optional):
    组件型，内嵌元素.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- contentClassName (string | dict; optional):
    内容区css类名，支持[动态css](/advanced-classname).

- contentStyle (dict; optional):
    内容区css样式.

- locale (a value equal to: 'zh-cn', 'en-us', 'de-de'; default 'zh-cn'):
    组件文案语种，可选项有`'zh-cn'`（简体中文）、`'en-us'`（英语）、`'de-de'`（德语）
    默认值：`'zh-cn'`.

- hideLabel (a list of or a singular dash component, string or number; optional):
    组件型，展开状态下，收起按钮的文案内容.

- showLabel (a list of or a singular dash component, string or number; optional):
    组件型，收起状态下，展开按钮的文案内容.

- labelPosition (a value equal to: 'left', 'right'; default 'left'):
    展开/收起按钮的位置，可选项有`'left'`、`'right'`  默认值：`'left'`.

- open (boolean; default False):
    监听或设置是否处于展开状态  默认值：`False`.

- maxHeight (number; default 50):
    收起状态下，内容区域最大像素高度  默认值：`50`.

- transitionDuration (number; default 0.1):
    展开/收起过渡动画耗时，单位：秒  默认值：`0.1`.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配."""
    _children_props = ['hideLabel', 'showLabel']
    _base_nodes = ['hideLabel', 'showLabel', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdSpoiler'

    _explicitize_dash_init = True

    def __init__(
        self,
        children: typing.Optional[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        contentClassName: typing.Optional[typing.Union[str, dict]] = None,
        contentStyle: typing.Optional[dict] = None,
        locale: typing.Optional[Literal["zh-cn", "en-us", "de-de"]] = None,
        hideLabel: typing.Optional[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]] = None,
        showLabel: typing.Optional[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]] = None,
        labelPosition: typing.Optional[Literal["left", "right"]] = None,
        open: typing.Optional[bool] = None,
        maxHeight: typing.Optional[typing.Union[typing.SupportsFloat, typing.SupportsInt, typing.SupportsComplex]] = None,
        transitionDuration: typing.Optional[typing.Union[typing.SupportsFloat, typing.SupportsInt, typing.SupportsComplex]] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'children', 'style', 'className', 'contentClassName', 'contentStyle', 'locale', 'hideLabel', 'showLabel', 'labelPosition', 'open', 'maxHeight', 'transitionDuration', 'data-*', 'aria-*']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'children', 'style', 'className', 'contentClassName', 'contentStyle', 'locale', 'hideLabel', 'showLabel', 'labelPosition', 'open', 'maxHeight', 'transitionDuration', 'data-*', 'aria-*']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdSpoiler, self).__init__(children=children, **args)
