import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdSegmented = React.lazy(() => import(/* webpackChunkName: "data_display" */ '../../fragments/dataDisplay/AntdSegmented.react'));

/**
 * 分段控制器组件AntdSegmented
 */
const AntdSegmented = ({
    id,
    style,
    className,
    key,
    options,
    defaultValue,
    value,
    block = false,
    shape = 'default',
    vertical = false,
    disabled = false,
    size = 'middle',
    setProps,
    persistence,
    persisted_props,
    persistence_type,
    batchPropsNames = [],
    ...others
}) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdSegmented {
                ...{
                    id,
                    style,
                    className,
                    key,
                    options,
                    defaultValue,
                    value,
                    block,
                    shape,
                    vertical,
                    disabled,
                    size,
                    setProps,
                    persistence,
                    persisted_props,
                    persistence_type,
                    batchPropsNames,
                    ...others
                }
            } />
        </Suspense>
    );
}

AntdSegmented.propTypes = {
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
     * 配置选项相关参数
     */
    options: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.exact({
                /**
                 * 组件型，选项标题内容
                 */
                label: PropTypes.node,
                /**
                 * 必填，选项值
                 */
                value: PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.number
                ]).isRequired,
                /**
                 * 是否禁用当前选项
                 * 默认值：`false`
                 */
                disabled: PropTypes.bool,
                /**
                 * 选项前缀图标，`iconRenderer='AntdIcon'`时同`AntdIcon`，`iconRenderer='fontawesome'`时表示css类名
                 */
                icon: PropTypes.string,
                /**
                 * 选项前缀图标类型，可选项有`'AntdIcon'`、`'fontawesome'`
                 * 默认值：`'AntdIcon'`
                 */
                iconRenderer: PropTypes.oneOf(['AntdIcon', 'fontawesome']),
            })
        ])
    ),

    /**
     * 监听或设置当前选中值
     */
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),

    /**
     * 设置初始化选中值
     */
    defaultValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),

    /**
     * 是否撑满父容器
     * 默认值：`false`
     */
    block: PropTypes.bool,

    /**
     * 形状，可选项有`'default'`、`'round'`
     * 默认值：`'default'`
     */
    shape: PropTypes.oneOf(['default', 'round']),

    /**
     * 是否垂直展示
     * 默认值：`false`
     */
    vertical: PropTypes.bool,

    /**
     * 是否禁用当前组件
     * 默认值：`false`
     */
    disabled: PropTypes.bool,

    /**
     * 组件尺寸规格，可选项有`'small'`、`'middle'`、`'large'`
     * 默认值：`'middle'`
     */
    size: PropTypes.oneOf(['large', 'middle', 'small']),

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

AntdSegmented.dashPersistence = {
    persisted_props: ['value'],
    persistence_type: 'local'
}

export default AntdSegmented;

export const propTypes = AntdSegmented.propTypes;
export const defaultProps = AntdSegmented.defaultProps;