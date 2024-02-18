import React from 'react';
import { Form } from 'antd';
import { isString } from 'lodash';
import useCss from '../../../hooks/useCss';
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
        setProps,
        loading_state
    } = props;

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
            help={help}
            hasFeedback={true}
            hidden={hidden}
            required={required}
            validateStatus={validateStatus}
            name={"test_field"}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }>
            {children}
        </Item>
    );
}

export default AntdFormItem;

AntdFormItem.defaultProps = defaultProps;
AntdFormItem.propTypes = propTypes;