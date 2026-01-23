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


class AntdResult(Component):
    """An AntdResult component.
结果组件AntdResult

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- extra (a list of or a singular dash component, string or number; optional):
    组件型，操作区域.

- status (a value equal to: 'success', 'error', 'info', 'warning', '404', '403', '500', 'loading'; default 'info'):
    状态，可选项有`'success'`、`'error'`、`'info'`、`'warning'`、`'404'`、`'403'`、`'500'`
    默认值：`'info'`.

- title (a list of or a singular dash component, string or number; optional):
    组件型，标题内容.

- subTitle (a list of or a singular dash component, string or number; optional):
    组件型，副标题内容.

- icon (a list of or a singular dash component, string or number; optional):
    组件型，图标内容.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配."""
    _children_props: typing.List[str] = ['extra', 'title', 'subTitle', 'icon']
    _base_nodes = ['extra', 'title', 'subTitle', 'icon', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdResult'


    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        extra: typing.Optional[ComponentType] = None,
        status: typing.Optional[Literal["success", "error", "info", "warning", "404", "403", "500", "loading"]] = None,
        title: typing.Optional[ComponentType] = None,
        subTitle: typing.Optional[ComponentType] = None,
        icon: typing.Optional[ComponentType] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'style', 'className', 'extra', 'status', 'title', 'subTitle', 'icon', 'data-*', 'aria-*']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'style', 'className', 'extra', 'status', 'title', 'subTitle', 'icon', 'data-*', 'aria-*']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdResult, self).__init__(**args)

setattr(AntdResult, "__init__", _explicitize_args(AntdResult.__init__))
