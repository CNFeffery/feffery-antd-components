/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputNumber, Space, message } from 'antd';
import 'antd/dist/antd.css';

const size2size = new Map([
    ["small", "24px"],
    ["default", "32px"],
    ["large", "40px"]
]);

// 定义分段着色组件AntdSegmentedColoring
const AntdSegmentedColoring = (props) => {

    // 取得必要属性或参数
    const {
        id,
        key,
        className,
        style,
        size,
        bordered,
        controls,
        disabled,
        keyboard,
        placeholder,
        min,
        max,
        step,
        precision,
        readOnly,
        breakpoints,
        colors,
        inputNumberStyle,
        loading_state,
        setProps
    } = props;

    return (
        <Space
            id={id}
            key={key}
            style={{
                border: bordered ? "1px solid #d9d9d9" : 'none',
                borderRadius: "2px",
                padding: "12px 20px",
                ...style
            }}
            className={className}
            direction={"vertical"}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        >
            {breakpoints.slice(0, breakpoints.length - 1).map((v, i) => {
                return (
                    <Space key={`color-segment-${i}`}>
                        <InputNumber
                            style={inputNumberStyle}
                            size={size}
                            bordered={bordered}
                            controls={controls}
                            disabled={disabled}
                            keyboard={keyboard}
                            placeholder={placeholder}
                            min={min}
                            max={max}
                            step={step}
                            precision={precision}
                            readOnly={readOnly}
                            value={breakpoints[i]}
                            onChange={(e) => {
                                if (e !== null && i === 0 && e < breakpoints[i + 1]) {
                                    let _breakpoints = [...breakpoints];
                                    _breakpoints[i] = e;
                                    setProps({ breakpoints: _breakpoints });
                                } else if (
                                    e !== null &&
                                    i > 0 &&
                                    e > breakpoints[i - 1] &&
                                    e < breakpoints[i + 1]
                                ) {
                                    let _breakpoints = [...breakpoints];
                                    _breakpoints[i] = e;
                                    setProps({ breakpoints: _breakpoints });
                                } else if (e !== null) {
                                    message.warning({
                                        content: "数值超出相邻断点，请调整后再输入！",
                                        duration: 1.5
                                    });
                                }
                            }}
                        />
                        <span>~</span>
                        <InputNumber
                            style={inputNumberStyle}
                            size={size}
                            bordered={bordered}
                            controls={controls}
                            disabled={disabled}
                            keyboard={keyboard}
                            placeholder={placeholder}
                            min={min}
                            max={max}
                            step={step}
                            precision={precision}
                            readOnly={readOnly}
                            value={breakpoints[i + 1]}
                            onChange={(e) => {
                                if (
                                    e !== null &&
                                    i === breakpoints.length - 2 &&
                                    e > breakpoints[i]
                                ) {
                                    let _breakpoints = [...breakpoints];
                                    _breakpoints[i + 1] = e;
                                    setProps({ breakpoints: _breakpoints });
                                } else if (
                                    e !== null &&
                                    e > breakpoints[i] &&
                                    e < breakpoints[i + 2]
                                ) {
                                    let _breakpoints = [...breakpoints];
                                    _breakpoints[i + 1] = e;
                                    setProps({ breakpoints: _breakpoints });
                                } else if (e !== null) {
                                    message.warning({
                                        content: "数值超出相邻断点，请调整后再输入！",
                                        duration: 1.5
                                    });
                                }
                            }}
                        />
                        <div
                            style={{
                                height: size2size.get(size),
                                backgroundColor: colors[i],
                                width: size2size.get(size)
                            }}
                        />
                    </Space>
                );
            })}
        </Space>
    );
}

// 定义参数或属性
AntdSegmentedColoring.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类
    className: PropTypes.string,

    // 自定义css样式
    style: PropTypes.object,

    key: PropTypes.string,

    // 设置组件整体尺寸规格，可选的有'large'、'small'及'default'
    size: PropTypes.oneOf(['large', 'small', 'default']),

    // 设置是否渲染外边框，默认为true
    bordered: PropTypes.bool,

    // 设置是否为数字输入框添加增减按钮，默认为true
    controls: PropTypes.bool,

    // 设置整体禁用数字输入框，默认为false
    disabled: PropTypes.bool,

    // 设置是否为数字输入框启用键盘上下键改变数值功能，默认为true
    keyboard: PropTypes.bool,

    // 为数字输入框设置统一的placeholder信息
    placeholder: PropTypes.string,

    // 设置数字输入框允许输入的合法数值下限，默认无限制
    min: PropTypes.number,

    // 设置数字输入框允许输入的合法数值上限，默认无限制
    max: PropTypes.number,

    // 设置数字输入框数值变化步长，默认为0.01
    step: PropTypes.number,

    // 设置数字输入框数值精度即小数位数，默认为2
    precision: PropTypes.number,

    // 设置是否开启只读模式，默认为false
    readOnly: PropTypes.bool,

    // 设置&更新分段断点数组
    breakpoints: PropTypes.arrayOf(PropTypes.number).isRequired,

    // 设置分段css颜色数组，长度应为breakpoints长度-1
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,

    // 为数字输入框设置统一的css样式
    inputNumberStyle: PropTypes.object,

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
    size: 'default',
    bordered: true,
    controls: true,
    disabled: false,
    keyboard: true,
    step: 0.01,
    precision: 2,
    readOnly: false
}

export default React.memo(AntdSegmentedColoring);