import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { DatePicker, ConfigProvider } from 'antd';
import moment from 'moment';
import { isString, isUndefined } from 'lodash';
import { str2Locale } from './locales.react';
import useCss from '../hooks/useCss';

const { RangePicker } = DatePicker;

// 定义日期范围选择组件AntdDateRangePicker，api参数参考https://ant.design/components/date-picker-cn/
const AntdDateRangePicker = (props) => {
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
        showTime,
        allowClear,
        value,
        disabledDatesStrategy,
        defaultValue,
        placeholder,
        disabled,
        bordered,
        size,
        defaultPickerValue,
        status,
        popupContainer,
        readOnly,
        placement,
        persistence,
        persisted_props,
        persistence_type,
        loading_state
    } = props;

    useEffect(() => {
        // 初始化value
        if (defaultValue && !value) {
            // 当defaultValue不为空且value为空时，为value初始化defaultValue对应值
            setProps({ value: defaultValue })
        }

        // 调整不同showTime下的format缺省参数
        if (showTime && !format) {
            setProps({
                format: 'YYYY-MM-DD HH:mm:ss'
            })
        } else if (!showTime && !format) {
            setProps({
                format: 'YYYY-MM-DD'
            })
        }

        // defaultPickerValue为空时默认定位到今日对应面板位置
        if (!defaultPickerValue) {
            setProps({
                defaultPickerValue: moment(new Date()).format(format || 'YYYY-MM-DD')
            })
        }
    }, [])

    const onChange = (date, dateString) => {
        if (Array.isArray(dateString)) {
            if (dateString[0] !== '' && dateString[1] !== '') {
                setProps({ value: [dateString[0], dateString[1]] })
            } else {
                setProps({ value: null })
            }
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
                } else if (strategy.target === 'specific-date') {
                    if (current.isSame(moment(strategy.value, 'YYYY-MM-DD'))) {
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
                } else if (strategy.target === 'specific-date') {
                    if (!current.isSame(moment(strategy.value, 'YYYY-MM-DD'))) {
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
                } else if (strategy.target === 'specific-date') {
                    if (current.isSameOrBefore(moment(strategy.value, 'YYYY-MM-DD'))) {
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
                } else if (strategy.target === 'specific-date') {
                    if (current.isBefore(moment(strategy.value, 'YYYY-MM-DD'))) {
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
                } else if (strategy.target === 'specific-date') {
                    if (current.isSameOrAfter(moment(strategy.value, 'YYYY-MM-DD'))) {
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
                } else if (strategy.target === 'specific-date') {
                    if (current.isAfter(moment(strategy.value, 'YYYY-MM-DD'))) {
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
                <RangePicker
                    id={id}
                    className={
                        isString(className) ?
                            className :
                            (className ? useCss(className) : undefined)
                    }
                    style={style}
                    key={key}
                    format={format}
                    size={size}
                    picker={picker}
                    showTime={showTime}
                    allowClear={isUndefined(readOnly) ? allowClear : !readOnly}
                    disabled={(disabled && disabled.length === 2) ? disabled : undefined}
                    allowEmpty={(disabled && disabled.length === 2) ? disabled : undefined}
                    placeholder={(placeholder && placeholder.length === 2) ? placeholder : undefined}
                    onChange={onChange}
                    bordered={bordered}
                    disabledDate={disabledDatesStrategy ? checkDisabledDate : undefined}
                    defaultPickerValue={
                        defaultPickerValue ?
                            moment(defaultPickerValue, format) :
                            undefined}
                    value={
                        (value && value.length === 2) ?
                            [value[0] ? moment(value[0], format) : undefined,
                            value[1] ? moment(value[1], format) : undefined] :
                            undefined
                    }
                    defaultValue={
                        (defaultValue && defaultValue.length === 2) ?
                            [defaultValue[0] ? moment(defaultValue[0], format) : undefined,
                            defaultValue[1] ? moment(defaultValue[1], format) : undefined] :
                            undefined
                    }
                    status={status}
                    placement={placement}
                    open={isUndefined(readOnly) || !readOnly ? undefined : false}
                    inputReadOnly={readOnly}
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

// 定义参数或属性
AntdDateRangePicker.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

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

    // 分别设置开始日期与结束日期的输入框是否禁用
    disabled: PropTypes.arrayOf(PropTypes.bool),

    // 设置是否显示时间选择界面，默认为false即不显示
    showTime: PropTypes.bool,

    // 设置尺寸大小，可选的有'small'、'middle'及'large'
    size: PropTypes.oneOf([
        'small', 'middle', 'large'
    ]),

    // 用于设置是否显示边框，默认为true即显示边框
    bordered: PropTypes.bool,

    // 空白输入下输入框的填充说明文字
    placeholder: PropTypes.arrayOf(PropTypes.string),

    // 设置日期选择面板的展开方向，可选的有'bottomLeft'、'bottomRight'、'topLeft'、'topRight'
    // 默认为'bottomLeft'
    placement: PropTypes.oneOf(['bottomLeft', 'bottomRight', 'topLeft', 'topRight']),

    // 已选择的日期范围
    value: PropTypes.arrayOf(PropTypes.string),

    // 设置默认选择的日期范围
    defaultValue: PropTypes.arrayOf(PropTypes.string),

    // 设置日期面板默认的时间位置
    defaultPickerValue: PropTypes.string,

    // 设置日期禁用项策略数组，满足数组中任意策略条件即会被禁用
    disabledDatesStrategy: PropTypes.arrayOf(
        PropTypes.exact({
            // 策略方式，可选的有'eq'（等于）、'ne'（不等于）、'le'（小于等于）、'lt'（小于）、
            // 'ge'（大于等于）、'gt'（大于）、'in'（属于）、'not-in'（不属于）、'in-enumerate-dates'（属于日期字符串枚举数组）、
            // 'not-in-enumerate-dates'（不属于日期字符串枚举数组）
            mode: PropTypes.oneOf([
                'eq', 'ne', 'le', 'lt', 'ge', 'gt', 'in', 'not-in',
                'in-enumerate-dates', 'not-in-enumerate-dates'
            ]),

            // 策略约束目标，可选的有'dayOfYear'（按年份天数）、'dayOfWeek'（按周天数）、
            // 'day'（按日）、'month'（按月份）、'quarter'（按季度）、'year'（按年份）、'specific-date'（具体日期）
            // 其中'specific-date'目标下，value值严格按照YYYY-MM-DD格式进行解析
            target: PropTypes.oneOf(['day', 'month', 'quarter', 'year', 'dayOfYear', 'dayOfWeek', 'specific-date']),

            // 与策略方式和策略约束目标对应的约束值
            value: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string,
                PropTypes.arrayOf(PropTypes.number),
                PropTypes.arrayOf(PropTypes.string)
            ])
        })
    ),

    // 设置校验状态，可选的有'error'、'warning'
    status: PropTypes.oneOf(['error', 'warning']),

    // 设置是否显示输入框内容清除按钮，默认为true即显示
    allowClear: PropTypes.bool,

    // 设置是否以只读模式进行渲染，底层利用open参数
    readOnly: PropTypes.bool,

    // 设置组件悬浮层参考容器类型，可选的有'parent'、'body'，默认为'parent'
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
    persistence_type: PropTypes.oneOf(['local', 'session', 'memory']),

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

// 设置默认参数
AntdDateRangePicker.defaultProps = {
    picker: 'date',
    disabled: [false, false],
    showTime: false,
    size: 'middle',
    bordered: true,
    allowClear: true,
    readOnly: false,
    persisted_props: ['value'],
    persistence_type: 'local',
    locale: 'zh-cn',
    placement: 'bottomLeft',
    popupContainer: 'body'
}

export default AntdDateRangePicker;