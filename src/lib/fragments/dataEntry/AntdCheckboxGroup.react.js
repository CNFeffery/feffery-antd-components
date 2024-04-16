import React, { useContext, useEffect } from 'react';
import { Checkbox } from 'antd';
import { isString, isNumber, isUndefined } from 'lodash';
import useCss from '../../hooks/useCss';
import PropsContext from '../../contexts/PropsContext';
import FormContext from '../../contexts/FormContext';
import useFormStore from '../../store/formStore';
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

    const onChange = e => {
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