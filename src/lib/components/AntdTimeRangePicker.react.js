import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { TimePicker, ConfigProvider } from 'antd';
import moment from 'moment';
import { isUndefined, isString } from 'lodash';
import { str2Locale } from './locales.react';
import useCss from '../hooks/useCss';
import PropsContext from '../contexts/PropsContext';


const { RangePicker } = TimePicker

// 定义时间范围选择组件AntdTimeRangePicker，api参数参考https://ant.design/components/time-picker-cn/
const AntdTimeRangePicker = (props) => {
    // 取得必要属性或参数
    let {
        id,
        className,
        style,
        key,
        locale,
        setProps,
        value,
        defaultValue,
        placeholder,
        placement,
        disabled,
        hourStep,
        minuteStep,
        secondStep,
        format,
        use12Hours,
        allowClear,
        bordered,
        size,
        status,
        popupContainer,
        readOnly,
        persistence,
        persisted_props,
        persistence_type,
        loading_state
    } = props;

    const context = useContext(PropsContext)

    useEffect(() => {
        // 初始化value
        if (defaultValue && !value) {
            // 当defaultValue不为空且value为空时，为value初始化defaultValue对应值
            setProps({ value: defaultValue })
        }
    }, [])

    const onChange = (time, timeString) => {
        if (Array.isArray(timeString)) {
            setProps({ value: [timeString[0], timeString[1]] })
        } else {
            setProps({ value: null })
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
                    onChange={onChange}
                    disabled={
                        context && !isUndefined(context.componentDisabled) ?
                            [context.componentDisabled, context.componentDisabled] :
                            (
                                (disabled && disabled.length === 2) ? disabled : undefined
                            )
                    }
                    allowEmpty={(disabled && disabled.length === 2) ? disabled : undefined}
                    placeholder={(placeholder && placeholder.length === 2) ? placeholder : undefined}
                    placement={placement}
                    bordered={bordered}
                    size={size}
                    hourStep={hourStep}
                    minuteStep={minuteStep}
                    secondStep={secondStep}
                    format={format}
                    use12Hours={use12Hours}
                    allowClear={isUndefined(readOnly) ? allowClear : !readOnly}
                    defaultValue={
                        (defaultValue && defaultValue.length === 2) ?
                            [defaultValue[0] !== '' ? moment(defaultValue[0], format) : undefined,
                            defaultValue[1] !== '' ? moment(defaultValue[1], format) : undefined] :
                            undefined
                    }
                    value={
                        (value && value.length === 2) ?
                            [value[0] !== '' ? moment(value[0], format) : undefined,
                            value[1] !== '' ? moment(value[1], format) : undefined] :
                            undefined
                    }
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
                    open={isUndefined(readOnly) || !readOnly ? undefined : false}
                    inputReadOnly={readOnly}
                />
            </ConfigProvider>
        </div>
    );
}

// 定义参数或属性
AntdTimeRangePicker.propTypes = {
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

    // 设置小时选项间隔，默认为1
    hourStep: PropTypes.number,

    // 设置分钟选项间隔，默认为1
    minuteStep: PropTypes.number,

    // 设置秒选项间隔，默认为1
    secondStep: PropTypes.number,

    // 设置时间展示的格式，默认为'hh:mm:ss'
    format: PropTypes.string,

    // 设置是否使用12小时制，当设置为true时，format参数默认为'h:mm:ss a'
    use12Hours: PropTypes.bool,

    // 设置是否显示输入框内容清除按钮，默认为true即不显示
    allowClear: PropTypes.bool,

    // 空白输入下输入框的填充说明文字
    placeholder: PropTypes.arrayOf(PropTypes.string),

    // 设置时间选择面板的展开方向，可选的有'bottomLeft'、'bottomRight'、'topLeft'、'topRight'
    // 默认为'bottomLeft'
    placement: PropTypes.oneOf(['bottomLeft', 'bottomRight', 'topLeft', 'topRight']),

    // 设置输入框是否被禁用
    disabled: PropTypes.arrayOf(PropTypes.bool),

    // 已选择的范围开始时间
    value: PropTypes.arrayOf(PropTypes.string),

    // 设置默认已选择的时间范围
    defaultValue: PropTypes.arrayOf(PropTypes.string),

    // 用于设置是否显示边框，默认为true即显示边框
    bordered: PropTypes.bool,

    // 设置尺寸大小，可选的有'small'、'middle'及'large'
    size: PropTypes.oneOf([
        'small', 'middle', 'large'
    ]),

    // 设置校验状态，可选的有'error'、'warning'
    status: PropTypes.oneOf(['error', 'warning']),

    // 设置是否以只读模式进行渲染，底层利用Select的open参数
    readOnly: PropTypes.bool,

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
AntdTimeRangePicker.defaultProps = {
    disabled: [false, false],
    hourStep: 1,
    minuteStep: 1,
    secondStep: 1,
    use12Hours: false,
    allowClear: true,
    bordered: true,
    size: 'middle',
    format: 'HH:mm:ss',
    persisted_props: ['value'],
    persistence_type: 'local',
    locale: 'zh-cn',
    placement: 'bottomLeft',
    popupContainer: 'body'
}

export default AntdTimeRangePicker;