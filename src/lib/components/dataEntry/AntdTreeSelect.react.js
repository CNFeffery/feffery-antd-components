import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdTreeSelect = React.lazy(() => import(/* webpackChunkName: "data_entry" */ '../../fragments/dataEntry/AntdTreeSelect.react'));

/**
 * 树选择组件AntdTreeSelect
 */
const AntdTreeSelect = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdTreeSelect {...props} />
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
     * 当前节点唯一值
     */
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    /**
     * 是否禁用当前节点
     */
    disabled: PropTypes.bool,
    /**
     * 当`treeCheckable=True`时，控制当前节点是否显示勾选框
     */
    checkable: PropTypes.bool,
    /**
     * 当`treeCheckable=True`时，是否禁用当前节点勾选框
     */
    disableCheckbox: PropTypes.bool,
    /**
     * 当前节点是否可选择
     */
    selectable: PropTypes.bool,
    /**
     * 当前节点是否为末端节点
     */
    isLeaf: PropTypes.bool
};

const PropTreeNode = PropTypes.shape(PropTreeNodeShape);
PropTreeNodeShape.children = PropTypes.arrayOf(PropTreeNode);
const treeDataPropTypes = PropTypes.arrayOf(PropTreeNode);

// 定义扁平结构节点类型
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
     * 当前节点唯一值
     */
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    /**
     * 是否禁用当前节点
     */
    disabled: PropTypes.bool,
    /**
     * 当`treeCheckable=True`时，控制当前节点是否显示勾选框
     */
    checkable: PropTypes.bool,
    /**
     * 当`treeCheckable=True`时，是否禁用当前节点勾选框
     */
    disableCheckbox: PropTypes.bool,
    /**
     * 当前节点是否可选择
     */
    selectable: PropTypes.bool,
    /**
     * 当前节点是否为末端节点
     */
    isLeaf: PropTypes.bool,
    /**
     * 当前节点所属父节点`key`值
     */
    parent: PropTypes.string
};

