// react核心
import React, { useEffect, useContext } from 'react';
// antd核心
import { TimePicker, ConfigProvider } from 'antd';
// 辅助库
import dayjs from 'dayjs';
import { isString, isUndefined } from 'lodash';
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
import { propTypes, defaultProps } from '../../components/dataEntry/AntdTimePicker.react';

/**
 * 时间选择组件AntdTimePicker
 */
const AntdTimePicker = (props) => {
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
        prefix,
        suffixIcon,
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
        if (isString(timeString)) {
            // AntdForm表单批量控制
            if (formId && (name || id)) {
                // 表单值更新
                updateItemValue(formId, name || id, timeString)
            }
            setProps({ value: timeString })
        }
    }

    return (
        <div>
            <ConfigProvider locale={str2Locale.get(locale)}>
                <TimePicker
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
                    defaultValue={
                        formId && (name || id) ?
                            undefined :
                            (defaultValue ? dayjs(defaultValue, format) : undefined)
                    }
                    value={
                        formId && (name || id) ?
                            (currentFormValue ? dayjs(currentFormValue, format) : undefined) :
                            (value ? dayjs(value, format) : undefined)
                    }
                    use12Hours={use12Hours}
                    allowClear={isUndefined(readOnly) ? allowClear : !readOnly}
                    autoFocus={autoFocus}
                    status={status}
                    renderExtraFooter={() => extraFooter}
                    showNow={showNow}
                    needConfirm={needConfirm}
                    prefix={prefix}
                    suffixIcon={suffixIcon}
                    persistence={persistence}
                    persisted_props={persisted_props}
                    persistence_type={persistence_type}
                    data-dash-is-loading={useLoading()}
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