# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
import numbers # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args
try:
    from dash.development.base_component import ComponentType # noqa: F401
except ImportError:
    ComponentType = typing.TypeVar("ComponentType", bound=Component)


class AntdRow(Component):
    """An AntdRow component.
行组件AntdRow

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- children (a list of or a singular dash component, string or number; optional):
    组件型，内嵌元素.

- style (dict; optional):
    当前组件css样式.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- align (a value equal to: 'top', 'middle', 'bottom'; default 'top'):
    竖直方向对齐方式，可选项有`'top'`、`'middle'`、`'bottom'`  默认值：`'top'`.

- gutter (dict; default 0):
    网格间隔，传入数值型时为水平像素间隔，传入数组时分别设置水平、垂直像素间隔，传入字典时可为响应式各断点设置水平像素间隔.

    `gutter` is a number | list of numbers | dict with keys:

    - xs (number; optional):
        页面宽度小于567px时的水平像素间隔.

    - sm (number; optional):
        页面宽度大于等于567px时的水平像素间隔.

    - md (number; optional):
        页面宽度大于等于768px时的水平像素间隔.

    - lg (number; optional):
        页面宽度大于等于992px时的水平像素间隔.

    - xl (number; optional):
        页面宽度大于等于1200px时的水平像素间隔.

    - xxl (number; optional):
        页面宽度大于等于1600px时的水平像素间隔.

- justify (a value equal to: 'start', 'end', 'center', 'space-around', 'space-between'; default 'start'):
    水平排列方式，可选项有`'start'`、`'end'`、`'center'`、`'space-around'`、`'space-between'`
    默认值：`'start'`.

- wrap (boolean; default True):
    是否允许自动换行  默认值：`True`.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdRow'
    Gutter = TypedDict(
        "Gutter",
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
        align: typing.Optional[Literal["top", "middle", "bottom"]] = None,
        gutter: typing.Optional[typing.Union[typing.Union[int, float, numbers.Number], typing.Sequence[typing.Union[int, float, numbers.Number]], "Gutter"]] = None,
        justify: typing.Optional[Literal["start", "end", "center", "space-around", "space-between"]] = None,
        wrap: typing.Optional[bool] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'children', 'style', 'className', 'align', 'gutter', 'justify', 'wrap', 'data-*', 'aria-*']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'children', 'style', 'className', 'align', 'gutter', 'justify', 'wrap', 'data-*', 'aria-*']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdRow, self).__init__(children=children, **args)
