# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
import numbers # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args
try:
    from dash.development.base_component import ComponentType # noqa: F401
except ImportError:
    ComponentType = typing.TypeVar("ComponentType", bound=Component)


class AntdDescriptions(Component):
    """An AntdDescriptions component.
描述列表组件AntdDescriptions

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- children (a list of or a singular dash component, string or number; optional):
    组件型，传入内部各描述列表子项.

- style (dict; optional):
    当前组件css样式.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- items (list of dicts; optional):
    配置描述列表子项，优先级高于`children`.

    `items` is a list of dicts with keys:

    - label (a list of or a singular dash component, string or number; optional):
        组件型，子项标题内容.

    - span (number | a value equal to: 'filled'; optional):
        子项所占宽度份数，当设置为`'filled'`时会自适应占满当前行剩余可用空间  默认值：`1`.

    - children (a list of or a singular dash component, string or number; optional):
        组件型，子项内容.

    - labelStyle (dict; optional):
        子项标签css样式.

    - contentStyle (dict; optional):
        子项内容css样式.

    - style (dict; optional):
        子项css样式.

    - className (string; optional):
        子项css类名.

- title (a list of or a singular dash component, string or number; optional):
    组件型，标题内容.

- column (dict; default 3):
    每行显示的字段项数量，支持响应式  默认值：`3`.

    `column` is a number | dict with keys:

    - xxl (number; optional)

    - xl (number; optional)

    - lg (number; optional)

    - md (number; optional)

    - sm (number; optional)

    - xs (number; optional)

- bordered (boolean; default False):
    是否显示边框  默认值：`False`.

- size (a value equal to: 'small', 'default', 'large'; default 'default'):
    整体尺寸规格，可选项有`'small'`、`'default'`、`'large'`  默认值：`'default'`.

- layout (a value equal to: 'horizontal', 'vertical'; default 'horizontal'):
    布局方式，可选项有`'horizontal'`、`'vertical'`  默认值：`'horizontal'`.

- labelStyle (dict; optional):
    统一设置字段标签css样式.

- contentStyle (dict; optional):
    统一设置字段内容css样式.

- extra (a list of or a singular dash component, string or number; optional):
    组件型，设置操作区域，显示在右上方.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

    - component_name (string; optional):
        Holds the name of the component that is loading."""
    _children_props = ['items[].label', 'items[].children', 'title', 'extra']
    _base_nodes = ['title', 'extra', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdDescriptions'
    Items = TypedDict(
        "Items",
            {
            "label": NotRequired[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]],
            "span": NotRequired[typing.Union[typing.Union[int, float, numbers.Number], Literal["filled"]]],
            "children": NotRequired[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]],
            "labelStyle": NotRequired[dict],
            "contentStyle": NotRequired[dict],
            "style": NotRequired[dict],
            "className": NotRequired[str]
        }
    )

    Column = TypedDict(
        "Column",
            {
            "xxl": NotRequired[typing.Union[int, float, numbers.Number]],
            "xl": NotRequired[typing.Union[int, float, numbers.Number]],
            "lg": NotRequired[typing.Union[int, float, numbers.Number]],
            "md": NotRequired[typing.Union[int, float, numbers.Number]],
            "sm": NotRequired[typing.Union[int, float, numbers.Number]],
            "xs": NotRequired[typing.Union[int, float, numbers.Number]]
        }
    )

    LoadingState = TypedDict(
        "LoadingState",
            {
            "is_loading": NotRequired[bool],
            "prop_name": NotRequired[str],
            "component_name": NotRequired[str]
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
        items: typing.Optional[typing.Sequence["Items"]] = None,
        title: typing.Optional[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]] = None,
        column: typing.Optional[typing.Union[typing.Union[int, float, numbers.Number], "Column"]] = None,
        bordered: typing.Optional[bool] = None,
        size: typing.Optional[Literal["small", "default", "large"]] = None,
        layout: typing.Optional[Literal["horizontal", "vertical"]] = None,
        labelStyle: typing.Optional[dict] = None,
        contentStyle: typing.Optional[dict] = None,
        extra: typing.Optional[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]] = None,
        loading_state: typing.Optional["LoadingState"] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'children', 'style', 'className', 'items', 'title', 'column', 'bordered', 'size', 'layout', 'labelStyle', 'contentStyle', 'extra', 'data-*', 'aria-*', 'loading_state']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'children', 'style', 'className', 'items', 'title', 'column', 'bordered', 'size', 'layout', 'labelStyle', 'contentStyle', 'extra', 'data-*', 'aria-*', 'loading_state']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdDescriptions, self).__init__(children=children, **args)
