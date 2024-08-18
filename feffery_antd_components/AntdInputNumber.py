# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdInputNumber(Component):
    """An AntdInputNumber component.
数值输入框组件AntdInputNumber

Keyword arguments:

- id (string; optional):
    组件唯一id.

- addonAfter (a list of or a singular dash component, string or number; optional):
    组件型，后置标签内容.

- addonBefore (a list of or a singular dash component, string or number; optional):
    组件型，前置标签内容.

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

- controls (boolean; default True):
    是否显示增减数值按钮  默认值：`True`.

- data-* (string; optional):
    `data-*`格式属性通配.

- debounceValue (number | string; optional):
    监听防抖版本的已输入值.

- debounceWait (number; default 0):
    防抖延时时长，单位：毫秒  默认值：`0`.

- defaultValue (number | string; optional):
    初始化已输入值.

- disabled (boolean; default False):
    是否禁用当前组件  默认值：`False`.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- keyboard (boolean; default True):
    是否允许通过键盘上下方向键控制数值  默认值：`True`.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- max (number | string; optional):
    允许输入的数值上限，默认无限制.

- min (number | string; optional):
    允许输入的数值下限，默认无限制.

- nSubmit (number; default 0):
    监听输入框聚焦状态下，键盘enter键累计点按次数  默认值：`0`.

- name (string; optional):
    配合`AntdForm`表单批量值搜集/控制功能使用，充当当前表单项的字段名，以`id`作为缺省值.

- persisted_props (list of a value equal to: 'value's; default ['value']):
    开启属性持久化功能的若干属性名，可选项有`'md5Value'`  默认值：`['md5Value']`.

- persistence (boolean | string | number; optional):
    是否开启[属性持久化](/prop-persistence).

- persistence_type (a value equal to: 'local', 'session', 'memory'; default 'local'):
    属性持久化存储类型，可选项有`'local'`（本地持久化），`'session'`（会话持久化），`'memory'`（内存持久化）
    默认值：`'local'`.

- placeholder (string; optional):
    输入框占位文字内容.

- precision (number; optional):
    数值精度.

- prefix (a list of or a singular dash component, string or number; optional):
    组件型，前缀内嵌内容.

- readOnly (boolean; optional):
    是否渲染为只读状态  默认值：`False`.

- size (a value equal to: 'small', 'middle', 'large'; default 'middle'):
    当前组件尺寸规格，可选项有`'small'`、`'middle'`、`'large'`  默认值：`'middle'`.

- status (a value equal to: 'error', 'warning'; optional):
    控制校验状态，可选项有`'error'`、`'warning'`.

- step (number | string; optional):
    数值增减步长.

- stringMode (boolean; default False):
    是否开启字符串模式，用于在接受超高精度数值输入时不丢失精度，开启后，参数`min`、`max`、`step`、`value`、`defaultValue`均需要设置为字符型
    默认值：`False`.

- style (dict; optional):
    当前组件css样式.

- suffix (a list of or a singular dash component, string or number; optional):
    组件型，后缀内嵌内容.

- value (number | string; optional):
    监听或设置已输入值.

- variant (a value equal to: 'outlined', 'borderless', 'filled'; optional):
    形态变体类型，可选项有`'outlined'`、`'borderless'`、`'filled'`，其中`'outlined'`等价于`bordered=True`，但优先级更高."""
    _children_props = ['addonBefore', 'addonAfter', 'prefix', 'suffix']
    _base_nodes = ['addonBefore', 'addonAfter', 'prefix', 'suffix', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdInputNumber'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, name=Component.UNDEFINED, addonBefore=Component.UNDEFINED, addonAfter=Component.UNDEFINED, prefix=Component.UNDEFINED, suffix=Component.UNDEFINED, autoFocus=Component.UNDEFINED, controls=Component.UNDEFINED, keyboard=Component.UNDEFINED, min=Component.UNDEFINED, max=Component.UNDEFINED, step=Component.UNDEFINED, precision=Component.UNDEFINED, stringMode=Component.UNDEFINED, disabled=Component.UNDEFINED, size=Component.UNDEFINED, bordered=Component.UNDEFINED, variant=Component.UNDEFINED, placeholder=Component.UNDEFINED, value=Component.UNDEFINED, defaultValue=Component.UNDEFINED, debounceValue=Component.UNDEFINED, debounceWait=Component.UNDEFINED, nSubmit=Component.UNDEFINED, status=Component.UNDEFINED, readOnly=Component.UNDEFINED, batchPropsNames=Component.UNDEFINED, batchPropsValues=Component.UNDEFINED, loading_state=Component.UNDEFINED, persistence=Component.UNDEFINED, persisted_props=Component.UNDEFINED, persistence_type=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'addonAfter', 'addonBefore', 'aria-*', 'autoFocus', 'batchPropsNames', 'batchPropsValues', 'bordered', 'className', 'controls', 'data-*', 'debounceValue', 'debounceWait', 'defaultValue', 'disabled', 'key', 'keyboard', 'loading_state', 'max', 'min', 'nSubmit', 'name', 'persisted_props', 'persistence', 'persistence_type', 'placeholder', 'precision', 'prefix', 'readOnly', 'size', 'status', 'step', 'stringMode', 'style', 'suffix', 'value', 'variant']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'addonAfter', 'addonBefore', 'aria-*', 'autoFocus', 'batchPropsNames', 'batchPropsValues', 'bordered', 'className', 'controls', 'data-*', 'debounceValue', 'debounceWait', 'defaultValue', 'disabled', 'key', 'keyboard', 'loading_state', 'max', 'min', 'nSubmit', 'name', 'persisted_props', 'persistence', 'persistence_type', 'placeholder', 'precision', 'prefix', 'readOnly', 'size', 'status', 'step', 'stringMode', 'style', 'suffix', 'value', 'variant']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdInputNumber, self).__init__(**args)
