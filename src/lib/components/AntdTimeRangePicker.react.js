import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TimePicker, ConfigProvider } from 'antd';
import moment from 'moment';
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';

const { RangePicker } = TimePicker

// 定义时间范围选择组件AntdTimeRangePicker，api参数参考https://ant.design/components/time-picker-cn/
export default class AntdTimeRangePicker extends Component {
    render() {
        // 取得必要属性或参数
        let {
            id,
            className,
            style,
            setProps,
            placeholderStart,
            placeholderEnd,
            disabledStart,
            disabledEnd,
            hourStep,
            minuteStep,
            secondStep,
            format,
            use12Hours,
            allowClear,
            inputReadOnly,
            defaultPickerValue,
            bordered,
            size,
            loading_state
        } = this.props;

        const onChange = (time, timeString) => {
            if (typeof timeString == typeof '') {
                setProps({ selectedStartTime: timeString[0], selectedEndTime: timeString[1] })
            }
        }

        // defaultPickerValue为空时默认定位到今日对应面板位置
        if (!defaultPickerValue) {
            defaultPickerValue = {
                value: moment(new Date()).format('HH:mm:ss'),
                format: 'HH:mm:ss'
            }
        }

        // 返回定制化的前端部件
        return (
            <div>
                <ConfigProvider locale={zhCN}>
                    <RangePicker
                        id={id}
                        className={className}
                        style={style}
                        onChange={onChange}
                        placeholder={[placeholderStart, placeholderEnd]}
                        bordered={bordered}
                        size={size}
                        defaultPickerValue={
                            [moment(defaultPickerValue.value, defaultPickerValue.format),
                            moment(defaultPickerValue.value, defaultPickerValue.format)]
                        }
                        disabled={[disabledStart, disabledEnd]}
                        hourStep={hourStep}
                        minuteStep={minuteStep}
                        secondStep={secondStep}
                        format={format}
                        use12Hours={use12Hours}
                        allowClear={allowClear}
                        inputReadOnly={inputReadOnly}
                        data-dash-is-loading={
                            (loading_state && loading_state.is_loading) || undefined
                        }
                        getPopupContainer={(triggerNode) => triggerNode.parentNode}
                    />
                </ConfigProvider>
            </div>
        );
    }
}

// 定义参数或属性
AntdTimeRangePicker.propTypes = {
    // 部件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 设置是否禁用组件，默认为false
    disabled: PropTypes.bool,

    // 设置小时选项间隔，默认为1
    hourStep: PropTypes.number,

    // 设置分钟选项间隔，默认为1
    minuteStep: PropTypes.number,

    // 设置秒选项间隔，默认为1
    secondStep: PropTypes.number,

    // 设置时间展示的格式，默认为'HH:mm:ss'
    format: PropTypes.string,

    // 设置是否使用12小时制，当设置为true时，format参数默认为'h:mm:ss a'
    use12Hours: PropTypes.bool,

    // 设置是否显示输入框内容清除按钮，默认为true即不显示
    allowClear: PropTypes.bool,

    // 设置是否开启只读模式，默认为false
    inputReadOnly: PropTypes.bool,

    // 空白输入下开始输入框的填充说明文字
    placeholderStart: PropTypes.string,

    // 空白输入下结束输入框的填充说明文字
    placeholderEnd: PropTypes.string,

    // 设置开始输入框是否被禁用
    disabledStart: PropTypes.bool,

    // 设置结束输入框是否被禁用
    disabledEnd: PropTypes.bool,

    // 已选择的范围开始时间
    selectedStartTime: PropTypes.string,

    // 已选择的范围结束时间
    selectedEndTime: PropTypes.string,

    // 设置时间面板默认的时间位置
    defaultPickerValue: PropTypes.exact(
        {
            // 对应时间值
            value: PropTypes.string,

            // 对应时间格式
            format: PropTypes.string
        }
    ),

    // 用于设置是否显示边框，默认为true即显示边框
    bordered: PropTypes.bool,

    // 设置尺寸大小，可选的有'small'、'middle'及'large'
    size: PropTypes.oneOf([
        'small', 'middle', 'large'
    ]),

    /**
    * Object that holds the loading state object coming from dash-renderer
    */
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
AntdTimeRangePicker.defaultProps = {
    style: {
        width: 220
    }
}
