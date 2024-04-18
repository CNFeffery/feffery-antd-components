import React, { useContext } from 'react';
import { Form } from 'antd';
import { isString } from 'lodash';
import useCss from '../../../hooks/useCss';
import FormContext from '../../../contexts/FormContext';
import useFormStore from '../../../store/formStore';
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
        validateStatus,
        hasFeedback,
        setProps,
        loading_state
    } = props;

    const formId = useContext(FormContext);
    const _validateStatus = useFormStore((state) => state.validateStatuses?.[formId]?.[label]);
    const _help = useFormStore((state) => state.helps?.[formId]?.[label]);

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
            help={help || (formId && _help)}
            hasFeedback={hasFeedback}
            hidden={hidden}
            required={required}
            validateStatus={validateStatus || (formId && _validateStatus)}
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