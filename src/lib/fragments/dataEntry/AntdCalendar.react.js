import React, { useEffect, useContext } from 'react';
import moment from 'moment';
import { Calendar, ConfigProvider } from 'antd';
import { str2Locale } from '../../components/locales.react';
import { isString } from 'lodash';
import useCss from '../../hooks/useCss';
import PropsContext from '../../contexts/PropsContext';
import { propTypes, defaultProps } from '../../components/dataEntry/AntdCalendar.react';

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

    const context = useContext(PropsContext)
    locale = (context && context.locale) || locale

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

export default AntdCalendar;

AntdCalendar.defaultProps = defaultProps;
AntdCalendar.propTypes = propTypes;