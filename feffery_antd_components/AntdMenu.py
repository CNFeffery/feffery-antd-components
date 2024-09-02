# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdMenu(Component):
    """An AntdMenu component.
导航菜单组件AntdMenu

Keyword arguments:

- id (string; optional):
    组件唯一id.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- currentItem (dict; optional):
    监听当前已选中菜单项信息.

- currentItemPath (list; optional):
    监听当前已选中菜单项路径信息.

- currentKey (string; optional):
    监听或设置当前已选中菜单项key值.

- currentKeyPath (list; optional):
    监听当前已选中菜单项key值路径信息.

- data-* (string; optional):
    `data-*`格式属性通配.

- defaultOpenKeys (list of strings; optional):
    默认展开的菜单项key值.

- defaultSelectedKey (string; optional)

- inlineCollapsed (boolean; default False):
    当前菜单是否折叠，仅inline模式下有效  默认值：`False`.

- inlineIndent (number; default 24):
    inline模式下，子菜单相对上一级的像素缩进宽度  默认值：`24`.

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

- menuItemKeyToTitle (dict with strings as keys and values of type a list of or a singular dash component, string or number; optional):
    为指定节点定义组件型菜单项标题，优先级高于menuItems中对应节点的title属性.

- menuItems (list; optional):
    导航菜单数据结构.

- mode (a value equal to: 'vertical', 'horizontal', 'inline'; default 'vertical'):
    显示模式，可选项有`'vertical'`、`'horizontal'`、`'inline'`  默认值：`'vertical'`.

- onlyExpandCurrentSubMenu (boolean; default False):
    是否只展开当前选中项的父级菜单  默认值：`False`.

- openKeys (list of strings; optional):
    监听或设置当前已展开子菜单项key值.

- persisted_props (list of a value equal to: 'currentKey', 'openKeys's; default ['currentKey', 'openKeys']):
    当前组件启用持久化的属性值数组，可选项有`'currentKey'`、`'openKeys'`
    默认值：`['currentKey', 'openKeys']`.

- persistence (boolean | string | number; optional):
    是否为当前组件开启持久化功能.

- persistence_type (a value equal to: 'local', 'session', 'memory'; default 'local'):
    当前组件的属性持久化存储类型  默认值：`'local'`.

- popupContainer (a value equal to: 'parent', 'body'; default 'body'):
    菜单展开层锚定策略，可选项有`'parent'`、`'body'`  默认值：`'body'`.

- renderCollapsedButton (boolean; default False):
    是否渲染菜单折叠状态控制按钮  默认值：`False`.

- style (dict; optional):
    当前组件css样式.

- theme (a value equal to: 'light', 'dark'; default 'light'):
    主题，可选项有`'light'`、`'dark'`  默认值：`'light'`.

- triggerSubMenuAction (a value equal to: 'hover', 'click'; default 'hover'):
    `SubMenu`展开/关闭的触发行为，可选项有`'hover'`、`'click'`，`mode='inline'`下无效
    默认值：`'hover'`."""
    _children_props = ['menuItemKeyToTitle{}']
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdMenu'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, menuItems=Component.UNDEFINED, menuItemKeyToTitle=Component.UNDEFINED, mode=Component.UNDEFINED, theme=Component.UNDEFINED, currentKey=Component.UNDEFINED, currentItem=Component.UNDEFINED, currentKeyPath=Component.UNDEFINED, currentItemPath=Component.UNDEFINED, openKeys=Component.UNDEFINED, onlyExpandCurrentSubMenu=Component.UNDEFINED, defaultOpenKeys=Component.UNDEFINED, defaultSelectedKey=Component.UNDEFINED, renderCollapsedButton=Component.UNDEFINED, popupContainer=Component.UNDEFINED, inlineCollapsed=Component.UNDEFINED, inlineIndent=Component.UNDEFINED, triggerSubMenuAction=Component.UNDEFINED, loading_state=Component.UNDEFINED, persistence=Component.UNDEFINED, persisted_props=Component.UNDEFINED, persistence_type=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'aria-*', 'className', 'currentItem', 'currentItemPath', 'currentKey', 'currentKeyPath', 'data-*', 'defaultOpenKeys', 'defaultSelectedKey', 'inlineCollapsed', 'inlineIndent', 'key', 'loading_state', 'menuItemKeyToTitle', 'menuItems', 'mode', 'onlyExpandCurrentSubMenu', 'openKeys', 'persisted_props', 'persistence', 'persistence_type', 'popupContainer', 'renderCollapsedButton', 'style', 'theme', 'triggerSubMenuAction']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'aria-*', 'className', 'currentItem', 'currentItemPath', 'currentKey', 'currentKeyPath', 'data-*', 'defaultOpenKeys', 'defaultSelectedKey', 'inlineCollapsed', 'inlineIndent', 'key', 'loading_state', 'menuItemKeyToTitle', 'menuItems', 'mode', 'onlyExpandCurrentSubMenu', 'openKeys', 'persisted_props', 'persistence', 'persistence_type', 'popupContainer', 'renderCollapsedButton', 'style', 'theme', 'triggerSubMenuAction']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdMenu, self).__init__(**args)
