// react核心
import React, { useContext } from 'react';
// antd核心
import { Form } from 'antd';
// 辅助库
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { useLoading } from '../../../components/utils';
// 自定义hooks
import useCss from '../../../hooks/useCss';
// 上下文
import FormContext from '../../../contexts/FormContext';
// 状态管理
import useFormStore from '../../../store/formStore';
// 参数类型
import { propTypes, defaultProps } from '../../../components/dataEntry/form/AntdFormItem.react';

const { Item } = Form;

/**
 * 表单项组件AntdFormItem
 */
const AntdFormItem = (props) => {
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
        layout,
        setProps,
        ...others
    } = props;

    const formId = useContext(FormContext);
    const _validateStatus = useFormStore((state) => state.validateStatuses?.[formId]?.[label]);
    const _help = useFormStore((state) => state.helps?.[formId]?.[label]);

    return (
        <Item
            // 提取具有data-*或aria-*通配格式的属性
            {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), others)}
            id={id}
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
            layout={layout}
            data-dash-is-loading={useLoading()}>
            {children}
        </Item>
    );
}

export default React.memo(AntdFormItem);

AntdFormItem.defaultProps = defaultProps;
AntdFormItem.propTypes = propTypes;