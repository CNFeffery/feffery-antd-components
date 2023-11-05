import React, { useEffect, useContext } from 'react';
import { TimePicker, ConfigProvider } from 'antd';
import dayjs from 'dayjs';
import { isString, isUndefined } from 'lodash';
import { str2Locale } from '../../components/locales.react';
import useCss from '../../hooks/useCss';
import PropsContext from '../../contexts/PropsContext';
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
    locale = (context && context.locale) || locale

    useEffect(() => {
        // 初始化value
        if (defaultValue && !value) {
            // 当defaultValue不为空且value为空时，为value初始化defaultValue对应值
            setProps({ value: defaultValue })
        }
    }, [])

    const onChange = (time, timeString) => {
        if (isString(timeString)) {
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
                    onChange={onChange}
                    placeholder={placeholder}
                    placement={placement}
                    bordered={bordered}
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