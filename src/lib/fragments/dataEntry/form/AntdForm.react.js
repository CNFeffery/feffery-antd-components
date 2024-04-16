import React, { useEffect } from 'react';
import { Form } from 'antd';
import { isString, isEmpty } from 'lodash';
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
        values,
        validateStatuses,
        helps,
        setProps,
        loading_state
    } = props;

    // 订阅当前表单值搜集状态的变动
    const _values = useFormStore((state) => state.values[id])

    const updateFormValues = useFormStore((state) => state.updateFormValues)
    const updateValidateStatuses = useFormStore((state) => state.updateValidateStatuses)
    const updateHelps = useFormStore((state) => state.updateHelps)
    console.log('_values：', _values)
    // 受控更新values
    useEffect(() => {
        if (id && values && !isEmpty(values)) {
            updateFormValues(id, values)
        }
    }, [values])

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
        setProps({ values: _values })
    }, [_values])

    return (
        <FormContext.Provider
            value={id}
        >
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
        </FormContext.Provider >
    );
}

export default AntdForm;

AntdForm.defaultProps = defaultProps;
AntdForm.propTypes = propTypes;