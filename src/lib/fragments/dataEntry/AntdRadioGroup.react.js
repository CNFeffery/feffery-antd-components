import React, { useEffect, useContext } from 'react';
import { Radio, Space } from 'antd';
import { isString, isNumber, isUndefined } from 'lodash';
import useCss from '../../hooks/useCss';
import PropsContext from '../../contexts/PropsContext';
import FormContext from '../../contexts/FormContext';
import useFormStore from '../../store/formStore';
import { propTypes, defaultProps } from '../../components/dataEntry/AntdRadioGroup.react';


// 定义单选框组件AntdRadioGroup，api参数参考https://ant.design/components/radio-cn/
const AntdRadioGroup = (props) => {
    // 取得必要属性或参数
    let {
        id,
        style,
        className,
        key,
        name,
        options,
        defaultValue,
        value,
        direction,
        optionType,
        buttonStyle,
        disabled,
        size,
        readOnly,
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
    const formId = useContext(FormContext)

    const updateValues = useFormStore((state) => state.updateValues)
    const deleteItemValue = useFormStore((state) => state.deleteItemValue)

    // 收集当前组件相关表单值
    const currentFormValue = useFormStore(state => state.values?.[formId]?.[name || id])

    // 受控更新当前组件相关表单值
    useEffect(() => {
        if (formId && !isUndefined(currentFormValue)) {
            setProps({
                value: currentFormValue
            })
        }
    }, [currentFormValue])

    // 处理AntdForm表单值搜集功能
    useEffect(() => {
        // 若上文中存在有效表单id
        if (formId && (name || id)) {
            // 表单值更新
            updateValues(formId, name || id, value)
        }
    }, [value, name, id])

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
        if (defaultValue && !value) {
            setProps({ value: defaultValue })
        }
    }, [])

    const onSelect = (e) => {
        if (!readOnly) {
            setProps({ value: e.target.value })
        }
    }

    if (direction === 'vertical') {
        let _options = (
            options.every(item => isNumber(item) || isString(item)) ?
                // 快捷方式
                options.map(item => ({ label: item, value: item })) :
                [...options]
        )
        // 返回定制化的前端组件
        return (
            <Radio.Group
                id={id}
                className={
                    isString(className) ?
                        className :
                        (className ? useCss(className) : undefined)
                }
                style={style}
                key={key}
                defaultValue={defaultValue}
                value={value}
                buttonStyle={buttonStyle}
                disabled={
                    context && !isUndefined(context.componentDisabled) ?
                        context.componentDisabled :
                        disabled
                }
                size={
                    context && !isUndefined(context.componentSize) ?
                        context.componentSize :
                        size
                }
                persistence={persistence}
                persisted_props={persisted_props}
                persistence_type={persistence_type}
                onChange={onSelect}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
            >
                <Space direction='vertical'>
                    {_options.map(item => {
                        return optionType !== 'button' ?
                            <Radio value={item.value} disabled={item.disabled}>{item.label}</Radio> :
                            <Radio.Button value={item.value} disabled={item.disabled}>{item.label}</Radio.Button>
                    })}
                </Space>
            </Radio.Group>
        );
    }

    // 返回定制化的前端组件
    return (
        <Radio.Group
            id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            options={
                options.every(item => isNumber(item) || isString(item)) ?
                    // 快捷方式
                    options.map(item => ({ label: item, value: item })) :
                    options
            }
            defaultValue={defaultValue}
            value={value}
            optionType={optionType}
            buttonStyle={buttonStyle}
            disabled={
                context && !isUndefined(context.componentDisabled) ?
                    context.componentDisabled :
                    disabled
            }
            size={
                context && !isUndefined(context.componentSize) ?
                    context.componentSize :
                    size
            }
            persistence={persistence}
            persisted_props={persisted_props}
            persistence_type={persistence_type}
            onChange={onSelect}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        />
    );
}

export default AntdRadioGroup;

AntdRadioGroup.defaultProps = defaultProps;
AntdRadioGroup.propTypes = propTypes;