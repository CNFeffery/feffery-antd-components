# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
import numbers # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args
try:
    from dash.development.base_component import ComponentType # noqa: F401
except ImportError:
    ComponentType = typing.TypeVar("ComponentType", bound=Component)


class AntdNotification(Component):
    """An AntdNotification component.
通知提醒框组件AntdNotification

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- message (string; optional):
    通知提醒主要信息.

- description (string; optional):
    通知提醒描述信息.

- type (a value equal to: 'default', 'success', 'error', 'info', 'warning'; default 'default'):
    通知提醒类型，可选项有`'default'`、`'success'`、`'error'`、`'info'`、`'warning'`
    默认值：`'default'`.

- placement (a value equal to: 'top', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'; default 'topRight'):
    通知提醒框在屏幕中的弹出位置，可选项有`'top'`、`'bottom'`、`'topLeft'`、`'topRight'`、`'bottomLeft'`、`'bottomRight'`
    默认值：`'topRight'`.

- top (number; default 24):
    当通知从顶部弹出时，设置距离顶部的像素距离  默认值：`24`.

- bottom (number; default 24):
    当通知从底部弹出时，设置距离底部的像素距离  默认值：`24`.

- duration (number; default 4.5):
    通知从显示到自动消失的时长，单位：秒，当传入`None`时会一直显示  默认值：`4.5`.

- showProgress (boolean; default False):
    是否显示自动关闭进度条  默认值：`False`.

- pauseOnHover (boolean; default True):
    `showProgress=True`时，是否在鼠标移入时暂停进度条倒计时  默认值：`True`.

- closable (boolean; default True):
    是否显示关闭按钮  默认值：`True`.

- closeButton (dict; optional):
    配置右下方关闭按钮相关参数，默认不显示关闭按钮.

    `closeButton` is a dict with keys:

    - content (string; optional):
        按钮内容.

    - style (dict; optional):
        按钮css样式.

    - className (string; optional):
        按钮css类名.

    - type (a value equal to: 'default', 'primary', 'ghost', 'dashed', 'link', 'text'; optional):
        按钮类型，可选项有`'default'`、`'primary'`、`'ghost'`、`'dashed'`、`'link'`、`'text'`
        默认值：`'default'`.

    - danger (boolean; optional):
        按钮是否呈现危险状态  默认值：`False`.

- stack (boolean; default False):
    是否开启多通知自动折叠堆叠功能  默认值：`False`."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdNotification'
    CloseButton = TypedDict(
        "CloseButton",
            {
            "content": NotRequired[str],
            "style": NotRequired[dict],
            "className": NotRequired[str],
            "type": NotRequired[Literal["default", "primary", "ghost", "dashed", "link", "text"]],
            "danger": NotRequired[bool]
        }
    )

    @_explicitize_args
    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        message: typing.Optional[str] = None,
        description: typing.Optional[str] = None,
        type: typing.Optional[Literal["default", "success", "error", "info", "warning"]] = None,
        placement: typing.Optional[Literal["top", "bottom", "topLeft", "topRight", "bottomLeft", "bottomRight"]] = None,
        top: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        bottom: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        duration: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        showProgress: typing.Optional[bool] = None,
        pauseOnHover: typing.Optional[bool] = None,
        closable: typing.Optional[bool] = None,
        closeButton: typing.Optional["CloseButton"] = None,
        stack: typing.Optional[bool] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'style', 'className', 'message', 'description', 'type', 'placement', 'top', 'bottom', 'duration', 'showProgress', 'pauseOnHover', 'closable', 'closeButton', 'stack']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'style', 'className', 'message', 'description', 'type', 'placement', 'top', 'bottom', 'duration', 'showProgress', 'pauseOnHover', 'closable', 'closeButton', 'stack']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdNotification, self).__init__(**args)
