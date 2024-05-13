import React, { useEffect } from 'react';
import { Form } from 'antd';
import { isString, isUndefined, isEmpty } from 'lodash';
import { useUnmount } from 'ahooks';
import { pickBy, difference } from 'ramda';
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
        enableBatchControl,
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

    // 调试用
    // console.log('='.repeat(50))
    // console.log('_values: ', _values)
    // console.log('values: ', values)

    useUnmount(() => {
        // 处理内存泄漏及相关的其他问题
        if (enableBatchControl && id) {
            updateFormValues(id, undefined)
        }
    })

    // _values状态响应value变化
    useEffect(() => {
        if (enableBatchControl && id) {
            updateFormValues(id, values)
        }
    }, [values])

    // value响应_value状态变化
    useEffect(() => {
        if (enableBatchControl && id && !isUndefined(_values) && !isEmpty(_values)) {
            setProps({ values: _values })
        }
    }, [_values])

    useEffect(() => {
        // 更新当前表单校验状态值
        if (enableBatchControl && id) {
            updateValidateStatuses(id, validateStatuses || {})
        }
    }, [validateStatuses])

    useEffect(() => {
        // 更新当前表单校验状态值
        if (enableBatchControl && id) {
            updateHelps(id, helps || {})
        }
    }, [helps])

    return (
        <FormContext.Provider
            value={enableBatchControl ? id : null}
        >
            <Form
                // 提取具有data-*或aria-*通配格式的属性
                {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), props)}
                id={id}
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