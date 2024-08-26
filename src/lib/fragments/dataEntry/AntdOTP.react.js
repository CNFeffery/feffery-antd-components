// react核心
import React, { useEffect, useContext } from 'react';
// antd核心
import { Input } from 'antd';
// 辅助库
import { isString, isUndefined } from 'lodash';
import { pickBy } from 'ramda';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 上下文
import PropsContext from '../../contexts/PropsContext';
import FormContext from '../../contexts/FormContext';
// 状态管理
import useFormStore from '../../store/formStore';
// 参数类型
import { propTypes, defaultProps } from '../../components/dataEntry/AntdOTP.react';

const { OTP } = Input;

/**
 * 一次性密码框组件AntdOTP
 */
const AntdOTP = (props) => {
    let {
        id,
        className,
        style,
        key,
        name,
        defaultValue,
        value,
        disabled,
        length,
        mask,
        status,
        size,
        variant,
        setProps,
        loading_state,
        persistence,
        persisted_props,
        persistence_type
    } = props;

    const context = useContext(PropsContext)
    const formId = useContext(FormContext)

    const updateItemValue = useFormStore((state) => state.updateItemValue)
    const deleteItemValue = useFormStore((state) => state.deleteItemValue)

    // 收集当前组件相关表单值
    const currentFormValue = useFormStore(state => state.values?.[formId]?.[name || id])

    // 处理组件卸载后，对应表单项值的清除
    useEffect(() => {
        return () => {
            // 若上文中存在有效表单id
            if (formId && (name || id)) {
                // 表单值更新
                deleteItemValue(formId, name || id)
            }
        }
    }, [name, id])

    useEffect(() => {
        // 初始化value
        if (defaultValue && !value) {
            // 当defaultValue不为空且value为空时，为value初始化defaultValue对应的value值
            setProps({
                value: defaultValue
            })
        }
    }, [])

    return (
        <OTP
            // 提取具有data-*或aria-*通配格式的属性
            {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), props)}
            id={id}
            key={key}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            defaultValue={
                formId && (name || id) ?
                    undefined :
                    defaultValue
            }
            value={
                formId && (name || id) ?
                    currentFormValue || null :
                    value
            }
            disabled={
                context && !isUndefined(context.componentDisabled) ?
                    context.componentDisabled :
                    disabled
            }
            length={length}
            mask={mask}
            status={status}
            size={
                context && !isUndefined(context.componentSize) ?
                    context.componentSize :
                    size
            }
            variant={variant}
            onChange={(e) => {
                // AntdForm表单批量控制
                if (formId && (name || id)) {
                    // 表单值更新
                    updateItemValue(formId, name || id, e)
                }
                setProps({ value: e })
            }}
            persistence={persistence}
            persisted_props={persisted_props}
            persistence_type={persistence_type}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            } />
    );
}

export default AntdOTP;

AntdOTP.defaultProps = defaultProps;
AntdOTP.propTypes = propTypes;