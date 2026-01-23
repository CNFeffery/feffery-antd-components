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


class AntdForm(Component):
    """An AntdForm component.
表单组件AntdForm

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- children (a list of or a singular dash component, string or number; optional):
    组件型，内嵌相关`AntdFormItem`组件或常用表单输入类组件.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- layout (a value equal to: 'horizontal', 'vertical', 'inline'; default 'horizontal'):
    表单布局模式，可选项有`'horizontal'`、`'vertical'`、`'inline'`
    默认值：`'horizontal'`.

- labelCol (dict; optional):
    配置表单项标签部分相关参数.

    `labelCol` is a dict with keys:

    - span (number; optional):
        标签部分所占宽度份数（总份数24）.

    - offset (number; optional):
        标签部分向右偏移宽度份数.

    - flex (string | number; optional):
        同css中的flex属性，用于更灵活的控制标签部分所占宽度.

- wrapperCol (dict; optional):
    配置表单项控件部分相关参数.

    `wrapperCol` is a dict with keys:

    - span (number; optional):
        控件部分所占宽度份数（总份数24）.

    - offset (number; optional):
        控件部分向右偏移宽度份数.

    - flex (string | number; optional):
        同css中的flex属性，用于更灵活的控制控件部分所占宽度.

- colon (boolean; default True):
    当`layput='horizontal'`时，控制是否在表单项标签部分末尾添加冒号.

- labelAlign (a value equal to: 'left', 'right'; default 'right'):
    表单项标签部分文本对齐方式，可选项有`'left'`、`'right'` 默认值：`'right'`.

- labelWrap (boolean; default False):
    针对超长表单项标签是否允许换行 默认值：`False`.

- enableBatchControl (boolean; default False):
    是否启用表单批量控制功能，开启后会导致部分性能的损耗 默认值：`False`.

- values (dict; optional):
    当`enableBatchControl=True`时，可用于监听或设置搜集内部表单输入类组件的输入值变化情况，开启后内部表单输入类组件自身的`defaultValue`、`value`参数将会失效.

- validateStatuses (dict with strings as keys and values of type a value equal to: 'success', 'warning', 'error', 'validating'; optional):
    当`enableBatchControl=True`时，可用于统一设置内部各`AntdFormItem`组件的`validateStatus`值，键为对应`AntdFormItem`组件的`label`值，优先级低于各`AntdFormItem`组件的`validateStatus`值.

- helps (dict with strings as keys and values of type a list of or a singular dash component, string or number; optional):
    当`enableBatchControl=True`时，可用于统一设置内部各`AntdFormItem`组件的`help`值，键为对应`AntdFormItem`组件的`label`值，优先级低于各`AntdFormItem`组件的`help`值.

- tooltips (dict with strings as keys and values of type a list of or a singular dash component, string or number; optional):
    当`enableBatchControl=True`时，可用于统一设置内部各`AntdFormItem`组件的`tooltip`值，键为对应`AntdFormItem`组件的`label`值，优先级低于各`AntdFormItem`组件的`tooltip`值.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配."""
    _children_props: typing.List[str] = ['helps{}', 'tooltips{}']
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdForm'
    LabelCol = TypedDict(
        "LabelCol",
            {
            "span": NotRequired[NumberType],
            "offset": NotRequired[NumberType],
            "flex": NotRequired[typing.Union[str, NumberType]]
        }
    )

    WrapperCol = TypedDict(
        "WrapperCol",
            {
            "span": NotRequired[NumberType],
            "offset": NotRequired[NumberType],
            "flex": NotRequired[typing.Union[str, NumberType]]
        }
    )


    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        layout: typing.Optional[Literal["horizontal", "vertical", "inline"]] = None,
        labelCol: typing.Optional["LabelCol"] = None,
        wrapperCol: typing.Optional["WrapperCol"] = None,
        colon: typing.Optional[bool] = None,
        labelAlign: typing.Optional[Literal["left", "right"]] = None,
        labelWrap: typing.Optional[bool] = None,
        enableBatchControl: typing.Optional[bool] = None,
        values: typing.Optional[dict] = None,
        validateStatuses: typing.Optional[typing.Dict[typing.Union[str, float, int], Literal["success", "warning", "error", "validating"]]] = None,
        helps: typing.Optional[typing.Dict[typing.Union[str, float, int], ComponentType]] = None,
        tooltips: typing.Optional[typing.Dict[typing.Union[str, float, int], ComponentType]] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'children', 'style', 'className', 'layout', 'labelCol', 'wrapperCol', 'colon', 'labelAlign', 'labelWrap', 'enableBatchControl', 'values', 'validateStatuses', 'helps', 'tooltips', 'data-*', 'aria-*']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'children', 'style', 'className', 'layout', 'labelCol', 'wrapperCol', 'colon', 'labelAlign', 'labelWrap', 'enableBatchControl', 'values', 'validateStatuses', 'helps', 'tooltips', 'data-*', 'aria-*']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdForm, self).__init__(children=children, **args)

setattr(AntdForm, "__init__", _explicitize_args(AntdForm.__init__))
