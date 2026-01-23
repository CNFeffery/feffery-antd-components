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


class AntdButton(Component):
    """An AntdButton component.
按钮组件AntdButton

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- children (a list of or a singular dash component, string or number; optional):
    组件型，按钮内嵌元素.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- styles (dict; optional):
    细分控制子元素css样式.

    `styles` is a dict with keys:

    - icon (dict; optional):
        按钮图标元素css样式.

- classNames (dict; optional):
    细分控制子元素css类名.

    `classNames` is a dict with keys:

    - icon (string; optional):
        按钮图标元素css类名.

- loadingChildren (a list of or a singular dash component, string or number; optional):
    组件型，按钮加载状态下显示的内嵌元素.

- type (a value equal to: 'default', 'primary', 'dashed', 'link', 'text'; default 'default'):
    按钮类型，可选项有`'default'`、`'primary'`、`'dashed'`、`'link'`、`'text'`
    默认值：`'default'`.

- href (string; optional):
    按钮点击跳转链接地址.

- target (string; default '_blank'):
    按钮点击跳转链接方式 默认值：`'_blank'`.

- autoInsertSpace (boolean; default True):
    按钮两个汉字内是否插入空格 默认值：`True`.

- block (boolean; default False):
    按钮是否渲染为块级元素（宽度撑满父容器） 默认值：`False`.

- danger (boolean; default False):
    按钮是否呈现危险样式 默认值：`False`.

- disabled (boolean; default False):
    按钮是否呈现禁用状态 默认值：`False`.

- ghost (boolean; default False):
    按钮是否呈现透明背景状态 默认值：`False`.

- shape (a value equal to: 'default', 'circle', 'round'; default 'default'):
    按钮形状，可选项有`'default'`、`'circle'`、`'round'` 默认值：`'default'`.

- size (a value equal to: 'small', 'middle', 'large'; default 'middle'):
    按钮尺寸规格，可选项有`'small'`、`'middle'`、`'large'` 默认值：`'middle'`.

- nClicks (number; default 0):
    按钮累计点击次数，用于监听按钮点击行为 默认值：`0`.

- clickExecuteJsString (string; optional):
    按钮点击时需要附带执行的js程序字符串.

- debounceWait (number; default 0):
    按钮点击事件监听防抖延时，单位：毫秒 默认值：`0`.

- icon (a list of or a singular dash component, string or number; optional):
    组件型，按钮内嵌前缀图标元素.

- iconPosition (a value equal to: 'start', 'end'; default 'start'):
    按钮图标组件的位置，可选项有`'start'`、`'end'` 默认值：`'start'`.

- loading (boolean; optional):
    按钮是否呈现加载状态 默认值：`False`.

- autoSpin (boolean; default False):
    当前按钮在每次点击后是否自动进入加载中状态 默认值：`False`.

- motionType (a value equal to: 'happy-work'; optional):
    按钮额外的特殊交互类型，可选项有`'happy-work'`.

- color (a value equal to: 'default', 'primary', 'danger', 'blue', 'purple', 'cyan', 'green', 'magenta', 'pink', 'red', 'orange', 'yellow', 'volcano', 'geekblue', 'lime', 'gold'; optional):
    按钮颜色风格，可选项有`'default'`、`'primary'`、`'danger'`，以及可用的一系列内置颜色：`'blue'`、`'purple'`、`'cyan'`、`'green'`、`'magenta'`、`'pink'`、`'red'`、`'orange'`、`'yellow'`、`'volcano'`、`'geekblue'`、`'lime'`、`'gold'`.

- variant (a value equal to: 'outlined', 'dashed', 'solid', 'filled', 'text', 'link'; optional):
    形态变体类型，可选项有`'outlined'`、`'dashed'`、`'solid'`、`'filled'`、`'text'`、`'link'`.

- title (string; optional):
    原生按钮title属性.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配."""
    _children_props: typing.List[str] = ['loadingChildren', 'icon']
    _base_nodes = ['loadingChildren', 'icon', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdButton'
    Styles = TypedDict(
        "Styles",
            {
            "icon": NotRequired[dict]
        }
    )

    ClassNames = TypedDict(
        "ClassNames",
            {
            "icon": NotRequired[str]
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
        loadingChildren: typing.Optional[ComponentType] = None,
        type: typing.Optional[Literal["default", "primary", "dashed", "link", "text"]] = None,
        href: typing.Optional[str] = None,
        target: typing.Optional[str] = None,
        autoInsertSpace: typing.Optional[bool] = None,
        block: typing.Optional[bool] = None,
        danger: typing.Optional[bool] = None,
        disabled: typing.Optional[bool] = None,
        ghost: typing.Optional[bool] = None,
        shape: typing.Optional[Literal["default", "circle", "round"]] = None,
        size: typing.Optional[Literal["small", "middle", "large"]] = None,
        nClicks: typing.Optional[NumberType] = None,
        clickExecuteJsString: typing.Optional[str] = None,
        debounceWait: typing.Optional[NumberType] = None,
        icon: typing.Optional[ComponentType] = None,
        iconPosition: typing.Optional[Literal["start", "end"]] = None,
        loading: typing.Optional[bool] = None,
        autoSpin: typing.Optional[bool] = None,
        motionType: typing.Optional[Literal["happy-work"]] = None,
        color: typing.Optional[Literal["default", "primary", "danger", "blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"]] = None,
        variant: typing.Optional[Literal["outlined", "dashed", "solid", "filled", "text", "link"]] = None,
        title: typing.Optional[str] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'children', 'style', 'className', 'styles', 'classNames', 'loadingChildren', 'type', 'href', 'target', 'autoInsertSpace', 'block', 'danger', 'disabled', 'ghost', 'shape', 'size', 'nClicks', 'clickExecuteJsString', 'debounceWait', 'icon', 'iconPosition', 'loading', 'autoSpin', 'motionType', 'color', 'variant', 'title', 'data-*', 'aria-*']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'children', 'style', 'className', 'styles', 'classNames', 'loadingChildren', 'type', 'href', 'target', 'autoInsertSpace', 'block', 'danger', 'disabled', 'ghost', 'shape', 'size', 'nClicks', 'clickExecuteJsString', 'debounceWait', 'icon', 'iconPosition', 'loading', 'autoSpin', 'motionType', 'color', 'variant', 'title', 'data-*', 'aria-*']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdButton, self).__init__(children=children, **args)

setattr(AntdButton, "__init__", _explicitize_args(AntdButton.__init__))
