import React, { useEffect, useRef, useMemo } from 'react';
import { Tree, Tooltip, Dropdown, Rate } from 'antd';
import AntdIcon from '../../components/general/AntdIcon.react';
import Highlighter from 'react-highlight-words';
import { omitBy, isUndefined, isString, isObject, isArray, cloneDeep } from 'lodash';
import { flatToTree } from '../../components/utils';
import useCss from '../../hooks/useCss';
import { propTypes, defaultProps } from '../../components/dataDisplay/AntdTree.react';

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

const filterTree = (toFilterData, keyword, caseSensitive) => {
    return toFilterData.filter(node => {
        // 首先检查当前节点是否匹配关键字
        let isMatch = false;
        if (Array.isArray(keyword)) {
            isMatch = keyword.some(s => caseSensitive ? node.title.includes(s) : node.title.toLowerCase().includes(s.toLowerCase()));
        } else {
            isMatch = caseSensitive ? node.title.includes(keyword) : node.title.toLowerCase().includes(keyword.toLowerCase());
        }

        // 如果当前节点匹配关键字，但不是根节点，才保留它及其全部后代节点信息
        if (isMatch) {
            return true;
        }

        // 如果当前节点不匹配关键字，检查它的子节点
        if (node.children && node.children.length > 0) {
            node.children = filterTree(node.children, keyword, caseSensitive);

            // 如果有匹配的子节点，保留当前节点及其匹配的后代节点信息
            if (node.children.length > 0) {
                return true;
            }
        }

        // 如果当前节点和它的子节点都不匹配，返回 false，表示不保留该节点
        return false;
    });
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
        enableNodeFavorites,
        favoritedKeys,
        scrollTarget,
        searchKeyword,
        caseSensitive,
        highlightStyle,
        nodeCheckedSuffix,
        nodeUncheckedSuffix,
        nodeCheckedStyle,
        nodeUncheckedStyle,
        persistence,
        persisted_props,
        persistence_type,
        loading_state,
        batchPropsNames
    } = props;

    // 批属性监听
    useEffect(() => {
        if (batchPropsNames && batchPropsNames.length !== 0) {
            let _batchPropsValues = {};
            for (let propName of batchPropsNames) {
                _batchPropsValues[propName] = props[propName];
            }
            setProps({
                batchPropsValues: _batchPropsValues
            })
        }
    })

    const treeRef = useRef(null);

    // 控制一次性scrollTarget动作
    useEffect(() => {
        if (scrollTarget && treeRef.current) {
            treeRef.current.scrollTo(scrollTarget);
            setProps({
                scrollTarget: null
            })
        }
    }, [scrollTarget])

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
            ref={treeRef}
            treeData={
                searchKeyword ?
                    add_leaf_node_icon(filterTree(cloneDeep(treeData), searchKeyword, caseSensitive)) :
                    add_leaf_node_icon(cloneDeep(treeData))
            }
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
                                {
                                    searchKeyword ?
                                        <Highlighter
                                            highlightStyle={highlightStyle}
                                            searchWords={Array.isArray(searchKeyword) ? searchKeyword : [searchKeyword]}
                                            autoEscape
                                            textToHighlight={nodeData.title}
                                        /> :
                                        nodeData.title
                                }
                                {
                                    // 若当前节点满足收藏控件渲染条件
                                    enableNodeFavorites && (isUndefined(nodeData.enableFavorites) || nodeData.enableFavorites) ?
                                        <span style={{
                                            paddingLeft: 2
                                        }}
                                            onClick={(e) => {
                                                // 阻止事件向外传递
                                                e.stopPropagation()
                                            }}>
                                            <Rate
                                                count={1}
                                                value={favoritedKeys.includes(nodeData.key) ? 1 : 0}
                                                onChange={(e) => {
                                                    setProps({
                                                        favoritedKeys: (
                                                            favoritedKeys.includes(nodeData.key) ?
                                                                favoritedKeys.filter(key => key !== nodeData.key) :
                                                                [...favoritedKeys, nodeData.key]
                                                        )
                                                    })
                                                }}
                                            />
                                        </span> :
                                        null
                                }
                                {checkedKeys?.includes(nodeData.key) ? nodeCheckedSuffix : nodeUncheckedSuffix}
                            </span>
                        </Dropdown> :
                        <span className={nodeData.className ? `ant-tree-title ${nodeData.className}` : "ant-tree-title"}
                            style={{
                                ...(checkedKeys?.includes(nodeData.key) ? nodeCheckedStyle : nodeUncheckedStyle),
                                ...nodeData.style // 优先级更高
                            }}>
                            {
                                searchKeyword ?
                                    <Highlighter
                                        highlightStyle={highlightStyle}
                                        searchWords={Array.isArray(searchKeyword) ? searchKeyword : [searchKeyword]}
                                        autoEscape
                                        textToHighlight={nodeData.title}
                                    /> :
                                    nodeData.title
                            }
                            {
                                // 若当前节点满足收藏控件渲染条件
                                enableNodeFavorites && (isUndefined(nodeData.enableFavorites) || nodeData.enableFavorites) ?
                                    <span style={{
                                        paddingLeft: 2
                                    }}
                                        onClick={(e) => {
                                            // 阻止事件向外传递
                                            e.stopPropagation()
                                        }}>
                                        <Rate
                                            count={1}
                                            value={favoritedKeys.includes(nodeData.key) ? 1 : 0}
                                            onChange={(e) => {
                                                setProps({
                                                    favoritedKeys: (
                                                        favoritedKeys.includes(nodeData.key) ?
                                                            favoritedKeys.filter(key => key !== nodeData.key) :
                                                            [...favoritedKeys, nodeData.key]
                                                    )
                                                })
                                            }}
                                        />
                                    </span> :
                                    null
                            }
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

export default AntdTree;

AntdTree.defaultProps = defaultProps;
AntdTree.propTypes = propTypes;