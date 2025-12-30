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


class AntdSkeleton(Component):
    """An AntdSkeleton component.
骨架屏组件AntdSkeleton

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- children (a list of or a singular dash component, string or number; optional):
    组件型，内嵌元素.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- loading (boolean; default False):
    是否处于加载中状态.

- active (boolean; default False):
    是否显示动画  默认值：`False`.

- delay (number; default 0):
    加载动画渲染延时，单位：毫秒  默认值：`0`.

- avatar (dict; default False):
    配置头像占位图相关参数，设置为`False`时不显示  默认值：`True`.

    `avatar` is a boolean | dict with keys:

    - active (boolean; optional):
        头像占位图是否显示动画  默认值：`False`.

    - shape (a value equal to: 'circle', 'square'; optional):
        头像占位图形状，可选项有`'circle'`、`'square'`.

    - size (number | a value equal to: 'large', 'small', 'default'; optional):
        头像占位图尺寸，传入数值型表示像素尺寸，也可传入预设的尺寸规格，可选项有`'large'`、`'small'`、`'default'`
        默认值：`'default'`.

- paragraph (dict; default True):
    配置段落占位图相关参数，设置为`False`时不显示  默认值：`True`.

    `paragraph` is a boolean | dict with keys:

    - rows (number; optional):
        段落占位图行数.

    - width (number | string | list of number | strings; optional):
        段落占位图宽度，当传入*int*或*string*型时，用于设置段落占位图最后一行的宽度，当传入*list*型时，用于逐行设置宽度.

- title (dict; default True):
    是否显示标题占位图  默认值：`True`.

    `title` is a boolean | dict with keys:

    - width (number | string; optional):
        标题占位图宽度.

- round (boolean; default False):
    段落、标题占位图是否渲染圆角  默认值：`False`.

- debug (boolean; default False):
    是否开启debug模式，开启后，每次动画加载都会在开发者工具的控制台打印相关`prop`信息  默认值：`False`.

- listenPropsMode (a value equal to: 'default', 'exclude', 'include'; default 'default'):
    监听模式，可选项有`'default'`、`'exclude'`、`'include'`  默认值：`'default'`.

- excludeProps (list of strings; optional):
    `listenPropsMode='exclude'`时，设置需要排除监听的回调目标列表，格式如`['组件id1.组件属性1',
    '组件id2.组件属性2', ...]`.

- includeProps (list of strings; optional):
    `listenPropsMode='include'`时，设置需要包含监听的回调目标列表，格式如`['组件id1.组件属性1',
    '组件id2.组件属性2', ...]`.

- manual (boolean; default False):
    是否开启手动控制模式，开启后是否处于加载状态将由`loading`参数控制，与内部元素参与的回调状态无关  默认值：`False`.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配."""
    _children_props: typing.List[str] = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdSkeleton'
    Avatar = TypedDict(
        "Avatar",
            {
            "active": NotRequired[bool],
            "shape": NotRequired[Literal["circle", "square"]],
            "size": NotRequired[typing.Union[NumberType, Literal["large", "small", "default"]]]
        }
    )

    Paragraph = TypedDict(
        "Paragraph",
            {
            "rows": NotRequired[NumberType],
            "width": NotRequired[typing.Union[NumberType, str, typing.Sequence[typing.Union[NumberType, str]]]]
        }
    )

    Title = TypedDict(
        "Title",
            {
            "width": NotRequired[typing.Union[NumberType, str]]
        }
    )


    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        loading: typing.Optional[bool] = None,
        active: typing.Optional[bool] = None,
        delay: typing.Optional[NumberType] = None,
        avatar: typing.Optional[typing.Union[bool, "Avatar"]] = None,
        paragraph: typing.Optional[typing.Union[bool, "Paragraph"]] = None,
        title: typing.Optional[typing.Union[bool, "Title"]] = None,
        round: typing.Optional[bool] = None,
        debug: typing.Optional[bool] = None,
        listenPropsMode: typing.Optional[Literal["default", "exclude", "include"]] = None,
        excludeProps: typing.Optional[typing.Sequence[str]] = None,
        includeProps: typing.Optional[typing.Sequence[str]] = None,
        manual: typing.Optional[bool] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'children', 'style', 'className', 'loading', 'active', 'delay', 'avatar', 'paragraph', 'title', 'round', 'debug', 'listenPropsMode', 'excludeProps', 'includeProps', 'manual', 'data-*', 'aria-*']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'children', 'style', 'className', 'loading', 'active', 'delay', 'avatar', 'paragraph', 'title', 'round', 'debug', 'listenPropsMode', 'excludeProps', 'includeProps', 'manual', 'data-*', 'aria-*']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdSkeleton, self).__init__(children=children, **args)

setattr(AntdSkeleton, "__init__", _explicitize_args(AntdSkeleton.__init__))
