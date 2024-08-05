import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdTree = React.lazy(() => import(/* webpackChunkName: "data_entry" */ '../../fragments/dataDisplay/AntdTree.react'));

/**
 * 树形控件组件AntdTree
 */
const AntdTree = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdTree {...props} />
        </Suspense>
    );
}

// 定义递归PropTypes
const PropTreeNodeShape = {
    /**
     * 当前节点标题
     */
    title: PropTypes.string.isRequired,
    /**
     * 当前节点唯一识别id
     */
    key: PropTypes.string.isRequired,
    /**
     * 是否禁用当前节点
     * 默认值：`false`
     */
    disabled: PropTypes.bool,
    /**
     * 当前节点前缀图标类型，`iconRenderer`为`'AntdIcon'`时同`AntdIcon`同名参数，`iconRenderer`为`'fontawesome'`时为css类名
     */
    icon: PropTypes.string,
    /**
     * 当前节点前缀图标渲染方式，可选项有`'AntdIcon'`、`'fontawesome'`
     */
    iconRenderer: PropTypes.oneOf(['AntdIcon', 'fontawesome']),
    /**
     * 当树组件整体的`checkable=True`时，单独控制当前节点是否渲染勾选框
     */
    checkable: PropTypes.bool,
    /**
     * 当树组件整体的`checkable=True`时，控制是否禁用当前节点的勾选框
     */
    disableCheckbox: PropTypes.bool,
    /**
     * 当前节点是否可点击选择
     */
    selectable: PropTypes.bool,
    /**
     * 当树组件整体的`enableNodeFavorites=True`时，控制是否可对当前节点进行收藏
     */
    enableFavorites: PropTypes.bool,
    /**
     * 当前节点css样式
     */
    style: PropTypes.object,
    /**
     * 当前节点css类名
     */
    className: PropTypes.string,
    /**
     * 配置当前节点文字提示相关参数
     */
    tooltipProps: PropTypes.exact({
        /**
         * 当前节点文字提示内容
         */
        title: PropTypes.string,
        /**
         * 当前节点文字提示展开方向，可选项有`'top'`、`'left'`、`'right'`、`'bottom'`、`'topLeft'`、`'topRight'`、`'bottomLeft'`、`'bottomRight'`
         * 默认值：`'top'`
         */
        placement: PropTypes.oneOf([
            'top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'
        ])
    }),
    /**
     * 配置当前节点右键菜单相关参数
     */
    contextMenu: PropTypes.arrayOf(
        PropTypes.exact({
            /**
             * 当前右键菜单项唯一识别id
             */
            key: PropTypes.string,
            /**
             * 当前右键菜单项标题内容
             */
            label: PropTypes.string,
            /**
             * 当前节点前缀图标类型，`iconRenderer`为`'AntdIcon'`时同`AntdIcon`同名参数，`iconRenderer`为`'fontawesome'`时为css类名
             */
            icon: PropTypes.string,
            /**
             * 当前节点前缀图标渲染方式，可选项有`'AntdIcon'`、`'fontawesome'`
             */
            iconRenderer: PropTypes.oneOf(['AntdIcon', 'fontawesome']),
        })
    )
};

const PropTreeNode = PropTypes.shape(PropTreeNodeShape);
PropTreeNodeShape.children = PropTypes.arrayOf(PropTreeNode);
const treeDataPropTypes = PropTypes.arrayOf(PropTreeNode);

