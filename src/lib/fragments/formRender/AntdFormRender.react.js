import React, { useMemo, useEffect } from 'react';
import FormRender, { useForm } from 'form-render';
import { Cascader } from 'antd';
import { isString } from 'lodash';
import useCss from '../../hooks/useCss';
import {
    propTypes,
    defaultProps,
} from '../../components/formRender/AntdFormRender.react';

// 定义表单生成组件AntdFormRender，api参数参考https://xrender.fun/form-render/api-props
const AntdFormRender = (props) => {
    // 取得必要属性或参数
    const {
        id,
        className,
        style,
        key,
        schema,
        displayType,
        labelAlign,
        lableWidth,
        maxWidth,
        labelCol,
        fieldCol,
        colon,
        globalConfig,
        watch,
        removeHiddenData,
        readOnly,
        column,
        disabled,
        scrollToFirstError,
        locale,
        footer,
        configProvider,
        validateMessages,
        values,
        validateStatuses,
        submitForm,
        submitFormClicks,
        resetForm,
        resetFormClicks,
        setProps,
        loading_state,
    } = props;

    function evalAllValidator(json) {
        for (const key in json) {
            if (typeof json[key] === 'object') {
                json[key] = evalAllValidator(json[key]);
            } else if (key === 'validator') {
                json[key] = eval(json[key]);
            }
        }
        return json;
    }

    const cascader = (props) => {
        return <Cascader {...props} onChange={(e) => props.onChange(e)} />;
    };

    const form = useForm();

    const onFinish = (data) => {
        setProps({ validateStatuses: true });
        setProps({ values: data });
    };

    const onFinishFailed = (data) => {
        setProps({ validateStatuses: false });
        setProps({ values: data.values });
    };

    const schemaConfig = useMemo(() => {
        if (schema) {
            const schemaJson = JSON.parse(JSON.stringify(schema));
            return evalAllValidator(schemaJson);
        }
    }, [schema]);

    const footerConfig = useMemo(() => {
        if (typeof footer === 'boolean') {
            return footer;
        }
        if ('$$typeof' in footer) {
            return () => <>{footer}</>;
        }
        return {
            submit: {
                text: footer?.submit?.text,
                hide: footer?.submit?.hide,
                ...footer?.submit?.btnProps,
            },
            reset: {
                text: footer?.reset?.text,
                hide: footer?.reset?.hide,
                ...footer?.reset?.btnProps,
            },
        };
    }, [footer]);

    const watchConfig = useMemo(() => {
        if (watch) {
            return Object.fromEntries(
                Object.entries(watch).map(([key, value]) => [key, eval(value)])
            );
        }
    }, [watch]);

    useEffect(() => {
        form.setValues(values);
    }, [values]);

    useEffect(() => {
        if (submitForm) {
            form.submit();
            setProps({ submitFormClicks: submitFormClicks + 1 });
            setProps({ submitForm: false });
        }
    }, [submitForm]);

    useEffect(() => {
        if (resetForm) {
            form.resetFields();
            setProps({ resetFormClicks: resetFormClicks + 1 });
            setProps({ resetForm: false });
        }
    }, [resetForm]);

    return (
        <FormRender
            id={id}
            form={form}
            className={
                isString(className)
                    ? className
                    : className
                      ? useCss(className)
                      : undefined
            }
            style={style}
            key={key}
            schema={schemaConfig}
            displayType={displayType}
            labelAlign={labelAlign}
            lableWidth={lableWidth}
            maxWidth={maxWidth}
            labelCol={labelCol}
            fieldCol={fieldCol}
            colon={colon}
            globalConfig={globalConfig}
            widgets={{ cascader }}
            watch={watchConfig}
            removeHiddenData={removeHiddenData}
            readOnly={readOnly}
            column={column}
            disabled={disabled}
            scrollToFirstError={scrollToFirstError}
            locale={locale}
            footer={footerConfig}
            configProvider={configProvider}
            validateMessages={validateMessages}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        />
    );
};

export default React.memo(AntdFormRender);

AntdFormRender.defaultProps = defaultProps;
AntdFormRender.propTypes = propTypes;
