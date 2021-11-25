import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputNumber } from 'antd';
import 'antd/dist/antd.css';

// 定义数字输入框组件AntdInputNumber，api参数参考https://ant.design/components/input-number-cn/
export default class AntdInputNumber extends Component {

    constructor(props) {
        super(props)
        // 初始化value
        if (props.defaultValue && !props.value) {
            // 当defaultValue不为空时，为value初始化defaultValue对应的value值
            props.setProps({ value: props.defaultValue })
        }
    }

    render() {
        // 取得必要属性或参数
        let {
            id,
            className,
            style,
            size,
            addonBefore,
            addonAfter,
            bordered,
            controls,
            value,
            disabled,
            keyboard,
            min,
            max,
            step,
            precision,
            readOnly,
            stringMode,
            nSubmit,
            setProps,
            loading_state
        } = this.props;

        // 监听输入内容变化事件
        const onChange = v => {
            setProps({ value: v })
        }

        // 监听跳步按钮点击事件
        const onStep = v => {
            setProps({ value: v })
        }

        // 监听聚焦到输入框时enter键点按次数
        const onPressEnter = e => {
            setProps({ nSubmit: nSubmit + 1 })
        }

        return (
            <InputNumber id={id}
                className={className}
                style={style}
                size={size}
                addonBefore={addonBefore}
                addonAfter={addonAfter}
                bordered={bordered}
                controls={controls}
                value={value}
                disabled={disabled}
                keyboard={keyboard}
                min={min}
                max={max}
                step={step}
                precision={precision}
                readOnly={readOnly}
                stringMode={stringMode}
                onChange={onChange}
                onPressEnter={onPressEnter}
                onStep={onStep}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                } />
        );
    }
}

// 定义参数或属性
AntdInputNumber.propTypes = {
    // 部件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 用于设置输入框尺寸，可选的有'small'、'middle'与'large'，默认不填则为'middle'
    size: PropTypes.oneOf(['small', 'middle', 'large']),

    // 设置前置标签内容
    addonBefore: PropTypes.string,

    // 设置后置标签内容
    addonAfter: PropTypes.string,

    // 设置是否有边框，默认为true
    bordered: PropTypes.bool,

    // 设置是否显示增减辅助按钮，默认为true
    controls: PropTypes.bool,

    // 设置默认值
    defaultValue: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),

    // 对应当前输入值
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),

    // 设置是否禁用，默认为false
    disabled: PropTypes.bool,

    // 设置是否启用键盘快捷行为，默认为true
    keyboard: PropTypes.bool,

    // 设置允许输入的最小值，默认不限制
    min: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),

    // 设置允许输入的最大值，默认不限制
    max: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),

    // 设置每次改变的步长
    step: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),

    // 设置数值精度，即小数位数
    precision: PropTypes.number,

    // 设置是否以只读模式渲染，默认为false
    readOnly: PropTypes.bool,

    // 设置是否开启字符值模式，可用于输入高精度小数时不丢失精度
    // 开启此模式后，min、max、step、value与defaultValue都应当为字符型，默认为false
    stringMode: PropTypes.bool,

    // 记录聚焦于输入框内部时，enter键被点按的次数
    nSubmit: PropTypes.number,

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
AntdInputNumber.defaultProps = {
    nSubmit: 0
}