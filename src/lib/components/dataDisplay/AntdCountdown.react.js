import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdCountdown = React.lazy(() => import(/* webpackChunkName: "data_display" */ '../../fragments/dataDisplay/AntdCountdown.react'));

/**
 * 倒计时组件AntdCountdown
 */
const AntdCountdown = ({
    id,
    className,
    style,
    key,
    value,
    valueFormat = 'YYYY-MM-DD hh:mm:ss',
    format,
    prefix,
    suffix,
    title,
    titleTooltip,
    valueStyle,
    setProps,
    ...others
}) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdCountdown {
                ...{
                    id,
                    className,
                    style,
                    key,
                    value,
                    valueFormat,
                    format,
                    prefix,
                    suffix,
                    title,
                    titleTooltip,
                    valueStyle,
                    setProps,
                    ...others
                }
            } />
        </Suspense>
    );
}

AntdCountdown.propTypes = {
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
     * 日期时间显示格式，[参考资料](https://day.js.org/docs/en/display/format)，如`HH:mm:ss`代表`时:分:秒`
     */
    format: PropTypes.string,

    /**
     * 目标截止日期时间字符串，与`valueFormat`对应
     */
    value: PropTypes.string,

    /**
     * 针对`value`设置对应的日期时间解析格式，[参考资料](https://day.js.org/docs/en/display/format)
     * 默认值：`'YYYY-MM-DD hh:mm:ss'`
     */
    valueFormat: PropTypes.string,

    /**
     * 组件型，数值前缀内容
     */
    prefix: PropTypes.node,

    /**
     * 组件型，数值后缀内容
     */
    suffix: PropTypes.node,

    /**
     * 组件型，标题内容
     */
    title: PropTypes.node,

    /**
     * 为标题内容添加额外鼠标悬停提示信息
     */
    titleTooltip: PropTypes.string,

    /**
     * 数值内容css样式
     */
    valueStyle: PropTypes.object,

    /**
     * 监听倒计时结束事件
     */
    finishEvent: PropTypes.shape({
        /**
         * 事件时间戳
         */
        timestamp: PropTypes.number,
    }),

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
    setProps: PropTypes.func
};

export default AntdCountdown;

export const propTypes = AntdCountdown.propTypes;
export const defaultProps = AntdCountdown.defaultProps;