AntdTreeSelect.propTypes = {
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
     * 展开菜单css类名
     */
    popupClassName: PropTypes.string,

    /**
     * 配合`AntdForm`表单批量值搜集/控制功能使用，充当当前表单项的字段名，以`id`作为缺省值
     */
    name: PropTypes.string,

    /**
     * 组件文案语种，可选项有`'zh-cn'`（简体中文）、`'en-us'`（英语）、`'de-de'`（德语）
     * 默认值：`'zh-cn'`
     */
    locale: PropTypes.oneOf(['zh-cn', 'en-us', 'de-de']),

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
    ]).isRequired,

    /**
     * 针对树结构中的指定节点，定义作为标题的组件型内容，优先级高于`treeData`中对应的`title`值
     */
    treeNodeKeyToTitle: PropTypes.objectOf(PropTypes.node),

    /**
     * 是否禁用当前组件
     * 默认值：`false`
     */
    disabled: PropTypes.bool,

    /**
     * 当前组件尺寸规格，可选项有`'small'`、`'middle'`、`'large'`
     * 默认值：`'middle'`
     */
    size: PropTypes.oneOf(['small', 'middle', 'large']),

    /**
     * 是否显示边框，设置为`true`时等价于`variant='outlined'`
     * 默认值：`true`
     */
    bordered: PropTypes.bool,

    /**
     * 设置形态变体类型，可选的有'outlined'、'borderless'、'filled'
     * 其中'outlined'等价于bordered=true，优先级高于bordered
     */
    variant: PropTypes.oneOf(['outlined', 'borderless', 'filled']),

    /**
     * 输入框占位文字内容
     */
    placeholder: PropTypes.string,

    /**
     * 选择菜单展开方向，可选项有`'bottomLeft'`、`'bottomRight'`、`'topLeft'`、`'topRight'`
     * 默认值：`'bottomLeft'`
     */
    placement: PropTypes.oneOf(['bottomLeft', 'bottomRight', 'topLeft', 'topRight']),

    /**
     * 是否显示连接线
     * 默认值：`false`
     */
    treeLine: PropTypes.bool,

    /**
     * 监听或设置已选值
     */
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]),
        ),
    ]),

    /**
     * 初始化已选值
     */
    defaultValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]),
        ),
    ]),

    /**
     * 当`multiple=True`时，已选值tag展示的最大数量
     */
    maxTagCount: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(['responsive'])
    ]),

    /**
     * 当`multiple=True`时，隐藏已选值tag时显示的内容
     */
    maxTagPlaceholder: PropTypes.node,

    /**
     * 当`multiple=True`时，最大显示的已选值tag文本长度
     */
    maxTagTextLength: PropTypes.number,

    /**
     * 选择菜单最大像素高度
     * 默认值：`256`
     */
    listHeight: PropTypes.number,

    /**
     * 是否开启多选模式
     * 默认值：`false`
     */
    multiple: PropTypes.bool,

    /**
     * 组件型，自定义的选择框后缀图标
     */
    suffixIcon: PropTypes.node,

    /**
     * 组件型，自定义树节点的展开/折叠图标
     */
    switcherIcon: PropTypes.node,

    /**
     * 树节点是否可勾选
     * 默认值：`false`
     */
    treeCheckable: PropTypes.bool,

    /**
     * 节点与其后代节点之间的选择行为是否彼此独立
     * 默认值：`false`
     */
    treeCheckStrictly: PropTypes.bool,

    /**
     * 初始化是否展开全部节点
     * 默认值：`false`
     */
    treeDefaultExpandAll: PropTypes.bool,

    /**
     * 初始化已展开节点`key`值数组
     */
    treeDefaultExpandedKeys: PropTypes.arrayOf(PropTypes.string),

    /**
     * 监听或设置已展开节点`key`值数组
     */
    treeExpandedKeys: PropTypes.arrayOf(PropTypes.string),

    /**
     * 是否开启虚拟滚动
     * 默认值：`true`
     */
    virtual: PropTypes.bool,

    /**
     * 控制校验状态，可选项有`'error'`、`'warning'`
     */
    status: PropTypes.oneOf(['error', 'warning']),

    /**
     * 是否允许一键清空已选值
     * 默认值：`true`
     */
    allowClear: PropTypes.bool,

    /**
     * 基于搜索框中输入内容进行搜索的目标字段，可选项有`'value'`、`'title'`
     * 默认值：`'value'`
     */
    treeNodeFilterProp: PropTypes.oneOf(['title', 'value']),

    /**
     * 搜索匹配模式，可选项有`'case-insensitive'`（大小写不敏感）、`'case-sensitive'`（大小写敏感）、`'regex'`（正则表达式）
     * 默认值：`'case-insensitive'`
     */
    treeNodeFilterMode: PropTypes.oneOf(['case-insensitive', 'case-sensitive', 'regex']),

    /**
     * 当`multiple=true`时，设置是否在选中项后自动清空搜索框中的内容
     * 默认值：`true`
     */
    autoClearSearchValue: PropTypes.bool,

    /**
     * 已选项回填搜索框策略，可选项有`'show-all'`、`'show-parent'`、`'show-child'`
     * 默认值：`'show-all'`
     */
    showCheckedStrategy: PropTypes.oneOf(['show-all', 'show-parent', 'show-child']),

    /**
     * 组件型，选择菜单前缀内容
     */
    dropdownBefore: PropTypes.node,

    /**
     * 组件型，选择菜单后缀内容
     */
    dropdownAfter: PropTypes.node,

    /**
     * 是否渲染为只读状态
     * 默认值：`false`
     */
    readOnly: PropTypes.bool,

    /**
     * 相关展开层锚定策略，可选项有`'parent'`、`'body'`
     * 默认值：`'body'`
     */
    popupContainer: PropTypes.oneOf(['parent', 'body']),

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
     * 开启属性持久化功能的若干属性名，可选项有`'value'`
     * 默认值：`['value']`
     */
    persisted_props: PropTypes.arrayOf(PropTypes.oneOf(['value'])),

    /**
     * 属性持久化存储类型，可选项有`'local'`（本地持久化），`'session'`（会话持久化），`'memory'`（内存持久化）
     * 默认值：`'local'`
     */
    persistence_type: PropTypes.oneOf(['local', 'session', 'memory'])
};

// 设置默认参数
AntdTreeSelect.defaultProps = {
    listHeight: 256,
    virtual: true,
    allowClear: true,
    disabled: false,
    bordered: true,
    placement: 'bottomLeft',
    treeLine: false,
    multiple: false,
    size: 'middle',
    treeCheckable: false,
    treeCheckStrictly: false,
    treeDefaultExpandAll: false,
    autoClearSearchValue: true,
    persisted_props: ['value'],
    persistence_type: 'local',
    locale: 'zh-cn',
    treeNodeFilterProp: 'value',
    treeDataMode: 'tree',
    popupContainer: 'body',
    showCheckedStrategy: 'show-all',
    treeNodeFilterMode: 'case-insensitive',
    batchPropsNames: []
}

export default AntdTreeSelect;

export const propTypes = AntdTreeSelect.propTypes;
export const defaultProps = AntdTreeSelect.defaultProps;