import React, { useEffect, useContext } from 'react';
import dayjs from 'dayjs';
import { Calendar, ConfigProvider } from 'antd';
import { str2Locale } from '../../components/locales.react';
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import useCss from '../../hooks/useCss';
import PropsContext from '../../contexts/PropsContext';
import FormContext from '../../contexts/FormContext';
import useFormStore from '../../store/formStore';
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
    const formId = useContext(FormContext)

    const updateItemValue = useFormStore((state) => state.updateItemValue)
    const deleteItemValue = useFormStore((state) => state.deleteItemValue)

    locale = (context && context.locale) || locale

    // 收集当前组件相关表单值
    const currentFormValue = useFormStore(state => state.values?.[formId]?.[name || id])

    // 处理组件卸载后，对应表单项值的清除
    useEffect(() => {
        return () => {
            // 若上文中存在有效表单id
            if (formId && (name || id)) {
                // 表单值更新
                deleteItemValue(formId, name || id)
            }
        }
    }, [name, id])

    useEffect(() => {
        // 初始化value
        if (defaultValue && !value) {
            // 当defaultValue不为空且value为空时，为value初始化defaultValue对应的value值
            setProps({ value: defaultValue })
        }
    }, [])

    const onSelect = e => {
        // AntdForm表单批量控制
        if (formId && (name || id)) {
            // 表单值更新
            updateItemValue(formId, name || id, e.format(format))
        }
        setProps({
            value: e.format(format)
        })
    };

    return (
        <ConfigProvider locale={str2Locale.get(locale)}>
            <Calendar
                // 提取具有data-*或aria-*通配格式的属性
                {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), props)}
                id={id}
                className={
                    isString(className) ?
                        className :
                        (className ? useCss(className) : undefined)
                }
                style={style}
                key={key}
                defaultValue={
                    formId && (name || id) ?
                        undefined :
                        defaultValue && dayjs(defaultValue, format)
                }
                value={
                    formId && (name || id) ?
                        currentFormValue && dayjs(currentFormValue, format) :
                        value && dayjs(value, format)
                }
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