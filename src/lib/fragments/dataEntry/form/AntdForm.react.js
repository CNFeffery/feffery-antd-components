import React, { useState, useEffect } from 'react';
import { Form } from 'antd';
import { isString } from 'lodash';
import useCss from '../../../hooks/useCss';
import FormContext from '../../../contexts/FormContext';
import { propTypes, defaultProps } from '../../../components/dataEntry/form/AntdForm.react';


// 定义表单组件AntdForm，api参数参考https://ant.design/components/form-cn/
const AntdForm = (props) => {
    // 取得必要属性或参数
    let {
        id,
        children,
        className,
        style,
        key,
        labelCol,
        wrapperCol,
        colon,
        labelAlign,
        labelWrap,
        layout,
        submitForm,
        submitFormClicks,
        validateStatuses,
        helps,
        setProps,
        loading_state
    } = props;

    const [form] = Form.useForm();

    const [_values, setValues] = useState({});
    const [_formValidateStatus, setFormValidateStatus] = useState({});

    // 更新搜集到的最新values值
    useEffect(() => {
        setProps({
            values: _values
        })
    }, [_values])

    // 更新搜集到的最新_formValidateStatus值
    useEffect(() => {
        let formValidateStatusArray = Object.values(_formValidateStatus);
        setProps({
            formValidateStatus: formValidateStatusArray.length > 0 ? formValidateStatusArray.every(item => item === true) : null
        })
    }, [_formValidateStatus])

    // 手动搜集表单检验状态
    useEffect(() => {
        if (submitForm) {
            form.setFieldsValue(_values);
            setProps({ submitFormClicks: submitFormClicks + 1 });
            form.validateFields().then((values) => {
                setProps({ formValidateStatus: true });
            }).catch((errorInfo) => {
                setProps({ formValidateStatus: false });
            });
            setProps({ submitForm: false });
        }
    }, [submitForm]);

    return (
        <FormContext.Provider
            value={
                {
                    setValues: setValues,
                    _values: _values,
                    _formValidateStatus: _formValidateStatus,
                    setFormValidateStatus: setFormValidateStatus,
                    form: form,
                    validateStatuses: validateStatuses,
                    helps: helps
                }
            }
        >
            <Form id={id}
                form={form}
                className={
                    isString(className) ?
                        className :
                        (className ? useCss(className) : undefined)
                }
                style={style}
                key={key}
                labelCol={labelCol}
                wrapperCol={wrapperCol}
                colon={colon}
                labelAlign={labelAlign}
                labelWrap={labelWrap}
                layout={layout}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }>
                {children}
            </Form>
        </FormContext.Provider>
    );
}

export default AntdForm;

AntdForm.defaultProps = defaultProps;
AntdForm.propTypes = propTypes;