import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdSwitch = React.lazy(() => import(/* webpackChunkName: "data_entry" */ '../../fragments/dataEntry/AntdSwitch.react'));

/**
 * 开关组件AntdSwitch
 */
const AntdSwitch = ({
    id,
    style,
    className,
    key,
    name,
    disabled = false,
    autoFocus = false,
    checked,
    checkedChildren,
    unCheckedChildren,
    size = 'default',
    loading = false,
    readOnly = false,
    setProps,
    persistence,
    persisted_props,
    persistence_type,
    batchPropsNames = [],
    ...others
}) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdSwitch {
                ...{
                    id,
                    style,
                    className,
                    key,
                    name,
                    disabled,
                    autoFocus,
                    checked,
                    checkedChildren,
                    unCheckedChildren,
                    size,
                    loading,
                    readOnly,
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

AntdSwitch.propTypes = {
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
     * 是否禁用当前组件
     * 默认值：`false`
     */
    disabled: PropTypes.bool,

    /**
     * 是否自动获取焦点
     * 默认值：`false`
     */
    autoFocus: PropTypes.bool,

    /**
     * 监听或设置当前开关是否打开
     */
    checked: PropTypes.bool,

    /**
     * 组件型，打开状态下内嵌内容
     */
    checkedChildren: PropTypes.node,

    /**
     * 组件型，关闭状态下内嵌内容
     */
    unCheckedChildren: PropTypes.node,

    /**
     * 当前组件尺寸规格，可选项有`'small'`、`'middle'`
     * 默认值：`'default'`
     */
    size: PropTypes.oneOf(['default', 'small']),

    /**
     * 是否渲染加载中状态
     * 默认值：`false`
     */
    loading: PropTypes.bool,
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
     * 开启属性持久化功能的若干属性名，可选项有`'checked'`
     * 默认值：`['checked']`
     */
    persisted_props: PropTypes.arrayOf(PropTypes.oneOf(['checked'])),

    /**
     * 属性持久化存储类型，可选项有`'local'`（本地持久化），`'session'`（会话持久化），`'memory'`（内存持久化）
     * 默认值：`'local'`
     */
    persistence_type: PropTypes.oneOf(['local', 'session', 'memory'])
};

AntdSwitch.dashPersistence = {
    persisted_props: ['checked'],
    persistence_type: 'local'
}

export default AntdSwitch;

export const propTypes = AntdSwitch.propTypes;
export const defaultProps = AntdSwitch.defaultProps;