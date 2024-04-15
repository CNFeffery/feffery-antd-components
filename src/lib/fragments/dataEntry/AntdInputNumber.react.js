import React, { useEffect, useContext } from 'react';
import { InputNumber } from 'antd';
import { useRequest } from 'ahooks';
import { isString, isUndefined } from 'lodash';
import { getBatchPropsValues } from '../utils';
import useCss from '../../hooks/useCss';
import PropsContext from '../../contexts/PropsContext';
import { propTypes, defaultProps } from '../../components/dataEntry/AntdInputNumber.react';


// 定义数字输入框组件AntdInputNumber，api参数参考https://ant.design/components/input-number-cn/
const AntdInputNumber = (props) => {

    // 取得必要属性或参数
    let {
        id,
        className,
        style,
        key,
        size,
        addonBefore,
        addonAfter,
        autoFocus,
        prefix,
        bordered,
        variant,
        controls,
        value,
        defaultValue,
        disabled,
        placeholder,
        keyboard,
        min,
        max,
        step,
        precision,
        readOnly,
        stringMode,
        nSubmit,
        status,
        debounceWait,
        setProps,
        persistence,
        persisted_props,
        persistence_type,
        loading_state,
        batchPropsNames,
        batchPropsValues,
        batchFormValuesMode
    } = props;

    // 批属性监听
    useEffect(() => {
        if (!batchFormValuesMode && batchPropsNames && batchPropsNames.length !== 0) {
            setProps({
                batchPropsValues: getBatchPropsValues(batchPropsNames, props)
            })
        }
    })

    useEffect(() => {
        if (batchFormValuesMode) {
            setProps({ value: batchPropsValues?.value })
        }
    }, [batchPropsValues])

    const context = useContext(PropsContext)

    useEffect(() => {
        // 初始化value
        if (defaultValue && !value) {
            // 当defaultValue不为空且value为空时，为value初始化defaultValue对应的value值
            setProps({
                value: defaultValue,
                debounceValue: defaultValue
            })
        }
    }, [])

    const onBlur = () => {
        props?.onBlur?.()
    }

    const onFocus = () => {
        props?.onFocus?.()
    }

    // 监听输入内容变化事件
    const onChange = e => {
        let _batchPropsValues = batchFormValuesMode ? getBatchPropsValues(batchPropsNames, props) : e
        if (batchFormValuesMode) {
            if (batchPropsNames.includes('value')) {
                _batchPropsValues['value'] = e
            }
        }
        props?.onChange?.(_batchPropsValues)
        setProps({ value: e })
    }

    const { run: onDebounceChange } = useRequest(
        (e) => {
            setProps({ debounceValue: e })
        },
        {
            debounceWait: debounceWait,
            manual: true
        }
    )

    // 监听聚焦到输入框时enter键点按次数
    const onPressEnter = e => {
        setProps({ nSubmit: nSubmit + 1 })
    }

    return (
        <InputNumber id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            size={
                context && !isUndefined(context.componentSize) ?
                    context.componentSize :
                    size
            }
            addonBefore={addonBefore}
            addonAfter={addonAfter}
            autoFocus={autoFocus}
            prefix={prefix}
            placeholder={placeholder}
            variant={(
                !variant ?
                    (bordered ? 'outlined' : 'borderless') :
                    variant
            )}
            controls={controls}
            value={value}
            defaultValue={defaultValue}
            disabled={
                context && !isUndefined(context.componentDisabled) ?
                    context.componentDisabled :
                    disabled
            }
            keyboard={keyboard}
            min={min}
            max={max}
            step={step}
            precision={precision}
            readOnly={readOnly}
            stringMode={stringMode}
            status={status}
            onBlur={onBlur}
            onFocus={onFocus}
            onChange={(e) => {
                onChange(e)
                onDebounceChange(e)
            }}
            onPressEnter={onPressEnter}
            persistence={persistence}
            persisted_props={persisted_props}
            persistence_type={persistence_type}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            } />
    );
}

export default AntdInputNumber;

AntdInputNumber.defaultProps = defaultProps;
AntdInputNumber.propTypes = propTypes;