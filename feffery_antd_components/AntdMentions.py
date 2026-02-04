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


class AntdMentions(Component):
    """An AntdMentions component.
    提及组件AntdMentions

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
        控制当前组件是否参与有效的`AntdForm`表单批量值搜集/控制功能 默认值：`True`.

    - autoSize (dict; default False):
        配置输入框高度自适应相关功能 默认值：`False`.

        `autoSize` is a boolean | dict with keys:

        - minRows (number; optional):
            输入框最小行数.

        - maxRows (number; optional):
            输入框最大行数.

    - prefix (string; default '@'):
        触发选择菜单展开的关键字 默认值：`'@'`.

    - value (string; optional):
        监听或设置已输入值.

    - defaultValue (string; optional):
        初始化已输入值.

    - options (list of dicts; required):
        必填，配置选择菜单子项.

        `options` is a list of dicts with keys:

        - label (a list of or a singular dash component, string or number; optional):
            组件型，当前选项标签内容.

        - value (string; optional):
            当前选项值.

    - selectedOptions (list of strings; optional):
        监听输入内容中对应的已选子项值.

    - disabled (boolean; default False):
        是否禁用当前组件 默认值：`False`.

    - placement (a value equal to: 'top', 'bottom'; default 'bottom'):
        选择菜单弹出方向，可选项有`'top'`、`'bottom'` 默认值：`'bottom'`.

    - bordered (boolean; default True):
        是否显示边框，设置为`True`时等价于`variant='outlined'` 默认值：`True`.

    - variant (a value equal to: 'outlined', 'borderless', 'filled', 'underlined'; optional):
        形态变体类型，可选项有`'outlined'`、`'borderless'`、`'filled'`、`'underlined'`，其中`'outlined'`等价于`bordered=True`，但优先级更高.

    - placeholder (string; optional):
        输入框占位文字内容.

    - status (a value equal to: 'error', 'warning'; optional):
        控制校验状态，可选项有`'error'`、`'warning'`.

    - autoFocus (boolean; default False):
        是否自动获取焦点 默认值：`False`.

    - popupContainer (a value equal to: 'parent', 'body'; optional):
        相关展开层锚定策略，可选项有`'parent'`、`'body'` 默认值：`'body'`.

    - batchPropsNames (list of strings; optional):
        需要纳入[批量属性监听](/batch-props-values)的若干属性名.

    - batchPropsValues (dict; optional):
        监听`batchPropsNames`中指定的若干属性值.

    - data-* (string; optional):
        `data-*`格式属性通配.

    - aria-* (string; optional):
        `aria-*`格式属性通配."""

    _children_props: typing.List[str] = ['options[].label']
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdMentions'
    AutoSize = TypedDict(
        'AutoSize', {'minRows': NotRequired[NumberType], 'maxRows': NotRequired[NumberType]}
    )

    Options = TypedDict('Options', {'label': NotRequired[ComponentType], 'value': NotRequired[str]})

    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        popupClassName: typing.Optional[str] = None,
        name: typing.Optional[str] = None,
        enableBatchControl: typing.Optional[bool] = None,
        autoSize: typing.Optional[typing.Union[bool, 'AutoSize']] = None,
        prefix: typing.Optional[str] = None,
        value: typing.Optional[str] = None,
        defaultValue: typing.Optional[str] = None,
        options: typing.Optional[typing.Sequence['Options']] = None,
        selectedOptions: typing.Optional[typing.Sequence[str]] = None,
        disabled: typing.Optional[bool] = None,
        placement: typing.Optional[Literal['top', 'bottom']] = None,
        bordered: typing.Optional[bool] = None,
        variant: typing.Optional[Literal['outlined', 'borderless', 'filled', 'underlined']] = None,
        placeholder: typing.Optional[str] = None,
        status: typing.Optional[Literal['error', 'warning']] = None,
        autoFocus: typing.Optional[bool] = None,
        popupContainer: typing.Optional[Literal['parent', 'body']] = None,
        batchPropsNames: typing.Optional[typing.Sequence[str]] = None,
        batchPropsValues: typing.Optional[dict] = None,
        **kwargs,
    ):
        self._prop_names = [
            'id',
            'key',
            'style',
            'className',
            'popupClassName',
            'name',
            'enableBatchControl',
            'autoSize',
            'prefix',
            'value',
            'defaultValue',
            'options',
            'selectedOptions',
            'disabled',
            'placement',
            'bordered',
            'variant',
            'placeholder',
            'status',
            'autoFocus',
            'popupContainer',
            'batchPropsNames',
            'batchPropsValues',
            'data-*',
            'aria-*',
        ]
        self._valid_wildcard_attributes = ['data-', 'aria-']
        self.available_properties = [
            'id',
            'key',
            'style',
            'className',
            'popupClassName',
            'name',
            'enableBatchControl',
            'autoSize',
            'prefix',
            'value',
            'defaultValue',
            'options',
            'selectedOptions',
            'disabled',
            'placement',
            'bordered',
            'variant',
            'placeholder',
            'status',
            'autoFocus',
            'popupContainer',
            'batchPropsNames',
            'batchPropsValues',
            'data-*',
            'aria-*',
        ]
        self.available_wildcard_properties = ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        for k in ['options']:
            if k not in args:
                raise TypeError('Required argument `' + k + '` was not specified.')

        super(AntdMentions, self).__init__(**args)


setattr(AntdMentions, '__init__', _explicitize_args(AntdMentions.__init__))
