import React, { useEffect, useContext } from 'react';
import { InputNumber } from 'antd';
import { useRequest } from 'ahooks';
import { isString, isUndefined } from 'lodash';
import useCss from '../../hooks/useCss';
import PropsContext from '../../contexts/PropsContext';
import FormContext from '../../contexts/FormContext';
import useFormStore from '../../store/formStore';
import { propTypes, defaultProps } from '../../components/dataEntry/AntdInputNumber.react';


// 定义数字输入框组件AntdInputNumber，api参数参考https://ant.design/components/input-number-cn/
const AntdInputNumber = (props) => {

    // 取得必要属性或参数
    let {
        id,
        className,
        style,
        key,
        name,
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
    const deleteItemValue = useFormStore((state) => state.deleteItemValue)

    // 处理AntdForm表单值搜集功能
    useEffect(() => {
        // 若上文中存在有效表单id
        if (formContext?.formId && (name || id)) {
            // 表单值更新
            updateValues(formContext.formId, name || id, value)
        }
    }, [value, name, id])

    // 处理组件卸载后，对应表单项值的清除
    useEffect(() => {
        return () => {
            // 若上文中存在有效表单id
            if (formContext?.formId && (name || id)) {
                // 表单值更新
                deleteItemValue(formContext.formId, name || id)
            }
        }
    }, [name, id])

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

    // 监听输入内容变化事件
    const onChange = e => {
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