# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdSwitch(Component):
    """An AntdSwitch component.
开关组件AntdSwitch

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

- disabled (boolean; default False):
    是否禁用当前组件  默认值：`False`.

- autoFocus (boolean; default False):
    是否自动获取焦点  默认值：`False`.

- checked (boolean; optional):
    监听或设置当前开关是否打开.

- checkedChildren (a list of or a singular dash component, string or number; optional):
    组件型，打开状态下内嵌内容.

- unCheckedChildren (a list of or a singular dash component, string or number; optional):
    组件型，关闭状态下内嵌内容.

- size (a value equal to: 'default', 'small'; default 'default'):
    当前组件尺寸规格，可选项有`'small'`、`'middle'`  默认值：`'default'`.

- loading (boolean; default False):
    是否渲染加载中状态  默认值：`False`.

- readOnly (boolean; default False):
    是否渲染为只读状态  默认值：`False`.

- batchPropsNames (list of strings; optional):
    需要纳入[批量属性监听](/batch-props-values)的若干属性名.

- batchPropsValues (dict; optional):
    监听`batchPropsNames`中指定的若干属性值.

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

- persisted_props (list of a value equal to: 'checked's; default ['checked']):
    开启属性持久化功能的若干属性名，可选项有`'checked'`  默认值：`['checked']`.

- persistence_type (a value equal to: 'local', 'session', 'memory'; default 'local'):
    属性持久化存储类型，可选项有`'local'`（本地持久化），`'session'`（会话持久化），`'memory'`（内存持久化）
    默认值：`'local'`."""
    _children_props = ['checkedChildren', 'unCheckedChildren']
    _base_nodes = ['checkedChildren', 'unCheckedChildren', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdSwitch'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, name=Component.UNDEFINED, disabled=Component.UNDEFINED, autoFocus=Component.UNDEFINED, checked=Component.UNDEFINED, checkedChildren=Component.UNDEFINED, unCheckedChildren=Component.UNDEFINED, size=Component.UNDEFINED, loading=Component.UNDEFINED, readOnly=Component.UNDEFINED, batchPropsNames=Component.UNDEFINED, batchPropsValues=Component.UNDEFINED, loading_state=Component.UNDEFINED, persistence=Component.UNDEFINED, persisted_props=Component.UNDEFINED, persistence_type=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'style', 'className', 'name', 'disabled', 'autoFocus', 'checked', 'checkedChildren', 'unCheckedChildren', 'size', 'loading', 'readOnly', 'batchPropsNames', 'batchPropsValues', 'data-*', 'aria-*', 'loading_state', 'persistence', 'persisted_props', 'persistence_type']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'style', 'className', 'name', 'disabled', 'autoFocus', 'checked', 'checkedChildren', 'unCheckedChildren', 'size', 'loading', 'readOnly', 'batchPropsNames', 'batchPropsValues', 'data-*', 'aria-*', 'loading_state', 'persistence', 'persisted_props', 'persistence_type']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdSwitch, self).__init__(**args)
