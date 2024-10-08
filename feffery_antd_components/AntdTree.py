# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdTree(Component):
    """An AntdTree component.
树形控件组件AntdTree

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- style (dict; optional):
    当前组件css样式.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- treeDataMode (a value equal to: 'tree', 'flat'; default 'tree'):
    对应`treeData`格式的渲染模式，可选项有`'tree'`（树形模式）、`'flat'`（扁平模式）
    默认值：`'tree'`.

- treeData (list; optional):
    定义构造树所需的数据结构，与`treeDataMode`一致.

- treeNodeKeyToTitle (dict with strings as keys and values of type a list of or a singular dash component, string or number; optional):
    针对树结构中的指定节点，定义作为标题的组件型内容，优先级高于`treeData`中对应的`title`值.

- showIcon (boolean; default False):
    是否渲染节点额外图标  默认值：`False`.

- selectable (boolean; default True):
    节点是否可点击选择  默认值：`True`.

- multiple (boolean; default False):
    节点是否允许多选  默认值：`False`.

- checkable (boolean; default False):
    节点是否可勾选  默认值：`False`.

- defaultExpandAll (boolean; default False):
    初始化是否展开全部节点  默认值：`False`.

- expandedKeys (list of strings; optional):
    监听或设置已展开节点`key`值数组.

- defaultExpandedKeys (list of strings; optional):
    初始化已展开节点`key`值数组.

- defaultExpandParent (boolean; default False):
    初始化是否展开处于展开状态节点的父节点  默认值：`True`.

- selectedKeys (list of strings; optional):
    监听或设置已选择节点`key`值数组.

- defaultSelectedKeys (list of strings; optional):
    初始化已选择节点`key`值数组.

- checkedKeys (list of strings; optional):
    监听或设置已勾选节点`key`值数组.

- defaultCheckedKeys (list of strings; optional):
    初始化已勾选节点`key`值数组.

- halfCheckedKeys (list of strings; optional):
    监听或设置处于半勾选状态下的节点`key`值数组.

- checkStrictly (boolean; default False):
    节点与其后代节点之间的选择行为是否彼此独立  默认值：`False`.

- showLine (dict; default { 'showLeafIcon': False }):
    是否显示连接线.

    `showLine` is a boolean | dict with keys:

    - showLeafIcon (boolean; optional):
        叶节点是否渲染前缀图标.

- switcherIcon (a list of or a singular dash component, string or number; optional):
    组件型，自定义树节点的展开/折叠图标.

- height (number; optional):
    虚拟滚动模式下的组件最大像素高度，未设置时则不启用虚拟滚动功能.

- draggable (boolean; default False):
    节点是否可拖拽  默认值：`False`.

- showDragIcon (boolean; default True):
    开启节点拖拽功能后，是否为节点渲染拖拽图标  默认值：`True`.

- dragInSameLevel (boolean; default False):
    当`draggable=True`时，是否仅允许同级拖拽  默认值：`False`.

- dragDisabledKeys (list of strings; optional):
    禁止进行拖拽调整的节点`key`值数组  默认值：`[]`.

- dropDisabledKeys (list of strings; optional):
    禁止进行拖拽放置的节点`key`值数组  默认值：`[]`.

- draggedNodeKey (string; optional):
    监听最近一次被拖拽节点`key`值信息.

- clickedContextMenu (dict; optional):
    监听节点右键菜单项点击事件.

    `clickedContextMenu` is a dict with keys:

    - nodeKey (string; optional):
        事件对应节点`key`值.

    - menuKey (string; optional):
        事件对应右键菜单项`key`值.

    - timestamp (number; optional):
        事件对应时间戳信息.

- enableNodeFavorites (boolean; default False):
    是否启用节点收藏功能  默认值：`False`.

- favoritedKeys (list of strings; optional):
    监听或设置已收藏节点`key`值数组.

- scrollTarget (dict; optional):
    执行滚动到指定节点的动作，每次执行完毕后会重置为空值.

    `scrollTarget` is a dict with keys:

    - key (string; required):
        滚动目标节点`key`值.

    - align (a value equal to: 'top', 'bottom', 'auto'; optional):
        滚动目标节点对齐位置，可选项有`'top'`、`'bottom'`、`'auto'`  默认值：`'auto'`.

    - offset (number; optional):
        滚动后的像素偏移量.

- searchKeyword (string | list of strings; optional):
    快捷树搜索功能对应的单个关键词，或由多个关键词构成的数组.

- caseSensitive (boolean; default True):
    针对`searchKeyword`，是否大小写敏感  默认值：`True`.

- highlightStyle (dict; default {    fontWeight: 'bold',    backgroundColor: 'transparent',    padding: 0,    color: '#ff5500'}):
    快捷树搜索关键词匹配部分的高亮样式.

- nodeCheckedSuffix (a list of or a singular dash component, string or number; optional):
    组件型，节点勾选状态下的后缀元素.

- nodeUncheckedSuffix (a list of or a singular dash component, string or number; optional):
    组件型，节点非勾选状态下的后缀元素.

- nodeCheckedStyle (dict; optional):
    节点勾选状态下的css样式.

- nodeUncheckedStyle (dict; optional):
    节点非勾选状态下的css样式.

- enableAsyncLoad (boolean; default False):
    是否开启子节点异步加载功能，开启后无`children`属性，且未设置`isLeaf`为`True`的节点将可展开并触发`loadingNode`事件更新
    默认值：`False`.

- loadingNode (dict; optional):
    监听触发异步数据加载的节点展开事件信息.

- batchPropsNames (list of strings; optional):
    需要纳入[批量属性监听](/batch-props-values)的若干属性名.

- batchPropsValues (dict; optional):
    监听`batchPropsNames`中指定的若干属性值.

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

- persisted_props (list of a value equal to: 'selectedKeys', 'checkedKeys', 'expandedKeys', 'halfCheckedKeys's; default ['selectedKeys', 'checkedKeys', 'expandedKeys', 'halfCheckedKeys']):
    开启属性持久化功能的若干属性名，可选项有`'selectedKeys'`、`'checkedKeys'`、`'expandedKeys'`、`'halfCheckedKeys'`
    默认值：`['selectedKeys', 'checkedKeys', 'expandedKeys',
    'halfCheckedKeys']`.

- persistence_type (a value equal to: 'local', 'session', 'memory'; default 'local'):
    属性持久化存储类型，可选项有`'local'`（本地持久化），`'session'`（会话持久化），`'memory'`（内存持久化）
    默认值：`'local'`."""
    _children_props = ['treeNodeKeyToTitle{}', 'switcherIcon', 'nodeCheckedSuffix', 'nodeUncheckedSuffix']
    _base_nodes = ['switcherIcon', 'nodeCheckedSuffix', 'nodeUncheckedSuffix', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdTree'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, treeDataMode=Component.UNDEFINED, treeData=Component.UNDEFINED, treeNodeKeyToTitle=Component.UNDEFINED, showIcon=Component.UNDEFINED, selectable=Component.UNDEFINED, multiple=Component.UNDEFINED, checkable=Component.UNDEFINED, defaultExpandAll=Component.UNDEFINED, expandedKeys=Component.UNDEFINED, defaultExpandedKeys=Component.UNDEFINED, defaultExpandParent=Component.UNDEFINED, selectedKeys=Component.UNDEFINED, defaultSelectedKeys=Component.UNDEFINED, checkedKeys=Component.UNDEFINED, defaultCheckedKeys=Component.UNDEFINED, halfCheckedKeys=Component.UNDEFINED, checkStrictly=Component.UNDEFINED, showLine=Component.UNDEFINED, switcherIcon=Component.UNDEFINED, height=Component.UNDEFINED, draggable=Component.UNDEFINED, showDragIcon=Component.UNDEFINED, dragInSameLevel=Component.UNDEFINED, dragDisabledKeys=Component.UNDEFINED, dropDisabledKeys=Component.UNDEFINED, draggedNodeKey=Component.UNDEFINED, clickedContextMenu=Component.UNDEFINED, enableNodeFavorites=Component.UNDEFINED, favoritedKeys=Component.UNDEFINED, scrollTarget=Component.UNDEFINED, searchKeyword=Component.UNDEFINED, caseSensitive=Component.UNDEFINED, highlightStyle=Component.UNDEFINED, nodeCheckedSuffix=Component.UNDEFINED, nodeUncheckedSuffix=Component.UNDEFINED, nodeCheckedStyle=Component.UNDEFINED, nodeUncheckedStyle=Component.UNDEFINED, enableAsyncLoad=Component.UNDEFINED, loadingNode=Component.UNDEFINED, batchPropsNames=Component.UNDEFINED, batchPropsValues=Component.UNDEFINED, loading_state=Component.UNDEFINED, persistence=Component.UNDEFINED, persisted_props=Component.UNDEFINED, persistence_type=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'style', 'className', 'treeDataMode', 'treeData', 'treeNodeKeyToTitle', 'showIcon', 'selectable', 'multiple', 'checkable', 'defaultExpandAll', 'expandedKeys', 'defaultExpandedKeys', 'defaultExpandParent', 'selectedKeys', 'defaultSelectedKeys', 'checkedKeys', 'defaultCheckedKeys', 'halfCheckedKeys', 'checkStrictly', 'showLine', 'switcherIcon', 'height', 'draggable', 'showDragIcon', 'dragInSameLevel', 'dragDisabledKeys', 'dropDisabledKeys', 'draggedNodeKey', 'clickedContextMenu', 'enableNodeFavorites', 'favoritedKeys', 'scrollTarget', 'searchKeyword', 'caseSensitive', 'highlightStyle', 'nodeCheckedSuffix', 'nodeUncheckedSuffix', 'nodeCheckedStyle', 'nodeUncheckedStyle', 'enableAsyncLoad', 'loadingNode', 'batchPropsNames', 'batchPropsValues', 'data-*', 'aria-*', 'loading_state', 'persistence', 'persisted_props', 'persistence_type']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'style', 'className', 'treeDataMode', 'treeData', 'treeNodeKeyToTitle', 'showIcon', 'selectable', 'multiple', 'checkable', 'defaultExpandAll', 'expandedKeys', 'defaultExpandedKeys', 'defaultExpandParent', 'selectedKeys', 'defaultSelectedKeys', 'checkedKeys', 'defaultCheckedKeys', 'halfCheckedKeys', 'checkStrictly', 'showLine', 'switcherIcon', 'height', 'draggable', 'showDragIcon', 'dragInSameLevel', 'dragDisabledKeys', 'dropDisabledKeys', 'draggedNodeKey', 'clickedContextMenu', 'enableNodeFavorites', 'favoritedKeys', 'scrollTarget', 'searchKeyword', 'caseSensitive', 'highlightStyle', 'nodeCheckedSuffix', 'nodeUncheckedSuffix', 'nodeCheckedStyle', 'nodeUncheckedStyle', 'enableAsyncLoad', 'loadingNode', 'batchPropsNames', 'batchPropsValues', 'data-*', 'aria-*', 'loading_state', 'persistence', 'persisted_props', 'persistence_type']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdTree, self).__init__(**args)
