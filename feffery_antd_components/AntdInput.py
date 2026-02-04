# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401

from dash.development.base_component import Component, _explicitize_args
from typing_extensions import Literal, NotRequired, TypedDict  # noqa: F401

ComponentSingleType = typing.Union[str, int, float, Component, None]
ComponentType = typing.Union[
    ComponentSingleType,
    typing.Sequence[ComponentSingleType],
]

NumberType = typing.Union[typing.SupportsFloat, typing.SupportsInt, typing.SupportsComplex]


class AntdInput(Component):
    """An AntdInput component.
    输入框组件AntdInput

    Keyword arguments:

    - id (string; optional):
        组件唯一id.

    - key (string; optional):
        对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

    - className (string | dict; optional):
        当前组件css类名，支持[动态css](/advanced-classname).

    - styles (dict; optional):
        细分控制子元素css样式.

        `styles` is a dict with keys:

        - input (dict; optional):
            控制文本框元素css样式.

        - prefix (dict; optional):
            控制前缀容器css样式.

        - suffix (dict; optional):
            控制后缀容器css样式.

        - count (dict; optional):
            控制文字计数元素css样式.

        - textarea (dict; optional):
            控制文本域元素css样式.

    - classNames (dict; optional):
        细分控制子元素css类名.

        `classNames` is a dict with keys:

        - input (string; optional):
            控制文本框元素css类名.

        - prefix (string; optional):
            控制前缀容器css类名.

        - suffix (string; optional):
            控制后缀容器css类名.

        - count (string; optional):
            控制文字计数元素css类名.

        - textarea (string; optional):
            控制文本域元素css类名.

    - name (string; optional):
        配合`AntdForm`表单批量值搜集/控制功能使用，充当当前表单项的字段名，以`id`作为缺省值.

    - enableBatchControl (boolean; default True):
        控制当前组件是否参与有效的`AntdForm`表单批量值搜集/控制功能 默认值：`True`.

    - mode (a value equal to: 'default', 'search', 'text-area', 'password'; default 'default'):
        输入框模式，可选项有`'default'`、`'search'`、`'text-area'`、`'password'`
        默认值：`'default'`.

    - autoComplete (a value equal to: 'off', 'on'; default 'on'):
        是否开启浏览器自带的自动补全功能，可选项有`'off'`、`'on'` 默认值：`'on'`.

    - disabled (boolean; default False):
        是否禁用当前组件 默认值：`False`.

    - size (a value equal to: 'small', 'middle', 'large'; default 'middle'):
        当前组件尺寸规格，可选项有`'small'`、`'middle'`、`'large'` 默认值：`'middle'`.

    - bordered (boolean; default True):
        是否显示边框，设置为`True`时等价于`variant='outlined'` 默认值：`True`.

    - variant (a value equal to: 'outlined', 'borderless', 'filled', 'underlined'; optional):
        形态变体类型，可选项有`'outlined'`、`'borderless'`、`'filled'`、`'underlined'`，其中`'outlined'`等价于`bordered=True`，但优先级更高.

    - placeholder (string; optional):
        输入框占位文字内容.

    - value (string; optional):
        监听或设置已输入值.

    - defaultValue (string; optional):
        初始化已输入值.

    - passwordUseMd5 (boolean; default False):
        针对`'password'`模式，是否启用md5加密功能 默认值：`False`.

    - md5Value (string; optional):
        当`passwordUseMd5=True`时，监听已输入值md5编码结果.

    - debounceValue (string; optional):
        监听防抖版本的已输入值.

    - debounceWait (number; default 0):
        防抖延时时长，单位：毫秒 默认值：`0`.

    - addonBefore (a list of or a singular dash component, string or number; optional):
        组件型，前置标签内容.

    - addonAfter (a list of or a singular dash component, string or number; optional):
        组件型，后置标签内容.

    - prefix (a list of or a singular dash component, string or number; optional):
        组件型，前缀内嵌内容.

    - suffix (a list of or a singular dash component, string or number; optional):
        组件型，后缀内嵌内容.

    - maxLength (number; optional):
        限制输入框最大可输入字符数量.

    - showCount (boolean; default False):
        是否显示已输入字符计数 默认值：`False`.

    - countFormat (string; optional):
        正则表达式，用于配合字符计数相关功能，自定义计数规则.

    - autoSize (dict; default False):
        针对`'text-area'`模式，配置输入框高度自适应相关功能 默认值：`False`.

        `autoSize` is a boolean | dict with keys:

        - minRows (number; optional):
            输入框最小行数.

        - maxRows (number; optional):
            输入框最大行数.

    - nSubmit (number; default 0):
        监听输入框聚焦状态下，键盘enter键累计点按次数 默认值：`0`.

    - nClicksSearch (number; default 0):
        针对`'search'`模式，监听搜索按钮累计点击次数 默认值：`0`.

    - status (a value equal to: 'error', 'warning'; optional):
        控制校验状态，可选项有`'error'`、`'warning'`.

    - allowClear (boolean; default False):
        是否允许一键清空已输入值 默认值：`False`.

    - autoFocus (boolean; default False):
        是否自动获取焦点 默认值：`False`.

    - focusing (boolean; optional):
        监听输入框是否聚焦.

    - readOnly (boolean; optional):
        是否渲染为只读状态 默认值：`False`.

    - emptyAsNone (boolean; default False):
        当输入框已输入值为空时，是否强制更新`value`为空值，从而统一空字符串与空值混合的情况 默认值：`False`.

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

    - persisted_props (list of a value equal to: 'value', 'md5Value's; optional):
        开启属性持久化功能的若干属性名，可选项有`'value'`、`'md5Value'` 默认值：`['value',
        'md5Value']`.

    - persistence_type (a value equal to: 'local', 'session', 'memory'; optional):
        属性持久化存储类型，可选项有`'local'`（本地持久化），`'session'`（会话持久化），`'memory'`（内存持久化）
        默认值：`'local'`."""

    _children_props: typing.List[str] = ['addonBefore', 'addonAfter', 'prefix', 'suffix']
    _base_nodes = ['addonBefore', 'addonAfter', 'prefix', 'suffix', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdInput'
    Styles = TypedDict(
        'Styles',
        {
            'input': NotRequired[dict],
            'prefix': NotRequired[dict],
            'suffix': NotRequired[dict],
            'count': NotRequired[dict],
            'textarea': NotRequired[dict],
        },
    )

    ClassNames = TypedDict(
        'ClassNames',
        {
            'input': NotRequired[str],
            'prefix': NotRequired[str],
            'suffix': NotRequired[str],
            'count': NotRequired[str],
            'textarea': NotRequired[str],
        },
    )

    AutoSize = TypedDict(
        'AutoSize', {'minRows': NotRequired[NumberType], 'maxRows': NotRequired[NumberType]}
    )

    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        styles: typing.Optional['Styles'] = None,
        classNames: typing.Optional['ClassNames'] = None,
        name: typing.Optional[str] = None,
        enableBatchControl: typing.Optional[bool] = None,
        mode: typing.Optional[Literal['default', 'search', 'text-area', 'password']] = None,
        autoComplete: typing.Optional[Literal['off', 'on']] = None,
        disabled: typing.Optional[bool] = None,
        size: typing.Optional[Literal['small', 'middle', 'large']] = None,
        bordered: typing.Optional[bool] = None,
        variant: typing.Optional[Literal['outlined', 'borderless', 'filled', 'underlined']] = None,
        placeholder: typing.Optional[str] = None,
        value: typing.Optional[str] = None,
        defaultValue: typing.Optional[str] = None,
        passwordUseMd5: typing.Optional[bool] = None,
        md5Value: typing.Optional[str] = None,
        debounceValue: typing.Optional[str] = None,
        debounceWait: typing.Optional[NumberType] = None,
        addonBefore: typing.Optional[ComponentType] = None,
        addonAfter: typing.Optional[ComponentType] = None,
        prefix: typing.Optional[ComponentType] = None,
        suffix: typing.Optional[ComponentType] = None,
        maxLength: typing.Optional[NumberType] = None,
        showCount: typing.Optional[bool] = None,
        countFormat: typing.Optional[str] = None,
        autoSize: typing.Optional[typing.Union[bool, 'AutoSize']] = None,
        nSubmit: typing.Optional[NumberType] = None,
        nClicksSearch: typing.Optional[NumberType] = None,
        status: typing.Optional[Literal['error', 'warning']] = None,
        allowClear: typing.Optional[bool] = None,
        autoFocus: typing.Optional[bool] = None,
        focusing: typing.Optional[bool] = None,
        readOnly: typing.Optional[bool] = None,
        emptyAsNone: typing.Optional[bool] = None,
        batchPropsNames: typing.Optional[typing.Sequence[str]] = None,
        batchPropsValues: typing.Optional[dict] = None,
        persistence: typing.Optional[typing.Union[bool, str, NumberType]] = None,
        persisted_props: typing.Optional[typing.Sequence[Literal['value', 'md5Value']]] = None,
        persistence_type: typing.Optional[Literal['local', 'session', 'memory']] = None,
        **kwargs,
    ):
        self._prop_names = [
            'id',
            'key',
            'style',
            'className',
            'styles',
            'classNames',
            'name',
            'enableBatchControl',
            'mode',
            'autoComplete',
            'disabled',
            'size',
            'bordered',
            'variant',
            'placeholder',
            'value',
            'defaultValue',
            'passwordUseMd5',
            'md5Value',
            'debounceValue',
            'debounceWait',
            'addonBefore',
            'addonAfter',
            'prefix',
            'suffix',
            'maxLength',
            'showCount',
            'countFormat',
            'autoSize',
            'nSubmit',
            'nClicksSearch',
            'status',
            'allowClear',
            'autoFocus',
            'focusing',
            'readOnly',
            'emptyAsNone',
            'batchPropsNames',
            'batchPropsValues',
            'data-*',
            'aria-*',
            'persistence',
            'persisted_props',
            'persistence_type',
        ]
        self._valid_wildcard_attributes = ['data-', 'aria-']
        self.available_properties = [
            'id',
            'key',
            'style',
            'className',
            'styles',
            'classNames',
            'name',
            'enableBatchControl',
            'mode',
            'autoComplete',
            'disabled',
            'size',
            'bordered',
            'variant',
            'placeholder',
            'value',
            'defaultValue',
            'passwordUseMd5',
            'md5Value',
            'debounceValue',
            'debounceWait',
            'addonBefore',
            'addonAfter',
            'prefix',
            'suffix',
            'maxLength',
            'showCount',
            'countFormat',
            'autoSize',
            'nSubmit',
            'nClicksSearch',
            'status',
            'allowClear',
            'autoFocus',
            'focusing',
            'readOnly',
            'emptyAsNone',
            'batchPropsNames',
            'batchPropsValues',
            'data-*',
            'aria-*',
            'persistence',
            'persisted_props',
            'persistence_type',
        ]
        self.available_wildcard_properties = ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdInput, self).__init__(**args)


setattr(AntdInput, '__init__', _explicitize_args(AntdInput.__init__))
