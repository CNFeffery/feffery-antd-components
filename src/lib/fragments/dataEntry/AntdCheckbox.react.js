// react核心
import React, { useContext, useEffect } from 'react';
// antd核心
import { Checkbox } from 'antd';
// 辅助库
import { isString, isUndefined } from 'lodash';
import { pickBy } from 'ramda';
import { useLoading } from '../../components/utils';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 上下文
import PropsContext from '../../contexts/PropsContext';
import FormContext from '../../contexts/FormContext';
// 状态管理
import useFormStore from '../../store/formStore';
// 参数类型
import { propTypes, defaultProps } from '../../components/dataEntry/AntdCheckbox.react';

/**
 * 选择框组件AntdCheckbox
 */
const AntdCheckbox = (props) => {
    let {
        id,
        style,
        className,
        key,
        name,
        enableBatchControl,
        label,
        disabled,
        autoFocus,
        checked,
        indeterminate,
        readOnly,
        setProps,
        persistence,
        persisted_props,
        persistence_type,
        batchPropsNames,
        ...others
    } = props;

    // 批属性监听
    useEffect(() => {
        if (batchPropsNames && batchPropsNames.length !== 0) {
            let _batchPropsValues = {};
            for (let propName of batchPropsNames) {
                _batchPropsValues[propName] = props[propName];
            }
            setProps({
                batchPropsValues: _batchPropsValues
            })
        }
    })

    const context = useContext(PropsContext)
    const formId = useContext(FormContext)
    const updateItemValue = useFormStore(state => state.updateItemValue)
    const deleteItemValue = useFormStore(state => state.deleteItemValue)

    // 收集当前组件相关表单值
    const currentFormValue = useFormStore(state => state.values?.[formId]?.[name || id])

    // 处理组件卸载后，对应表单项值的清除
    useEffect(() => {
        return () => {
            // 若上文中存在有效表单id
            if (formId && (name || id) && enableBatchControl) {
                // 表单值更新
                deleteItemValue(formId, name || id)
            }
        }
    }, [name, id])

    const onChange = (e) => {
        if (!readOnly) {
            // AntdForm表单批量控制
            if (formId && (name || id) && enableBatchControl) {
                // 表单值更新
                updateItemValue(formId, name || id, e.target.checked)
            }
            setProps({ checked: e.target.checked })
        }
    }

    return (
        <Checkbox
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
            onChange={onChange}
            disabled={
                context && !isUndefined(context.componentDisabled) ?
                    context.componentDisabled :
                    disabled
            }
            autoFocus={autoFocus}
            checked={
                formId && (name || id) && enableBatchControl ?
                    currentFormValue :
                    checked
            }
            indeterminate={indeterminate}
            data-dash-is-loading={useLoading()}
        >{label}</Checkbox>
    );
}

export default AntdCheckbox;

AntdCheckbox.defaultProps = defaultProps;
AntdCheckbox.propTypes = propTypes;