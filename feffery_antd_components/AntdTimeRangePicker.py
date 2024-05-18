# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdTimeRangePicker(Component):
    """An AntdTimeRangePicker component.
时间范围选择组件AntdTimeRangePicker

Keyword arguments:

- id (string; optional):
    组件唯一id.

- allowClear (boolean; default True):
    是否允许一键清空已选值  默认值：`True`.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- autoFocus (boolean; default False):
    是否自动获取焦点  默认值：`False`.

- batchPropsNames (list of strings; optional):
    需要纳入[批量属性监听](/batch-props-values)的若干属性名.

- batchPropsValues (dict; optional):
    监听`batchPropsNames`中指定的若干属性值.

- bordered (boolean; default True):
    是否显示边框，设置为`True`时等价于`variant='outlined'`  默认值：`True`.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- data-* (string; optional):
    `data-*`格式属性通配.

- defaultValue (list of strings; optional):
    初始化已选值，与`format`格式对应.

- disabled (list of booleans; default [False, False]):
    是否禁用当前组件  默认值：`False`.

- extraFooter (a list of or a singular dash component, string or number; optional):
    组件型，底部额外区域内容.

- format (string; default 'HH:mm:ss'):
    时间显示格式，[参考资料](https://day.js.org/docs/en/display/format)
    默认值：`'HH:mm:ss'`.

- hourStep (number; default 1):
    小时选项间隔  默认值：`1`.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- loading_state (dict; optional):
    Object that holds the loading state object coming from
    dash-renderer.

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- locale (a value equal to: 'zh-cn', 'en-us'; default 'zh-cn'):
    组件文案语种，可选项有`'zh-cn'`、`'en-us'`  默认值：`'zh-cn'`.

- minuteStep (number; default 1):
    分钟选项间隔  默认值：`1`.

- name (string; optional):
    配合`AntdForm`表单批量值搜集/控制功能使用，充当当前表单项的字段名，以`id`作为缺省值.

- needConfirm (boolean; default False):
    是否需要确认按钮，为`False`时失去焦点即代表选择  默认值：`False`.

- open (boolean; optional):
    监听或设置当前选择面板是否展开.

- persisted_props (list of a value equal to: 'value's; default ['value']):
    开启属性持久化功能的若干属性名，可选项有`'value'`  默认值：`['value']`.

- persistence (boolean | string | number; optional):
    是否开启[属性持久化](/prop-persistence).

- persistence_type (a value equal to: 'local', 'session', 'memory'; default 'local'):
    属性持久化存储类型，可选项有`'local'`（本地持久化），`'session'`（会话持久化），`'memory'`（内存持久化）
    默认值：`'local'`.

- placeholder (list of strings; optional):
    输入框占位文字内容.

- placement (a value equal to: 'bottomLeft', 'bottomRight', 'topLeft', 'topRight'; default 'bottomLeft'):
    选择面板展开方向，可选项有`'bottomLeft'`、`'bottomRight'`、`'topLeft'`、`'topRight'`
    默认值：`'bottomLeft'`.

- popupClassName (string; optional):
    展开菜单css类名.

- popupContainer (a value equal to: 'parent', 'body'; default 'body'):
    相关展开层锚定策略，可选项有`'parent'`、`'body'`  默认值：`'body'`.

- readOnly (boolean; optional):
    是否渲染为只读状态  默认值：`False`.

- secondStep (number; default 1):
    秒选项间隔  默认值：`1`.

- size (a value equal to: 'small', 'middle', 'large'; default 'middle'):
    当前组件尺寸规格，可选项有`'small'`、`'middle'`、`'large'`  默认值：`'middle'`.

- status (a value equal to: 'error', 'warning'; optional):
    控制校验状态，可选项有`'error'`、`'warning'`.

- style (dict; optional):
    当前组件css样式.

- use12Hours (boolean; default False):
    是否使用12小时制，当设置为`True`时，`format`参数默认值变更为`'h:mm:ss a'`  默认值：`False`.

- value (list of strings; optional):
    监听或设置已选值，与`format`格式对应.

- variant (a value equal to: 'outlined', 'borderless', 'filled'; optional):
    形态变体类型，可选项有`'outlined'`、`'borderless'`、`'filled'`，其中`'outlined'`等价于`bordered=True`，但优先级更高."""
    _children_props = ['extraFooter']
    _base_nodes = ['extraFooter', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdTimeRangePicker'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, popupClassName=Component.UNDEFINED, name=Component.UNDEFINED, locale=Component.UNDEFINED, format=Component.UNDEFINED, hourStep=Component.UNDEFINED, minuteStep=Component.UNDEFINED, secondStep=Component.UNDEFINED, use12Hours=Component.UNDEFINED, allowClear=Component.UNDEFINED, autoFocus=Component.UNDEFINED, placeholder=Component.UNDEFINED, placement=Component.UNDEFINED, disabled=Component.UNDEFINED, value=Component.UNDEFINED, defaultValue=Component.UNDEFINED, bordered=Component.UNDEFINED, variant=Component.UNDEFINED, size=Component.UNDEFINED, open=Component.UNDEFINED, status=Component.UNDEFINED, readOnly=Component.UNDEFINED, extraFooter=Component.UNDEFINED, popupContainer=Component.UNDEFINED, batchPropsNames=Component.UNDEFINED, batchPropsValues=Component.UNDEFINED, needConfirm=Component.UNDEFINED, loading_state=Component.UNDEFINED, persistence=Component.UNDEFINED, persisted_props=Component.UNDEFINED, persistence_type=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'allowClear', 'aria-*', 'autoFocus', 'batchPropsNames', 'batchPropsValues', 'bordered', 'className', 'data-*', 'defaultValue', 'disabled', 'extraFooter', 'format', 'hourStep', 'key', 'loading_state', 'locale', 'minuteStep', 'name', 'needConfirm', 'open', 'persisted_props', 'persistence', 'persistence_type', 'placeholder', 'placement', 'popupClassName', 'popupContainer', 'readOnly', 'secondStep', 'size', 'status', 'style', 'use12Hours', 'value', 'variant']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'allowClear', 'aria-*', 'autoFocus', 'batchPropsNames', 'batchPropsValues', 'bordered', 'className', 'data-*', 'defaultValue', 'disabled', 'extraFooter', 'format', 'hourStep', 'key', 'loading_state', 'locale', 'minuteStep', 'name', 'needConfirm', 'open', 'persisted_props', 'persistence', 'persistence_type', 'placeholder', 'placement', 'popupClassName', 'popupContainer', 'readOnly', 'secondStep', 'size', 'status', 'style', 'use12Hours', 'value', 'variant']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdTimeRangePicker, self).__init__(**args)
