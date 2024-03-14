import React, { useState, useEffect, useMemo } from 'react';
import { Form } from 'antd';
import { isString } from 'lodash';
import useCss from '../../../hooks/useCss';
import useFormStore from '../../../store/formStore';
import useFormItemStore from '../../../store/formItemStore';
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

    const formItemType = children.props._dashprivate_layout.type;
    const name = children.props._dashprivate_layout.props.name;

    const validateStatuses = useFormStore((state) => state.validateStatuses);
    const helps = useFormStore((state) => state.helps);
    const form = useFormStore((state) => state.form);
    const updateFormValidateStatus = useFormStore((state) => state.updateFormValidateStatus);
    const updateValidateTrigger = useFormItemStore((state) => state.updateValidateTrigger);
    const itemValues = useFormItemStore((state) => state[formItemType]);
    const itemValue = useMemo(() => {
        return itemValues && name ? { [name]: itemValues[name] } : {};
    }, [itemValues]);

    if (rules) {
        rules.forEach(item => {
            // 处理表单项值为false时使用validateFields但校验规则不触发的问题
            item.transform = (inputValue) => {
                if (inputValue === false) {
                    return null;
                }
                return inputValue;
            };
            item.pattern = item.pattern ? new RegExp(item.pattern) : item.pattern;
        });
    }

    const [count, setCount] = useState(0);

    useEffect(() => {
        updateValidateTrigger(rules ? rules.map((rule) => {
            return rule.validateTrigger ? rule.validateTrigger : 'onChange'
        }) : [])
    }, [])

    // 更新搜集到的最新values值
    useEffect(() => {
        // 用于处理初始渲染时不校验表单项
        if (count > 0 && name) {
            let setValue = {[name]: itemValue[name]['value']}
            form.setFieldsValue(setValue);
            form.validateFields([Object.keys(setValue)[0]]).then((values) => {
                let itemName = Object.keys(setValue)[0];
                let itemValidateStatus = {};
                itemValidateStatus[itemName] = true
                updateFormValidateStatus(itemValidateStatus)
            }).catch((errorInfo) => {
                let itemName = Object.keys(setValue)[0];
                let itemValidateStatus = {};
                itemValidateStatus[itemName] = false
                updateFormValidateStatus(itemValidateStatus)
            });
        }
        setCount((prevCount) => prevCount + 1);
    }, [name && itemValue[name] && itemValue[name]['timestamp']])

    return (
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
            help={help || helps[label]}
            hasFeedback={hasFeedback}
            hidden={hidden}
            required={required || (rules && rules.length > 0 && rules.some(item => item.required)) ? true : false}
            rules={rules}
            validateStatus={validateStatus || validateStatuses[label]}
            name={name}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }>
            {children}
        </Item>
    );
}

export default React.memo(AntdFormItem);

AntdFormItem.defaultProps = defaultProps;
AntdFormItem.propTypes = propTypes;