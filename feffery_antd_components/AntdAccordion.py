# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args

ComponentSingleType = typing.Union[str, int, float, Component, None]
ComponentType = typing.Union[
    ComponentSingleType,
    typing.Sequence[ComponentSingleType],
]

NumberType = typing.Union[
    typing.SupportsFloat, typing.SupportsInt, typing.SupportsComplex
]


class AntdAccordion(Component):
    """An AntdAccordion component.
手风琴组件AntdAccordion

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- styles (dict; optional):
    细分控制子元素css样式.

    `styles` is a dict with keys:

    - header (dict; optional):
        头部元素css样式.

    - body (dict; optional):
        内容元素css样式.

- classNames (dict; optional):
    细分控制子元素css类名.

    `classNames` is a dict with keys:

    - header (string; optional):
        头部元素css类名.

    - body (string; optional):
        内容元素css类名.

- items (list of dicts; optional):
    定义手风琴子项.

    `items` is a list of dicts with keys:

    - children (a list of or a singular dash component, string or number; optional):
        当前子项内部元素.

    - className (string | dict; optional):
        当前子项css类名，支持[动态css](/advanced-classname).

    - style (dict; optional):
        当前子项css样式.

    - key (string | number; required):
        必填，当前子项唯一key值.

    - collapsible (a value equal to: 'header', 'disabled', 'icon'; optional):
        当前子项折叠触发方式，可选项有`'header'`、`'disabled'`、`'icon'`.

    - title (a list of or a singular dash component, string or number; optional):
        当前子项标题元素.

    - extra (a list of or a singular dash component, string or number; optional):
        当前子项右上角额外元素.

    - showArrow (boolean; optional):
        是否展示当前手风琴项的箭头图标 默认值：`True`.

    - forceRender (boolean; optional):
        是否强制渲染内部元素 默认值：`False`.

- accordion (boolean; default True):
    是否开启手风琴模式 默认值：`True`.

- activeKey (string | list of strings | number | list of numbers; optional):
    监听或设置当前处于展开状态的手风琴项key值.

- defaultActiveKey (string | list of strings | number | list of numbers; optional):
    设置初始化处于展开状态的手风琴项key值.

- bordered (boolean; default True):
    是否渲染边框 默认值：`True`.

- size (a value equal to: 'large', 'middle', 'small'; default 'middle'):
    组件尺寸规格，可选项有`'small'`、`'middle'`、`'large'` 默认值：`'middle'`.

- collapsible (a value equal to: 'header', 'disabled', 'icon'; optional):
    设置所有子项折叠触发方式，可选项有`'header'`、`'disabled'`、`'icon'`.

- expandIconPosition (a value equal to: 'left', 'right'; default 'left'):
    设置折叠图标位置，可选项有`'left'`、`'right'`.

- ghost (boolean; default False):
    是否开启透明无边框模式 默认值：`False`.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配."""
    _children_props: typing.List[str] = ['items[].children', 'items[].title', 'items[].extra']
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdAccordion'
    Styles = TypedDict(
        "Styles",
            {
            "header": NotRequired[dict],
            "body": NotRequired[dict]
        }
    )

    ClassNames = TypedDict(
        "ClassNames",
            {
            "header": NotRequired[str],
            "body": NotRequired[str]
        }
    )

    Items = TypedDict(
        "Items",
            {
            "children": NotRequired[ComponentType],
            "className": NotRequired[typing.Union[str, dict]],
            "style": NotRequired[dict],
            "key": typing.Union[str, NumberType],
            "collapsible": NotRequired[Literal["header", "disabled", "icon"]],
            "title": NotRequired[ComponentType],
            "extra": NotRequired[ComponentType],
            "showArrow": NotRequired[bool],
            "forceRender": NotRequired[bool]
        }
    )


    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        styles: typing.Optional["Styles"] = None,
        classNames: typing.Optional["ClassNames"] = None,
        items: typing.Optional[typing.Sequence["Items"]] = None,
        accordion: typing.Optional[bool] = None,
        activeKey: typing.Optional[typing.Union[str, typing.Sequence[str], NumberType, typing.Sequence[NumberType]]] = None,
        defaultActiveKey: typing.Optional[typing.Union[str, typing.Sequence[str], NumberType, typing.Sequence[NumberType]]] = None,
        bordered: typing.Optional[bool] = None,
        size: typing.Optional[Literal["large", "middle", "small"]] = None,
        collapsible: typing.Optional[Literal["header", "disabled", "icon"]] = None,
        expandIconPosition: typing.Optional[Literal["left", "right"]] = None,
        ghost: typing.Optional[bool] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'style', 'className', 'styles', 'classNames', 'items', 'accordion', 'activeKey', 'defaultActiveKey', 'bordered', 'size', 'collapsible', 'expandIconPosition', 'ghost', 'data-*', 'aria-*']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'style', 'className', 'styles', 'classNames', 'items', 'accordion', 'activeKey', 'defaultActiveKey', 'bordered', 'size', 'collapsible', 'expandIconPosition', 'ghost', 'data-*', 'aria-*']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdAccordion, self).__init__(**args)

setattr(AntdAccordion, "__init__", _explicitize_args(AntdAccordion.__init__))
