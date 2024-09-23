# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdSplitter(Component):
    """An AntdSplitter component.
分隔面板组件AntdSplitter

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- children (a list of or a singular dash component, string or number; optional):
    组件型，传入内部各分隔面板子项.

- style (dict; optional):
    当前组件css样式.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- layout (a value equal to: 'horizontal', 'vertical'; default 'horizontal'):
    布局方向，可选项有`'horizontal'`、`'vertical'`  默认值：`'horizontal'`.

- items (list of dicts; optional):
    配置分隔面板子项，优先级高于`children`.

    `items` is a list of dicts with keys:

    - children (a list of or a singular dash component, string or number; optional):
        组件型，内嵌元素.

    - className (string

      Or dict; optional):
        当前组件css类名，支持[动态css](/advanced-classname).

    - collapsible (dict; optional):
        是否可折叠  默认值：`False`.

        `collapsible` is a boolean | dict with keys:

        - end (boolean; optional)

        - start (boolean; optional)

    - defaultSize (number | string; optional):
        初始面板大小，支持数字`px`或者文字`'百分比%'`类型.

    - max (number | string; optional):
        最大阈值，支持数字`px`或者文字`'百分比%'`类型.

    - min (number | string; optional):
        最小阈值，支持数字`px`或者文字`'百分比%'`类型.

    - resizable (boolean; optional):
        是否开启拖拽伸缩  默认值：`True`.

    - size (number | string; optional):
        面板大小，支持数字`px`或者文字`'百分比%'`类型.

    - style (dict; optional):
        当前组件css样式.

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
        Holds which property is loading."""
    _children_props = ['items[].children']
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdSplitter'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, layout=Component.UNDEFINED, items=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'children', 'style', 'className', 'layout', 'items', 'data-*', 'aria-*', 'loading_state']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'children', 'style', 'className', 'layout', 'items', 'data-*', 'aria-*', 'loading_state']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdSplitter, self).__init__(children=children, **args)
