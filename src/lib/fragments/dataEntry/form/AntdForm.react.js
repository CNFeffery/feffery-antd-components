// react核心
import React, { useEffect } from 'react';
// antd核心
import { Form } from 'antd';
// 辅助库
import { isString, isUndefined, isEmpty } from 'lodash';
import { useUnmount } from 'ahooks';
import { pickBy } from 'ramda';
import { useLoading } from '../../../components/utils';
// 自定义hooks
import useCss from '../../../hooks/useCss';
// 上下文
import FormContext from '../../../contexts/FormContext';
// 状态管理
import useFormStore from '../../../store/formStore';
// 参数类型
import { propTypes, defaultProps } from '../../../components/dataEntry/form/AntdForm.react';

/**
 * 表单组件AntdForm
 */
const AntdForm = (props) => {
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
        ...others
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
                wrapperCol={wrapperCol}
                colon={colon}
                labelAlign={labelAlign}
                labelWrap={labelWrap}
                layout={layout}
                data-dash-is-loading={useLoading()}>
                {children}
            </Form>
        </FormContext.Provider >
    );
}

export default AntdForm;

AntdForm.defaultProps = defaultProps;
AntdForm.propTypes = propTypes;