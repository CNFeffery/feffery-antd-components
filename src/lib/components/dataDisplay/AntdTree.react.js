import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Tree, Tooltip, Dropdown } from 'antd';
import AntdIcon from '../general/AntdIcon.react';
import { omitBy, isUndefined, isString, isObject, isArray, cloneDeep } from 'lodash';
import { flatToTree } from '../utils';
import useCss from '../../hooks/useCss';

// 自定义工具函数
// https://github.com/ant-design/ant-design/issues/15926
const isSameLevel = (a, b) => {
    const aLevel = a.props.pos.split('-').length;
    const bLevel = b.props.pos.split('-').length;

    return aLevel === bLevel;
};

const isSameParent = (a, b) => {
    const aLevel = a.props.pos.split('-');
    const bLevel = b.props.pos.split('-');
    aLevel.pop();

    return aLevel.join('') === bLevel.join('');
}

// 定义树形控件AntdTree，api参数参考https://ant.design/components/tree-cn/
const AntdTree = (props) => {

    // 取得必要属性或参数
    let {
        id,
        className,
        setProps,
        style,
        key,
        treeData,
        treeDataMode,
        checkable,
        selectable,
        selectedKeys,
        expandedKeys,
        checkedKeys,
        defaultExpandAll,
        defaultExpandedKeys,
        defaultExpandParent,
        checkStrictly,
        defaultCheckedKeys,
        defaultSelectedKeys,
        multiple,
        showLine,
        showIcon,
        height,
        draggable,
        dragInSameLevel,
        nodeCheckedSuffix,
        nodeUncheckedSuffix,
        nodeCheckedStyle,
        nodeUncheckedStyle,
        persistence,
        persisted_props,
        persistence_type,
        loading_state
    } = props;

    if (showLine) {
        showLine = { 'showLeafIcon': false }
    }

    useEffect(() => {
        setProps({
            expandedKeys: defaultExpandedKeys && !expandedKeys ? defaultExpandedKeys : expandedKeys,
            selectedKeys: defaultSelectedKeys && !selectedKeys ? defaultSelectedKeys : selectedKeys,
            checkedKeys: defaultCheckedKeys && !checkedKeys ? defaultCheckedKeys : checkedKeys
        })
    }, [])

    const flatToTreeData = useMemo(() => {
        return flatToTree(treeData);
    }, [treeData])

    // 根据treeDataMode对treeData进行预处理
    if (treeDataMode === 'flat') {
        treeData = flatToTreeData
    }

    // 用于以递归的方式将节点icon属性替换成相应的icon对象
    const add_leaf_node_icon = (inputTreeData) => {
        if (isObject(inputTreeData)) {
            // 为节点添加tooltip相关参数
            if (inputTreeData.tooltipProps && isString(inputTreeData.title)) {
                inputTreeData.title = (<Tooltip {...inputTreeData.tooltipProps}>
                    {inputTreeData.title}
                </Tooltip>)
            }
            if (inputTreeData.children) {
                if (isString(inputTreeData.icon)) {
                    inputTreeData.icon = (
                        inputTreeData.iconRenderer === 'fontawesome' ?
                            (
                                React.createElement(
                                    'i',
                                    {
                                        className: inputTreeData.icon
                                    }
                                )
                            ) :
                            (
                                <AntdIcon icon={inputTreeData.icon} />
                            )
                    )
                }
                for (let i = 0; i < inputTreeData.children.length; i++) {
                    inputTreeData.children[i] = add_leaf_node_icon(inputTreeData.children[i])
                }
            } else {
                if (isString(inputTreeData.icon)) {
                    inputTreeData.icon = (
                        inputTreeData.iconRenderer === 'fontawesome' ?
                            (
                                React.createElement(
                                    'i',
                                    {
                                        className: inputTreeData.icon
                                    }
                                )
                            ) :
                            (
                                <AntdIcon icon={inputTreeData.icon} />
                            )
                    )
                }
            }
        }

        if (isArray(inputTreeData)) {
            for (var i = 0; i < inputTreeData.length; i++) {
                inputTreeData[i] = add_leaf_node_icon(inputTreeData[i])
            }
        }

        return inputTreeData;
    }

    const listenSelect = (e) => {
        setProps({ selectedKeys: e })
    }

    const listenCheck = (checkedKeys, e) => {
        if (checkStrictly) {
            setProps({
                checkedKeys: checkedKeys.checked,
                halfCheckedKeys: checkedKeys.halfChecked
            })
        } else {
            setProps({
                checkedKeys: checkedKeys,
                halfCheckedKeys: e.halfCheckedKeys
            })
        }
    }

    const listenExpand = (e) => {
        setProps({ expandedKeys: e })
    }

    const onDragEnter = (info) => {
        setProps({ expandedKeys: info.expandedKeys })
    };

    let config = {
        expandedKeys
    }

    config = omitBy(config, isUndefined)

    // 处理树节点拖拽事件，偏平结构模式下不可用
    const onDrop = (info) => {

        // 若仅允许同级拖拽
        if (dragInSameLevel) {
            const canDrop = (isSameLevel(info.dragNode, info.node) && info.dropToGap) || (isSameParent(info.dragNode, info.node) && !info.dropToGap);
            if (!canDrop) {
                // 结束拖拽计算过程
                return
            }
        }

        const dropKey = info.node.key;
        const dragKey = info.dragNode.key;
        const dropPos = info.node.pos.split('-');
        const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
        const loop = (data, _key, callback) => {
            for (let i = 0; i < data.length; i++) {
                if (data[i].key === _key) {
                    return callback(data[i], i, data);
                }
                if (data[i].children) {
                    loop(data[i].children, _key, callback);
                }
            }
        };
        const data = cloneDeep(treeData);

        let dragObj;
        loop(data, dragKey, (item, index, arr) => {
            arr.splice(index, 1);
            dragObj = item;
        });
        if (!info.dropToGap) {
            loop(data, dropKey, (item) => {
                item.children = item.children || [];

                item.children.unshift(dragObj);
            });
        } else if (
            (info.node.props.children || []).length > 0 &&
            info.node.props.expanded &&
            dropPosition === 1
        ) {
            loop(data, dropKey, (item) => {
                item.children = item.children || [];
                item.children.unshift(dragObj);
            });
        } else {
            let ar = [];
            let i;
            loop(data, dropKey, (_item, index, arr) => {
                ar = arr;
                i = index;
            });
            if (dropPosition === -1) {
                ar.splice(i, 0, dragObj);
            } else {
                ar.splice(i + 1, 0, dragObj);
            }
        }
        // 更新拖拽完成后的树结构数据
        setProps({
            treeData: data,
            draggedNodeKey: dragKey
        })
    };

    return (
        <Tree
            id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            treeData={add_leaf_node_icon(cloneDeep(treeData))}
            selectedKeys={selectedKeys}
            checkedKeys={checkedKeys}
            selectable={selectable}
            checkable={checkable}
            defaultExpandAll={defaultExpandAll}
            defaultExpandedKeys={defaultExpandedKeys}
            defaultExpandParent={defaultExpandParent}
            defaultCheckedKeys={defaultCheckedKeys}
            defaultSelectedKeys={defaultSelectedKeys}
            checkStrictly={checkStrictly}
            multiple={multiple}
            showLine={showLine}
            onSelect={listenSelect}
            onCheck={listenCheck}
            onExpand={listenExpand}
            onDragEnter={onDragEnter}
            showIcon={showIcon}
            height={height}
            titleRender={(nodeData) => {
                return (
                    nodeData.contextMenu ?
                        <Dropdown
                            menu={{
                                items: nodeData.contextMenu.map(
                                    itemProps => {
                                        return {
                                            ...itemProps,
                                            icon: itemProps.icon && (
                                                itemProps.iconRenderer === 'fontawesome' ?
                                                    (
                                                        React.createElement(
                                                            'i',
                                                            {
                                                                className: itemProps.icon
                                                            }
                                                        )
                                                    ) :
                                                    (
                                                        <AntdIcon icon={itemProps.icon} />
                                                    )
                                            )
                                        }
                                    }
                                ),
                                // 右键菜单事件监听
                                onClick: (e) => {
                                    // 阻止事件蔓延
                                    e.domEvent.stopPropagation()
                                    // 更新相关事件信息
                                    setProps({
                                        clickedContextMenu: {
                                            nodeKey: nodeData.key,
                                            menuKey: e.key,
                                            timestamp: Date.now()
                                        }
                                    })
                                }
                            }}
                            trigger={['contextMenu']}
                        >
                            <span className={nodeData.className ? `ant-tree-title ${nodeData.className}` : "ant-tree-title"}
                                style={{
                                    ...(checkedKeys?.includes(nodeData.key) ? nodeCheckedStyle : nodeUncheckedStyle),
                                    ...nodeData.style // 优先级更高
                                }}>
                                {nodeData.title}
                                {checkedKeys?.includes(nodeData.key) ? nodeCheckedSuffix : nodeUncheckedSuffix}
                            </span>
                        </Dropdown> :
                        <span className={nodeData.className ? `ant-tree-title ${nodeData.className}` : "ant-tree-title"}
                            style={{
                                ...(checkedKeys?.includes(nodeData.key) ? nodeCheckedStyle : nodeUncheckedStyle),
                                ...nodeData.style // 优先级更高
                            }}>
                            {nodeData.title}
                            {checkedKeys?.includes(nodeData.key) ? nodeCheckedSuffix : nodeUncheckedSuffix}
                        </span>
                );
            }}
            showLeafIcon={false}
            // 处理树可拖拽特性
            draggable={draggable && treeDataMode !== 'flat'}
            blockNode={draggable && treeDataMode !== 'flat'}
            onDrop={draggable && treeDataMode !== 'flat' ? onDrop : undefined}
            persistence={persistence}
            persisted_props={persisted_props}
            persistence_type={persistence_type}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
            {...config}
        />
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
    )
};

const PropTreeNode = PropTypes.shape(PropTreeNodeShape);
PropTreeNodeShape.children = PropTypes.arrayOf(PropTreeNode);
const treeDataPropTypes = PropTypes.arrayOf(PropTreeNode);

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
    )
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
        treeDataPropTypes,
        // 偏平结构
        PropTypes.arrayOf(PropFlatNodeShape)
    ]),

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
    persisted_props: ['selectedKeys', 'checkedKeys', 'expandedKeys', 'halfCheckedKeys'],
    persistence_type: 'local',
    batchPropsNames: []
}

export default React.memo(
    AntdTree,
    (prevProps, nextProps) => {
        if (nextProps.batchPropsNames && nextProps.batchPropsNames.length !== 0) {
            let _batchPropsValues = {};
            for (let propName of nextProps.batchPropsNames) {
                _batchPropsValues[propName] = nextProps[propName];
            }
            nextProps.setProps({
                batchPropsValues: _batchPropsValues
            })
        }
        return false;
    }
);