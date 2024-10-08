# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdSider(Component):
    """An AntdSider component.
侧边栏组件AntdSider

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

- collapsed (boolean; optional):
    当前是否收起.

- collapsedWidth (number; default 80):
    收起后呈现的像素宽度，设置为0时会额外渲染特殊触发组件  默认值：`80`.

- collapsible (boolean; default False):
    是否可收起  默认值：`False`.

- reverseArrow (boolean; default False):
    是否翻转收起箭头的方向，通常在Sider位于右侧时使用  默认值：`False`.

- theme (a value equal to: 'light', 'dark'; default 'dark'):
    主题，可选项有`'light'`、`'dark'`  默认值：`'dark'`.

- width (number | string; default 200):
    侧边栏像素宽度  默认值：`200`.

- trigger (a list of or a singular dash component, string or number; optional):
    设置为`None`时不渲染自带的特殊触发组件.

- breakpoint (a value equal to: 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'; optional):
    侧边栏自动收起对应的响应式断点.

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
    _children_props = ['trigger']
    _base_nodes = ['trigger', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdSider'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, collapsed=Component.UNDEFINED, collapsedWidth=Component.UNDEFINED, collapsible=Component.UNDEFINED, reverseArrow=Component.UNDEFINED, theme=Component.UNDEFINED, width=Component.UNDEFINED, trigger=Component.UNDEFINED, breakpoint=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'children', 'style', 'className', 'collapsed', 'collapsedWidth', 'collapsible', 'reverseArrow', 'theme', 'width', 'trigger', 'breakpoint', 'data-*', 'aria-*', 'loading_state']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'children', 'style', 'className', 'collapsed', 'collapsedWidth', 'collapsible', 'reverseArrow', 'theme', 'width', 'trigger', 'breakpoint', 'data-*', 'aria-*', 'loading_state']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdSider, self).__init__(children=children, **args)
