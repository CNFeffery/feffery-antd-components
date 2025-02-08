import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdRate = React.lazy(() => import(/* webpackChunkName: "data_entry" */ '../../fragments/dataEntry/AntdRate.react'));

/**
 * 评分组件AntdRate
 */
const AntdRate = ({
    id,
    className,
    style,
    key,
    name,
    allowClear = true,
    allowHalf = false,
    count = 5,
    disabled = false,
    autoFocus = false,
    tooltips,
    defaultValue = 0,
    value,
    setProps,
    persistence,
    persisted_props = ['value'],
    persistence_type = 'local',
    batchPropsNames = [],
    ...others
}) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdRate {
                ...{
                    id,
                    className,
                    style,
                    key,
                    name,
                    allowClear,
                    allowHalf,
                    count,
                    disabled,
                    autoFocus,
                    tooltips,
                    defaultValue,
                    value,
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

AntdRate.propTypes = {
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
     * 是否允许通过再次点击清除已选分值
     * 默认值：`true`
     */
    allowClear: PropTypes.bool,

    /**
     * 是否允许半星选择
     * 默认值：`false`
     */
    allowHalf: PropTypes.bool,

    /**
     * 总分值
     * 默认值：`5`
     */
    count: PropTypes.number,

    /**
     * 为各分值设置提示文字信息
     */
    tooltips: PropTypes.arrayOf(
        PropTypes.string
    ),

    /**
     * 是否渲染为只读评分形式
     * 默认值：`false`
     */
    disabled: PropTypes.bool,

    /**
     * 是否自动获取焦点
     * 默认值：`false`
     */
    autoFocus: PropTypes.bool,

    /**
     * 监听或设置已选值
     */
    value: PropTypes.number,

    /**
     * 初始化已选值
     * 默认值：`0`
     */
    defaultValue: PropTypes.number,

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

export default AntdRate;

export const propTypes = AntdRate.propTypes;
export const defaultProps = AntdRate.defaultProps;