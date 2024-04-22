/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdSegmentedColoring = React.lazy(() => import(/* webpackChunkName: "data_entry" */ '../../fragments/dataEntry/AntdSegmentedColoring.react'));

const AntdSegmentedColoring = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdSegmentedColoring {...props} />
        </Suspense>
    );
}

// 定义参数或属性
AntdSegmentedColoring.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    // 自定义css样式
    style: PropTypes.object,

    key: PropTypes.string,

    // 设置&更新分段断点数组
    breakpoints: PropTypes.arrayOf(PropTypes.number).isRequired,

    // 设置分段css颜色数组，长度应为breakpoints长度-1
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,

    // 设置是否为数字输入框添加增减按钮，默认为true
    controls: PropTypes.bool,

    // 设置是否为数字输入框启用键盘上下键改变数值功能，默认为true
    keyboard: PropTypes.bool,

    // 设置数字输入框允许输入的合法数值下限，默认无限制
    min: PropTypes.number,

    // 设置数字输入框允许输入的合法数值上限，默认无限制
    max: PropTypes.number,

    // 设置数字输入框数值变化步长，默认为0.01
    step: PropTypes.number,

    // 设置数字输入框数值精度即小数位数，默认为2
    precision: PropTypes.number,

    // 设置整体禁用数字输入框，默认为false
    disabled: PropTypes.bool,

    // 设置组件整体尺寸规格，可选的有'large'、'small'及'middle'
    size: PropTypes.oneOf(['large', 'small', 'middle']),

    /**
     * 设置是否渲染边框，设置为true时等价于variant='outlined'
     * 默认：true
     */
    bordered: PropTypes.bool,

    /**
     * 设置形态变体类型，可选的有'outlined'、'borderless'、'filled'
     * 其中'outlined'等价于bordered=true，优先级高于bordered
     */
    variant: PropTypes.oneOf(['outlined', 'borderless', 'filled']),

    // 为数字输入框设置统一的placeholder信息
    placeholder: PropTypes.string,

    // 设置是否开启只读模式，默认为false
    readOnly: PropTypes.bool,

    // 设置是否开启纯图例模式，默认为false
    pureLegend: PropTypes.bool,

    // 为数字输入框设置统一的css样式
    inputNumberStyle: PropTypes.object,

    // 设置色块css样式
    colorBlockStyle: PropTypes.object,

    // 设置色块方位，可选的有'left'、'right'，默认为'right'
    colorBlockPosition: PropTypes.oneOf(['left', 'right']),

    // pureLegend模式下，设置文字css样式
    pureLegendLabelStyle: PropTypes.object,

    // 用于自定义需要纳入batchProps中的属性名数组
    batchPropsNames: PropTypes.arrayOf(PropTypes.string),

    // 打包监听batchPropsNames中定义的属性值变化
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
    setProps: PropTypes.func
};

// 设置默认参数
AntdSegmentedColoring.defaultProps = {
    size: 'middle',
    bordered: true,
    controls: true,
    disabled: false,
    keyboard: true,
    step: 0.01,
    precision: 2,
    colorBlockPosition: 'right',
    pureLegend: false,
    batchPropsNames: []
}

export default AntdSegmentedColoring;

export const propTypes = AntdSegmentedColoring.propTypes;
export const defaultProps = AntdSegmentedColoring.defaultProps;