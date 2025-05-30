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


class AntdSpace(Component):
    """An AntdSpace component.
排列组件AntdSpace

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- children (a list of or a singular dash component, string or number; optional):
    组件型，内嵌元素.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- styles (dict; optional):
    细分控制子元素css样式.

    `styles` is a dict with keys:

    - item (dict; optional):
        控制子项容器元素css样式.

- classNames (dict; optional):
    细分控制子元素css类.

    `classNames` is a dict with keys:

    - item (string; optional):
        控制子项容器元素css类.

- align (a value equal to: 'start', 'end', 'center', 'baseline'; optional):
    对齐方式，可选项有`'start'`、`'end'`、`'center'`、`'baseline'`.

- direction (a value equal to: 'vertical', 'horizontal'; default 'horizontal'):
    排列方向，可选项有`'vertical'`、`'horizontal'`  默认值：`'horizontal'`.

- size (a value equal to: 'small', 'middle', 'large' | number; default 'small'):
    子元素间隔大小，可选项有`'small'`、`'middle'`、`'large'`，或直接设置数值型代表像素间隔
    默认值：`'small'`.

- addSplitLine (boolean; default False):
    是否添加分隔线  默认值：`False`.

- customSplit (a list of or a singular dash component, string or number; optional):
    自定义分隔线元素.

- wrap (boolean; default False):
    子元素是否自动换行，仅`direction='horizontal'`时有效  默认值：`False`.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配."""
    _children_props = ['customSplit']
    _base_nodes = ['customSplit', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdSpace'
    Styles = TypedDict(
        "Styles",
            {
            "item": NotRequired[dict]
        }
    )

    ClassNames = TypedDict(
        "ClassNames",
            {
            "item": NotRequired[str]
        }
    )


    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        styles: typing.Optional["Styles"] = None,
        classNames: typing.Optional["ClassNames"] = None,
        align: typing.Optional[Literal["start", "end", "center", "baseline"]] = None,
        direction: typing.Optional[Literal["vertical", "horizontal"]] = None,
        size: typing.Optional[typing.Union[Literal["small", "middle", "large"], NumberType]] = None,
        addSplitLine: typing.Optional[bool] = None,
        customSplit: typing.Optional[ComponentType] = None,
        wrap: typing.Optional[bool] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'children', 'style', 'className', 'styles', 'classNames', 'align', 'direction', 'size', 'addSplitLine', 'customSplit', 'wrap', 'data-*', 'aria-*']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'children', 'style', 'className', 'styles', 'classNames', 'align', 'direction', 'size', 'addSplitLine', 'customSplit', 'wrap', 'data-*', 'aria-*']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdSpace, self).__init__(children=children, **args)

setattr(AntdSpace, "__init__", _explicitize_args(AntdSpace.__init__))
