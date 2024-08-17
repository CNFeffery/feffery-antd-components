// react核心
import React, { useEffect, useContext, useState } from 'react';
// antd核心
import { Calendar, ConfigProvider } from 'antd';
// 辅助库
import dayjs from 'dayjs';
import { str2Locale } from '../../components/locales.react';
import { isString } from 'lodash';
import { pickBy } from 'ramda';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 上下文
import PropsContext from '../../contexts/PropsContext';
import FormContext from '../../contexts/FormContext';
// 状态管理
import useFormStore from '../../store/formStore';
// 参数类型
import { propTypes, defaultProps } from '../../components/dataEntry/AntdCalendar.react';

/**
 * 日历组件AntdCalendar
 */
const AntdCalendar = (props) => {
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
        customCells,
        setProps,
        loading_state,
        persistence,
        persisted_props,
        persistence_type
    } = props;

    const [mode, setMode] = useState('month');

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

    const onPanelChange = (newValue, _mode) => {
        setMode(_mode);
    };

    const onSelect = (e, { source }) => {
        // AntdForm表单批量控制
        if (formId && (name || id)) {
            // 表单值更新
            updateItemValue(formId, name || id, e.format(format))
        }
        setProps({
            value: e.format(format)
        })
        if ((mode === 'month' && ['date', 'customize'].includes(source)) || (mode === 'year' && ['month', 'customize'].includes(source))) {
            setProps({
                cellClickEvent: {
                    type: source,
                    timestamp: new Date().getTime()
                }
            })
        }
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
                onPanelChange={onPanelChange}
                onSelect={onSelect}
                fullscreen={size !== 'default'}
                cellRender={
                    customCells ?
                        (current, info) => {
                            // 尝试搜索命中项
                            let matchCell;
                            if (info.type === 'date') {
                                matchCell = customCells.filter(item => item.type === 'date' && item.month === current.month() + 1 && item.date === current.date());
                            } else if (info.type === 'month') {
                                matchCell = customCells.filter(item => item.type === 'month' && item.month === current.month() + 1);
                            }
                            if (matchCell.length > 0) {
                                return matchCell[0].content;
                            }
                            return info.type === 'month' || info.type === 'date' ? null : info.originNode;
                        } :
                        undefined
                }
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