# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdOTP(Component):
    """An AntdOTP component.
一次性密码框组件AntdOTP

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

- value (string; optional):
    监听或设置已选值.

- defaultValue (string; optional):
    初始化已选值.

- disabled (boolean; default False):
    是否禁用当前组件  默认值：`False`.

- length (number; default 6):
    单体输入框数量  默认值：`6`.

- mask (boolean | string; default False):
    自定义遮罩字符  默认值：`False`.

- status (a value equal to: 'error', 'warning'; optional):
    控制校验状态，可选项有`'error'`、`'warning'`.

- size (a value equal to: 'small', 'middle', 'large'; default 'middle'):
    当前组件尺寸规格，可选项有`'small'`、`'middle'`、`'large'`  默认值：`'middle'`.

- variant (a value equal to: 'outlined', 'borderless', 'filled'; default 'outlined'):
    形态变体类型，可选项有`'outlined'`、`'borderless'`、`'filled'`，其中`'outlined'`等价于`bordered=True`，但优先级更高.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- loading_state (dict; optional)

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
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdOTP'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, name=Component.UNDEFINED, value=Component.UNDEFINED, defaultValue=Component.UNDEFINED, disabled=Component.UNDEFINED, length=Component.UNDEFINED, mask=Component.UNDEFINED, status=Component.UNDEFINED, size=Component.UNDEFINED, variant=Component.UNDEFINED, loading_state=Component.UNDEFINED, persistence=Component.UNDEFINED, persisted_props=Component.UNDEFINED, persistence_type=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'style', 'className', 'name', 'value', 'defaultValue', 'disabled', 'length', 'mask', 'status', 'size', 'variant', 'data-*', 'aria-*', 'loading_state', 'persistence', 'persisted_props', 'persistence_type']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'style', 'className', 'name', 'value', 'defaultValue', 'disabled', 'length', 'mask', 'status', 'size', 'variant', 'data-*', 'aria-*', 'loading_state', 'persistence', 'persisted_props', 'persistence_type']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdOTP, self).__init__(**args)
