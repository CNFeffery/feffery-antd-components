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
        setProps,
        loading_state
    } = props;

    const formContext = useContext(FormContext)

    const [itemValues, setItemValues] = useState({});

    // 更新搜集到的最新values值
    useEffect(() => {
        // 当上下文有效，且存在有效字段名
        if (formContext && formContext.setValues) {
            // 融合当前最新value值到上文_values中
            formContext.setValues((prevValues) => ({
                ...prevValues,
                ...itemValues
            }))
        }
    }, [itemValues])

    return (
        <FormItemContext.Provider
            value={
                {
                    setItemValues: setItemValues,
                    itemValues: itemValues
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
                hasFeedback={true}
                hidden={hidden}
                required={required}
                rules={rules}
                validateStatus={validateStatus}
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