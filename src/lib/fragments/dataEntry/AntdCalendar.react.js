import React, { useEffect, useContext } from 'react';
import dayjs from 'dayjs';
import { Calendar, ConfigProvider } from 'antd';
import { str2Locale } from '../../components/locales.react';
import { isString } from 'lodash';
import useCss from '../../hooks/useCss';
import PropsContext from '../../contexts/PropsContext';
import useFormStore from '../../store/formStore';
import useFormItemStore from '../../store/formItemStore';
import { propTypes, defaultProps } from '../../components/dataEntry/AntdCalendar.react';

// 定义日历组件AntdCalendar，api参数参考https://ant.design/components/calendar-cn/
const AntdCalendar = (props) => {
    // 取得必要属性或参数
    let {
        id,
        className,
        style,
        key,
        name,
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
    const updateValues = useFormStore((state) => state.updateValues)
    const updateAntdCalendar = useFormItemStore((state) => state.updateAntdCalendar)
    locale = (context && context.locale) || locale

    // 处理AntdForm表单值搜集功能
    useEffect(() => {
        if (name || id) {
            updateValues({[name || id]: value || null})
        }
    }, [value])

    useEffect(() => {
        // 初始化value
        if (defaultValue && !value) {
            // 当defaultValue不为空且value为空时，为value初始化defaultValue对应的value值
            setProps({ value: defaultValue })
        }
    }, [])

    // 如果当前组件被表单项包裹，初始渲染时对表单项进行赋值
    useEffect(() => {
        if (name || id) {
            updateAntdCalendar({[name || id]: {value: value || null}})
        }
    }, [])

    const onSelect = e => {
        if (name || id) {
            updateAntdCalendar({[name || id]: {value: e.format(format) || null, timestamp: Date.now()}})
        }
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
                defaultValue={defaultValue && dayjs(defaultValue, format)}
                value={value && dayjs(value, format)}
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