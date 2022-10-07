import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DatePicker, ConfigProvider } from 'antd';
import moment from 'moment';
import { str2Locale } from './locales.react';
import 'antd/dist/antd.css';

// 定义日期选择组件AntdDatePicker，api参数参考https://ant.design/components/date-picker-cn/
export default class AntdDatePicker extends Component {

    constructor(props) {
        super(props)
        // 初始化value
        if (props.defaultValue) {
            // 当defaultValue不为空时，为value初始化defaultValue对应值
            props.setProps({ value: props.defaultValue })
        }

        // 调整不同showTime下的format缺省参数
        if (props.showTime && !props.format) {
            props.setProps({
                format: 'YYYY-MM-DD HH:mm:ss'
            })
        } else if (!props.showTime && !props.format) {
            props.setProps({
                format: 'YYYY-MM-DD'
            })
        }

        // defaultPickerValue为空时默认定位到今日对应面板位置
        if (!props.defaultPickerValue) {
            props.setProps({
                defaultPickerValue: moment(new Date()).format('YYYY-MM-DD')
            })
        }
    }

    render() {
        // 取得必要属性或参数
        let {
            id,
            className,
            style,
            key,
            locale,
            setProps,
            picker,
            format,
            disabled,
            showTime,
            allowClear,
            placeholder,
            disabledDatesStrategy,
            defaultPickerValue,
            value,
            defaultValue,
            bordered,
            size,
            status,
            popupContainer,
            persistence,
            persisted_props,
            persistence_type,
            loading_state
        } = this.props;

        const onChange = (date, dateString) => {
            if (typeof dateString == typeof '') {
                setProps({ value: dateString })
            }
        }

        const checkDisabledDate = current => {

            // 根据disabledDatesStrategy设定的各个子条件进行是否禁用判断
            for (let i = 0; i < disabledDatesStrategy.length; i++) {
                let strategy = disabledDatesStrategy[i];
                // 判断当前子策略方式
                if (strategy.mode === 'eq') {
                    // 判断当前子策略约束目标
                    if (strategy.target === 'day') {
                        if (current.date() === strategy.value) {
                            return true;
                        }
                    } else if (strategy.target === 'month') {
                        if (current.month() === strategy.value) {
                            return true;
                        }
                    } else if (strategy.target === 'quarter') {
                        if (current.quarter() === strategy.value) {
                            return true;
                        }
                    } else if (strategy.target === 'year') {
                        if (current.year() === strategy.value) {
                            return true;
                        }
                    } else if (strategy.target === 'dayOfYear') {
                        if (current.dayOfYear() === strategy.value) {
                            return true;
                        }
                    } else if (strategy.target === 'dayOfWeek') {
                        if (current.isoWeekday() === strategy.value) {
                            return true;
                        }
                    }
                } else if (strategy.mode === 'ne') {
                    // 判断当前子策略约束目标
                    if (strategy.target === 'day') {
                        if (current.date() !== strategy.value) {
                            return true;
                        }
                    } else if (strategy.target === 'month') {
                        if (current.month() !== strategy.value) {
                            return true;
                        }
                    } else if (strategy.target === 'quarter') {
                        if (current.quarter() !== strategy.value) {
                            return true;
                        }
                    } else if (strategy.target === 'year') {
                        if (current.year() !== strategy.value) {
                            return true;
                        }
                    } else if (strategy.target === 'dayOfYear') {
                        if (current.dayOfYear() !== strategy.value) {
                            return true;
                        }
                    } else if (strategy.target === 'dayOfWeek') {
                        if (current.isoWeekday() !== strategy.value) {
                            return true;
                        }
                    }
                } else if (strategy.mode === 'le') {
                    // 判断当前子策略约束目标
                    if (strategy.target === 'day') {
                        if (current.date() <= strategy.value) {
                            return true;
                        }
                    } else if (strategy.target === 'month') {
                        if (current.month() <= strategy.value) {
                            return true;
                        }
                    } else if (strategy.target === 'quarter') {
                        if (current.quarter() <= strategy.value) {
                            return true;
                        }
                    } else if (strategy.target === 'year') {
                        if (current.year() <= strategy.value) {
                            return true;
                        }
                    } else if (strategy.target === 'dayOfYear') {
                        if (current.dayOfYear() <= strategy.value) {
                            return true;
                        }
                    } else if (strategy.target === 'dayOfWeek') {
                        if (current.isoWeekday() <= strategy.value) {
                            return true;
                        }
                    }
                } else if (strategy.mode === 'lt') {
                    // 判断当前子策略约束目标
                    if (strategy.target === 'day') {
                        if (current.date() < strategy.value) {
                            return true;
                        }
                    } else if (strategy.target === 'month') {
                        if (current.month() < strategy.value) {
                            return true;
                        }
                    } else if (strategy.target === 'quarter') {
                        if (current.quarter() < strategy.value) {
                            return true;
                        }
                    } else if (strategy.target === 'year') {
                        if (current.year() < strategy.value) {
                            return true;
                        }
                    } else if (strategy.target === 'dayOfYear') {
                        if (current.dayOfYear() < strategy.value) {
                            return true;
                        }
                    } else if (strategy.target === 'dayOfWeek') {
                        if (current.isoWeekday() < strategy.value) {
                            return true;
                        }
                    }
                } else if (strategy.mode === 'ge') {
                    // 判断当前子策略约束目标
                    if (strategy.target === 'day') {
                        if (current.date() >= strategy.value) {
                            return true;
                        }
                    } else if (strategy.target === 'month') {
                        if (current.month() >= strategy.value) {
                            return true;
                        }
                    } else if (strategy.target === 'quarter') {
                        if (current.quarter() >= strategy.value) {
                            return true;
                        }
                    } else if (strategy.target === 'year') {
                        if (current.year() >= strategy.value) {
                            return true;
                        }
                    } else if (strategy.target === 'dayOfYear') {
                        if (current.dayOfYear() >= strategy.value) {
                            return true;
                        }
                    } else if (strategy.target === 'dayOfWeek') {
                        if (current.isoWeekday() >= strategy.value) {
                            return true;
                        }
                    }
                } else if (strategy.mode === 'gt') {
                    // 判断当前子策略约束目标
                    if (strategy.target === 'day') {
                        if (current.date() > strategy.value) {
                            return true;
                        }
                    } else if (strategy.target === 'month') {
                        if (current.month() > strategy.value) {
                            return true;
                        }
                    } else if (strategy.target === 'quarter') {
                        if (current.quarter() > strategy.value) {
                            return true;
                        }
                    } else if (strategy.target === 'year') {
                        if (current.year() > strategy.value) {
                            return true;
                        }
                    } else if (strategy.target === 'dayOfYear') {
                        if (current.dayOfYear() > strategy.value) {
                            return true;
                        }
                    } else if (strategy.target === 'dayOfWeek') {
                        if (current.isoWeekday() > strategy.value) {
                            return true;
                        }
                    }
                } else if (strategy.mode === 'in') {
                    // 判断当前子策略约束目标
                    if (strategy.target === 'day') {
                        if (strategy.value.includes(current.date())) {
                            return true;
                        }
                    } else if (strategy.target === 'month') {
                        if (strategy.value.includes(current.month())) {
                            return true;
                        }
                    } else if (strategy.target === 'quarter') {
                        if (strategy.value.includes(current.quarter())) {
                            return true;
                        }
                    } else if (strategy.target === 'year') {
                        if (strategy.value.includes(current.year())) {
                            return true;
                        }
                    } else if (strategy.target === 'dayOfYear') {
                        if (strategy.value.includes(current.dayOfYear())) {
                            return true;
                        }
                    } else if (strategy.target === 'dayOfWeek') {
                        if (strategy.value.includes(current.isoWeekday())) {
                            return true;
                        }
                    }
                } else if (strategy.mode === 'not-in') {
                    // 判断当前子策略约束目标
                    if (strategy.target === 'day') {
                        if (!strategy.value.includes(current.date())) {
                            return true;
                        }
                    } else if (strategy.target === 'month') {
                        if (!strategy.value.includes(current.month())) {
                            return true;
                        }
                    } else if (strategy.target === 'quarter') {
                        if (!strategy.value.includes(current.quarter())) {
                            return true;
                        }
                    } else if (strategy.target === 'year') {
                        if (!strategy.value.includes(current.year())) {
                            return true;
                        }
                    } else if (strategy.target === 'dayOfYear') {
                        if (!strategy.value.includes(current.dayOfYear())) {
                            return true;
                        }
                    } else if (strategy.target === 'dayOfWeek') {
                        if (!strategy.value.includes(current.isoWeekday())) {
                            return true;
                        }
                    }
                } else if (strategy.mode === 'in-enumerate-dates') {
                    if (strategy.value.includes(current.format(format))) {
                        return true;
                    }
                } else if (strategy.mode === 'not-in-enumerate-dates') {
                    if (!strategy.value.includes(current.format(format))) {
                        return true;
                    }
                }
            }
        }

        // 返回定制化的前端组件
        return (
            <div>
                <ConfigProvider locale={str2Locale.get(locale)}>
                    <DatePicker
                        id={id}
                        className={className}
                        style={style}
                        key={key}
                        format={format}
                        onChange={onChange}
                        picker={picker}
                        disabled={disabled}
                        placeholder={placeholder}
                        bordered={bordered}
                        size={size}
                        disabledDate={disabledDatesStrategy ? checkDisabledDate : undefined}
                        defaultPickerValue={moment(defaultPickerValue, format)}
                        value={value ? moment(value, format) : undefined}
                        defaultValue={defaultValue ? moment(defaultValue, format) : undefined}
                        showTime={showTime}
                        allowClear={allowClear}
                        status={status}
                        persistence={persistence}
                        persisted_props={persisted_props}
                        persistence_type={persistence_type}
                        data-dash-is-loading={
                            (loading_state && loading_state.is_loading) || undefined
                        }
                        getPopupContainer={
                            popupContainer === 'parent' ?
                                (triggerNode) => triggerNode.parentNode :
                                undefined
                        }
                    />
                </ConfigProvider>
            </div>
        );
    }
}

