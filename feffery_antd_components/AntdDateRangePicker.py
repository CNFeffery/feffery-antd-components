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


class AntdDateRangePicker(Component):
    """An AntdDateRangePicker component.
日期范围选择组件AntdDateRangePicker

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

- locale (a value equal to: 'zh-cn', 'en-us', 'de-de', 'ru-ru'; default 'zh-cn'):
    组件文案语种，可选项有`'zh-cn'`（简体中文）、`'en-us'`（英语）、`'de-de'`（德语）、`'ru-ru'`（俄语）
    默认值：`'zh-cn'`.

- format (string; optional):
    日期时间显示格式，[参考资料](https://day.js.org/docs/en/display/format)
    默认值：`'YYYY-MM-DD'`.

- picker (a value equal to: 'date', 'week', 'month', 'quarter', 'year'; default 'date'):
    日期选择粒度，可选项有`'date'`、`'week'`、`'month'`、`'quarter'`、`'year'`
    默认值：`'date'`.

- firstDayOfWeek (number; optional):
    自定义每周起始日下标.

- disabled (list of booleans; default [False, False]):
    是否禁用当前组件  默认值：`False`.

- showTime (dict; default False):
    配置时间选择面板相关参数  默认值：`False`.

    `showTime` is a boolean | dict with keys:

    - defaultValue (list of strings; optional):
        时间选择面板初始化选中时间字符串.

    - format (string; optional):
        与`defaultValue`对应的时间格式，[参考资料](https://day.js.org/docs/en/display/format)
        默认值：`'HH:mm:ss'`.

- size (a value equal to: 'small', 'middle', 'large'; default 'middle'):
    当前组件尺寸规格，可选项有`'small'`、`'middle'`、`'large'`  默认值：`'middle'`.

- bordered (boolean; default True):
    是否显示边框，设置为`True`时等价于`variant='outlined'`  默认值：`True`.

- variant (a value equal to: 'outlined', 'borderless', 'filled', 'underlined'; optional):
    形态变体类型，可选项有`'outlined'`、`'borderless'`、`'filled'`、`'underlined'`，其中`'outlined'`等价于`bordered=True`，但优先级更高.

- placeholder (list of strings; optional):
    输入框占位文字内容.

- placement (a value equal to: 'bottomLeft', 'bottomRight', 'topLeft', 'topRight'; default 'bottomLeft'):
    选择面板展开方向，可选项有`'bottomLeft'`、`'bottomRight'`、`'topLeft'`、`'topRight'`
    默认值：`'bottomLeft'`.

- value (list of strings; optional):
    监听或设置已选值，与`format`格式对应.

- defaultValue (list of strings; optional):
    初始化已选值，与`format`格式对应.

- pickerValue (string | list of strings; optional):
    监听或设置面板展开对应日期，与`format`格式对应.

- disabledDatesStrategy (list of dicts; optional):
    配置日期禁用项策略数组，满足策略中至少一项规则的日期将会被禁止选中.

    `disabledDatesStrategy` is a list of dicts with keys:

    - mode (a value equal to: 'eq', 'ne', 'le', 'lt', 'ge', 'gt', 'in', 'not-in', 'in-enumerate-dates', 'not-in-enumerate-dates'; optional):
        当前策略类型，可选项有`'eq'`（等于）、`'ne'`（不等于）、`'le'`（小于等于）、`'lt'`（小于）、`'ge'`（大于等于）
        、`'gt'`（大于）、`'in'`（属于）、`'not-in'`（不属于）、`'in-enumerate-dates'`（属于日期字符串枚举数组），`'not-in-enumerate-dates'`（不属于日期字符串枚举数组）.

    - target (a value equal to: 'day', 'month', 'quarter', 'year', 'dayOfYear', 'dayOfWeek', 'specific-date'; optional):
        当前策略约束目标，可选项有`'dayOfYear'`（按年份天数）、`'dayOfWeek'`（按周天数）、`'day'`（按日）
        、`'month'`（按月份）、`'quarter'`（按季度）、`'year'`（按年份）、`'specific-date'`（具体日期）
        ，其中在`'specific-date'`目标下，`value`值将严格按照`'YYYY-MM-DD'`格式进行解析.

    - value (number | string | list of numbers | list of strings; optional):
        与策略类型、策略约束目标相对应的实际约束值.

- open (boolean; optional):
    监听或设置当前日期范围选择面板是否展开.

- status (a value equal to: 'error', 'warning'; optional):
    控制校验状态，可选项有`'error'`、`'warning'`.

- allowClear (boolean; default True):
    是否允许一键清空已选值  默认值：`True`.

- autoFocus (boolean; default False):
    是否自动获取焦点  默认值：`False`.

- readOnly (boolean; optional):
    是否渲染为只读状态  默认值：`False`.

- extraFooter (a list of or a singular dash component, string or number; optional):
    组件型，底部额外区域内容.

- presets (list of dicts; optional):
    配置预设项列表.

    `presets` is a list of dicts with keys:

    - label (a list of or a singular dash component, string or number; optional):
        组件型，当前预设项标题.

    - value (list of strings; optional):
        当前预设项对应值，与`format`格式对应.

- clickedPreset (dict; optional):
    配合`presets`参数，监听最近一次预设项点击事件相关信息.

    `clickedPreset` is a dict with keys:

    - value (string | number; optional):
        对应预设项值.

    - timestamp (number; optional):
        事件对应时间戳信息.

- needConfirm (boolean; default False):
    是否需要点击按钮确认选值，传入`False`时失去焦点即代表选择  默认值：`False`.

- customCells (list of dicts; optional):
    自定义对应日期的单元格样式.

    `customCells` is a list of dicts with keys:

    - year (number; optional):
        当前项匹配的年份值.

    - month (number; optional):
        当前项匹配的月份值.

    - date (number; optional):
        当前项匹配的日期值.

    - style (dict; optional):
        自定义css样式.

    - className (string; optional):
        自定义css类名.

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

- persistence (boolean | string | number; optional):
    是否开启[属性持久化](/prop-persistence).

- persisted_props (list of a value equal to: 'value's; optional):
    开启属性持久化功能的若干属性名，可选项有`'value'`  默认值：`['value']`.

- persistence_type (a value equal to: 'local', 'session', 'memory'; optional):
    属性持久化存储类型，可选项有`'local'`（本地持久化），`'session'`（会话持久化），`'memory'`（内存持久化）
    默认值：`'local'`."""
    _children_props: typing.List[str] = ['extraFooter', 'presets[].label', 'prefix', 'suffixIcon']
    _base_nodes = ['extraFooter', 'prefix', 'suffixIcon', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdDateRangePicker'
    ShowTime = TypedDict(
        "ShowTime",
            {
            "defaultValue": NotRequired[typing.Sequence[str]],
            "format": NotRequired[str]
        }
    )

    DisabledDatesStrategy = TypedDict(
        "DisabledDatesStrategy",
            {
            "mode": NotRequired[Literal["eq", "ne", "le", "lt", "ge", "gt", "in", "not-in", "in-enumerate-dates", "not-in-enumerate-dates"]],
            "target": NotRequired[Literal["day", "month", "quarter", "year", "dayOfYear", "dayOfWeek", "specific-date"]],
            "value": NotRequired[typing.Union[NumberType, str, typing.Sequence[NumberType], typing.Sequence[str]]]
        }
    )

    Presets = TypedDict(
        "Presets",
            {
            "label": NotRequired[ComponentType],
            "value": NotRequired[typing.Sequence[str]]
        }
    )

    ClickedPreset = TypedDict(
        "ClickedPreset",
            {
            "value": NotRequired[typing.Union[str, NumberType]],
            "timestamp": NotRequired[NumberType]
        }
    )

    CustomCells = TypedDict(
        "CustomCells",
            {
            "year": NotRequired[NumberType],
            "month": NotRequired[NumberType],
            "date": NotRequired[NumberType],
            "style": NotRequired[dict],
            "className": NotRequired[str]
        }
    )


    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        popupClassName: typing.Optional[str] = None,
        name: typing.Optional[str] = None,
        enableBatchControl: typing.Optional[bool] = None,
        locale: typing.Optional[Literal["zh-cn", "en-us", "de-de", "ru-ru"]] = None,
        format: typing.Optional[str] = None,
        picker: typing.Optional[Literal["date", "week", "month", "quarter", "year"]] = None,
        firstDayOfWeek: typing.Optional[NumberType] = None,
        disabled: typing.Optional[typing.Sequence[bool]] = None,
        showTime: typing.Optional[typing.Union[bool, "ShowTime"]] = None,
        size: typing.Optional[Literal["small", "middle", "large"]] = None,
        bordered: typing.Optional[bool] = None,
        variant: typing.Optional[Literal["outlined", "borderless", "filled", "underlined"]] = None,
        placeholder: typing.Optional[typing.Sequence[str]] = None,
        placement: typing.Optional[Literal["bottomLeft", "bottomRight", "topLeft", "topRight"]] = None,
        value: typing.Optional[typing.Sequence[str]] = None,
        defaultValue: typing.Optional[typing.Sequence[str]] = None,
        pickerValue: typing.Optional[typing.Union[str, typing.Sequence[str]]] = None,
        disabledDatesStrategy: typing.Optional[typing.Sequence["DisabledDatesStrategy"]] = None,
        open: typing.Optional[bool] = None,
        status: typing.Optional[Literal["error", "warning"]] = None,
        allowClear: typing.Optional[bool] = None,
        autoFocus: typing.Optional[bool] = None,
        readOnly: typing.Optional[bool] = None,
        extraFooter: typing.Optional[ComponentType] = None,
        presets: typing.Optional[typing.Sequence["Presets"]] = None,
        clickedPreset: typing.Optional["ClickedPreset"] = None,
        needConfirm: typing.Optional[bool] = None,
        customCells: typing.Optional[typing.Sequence["CustomCells"]] = None,
        prefix: typing.Optional[ComponentType] = None,
        suffixIcon: typing.Optional[ComponentType] = None,
        popupContainer: typing.Optional[Literal["parent", "body"]] = None,
        batchPropsNames: typing.Optional[typing.Sequence[str]] = None,
        batchPropsValues: typing.Optional[dict] = None,
        persistence: typing.Optional[typing.Union[bool, str, NumberType]] = None,
        persisted_props: typing.Optional[typing.Sequence[Literal["value"]]] = None,
        persistence_type: typing.Optional[Literal["local", "session", "memory"]] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'style', 'className', 'popupClassName', 'name', 'enableBatchControl', 'locale', 'format', 'picker', 'firstDayOfWeek', 'disabled', 'showTime', 'size', 'bordered', 'variant', 'placeholder', 'placement', 'value', 'defaultValue', 'pickerValue', 'disabledDatesStrategy', 'open', 'status', 'allowClear', 'autoFocus', 'readOnly', 'extraFooter', 'presets', 'clickedPreset', 'needConfirm', 'customCells', 'prefix', 'suffixIcon', 'popupContainer', 'batchPropsNames', 'batchPropsValues', 'data-*', 'aria-*', 'persistence', 'persisted_props', 'persistence_type']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'style', 'className', 'popupClassName', 'name', 'enableBatchControl', 'locale', 'format', 'picker', 'firstDayOfWeek', 'disabled', 'showTime', 'size', 'bordered', 'variant', 'placeholder', 'placement', 'value', 'defaultValue', 'pickerValue', 'disabledDatesStrategy', 'open', 'status', 'allowClear', 'autoFocus', 'readOnly', 'extraFooter', 'presets', 'clickedPreset', 'needConfirm', 'customCells', 'prefix', 'suffixIcon', 'popupContainer', 'batchPropsNames', 'batchPropsValues', 'data-*', 'aria-*', 'persistence', 'persisted_props', 'persistence_type']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdDateRangePicker, self).__init__(**args)

setattr(AntdDateRangePicker, "__init__", _explicitize_args(AntdDateRangePicker.__init__))
