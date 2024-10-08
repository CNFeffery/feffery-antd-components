# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdAffix(Component):
    """An AntdAffix component.
固钉组件AntdAffix

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- children (a list of or a singular dash component, string or number; optional):
    组件型，内嵌元素.

- style (dict; optional):
    当前组件css样式.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- offsetBottom (number; optional):
    触发固钉效果的视窗底部距离像素阈值.

- offsetTop (number; default 0):
    触发固钉效果的视窗顶部距离像素阈值  默认值：`0`.

- target (string; optional):
    滚动事件监听的特定目标容器id.

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
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdAffix'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, offsetBottom=Component.UNDEFINED, offsetTop=Component.UNDEFINED, target=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'children', 'style', 'className', 'offsetBottom', 'offsetTop', 'target', 'data-*', 'aria-*', 'loading_state']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'children', 'style', 'className', 'offsetBottom', 'offsetTop', 'target', 'data-*', 'aria-*', 'loading_state']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdAffix, self).__init__(children=children, **args)
