import React, { useContext, useEffect } from 'react';
import { Checkbox } from 'antd';
import { isString, isUndefined } from 'lodash';
import useCss from '../../hooks/useCss';
import PropsContext from '../../contexts/PropsContext';
import FormContext from '../../contexts/FormContext';
import { propTypes, defaultProps } from '../../components/dataEntry/AntdCheckbox.react';


// 定义选择框组件AntdCheckbox，api参数参考https://ant.design/components/checkbox-cn/
const AntdCheckbox = (props) => {
    // 取得必要属性或参数
    let {
        id,
        style,
        className,
        key,
        name,
        label,
        disabled,
        autoFocus,
        checked,
        indeterminate,
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

    const onChange = e => {
        if (!readOnly) {
            setProps({ checked: e.target.checked })
        }
    }

    // 返回定制化的前端组件
    return (
        <Checkbox
            id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            onChange={onChange}
            disabled={
                context && !isUndefined(context.componentDisabled) ?
                    context.componentDisabled :
                    disabled
            }
            autoFocus={autoFocus}
            checked={checked}
            indeterminate={indeterminate}
            persistence={persistence}
            persisted_props={persisted_props}
            persistence_type={persistence_type}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        >
            {label}
        </Checkbox>
    );
}

export default AntdCheckbox;

AntdCheckbox.defaultProps = defaultProps;
AntdCheckbox.propTypes = propTypes;