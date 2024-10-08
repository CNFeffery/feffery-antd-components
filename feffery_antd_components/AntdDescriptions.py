# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdDescriptions(Component):
    """An AntdDescriptions component.
描述列表组件AntdDescriptions

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- children (a list of or a singular dash component, string or number; optional):
    组件型，传入内部各描述列表子项.

- style (dict; optional):
    当前组件css样式.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- items (list of dicts; optional):
    配置描述列表子项，优先级高于`children`.

    `items` is a list of dicts with keys:

    - label (a list of or a singular dash component, string or number; optional):
        组件型，子项标题内容.

    - span (number; optional):
        子项所占宽度份数  默认值：`1`.

    - children (a list of or a singular dash component, string or number; optional):
        组件型，子项内容.

    - labelStyle (dict; optional):
        子项标签css样式.

    - contentStyle (dict; optional):
        子项内容css样式.

    - style (dict; optional):
        子项css样式.

    - className (string; optional):
        子项css类名.

- title (a list of or a singular dash component, string or number; optional):
    组件型，标题内容.

- column (dict; default 3):
    每行显示的字段项数量，支持响应式  默认值：`3`.

    `column` is a number | dict with keys:

    - xxl (number; optional)

    - xl (number; optional)

    - lg (number; optional)

    - md (number; optional)

    - sm (number; optional)

    - xs (number; optional)

- bordered (boolean; default False):
    是否显示边框  默认值：`False`.

- size (a value equal to: 'small', 'default', 'large'; default 'default'):
    整体尺寸规格，可选项有`'small'`、`'default'`、`'large'`  默认值：`'default'`.

- layout (a value equal to: 'horizontal', 'vertical'; default 'horizontal'):
    布局方式，可选项有`'horizontal'`、`'vertical'`  默认值：`'horizontal'`.

- labelStyle (dict; optional):
    统一设置字段标签css样式.

- contentStyle (dict; optional):
    统一设置字段内容css样式.

- extra (a list of or a singular dash component, string or number; optional):
    组件型，设置操作区域，显示在右上方.

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
        Holds the name of the component that is loading."""
    _children_props = ['items[].label', 'items[].children', 'title', 'extra']
    _base_nodes = ['title', 'extra', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdDescriptions'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, items=Component.UNDEFINED, title=Component.UNDEFINED, column=Component.UNDEFINED, bordered=Component.UNDEFINED, size=Component.UNDEFINED, layout=Component.UNDEFINED, labelStyle=Component.UNDEFINED, contentStyle=Component.UNDEFINED, extra=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'children', 'style', 'className', 'items', 'title', 'column', 'bordered', 'size', 'layout', 'labelStyle', 'contentStyle', 'extra', 'data-*', 'aria-*', 'loading_state']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'children', 'style', 'className', 'items', 'title', 'column', 'bordered', 'size', 'layout', 'labelStyle', 'contentStyle', 'extra', 'data-*', 'aria-*', 'loading_state']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdDescriptions, self).__init__(children=children, **args)
