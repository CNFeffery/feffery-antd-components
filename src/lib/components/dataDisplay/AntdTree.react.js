import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdTree = React.lazy(() => import(/* webpackChunkName: "data_entry" */ '../../fragments/dataDisplay/AntdTree.react'));

const AntdTree = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdTree {...props} />
        </Suspense>
    );
}

// 定义递归PropTypes
const PropTreeNodeShape = {
    // 标题
    title: PropTypes.string.isRequired,

    // 唯一识别id
    key: PropTypes.string.isRequired,

    // 可选，设置是否禁用
    disabled: PropTypes.bool,

    // 为当前选项设置前缀图标，同AntdIcon中的icon参数
    icon: PropTypes.string,

    // 针对icon参数值设置渲染方式，默认为'AntdIcon'即icon等价于AntdIcon的icon参数
    // 当设置为'fontawesome'时，icon参数对应fontawesome图标的css类名
    iconRenderer: PropTypes.oneOf(['AntdIcon', 'fontawesome']),

    // 可选，当树为checkable时，设置对应节点是否展示checkbox
    checkable: PropTypes.bool,

    // 可选，设置是否禁用checkbox
    disableCheckbox: PropTypes.bool,

    // 可选，设置对应节点是否可选
    selectable: PropTypes.bool,

    // 可选，当树为enableNodeFavorites时，设置对应节点是否收藏
    enableFavorites: PropTypes.bool,

    // 设置当前节点css样式
    style: PropTypes.object,

    // 设置当前节点css类
    className: PropTypes.string,

    // 为当前节点设置tooltip额外参数
    tooltipProps: PropTypes.exact({
        // 设置当前节点对应的tooltip内容
        title: PropTypes.string,

        // 设置当前节点对应的tooltip展开方位
        placement: PropTypes.oneOf([
            'top', 'left', 'right', 'bottom', 'topLeft',
            'topRight', 'bottomLeft', 'bottomRight'
        ])
    }),

    // 为当前节点设置右键菜单相关参数
    contextMenu: PropTypes.arrayOf(
        PropTypes.exact({
            // 为当前右键菜单选项设置唯一key值
            key: PropTypes.string,
            // 为当前右键菜单项设置标题内容
            label: PropTypes.string,
            // 为当前选项设置前缀图标，同AntdIcon中的icon参数
            icon: PropTypes.string,
            // 针对icon参数值设置渲染方式，默认为'AntdIcon'即icon等价于AntdIcon的icon参数
            // 当设置为'fontawesome'时，icon参数对应fontawesome图标的css类名
            iconRenderer: PropTypes.oneOf(['AntdIcon', 'fontawesome']),
        })
    ),

    // 可选，将显示 Dash 组件而不是标题
    // Optional, the Dash component that will be displayed instead of the title
    nodeComponent: PropTypes.oneOfType([
        // Dash 处理的 Dash 组件是一个节点
        // The Dash component handled by Dash is a node
        PropTypes.node,
        //尚未被 Dash 处理的 Dash 组件是具有 type、namespace 和 props 的对象
        // Dash components that have not yet been processed by Dash are objects with type, namespace, and props
        PropTypes.exact({
            type: PropTypes.string,
            namespace: PropTypes.string,
            props: PropTypes.object
        }),
    ]),
};

const PropTreeNode = PropTypes.shape(PropTreeNodeShape);
PropTreeNodeShape.children = PropTypes.arrayOf(PropTreeNode);

