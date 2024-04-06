import React, { useEffect, useContext } from 'react';
import { CheckCard } from '@ant-design/pro-components';
import { isUndefined, isString } from 'lodash';
import useCss from '../../../hooks/useCss';
import PropsContext from '../../../contexts/PropsContext';
import FormContext from '../../../contexts/FormContext';
import useFormStore from '../../../store/formStore';
import { propTypes, defaultProps } from '../../../components/dataEntry/check-card/AntdCheckCard.react';

// 定义选择卡片组件AntdCheckCard，api参数参考https://procomponents.ant.design/components/check-card
const AntdCheckCard = (props) => {
    // 取得必要属性或参数
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
        loading_state,
        persistence,
        persisted_props,
        persistence_type
    } = props;

    const context = useContext(PropsContext)
    const formContext = useContext(FormContext)

    const updateValues = useFormStore((state) => state.updateValues)

    // 处理AntdForm表单值搜集功能
    useEffect(() => {
        // 若上文中存在有效表单id
        if (formContext.formId && (name || id)) {
            // 表单值更新
            updateValues(formContext.formId, name || id, checked)
        }
    }, [checked])

    useEffect(() => {
        if (!isUndefined(defaultChecked) && isUndefined(checked)) {
            setProps({ checked: defaultChecked })
        }
    }, [])

    return (
        <CheckCard id={id}
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
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            } />
    );
}


export default AntdCheckCard;

AntdCheckCard.defaultProps = defaultProps;
AntdCheckCard.propTypes = propTypes;