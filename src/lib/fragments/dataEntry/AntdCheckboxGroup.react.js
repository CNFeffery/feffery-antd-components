import React, { useContext, useEffect } from 'react';
import { Checkbox } from 'antd';
import { isString, isNumber, isUndefined } from 'lodash';
import useCss from '../../hooks/useCss';
import PropsContext from '../../contexts/PropsContext';
import FormContext from '../../contexts/FormContext';
import FormItemContext from '../../contexts/FormItemContext';
import { propTypes, defaultProps } from '../../components/dataEntry/AntdCheckboxGroup.react';


// 定义组合选择框组件AntdCheckboxGroup，api参数参考https://ant.design/components/checkbox-cn/
const AntdCheckboxGroup = (props) => {
    // 取得必要属性或参数
    let {
        id,
        style,
        className,
        key,
        name,
        options,
        value,
        disabled,
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
    const formContext = useContext(FormContext)
    const formItemContext = useContext(FormItemContext)

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

    const onChange = e => {
        // 当上下文有效，且存在有效字段名
        if (formItemContext && formItemContext.setItemValues && formItemContext.validateTrigger.includes('onChange') && (name || id)) {
            // 融合当前最新value值到上文itemValues中
            formItemContext.setItemValues((prevValues) => ({
                ...prevValues,
                ...{
                    [name || id]: e || null
                }
            }))
        }
        if (!readOnly) {
            setProps({ value: e })
        }
    }

    // 返回定制化的前端组件
    return (
        <Checkbox.Group
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
            value={value}
            disabled={
                context && !isUndefined(context.componentDisabled) ?
                    context.componentDisabled :
                    disabled
            }
            onBlur={onBlur}
            onFocus={onFocus}
            onChange={onChange}
            persistence={persistence}
            persisted_props={persisted_props}
            persistence_type={persistence_type}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        />
    );
}

export default AntdCheckboxGroup;

AntdCheckboxGroup.defaultProps = defaultProps;
AntdCheckboxGroup.propTypes = propTypes;