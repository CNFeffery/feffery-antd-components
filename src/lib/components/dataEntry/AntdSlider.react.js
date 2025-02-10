import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdSlider = React.lazy(() => import(/* webpackChunkName: "data_entry" */ '../../fragments/dataEntry/AntdSlider.react'));

/**
 * 滑动输入条组件AntdSlider
 */
const AntdSlider = ({
    id,
    name,
    className,
    style,
    railStyle,
    styles,
    classNames,
    key,
    value,
    defaultValue,
    disabled = false,
    autoFocus = false,
    vertical = false,
    range = false,
    min = 0,
    max = 100,
    step = 1,
    marks,
    tooltipVisible,
    tooltipPrefix = '',
    tooltipSuffix = '',
    popupContainer = 'body',
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
            <LazyAntdSlider {
                ...{
                    id,
                    name,
                    className,
                    style,
                    railStyle,
                    styles,
                    classNames,
                    key,
                    value,
                    defaultValue,
                    disabled,
                    autoFocus,
                    vertical,
                    range,
                    min,
                    max,
                    step,
                    marks,
                    tooltipVisible,
                    tooltipPrefix,
                    tooltipSuffix,
                    popupContainer,
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

AntdSlider.propTypes = {
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
     * 滑轨部分css样式
     */
    railStyle: PropTypes.object,

    /**
     * 细分控制子元素css样式
     */
    styles: PropTypes.exact({
        /**
         * 选择条css样式
         */
        track: PropTypes.object,
        /**
         * 背景条css样式
         */
        rail: PropTypes.object
    }),

    /**
     * 细分控制子元素css类名
     */
    classNames: PropTypes.exact({
        /**
         * 选择条css类名
         */
        track: PropTypes.string,
        /**
         * 背景条css类名
         */
        rail: PropTypes.string
    }),

    /**
     * 配合`AntdForm`表单批量值搜集/控制功能使用，充当当前表单项的字段名，以`id`作为缺省值
     */
    name: PropTypes.string,

    /**
     * 是否以垂直模式显示
     * 默认值：`false`
     */
    vertical: PropTypes.bool,

    /**
     * 是否以范围模式显示
     */
    range: PropTypes.bool,

    /**
     * 必填，可滑动范围下限
     */
    min: PropTypes.number.isRequired,

    /**
     * 必填，可滑动范围上限
     */
    max: PropTypes.number.isRequired,

    /**
     * 滑动步长
     */
    step: PropTypes.number,

    /**
     * 为部分数值设置刻度信息
     */
    marks: PropTypes.objectOf(PropTypes.node),

    /**
     * 滑动数值文字提示显示策略，`true`表示持续显示，`false`表示始终不显示
     */
    tooltipVisible: PropTypes.bool,

    /**
     * 滑动数值文字提示前缀信息
     */
    tooltipPrefix: PropTypes.string,

    /**
     * 滑动数值文字提示后缀信息
     */
    tooltipSuffix: PropTypes.string,

    /**
     * 是否禁用当前组件
     * 默认值：`false`
     */
    disabled: PropTypes.bool,

    /**
     * 监听或设置已选值
     */
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.number)
    ]),

    /**
     * 初始化已选值
     */
    defaultValue: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.number)
    ]),

    /**
     * 是否允许一键清空已选值
     * 默认值：`true`
     */
    autoFocus: PropTypes.bool,

    /**
     * 相关展开层锚定策略，可选项有`'parent'`、`'body'`
     * 默认值：`'body'`
     */
    popupContainer: PropTypes.oneOf(['parent', 'body']),

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

AntdSlider.dashPersistence = {
    persisted_props: ['value'],
    persistence_type: 'local'
}

export default AntdSlider;

export const propTypes = AntdSlider.propTypes;
export const defaultProps = AntdSlider.defaultProps;