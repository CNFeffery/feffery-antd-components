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


class AntdBadge(Component):
    """An AntdBadge component.
徽标组件AntdBadge

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- children (a list of or a singular dash component, string or number; optional):
    组件型，定义徽标添加目标元素.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- styles (dict; optional):
    细分控制子元素css样式.

    `styles` is a dict with keys:

    - root (dict; optional):
        控制根元素css样式.

    - indicator (dict; optional):
        控制徽标元素css样式.

- classNames (dict; optional):
    细分控制子元素css类.

    `classNames` is a dict with keys:

    - root (string; optional):
        控制根元素css类.

    - indicator (string; optional):
        控制徽标元素css类.

- color (string; optional):
    徽标颜色.

- count (number; optional):
    徽标显示的数字.

- dot (boolean; default False):
    是否用圆点代替数字显示  默认值：`False`.

- showZero (boolean; default False):
    当`count=0`时，是否强制显示数字  默认值：`False`.

- overflowCount (number; default 99):
    数字显示上限，超出会以显示`+`后缀  默认值：`99`.

- offset (list of numbers; optional):
    徽标在水平、竖直方向上的像素偏移，格式为`[水平偏移, 竖直偏移]`.

- status (a value equal to: 'success', 'processing', 'default', 'error', 'warning'; optional):
    徽标状态，可选项有`'success'`、`'processing'`、`'default'`、`'error'`、`'warning'`.

- text (string; optional):
    参数`status`有效时，设置徽标文本内容.

- title (string; optional):
    徽标鼠标悬停显示文字内容.

- size (a value equal to: 'default', 'small'; default 'default'):
    徽标尺寸规格，可选项有`'default'`、`'small'`.

- nClicks (number; default 0):
    监听徽标累计被点击次数  默认值：`0`.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配."""
    _children_props: typing.List[str] = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdBadge'
    Styles = TypedDict(
        "Styles",
            {
            "root": NotRequired[dict],
            "indicator": NotRequired[dict]
        }
    )

    ClassNames = TypedDict(
        "ClassNames",
            {
            "root": NotRequired[str],
            "indicator": NotRequired[str]
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
        color: typing.Optional[str] = None,
        count: typing.Optional[NumberType] = None,
        dot: typing.Optional[bool] = None,
        showZero: typing.Optional[bool] = None,
        overflowCount: typing.Optional[NumberType] = None,
        offset: typing.Optional[typing.Sequence[NumberType]] = None,
        status: typing.Optional[Literal["success", "processing", "default", "error", "warning"]] = None,
        text: typing.Optional[str] = None,
        title: typing.Optional[str] = None,
        size: typing.Optional[Literal["default", "small"]] = None,
        nClicks: typing.Optional[NumberType] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'children', 'style', 'className', 'styles', 'classNames', 'color', 'count', 'dot', 'showZero', 'overflowCount', 'offset', 'status', 'text', 'title', 'size', 'nClicks', 'data-*', 'aria-*']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'children', 'style', 'className', 'styles', 'classNames', 'color', 'count', 'dot', 'showZero', 'overflowCount', 'offset', 'status', 'text', 'title', 'size', 'nClicks', 'data-*', 'aria-*']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdBadge, self).__init__(children=children, **args)

setattr(AntdBadge, "__init__", _explicitize_args(AntdBadge.__init__))
