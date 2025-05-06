// react核心
import React, { useEffect, useContext } from 'react';
// antd核心
import { InputNumber } from 'antd';
// 辅助库
import { useRequest } from 'ahooks';
import { isString, isUndefined } from 'lodash';
import { pickBy } from 'ramda';
import { useLoading } from '../../components/utils';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 上下文
import PropsContext from '../../contexts/PropsContext';
import FormContext from '../../contexts/FormContext';
// 状态管理
import useFormStore from '../../store/formStore';
// 参数类型
import { propTypes, defaultProps } from '../../components/dataEntry/AntdInputNumber.react';

/**
 * 数值输入框组件AntdInputNumber
 */
const AntdInputNumber = (props) => {
    let {
        id,
        className,
        style,
        key,
        name,
        enableBatchControl,
        size,
        addonBefore,
        addonAfter,
        autoFocus,
        prefix,
        suffix,
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
        batchPropsNames,
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

    // 收集当前组件相关表单值
    const currentFormValue = useFormStore(state => state.values?.[formId]?.[name || id])

    // 处理组件卸载后，对应表单项值的清除
    useEffect(() => {
        return () => {
            // 若上文中存在有效表单id
            if (formId && (name || id) && enableBatchControl) {
                // 表单值更新
                deleteItemValue(formId, name || id)
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
        // AntdForm表单批量控制
        if (formId && (name || id) && enableBatchControl) {
            // 表单值更新
            updateItemValue(formId, name || id, e)
        }
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
        <InputNumber
            // 提取具有data-*或aria-*通配格式的属性
            {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), others)}
            id={id}
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
            suffix={suffix}
            placeholder={placeholder}
            variant={(
                !variant ?
                    (bordered ? 'outlined' : 'borderless') :
                    variant
            )}
            controls={controls}
            defaultValue={
                formId && (name || id) && enableBatchControl ?
                    undefined :
                    defaultValue
            }
            value={
                formId && (name || id) && enableBatchControl ?
                    currentFormValue :
                    value
            }
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
            data-dash-is-loading={useLoading()} />
    );
}

export default AntdInputNumber;

AntdInputNumber.defaultProps = defaultProps;
AntdInputNumber.propTypes = propTypes;