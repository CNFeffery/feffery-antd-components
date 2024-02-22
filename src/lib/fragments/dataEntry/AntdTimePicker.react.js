import React, { useEffect, useContext } from 'react';
import { TimePicker, ConfigProvider } from 'antd';
import dayjs from 'dayjs';
import { isString, isUndefined } from 'lodash';
import { str2Locale } from '../../components/locales.react';
import useCss from '../../hooks/useCss';
import PropsContext from '../../contexts/PropsContext';
import FormContext from '../../contexts/FormContext';
import FormItemContext from '../../contexts/FormItemContext';
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
    }, [])

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

    const onChange = (time, timeString) => {
        if (isString(timeString)) {
            // 当上下文有效，且存在有效字段名
            if (formItemContext && formItemContext.setItemValues && formItemContext.validateTrigger.includes('onChange') && (name || id)) {
                // 融合当前最新value值到上文itemValues中
                formItemContext.setItemValues((prevValues) => ({
                    ...prevValues,
                    ...{
                        [name || id]: timeString || null
                    }
                }))
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