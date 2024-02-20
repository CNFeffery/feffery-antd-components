import React, { useState, useEffect, useContext } from 'react';
import { Form } from 'antd';
import { isString } from 'lodash';
import useCss from '../../../hooks/useCss';
import FormContext from '../../../contexts/FormContext';
import FormItemContext from '../../../contexts/FormItemContext';
import { propTypes, defaultProps } from '../../../components/dataEntry/form/AntdFormItem.react';

const { Item } = Form;

// 定义表单项组件AntdFormItem，api参数参考https://ant.design/components/form-cn/
const AntdFormItem = (props) => {
    // 取得必要属性或参数
    let {
        id,
        children,
        className,
        style,
        key,
        labelCol,
        colon,
        wrapperCol,
        label,
        labelAlign,
        tooltip,
        extra,
        help,
        hidden,
        required,
        rules,
        validateStatus,
        hasFeedback,
        setProps,
        loading_state
    } = props;

    if (rules) {
        rules.forEach(item => {
            item.pattern = item.pattern ? new RegExp(item.pattern) : item.pattern;
        });
    }

    const [count, setCount] = useState(0);

    const formContext = useContext(FormContext)

    const [itemValues, setItemValues] = useState({});

    // 更新搜集到的最新values值
    useEffect(() => {
        // 用于处理初始渲染时不校验表单项
        if (count > 2) {
            formContext.form.setFieldsValue(itemValues);
            formContext.form.validateFields([Object.keys(itemValues)[0]]).then((values) => {
                // 当上下文有效
                if (formContext && formContext.setFormValidateStatus) {
                    let itemName = Object.keys(itemValues)[0];
                    let itemValidateStatus = {};
                    itemValidateStatus[itemName] = true
                    // 融合当前校验状态到上文_formValidateStatus中
                    formContext.setFormValidateStatus((prevValues) => ({
                        ...prevValues,
                        ...itemValidateStatus
                    }))
                }
            }).catch((errorInfo) => {
                // 当上下文有效
                if (formContext && formContext.setFormValidateStatus) {
                    let itemName = Object.keys(itemValues)[0];
                    let itemValidateStatus = {};
                    itemValidateStatus[itemName] = false
                    // 融合当前校验状态到上文_formValidateStatus中
                    formContext.setFormValidateStatus((prevValues) => ({
                        ...prevValues,
                        ...itemValidateStatus
                    }))
                }
            });
        }
        setCount((prevCount) => prevCount + 1);
    }, [itemValues])

    return (
        <FormItemContext.Provider
            value={
                {
                    setItemValues: setItemValues,
                    itemValues: itemValues,
                    form: formContext.form,
                    validateTrigger: rules ? rules.map((rule) => {
                        return rule.validateTrigger
                    }) : []
                }
            }
        >
            <Item id={id}
                className={
                    isString(className) ?
                        className :
                        (className ? useCss(className) : undefined)
                }
                style={style}
                key={key}
                labelCol={labelCol}
                colon={colon}
                wrapperCol={wrapperCol}
                label={label}
                labelAlign={labelAlign}
                tooltip={tooltip}
                extra={extra}
                help={help}
                hasFeedback={hasFeedback}
                hidden={hidden}
                required={required || (rules && rules.length > 0 && rules.some(item => item.required)) ? true : false}
                rules={rules}
                validateStatus={validateStatus || formContext?.validateStatuses[label]}
                name={Object.keys(itemValues)[0]}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }>
                {children}
            </Item>
        </FormItemContext.Provider>
    );
}

export default AntdFormItem;

AntdFormItem.defaultProps = defaultProps;
AntdFormItem.propTypes = propTypes;