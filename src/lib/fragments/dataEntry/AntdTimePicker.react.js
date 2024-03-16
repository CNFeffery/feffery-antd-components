import React, { useEffect, useContext, useMemo } from 'react';
import { TimePicker, ConfigProvider } from 'antd';
import dayjs from 'dayjs';
import { isString, isUndefined } from 'lodash';
import { str2Locale } from '../../components/locales.react';
import useCss from '../../hooks/useCss';
import PropsContext from '../../contexts/PropsContext';
import useFormStore from '../../store/formStore';
import useFormItemStore from '../../store/formItemStore';
import { propTypes, defaultProps } from '../../components/dataEntry/AntdTimePicker.react';


// 定义时间选择组件AntdTimePicker，api参数参考https://ant.design/components/time-picker-cn/
const AntdTimePicker = (props) => {
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
        disabled,
        hourStep,
        minuteStep,
        secondStep,
        format,
        value,
        defaultValue,
        use12Hours,
        allowClear,
        autoFocus,
        placeholder,
        placement,
        bordered,
        variant,
        size,
        status,
        popupContainer,
        readOnly,
        extraFooter,
        showNow,
        persistence,
        persisted_props,
        persistence_type,
        loading_state,
        batchPropsNames
    } = props;

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
    const updateValues = useFormStore((state) => state.updateValues)
    const validateTrigger = useFormItemStore((state) => state.validateTrigger)
    const updateAntdTimePicker = useFormItemStore((state) => state.updateAntdTimePicker)
    locale = (context && context.locale) || locale

    const currentValidateTrigger = useMemo(() => {
        return validateTrigger.filter((item) => item[name || id]).flatMap((item) => item[name || id])
    }, [validateTrigger])

    // 处理AntdForm表单值搜集功能
    useEffect(() => {
        if (name || id) {
            updateValues({[name || id]: value || null})
        }
    }, [value])

    // 如果当前组件被表单项包裹，初始渲染时对表单项进行赋值
    useEffect(() => {
        if (name || id) {
            updateAntdTimePicker({[name || id]: {value: value || null}})
        }
    }, [])

    useEffect(() => {
        // 初始化value
        if (defaultValue && !value) {
            // 当defaultValue不为空且value为空时，为value初始化defaultValue对应值
            setProps({ value: defaultValue })
        }
    }, [])

    // 监听blur事件
    const onBlur = e => {
        if (currentValidateTrigger.includes('onBlur') && (name || id)) {
            updateAntdTimePicker({[name || id]: {value: value || null, timestamp: Date.now()}})
        }
    }

    // 监听focus事件
    const onFocus = e => {
        if (currentValidateTrigger.includes('onFocus') && (name || id)) {
            updateAntdTimePicker({[name || id]: {value: value || null, timestamp: Date.now()}})
        }
    }

    const onChange = (time, timeString) => {
        if (isString(timeString)) {
            if (currentValidateTrigger.includes('onChange') && (name || id)) {
                updateAntdTimePicker({[name || id]: {value: timeString || null, timestamp: Date.now()}})
            }
            setProps({ value: timeString })
        }
    }

    // 返回定制化的前端组件
    return (
        <div>
            <ConfigProvider locale={str2Locale.get(locale)}>
                <TimePicker
                    id={id}
                    className={
                        isString(className) ?
                            className :
                            (className ? useCss(className) : undefined)
                    }
                    style={style}
                    popupClassName={popupClassName}
                    key={key}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onChange={onChange}
                    placeholder={placeholder}
                    placement={placement}
                    variant={(
                        !variant ?
                            (bordered ? 'outlined' : 'borderless') :
                            variant
                    )}
                    size={
                        context && !isUndefined(context.componentSize) ?
                            context.componentSize :
                            size
                    }
                    disabled={
                        context && !isUndefined(context.componentDisabled) ?
                            context.componentDisabled :
                            disabled
                    }
                    hourStep={hourStep}
                    minuteStep={minuteStep}
                    secondStep={secondStep}
                    format={format}
                    value={value ? dayjs(value, format) : undefined}
                    defaultValue={defaultValue ? dayjs(defaultValue, format) : undefined}
                    use12Hours={use12Hours}
                    allowClear={isUndefined(readOnly) ? allowClear : !readOnly}
                    autoFocus={autoFocus}
                    status={status}
                    renderExtraFooter={() => extraFooter}
                    showNow={showNow}
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

export default AntdTimePicker;

AntdTimePicker.defaultProps = defaultProps;
AntdTimePicker.propTypes = propTypes;