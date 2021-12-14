import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Slider } from 'antd';
import 'antd/dist/antd.css';

// 定义滑动输入条组件AntdSlider，api参数参考https://ant.design/components/slider-cn/
export default class AntdSlider extends Component {

    constructor(props) {
        super(props)
        // 初始化value
        if (props.range) {
            // 范围选择模式时
            var defaultValue = props.defaultValue ? props.defaultValue : [props.min + 0.25 * (props.max - props.min), props.min + 0.75 * (props.max - props.min)]
            props.setProps({ value: defaultValue })
        } else {
            // 单值选择模式时
            var defaultValue = props.defaultValue ? props.defaultValue : 0.25 * (props.max - props.min)
            props.setProps({ value: defaultValue })
        }
    }

    render() {
        // 取得必要属性或参数
        var {
            id,
            className,
            style,
            defaultValue,
            disabled,
            range,
            min,
            max,
            step,
            marks,
            tooltipVisible,
            tooltipPrefix,
            tooltipSuffix,
            loading_state,
            setProps
        } = this.props;

        // 初始化defaultValue
        if (range) {
            // 范围选择模式时
            defaultValue = defaultValue ? defaultValue : [min + 0.25 * (max - min), min + 0.75 * (max - min)]
            setProps({ defaultValue: defaultValue })
        } else {
            // 单值选择模式时
            defaultValue = defaultValue ? defaultValue : 0.5 * (max + min)
            setProps({ defaultValue: defaultValue })
        }

        // 设置tipFormatter格式化函数
        function formatter(value) {
            return tooltipPrefix + `${value}` + tooltipSuffix
        }

        // 监听用户完成拖拽的动作
        const onAfterChange = (value) => {
            setProps({ value: value })
        }

        // 返回定制化的前端组件
        return (
            <Slider
                id={id}
                className={className}
                style={style}
                defaultValue={defaultValue}
                disabled={disabled}
                range={range}
                min={min}
                max={max}
                step={step}
                marks={marks}
                tooltipVisible={tooltipVisible}
                onAfterChange={onAfterChange}
                tipFormatter={formatter}
                getTooltipPopupContainer={(triggerNode) => triggerNode.parentNode}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
            />
        );
    }
}

// 定义参数或属性
AntdSlider.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 设置默认值或默认范围
    defaultValue: PropTypes.oneOfType([
        PropTypes.number, PropTypes.arrayOf(PropTypes.number)
    ]),

    // 设置是否禁用整个组件
    disabled: PropTypes.bool,

    // 是否以范围形式进行渲染
    range: PropTypes.bool,

    // 设置范围最小值
    min: PropTypes.number,

    // 设置范围最大值
    max: PropTypes.number,

    // 设置步长
    step: PropTypes.number,

    // 记录用户输入的值或范围
    value: PropTypes.oneOfType([
        PropTypes.number, PropTypes.arrayOf(PropTypes.number)
    ]),

    // 定义特定刻度参数
    marks: PropTypes.object,

    // 用于设置刻度对应的tooltip的显示策略，true代表一直保持显示
    // false表示即使鼠标悬浮也不显示，默认不设置则只有鼠标悬浮时才会显示
    tooltipVisible: PropTypes.bool,

    //  设置tooltip显示内容前缀文字
    tooltipPrefix: PropTypes.string,

    // 设置tooltip显示内容后缀文字
    tooltipSuffix: PropTypes.string,

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
AntdSlider.defaultProps = {
    disabled: false,
    range: false,
    min: 0,
    max: 100,
    step: 1,
    tooltipPrefix: '',
    tooltipSuffix: ''
}