// 定义偏平结构节点类型
const PropFlatNodeShape = {
    // 标题
    title: PropTypes.string.isRequired,

    // 唯一识别id
    key: PropTypes.string.isRequired,

    // 可选，设置是否禁用
    disabled: PropTypes.bool,

    // 为当前选项设置前缀图标，同AntdIcon中的icon参数
    icon: PropTypes.string,

    // 针对icon参数值设置渲染方式，默认为'AntdIcon'即icon等价于AntdIcon的icon参数
    // 当设置为'fontawesome'时，icon参数对应fontawesome图标的css类名
    iconRenderer: PropTypes.oneOf(['AntdIcon', 'fontawesome']),

    // 可选，当树为checkable时，设置对应节点是否展示checkbox
    checkable: PropTypes.bool,

    // 可选，设置是否禁用checkbox
    disableCheckbox: PropTypes.bool,

    // 可选，设置对应节点是否可选
    selectable: PropTypes.bool,

    // 可选，当树为enableNodeFavorites时，设置对应节点是否收藏
    enableFavorites: PropTypes.bool,

    // 可选，设置对应节点的父节点key值
    parent: PropTypes.string,

    // 设置当前节点css样式
    style: PropTypes.object,

    // 设置当前节点css类
    className: PropTypes.string,

    // 为当前节点设置tooltip额外参数
    tooltipProps: PropTypes.exact({

        title: PropTypes.string,

        placement: PropTypes.oneOf([
            'top', 'left', 'right', 'bottom', 'topLeft',
            'topRight', 'bottomLeft', 'bottomRight'
        ])
    }),

    // 为当前节点设置右键菜单相关参数
    contextMenu: PropTypes.arrayOf(
        PropTypes.exact({
            // 为当前右键菜单选项设置唯一key值
            key: PropTypes.string,
            // 为当前右键菜单项设置标题内容
            label: PropTypes.string,
            // 为当前选项设置前缀图标，同AntdIcon中的icon参数
            icon: PropTypes.string,
            // 针对icon参数值设置渲染方式，默认为'AntdIcon'即icon等价于AntdIcon的icon参数
            // 当设置为'fontawesome'时，icon参数对应fontawesome图标的css类名
            iconRenderer: PropTypes.oneOf(['AntdIcon', 'fontawesome']),
        })
    ),

    // Dash component to be rendered as the node content
    // 将呈现为节点内容的 Dash 组件
    nodeComponent: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.exact({
            type: PropTypes.string,
            namespace: PropTypes.string,
            props: PropTypes.object
        }),
    ]),
};

