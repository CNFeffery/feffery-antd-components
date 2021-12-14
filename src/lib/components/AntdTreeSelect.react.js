import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TreeSelect, ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';

const { SHOW_ALL } = TreeSelect;

// 定义树选择组件AntdTreeSelect，api参数参考https://ant.design/components/tree-select-cn/
export default class AntdTreeSelect extends Component {

    constructor(props) {
        super(props)
        if (!props.value) {
            props.setProps({ value: props.defaultValue })
        }

    }

    render() {
        // 取得必要属性或参数
        let {
            id,
            style,
            className,
            treeData,
            allowClear,
            bordered,
            treeLine,
            listHeight,
            placeholder,
            value,
            defaultValue,
            maxTagCount,
            multiple,
            size,
            treeCheckable,
            treeCheckStrictly,
            treeDefaultExpandAll,
            treeDefaultExpandedKeys,
            treeExpandedKeys,
            virtual,
            disabled,
            setProps,
            loading_state
        } = this.props;

        // 用于获取用户已选择值的回调函数
        function updateSelectedValue(value) {

            if (treeCheckStrictly) {
                setProps({ value: value.map(item => item.value) })
            } else {
                setProps({ value: value })
            }

        }

        // 返回定制化的前端组件
        return (
            <ConfigProvider locale={zhCN}>
                <TreeSelect
                    id={id}
                    className={className}
                    style={{ ...{ width: '100%' }, ...style }}
                    treeData={treeData}
                    allowClear={allowClear}
                    bordered={bordered}
                    treeLine={treeLine}
                    listHeight={listHeight}
                    placeholder={placeholder}
                    value={value}
                    defaultValue={defaultValue}
                    maxTagCount={maxTagCount}
                    multiple={multiple}
                    size={size}
                    treeCheckable={treeCheckable}
                    showCheckedStrategy={SHOW_ALL}
                    treeCheckStrictly={treeCheckStrictly}
                    treeDefaultExpandAll={treeDefaultExpandAll}
                    treeDefaultExpandedKeys={treeDefaultExpandedKeys}
                    treeExpandedKeys={treeExpandedKeys}
                    onChange={updateSelectedValue}
                    showSearch={true}
                    virtual={virtual}
                    disabled={disabled}
                    data-dash-is-loading={
                        (loading_state && loading_state.is_loading) || undefined
                    }
                    getPopupContainer={(triggerNode) => triggerNode.parentNode}
                />
            </ConfigProvider>
        );
    }
}

// 定义递归PropTypes
const PropTreeNodeShape = {
    // 标题
    title: PropTypes.string.isRequired,

    // 唯一识别id
    key: PropTypes.string.isRequired,

    // 节点对应的值，供搜索筛选时进行匹配使用（具有唯一性）
    value: PropTypes.string.isRequired,

    // 可选，设置是否禁用
    disabled: PropTypes.bool,

    // 可选，当树为treeCheckable时，设置对应节点是否展示checkbox
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
AntdTreeSelect.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 组织树形结构的json结构数据
    treeData: treeDataPropTypes.isRequired,

    // 设置是否渲染内容清空按钮，默认为true
    allowClear: PropTypes.bool,

    // 设置是否显示边框，默认为true
    bordered: PropTypes.bool,

    // 设置是否展示连接线，默认为false
    treeLine: PropTypes.bool,

    // 选择框默认文本
    placeholder: PropTypes.string,

    // 对应已被选中的选项值或选项值数组
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(
            PropTypes.string,
        ),
    ]),

    // 设置默认被选中的选项，默认为空数组
    defaultValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(
            PropTypes.string
        ),
    ]),

    // 设置最大显示的已选择选项，默认为5，超出部分会自动省略
    maxTagCount: PropTypes.number,

    // 设置下拉菜单的高度，默认256
    listHeight: PropTypes.number,

    // 设置是否支持多选，默认为false
    multiple: PropTypes.bool,

    // 设置选择框大小，可选的有'small'、'middle'及'large'，默认为'middle'
    size: PropTypes.oneOf(['small', 'middle', 'large']),

    // 设置是否以选择框模式渲染每个节点，默认为false
    treeCheckable: PropTypes.bool,

    // 设置是否禁用父子节点间的关联作用，如所有子节点被选中父节点也不会被选中，默认为false
    treeCheckStrictly: PropTypes.bool,

    // 设置初始化时是否展开所有树节点，默认为false
    treeDefaultExpandAll: PropTypes.bool,

    // 设置初始化时展开的树节点key值数组
    treeDefaultExpandedKeys: PropTypes.arrayOf(PropTypes.string),

    // 对应当前展开的树节点key值数组
    treeExpandedKeys: PropTypes.arrayOf(PropTypes.string),

    // 设置是否开启虚拟滚动，默认为true
    virtual: PropTypes.bool,

    // 设置是否禁用整个组件
    disabled: PropTypes.bool,

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
    setProps: PropTypes.func
};

// 设置默认参数
AntdTreeSelect.defaultProps = {
    listHeight: 256,
    virtual: false,
    allowClear: true
}
