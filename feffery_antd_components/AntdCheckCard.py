# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdCheckCard(Component):
    """An AntdCheckCard component.
选择卡片组件AntdCheckCard

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    组件型，内嵌元素.

- id (string; optional):
    组件唯一id.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- bordered (boolean; default True):
    是否显示边框  默认值：`True`.

- checked (boolean; optional):
    监听或设置是否被选中.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- data-* (string; optional):
    `data-*`格式属性通配.

- defaultChecked (boolean; optional):
    初始化是否被选中.

- disabled (boolean; default False):
    是否禁用当前组件  默认值：`False`.

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

- name (string; optional):
    配合`AntdForm`表单批量值搜集/控制功能使用，充当当前表单项的字段名，以`id`作为缺省值.

- persisted_props (list of a value equal to: 'checked's; default ['checked']):
    开启属性持久化功能的若干属性名，可选项有`'checked'`  默认值：`['checked']`.

- persistence (boolean | string | number; optional):
    是否开启[属性持久化](/prop-persistence).

- persistence_type (a value equal to: 'local', 'session', 'memory'; default 'local'):
    属性持久化存储类型，可选项有`'local'`（本地持久化），`'session'`（会话持久化），`'memory'`（内存持久化）
    默认值：`'local'`.

- readOnly (boolean; default False):
    是否渲染为只读状态  默认值：`False`.

- size (a value equal to: 'small', 'default', 'large'; default 'default'):
    当前组件尺寸规格，可选项有`'small'`、`'default'`、`'large'`  默认值：`'default'`.

- style (dict; optional):
    当前组件css样式.

- value (number | string; optional):
    当前选择卡片值."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdCheckCard'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, name=Component.UNDEFINED, checked=Component.UNDEFINED, defaultChecked=Component.UNDEFINED, bordered=Component.UNDEFINED, disabled=Component.UNDEFINED, size=Component.UNDEFINED, value=Component.UNDEFINED, readOnly=Component.UNDEFINED, loading_state=Component.UNDEFINED, persistence=Component.UNDEFINED, persisted_props=Component.UNDEFINED, persistence_type=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'aria-*', 'bordered', 'checked', 'className', 'data-*', 'defaultChecked', 'disabled', 'key', 'loading_state', 'name', 'persisted_props', 'persistence', 'persistence_type', 'readOnly', 'size', 'style', 'value']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'aria-*', 'bordered', 'checked', 'className', 'data-*', 'defaultChecked', 'disabled', 'key', 'loading_state', 'name', 'persisted_props', 'persistence', 'persistence_type', 'readOnly', 'size', 'style', 'value']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdCheckCard, self).__init__(children=children, **args)
