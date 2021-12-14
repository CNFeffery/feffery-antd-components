import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Calendar, ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';

// 定义日历组件AntdCalendar，api参数参考https://ant.design/components/calendar-cn/
export default class AntdCalendar extends Component {

    constructor(props) {
        super(props)
        // 初始化value
        if (props.defaultValue) {
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
            validRange,
            disabledDates,
            defaultValue,
            format,
            size,
            setProps,
            loading_state
        } = this.props;

        const onSelect = e => {
            setProps({
                value: e.format(format)
            })
        };

        const checkDisabledDate = date => {
            return disabledDates.dates.indexOf(date.format(disabledDates?.format || format)) !== -1
        }

        return (
            <ConfigProvider locale={zhCN}>
                <Calendar id={id}
                    className={className}
                    style={style}
                    validRange={validRange && validRange.length && [
                        moment(validRange[0].value, validRange[0].format || format),
                        moment(validRange[1].value, validRange[1].format || format)
                    ]}
                    defaultValue={defaultValue && moment(defaultValue.value, defaultValue.format || format)}
                    disabledDate={disabledDates && checkDisabledDate}
                    onSelect={onSelect}
                    fullscreen={size !== 'default'}
                    data-dash-is-loading={
                        (loading_state && loading_state.is_loading) || undefined
                    } />
            </ConfigProvider>
        );
    }
}

// 定义参数或属性
AntdCalendar.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 设置可显示日期范围
    validRange: PropTypes.arrayOf(
        PropTypes.exact({
            // 设置开始/结束日期字符串
            value: PropTypes.string,

            // 设置开始/结束日期格式字符串
            format: PropTypes.string
        })
    ),

    // 设置禁用日期数组
    disabledDates: PropTypes.exact({
        // 日期字符串数组
        dates: PropTypes.arrayOf(PropTypes.string),

        // 统一设置日期格式，优先级高于format
        format: PropTypes.string
    }),

    // 设置面板默认日期
    defaultValue: PropTypes.exact(
        {
            // 日期值字符串
            value: PropTypes.string,

            // 日期格式字符串
            format: PropTypes.string
        }
    ),

    // 设置全局日期格式format，优先级低于单个设置的format参数，默认为'YYYY-MM-DD'
    format: PropTypes.string,

    // 设置日历尺寸规格，可选的有'default'与'large'
    size: PropTypes.oneOf(['default', 'large']),

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
AntdCalendar.defaultProps = {
    format: 'YYYY-MM-DD',
    size: 'default'
}
