# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args

ComponentSingleType = typing.Union[str, int, float, Component, None]
ComponentType = typing.Union[
    ComponentSingleType,
    typing.Sequence[ComponentSingleType],
]

NumberType = typing.Union[
    typing.SupportsFloat, typing.SupportsInt, typing.SupportsComplex
]


class AntdMenu(Component):
    """An AntdMenu component.
导航菜单组件AntdMenu

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- expandIcon (dict; optional):
    自定义展开图标，建议仅在`mode='inline'`时使用字典类型.

    `expandIcon` is a a list of or a singular dash component, string
    or number | dict with keys:

    - expand (a list of or a singular dash component, string or number; optional):
        展开图标.

    - collapse (a list of or a singular dash component, string or number; optional):
        收起图标.

- menuItems (list; optional):
    导航菜单数据结构.

- menuItemKeyToTitle (dict with strings as keys and values of type a list of or a singular dash component, string or number; optional):
    为指定节点定义组件型菜单项标题，优先级高于menuItems中对应节点的title属性.

- menuItemKeyToIcon (dict with strings as keys and values of type a list of or a singular dash component, string or number; optional):
    为指定节点定义组件型菜单项图标元素，优先级高于menuItems中对应节点的icon属性.

- mode (a value equal to: 'vertical', 'horizontal', 'inline'; default 'vertical'):
    显示模式，可选项有`'vertical'`、`'horizontal'`、`'inline'` 默认值：`'vertical'`.

- theme (a value equal to: 'light', 'dark'; default 'light'):
    主题，可选项有`'light'`、`'dark'` 默认值：`'light'`.

- currentKey (string; optional):
    监听或设置当前已选中菜单项key值.

- currentItem (dict; optional):
    监听当前已选中菜单项信息.

- currentKeyPath (list; optional):
    监听当前已选中菜单项key值路径信息.

- currentItemPath (list; optional):
    监听当前已选中菜单项路径信息.

- openKeys (list of strings; optional):
    监听或设置当前已展开子菜单项key值.

- onlyExpandCurrentSubMenu (boolean; default False):
    是否只展开当前选中项的父级菜单 默认值：`False`.

- defaultOpenKeys (list of strings; optional):
    默认展开的菜单项key值.

- defaultSelectedKey (string; optional)

- renderCollapsedButton (boolean; default False):
    是否渲染菜单折叠状态控制按钮 默认值：`False`.

- popupContainer (a value equal to: 'parent', 'body'; default 'body'):
    菜单展开层锚定策略，可选项有`'parent'`、`'body'` 默认值：`'body'`.

- inlineCollapsed (boolean; optional):
    当前菜单是否折叠，仅inline模式下有效 默认值：`False`.

- inlineIndent (number; default 24):
    inline模式下，子菜单相对上一级的像素缩进宽度 默认值：`24`.

- triggerSubMenuAction (a value equal to: 'hover', 'click'; default 'hover'):
    `SubMenu`展开/关闭的触发行为，可选项有`'hover'`、`'click'`，`mode='inline'`下无效
    默认值：`'hover'`.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- persistence (boolean | string | number; optional):
    是否为当前组件开启持久化功能.

- persisted_props (list of a value equal to: 'currentKey', 'openKeys's; optional):
    当前组件启用持久化的属性值数组，可选项有`'currentKey'`、`'openKeys'`
    默认值：`['currentKey', 'openKeys']`.

- persistence_type (a value equal to: 'local', 'session', 'memory'; optional):
    当前组件的属性持久化存储类型 默认值：`'local'`."""
    _children_props: typing.List[str] = ['expandIcon', 'expandIcon.expand', 'expandIcon.collapse', 'menuItemKeyToTitle{}', 'menuItemKeyToIcon{}']
    _base_nodes = ['expandIcon', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdMenu'
    ExpandIcon = TypedDict(
        "ExpandIcon",
            {
            "expand": NotRequired[ComponentType],
            "collapse": NotRequired[ComponentType]
        }
    )


    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        expandIcon: typing.Optional[typing.Union[ComponentType, "ExpandIcon"]] = None,
        menuItems: typing.Optional[typing.Sequence] = None,
        menuItemKeyToTitle: typing.Optional[typing.Dict[typing.Union[str, float, int], ComponentType]] = None,
        menuItemKeyToIcon: typing.Optional[typing.Dict[typing.Union[str, float, int], ComponentType]] = None,
        mode: typing.Optional[Literal["vertical", "horizontal", "inline"]] = None,
        theme: typing.Optional[Literal["light", "dark"]] = None,
        currentKey: typing.Optional[str] = None,
        currentItem: typing.Optional[dict] = None,
        currentKeyPath: typing.Optional[typing.Sequence] = None,
        currentItemPath: typing.Optional[typing.Sequence] = None,
        openKeys: typing.Optional[typing.Sequence[str]] = None,
        onlyExpandCurrentSubMenu: typing.Optional[bool] = None,
        defaultOpenKeys: typing.Optional[typing.Sequence[str]] = None,
        defaultSelectedKey: typing.Optional[str] = None,
        renderCollapsedButton: typing.Optional[bool] = None,
        popupContainer: typing.Optional[Literal["parent", "body"]] = None,
        inlineCollapsed: typing.Optional[bool] = None,
        inlineIndent: typing.Optional[NumberType] = None,
        triggerSubMenuAction: typing.Optional[Literal["hover", "click"]] = None,
        persistence: typing.Optional[typing.Union[bool, str, NumberType]] = None,
        persisted_props: typing.Optional[typing.Sequence[Literal["currentKey", "openKeys"]]] = None,
        persistence_type: typing.Optional[Literal["local", "session", "memory"]] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'style', 'className', 'expandIcon', 'menuItems', 'menuItemKeyToTitle', 'menuItemKeyToIcon', 'mode', 'theme', 'currentKey', 'currentItem', 'currentKeyPath', 'currentItemPath', 'openKeys', 'onlyExpandCurrentSubMenu', 'defaultOpenKeys', 'defaultSelectedKey', 'renderCollapsedButton', 'popupContainer', 'inlineCollapsed', 'inlineIndent', 'triggerSubMenuAction', 'data-*', 'aria-*', 'persistence', 'persisted_props', 'persistence_type']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'style', 'className', 'expandIcon', 'menuItems', 'menuItemKeyToTitle', 'menuItemKeyToIcon', 'mode', 'theme', 'currentKey', 'currentItem', 'currentKeyPath', 'currentItemPath', 'openKeys', 'onlyExpandCurrentSubMenu', 'defaultOpenKeys', 'defaultSelectedKey', 'renderCollapsedButton', 'popupContainer', 'inlineCollapsed', 'inlineIndent', 'triggerSubMenuAction', 'data-*', 'aria-*', 'persistence', 'persisted_props', 'persistence_type']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdMenu, self).__init__(**args)

setattr(AntdMenu, "__init__", _explicitize_args(AntdMenu.__init__))
