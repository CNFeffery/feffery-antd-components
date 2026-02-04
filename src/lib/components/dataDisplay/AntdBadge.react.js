import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdBadge = React.lazy(
    () =>
        import(
            /* webpackChunkName: "data_display" */ '../../fragments/dataDisplay/AntdBadge.react'
        )
);

/**
 * 徽标组件AntdBadge
 */
const AntdBadge = ({
    id,
    children,
    className,
    style,
    styles,
    classNames,
    key,
    color,
    count,
    dot = false,
    offset,
    overflowCount = 99,
    showZero = false,
    status,
    text,
    title,
    size = 'default',
    nClicks = 0,
    setProps,
    ...others
}) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdBadge
                {...{
                    id,
                    children,
                    className,
                    style,
                    styles,
                    classNames,
                    key,
                    color,
                    count,
                    dot,
                    offset,
                    overflowCount,
                    showZero,
                    status,
                    text,
                    title,
                    size,
                    nClicks,
                    setProps,
                    ...others,
                }}
            />
        </Suspense>
    );
};

AntdBadge.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 组件型，定义徽标添加目标元素
     */
    children: PropTypes.node,

    /**
     * 当前组件css样式
     */
    style: PropTypes.object,

    /**
     * 当前组件css类名，支持[动态css](/advanced-classname)
     */
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

    /**
     * 细分控制子元素css样式
     */
    styles: PropTypes.exact({
        /**
         * 控制根元素css样式
         */
        root: PropTypes.object,
        /**
         * 控制徽标元素css样式
         */
        indicator: PropTypes.object,
    }),

    /**
     * 细分控制子元素css类
     */
    classNames: PropTypes.exact({
        /**
         * 控制根元素css类
         */
        root: PropTypes.string,
        /**
         * 控制徽标元素css类
         */
        indicator: PropTypes.string,
    }),

    /**
     * 徽标颜色
     */
    color: PropTypes.string,

    /**
     * 徽标显示的数字
     */
    count: PropTypes.number,

    /**
     * 是否用圆点代替数字显示
     * 默认值：`false`
     */
    dot: PropTypes.bool,

    /**
     * 当`count=0`时，是否强制显示数字
     * 默认值：`false`
     */
    showZero: PropTypes.bool,

    /**
     * 数字显示上限，超出会以显示`+`后缀
     * 默认值：`99`
     */
    overflowCount: PropTypes.number,

    /**
     * 徽标在水平、竖直方向上的像素偏移，格式为`[水平偏移, 竖直偏移]`
     */
    offset: PropTypes.arrayOf(PropTypes.number),

    /**
     * 徽标状态，可选项有`'success'`、`'processing'`、`'default'`、`'error'`、`'warning'`
     */
    status: PropTypes.oneOf([
        'success',
        'processing',
        'default',
        'error',
        'warning',
    ]),

    /**
     * 参数`status`有效时，设置徽标文本内容
     */
    text: PropTypes.string,

    /**
     * 徽标鼠标悬停显示文字内容
     */
    title: PropTypes.string,

    /**
     * 徽标尺寸规格，可选项有`'default'`、`'small'`
     */
    size: PropTypes.oneOf(['default', 'small']),

    /**
     * 监听徽标累计被点击次数
     * 默认值：`0`
     */
    nClicks: PropTypes.number,

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
};

export default AntdBadge;

export const propTypes = AntdBadge.propTypes;
export const defaultProps = AntdBadge.defaultProps;
