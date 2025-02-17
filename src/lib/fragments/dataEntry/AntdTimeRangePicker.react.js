// react核心
import React, { useEffect, useContext } from 'react';
// antd核心
import { TimePicker, ConfigProvider } from 'antd';
// 辅助库
import dayjs from 'dayjs';
import { isUndefined, isString } from 'lodash';
import { pickBy } from 'ramda';
import { str2Locale } from '../../components/locales.react';
import { useLoading } from '../../components/utils';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 上下文
import PropsContext from '../../contexts/PropsContext';
import FormContext from '../../contexts/FormContext';
// 状态管理
import useFormStore from '../../store/formStore';
// 参数类型
import { propTypes, defaultProps } from '../../components/dataEntry/AntdTimeRangePicker.react';

const { RangePicker } = TimePicker

/**
 * 时间范围选择组件AntdTimeRangePicker
 */
const AntdTimeRangePicker = (props) => {
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
        prefix,
        suffixIcon,
        popupContainer,
        readOnly,
        extraFooter,
        persistence,
        persisted_props,
        persistence_type,
        batchPropsNames,
        needConfirm,
        ...others
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
    }, [])

    const onChange = (time, timeString) => {
        // AntdForm表单批量控制
        if (formId && (name || id)) {
            // 表单值更新
            if (timeString[0] !== '' && timeString[1] !== '') {
                updateItemValue(formId, name || id, [timeString[0], timeString[1]])
            } else {
                updateItemValue(formId, name || id, null)
            }
        }
        if (timeString[0] !== '' && timeString[1] !== '') {
            setProps({ value: [timeString[0], timeString[1]] })
        } else {
            setProps({ value: null })
        }
    }

    return (
        <div>
            <ConfigProvider locale={str2Locale.get(locale)}>
                <RangePicker
                    // 提取具有data-*或aria-*通配格式的属性
                    {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), others)}
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
                        formId && (name || id) ?
                            undefined :
                            (defaultValue && defaultValue.length === 2) ?
                                [defaultValue[0] !== '' ? dayjs(defaultValue[0], format) : undefined,
                                defaultValue[1] !== '' ? dayjs(defaultValue[1], format) : undefined] :
                                undefined
                    }
                    value={
                        formId && (name || id) ?
                            (
                                (currentFormValue && currentFormValue.length === 2) ?
                                    [currentFormValue[0] !== '' ? dayjs(currentFormValue[0], format) : undefined,
                                    currentFormValue[1] !== '' ? dayjs(currentFormValue[1], format) : undefined] :
                                    undefined
                            ) :
                            (value && value.length === 2) ?
                                [value[0] !== '' ? dayjs(value[0], format) : undefined,
                                value[1] !== '' ? dayjs(value[1], format) : undefined] :
                                undefined
                    }
                    status={status}
                    renderExtraFooter={() => extraFooter}
                    needConfirm={needConfirm}
                    persistence={persistence}
                    persisted_props={persisted_props}
                    persistence_type={persistence_type}
                    data-dash-is-loading={useLoading()}
                    prefix={prefix}
                    suffixIcon={suffixIcon}
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