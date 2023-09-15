import React from 'react';
import { Form } from 'antd';
import { isString } from 'lodash';
import useCss from '../../../hooks/useCss';
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

    return (
        <Form id={id}
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
    );
}

export default AntdForm;

AntdForm.defaultProps = defaultProps;
AntdForm.propTypes = propTypes;