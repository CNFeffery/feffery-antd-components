# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdBreadcrumb(Component):
    """An AntdBreadcrumb component.
面包屑组件AntdBreadcrumb

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- style (dict; optional):
    当前组件css样式.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- items (list of dicts; optional):
    面包屑节点数据结构.

    `items` is a list of dicts with keys:

    - title (string; optional):
        节点标题.

    - key (string; optional):
        节点唯一key值.

    - href (string; optional):
        节点链接地址.

    - target (string; optional):
        节点链接跳转行为.

    - icon (string; optional):
        节点前缀图标名称，与`iconRenderer`方式相关联，`'AntdIcon'`方式下同AntdIcon的icon参数，`'fontawesome'`方式下代表图标的css类名.

    - iconRenderer (a value equal to: 'AntdIcon', 'fontawesome'; optional):
        前缀图标渲染方式，可选项有`'AntdIcon'`、`'fontawesome'`  默认值：`'AntdIcon'`.

    - menuItems (list of dicts; optional):
        为当前节点设置下拉菜单生成所需的数据结构.

        `menuItems` is a list of dicts with keys:

        - title (string; optional):

            下拉菜单节点标题.

        - href (string; optional):

            下拉菜单节点链接地址.

        - target (string; optional):

            下拉菜单节点链接跳转方式.

        - disabled (boolean; optional):

            是否禁用当前下拉菜单节点.

        - icon (string; optional):

            下拉菜单节点前缀图标名称，与`iconRenderer`方式相关联，`'AntdIcon'`方式下同AntdIcon的icon参数，`'fontawesome'`方式下代表图标的css类名.

        - iconRenderer (a value equal to: 'AntdIcon', 'fontawesome'; optional):

            前缀图标渲染方式，可选项有`'AntdIcon'`、`'fontawesome'`  默认值：`'AntdIcon'`.

- separator (a list of or a singular dash component, string or number; default '/'):
    组件型，分隔符  默认值：`'/'`.

- clickedItem (dict; optional):
    监听面包屑节点点击事件.

    `clickedItem` is a dict with keys:

    - itemTitle (string; optional):
        被点击节点标题.

    - itemKey (string; optional):
        被点击节点key值.

    - timestamp (number; optional):
        点击事件时间戳.

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
    _children_props = ['separator']
    _base_nodes = ['separator', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdBreadcrumb'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, items=Component.UNDEFINED, separator=Component.UNDEFINED, clickedItem=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'style', 'className', 'items', 'separator', 'clickedItem', 'data-*', 'aria-*', 'loading_state']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'style', 'className', 'items', 'separator', 'clickedItem', 'data-*', 'aria-*', 'loading_state']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdBreadcrumb, self).__init__(**args)
