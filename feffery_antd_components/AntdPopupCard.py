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


class AntdPopupCard(Component):
    """An AntdPopupCard component.
弹出式卡片组件AntdPopupCard

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

    - mask (dict; optional):
        遮罩层元素css样式.

    - content (dict; optional):
        容器元素css样式.

    - wrapper (dict; optional):
        包裹层元素css样式.

    - header (dict; optional):
        头部元素css样式.

    - body (dict; optional):
        内容元素css样式.

    - footer (dict; optional):
        底部元素css样式.

- classNames (dict; optional):
    细分控制子元素css类名.

    `classNames` is a dict with keys:

    - mask (string; optional):
        遮罩层元素css类名.

    - content (string; optional):
        容器元素css类名.

    - wrapper (string; optional):
        包裹层元素css类名.

    - header (string; optional):
        头部元素css类名.

    - body (string; optional):
        内容元素css类名.

    - footer (string; optional):
        底部元素css类名.

- title (a list of or a singular dash component, string or number; optional):
    组件型，标题内容.

- visible (boolean; default True):
    设置或监听当前弹出式卡片是否显示 默认值：`True`.

- width (number | string; optional):
    弹出式卡片像素宽度.

- transitionType (a value equal to: 'none', 'fade', 'zoom', 'zoom-big', 'zoom-big-fast', 'slide-up', 'slide-down', 'slide-left', 'slide-right', 'move-up', 'move-down', 'move-left', 'move-right'; default 'fade'):
    卡片显隐动画类型，可选项有`'none'`、`'fade'`、`'zoom'`、`'zoom-big'`、`'zoom-big-fast'`、`'slide-up'`、`'slide-down'`、`'slide-left'`、`'slide-right'`、`'move-up'`、`'move-down'`、`'move-left'`、`'move-right'`
    默认值：`'zoom'`.

- forceRender (boolean; default False):
    是否在初始化卡片未显示时，强制渲染卡片内部元素 默认值：`False`.

- destroyOnClose (boolean; default True):
    是否在卡片关闭后自动销毁内部元素 默认值：`True`.

- closable (boolean; default True):
    是否显示右上角的关闭按钮 默认值：`True`.

- closeIconType (a value equal to: 'default', 'outlined', 'two-tone'; default 'default'):
    关闭按钮类型，可选项有`'default'`、`'outlined'`、`'two-tone'` 默认值：`'default'`.

- draggable (boolean; default False):
    是否可拖拽 默认值：`False`.

- dragClassName (string | dict; optional):
    顶部可拖拽区域css类名.

- zIndex (number; default 1000):
    弹出式卡片z-index 默认值：`1000`.

- loading (boolean; default False):
    是否整体渲染为加载中状态 默认值：`False`.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配."""
    _children_props: typing.List[str] = ['title']
    _base_nodes = ['title', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdPopupCard'
    Styles = TypedDict(
        "Styles",
            {
            "mask": NotRequired[dict],
            "content": NotRequired[dict],
            "wrapper": NotRequired[dict],
            "header": NotRequired[dict],
            "body": NotRequired[dict],
            "footer": NotRequired[dict]
        }
    )

    ClassNames = TypedDict(
        "ClassNames",
            {
            "mask": NotRequired[str],
            "content": NotRequired[str],
            "wrapper": NotRequired[str],
            "header": NotRequired[str],
            "body": NotRequired[str],
            "footer": NotRequired[str]
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
        visible: typing.Optional[bool] = None,
        width: typing.Optional[typing.Union[NumberType, str]] = None,
        transitionType: typing.Optional[Literal["none", "fade", "zoom", "zoom-big", "zoom-big-fast", "slide-up", "slide-down", "slide-left", "slide-right", "move-up", "move-down", "move-left", "move-right"]] = None,
        forceRender: typing.Optional[bool] = None,
        destroyOnClose: typing.Optional[bool] = None,
        closable: typing.Optional[bool] = None,
        closeIconType: typing.Optional[Literal["default", "outlined", "two-tone"]] = None,
        draggable: typing.Optional[bool] = None,
        dragClassName: typing.Optional[typing.Union[str, dict]] = None,
        zIndex: typing.Optional[NumberType] = None,
        loading: typing.Optional[bool] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'children', 'style', 'className', 'styles', 'classNames', 'title', 'visible', 'width', 'transitionType', 'forceRender', 'destroyOnClose', 'closable', 'closeIconType', 'draggable', 'dragClassName', 'zIndex', 'loading', 'data-*', 'aria-*']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'children', 'style', 'className', 'styles', 'classNames', 'title', 'visible', 'width', 'transitionType', 'forceRender', 'destroyOnClose', 'closable', 'closeIconType', 'draggable', 'dragClassName', 'zIndex', 'loading', 'data-*', 'aria-*']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdPopupCard, self).__init__(children=children, **args)

setattr(AntdPopupCard, "__init__", _explicitize_args(AntdPopupCard.__init__))
