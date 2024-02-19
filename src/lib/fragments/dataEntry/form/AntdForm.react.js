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
        setProps,
        loading_state
    } = props;

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const [_values, setValues] = useState({});
    const [formValidateStatus, setFormValidateStatus] = useState({});

    // 更新搜集到的最新values值
    useEffect(() => {
        setProps({
            values: _values
        })
    }, [_values])

    // 更新搜集到的最新formValidateStatus值
    useEffect(() => {
        let formValidateStatusArray = Object.values(formValidateStatus);
        setProps({
            formValidateStatus: formValidateStatusArray.length > 0 ? formValidateStatusArray.every(item => item === true) : null
        })
    }, [formValidateStatus])

    return (
        <FormContext.Provider
            value={
                {
                    setValues: setValues,
                    _values: _values,
                    formValidateStatus: formValidateStatus,
                    setFormValidateStatus: setFormValidateStatus,
                    form: form
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
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
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