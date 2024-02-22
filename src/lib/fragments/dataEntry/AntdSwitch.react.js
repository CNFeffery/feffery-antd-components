import React, { useEffect, useContext } from 'react';
import { Switch } from 'antd';
import { isUndefined, isString } from 'lodash';
import useCss from '../../hooks/useCss';
import PropsContext from '../../contexts/PropsContext';
import FormContext from '../../contexts/FormContext';
import FormItemContext from '../../contexts/FormItemContext';
import { propTypes, defaultProps } from '../../components/dataEntry/AntdSwitch.react';


// 定义开关组件AntdSwitch，api参数参考https://ant.design/components/switch-cn/
const AntdSwitch = (props) => {
    // 取得必要属性或参数
    let {
        id,
        style,
        className,
        key,
        name,
        disabled,
        autoFocus,
        checked,
        checkedChildren,
        unCheckedChildren,
        size,
        loading,
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
            // 融合当前最新checked值到上文_values中
            formContext.setValues((prevValues) => ({
                ...prevValues,
                ...{
                    [name || id]: checked
                }
            }))
        }
    }, [checked])

    // 如果当前组件被表单项包裹，初始渲染时对表单项进行赋值
    useEffect(() => {
        // 当上下文有效，且存在有效字段名
        if (formItemContext && formItemContext.setItemValues && (name || id)) {
            // 融合当前最新checked值到上文itemValues中
            formItemContext.setItemValues((prevValues) => ({
                ...prevValues,
                ...{
                    [name || id]: checked
                }
            }))
        }
    }, [])

    useEffect(() => {
        if (isUndefined(checked)) {
            setProps({ checked: false })
        }
    }, [])

    // 监听blur事件
    const onBlur = e => {
        // 当上下文有效，且存在有效字段名
        if (formItemContext && formItemContext.setItemValues && formItemContext.validateTrigger.includes('onBlur') && (name || id)) {
            // 融合当前最新checked值到上文itemValues中
            formItemContext.setItemValues((prevValues) => ({
                ...prevValues,
                ...{
                    [name || id]: checked
                }
            }))
        }
    }

    // 监听focus事件
    const onFocus = e => {
        // 当上下文有效，且存在有效字段名
        if (formItemContext && formItemContext.setItemValues && formItemContext.validateTrigger.includes('onFocus') && (name || id)) {
            // 融合当前最新checked值到上文itemValues中
            formItemContext.setItemValues((prevValues) => ({
                ...prevValues,
                ...{
                    [name || id]: checked
                }
            }))
        }
    }

    const onChange = checked => {
        if (!readOnly) {
            // 当上下文有效，且存在有效字段名
        if (formItemContext && formItemContext.setItemValues && formItemContext.validateTrigger.includes('onChange') && (name || id)) {
            // 融合当前最新checked值到上文itemValues中
            formItemContext.setItemValues((prevValues) => ({
                ...prevValues,
                ...{
                    [name || id]: checked
                }
            }))
        }
            setProps({ checked: checked })
        }
    }

    // 返回定制化的前端组件
    return (
        <Switch
            id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            disabled={
                context && !isUndefined(context.componentDisabled) ?
                    context.componentDisabled :
                    disabled
            }
            defaultChecked={checked}
            autoFocus={autoFocus}
            checkedChildren={checkedChildren}
            checked={checked}
            unCheckedChildren={unCheckedChildren}
            size={size}
            loading={loading}
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

export default AntdSwitch;

AntdSwitch.defaultProps = defaultProps;
AntdSwitch.propTypes = propTypes;