// 定义参数或属性
AntdDatePicker.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 设置语言环境，可选的有'zh-cn'、'en-us'
    locale: PropTypes.oneOf(['zh-cn', 'en-us']),

    // 设置日期格式format，默认为'YYYY-MM-DD'
    format: PropTypes.string,

    // 设置日期选择的粒度（date：精确到天，week：精确到周，month：精确到月，quarter：精确到季度，year：精确到年。默认为date）
    picker: PropTypes.oneOf(['date', 'week', 'month', 'quarter', 'year']),

    // 设置是否禁用组件，默认为false
    disabled: PropTypes.bool,

    // 对应用户选中的日期字符串
    value: PropTypes.string,

    // 设置是否显示时间选择界面，默认为false即不显示
    showTime: PropTypes.bool,

    // 设置是否显示输入框内容清除按钮，默认为true即显示
    allowClear: PropTypes.bool,

    // 设置日期面板默认的时间位置
    defaultPickerValue: PropTypes.string,

    // 设置默认选中的日期值
    defaultValue: PropTypes.string,

    // 设置日期禁用项策略数组，满足数组中任意策略条件即会被禁用
    disabledDatesStrategy: PropTypes.arrayOf(
        PropTypes.exact({
            // 策略方式，可选的有'eq'（等于）、'ne'（不等于）、'le'（小于等于）、'lt'（小于）、
            // 'ge'（大于等于）、'gt'（大于）、'in'（属于）、'not-in'（不属于）、'in-enumerate-dates'（属于日期字符串枚举数组）、
            // 'not-in-enumerate-dates'（不属于日期字符串枚举数组）
            mode: PropTypes.oneOf(['eq', 'ne', 'le', 'lt', 'ge', 'gt', 'in', 'not-in', 'in-enumerate-dates', 'not-in-enumerate-dates']),

            // 策略约束目标，可选的有'dayOfYear'（按年份天数）、'dayOfWeek'（按周天数）、
            // 'day'（按日）、'month'（按月份）、'quarter'（按季度）、'year'（按年份）
            target: PropTypes.oneOf(['day', 'month', 'quarter', 'year', 'dayOfYear', 'dayOfWeek']),

            // 与策略方式和策略约束目标对应的约束值
            value: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.arrayOf(PropTypes.number),
                PropTypes.arrayOf(PropTypes.string)
            ])
        })
    ),

    // 空白输入下的填充说明文字
    placeholder: PropTypes.string,

    // 用于设置是否显示边框，默认为true即显示边框
    bordered: PropTypes.bool,

    // 设置尺寸大小，可选的有'small'、'middle'及'large'
    size: PropTypes.oneOf([
        'small', 'middle', 'large'
    ]),

    // 设置校验状态，可选的有'error'、'warning'
    status: PropTypes.oneOf(['error', 'warning']),

    // 设置悬浮层锚定策略，可选的有'parent'、'body'，默认为'body'
    popupContainer: PropTypes.oneOf(['parent', 'body']),

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
    setProps: PropTypes.func,

    /**
   * Used to allow user interactions in this component to be persisted when
   * the component - or the page - is refreshed. If `persisted` is truthy and
   * hasn't changed from its previous value, a `value` that the user has
   * changed while using the app will keep that change, as long as
   * the new `value` also matches what was given originally.
   * Used in conjunction with `persistence_type`.
   */
    persistence: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.number
    ]),

    /**
     * Properties whose user interactions will persist after refreshing the
     * component or the page. Since only `value` is allowed this prop can
     * normally be ignored.
     */
    persisted_props: PropTypes.arrayOf(PropTypes.oneOf(['value'])),

    /**
     * Where persisted user changes will be stored:
     * memory: only kept in memory, reset on page refresh.
     * local: window.localStorage, data is kept after the browser quit.
     * session: window.sessionStorage, data is cleared once the browser quit.
     */
    persistence_type: PropTypes.oneOf(['local', 'session', 'memory'])
};

// 设置默认参数
AntdDatePicker.defaultProps = {
    picker: 'date',
    showTime: false,
    allowClear: true,
    bordered: true,
    persisted_props: ['value'],
    persistence_type: 'local',
    locale: 'zh-cn',
    style: {
        width: 220
    },
    popupContainer: 'body'
}
