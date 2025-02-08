// react核心
import React, { useEffect, useContext } from 'react';
// antd核心
import { CheckCard } from '@ant-design/pro-components';
// 辅助库
import { isUndefined, isString } from 'lodash';
import { pickBy } from 'ramda';
import { useLoading } from '../../../components/utils';
// 自定义hooks
import useCss from '../../../hooks/useCss';
// 上下文
import PropsContext from '../../../contexts/PropsContext';
import FormContext from '../../../contexts/FormContext';
// 状态管理
import useFormStore from '../../../store/formStore';
// 参数类型
import { propTypes, defaultProps } from '../../../components/dataEntry/check-card/AntdCheckCard.react';

/**
 * 选择卡片组件AntdCheckCard
 */
const AntdCheckCard = (props) => {
    let {
        id,
        children,
        className,
        style,
        key,
        name,
        checked,
        bordered,
        value,
        defaultChecked,
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
        if (formId && (name || id)) {
            // 表单值更新
            updateItemValue(formId, name || id, checked)
        }
    }, [checked, name, id])

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
        if (!isUndefined(defaultChecked) && isUndefined(checked)) {
            setProps({ checked: defaultChecked })
        }
    }, [])

    return (
        <CheckCard
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
            description={children}
            checked={checked}
            bordered={bordered}
            value={value}
            defaultChecked={defaultChecked}
            disabled={
                context && !isUndefined(context.componentDisabled) ?
                    context.componentDisabled :
                    disabled
            }
            size={size}
            onChange={e => {
                if (!readOnly) {
                    setProps({ checked: e })
                }
            }}
            persistence={persistence}
            persisted_props={persisted_props}
            persistence_type={persistence_type}
            data-dash-is-loading={useLoading()} />
    );
}

export default AntdCheckCard;

AntdCheckCard.defaultProps = defaultProps;
AntdCheckCard.propTypes = propTypes;