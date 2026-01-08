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


class AntdCalendar(Component):
    """An AntdCalendar component.
日历组件AntdCalendar

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

- locale (a value equal to: 'zh-cn', 'en-us', 'de-de', 'ru-ru'; default 'zh-cn'):
    组件文案语种，可选项有`'zh-cn'`（简体中文）、`'en-us'`（英语）、`'de-de'`（德语）、`'ru-ru'`（俄语）
    默认值：`'zh-cn'`.

- format (string; default 'YYYY-MM-DD'):
    日期显示格式，[参考资料](https://day.js.org/docs/en/display/format)
    默认值：`'YYYY-MM-DD'`.

- size (a value equal to: 'default', 'large'; default 'default'):
    日历尺寸规格，可选项有`'default'`、`'large'` 默认值：`'default'`.

- value (string; optional):
    监听或设置当前选中日期值.

- defaultValue (string; optional):
    初始化选中日期值.

- customCells (list of dicts; optional):
    自定义对应月份、日期的单元格显示内容.

    `customCells` is a list of dicts with keys:

    - type (a value equal to: 'month', 'date'; required):
        必填，当前项对应类型，可选项有`'month'`、`'date'`.

    - year (number; optional):
        当前项匹配的年份值.

    - month (number; optional):
        当前项匹配的月份值.

    - date (number; optional):
        当前项匹配的日期值.

    - content (a list of or a singular dash component, string or number; optional):
        自定义内容.

- cellClickEvent (dict; optional):
    监听日期单元格点击事件.

    `cellClickEvent` is a dict with keys:

    - type (string; optional):
        记录面板类型.

    - timestamp (number; optional):
        事件发生时间戳.

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
    _children_props: typing.List[str] = ['customCells[].content']
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdCalendar'
    CustomCells = TypedDict(
        "CustomCells",
            {
            "type": Literal["month", "date"],
            "year": NotRequired[NumberType],
            "month": NotRequired[NumberType],
            "date": NotRequired[NumberType],
            "content": NotRequired[ComponentType]
        }
    )

    CellClickEvent = TypedDict(
        "CellClickEvent",
            {
            "type": NotRequired[str],
            "timestamp": NotRequired[NumberType]
        }
    )


    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        name: typing.Optional[str] = None,
        enableBatchControl: typing.Optional[bool] = None,
        locale: typing.Optional[Literal["zh-cn", "en-us", "de-de", "ru-ru"]] = None,
        format: typing.Optional[str] = None,
        size: typing.Optional[Literal["default", "large"]] = None,
        value: typing.Optional[str] = None,
        defaultValue: typing.Optional[str] = None,
        customCells: typing.Optional[typing.Sequence["CustomCells"]] = None,
        cellClickEvent: typing.Optional["CellClickEvent"] = None,
        persistence: typing.Optional[typing.Union[bool, str, NumberType]] = None,
        persisted_props: typing.Optional[typing.Sequence[Literal["value"]]] = None,
        persistence_type: typing.Optional[Literal["local", "session", "memory"]] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'style', 'className', 'name', 'enableBatchControl', 'locale', 'format', 'size', 'value', 'defaultValue', 'customCells', 'cellClickEvent', 'data-*', 'aria-*', 'persistence', 'persisted_props', 'persistence_type']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'style', 'className', 'name', 'enableBatchControl', 'locale', 'format', 'size', 'value', 'defaultValue', 'customCells', 'cellClickEvent', 'data-*', 'aria-*', 'persistence', 'persisted_props', 'persistence_type']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdCalendar, self).__init__(**args)

setattr(AntdCalendar, "__init__", _explicitize_args(AntdCalendar.__init__))
