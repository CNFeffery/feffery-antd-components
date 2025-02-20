/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdSegmentedColoring = React.lazy(() => import(/* webpackChunkName: "data_entry" */ '../../fragments/dataEntry/AntdSegmentedColoring.react'));

/**
 * 分段着色组件AntdSegmentedColoring
 */
const AntdSegmentedColoring = ({
    id,
    key,
    className,
    style,
    size = 'middle',
    bordered = true,
    variant,
    controls = true,
    disabled = false,
    keyboard = true,
    placeholder,
    min,
    max,
    step = 0.01,
    precision = 2,
    readOnly,
    pureLegend = false,
    breakpoints,
    colors,
    inputNumberStyle,
    colorBlockPosition = 'right',
    colorBlockStyle,
    pureLegendLabelStyle,
    setProps,
    batchPropsNames = [],
    ...others
}) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdSegmentedColoring {
                ...{
                    id,
                    key,
                    className,
                    style,
                    size,
                    bordered,
                    variant,
                    controls,
                    disabled,
                    keyboard,
                    placeholder,
                    min,
                    max,
                    step,
                    precision,
                    readOnly,
                    pureLegend,
                    breakpoints,
                    colors,
                    inputNumberStyle,
                    colorBlockPosition,
                    colorBlockStyle,
                    pureLegendLabelStyle,
                    setProps,
                    batchPropsNames,
                    ...others
                }
            } />
        </Suspense>
    );
}

AntdSegmentedColoring.propTypes = {
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
     * 必填，监听或设置分段断点数组
     */
    breakpoints: PropTypes.arrayOf(PropTypes.number).isRequired,

    /**
     * 必填，为各分段设置颜色，数组长度应为`breakpoints`长度减1
     */
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,

    /**
     * 是否为各分段数值输入框添加增减按钮
     * 默认值：`true`
     */
    controls: PropTypes.bool,

    /**
     * 是否可通过键盘上下方向键增减各分段数值输入框数值
     * 默认值：`true`
     */
    keyboard: PropTypes.bool,

    /**
     * 各分段数值输入框允许输入数值下限，默认无限制
     */
    min: PropTypes.number,

    /**
     * 各分段数值输入框允许输入数值上限，默认无限制
     */
    max: PropTypes.number,

    /**
     * 各分段数值输入框数值调整步长
     * 默认值：`0.01`
     */
    step: PropTypes.number,

    /**
     * 各分段数值输入框数值精度
     * 默认值：`2`
     */
    precision: PropTypes.number,

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
     * 形态变体类型，可选项有`'outlined'`、`'borderless'`、`'filled'`、`'underlined'`，其中`'outlined'`等价于`bordered=True`，但优先级更高
     */
    variant: PropTypes.oneOf(['outlined', 'borderless', 'filled', 'underlined']),

    /**
     * 各分段数值输入框占位文字内容
     */
    placeholder: PropTypes.string,

    /**
     * 是否渲染为只读状态
     * 默认值：`false`
     */
    readOnly: PropTypes.bool,

    /**
     * 是否开启纯图例模式
     * 默认值：`false`
     */
    pureLegend: PropTypes.bool,

    /**
     * 各分段数值输入框统一css样式
     */
    inputNumberStyle: PropTypes.object,

    /**
     * 色块css样式
     */
    colorBlockStyle: PropTypes.object,

    /**
     * 色块显示方位，可选项有`'left'`、`'right'`
     * 默认值：`'right'`
     */
    colorBlockPosition: PropTypes.oneOf(['left', 'right']),

    /**
     * 监听分段色块点击事件
     */
    colorBlockClickEvent: PropTypes.shape({
        /**
         * 被点击色块的颜色值
         */
        color: PropTypes.string,
        /**
         * 被点击色块对应范围值
         */
        range: PropTypes.arrayOf(PropTypes.number),
        /**
         * 事件对应时间戳
         */
        timestamp: PropTypes.number
    }),

    /**
     * 当`pureLegend=True`时，设置各分段数值统一css样式
     */
    pureLegendLabelStyle: PropTypes.object,

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
    setProps: PropTypes.func
};

export default AntdSegmentedColoring;

export const propTypes = AntdSegmentedColoring.propTypes;
export const defaultProps = AntdSegmentedColoring.defaultProps;