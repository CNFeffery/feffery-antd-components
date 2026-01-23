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


class AntdOTP(Component):
    """An AntdOTP component.
一次性密码框组件AntdOTP

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- name (string; optional):
    配合`AntdForm`表单批量值搜集/控制功能使用，充当当前表单项的字段名，以`id`作为缺省值.

- enableBatchControl (boolean; default True):
    控制当前组件是否参与有效的`AntdForm`表单批量值搜集/控制功能 默认值：`True`.

- value (string; optional):
    监听或设置已选值.

- defaultValue (string; optional):
    初始化已选值.

- disabled (boolean; default False):
    是否禁用当前组件 默认值：`False`.

- length (number; default 6):
    单体输入框数量 默认值：`6`.

- mask (boolean | string; default False):
    自定义遮罩字符 默认值：`False`.

- status (a value equal to: 'error', 'warning'; optional):
    控制校验状态，可选项有`'error'`、`'warning'`.

- size (a value equal to: 'small', 'middle', 'large'; default 'middle'):
    当前组件尺寸规格，可选项有`'small'`、`'middle'`、`'large'` 默认值：`'middle'`.

- variant (a value equal to: 'outlined', 'borderless', 'filled', 'underlined'; default 'outlined'):
    形态变体类型，可选项有`'outlined'`、`'borderless'`、`'filled'`、`'underlined'`，其中`'outlined'`等价于`bordered=True`，但优先级更高.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- persistence (boolean | string | number; optional):
    是否开启[属性持久化](/prop-persistence).

- persisted_props (list of a value equal to: 'value's; optional):
    开启属性持久化功能的若干属性名，可选项有`'value'` 默认值：`['value']`.

- persistence_type (a value equal to: 'local', 'session', 'memory'; optional):
    属性持久化存储类型，可选项有`'local'`（本地持久化），`'session'`（会话持久化），`'memory'`（内存持久化）
    默认值：`'local'`."""
    _children_props: typing.List[str] = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdOTP'


    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        name: typing.Optional[str] = None,
        enableBatchControl: typing.Optional[bool] = None,
        value: typing.Optional[str] = None,
        defaultValue: typing.Optional[str] = None,
        disabled: typing.Optional[bool] = None,
        length: typing.Optional[NumberType] = None,
        mask: typing.Optional[typing.Union[bool, str]] = None,
        status: typing.Optional[Literal["error", "warning"]] = None,
        size: typing.Optional[Literal["small", "middle", "large"]] = None,
        variant: typing.Optional[Literal["outlined", "borderless", "filled", "underlined"]] = None,
        persistence: typing.Optional[typing.Union[bool, str, NumberType]] = None,
        persisted_props: typing.Optional[typing.Sequence[Literal["value"]]] = None,
        persistence_type: typing.Optional[Literal["local", "session", "memory"]] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'style', 'className', 'name', 'enableBatchControl', 'value', 'defaultValue', 'disabled', 'length', 'mask', 'status', 'size', 'variant', 'data-*', 'aria-*', 'persistence', 'persisted_props', 'persistence_type']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'style', 'className', 'name', 'enableBatchControl', 'value', 'defaultValue', 'disabled', 'length', 'mask', 'status', 'size', 'variant', 'data-*', 'aria-*', 'persistence', 'persisted_props', 'persistence_type']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdOTP, self).__init__(**args)

setattr(AntdOTP, "__init__", _explicitize_args(AntdOTP.__init__))
