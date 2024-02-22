import React, { useState, useEffect, useContext } from 'react';
import { DatePicker, ConfigProvider } from 'antd';
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import 'dayjs/locale/zh-cn';
import { isString, isUndefined, isObject } from 'lodash';
import { str2Locale } from '../../components/locales.react';
import useCss from '../../hooks/useCss';
import PropsContext from '../../contexts/PropsContext';
import FormContext from '../../contexts/FormContext';
import FormItemContext from '../../contexts/FormItemContext';
import { propTypes, defaultProps } from '../../components/dataEntry/AntdDateRangePicker.react';

const { RangePicker } = DatePicker;

// 调用dayjs额外插件模块
dayjs.extend(isoWeek)
dayjs.extend(advancedFormat)

// 定义日期范围选择组件AntdDateRangePicker，api参数参考https://ant.design/components/date-picker-cn/
const AntdDateRangePicker = (props) => {
    // 取得必要属性或参数
    let {
        id,
        className,
        style,
        popupClassName,
        key,
        name,
        locale,
        setProps,
        picker,
        firstDayOfWeek,
        format,
        showTime,
        allowClear,
        autoFocus,
        value,
        disabledDatesStrategy,
        open,
        defaultValue,
        placeholder,
        disabled,
        bordered,
        variant,
        size,
        defaultPickerValue,
        status,
        popupContainer,
        readOnly,
        placement,
        extraFooter,
        presets,
        persistence,
        persisted_props,
        persistence_type,
        loading_state,
        batchPropsNames
    } = props;

    const [rawValue, setRawValue] = useState(null);

    // 解决value经回调更新后，rawValue未更新的问题
    useEffect(() => {
        if (value) {
            setRawValue([dayjs(value[0], format), dayjs(value[1], format)]);
        } else {
            setRawValue(null);
        }
    }, [value])

    // 批属性监听
    useEffect(() => {
        if (batchPropsNames && batchPropsNames.length !== 0) {
            let _batchPropsValues = {};
            for (let propName of batchPropsNames) {
                _batchPropsValues[propName] = props[propName];
            }
            setProps({
                batchPropsValues: _batchPropsValues
            })
        }
    })

    const context = useContext(PropsContext)
    const formContext = useContext(FormContext)
    const formItemContext = useContext(FormItemContext)
    locale = (context && context.locale) || locale

    // 处理AntdForm表单值搜集功能
    useEffect(() => {
        // 当上下文有效，且存在有效字段名
        if (formContext && formContext.setValues && (name || id)) {
            // 融合当前最新value值到上文_values中
            formContext.setValues((prevValues) => ({
                ...prevValues,
                ...{
                    [name || id]: value || null
                }
            }))
        }
    }, [value])

    // 如果当前组件被表单项包裹，初始渲染时对表单项进行赋值
    useEffect(() => {
        // 当上下文有效，且存在有效字段名
        if (formItemContext && formItemContext.setItemValues && (name || id)) {
            // 融合当前最新value值到上文itemValues中
            formItemContext.setItemValues((prevValues) => ({
                ...prevValues,
                ...{
                    [name || id]: value || null
                }
            }))
        }
    }, [])

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
                defaultPickerValue: dayjs(new Date()).format(format || (showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD'))
            })
        }
    }, [])

    useEffect(() => {
        if (!isUndefined(firstDayOfWeek)) {
            dayjs.locale(
                locale === 'en-us' ? 'en' : locale,
                {
                    week: {
                        dow: firstDayOfWeek
                    }
                }
            )
        }
    }, [firstDayOfWeek])

    // 监听blur事件
    const onBlur = e => {
        // 当上下文有效，且存在有效字段名
        if (formItemContext && formItemContext.setItemValues && formItemContext.validateTrigger.includes('onBlur') && (name || id)) {
            // 融合当前最新value值到上文itemValues中
            formItemContext.setItemValues((prevValues) => ({
                ...prevValues,
                ...{
                    [name || id]: value || null
                }
            }))
        }
    }

    // 监听focus事件
    const onFocus = e => {
        // 当上下文有效，且存在有效字段名
        if (formItemContext && formItemContext.setItemValues && formItemContext.validateTrigger.includes('onFocus') && (name || id)) {
            // 融合当前最新value值到上文itemValues中
            formItemContext.setItemValues((prevValues) => ({
                ...prevValues,
                ...{
                    [name || id]: value || null
                }
            }))
        }
    }

    const onChange = (date, dateString) => {
        if (Array.isArray(dateString)) {
            // 当上下文有效，且存在有效字段名
            if (formItemContext && formItemContext.setItemValues && formItemContext.validateTrigger.includes('onChange') && (name || id)) {
                // 融合当前最新value值到上文itemValues中
                formItemContext.setItemValues((prevValues) => ({
                    ...prevValues,
                    ...{
                        [name || id]: dateString[0] !== '' && dateString[1] !== '' ? [dateString[0], dateString[1]] : null
                    }
                }))
            }
            // 更新rawValue
            setRawValue(date);
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
                    if (current.isSame(dayjs(strategy.value, 'YYYY-MM-DD'))) {
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
                    if (!current.isSame(dayjs(strategy.value, 'YYYY-MM-DD'))) {
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
                    if (current.isSameOrBefore(dayjs(strategy.value, 'YYYY-MM-DD'))) {
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
                    if (current.isBefore(dayjs(strategy.value, 'YYYY-MM-DD'))) {
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
                    if (current.isSameOrAfter(dayjs(strategy.value, 'YYYY-MM-DD'))) {
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
                    if (current.isAfter(dayjs(strategy.value, 'YYYY-MM-DD'))) {
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
                    popupClassName={popupClassName}
                    key={key}
                    format={format}
                    size={
                        context && !isUndefined(context.componentSize) ?
                            context.componentSize :
                            size
                    }
                    picker={picker}
                    showTime={
                        // 处理时间选择面板在日期选定后的默认选中值
                        isObject(showTime) && showTime.defaultValue ?
                            {
                                defaultValue: [
                                    dayjs(showTime.defaultValue[0], showTime.format || 'HH:mm:ss'),
                                    dayjs(showTime.defaultValue[1], showTime.format || 'HH:mm:ss')
                                ]
                            } :
                            showTime
                    }
                    allowClear={isUndefined(readOnly) ? allowClear : !readOnly}
                    autoFocus={autoFocus}
                    disabled={
                        context && !isUndefined(context.componentDisabled) ?
                            [context.componentDisabled, context.componentDisabled] :
                            (
                                (disabled && disabled.length === 2) ? disabled : undefined
                            )}
                    allowEmpty={(disabled && disabled.length === 2) ? disabled : undefined}
                    placeholder={(placeholder && placeholder.length === 2) ? placeholder : undefined}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onChange={onChange}
                    variant={(
                        !variant ?
                            (bordered ? 'outlined' : 'borderless') :
                            variant
                    )}
                    disabledDate={disabledDatesStrategy ? checkDisabledDate : undefined}
                    defaultPickerValue={
                        defaultPickerValue ?
                            [dayjs(defaultPickerValue, format), dayjs(defaultPickerValue, format)] :
                            undefined
                    }
                    value={
                        rawValue ||
                        (
                            (value && value.length === 2) ?
                                [value[0] ? dayjs(value[0], format) : undefined,
                                value[1] ? dayjs(value[1], format) : undefined] :
                                undefined
                        )
                    }
                    defaultValue={
                        (defaultValue && defaultValue.length === 2) ?
                            [defaultValue[0] ? dayjs(defaultValue[0], format) : undefined,
                            defaultValue[1] ? dayjs(defaultValue[1], format) : undefined] :
                            undefined
                    }
                    status={status}
                    placement={placement}
                    open={isUndefined(readOnly) || !readOnly ? open : false}
                    onOpenChange={(e) => setProps({ open: e })}
                    inputReadOnly={readOnly}
                    renderExtraFooter={() => extraFooter}
                    presets={
                        // 处理预设快捷选项列表
                        (presets || []).map(
                            (preset) => ({
                                label: preset.label,
                                value: () => {
                                    return [dayjs(preset.value[0], format), dayjs(preset.value[1], format)];
                                }
                            })
                        )
                    }
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

export default AntdDateRangePicker;

AntdDateRangePicker.defaultProps = defaultProps;
AntdDateRangePicker.propTypes = propTypes;