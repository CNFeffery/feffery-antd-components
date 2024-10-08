// react核心
import React, { useState, useEffect, useContext } from 'react';
// antd核心
import { DatePicker, ConfigProvider } from 'antd';
// 辅助库
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import 'dayjs/locale/zh-cn';
import { isString, isUndefined, isObject } from 'lodash';
import { pickBy } from 'ramda';
import { str2Locale } from '../../components/locales.react';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 上下文
import PropsContext from '../../contexts/PropsContext';
import FormContext from '../../contexts/FormContext';
// 状态管理
import useFormStore from '../../store/formStore';
// 参数类型
import { propTypes, defaultProps } from '../../components/dataEntry/AntdDateRangePicker.react';

const { RangePicker } = DatePicker;

// 调用dayjs额外插件模块
dayjs.extend(isoWeek)
dayjs.extend(advancedFormat)
dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)

/**
 * 日期范围选择组件AntdDateRangePicker
 */
const AntdDateRangePicker = (props) => {
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
        pickerValue,
        status,
        popupContainer,
        readOnly,
        placement,
        extraFooter,
        presets,
        customCells,
        persistence,
        persisted_props,
        persistence_type,
        loading_state,
        batchPropsNames,
        needConfirm
    } = props;

    const [rawValue, setRawValue] = useState(null);

    // 解决value经回调更新后，rawValue未更新的问题
    useEffect(() => {
        if (formId && (name || id)) {
            if (currentFormValue) {
                setRawValue([dayjs(currentFormValue[0], format), dayjs(currentFormValue[1], format)]);
            } else {
                setRawValue(null);
            }
        } else {
            if (value) {
                setRawValue([dayjs(value[0], format), dayjs(value[1], format)]);
            } else {
                setRawValue(null);
            }
        }
    }, [value, currentFormValue])

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

        // 处理pickerValue缺省赋值
        if (!pickerValue) {
            setProps({
                pickerValue: dayjs(new Date()).format(format || (showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD'))
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

    const onChange = (date, dateString) => {
        if (Array.isArray(dateString)) {
            // AntdForm表单批量控制
            if (formId && (name || id)) {
                // 表单值更新
                updateItemValue(formId, name || id, dateString)
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

    return (
        <div>
            <ConfigProvider locale={str2Locale.get(locale)}>
                <RangePicker
                    // 提取具有data-*或aria-*通配格式的属性
                    {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), props)}
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
                        isObject(showTime) && showTime.defaultValue && showTime.defaultValue.length === 2 ?
                            {
                                defaultValue: [
                                    dayjs(
                                        dayjs(new Date()).format('YYYY-MM-DD') + ' ' + showTime.defaultValue[0],
                                        'YYYY-MM-DD' + ' ' + (showTime.format || 'HH:mm:ss')
                                    ),
                                    dayjs(
                                        dayjs(new Date()).format('YYYY-MM-DD') + ' ' + showTime.defaultValue[1],
                                        'YYYY-MM-DD' + ' ' + (showTime.format || 'HH:mm:ss')
                                    )
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
                    onChange={onChange}
                    onPanelChange={(v, m) => {
                        setProps({
                            pickerValue: [v[0].format(format), v[1] && v[1].format(format)],
                        })
                    }}
                    variant={(
                        !variant ?
                            (bordered ? 'outlined' : 'borderless') :
                            variant
                    )}
                    disabledDate={disabledDatesStrategy ? checkDisabledDate : undefined}
                    pickerValue={
                        pickerValue ?
                            (
                                Array.isArray(pickerValue) ?
                                    (
                                        pickerValue[1] ?
                                            [dayjs(pickerValue[0], format), dayjs(pickerValue[1], format)] :
                                            dayjs(pickerValue[0], format)
                                    ) :
                                    dayjs(pickerValue, format)
                            ) :
                            undefined
                    }
                    value={
                        formId && (name || id) ?
                            (
                                (currentFormValue && currentFormValue.length === 2) ?
                                    [currentFormValue[0] ? dayjs(currentFormValue[0], format) : undefined,
                                    currentFormValue[1] ? dayjs(currentFormValue[1], format) : undefined] :
                                    undefined
                            ) :
                            (
                                rawValue ||
                                (
                                    (value && value.length === 2) ?
                                        [value[0] ? dayjs(value[0], format) : undefined,
                                        value[1] ? dayjs(value[1], format) : undefined] :
                                        undefined
                                )
                            )
                    }
                    defaultValue={
                        formId && (name || id) ?
                            undefined :
                            (
                                (defaultValue && defaultValue.length === 2) ?
                                    [defaultValue[0] ? dayjs(defaultValue[0], format) : undefined,
                                    defaultValue[1] ? dayjs(defaultValue[1], format) : undefined] :
                                    undefined
                            )
                    }
                    status={status}
                    placement={placement}
                    open={isUndefined(readOnly) || !readOnly ? open : false}
                    onOpenChange={(e) => setProps({ open: e })}
                    inputReadOnly={readOnly}
                    renderExtraFooter={() => extraFooter}
                    needConfirm={needConfirm}
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
                    cellRender={
                        customCells ?
                            (current, info) => {
                                // 尝试搜索命中项
                                let matchCell;
                                // 目前仅作用于日期类型
                                if (info.type === 'date') {
                                    matchCell = customCells.filter(item => {
                                        // 初始化基础条件
                                        let conditions = true
                                        // 若具有明确年份
                                        if (item.year) {
                                            conditions = conditions && current.year() === item.year
                                        }
                                        // 若具有明确月份
                                        if (item.month) {
                                            conditions = conditions && current.month() + 1 === item.month
                                        }
                                        // 若具有明确日期
                                        if (item.date) {
                                            conditions = conditions && current.date() === item.date
                                        }
                                        return conditions;
                                    });
                                }
                                if (matchCell.length > 0) {
                                    return (
                                        <div className={
                                            matchCell[0].className ?
                                                `ant-picker-cell-inner ${matchCell[0].className}` :
                                                'ant-picker-cell-inner'
                                        }
                                            style={matchCell[0].style}
                                        >
                                            {current.date()}
                                        </div>
                                    );
                                }
                                return info.originNode;
                            } :
                            undefined
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