# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
import numbers # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args
try:
    from dash.development.base_component import ComponentType # noqa: F401
except ImportError:
    ComponentType = typing.TypeVar("ComponentType", bound=Component)


class AntdRadioGroup(Component):
    """An AntdRadioGroup component.
单选框组件AntdRadioGroup

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- style (dict; optional):
    当前组件css样式.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- name (string; optional):
    配合`AntdForm`表单批量值搜集/控制功能使用，充当当前表单项的字段名，以`id`作为缺省值.

- direction (a value equal to: 'horizontal', 'vertical'; default 'horizontal'):
    单选框排列方向，可选项有`'horizontal'`、`'vertical'`  默认值：`'horizontal'`.

- options (list of dicts; optional):
    配置选项.

    `options` is a list of string | number | dict with keys:

    - label (a list of or a singular dash component, string or number; optional):
        组件型，当前选项标签内容.

    - value (string | number; optional):
        当前选项值.

    - disabled (boolean; optional):
        是否禁用当前选项  默认值：`False`.s

- block (boolean; default False):
    是否撑满父容器  默认值：`False`.

- disabled (boolean; default False):
    是否禁用当前组件  默认值：`False`.

- size (a value equal to: 'small', 'middle', 'large'; default 'middle'):
    当`optionType='button'`时，控制各选项按钮尺寸规格，可选项有`'small'`、`'middle'`、`'large'`
    默认值：`'middle'`.

- value (string | number; optional):
    监听或设置已选值，与`format`格式对应.

- defaultValue (string | number; optional):
    初始化已选值，与`format`格式对应.

- optionType (a value equal to: 'default', 'button'; default 'default'):
    选项形式，可选项有`'default'`、`'button'`  默认值：`'default'`.

- buttonStyle (a value equal to: 'outline', 'solid'; default 'outline'):
    当`optionType='button'`时，设置按钮风格，可选项有`'outline'`、`'solid'`
    默认值：`'outline'`.

- readOnly (boolean; default False):
    是否渲染为只读状态  默认值：`False`.

- batchPropsNames (list of strings; optional):
    需要纳入[批量属性监听](/batch-props-values)的若干属性名.

- batchPropsValues (dict; optional):
    监听`batchPropsNames`中指定的若干属性值.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- persistence (boolean | string | number; optional):
    是否开启[属性持久化](/prop-persistence).

- persisted_props (list of a value equal to: 'value's; optional):
    开启属性持久化功能的若干属性名，可选项有`'value'`  默认值：`['value']`.

- persistence_type (a value equal to: 'local', 'session', 'memory'; optional):
    属性持久化存储类型，可选项有`'local'`（本地持久化），`'session'`（会话持久化），`'memory'`（内存持久化）
    默认值：`'local'`."""
    _children_props = ['options[].label']
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdRadioGroup'
    Options = TypedDict(
        "Options",
            {
            "label": NotRequired[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]],
            "value": NotRequired[typing.Union[str, typing.Union[int, float, numbers.Number]]],
            "disabled": NotRequired[bool]
        }
    )

    @_explicitize_args
    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[dict] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        name: typing.Optional[str] = None,
        direction: typing.Optional[Literal["horizontal", "vertical"]] = None,
        options: typing.Optional[typing.Sequence[typing.Union[str, typing.Union[int, float, numbers.Number], "Options"]]] = None,
        block: typing.Optional[bool] = None,
        disabled: typing.Optional[bool] = None,
        size: typing.Optional[Literal["small", "middle", "large"]] = None,
        value: typing.Optional[typing.Union[str, typing.Union[int, float, numbers.Number]]] = None,
        defaultValue: typing.Optional[typing.Union[str, typing.Union[int, float, numbers.Number]]] = None,
        optionType: typing.Optional[Literal["default", "button"]] = None,
        buttonStyle: typing.Optional[Literal["outline", "solid"]] = None,
        readOnly: typing.Optional[bool] = None,
        batchPropsNames: typing.Optional[typing.Sequence[str]] = None,
        batchPropsValues: typing.Optional[dict] = None,
        persistence: typing.Optional[typing.Union[bool, str, typing.Union[int, float, numbers.Number]]] = None,
        persisted_props: typing.Optional[typing.Sequence[Literal["value"]]] = None,
        persistence_type: typing.Optional[Literal["local", "session", "memory"]] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'style', 'className', 'name', 'direction', 'options', 'block', 'disabled', 'size', 'value', 'defaultValue', 'optionType', 'buttonStyle', 'readOnly', 'batchPropsNames', 'batchPropsValues', 'data-*', 'aria-*', 'persistence', 'persisted_props', 'persistence_type']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'style', 'className', 'name', 'direction', 'options', 'block', 'disabled', 'size', 'value', 'defaultValue', 'optionType', 'buttonStyle', 'readOnly', 'batchPropsNames', 'batchPropsValues', 'data-*', 'aria-*', 'persistence', 'persisted_props', 'persistence_type']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdRadioGroup, self).__init__(**args)
