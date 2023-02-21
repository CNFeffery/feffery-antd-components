import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Calendar, ConfigProvider } from 'antd';
import { str2Locale } from './locales.react';
import { isString } from 'lodash';
import useCss from '../hooks/useCss';


// 定义日历组件AntdCalendar，api参数参考https://ant.design/components/calendar-cn/
const AntdCalendar = (props) => {
    // 取得必要属性或参数
    let {
        id,
        className,
        style,
        key,
        locale,
        defaultValue,
        value,
        format,
        size,
        setProps,
        loading_state,
        persistence,
        persisted_props,
        persistence_type
    } = props;

    useEffect(() => {
        // 初始化value
        if (defaultValue && !value) {
            // 当defaultValue不为空且value为空时，为value初始化defaultValue对应的value值
            setProps({ value: defaultValue })
        }
    }, [])

    const onSelect = e => {
        setProps({
            value: e.format(format)
        })
    };

    return (
        <ConfigProvider locale={str2Locale.get(locale)}>
            <Calendar id={id}
                className={
                    isString(className) ?
                        className :
                        (className ? useCss(className) : undefined)
                }
                style={style}
                key={key}
                defaultValue={defaultValue && moment(defaultValue, format)}
                value={value && moment(value, format)}
                onSelect={onSelect}
                fullscreen={size !== 'default'}
                persistence={persistence}
                persisted_props={persisted_props}
                persistence_type={persistence_type}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                } />
        </ConfigProvider>
    );
}

// 定义参数或属性
AntdCalendar.propTypes = {
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

    // 设置全局日期格式format，优先级低于单个设置的format参数，默认为'YYYY-MM-DD'
    format: PropTypes.string,

    // 设置日历尺寸规格，可选的有'default'与'large'，默认为default
    size: PropTypes.oneOf(['default', 'large']),

    // 对应当前面板已选中值
    value: PropTypes.string,

    // 设置面板默认日期
    defaultValue: PropTypes.string,

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
AntdCalendar.defaultProps = {
    format: 'YYYY-MM-DD',
    size: 'default',
    persisted_props: ['value'],
    persistence_type: 'local',
    locale: 'zh-cn'
}

export default AntdCalendar;