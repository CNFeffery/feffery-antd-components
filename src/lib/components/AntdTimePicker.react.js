import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TimePicker, ConfigProvider } from 'antd';
import moment from 'moment';
import { isString } from 'lodash';
import { str2Locale } from './locales.react';


// 定义时间选择组件AntdTimePicker，api参数参考https://ant.design/components/time-picker-cn/
export default class AntdTimePicker extends Component {

    constructor(props) {
        super(props)
        // 初始化value
        if (props.defaultValue && !props.value) {
            // 当defaultValue不为空且value为空时，为value初始化defaultValue对应值
            props.setProps({ value: props.defaultValue })
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
            disabled,
            hourStep,
            minuteStep,
            secondStep,
            format,
            value,
            defaultValue,
            use12Hours,
            allowClear,
            placeholder,
            bordered,
            size,
            status,
            popupContainer,
            persistence,
            persisted_props,
            persistence_type,
            loading_state
        } = this.props;

        const onChange = (time, timeString) => {
            if (isString(timeString)) {
                setProps({ value: timeString })
            }
        }

        // 返回定制化的前端组件
        return (
            <div>
                <ConfigProvider locale={str2Locale.get(locale)}>
                    <TimePicker
                        id={id}
                        className={className}
                        style={style}
                        key={key}
                        onChange={onChange}
                        placeholder={placeholder}
                        bordered={bordered}
                        size={size}
                        disabled={disabled}
                        hourStep={hourStep}
                        minuteStep={minuteStep}
                        secondStep={secondStep}
                        format={format}
                        value={value ? moment(value, format) : undefined}
                        defaultValue={defaultValue ? moment(defaultValue, format) : undefined}
                        use12Hours={use12Hours}
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
AntdTimePicker.propTypes = {
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

    // 对应当前已选择时间
    value: PropTypes.string,

    // 设置默认选定的时间
    defaultValue: PropTypes.string,

    // 空白输入下的填充说明文字，默认为'请选择时间'
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
AntdTimePicker.defaultProps = {
    style: {
        width: 220
    },
    format: 'HH:mm:ss',
    persisted_props: ['value'],
    persistence_type: 'local',
    locale: 'zh-cn',
    popupContainer: 'body'
}