// 定义参数或属性
AntdTree.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),

    // 自定义css字典
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 设置treeData模式，可选的有'tree'、'flat'，默认为'tree'
    treeDataMode: PropTypes.oneOf(['tree', 'flat']),

    // 组织树形结构的json结构数据
    treeData: PropTypes.oneOfType([
        // 树结构
        PropTypes.arrayOf(PropTypes.shape(PropTreeNodeShape)),
        // 偏平结构
        PropTypes.arrayOf(PropTypes.shape(PropFlatNodeShape))
    ]),

    // 用于针对具体key值对应的树节点定义组件型标题内容
    // 优先级高于treeData中对应节点的title属性
    treeNodeKeyToTitle: PropTypes.objectOf(PropTypes.node),

    // 设置是否渲染icon，默认为false
    showIcon: PropTypes.bool,

    // 设置是否允许对节点进行选择，默认为true
    selectable: PropTypes.bool,

    // 设置是否允许对节点进行多选，默认为false
    multiple: PropTypes.bool,

    // 设置是否在节点前添加选择框，默认为false
    checkable: PropTypes.bool,

    // 设置是否默认展开全部节点，默认为false
    defaultExpandAll: PropTypes.bool,

    // 对应当前已展开节点的key值数组
    expandedKeys: PropTypes.arrayOf(PropTypes.string),

    // 设置初始状态下被展开的节点key数组
    defaultExpandedKeys: PropTypes.arrayOf(PropTypes.string),

    // 设置是否默认展开父节点，默认为false
    defaultExpandParent: PropTypes.bool,

    // 用于存储当前已被选中的节点key数组
    selectedKeys: PropTypes.arrayOf(PropTypes.string),

    // 设置默认被选择的节点
    defaultSelectedKeys: PropTypes.arrayOf(PropTypes.string),

    // 用于存储当前已被勾选的节点key数组
    checkedKeys: PropTypes.arrayOf(PropTypes.string),

    // 设置默认被勾选的节点
    defaultCheckedKeys: PropTypes.arrayOf(PropTypes.string),

    // 用于监听当前状态下处于半勾选状态下的节点key数组
    halfCheckedKeys: PropTypes.arrayOf(PropTypes.string),

    // 设置先辈节点与后代节点之间是否独立选择，默认false
    checkStrictly: PropTypes.bool,

    // 设置是否显示连接线，默认为{ 'showLeafIcon': false }
    showLine: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.exact({
            showLeafIcon: PropTypes.bool
        })
    ]),

    // 设置虚拟滚动模式下的窗口像素高度，不设置时则不会启动虚拟滚动模式
    height: PropTypes.number,

    // 设置是否开启树节点可拖拽模式，默认为false
    draggable: PropTypes.bool,

    // 设置拖拽模式下是否仅允许同级拖拽
    // 默认：false
    dragInSameLevel: PropTypes.bool,

    // 当节点被拖拽时，监听该节点的key值信息
    draggedNodeKey: PropTypes.string,

    // 当有节点的右键菜单选项被点击时，监听相关的事件信息
    clickedContextMenu: PropTypes.exact({
        // 记录对应的树节点key值
        nodeKey: PropTypes.string,
        // 记录对应的右键菜单选项key值
        menuKey: PropTypes.string,
        // 记录事件发生时的时间戳信息
        timestamp: PropTypes.number
    }),

    // 设置是否启用树节点收藏功能
    // 默认：false
    enableNodeFavorites: PropTypes.bool,

    // 设置或监听已被收藏的节点key值数组
    // 默认：[]
    favoritedKeys: PropTypes.arrayOf(PropTypes.string),

    // 用于执行滚动到指定节点的操作，每次执行后，此参数会自动重置为null
    scrollTarget: PropTypes.exact({
        // 用于设置滚动目标的key值
        key: PropTypes.string.isRequired,
        // 用于设置滚动后的节点对齐位置
        // 可选的有'top'、'bottom'、'auto'
        align: PropTypes.oneOf(['top', 'bottom', 'auto']),
        // 用于设置滚动后的像素偏移量
        offset: PropTypes.number
    }),

    // 联动树搜索时使用，用于设置针对树节点title进行搜索的关键词，也可以传入由多个关键词构成的数组
    searchKeyword: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]),

    // 针对searchKeyword，设置是否大小写敏感
    // 默认：true
    caseSensitive: PropTypes.bool,

    // 配合searchKeyword参数使用，用于设置树节点title命中关键词部分的高亮样式
    highlightStyle: PropTypes.object,

    // 节点拓展元素相关功能
    // 为节点元素设置勾选状态下的后缀元素
    nodeCheckedSuffix: PropTypes.node,

    // 为节点元素设置非勾选状态下的后缀元素
    nodeUncheckedSuffix: PropTypes.node,

    // 为节点元素设置勾选状态下的css样式
    nodeCheckedStyle: PropTypes.object,

    // 为节点元素设置非勾选状态下的css样式
    nodeUncheckedStyle: PropTypes.object,

    // 用于自定义需要纳入batchProps中的属性名数组
    batchPropsNames: PropTypes.arrayOf(PropTypes.string),

    // 打包监听batchPropsNames中定义的属性值变化
    batchPropsValues: PropTypes.object,

    loading_state: PropTypes.shape({
        /**
         * Determines if the component is loading or not
         */
        is_loading: PropTypes.bool,
        /**
         * Holds which property is loading
         */
        prop_name: PropTypes.string,
        /**
         * Holds the name of the component that is loading
         */
        component_name: PropTypes.string
    }),

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,

    /**
   * Used to allow user interactions in this component to be persisted when
   * the component - or the page - is refreshed. If `persisted` is truthy and
   * hasn't changed from its previous value, a `value` that the user has
   * changed while using the app will keep that change, as long as
   * the new `value` also matches what was given originally.
   * Used in conjunction with `persistence_type`.
   */
    persistence: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.number
    ]),

    /**
     * Properties whose user interactions will persist after refreshing the
     * component or the page. Since only `value` is allowed this prop can
     * normally be ignored.
     */
    persisted_props: PropTypes.arrayOf(PropTypes.oneOf(['selectedKeys', 'checkedKeys', 'expandedKeys', 'halfCheckedKeys'])),

    /**
     * Where persisted user changes will be stored:
     * memory: only kept in memory, reset on page refresh.
     * local: window.localStorage, data is kept after the browser quit.
     * session: window.sessionStorage, data is cleared once the browser quit.
     */
    persistence_type: PropTypes.oneOf(['local', 'session', 'memory'])
};

// 设置默认参数
AntdTree.defaultProps = {
    showIcon: false,
    treeDataMode: 'tree',
    checkable: false,
    defaultExpandAll: false,
    defaultExpandParent: false,
    checkStrictly: false,
    multiple: false,
    selectable: true,
    showLine: { 'showLeafIcon': false },
    draggable: false,
    dragInSameLevel: false,
    caseSensitive: true,
    highlightStyle: {
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        padding: 0,
        color: '#ff5500'
    },
    enableNodeFavorites: false,
    favoritedKeys: [],
    persisted_props: ['selectedKeys', 'checkedKeys', 'expandedKeys', 'halfCheckedKeys'],
    persistence_type: 'local',
    batchPropsNames: []
}

export default AntdTree;

export const propTypes = AntdTree.propTypes;
export const defaultProps = AntdTree.defaultProps;