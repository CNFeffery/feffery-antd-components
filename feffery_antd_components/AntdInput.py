# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdInput(Component):
    """An AntdInput component.
输入框组件AntdInput

Keyword arguments:

- id (string; optional):
    组件唯一id.

- addonAfter (a list of or a singular dash component, string or number; optional):
    组件型，后置标签内容.

- addonBefore (a list of or a singular dash component, string or number; optional):
    组件型，前置标签内容.

- allowClear (boolean; default False):
    是否允许一键清空已输入值  默认值：`False`.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- autoComplete (a value equal to: 'off', 'on'; default 'on'):
    是否开启浏览器自带的自动补全功能，可选项有`'off'`、`'on'`  默认值：`'on'`.

- autoFocus (boolean; default False):
    是否自动获取焦点  默认值：`False`.

- autoSize (dict; default False):
    针对`'text-area'`模式，配置输入框高度自适应相关功能  默认值：`False`.

    `autoSize` is a boolean | dict with keys:

    - maxRows (number; optional):
        输入框最大行数.

    - minRows (number; optional):
        输入框最小行数.

- batchPropsNames (list of strings; optional):
    需要纳入[批量属性监听](/batch-props-values)的若干属性名.

- batchPropsValues (dict; optional):
    监听`batchPropsNames`中指定的若干属性值.

- bordered (boolean; default True):
    是否显示边框，设置为`True`时等价于`variant='outlined'`  默认值：`True`.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- classNames (dict; optional):
    细分控制子元素css类名.

    `classNames` is a dict with keys:

    - count (string; optional):
        控制文字计数元素css类名.

    - input (string; optional):
        控制文本框元素css类名.

    - prefix (string; optional):
        控制前缀容器css类名.

    - suffix (string; optional):
        控制后缀容器css类名.

    - textarea (string; optional):
        控制文本域元素css类名.

- countFormat (string; optional):
    正则表达式，用于配合字符计数相关功能，自定义计数规则.

- data-* (string; optional):
    `data-*`格式属性通配.

- debounceValue (string; optional):
    监听防抖版本的已输入值.

- debounceWait (number; default 0):
    防抖延时时长，单位：毫秒  默认值：`0`.

- defaultValue (string; optional):
    初始化已输入值.

- disabled (boolean; default False):
    是否禁用当前组件  默认值：`False`.

- emptyAsNone (boolean; default False):
    当输入框已输入值为空时，是否强制更新`value`为空值，从而统一空字符串与空值混合的情况  默认值：`False`.

- focusing (boolean; optional):
    监听输入框是否聚焦.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- maxLength (number; optional):
    限制输入框最大可输入字符数量.

- md5Value (string; optional):
    当`passwordUseMd5=True`时，监听已输入值md5编码结果.

- mode (a value equal to: 'default', 'search', 'text-area', 'password'; default 'default'):
    输入框模式，可选项有`'default'`、`'search'`、`'text-area'`、`'password'`
    默认值：`'default'`.

- nClicksSearch (number; default 0):
    针对`'search'`模式，监听搜索按钮累计点击次数  默认值：`0`.

- nSubmit (number; default 0):
    监听输入框聚焦状态下，键盘enter键累计点按次数  默认值：`0`.

- name (string; optional):
    配合`AntdForm`表单批量值搜集/控制功能使用，充当当前表单项的字段名，以`id`作为缺省值.

- passwordUseMd5 (boolean; default False):
    针对`'password'`模式，是否启用md5加密功能  默认值：`False`.

- persisted_props (list of a value equal to: 'value', 'md5Value's; default ['value', 'md5Value']):
    开启属性持久化功能的若干属性名，可选项有`'value'`、`'md5Value'`  默认值：`['value',
    'md5Value']`.

- persistence (boolean | string | number; optional):
    是否开启[属性持久化](/prop-persistence).

- persistence_type (a value equal to: 'local', 'session', 'memory'; default 'local'):
    属性持久化存储类型，可选项有`'local'`（本地持久化），`'session'`（会话持久化），`'memory'`（内存持久化）
    默认值：`'local'`.

- placeholder (string; optional):
    输入框占位文字内容.

- prefix (a list of or a singular dash component, string or number; optional):
    组件型，前缀内嵌内容.

- readOnly (boolean; optional):
    是否渲染为只读状态  默认值：`False`.

- showCount (boolean; default False):
    是否显示已输入字符计数  默认值：`False`.

- size (a value equal to: 'small', 'middle', 'large'; default 'middle'):
    当前组件尺寸规格，可选项有`'small'`、`'middle'`、`'large'`  默认值：`'middle'`.

- status (a value equal to: 'error', 'warning'; optional):
    控制校验状态，可选项有`'error'`、`'warning'`.

- style (dict; optional):
    当前组件css样式.

- styles (dict; optional):
    细分控制子元素css样式.

    `styles` is a dict with keys:

    - count (dict; optional):
        控制文字计数元素css样式.

    - input (dict; optional):
        控制文本框元素css样式.

    - prefix (dict; optional):
        控制前缀容器css样式.

    - suffix (dict; optional):
        控制后缀容器css样式.

    - textarea (dict; optional):
        控制文本域元素css样式.

- suffix (a list of or a singular dash component, string or number; optional):
    组件型，后缀内嵌内容.

- value (string; optional):
    监听或设置已输入值.

- variant (a value equal to: 'outlined', 'borderless', 'filled'; optional):
    形态变体类型，可选项有`'outlined'`、`'borderless'`、`'filled'`，其中`'outlined'`等价于`bordered=True`，但优先级更高."""
    _children_props = ['addonBefore', 'addonAfter', 'prefix', 'suffix']
    _base_nodes = ['addonBefore', 'addonAfter', 'prefix', 'suffix', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdInput'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, styles=Component.UNDEFINED, classNames=Component.UNDEFINED, name=Component.UNDEFINED, mode=Component.UNDEFINED, autoComplete=Component.UNDEFINED, disabled=Component.UNDEFINED, size=Component.UNDEFINED, bordered=Component.UNDEFINED, variant=Component.UNDEFINED, placeholder=Component.UNDEFINED, value=Component.UNDEFINED, defaultValue=Component.UNDEFINED, passwordUseMd5=Component.UNDEFINED, md5Value=Component.UNDEFINED, debounceValue=Component.UNDEFINED, debounceWait=Component.UNDEFINED, addonBefore=Component.UNDEFINED, addonAfter=Component.UNDEFINED, prefix=Component.UNDEFINED, suffix=Component.UNDEFINED, maxLength=Component.UNDEFINED, showCount=Component.UNDEFINED, countFormat=Component.UNDEFINED, autoSize=Component.UNDEFINED, nSubmit=Component.UNDEFINED, nClicksSearch=Component.UNDEFINED, status=Component.UNDEFINED, allowClear=Component.UNDEFINED, autoFocus=Component.UNDEFINED, focusing=Component.UNDEFINED, readOnly=Component.UNDEFINED, emptyAsNone=Component.UNDEFINED, batchPropsNames=Component.UNDEFINED, batchPropsValues=Component.UNDEFINED, loading_state=Component.UNDEFINED, persistence=Component.UNDEFINED, persisted_props=Component.UNDEFINED, persistence_type=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'addonAfter', 'addonBefore', 'allowClear', 'aria-*', 'autoComplete', 'autoFocus', 'autoSize', 'batchPropsNames', 'batchPropsValues', 'bordered', 'className', 'classNames', 'countFormat', 'data-*', 'debounceValue', 'debounceWait', 'defaultValue', 'disabled', 'emptyAsNone', 'focusing', 'key', 'loading_state', 'maxLength', 'md5Value', 'mode', 'nClicksSearch', 'nSubmit', 'name', 'passwordUseMd5', 'persisted_props', 'persistence', 'persistence_type', 'placeholder', 'prefix', 'readOnly', 'showCount', 'size', 'status', 'style', 'styles', 'suffix', 'value', 'variant']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'addonAfter', 'addonBefore', 'allowClear', 'aria-*', 'autoComplete', 'autoFocus', 'autoSize', 'batchPropsNames', 'batchPropsValues', 'bordered', 'className', 'classNames', 'countFormat', 'data-*', 'debounceValue', 'debounceWait', 'defaultValue', 'disabled', 'emptyAsNone', 'focusing', 'key', 'loading_state', 'maxLength', 'md5Value', 'mode', 'nClicksSearch', 'nSubmit', 'name', 'passwordUseMd5', 'persisted_props', 'persistence', 'persistence_type', 'placeholder', 'prefix', 'readOnly', 'showCount', 'size', 'status', 'style', 'styles', 'suffix', 'value', 'variant']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdInput, self).__init__(**args)
