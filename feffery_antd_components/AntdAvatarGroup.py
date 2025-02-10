# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
import numbers # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args
try:
    from dash.development.base_component import ComponentType # noqa: F401
except ImportError:
    ComponentType = typing.TypeVar("ComponentType", bound=Component)


class AntdAvatarGroup(Component):
    """An AntdAvatarGroup component.
头像组合组件AntdAvatarGroup

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- children (a list of or a singular dash component, string or number; optional):
    组件型，传入组内各`AntdAvatar`组件.

- style (dict; optional):
    当前组件css样式.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- maxCount (number; optional):
    最多显示的头像个数，默认无限制.

- maxPopoverPlacement (a value equal to: 'top', 'bottom'; default 'top'):
    超出`maxCount`数量限制之外的头像气泡卡片弹出方位，可选项有`'top'`、`'bottom'`  默认值：`'top'`.

- maxPopoverTrigger (a value equal to: 'hover', 'click'; default 'hover'):
    超出`maxCount`数量限制之外的头像气泡卡片弹出触发方式，可选项有`'hover'`、`'click'`
    默认值：`'hover'`.

- maxStyle (dict; optional):
    头像省略部分css样式.

- size (dict; default 'default'):
    统一设置内部头像尺寸规格，传入数值型表示像素尺寸，传入字符型表示内置规格，可选项有`'large'`、`'small'`、`'default'`，支持响应式断点
    默认值：`'default'`.

    `size` is a number | a value equal to: 'large', 'small', 'default'
    | dict with keys:

    - xs (number; optional)

    - sm (number; optional)

    - md (number; optional)

    - lg (number; optional)

    - xl (number; optional)

    - xxl (number; optional)

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdAvatarGroup'
    Size = TypedDict(
        "Size",
            {
            "xs": NotRequired[typing.Union[int, float, numbers.Number]],
            "sm": NotRequired[typing.Union[int, float, numbers.Number]],
            "md": NotRequired[typing.Union[int, float, numbers.Number]],
            "lg": NotRequired[typing.Union[int, float, numbers.Number]],
            "xl": NotRequired[typing.Union[int, float, numbers.Number]],
            "xxl": NotRequired[typing.Union[int, float, numbers.Number]]
        }
    )

    @_explicitize_args
    def __init__(
        self,
        children: typing.Optional[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]] = None,
        id: typing.Optional[str] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[dict] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        maxCount: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        maxPopoverPlacement: typing.Optional[Literal["top", "bottom"]] = None,
        maxPopoverTrigger: typing.Optional[Literal["hover", "click"]] = None,
        maxStyle: typing.Optional[dict] = None,
        size: typing.Optional[typing.Union[typing.Union[int, float, numbers.Number], Literal["large", "small", "default"], "Size"]] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'children', 'style', 'className', 'maxCount', 'maxPopoverPlacement', 'maxPopoverTrigger', 'maxStyle', 'size', 'data-*', 'aria-*']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'children', 'style', 'className', 'maxCount', 'maxPopoverPlacement', 'maxPopoverTrigger', 'maxStyle', 'size', 'data-*', 'aria-*']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdAvatarGroup, self).__init__(children=children, **args)
