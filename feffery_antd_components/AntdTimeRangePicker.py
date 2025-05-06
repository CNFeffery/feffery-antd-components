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


class AntdTimeRangePicker(Component):
    """An AntdTimeRangePicker component.
时间范围选择组件AntdTimeRangePicker

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- popupClassName (string; optional):
    展开菜单css类名.

- name (string; optional):
    配合`AntdForm`表单批量值搜集/控制功能使用，充当当前表单项的字段名，以`id`作为缺省值.

- enableBatchControl (boolean; default True):
    控制当前组件是否参与有效的`AntdForm`表单批量值搜集/控制功能  默认值：`True`.

- locale (a value equal to: 'zh-cn', 'en-us', 'de-de'; default 'zh-cn'):
    组件文案语种，可选项有`'zh-cn'`（简体中文）、`'en-us'`（英语）、`'de-de'`（德语）
    默认值：`'zh-cn'`.

- format (string; default 'HH:mm:ss'):
    时间显示格式，[参考资料](https://day.js.org/docs/en/display/format)
    默认值：`'HH:mm:ss'`.

- hourStep (number; default 1):
    小时选项间隔  默认值：`1`.

- minuteStep (number; default 1):
    分钟选项间隔  默认值：`1`.

- secondStep (number; default 1):
    秒选项间隔  默认值：`1`.

- use12Hours (boolean; default False):
    是否使用12小时制，当设置为`True`时，`format`参数默认值变更为`'h:mm:ss a'`  默认值：`False`.

- allowClear (boolean; default True):
    是否允许一键清空已选值  默认值：`True`.

- autoFocus (boolean; default False):
    是否自动获取焦点  默认值：`False`.

- placeholder (list of strings; optional):
    输入框占位文字内容.

- placement (a value equal to: 'bottomLeft', 'bottomRight', 'topLeft', 'topRight'; default 'bottomLeft'):
    选择面板展开方向，可选项有`'bottomLeft'`、`'bottomRight'`、`'topLeft'`、`'topRight'`
    默认值：`'bottomLeft'`.

- disabled (list of booleans; default [False, False]):
    是否禁用当前组件  默认值：`False`.

- value (list of strings; optional):
    监听或设置已选值，与`format`格式对应.

- defaultValue (list of strings; optional):
    初始化已选值，与`format`格式对应.

- bordered (boolean; default True):
    是否显示边框，设置为`True`时等价于`variant='outlined'`  默认值：`True`.

- variant (a value equal to: 'outlined', 'borderless', 'filled', 'underlined'; optional):
    形态变体类型，可选项有`'outlined'`、`'borderless'`、`'filled'`、`'underlined'`，其中`'outlined'`等价于`bordered=True`，但优先级更高.

- size (a value equal to: 'small', 'middle', 'large'; default 'middle'):
    当前组件尺寸规格，可选项有`'small'`、`'middle'`、`'large'`  默认值：`'middle'`.

- open (boolean; optional):
    监听或设置当前选择面板是否展开.

- status (a value equal to: 'error', 'warning'; optional):
    控制校验状态，可选项有`'error'`、`'warning'`.

- readOnly (boolean; optional):
    是否渲染为只读状态  默认值：`False`.

- extraFooter (a list of or a singular dash component, string or number; optional):
    组件型，底部额外区域内容.

- prefix (a list of or a singular dash component, string or number; optional):
    组件型，前缀内嵌内容.

- suffixIcon (a list of or a singular dash component, string or number; optional):
    自定义选择框后缀图标内容.

- popupContainer (a value equal to: 'parent', 'body'; default 'body'):
    相关展开层锚定策略，可选项有`'parent'`、`'body'`  默认值：`'body'`.

- batchPropsNames (list of strings; optional):
    需要纳入[批量属性监听](/batch-props-values)的若干属性名.

- batchPropsValues (dict; optional):
    监听`batchPropsNames`中指定的若干属性值.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- needConfirm (boolean; default False):
    是否需要确认按钮，为`False`时失去焦点即代表选择  默认值：`False`.

- persistence (boolean | string | number; optional):
    是否开启[属性持久化](/prop-persistence).

- persisted_props (list of a value equal to: 'value's; optional):
    开启属性持久化功能的若干属性名，可选项有`'value'`  默认值：`['value']`.

- persistence_type (a value equal to: 'local', 'session', 'memory'; optional):
    属性持久化存储类型，可选项有`'local'`（本地持久化），`'session'`（会话持久化），`'memory'`（内存持久化）
    默认值：`'local'`."""
    _children_props = ['extraFooter', 'prefix', 'suffixIcon']
    _base_nodes = ['extraFooter', 'prefix', 'suffixIcon', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdTimeRangePicker'


    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        popupClassName: typing.Optional[str] = None,
        name: typing.Optional[str] = None,
        enableBatchControl: typing.Optional[bool] = None,
        locale: typing.Optional[Literal["zh-cn", "en-us", "de-de"]] = None,
        format: typing.Optional[str] = None,
        hourStep: typing.Optional[NumberType] = None,
        minuteStep: typing.Optional[NumberType] = None,
        secondStep: typing.Optional[NumberType] = None,
        use12Hours: typing.Optional[bool] = None,
        allowClear: typing.Optional[bool] = None,
        autoFocus: typing.Optional[bool] = None,
        placeholder: typing.Optional[typing.Sequence[str]] = None,
        placement: typing.Optional[Literal["bottomLeft", "bottomRight", "topLeft", "topRight"]] = None,
        disabled: typing.Optional[typing.Sequence[bool]] = None,
        value: typing.Optional[typing.Sequence[str]] = None,
        defaultValue: typing.Optional[typing.Sequence[str]] = None,
        bordered: typing.Optional[bool] = None,
        variant: typing.Optional[Literal["outlined", "borderless", "filled", "underlined"]] = None,
        size: typing.Optional[Literal["small", "middle", "large"]] = None,
        open: typing.Optional[bool] = None,
        status: typing.Optional[Literal["error", "warning"]] = None,
        readOnly: typing.Optional[bool] = None,
        extraFooter: typing.Optional[ComponentType] = None,
        prefix: typing.Optional[ComponentType] = None,
        suffixIcon: typing.Optional[ComponentType] = None,
        popupContainer: typing.Optional[Literal["parent", "body"]] = None,
        batchPropsNames: typing.Optional[typing.Sequence[str]] = None,
        batchPropsValues: typing.Optional[dict] = None,
        needConfirm: typing.Optional[bool] = None,
        persistence: typing.Optional[typing.Union[bool, str, NumberType]] = None,
        persisted_props: typing.Optional[typing.Sequence[Literal["value"]]] = None,
        persistence_type: typing.Optional[Literal["local", "session", "memory"]] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'style', 'className', 'popupClassName', 'name', 'enableBatchControl', 'locale', 'format', 'hourStep', 'minuteStep', 'secondStep', 'use12Hours', 'allowClear', 'autoFocus', 'placeholder', 'placement', 'disabled', 'value', 'defaultValue', 'bordered', 'variant', 'size', 'open', 'status', 'readOnly', 'extraFooter', 'prefix', 'suffixIcon', 'popupContainer', 'batchPropsNames', 'batchPropsValues', 'data-*', 'aria-*', 'needConfirm', 'persistence', 'persisted_props', 'persistence_type']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'style', 'className', 'popupClassName', 'name', 'enableBatchControl', 'locale', 'format', 'hourStep', 'minuteStep', 'secondStep', 'use12Hours', 'allowClear', 'autoFocus', 'placeholder', 'placement', 'disabled', 'value', 'defaultValue', 'bordered', 'variant', 'size', 'open', 'status', 'readOnly', 'extraFooter', 'prefix', 'suffixIcon', 'popupContainer', 'batchPropsNames', 'batchPropsValues', 'data-*', 'aria-*', 'needConfirm', 'persistence', 'persisted_props', 'persistence_type']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdTimeRangePicker, self).__init__(**args)

setattr(AntdTimeRangePicker, "__init__", _explicitize_args(AntdTimeRangePicker.__init__))
