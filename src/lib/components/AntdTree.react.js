import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tree } from 'antd';
import AntdIcon from './AntdIcon.react';
import 'antd/dist/antd.css';
import './styles.css'

// 定义树形控件AntdTree，api参数参考https://ant.design/components/tree-cn/
export default class AntdTree extends Component {

    constructor(props) {
        super(props)
        // 初始化expandedKeys
        if (props.defaultExpandedKeys) {
            // 当defaultExpandedKeys不为空时，为expandedKeys初始化defaultExpandedKeys对应的expandedKeys值
            props.setProps({ expandedKeys: props.defaultExpandedKeys })
        }

        // 初始化selectedKeys
        if (props.defaultSelectedKeys) {
            // 当defaultSelectedKeys不为空时，为selectedKeys初始化defaultSelectedKeys对应的selectedKeys值
            props.setProps({ selectedKeys: props.defaultSelectedKeys })
        }

        // 初始化selectedKeys
        if (props.defaultCheckedKeys) {
            // 当defaultCheckedKeys不为空时，为checkedKeys初始化defaultCheckedKeys对应的checkedKeys值
            props.setProps({ checkedKeys: props.defaultCheckedKeys })
        }
    }

    render() {
        // 取得必要属性或参数
        let {
            id,
            className,
            setProps,
            style,
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
            persistence,
            persisted_props,
            persistence_type,
            loading_state
        } = this.props;

        if (showLine) {
            showLine = { 'showLeafIcon': false }
        }

        let { treeData } = this.props;

        // 用于以递归的方式将节点icon属性替换成相应的icon对象
        const add_leaf_node_icon = (inputTreeData) => {
            if (typeof inputTreeData === typeof {}) {

                if (inputTreeData.hasOwnProperty('children')) {
                    if (typeof inputTreeData.icon === typeof "") {
                        inputTreeData.icon = <AntdIcon icon={inputTreeData.icon} />
                    }

                    for (var i = 0; i < inputTreeData.children.length; i++) {
                        inputTreeData.children[i] = add_leaf_node_icon(inputTreeData.children[i])
                    }

                } else {
                    if (typeof inputTreeData.icon === typeof "") {
                        inputTreeData.icon = <AntdIcon icon={inputTreeData.icon} />
                    }
                }
            }

            if (typeof inputTreeData == typeof []) {
                for (var i = 0; i < inputTreeData.length; i++) {
                    inputTreeData[i] = add_leaf_node_icon(inputTreeData[i])
                }
            }

            return inputTreeData;
        }

        treeData = add_leaf_node_icon(treeData)

        const listenSelect = (e) => {
            setProps({ selectedKeys: e })
        }

        const listenCheck = (checkedKeys, e) => {
            setProps({ checkedKeys: checkedKeys, halfCheckedKeys: e.halfCheckedKeys })
        }

        const listenExpand = (e) => {
            setProps({ expandedKeys: e })
        }

        return (<Tree
            id={id}
            className={className}
            style={style}
            treeData={add_leaf_node_icon(treeData)}
            selectedKeys={selectedKeys}
            expandedKeys={expandedKeys}
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
            showIcon={showIcon}
            height={height}
            showLeafIcon={false}
            persistence={persistence}
            persisted_props={persisted_props}
            persistence_type={persistence_type}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        />
        );
    }
}

// 定义递归PropTypes
const PropTreeNodeShape = {
    // 标题
    title: PropTypes.string.isRequired,

    // 唯一识别id
    key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

    // 可选，设置是否禁用
    disabled: PropTypes.bool,

    // 可选，设置节点对应icon
    icon: PropTypes.node,

    // 可选，当树为checkable时，设置对应节点是否展示checkbox
    checkable: PropTypes.bool,

    // 可选，设置是否禁用checkbox
    disableCheckbox: PropTypes.bool,

    // 可选，设置对应节点是否可选
    selectable: PropTypes.bool,

};

const PropTreeNode = PropTypes.shape(PropTreeNodeShape);
PropTreeNodeShape.children = PropTypes.arrayOf(PropTreeNode);
const treeDataPropTypes = PropTypes.arrayOf(PropTreeNode);

// 定义参数或属性
AntdTree.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 组织树形结构的json结构数据
    treeData: treeDataPropTypes.isRequired,

    // 设置是否渲染icon，默认为true
    showIcon: PropTypes.bool,

    // 设置是否在节点前添加选择框，默认为false
    checkable: PropTypes.bool,

    // 设置是否默认展开全部节点，默认为false
    defaultExpandAll: PropTypes.bool,

    // 设置初始状态下被展开的节点key数组
    defaultExpandedKeys: PropTypes.arrayOf(PropTypes.string),

    // 设置是否默认展开父节点，默认为false
    defaultExpandParent: PropTypes.bool,

    // 设置先辈节点与后代节点之间是否独立选择，默认false
    checkStrictly: PropTypes.bool,

    // 设置默认被勾选的节点
    defaultCheckedKeys: PropTypes.arrayOf(PropTypes.string),

    // 设置默认被选择的节点
    defaultSelectedKeys: PropTypes.arrayOf(PropTypes.string),

    // 设置是否允许对节点进行多选，默认为false
    multiple: PropTypes.bool,

    // 设置是否允许对节点进行选择，默认为true
    selectable: PropTypes.bool,

    // 设置是否显示连接线，默认为true
    showLine: PropTypes.oneOfType([PropTypes.bool, PropTypes.exact({ showLeafIcon: PropTypes.bool })]),

    // 用于存储当前已被选中的节点key数组
    selectedKeys: PropTypes.array,

    // 用于存储当前已被勾选的节点key数组
    checkedKeys: PropTypes.array,

    // 不可控属性，用于记录当前状态下处于半勾选状态下的节点key数组
    halfCheckedKeys: PropTypes.array,

    // 对应当前已展开节点的key值数组
    expandedKeys: PropTypes.arrayOf(PropTypes.string),

    // 设置虚拟滚动模式下的窗口像素高度，不设置时则不会启动虚拟滚动模式
    height: PropTypes.number,

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
    persisted_props: PropTypes.arrayOf(PropTypes.oneOf(['selectedKeys', 'checkedKeys', 'expandedKeys'])),

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
    showLine: { 'showLeafIcon': false },
    showIcon: true,
    persisted_props: ['selectedKeys', 'checkedKeys', 'expandedKeys'],
    persistence_type: 'local'
}