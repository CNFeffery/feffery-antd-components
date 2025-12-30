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


class AntdCollapse(Component):
    """An AntdCollapse component.
折叠面板组件AntdCollapse

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

- title (a list of or a singular dash component, string or number; optional):
    组件型，标题内容.

- isOpen (boolean; default True):
    是否展开  默认值：`True`.

- size (a value equal to: 'large', 'middle', 'small'; default 'middle'):
    组件尺寸规格，可选项有`'small'`、`'middle'`、`'large'`  默认值：`'middle'`.

- bordered (boolean; default True):
    是否渲染边框  默认值：`True`.

- showArrow (boolean; default True):
    是否渲染箭头  默认值：`True`.

- ghost (boolean; default False):
    是否开启透明背景模式  默认值：`False`.

- collapsible (a value equal to: 'header', 'disabled', 'icon'; optional):
    折叠交互触发行为，可选项有`'header'`（仅标题区域）、`'disabled'`（禁用折叠）、`'icon'`（仅图标区域）.

- forceRender (boolean; default False):
    初始化未展开时，是否强制渲染内部元素  默认值：`False`.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- persistence (boolean | string | number; optional):
    是否开启[属性持久化](/prop-persistence).

- persisted_props (list of a value equal to: 'isOpen's; optional):
    开启属性持久化功能的若干属性名，可选项有`'isOpen'`  默认值：`['isOpen']`.

- persistence_type (a value equal to: 'local', 'session', 'memory'; optional):
    属性持久化存储类型，可选项有`'local'`（本地持久化），`'session'`（会话持久化），`'memory'`（内存持久化）
    默认值：`'local'`."""
    _children_props: typing.List[str] = ['title']
    _base_nodes = ['title', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdCollapse'
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


    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        styles: typing.Optional["Styles"] = None,
        classNames: typing.Optional["ClassNames"] = None,
        title: typing.Optional[ComponentType] = None,
        isOpen: typing.Optional[bool] = None,
        size: typing.Optional[Literal["large", "middle", "small"]] = None,
        bordered: typing.Optional[bool] = None,
        showArrow: typing.Optional[bool] = None,
        ghost: typing.Optional[bool] = None,
        collapsible: typing.Optional[Literal["header", "disabled", "icon"]] = None,
        forceRender: typing.Optional[bool] = None,
        persistence: typing.Optional[typing.Union[bool, str, NumberType]] = None,
        persisted_props: typing.Optional[typing.Sequence[Literal["isOpen"]]] = None,
        persistence_type: typing.Optional[Literal["local", "session", "memory"]] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'children', 'style', 'className', 'styles', 'classNames', 'title', 'isOpen', 'size', 'bordered', 'showArrow', 'ghost', 'collapsible', 'forceRender', 'data-*', 'aria-*', 'persistence', 'persisted_props', 'persistence_type']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'children', 'style', 'className', 'styles', 'classNames', 'title', 'isOpen', 'size', 'bordered', 'showArrow', 'ghost', 'collapsible', 'forceRender', 'data-*', 'aria-*', 'persistence', 'persisted_props', 'persistence_type']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdCollapse, self).__init__(children=children, **args)

setattr(AntdCollapse, "__init__", _explicitize_args(AntdCollapse.__init__))
