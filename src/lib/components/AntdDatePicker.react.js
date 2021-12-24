import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DatePicker, ConfigProvider } from 'antd';
import moment from 'moment';
import zhCN from 'antd/lib/locale/zh_CN';
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
            setProps,
            picker,
            format,
            disabled,
            showTime,
            placeholder,
            disabledDates,
            defaultPickerValue,
            value,
            defaultValue,
            bordered,
            size,
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

        const checkDisabledDate = date => {
            return disabledDates.dates.indexOf(date.format(format)) !== -1
        }

        // 返回定制化的前端组件
        return (
            <div>
                <ConfigProvider locale={zhCN}>
                    <DatePicker
                        id={id}
                        className={className}
                        style={style}
                        format={format}
                        onChange={onChange}
                        picker={picker}
                        disabled={disabled}
                        placeholder={placeholder}
                        bordered={bordered}
                        size={size}
                        disabledDate={disabledDates ? checkDisabledDate : undefined}
                        defaultPickerValue={moment(defaultPickerValue, format)}
                        value={value ? moment(value, format) : undefined}
                        defaultValue={defaultValue ? moment(defaultValue, format) : undefined}
                        showTime={showTime}
                        persistence={persistence}
                        persisted_props={persisted_props}
                        persistence_type={persistence_type}
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
AntdDatePicker.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

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

    // 设置是否显示输入框内容清除按钮，默认为true即不显示
    allowClear: PropTypes.bool,

    // 设置日期面板默认的时间位置
    defaultPickerValue: PropTypes.string,

    // 设置默认选中的日期值
    defaultValue: PropTypes.string,

    // 设置禁用日期数组
    disabledDates: PropTypes.arrayOf(PropTypes.string),

    // 空白输入下的填充说明文字
    placeholder: PropTypes.string,

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
    format: 'YYYY-MM-DD',
    picker: 'date',
    showTime: false,
    allowClear: true,
    bordered: true,
    persisted_props: ['value'],
    persistence_type: 'local',
    style: {
        width: 220
    }
}