// 定义偏平结构节点类型
const PropFlatNodeShape = {
    /**
     * 当前节点标题
     */
    title: PropTypes.string.isRequired,
    /**
     * 当前节点唯一识别id
     */
    key: PropTypes.string.isRequired,
    /**
     * 是否禁用当前节点
     * 默认值：`false`
     */
    disabled: PropTypes.bool,
    /**
     * 当前节点前缀图标类型，`iconRenderer`为`'AntdIcon'`时同`AntdIcon`同名参数，`iconRenderer`为`'fontawesome'`时为css类名
     */
    icon: PropTypes.string,
    /**
     * 当前节点前缀图标渲染方式，可选项有`'AntdIcon'`、`'fontawesome'`
     */
    iconRenderer: PropTypes.oneOf(['AntdIcon', 'fontawesome']),
    /**
     * 当树组件整体的`checkable=True`时，单独控制当前节点是否渲染勾选框
     */
    checkable: PropTypes.bool,
    /**
     * 当树组件整体的`checkable=True`时，控制是否禁用当前节点的勾选框
     */
    disableCheckbox: PropTypes.bool,
    /**
     * 当前节点是否可点击选择
     */
    selectable: PropTypes.bool,
    /**
     * 当树组件整体的`enableNodeFavorites=True`时，控制是否可对当前节点进行收藏
     */
    enableFavorites: PropTypes.bool,
    /**
     * 当前节点对应的父节点`key`值
     */
    parent: PropTypes.string,
    /**
     * 当前节点css样式
     */
    style: PropTypes.object,
    /**
     * 当前节点css类名
     */
    className: PropTypes.string,
    /**
     * 配置当前节点文字提示相关参数
     */
    tooltipProps: PropTypes.exact({
        /**
         * 当前节点文字提示内容
         */
        title: PropTypes.string,
        /**
         * 当前节点文字提示展开方向，可选项有`'top'`、`'left'`、`'right'`、`'bottom'`、`'topLeft'`、`'topRight'`、`'bottomLeft'`、`'bottomRight'`
         * 默认值：`'top'`
         */
        placement: PropTypes.oneOf([
            'top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'
        ])
    }),
    /**
     * 配置当前节点右键菜单相关参数
     */
    contextMenu: PropTypes.arrayOf(
        PropTypes.exact({
            /**
             * 当前右键菜单项唯一识别id
             */
            key: PropTypes.string,
            /**
             * 当前右键菜单项标题内容
             */
            label: PropTypes.string,
            /**
             * 当前节点前缀图标类型，`iconRenderer`为`'AntdIcon'`时同`AntdIcon`同名参数，`iconRenderer`为`'fontawesome'`时为css类名
             */
            icon: PropTypes.string,
            /**
             * 当前节点前缀图标渲染方式，可选项有`'AntdIcon'`、`'fontawesome'`
             */
            iconRenderer: PropTypes.oneOf(['AntdIcon', 'fontawesome']),
        })
    )
};

