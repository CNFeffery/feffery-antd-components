# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdTabs(Component):
    """An AntdTabs component.
标签页组件AntdTabs

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- style (dict; optional):
    当前组件css样式.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- type (a value equal to: 'line', 'card', 'editable-card'; default 'line'):
    标签页类型，可选项有`'line'`、`'card'`、`'editable-card'`  默认值：`'line'`.

- items (list of dicts; optional):
    定义标签项.

    `items` is a list of dicts with keys:

    - label (a list of or a singular dash component, string or number; optional):
        组件型，标签页标题.

    - key (string; optional):
        标签页唯一识别id.

    - children (a list of or a singular dash component, string or number; optional):
        组件型，标签页内部元素.

    - closeIcon (boolean | a list of or a singular dash component, string or number; optional):
        `'editable-card'`型标签页可用，用于自定义关闭按钮，设置为`None`或`False`时会隐藏默认的关闭按钮.

    - destroyInactiveTabPane (boolean; optional):
        是否在当前标签页隐藏时，自动销毁当前标签页内部元素  默认值：`False`.

    - disabled (boolean; optional):
        是否禁用当前标签页  默认值：`False`.

    - forceRender (boolean; optional):
        初始化是否强制渲染当前标签页内部元素  默认值：`False`.

    - closable (boolean; optional):
        `'editable-card'`型标签页可用，控制当前标签页是否可被关闭  默认值：`True`.

    - contextMenu (list of dicts; optional):
        为当前标签页标题配置右键菜单相关参数.

        `contextMenu` is a list of dicts with keys:

        - key (string; optional):

            当前右键菜单项唯一标识id.

        - label (string; optional):

            当前右键菜单项标题.

        - icon (string; optional):

            当前右键菜单项前缀图标类型，`iconRenderer`为`'AntdIcon'`时同`AntdIcon`同名参数，`iconRenderer`为`'fontawesome'`时为css类名.

        - iconRenderer (a value equal to: 'AntdIcon', 'fontawesome'; optional):

            当前右键菜单项前缀图标渲染方式，可选项有`'AntdIcon'`、`'fontawesome'`.

- itemKeys (list of strings; optional):
    监听当前各标签页`key`值，顺序与`items`一致.

- activeKey (string; optional):
    监听或设置当前激活的标签页对应`key`值.

- defaultActiveKey (string; optional):
    初始化激活的标签页对应`key`值.

- disabledTabKeys (list of strings; optional):
    呈现禁用状态的标签页`key`值数组，优先级高于`items`中各标签页的`disabled`设定.

- tabPosition (a value equal to: 'top', 'left', 'right', 'bottom'; default 'top'):
    标签页切换控件显示方位，可选项有`'top'`、`'left'`、`'right'`、`'bottom'`
    默认值：`'top'`.

- size (a value equal to: 'small', 'default', 'large'; default 'default'):
    当前组件尺寸规格，可选项有`'small'`、`'default'`、`'large'`  默认值：'default'.

- centered (boolean; default False):
    是否居中显示标签页切换控件  默认值：`False`.

- indicator (dict; optional):
    配置指示条长度及对齐方式.

    `indicator` is a dict with keys:

    - size (number; optional):
        指示条像素宽度，当传入负数时，表示在完整宽度基础上应减去的像素宽度，默认与标签卡片同宽.

    - align (a value equal to: 'start', 'center', 'end'; optional):
        指示条对齐方式，可选项有`'start'`、`'center'`、`'end'`.

- tabBarGutter (number; optional):
    标签卡片之间的像素间距.

- inkBarAnimated (boolean; default True):
    标签卡片切换是否添加动画效果  默认值：`True`.

- tabPaneAnimated (boolean; default False):
    标签内容切换是否添加动画效果  默认值：`False`.

- latestDeletePane (string; optional):
    监听最近一次删除操作对应的标签页`key`值.

- tabCloseCounts (number; default 0):
    标签页关闭按钮累计点击次数  默认值：`0`.

- tabBarLeftExtraContent (a list of or a singular dash component, string or number; optional):
    组件型，第一方位额外元素.

- tabBarRightExtraContent (a list of or a singular dash component, string or number; optional):
    组件型，第二方位额外元素.

- tabCount (number; optional):
    监听标签页数量.

- destroyInactiveTabPane (boolean; default False):
    统一设置是否自动销毁取消激活状态的标签页内部元素.

- clickedContextMenu (dict; optional):
    监听标签页标题右键菜单项相关点击事件.

    `clickedContextMenu` is a dict with keys:

    - tabKey (string; optional):
        被点击的右键菜单项对应标签页`key`值.

    - menuKey (string; optional):
        被点击的右键菜单项对应`key`值.

    - timestamp (number; optional):
        事件对应时间戳信息.

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
        Holds the name of the component that is loading.

- persistence (boolean | string | number; optional):
    是否开启[属性持久化](/prop-persistence).

- persisted_props (list of a value equal to: 'activeKey's; default ['activeKey']):
    开启属性持久化功能的若干属性名，可选项有`'activeKey'`  默认值：`['activeKey']`.

- persistence_type (a value equal to: 'local', 'session', 'memory'; default 'local'):
    属性持久化存储类型，可选项有`'local'`（本地持久化），`'session'`（会话持久化），`'memory'`（内存持久化）
    默认值：`'local'`."""
    _children_props = ['items[].label', 'items[].children', 'items[].closeIcon', 'tabBarLeftExtraContent', 'tabBarRightExtraContent']
    _base_nodes = ['tabBarLeftExtraContent', 'tabBarRightExtraContent', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdTabs'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, type=Component.UNDEFINED, items=Component.UNDEFINED, itemKeys=Component.UNDEFINED, activeKey=Component.UNDEFINED, defaultActiveKey=Component.UNDEFINED, disabledTabKeys=Component.UNDEFINED, tabPosition=Component.UNDEFINED, size=Component.UNDEFINED, centered=Component.UNDEFINED, indicator=Component.UNDEFINED, tabBarGutter=Component.UNDEFINED, inkBarAnimated=Component.UNDEFINED, tabPaneAnimated=Component.UNDEFINED, latestDeletePane=Component.UNDEFINED, tabCloseCounts=Component.UNDEFINED, tabBarLeftExtraContent=Component.UNDEFINED, tabBarRightExtraContent=Component.UNDEFINED, tabCount=Component.UNDEFINED, destroyInactiveTabPane=Component.UNDEFINED, clickedContextMenu=Component.UNDEFINED, loading_state=Component.UNDEFINED, persistence=Component.UNDEFINED, persisted_props=Component.UNDEFINED, persistence_type=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'style', 'className', 'type', 'items', 'itemKeys', 'activeKey', 'defaultActiveKey', 'disabledTabKeys', 'tabPosition', 'size', 'centered', 'indicator', 'tabBarGutter', 'inkBarAnimated', 'tabPaneAnimated', 'latestDeletePane', 'tabCloseCounts', 'tabBarLeftExtraContent', 'tabBarRightExtraContent', 'tabCount', 'destroyInactiveTabPane', 'clickedContextMenu', 'data-*', 'aria-*', 'loading_state', 'persistence', 'persisted_props', 'persistence_type']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'style', 'className', 'type', 'items', 'itemKeys', 'activeKey', 'defaultActiveKey', 'disabledTabKeys', 'tabPosition', 'size', 'centered', 'indicator', 'tabBarGutter', 'inkBarAnimated', 'tabPaneAnimated', 'latestDeletePane', 'tabCloseCounts', 'tabBarLeftExtraContent', 'tabBarRightExtraContent', 'tabCount', 'destroyInactiveTabPane', 'clickedContextMenu', 'data-*', 'aria-*', 'loading_state', 'persistence', 'persisted_props', 'persistence_type']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdTabs, self).__init__(**args)
