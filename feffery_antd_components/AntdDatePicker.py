# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdDatePicker(Component):
    """An AntdDatePicker component.
日期选择组件AntdDatePicker

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- style (dict; optional):
    当前组件css样式.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- popupClassName (string; optional):
    展开菜单css类名.

- name (string; optional):
    配合`AntdForm`表单批量值搜集/控制功能使用，充当当前表单项的字段名，以`id`作为缺省值.

- locale (a value equal to: 'zh-cn', 'en-us', 'de-de'; default 'zh-cn'):
    组件文案语种，可选项有`'zh-cn'`（简体中文）、`'en-us'`（英语）、`'de-de'`（德语）
    默认值：`'zh-cn'`.

- format (string; optional):
    日期时间显示格式，[参考资料](https://day.js.org/docs/en/display/format)
    默认值：`'YYYY-MM-DD'`.

- picker (a value equal to: 'date', 'week', 'month', 'quarter', 'year'; default 'date'):
    日期选择粒度，可选项有`'date'`、`'week'`、`'month'`、`'quarter'`、`'year'`
    默认值：`'date'`.

- firstDayOfWeek (number; optional):
    自定义每周起始日下标.

- disabled (boolean; default False):
    是否禁用当前组件  默认值：`False`.

- showTime (dict; default False):
    配置时间选择面板相关参数  默认值：`False`.

    `showTime` is a boolean | dict with keys:

    - defaultValue (string; optional):
        时间选择面板初始化选中时间字符串.

    - format (string; optional):
        与`defaultValue`对应的时间格式，[参考资料](https://day.js.org/docs/en/display/format)
        默认值：`'HH:mm:ss'`.

- size (a value equal to: 'small', 'middle', 'large'; default 'middle'):
    当前组件尺寸规格，可选项有`'small'`、`'middle'`、`'large'`  默认值：`'middle'`.

- bordered (boolean; default True):
    是否显示边框，设置为`True`时等价于`variant='outlined'`  默认值：`True`.

- variant (a value equal to: 'outlined', 'borderless', 'filled'; optional):
    形态变体类型，可选项有`'outlined'`、`'borderless'`、`'filled'`，其中`'outlined'`等价于`bordered=True`，但优先级更高.

- placeholder (string; optional):
    输入框占位文字内容.

- placement (a value equal to: 'bottomLeft', 'bottomRight', 'topLeft', 'topRight'; default 'bottomLeft'):
    选择面板展开方向，可选项有`'bottomLeft'`、`'bottomRight'`、`'topLeft'`、`'topRight'`
    默认值：`'bottomLeft'`.

- value (string; optional):
    监听或设置已选值，与`format`格式对应.

- defaultValue (string; optional):
    初始化已选值，与`format`格式对应.

- pickerValue (string; optional):
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

- showToday (boolean; default True):
    是否显示“今天”快捷选择按钮  默认值：`True`.

- presets (list of dicts; optional):
    配置预设项列表.

    `presets` is a list of dicts with keys:

    - label (a list of or a singular dash component, string or number; optional):
        组件型，当前预设项标题.

    - value (string; optional):
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

- loading_state (dict; optional):
    Object that holds the loading state object coming from
    dash-renderer.

    `loading_state` is a dict with keys:

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

    - component_name (string; optional):
        Holds the name of the component that is loading.

- persistence (boolean | string | number; optional):
    是否开启[属性持久化](/prop-persistence).

- persisted_props (list of a value equal to: 'value's; default ['value']):
    开启属性持久化功能的若干属性名，可选项有`'value'`  默认值：`['value']`.

- persistence_type (a value equal to: 'local', 'session', 'memory'; default 'local'):
    属性持久化存储类型，可选项有`'local'`（本地持久化），`'session'`（会话持久化），`'memory'`（内存持久化）
    默认值：`'local'`."""
    _children_props = ['extraFooter', 'presets[].label', 'prefix', 'suffixIcon']
    _base_nodes = ['extraFooter', 'prefix', 'suffixIcon', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdDatePicker'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, popupClassName=Component.UNDEFINED, name=Component.UNDEFINED, locale=Component.UNDEFINED, format=Component.UNDEFINED, picker=Component.UNDEFINED, firstDayOfWeek=Component.UNDEFINED, disabled=Component.UNDEFINED, showTime=Component.UNDEFINED, size=Component.UNDEFINED, bordered=Component.UNDEFINED, variant=Component.UNDEFINED, placeholder=Component.UNDEFINED, placement=Component.UNDEFINED, value=Component.UNDEFINED, defaultValue=Component.UNDEFINED, pickerValue=Component.UNDEFINED, disabledDatesStrategy=Component.UNDEFINED, status=Component.UNDEFINED, allowClear=Component.UNDEFINED, autoFocus=Component.UNDEFINED, readOnly=Component.UNDEFINED, extraFooter=Component.UNDEFINED, showToday=Component.UNDEFINED, presets=Component.UNDEFINED, clickedPreset=Component.UNDEFINED, needConfirm=Component.UNDEFINED, customCells=Component.UNDEFINED, prefix=Component.UNDEFINED, suffixIcon=Component.UNDEFINED, popupContainer=Component.UNDEFINED, batchPropsNames=Component.UNDEFINED, batchPropsValues=Component.UNDEFINED, loading_state=Component.UNDEFINED, persistence=Component.UNDEFINED, persisted_props=Component.UNDEFINED, persistence_type=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'style', 'className', 'popupClassName', 'name', 'locale', 'format', 'picker', 'firstDayOfWeek', 'disabled', 'showTime', 'size', 'bordered', 'variant', 'placeholder', 'placement', 'value', 'defaultValue', 'pickerValue', 'disabledDatesStrategy', 'status', 'allowClear', 'autoFocus', 'readOnly', 'extraFooter', 'showToday', 'presets', 'clickedPreset', 'needConfirm', 'customCells', 'prefix', 'suffixIcon', 'popupContainer', 'batchPropsNames', 'batchPropsValues', 'data-*', 'aria-*', 'loading_state', 'persistence', 'persisted_props', 'persistence_type']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'style', 'className', 'popupClassName', 'name', 'locale', 'format', 'picker', 'firstDayOfWeek', 'disabled', 'showTime', 'size', 'bordered', 'variant', 'placeholder', 'placement', 'value', 'defaultValue', 'pickerValue', 'disabledDatesStrategy', 'status', 'allowClear', 'autoFocus', 'readOnly', 'extraFooter', 'showToday', 'presets', 'clickedPreset', 'needConfirm', 'customCells', 'prefix', 'suffixIcon', 'popupContainer', 'batchPropsNames', 'batchPropsValues', 'data-*', 'aria-*', 'loading_state', 'persistence', 'persisted_props', 'persistence_type']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdDatePicker, self).__init__(**args)
