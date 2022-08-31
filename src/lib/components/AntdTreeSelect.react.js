import { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { TreeSelect, ConfigProvider } from 'antd';
import { str2Locale } from './locales.react';
import { flatToTree } from './utils';
import 'antd/dist/antd.css';

const { SHOW_ALL } = TreeSelect;

// 定义树选择组件AntdTreeSelect，api参数参考https://ant.design/components/tree-select-cn/
const AntdTreeSelect = (props) => {
    // 取得必要属性或参数
    let {
        id,
        style,
        className,
        key,
        locale,
        treeData,
        treeDataMode,
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
        placement,
        status,
        treeNodeFilterProp,
        setProps,
        persistence,
        persisted_props,
        persistence_type,
        loading_state
    } = props;

    useEffect(() => {
        if (!value && defaultValue) {
            setProps({ value: defaultValue })
        }
    }, [])

    const flatToTreeData = useMemo(() => {
        return flatToTree(treeData);
    }, [treeData])

    // 用于获取用户已选择值的回调函数
    const updateSelectedValue = (value) => {

        if (treeCheckStrictly) {
            setProps({ value: value.map(item => item.value) })
        } else {
            setProps({ value: value })
        }

    }

    // 返回定制化的前端组件
    return (
        <ConfigProvider locale={str2Locale.get(locale)}>
            <TreeSelect
                id={id}
                className={className}
                style={{ ...{ width: '100%' }, ...style }}
                key={key}
                treeData={treeDataMode === 'flat' ? flatToTreeData : treeData}
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
                placement={placement}
                status={status}
                treeNodeFilterProp={treeNodeFilterProp}
                persistence={persistence}
                persisted_props={persisted_props}
                persistence_type={persistence_type}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
                getPopupContainer={(triggerNode) => triggerNode.parentNode}
            />
        </ConfigProvider>
    );
}

// 定义递归PropTypes
const PropTreeNodeShape = {
    // 标题
    title: PropTypes.string.isRequired,

    // 唯一识别id
    key: PropTypes.string.isRequired,

    // 节点对应的值，供搜索筛选时进行匹配使用（具有唯一性）
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,

    // 可选，设置是否禁用
    disabled: PropTypes.bool,

    // 可选，当树为treeCheckable时，设置对应节点是否展示checkbox
    checkable: PropTypes.bool,

    // 可选，设置是否禁用checkbox
    disableCheckbox: PropTypes.bool,

    // 可选，设置对应节点是否可选
    selectable: PropTypes.bool
};

const PropTreeNode = PropTypes.shape(PropTreeNodeShape);
PropTreeNodeShape.children = PropTypes.arrayOf(PropTreeNode);
const treeDataPropTypes = PropTypes.arrayOf(PropTreeNode);

// 定义扁平结构节点类型
const PropFlatNodeShape = {
    // 标题
    title: PropTypes.string.isRequired,

    // 唯一识别id
    key: PropTypes.string.isRequired,

    // 节点对应的值，供搜索筛选时进行匹配使用（具有唯一性）
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,

    // 可选，设置是否禁用
    disabled: PropTypes.bool,

    // 可选，当树为treeCheckable时，设置对应节点是否展示checkbox
    checkable: PropTypes.bool,

    // 可选，设置是否禁用checkbox
    disableCheckbox: PropTypes.bool,

    // 可选，设置对应节点是否可选
    selectable: PropTypes.bool,

    // 可选，设置对应节点的父节点key值
    parent: PropTypes.string
};

// 定义参数或属性
AntdTreeSelect.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 设置语言环境，可选的有'zh-cn'、'en-us'
    locale: PropTypes.oneOf(['zh-cn', 'en-us']),

    // 组织树形结构的json结构数据
    treeData: PropTypes.oneOfType([
        // 树形结构
        treeDataPropTypes,
        // 扁平结构
        PropTypes.arrayOf(PropFlatNodeShape)
    ]).isRequired,

    // 设置treeData模式，可选的有'tree'、'flat'，默认为'tree'
    treeDataMode: PropTypes.oneOf(['tree', 'flat']),

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
        PropTypes.number,
        PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]),
        ),
    ]),

    // 设置默认被选中的选项，默认为空数组
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

    // 设置悬浮展开层的方位，可选的有'bottomLeft'、'bottomRight'、'topLeft'、'topRight'
    // 默认为'bottomLeft'
    placement: PropTypes.oneOf(['bottomLeft', 'bottomRight', 'topLeft', 'topRight']),

    // 设置校验状态，可选的有'error'、'warning'
    status: PropTypes.oneOf(['error', 'warning']),

    // 设置输入框中搜索时针对的字段，可选的有'title'、'value'，默认为'value'
    treeNodeFilterProp: PropTypes.oneOf(['title', 'value']),

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
    persisted_props: PropTypes.arrayOf(PropTypes.oneOf(['value'])),

    /**
     * Where persisted user changes will be stored:
     * memory: only kept in memory, reset on page refresh.
     * local: window.localStorage, data is kept after the browser quit.
     * session: window.sessionStorage, data is cleared once the browser quit.
     */
    persistence_type: PropTypes.oneOf(['local', 'session', 'memory'])
};

// 设置默认参数
AntdTreeSelect.defaultProps = {
    listHeight: 256,
    virtual: false,
    allowClear: true,
    persisted_props: ['value'],
    persistence_type: 'local',
    locale: 'zh-cn',
    treeNodeFilterProp: 'value',
    treeDataMode: 'tree'
}

export default AntdTreeSelect;