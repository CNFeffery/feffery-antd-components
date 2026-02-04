import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdCheckboxGroup = React.lazy(
    () =>
        import(
            /* webpackChunkName: "data_entry" */ '../../fragments/dataEntry/AntdCheckboxGroup.react'
        )
);

/**
 * 组合选择框组件AntdCheckboxGroup
 */
const AntdCheckboxGroup = ({
    id,
    style,
    className,
    key,
    name,
    enableBatchControl = true,
    options,
    value,
    disabled = false,
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
            <LazyAntdCheckboxGroup
                {...{
                    id,
                    style,
                    className,
                    key,
                    name,
                    enableBatchControl,
                    options,
                    value,
                    disabled,
                    readOnly,
                    setProps,
                    persistence,
                    persisted_props,
                    persistence_type,
                    batchPropsNames,
                    ...others,
                }}
            />
        </Suspense>
    );
};

AntdCheckboxGroup.propTypes = {
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
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

    /**
     * 配合`AntdForm`表单批量值搜集/控制功能使用，充当当前表单项的字段名，以`id`作为缺省值
     */
    name: PropTypes.string,

    /**
     * 控制当前组件是否参与有效的`AntdForm`表单批量值搜集/控制功能
     * 默认值：`true`
     */
    enableBatchControl: PropTypes.bool,

    /**
     * 是否禁用当前组件
     * 默认值：`false`
     */
    disabled: PropTypes.bool,

    /**
     * 定义构造组合选择框所需的数据结构
     */
    options: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.exact({
                /**
                 * 组件型，当前选择框标签内容
                 */
                label: PropTypes.node,
                /**
                 * 当前选择框对应值
                 */
                value: PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.number,
                ]),
                /**
                 * 是否禁用当前选择框
                 * 默认值：`false`
                 */
                disabled: PropTypes.bool,
            }),
        ])
    ),

    /**
     * 监听或设置已选值
     */
    value: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),

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

    /**
     * 是否开启[属性持久化](/prop-persistence)
     */
    persistence: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.number,
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
    persistence_type: PropTypes.oneOf(['local', 'session', 'memory']),
};

AntdCheckboxGroup.dashPersistence = {
    persisted_props: ['value'],
    persistence_type: 'local',
};

export default AntdCheckboxGroup;

export const propTypes = AntdCheckboxGroup.propTypes;
export const defaultProps = AntdCheckboxGroup.defaultProps;
