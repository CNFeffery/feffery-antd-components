import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DatePicker, ConfigProvider } from 'antd';
import moment from 'moment';
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';

const { RangePicker } = DatePicker;

// 定义日期范围选择部件AntdDateRangePicker，api参数参考https://ant.design/components/date-picker-cn/
export default class AntdDateRangePicker extends Component {
    render() {
        // 取得必要属性或参数
        let {
            id,
            className,
            style,
            setProps,
            picker,
            showTime,
            placeholderStart,
            placeholderEnd,
            disabledStart,
            disabledEnd,
            bordered,
            size,
            defaultPickerValue,
            loading_state
        } = this.props;

        // defaultPickerValue为空时默认定位到今日对应面板位置
        if (!defaultPickerValue) {
            defaultPickerValue = {
                value: moment(new Date()).format('YYYY-MM-DD'),
                format: 'YYYY-MM-DD'
            }
        }

        function onChange(date, dateString) {
            if (typeof dateString == typeof []) {
                setProps({ selectedStartDate: dateString[0], selectedEndDate: dateString[1] })
            }
        }

        if (typeof placeholderStart == typeof undefined && typeof placeholderEnd == typeof undefined) {
            // 返回定制化的前端部件
            return (
                <div>
                    <ConfigProvider locale={zhCN}>
                        <RangePicker
                            id={id}
                            className={className}
                            style={style}
                            picker={picker}
                            showTime={showTime}
                            disabled={[disabledStart, disabledEnd]}
                            onChange={onChange}
                            bordered={bordered}
                            size={size}
                            defaultPickerValue={[
                                moment(defaultPickerValue.value, defaultPickerValue.format),
                                moment(defaultPickerValue.value, defaultPickerValue.format)
                            ]}
                            data-dash-is-loading={
                                (loading_state && loading_state.is_loading) || undefined
                            }
                            getPopupContainer={(triggerNode) => triggerNode.parentNode}
                        />
                    </ConfigProvider>
                </div>
            );
        }

        // 返回定制化的前端部件
        return (
            <div>
                <ConfigProvider locale={zhCN}>
                    <RangePicker
                        id={id}
                        className={className}
                        style={style}
                        picker={picker}
                        showTime={showTime}
                        disabled={[disabledStart, disabledEnd]}
                        placeholder={[placeholderStart, placeholderEnd]}
                        onChange={onChange}
                        bordered={bordered}
                        defaultPickerValue={[
                            moment(defaultPickerValue.value, defaultPickerValue.format),
                            moment(defaultPickerValue.value, defaultPickerValue.format)
                        ]}
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
AntdDateRangePicker.propTypes = {
    // 部件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 设置日期选择的粒度（date：精确到天，week：精确到周，month：精确到月，quarter：精确到季度，year：精确到年。默认为date）
    picker: PropTypes.oneOf(['date', 'week', 'month', 'quarter', 'year']),

    // 设置是否显示时间选择界面，默认为false即不显示
    showTime: PropTypes.bool,

    // 空白输入下开始输入框的填充说明文字
    placeholderStart: PropTypes.string,

    // 空白输入下结束输入框的填充说明文字
    placeholderEnd: PropTypes.string,

    // 设置开始输入框是否被禁用
    disabledStart: PropTypes.bool,

    // 设置结束输入框是否被禁用
    disabledEnd: PropTypes.bool,

    // 已选择的范围开始日期
    selectedStartDate: PropTypes.string,

    // 已选择的范围结束日期
    selectedEndDate: PropTypes.string,

    // 用于设置是否显示边框，默认为true即显示边框
    bordered: PropTypes.bool,

    // 设置尺寸大小，可选的有'small'、'middle'及'large'
    size: PropTypes.oneOf([
        'small', 'middle', 'large'
    ]),

    // 设置日期面板默认的时间位置
    defaultPickerValue: PropTypes.exact(
        {
            value: PropTypes.string,

            format: PropTypes.string
        }
    ),

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
AntdDateRangePicker.defaultProps = {
    picker: 'date',
    showTime: false,
    bordered: true
}