import React, { useEffect, useContext } from 'react';
import { TimePicker, ConfigProvider } from 'antd';
import dayjs from 'dayjs';
import { isUndefined, isString } from 'lodash';
import { str2Locale } from '../../components/locales.react';
import useCss from '../../hooks/useCss';
import PropsContext from '../../contexts/PropsContext';
import FormContext from '../../contexts/FormContext';
import useFormStore from '../../store/formStore';
import { propTypes, defaultProps } from '../../components/dataEntry/AntdTimeRangePicker.react';

const { RangePicker } = TimePicker

// 定义时间范围选择组件AntdTimeRangePicker，api参数参考https://ant.design/components/time-picker-cn/
const AntdTimeRangePicker = (props) => {
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
        autoFocus,
        bordered,
        variant,
        size,
        open,
        status,
        popupContainer,
        readOnly,
        extraFooter,
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

    const updateValues = useFormStore((state) => state.updateValues)

    locale = (context && context.locale) || locale

    // 处理AntdForm表单值搜集功能
    useEffect(() => {
        // 若上文中存在有效表单id
        if (formContext.formId && (name || id)) {
            // 表单值更新
            updateValues(formContext.formId, name || id, value)
        }
    }, [value])

    useEffect(() => {
        // 初始化value
        if (defaultValue && !value) {
            // 当defaultValue不为空且value为空时，为value初始化defaultValue对应值
            setProps({ value: defaultValue })
        }
    }, [])

    const onChange = (time, timeString) => {
        if (timeString[0] !== '' && timeString[1] !== '') {
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
                    popupClassName={popupClassName}
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
                    hourStep={hourStep}
                    minuteStep={minuteStep}
                    secondStep={secondStep}
                    format={format}
                    use12Hours={use12Hours}
                    allowClear={isUndefined(readOnly) ? allowClear : !readOnly}
                    autoFocus={autoFocus}
                    defaultValue={
                        (defaultValue && defaultValue.length === 2) ?
                            [defaultValue[0] !== '' ? dayjs(defaultValue[0], format) : undefined,
                            defaultValue[1] !== '' ? dayjs(defaultValue[1], format) : undefined] :
                            undefined
                    }
                    value={
                        (value && value.length === 2) ?
                            [value[0] !== '' ? dayjs(value[0], format) : undefined,
                            value[1] !== '' ? dayjs(value[1], format) : undefined] :
                            undefined
                    }
                    status={status}
                    renderExtraFooter={() => extraFooter}
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
                    open={isUndefined(readOnly) || !readOnly ? open : false}
                    onOpenChange={(e) => setProps({ open: e })}
                    inputReadOnly={readOnly}
                />
            </ConfigProvider>
        </div>
    );
}

export default AntdTimeRangePicker;

AntdTimeRangePicker.defaultProps = defaultProps;
AntdTimeRangePicker.propTypes = propTypes;