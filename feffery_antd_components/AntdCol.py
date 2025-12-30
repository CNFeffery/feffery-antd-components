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


class AntdCol(Component):
    """An AntdCol component.
列组件AntdCol

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- children (a list of or a singular dash component, string or number; optional):
    组件型，内嵌元素.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- span (number; optional):
    列所占宽度份数.

- offset (number; default 0):
    列左侧间隔宽度份数  默认值：`0`.

- order (number; default 0):
    列顺序  默认值：`0`.

- pull (number; default 0):
    列向左移动宽度份数  默认值：`0`.

- push (number; default 0):
    列向右移动宽度份数  默认值：`0`.

- flex (string | number; optional):
    同css中的flex.

- xs (dict; optional):
    配置列在页面宽度小于567px时的布局参数，传入数值型时代表span参数，传入字典时分别设置各布局参数.

    `xs` is a number | dict with keys:

    - span (number; optional):
        同span参数.

    - offset (number; optional):
        同offset参数.

    - order (number; optional):
        同order参数.

    - pull (number; optional):
        同pull参数.

    - push (number; optional):
        同push参数.

- sm (dict; optional):
    配置列在页面宽度大于等于567px时的布局参数，传入数值型时代表span参数，传入字典时分别设置各布局参数.

    `sm` is a number | dict with keys:

    - span (number; optional):
        同span参数.

    - offset (number; optional):
        同offset参数.

    - order (number; optional):
        同order参数.

    - pull (number; optional):
        同pull参数.

    - push (number; optional):
        同push参数.

- md (dict; optional):
    配置列在页面宽度大于等于768px时的布局参数，传入数值型时代表span参数，传入字典时分别设置各布局参数.

    `md` is a number | dict with keys:

    - span (number; optional):
        同span参数.

    - offset (number; optional):
        同offset参数.

    - order (number; optional):
        同order参数.

    - pull (number; optional):
        同pull参数.

    - push (number; optional):
        同push参数.

- lg (dict; optional):
    配置列在页面宽度大于等于992px时的布局参数，传入数值型时代表span参数，传入字典时分别设置各布局参数.

    `lg` is a number | dict with keys:

    - span (number; optional):
        同span参数.

    - offset (number; optional):
        同offset参数.

    - order (number; optional):
        同order参数.

    - pull (number; optional):
        同pull参数.

    - push (number; optional):
        同push参数.

- xl (dict; optional):
    配置列在页面宽度大于等于1200px时的布局参数，传入数值型时代表span参数，传入字典时分别设置各布局参数.

    `xl` is a number | dict with keys:

    - span (number; optional):
        同span参数.

    - offset (number; optional):
        同offset参数.

    - order (number; optional):
        同order参数.

    - pull (number; optional):
        同pull参数.

    - push (number; optional):
        同push参数.

- xxl (dict; optional):
    配置列在页面宽度大于等于1600px时的布局参数，传入数值型时代表span参数，传入字典时分别设置各布局参数.

    `xxl` is a number | dict with keys:

    - span (number; optional):
        同span参数.

    - offset (number; optional):
        同offset参数.

    - order (number; optional):
        同order参数.

    - pull (number; optional):
        同pull参数.

    - push (number; optional):
        同push参数.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配."""
    _children_props: typing.List[str] = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdCol'
    Xs = TypedDict(
        "Xs",
            {
            "span": NotRequired[NumberType],
            "offset": NotRequired[NumberType],
            "order": NotRequired[NumberType],
            "pull": NotRequired[NumberType],
            "push": NotRequired[NumberType]
        }
    )

    Sm = TypedDict(
        "Sm",
            {
            "span": NotRequired[NumberType],
            "offset": NotRequired[NumberType],
            "order": NotRequired[NumberType],
            "pull": NotRequired[NumberType],
            "push": NotRequired[NumberType]
        }
    )

    Md = TypedDict(
        "Md",
            {
            "span": NotRequired[NumberType],
            "offset": NotRequired[NumberType],
            "order": NotRequired[NumberType],
            "pull": NotRequired[NumberType],
            "push": NotRequired[NumberType]
        }
    )

    Lg = TypedDict(
        "Lg",
            {
            "span": NotRequired[NumberType],
            "offset": NotRequired[NumberType],
            "order": NotRequired[NumberType],
            "pull": NotRequired[NumberType],
            "push": NotRequired[NumberType]
        }
    )

    Xl = TypedDict(
        "Xl",
            {
            "span": NotRequired[NumberType],
            "offset": NotRequired[NumberType],
            "order": NotRequired[NumberType],
            "pull": NotRequired[NumberType],
            "push": NotRequired[NumberType]
        }
    )

    Xxl = TypedDict(
        "Xxl",
            {
            "span": NotRequired[NumberType],
            "offset": NotRequired[NumberType],
            "order": NotRequired[NumberType],
            "pull": NotRequired[NumberType],
            "push": NotRequired[NumberType]
        }
    )


    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        span: typing.Optional[NumberType] = None,
        offset: typing.Optional[NumberType] = None,
        order: typing.Optional[NumberType] = None,
        pull: typing.Optional[NumberType] = None,
        push: typing.Optional[NumberType] = None,
        flex: typing.Optional[typing.Union[str, NumberType]] = None,
        xs: typing.Optional[typing.Union[NumberType, "Xs"]] = None,
        sm: typing.Optional[typing.Union[NumberType, "Sm"]] = None,
        md: typing.Optional[typing.Union[NumberType, "Md"]] = None,
        lg: typing.Optional[typing.Union[NumberType, "Lg"]] = None,
        xl: typing.Optional[typing.Union[NumberType, "Xl"]] = None,
        xxl: typing.Optional[typing.Union[NumberType, "Xxl"]] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'children', 'style', 'className', 'span', 'offset', 'order', 'pull', 'push', 'flex', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'data-*', 'aria-*']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'children', 'style', 'className', 'span', 'offset', 'order', 'pull', 'push', 'flex', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'data-*', 'aria-*']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdCol, self).__init__(children=children, **args)

setattr(AntdCol, "__init__", _explicitize_args(AntdCol.__init__))
