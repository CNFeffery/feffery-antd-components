# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdCalendar(Component):
    """An AntdCalendar component.
日历组件AntdCalendar

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

- locale (a value equal to: 'zh-cn', 'en-us', 'de-de'; default 'zh-cn'):
    组件文案语种，可选项有`'zh-cn'`（简体中文）、`'en-us'`（英语）、`'de-de'`（德语）
    默认值：`'zh-cn'`.

- format (string; default 'YYYY-MM-DD'):
    日期显示格式，[参考资料](https://day.js.org/docs/en/display/format)
    默认值：`'YYYY-MM-DD'`.

- size (a value equal to: 'default', 'large'; default 'default'):
    日历尺寸规格，可选项有`'default'`、`'large'`  默认值：`'default'`.

- value (string; optional):
    监听或设置当前选中日期值.

- defaultValue (string; optional):
    初始化选中日期值.

- customCells (list of dicts; optional):
    自定义对应月份、日期的单元格显示内容.

    `customCells` is a list of dicts with keys:

    - content (a list of or a singular dash component, string or number; optional):
        自定义内容.

    - date (number; optional):
        当前项匹配的日期值.

    - month (number; optional):
        当前项匹配的月份值.

    - type (a value equal to: 'month', 'date'; required):
        必填，当前项对应类型，可选项有`'month'`、`'date'`.

    - year (number; optional):
        当前项匹配的年份值.

- cellClickEvent (dict; optional):
    监听日期单元格点击事件.

    `cellClickEvent` is a dict with keys:

    - timestamp (number; optional):
        事件发生时间戳.

    - type (string; optional):
        记录面板类型.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- persistence (boolean | string | number; optional):
    是否开启[属性持久化](/prop-persistence).

- persisted_props (list of a value equal to: 'value's; default ['value']):
    开启属性持久化功能的若干属性名，可选项有`'value'`  默认值：`['value']`.

- persistence_type (a value equal to: 'local', 'session', 'memory'; default 'local'):
    属性持久化存储类型，可选项有`'local'`（本地持久化），`'session'`（会话持久化），`'memory'`（内存持久化）
    默认值：`'local'`."""
    _children_props = ['customCells[].content']
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdCalendar'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, name=Component.UNDEFINED, locale=Component.UNDEFINED, format=Component.UNDEFINED, size=Component.UNDEFINED, value=Component.UNDEFINED, defaultValue=Component.UNDEFINED, customCells=Component.UNDEFINED, cellClickEvent=Component.UNDEFINED, loading_state=Component.UNDEFINED, persistence=Component.UNDEFINED, persisted_props=Component.UNDEFINED, persistence_type=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'style', 'className', 'name', 'locale', 'format', 'size', 'value', 'defaultValue', 'customCells', 'cellClickEvent', 'data-*', 'aria-*', 'loading_state', 'persistence', 'persisted_props', 'persistence_type']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'style', 'className', 'name', 'locale', 'format', 'size', 'value', 'defaultValue', 'customCells', 'cellClickEvent', 'data-*', 'aria-*', 'loading_state', 'persistence', 'persisted_props', 'persistence_type']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdCalendar, self).__init__(**args)
