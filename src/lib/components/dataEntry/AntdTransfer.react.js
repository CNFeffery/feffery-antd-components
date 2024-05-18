import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdTransfer = React.lazy(() => import(/* webpackChunkName: "data_entry" */ '../../fragments/dataEntry/AntdTransfer.react'));

/**
 * 穿梭框组件AntdTransfer
 */
const AntdTransfer = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdTransfer {...props} />
        </Suspense>
    );
}

AntdTransfer.propTypes = {
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
     * 配合`AntdForm`表单批量值搜集/控制功能使用，充当当前表单项的字段名，以`id`作为缺省值
     */
    name: PropTypes.string,

    /**
     * 组件文案语种，可选项有`'zh-cn'`、`'en-us'`
     * 默认值：`'zh-cn'`
     */
    locale: PropTypes.oneOf(['zh-cn', 'en-us']),

    /**
     * 配置选项
     */
    dataSource: PropTypes.arrayOf(
        PropTypes.exact(
            {
                /**
                 * 当前选项唯一识别id
                 */
                key: PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.number
                ]),
                /**
                 * 组件型，当前选项标题内容
                 */
                title: PropTypes.node,
                /**
                 * 是否禁用当前选项
                 * 默认值：`false`
                 */
                disabled: PropTypes.bool
            }
        )
    ),

    /**
     * 组件型，自定义下拉菜单图标
     */
    selectionsIcon: PropTypes.node,

    /**
     * 穿梭框整体高度
     */
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),

    // 用于设置是否以分页模式展示左右区域内部超长的项目集合，默认为false
    /**
     * 选项分页展示配置
     * 默认值：`false`
     */
    pagination: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.exact({
            /**
             * 每页最大选项数
             */
            pageSize: PropTypes.number
        })
    ]),

    /**
     * 是否启用单向模式
     * 默认值：`false`
     */
    oneWay: PropTypes.bool,

    /**
     * 左右移动操作按钮内容
     * 默认值：`'['', '']'`
     */
    operations: PropTypes.arrayOf(PropTypes.node),

    /**
     * 是否显示搜索框
     * 默认值：`false`
     */
    showSearch: PropTypes.bool,

    /**
     * 搜索匹配模式，可选项有`'case-insensitive'`（大小写不敏感）、`'case-sensitive'`（大小写敏感）、`'regex'`（正则表达式）
     * 默认值：`'case-insensitive'`
     */
    optionFilterMode: PropTypes.oneOf(['case-insensitive', 'case-sensitive', 'regex']),

    /**
     * 是否显示全选勾选框
     * 默认值：`true`
     */
    showSelectAll: PropTypes.bool,

    /**
     * 左右标题内容
     */
    titles: PropTypes.arrayOf(PropTypes.node),

    /**
     * 监听或设置右侧区域已选项`key`值
     */
    targetKeys: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ])
    ),

    /**
     * 监听最近一次选项移动对应方向，可选项有`'left'`、`'right'`
     */
    moveDirection: PropTypes.oneOf(['left', 'right']),

    /**
     * 监听最近一次选项移动涉及的选项`key`值
     */
    moveKeys: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ])
    ),

    /**
     * 是否禁用当前组件
     * 默认值：`false`
     */
    disabled: PropTypes.bool,

    /**
     * 控制校验状态，可选项有`'error'`、`'warning'`
     */
    status: PropTypes.oneOf(['error', 'warning']),

    /**
     * 是否渲染为只读状态
     * 默认值：`false`
     */
    readOnly: PropTypes.bool,

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

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,

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
     * 是否开启[属性持久化](/prop-persistence)
     */
    persistence: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.number
    ]),

    /**
     * 开启属性持久化功能的若干属性名，可选项有`'targetKeys'`
     * 默认值：`['targetKeys']`
     */
    persisted_props: PropTypes.arrayOf(PropTypes.oneOf(['targetKeys'])),

    /**
     * 属性持久化存储类型，可选项有`'local'`（本地持久化），`'session'`（会话持久化），`'memory'`（内存持久化）
     * 默认值：`'local'`
     */
    persistence_type: PropTypes.oneOf(['local', 'session', 'memory'])
};

// 设置默认参数
AntdTransfer.defaultProps = {
    targetKeys: [],
    pagination: false,
    oneWay: false,
    operations: ['', ''],
    showSearch: false,
    showSelectAll: true,
    disabled: false,
    optionFilterMode: 'case-insensitive',
    readOnly: false,
    persisted_props: ['targetKeys'],
    persistence_type: 'local',
    locale: 'zh-cn',
    batchPropsNames: []
}

export default AntdTransfer;

export const propTypes = AntdTransfer.propTypes;
export const defaultProps = AntdTransfer.defaultProps;