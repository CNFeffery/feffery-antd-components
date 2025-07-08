// react核心
import React, { useEffect, useContext } from 'react';
// antd核心
import { CheckCard } from '@ant-design/pro-components';
// 辅助库
import { parseChildrenToArray, useLoading } from '../../../components/utils';
import { isString, isUndefined } from 'lodash';
import { pickBy } from 'ramda';
// 自定义hooks
import useCss from '../../../hooks/useCss';
// 上下文
import PropsContext from '../../../contexts/PropsContext';
import FormContext from '../../../contexts/FormContext';
// 状态管理
import useFormStore from '../../../store/formStore';
// 参数类型
import { propTypes, defaultProps } from '../../../components/dataEntry/check-card/AntdCheckCardGroup.react';

/**
 * 组合选择卡片组件AntdCheckCardGroup
 */
const AntdCheckCardGroup = (props) => {
    let {
        id,
        children,
        className,
        style,
        key,
        name,
        enableBatchControl,
        multiple,
        allowNoValue,
        bordered,
        value,
        defaultValue,
        disabled,
        size,
        readOnly,
        setProps,
        persistence,
        persisted_props,
        persistence_type,
        ...others
    } = props;

    const context = useContext(PropsContext)
    const formId = useContext(FormContext)

    const updateItemValue = useFormStore((state) => state.updateItemValue)
    const deleteItemValue = useFormStore((state) => state.deleteItemValue)

    // 处理AntdForm表单值搜集功能
    useEffect(() => {
        // 若上文中存在有效表单id
        if (formId && (name || id) && enableBatchControl) {
            // 表单值更新
            updateItemValue(formId, name || id, value)
        }
    }, [value, name, id])

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

    useEffect(() => {
        if (defaultValue && !value) {
            setProps({ value: defaultValue })
        }
    }, [])

    children = parseChildrenToArray(children)

    return (
        <CheckCard.Group
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
            multiple={multiple}
            bordered={bordered}
            value={value}
            defaultValue={defaultValue}
            disabled={
                context && !isUndefined(context.componentDisabled) ?
                    context.componentDisabled :
                    disabled
            }
            size={size}
            onChange={(e) => {
                // 只读模式下不进行值更新
                if (!readOnly) {
                    if (allowNoValue) {
                        setProps({ value: e })
                    } else {
                        if (e && e.length !== 0) {
                            setProps({ value: e })
                        }
                    }
                }
            }}
            data-dash-is-loading={useLoading()} >
            {children}
        </ CheckCard.Group>
    );
}

export default AntdCheckCardGroup;

AntdCheckCardGroup.defaultProps = defaultProps;
AntdCheckCardGroup.propTypes = propTypes;