# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdTag(Component):
    """An AntdTag component.
标签组件AntdTag

Keyword arguments:

- id (string; optional):
    组件唯一id.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- bordered (boolean; default True):
    是否渲染边框  默认值：`True`.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- closeCounts (number; default 0):
    `closeIcon=True`时，监听关闭按钮累计点击次数  默认值：`0`.

- closeIcon (boolean; default False):
    是否渲染关闭按钮  默认值：`False`.

- color (string; optional):
    标签颜色，可使用内置的若干种颜色主题，也可使用任何合法的css颜色值.

- content (a list of or a singular dash component, string or number; optional):
    组件型，标签内容.

- data-* (string; optional):
    `data-*`格式属性通配.

- href (string; optional):
    标签点击跳转链接地址.

- icon (a list of or a singular dash component, string or number; optional):
    组件型，标签前缀图标.

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

- style (dict; optional):
    当前组件css样式.

- target (string; default '_blank'):
    标签链接跳转行为."""
    _children_props = ['content', 'icon']
    _base_nodes = ['content', 'icon', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdTag'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, content=Component.UNDEFINED, icon=Component.UNDEFINED, color=Component.UNDEFINED, href=Component.UNDEFINED, target=Component.UNDEFINED, bordered=Component.UNDEFINED, closeIcon=Component.UNDEFINED, closeCounts=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'aria-*', 'bordered', 'className', 'closeCounts', 'closeIcon', 'color', 'content', 'data-*', 'href', 'icon', 'key', 'loading_state', 'style', 'target']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'aria-*', 'bordered', 'className', 'closeCounts', 'closeIcon', 'color', 'content', 'data-*', 'href', 'icon', 'key', 'loading_state', 'style', 'target']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdTag, self).__init__(**args)
