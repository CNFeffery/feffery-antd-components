# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
import numbers # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args
try:
    from dash.development.base_component import ComponentType # noqa: F401
except ImportError:
    ComponentType = typing.TypeVar("ComponentType", bound=Component)


class AntdMessage(Component):
    """An AntdMessage component.
全局提示组件AntdMessage

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- style (dict; optional):
    当前组件css样式.

- className (string; optional):
    当前组件css类名.

- content (string; optional):
    提示信息内容.

- type (a value equal to: 'default', 'success', 'error', 'info', 'warning'; default 'default'):
    提示信息类型，可选项有`'default'`、`'success'`、`'error'`、`'info'`、`'warning'`
    默认值：'default'.

- duration (number; default 3):
    提示信息自动消失对应的延时，单位：秒，设置为`0`时不会自动消失  默认值：`3`.

- top (number; default 8):
    提示信息距离顶端的像素距离  默认值：`8`.

- maxCount (number; optional):
    最多允许同时出现的提示信息数量.

- icon (string; optional):
    自定义前缀图标，同`AntdIcon`的`icon`参数.

- iconRenderer (a value equal to: 'AntdIcon', 'fontawesome'; default 'AntdIcon'):
    自定义前缀图标渲染方式，可选项有`'AntdIcon'`、`'fontawesome'`.

- underCompatibilityMode (boolean; optional):
    当前消息提示组件是否位于设置了`compatibilityMode=True`的`AntdConfigProvider`内部.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

    - component_name (string; optional):
        Holds the name of the component that is loading."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdMessage'
    LoadingState = TypedDict(
        "LoadingState",
            {
            "is_loading": NotRequired[bool],
            "prop_name": NotRequired[str],
            "component_name": NotRequired[str]
        }
    )

    @_explicitize_args
    def __init__(
        self,
        id: typing.Optional[str] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[dict] = None,
        className: typing.Optional[str] = None,
        content: typing.Optional[str] = None,
        type: typing.Optional[Literal["default", "success", "error", "info", "warning"]] = None,
        duration: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        top: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        maxCount: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        icon: typing.Optional[str] = None,
        iconRenderer: typing.Optional[Literal["AntdIcon", "fontawesome"]] = None,
        underCompatibilityMode: typing.Optional[bool] = None,
        loading_state: typing.Optional["LoadingState"] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'style', 'className', 'content', 'type', 'duration', 'top', 'maxCount', 'icon', 'iconRenderer', 'underCompatibilityMode', 'loading_state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'style', 'className', 'content', 'type', 'duration', 'top', 'maxCount', 'icon', 'iconRenderer', 'underCompatibilityMode', 'loading_state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdMessage, self).__init__(**args)
