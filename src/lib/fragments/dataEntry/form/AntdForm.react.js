import React, { useEffect } from 'react';
import { Form } from 'antd';
import { isString } from 'lodash';
import useCss from '../../../hooks/useCss';
import { propTypes, defaultProps } from '../../../components/dataEntry/form/AntdForm.react';
import FormContext from '../../../contexts/FormContext';
import useFormStore from '../../../store/formStore';

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
        validateMessages,
        validateTrigger,
        values,
        initialValues,
        formValidateStatus,
        submitForm,
        submitFormClicks,
        resetForm,
        resetFormClicks,
        validateStatuses,
        helps,
        setProps,
        loading_state
    } = props;

    const [form] = Form.useForm();

    const updateValidateStatuses = useFormStore((state) => state.updateValidateStatuses)
    const updateHelps = useFormStore((state) => state.updateHelps)

    const onFinish = (data) => {
        setProps({ formValidateStatus: true })
        setProps({ values: data })
    }

    const onFinishFailed = (data) => {
        setProps({ formValidateStatus: false })
        setProps({ values: data.values })
    }

    const onValuesChange = (changedValues, allValues) => {
        setProps({ values: allValues })
    }

    useEffect(() => {
        // 更新当前表单校验状态值
        if (id) {
            updateValidateStatuses(id, validateStatuses)
        }
    }, [validateStatuses])

    useEffect(() => {
        // 更新当前表单校验状态值
        if (id) {
            updateHelps(id, helps)
        }
    }, [helps])

    useEffect(() => {
        form.setFieldsValue(values)
    }, [values])

    // 手动搜集表单检验状态
    useEffect(() => {
        if (submitForm) {
            form.submit();
            setProps({ submitFormClicks: submitFormClicks + 1 });
            setProps({ submitForm: false });
        }
    }, [submitForm]);

    // 手动重置表单项值及校验状态
    useEffect(() => {
        if (resetForm) {
            form.resetFields();
            setProps({ values: initialValues });
            setProps({ resetFormClicks: resetFormClicks + 1 });
            setProps({ formValidateStatus: null });
            setProps({ resetForm: false });
        }
    }, [resetForm]);


    return (
        <FormContext.Provider
            value={id}
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
                validateMessages={validateMessages}
                validateTrigger={validateTrigger}
                initialValues={initialValues}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                onValuesChange={onValuesChange}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }>
                {children}
            </Form>
        </FormContext.Provider >
    );
}

export default AntdForm;

AntdForm.defaultProps = defaultProps;
AntdForm.propTypes = propTypes;