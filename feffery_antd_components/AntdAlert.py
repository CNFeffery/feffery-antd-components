# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
import numbers # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component
try:
    from dash.development.base_component import ComponentType # noqa: F401
except ImportError:
    ComponentType = typing.TypeVar("ComponentType", bound=Component)


class AntdAlert(Component):
    """An AntdAlert component.
警告提示组件AntdAlert

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- message (a list of or a singular dash component, string or number; optional):
    主要提示信息内容.

- description (a list of or a singular dash component, string or number; optional):
    额外提示信息内容.

- type (a value equal to: 'success', 'info', 'warning', 'error'; default 'info'):
    提示信息类型，可选项有`'success'`、`'info'`、`'warning'`、`'error'`
    默认值：`'info'`.

- showIcon (boolean; default False):
    是否显示额外图标  默认值：`False`.

- icon (a list of or a singular dash component, string or number; optional):
    组件型，当`showIcon=True`时，用于自定义图标元素.

- closable (boolean; default False):
    是否可关闭  默认值：`False`.

- messageRenderMode (a value equal to: 'default', 'loop-text', 'marquee'; default 'default'):
    渲染模式，可选项有`'default'`、`'loop-text'`、`'marquee'`  默认值：`'default'`.

- action (a list of or a singular dash component, string or number; optional):
    组件型，定义右上角额外操作区元素.

- banner (boolean; default False):
    是否用作顶部公告  默认值：`False`.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配."""
    _children_props = ['message', 'description', 'icon', 'action']
    _base_nodes = ['message', 'description', 'icon', 'action', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdAlert'

    _explicitize_dash_init = True

    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        message: typing.Optional[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]] = None,
        description: typing.Optional[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]] = None,
        type: typing.Optional[Literal["success", "info", "warning", "error"]] = None,
        showIcon: typing.Optional[bool] = None,
        icon: typing.Optional[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]] = None,
        closable: typing.Optional[bool] = None,
        messageRenderMode: typing.Optional[Literal["default", "loop-text", "marquee"]] = None,
        action: typing.Optional[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]] = None,
        banner: typing.Optional[bool] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'style', 'className', 'message', 'description', 'type', 'showIcon', 'icon', 'closable', 'messageRenderMode', 'action', 'banner', 'data-*', 'aria-*']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'style', 'className', 'message', 'description', 'type', 'showIcon', 'icon', 'closable', 'messageRenderMode', 'action', 'banner', 'data-*', 'aria-*']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdAlert, self).__init__(**args)