AntdTree.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 当前组件css样式
     */
    style: PropTypes.object,

    /**
     * 当前组件css类名，支持[动态css](/advanced-classname)
     */
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    /**
     * 对应`treeData`格式的渲染模式，可选项有`'tree'`（树形模式）、`'flat'`（扁平模式）
     * 默认值：`'tree'`
     */
    treeDataMode: PropTypes.oneOf(['tree', 'flat']),

    /**
     * 定义构造树所需的数据结构，与`treeDataMode`一致
     */
    treeData: PropTypes.oneOfType([
        /**
         * 树形模式对应结构
         */
        treeDataPropTypes,
        /**
         * 扁平模式对应结构
         */
        PropTypes.arrayOf(PropFlatNodeShape)
    ]),

    /**
     * 针对树结构中的指定节点，定义作为标题的组件型内容，优先级高于`treeData`中对应的`title`值
     */
    treeNodeKeyToTitle: PropTypes.objectOf(PropTypes.node),

    /**
     * 是否渲染节点额外图标
     * 默认值：`false`
     */
    showIcon: PropTypes.bool,

    /**
     * 节点是否可点击选择
     * 默认值：`true`
     */
    selectable: PropTypes.bool,

    /**
     * 节点是否允许多选
     * 默认值：`false`
     */
    multiple: PropTypes.bool,

    /**
     * 节点是否可勾选
     * 默认值：`false`
     */
    checkable: PropTypes.bool,

    /**
     * 初始化是否展开全部节点
     * 默认值：`false`
     */
    defaultExpandAll: PropTypes.bool,

    /**
     * 监听或设置已展开节点`key`值数组
     */
    expandedKeys: PropTypes.arrayOf(PropTypes.string),

    /**
     * 初始化已展开节点`key`值数组
     */
    defaultExpandedKeys: PropTypes.arrayOf(PropTypes.string),

    /**
     * 初始化是否展开处于展开状态节点的父节点
     * 默认值：`true`
     */
    defaultExpandParent: PropTypes.bool,

    /**
     * 监听或设置已选择节点`key`值数组
     */
    selectedKeys: PropTypes.arrayOf(PropTypes.string),

    /**
     * 初始化已选择节点`key`值数组
     */
    defaultSelectedKeys: PropTypes.arrayOf(PropTypes.string),

    /**
     * 监听或设置已勾选节点`key`值数组
     */
    checkedKeys: PropTypes.arrayOf(PropTypes.string),

    /**
     * 初始化已勾选节点`key`值数组
     */
    defaultCheckedKeys: PropTypes.arrayOf(PropTypes.string),

    /**
     * 监听或设置处于半勾选状态下的节点`key`值数组
     */
    halfCheckedKeys: PropTypes.arrayOf(PropTypes.string),

    /**
     * 节点与其后代节点之间的选择行为是否彼此独立
     * 默认值：`false`
     */
    checkStrictly: PropTypes.bool,

    /**
     * 是否显示连接线
     */
    showLine: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.exact({
            /**
             * 叶节点是否渲染前缀图标
             */
            showLeafIcon: PropTypes.bool
        })
    ]),

    /**
     * 虚拟滚动模式下的组件最大像素高度，未设置时则不启用虚拟滚动功能
     */
    height: PropTypes.number,

    /**
     * 节点是否可拖拽
     * 默认值：`false`
     */
    draggable: PropTypes.bool,

    /**
     * 当`draggable=True`时，是否仅允许同级拖拽
     * 默认值：`false`
     */
    dragInSameLevel: PropTypes.bool,

    /**
     * 禁止进行拖拽调整的节点`key`值数组
     * 默认值：`[]`
     */
    dragDisabledKeys: PropTypes.arrayOf(PropTypes.string),

    /**
     * 监听最近一次被拖拽节点`key`值信息
     */
    draggedNodeKey: PropTypes.string,

    /**
     * 监听节点右键菜单项点击事件
     */
    clickedContextMenu: PropTypes.exact({
        /**
         * 事件对应节点`key`值
         */
        nodeKey: PropTypes.string,
        /**
         * 事件对应右键菜单项`key`值
         */
        menuKey: PropTypes.string,
        /**
         * 事件对应时间戳信息
         */
        timestamp: PropTypes.number
    }),

    /**
     * 是否启用节点收藏功能
     * 默认值：`false`
     */
    enableNodeFavorites: PropTypes.bool,

    /**
     * 监听或设置已收藏节点`key`值数组
     */
    favoritedKeys: PropTypes.arrayOf(PropTypes.string),

    /**
     * 执行滚动到指定节点的动作，每次执行完毕后会重置为空值
     */
    scrollTarget: PropTypes.exact({
        /**
         * 滚动目标节点`key`值
         */
        key: PropTypes.string.isRequired,
        /**
         * 滚动目标节点对齐位置，可选项有`'top'`、`'bottom'`、`'auto'`
         * 默认值：`'auto'`
         */
        align: PropTypes.oneOf(['top', 'bottom', 'auto']),
        /**
         * 滚动后的像素偏移量
         */
        offset: PropTypes.number
    }),

    /**
     * 快捷树搜索功能对应的单个关键词，或由多个关键词构成的数组
     */
    searchKeyword: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]),

    /**
     * 针对`searchKeyword`，是否大小写敏感
     * 默认值：`true`
     */
    caseSensitive: PropTypes.bool,

    /**
     * 快捷树搜索关键词匹配部分的高亮样式
     */
    highlightStyle: PropTypes.object,

    /**
     * 组件型，节点勾选状态下的后缀元素
     */
    nodeCheckedSuffix: PropTypes.node,

    /**
     * 组件型，节点非勾选状态下的后缀元素
     */
    nodeUncheckedSuffix: PropTypes.node,

    /**
     * 节点勾选状态下的css样式
     */
    nodeCheckedStyle: PropTypes.object,

    /**
     * 节点非勾选状态下的css样式
     */
    nodeUncheckedStyle: PropTypes.object,

    /**
     * 需要纳入[批量属性监听](/batch-props-values)的若干属性名
     */
    batchPropsNames: PropTypes.arrayOf(PropTypes.string),

    /**
     * 监听`batchPropsNames`中指定的若干属性值
     */
    batchPropsValues: PropTypes.object,

    /**
     * `data-*`格式属性通配
     */
    'data-*': PropTypes.string,

    /**
     * `aria-*`格式属性通配
     */
    'aria-*': PropTypes.string,

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
     * 是否开启[属性持久化](/prop-persistence)
     */
    persistence: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.number
    ]),

    /**
     * 开启属性持久化功能的若干属性名，可选项有`'selectedKeys'`、`'checkedKeys'`、`'expandedKeys'`、`'halfCheckedKeys'`
     * 默认值：`['selectedKeys', 'checkedKeys', 'expandedKeys', 'halfCheckedKeys']`
     */
    persisted_props: PropTypes.arrayOf(PropTypes.oneOf(['selectedKeys', 'checkedKeys', 'expandedKeys', 'halfCheckedKeys'])),

    /**
     * 属性持久化存储类型，可选项有`'local'`（本地持久化），`'session'`（会话持久化），`'memory'`（内存持久化）
     * 默认值：`'local'`
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
    dragDisabledKeys: [],
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