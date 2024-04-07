import React, { useEffect, useContext } from 'react';
import { Switch } from 'antd';
import { isUndefined, isString } from 'lodash';
import useCss from '../../hooks/useCss';
import PropsContext from '../../contexts/PropsContext';
import FormContext from '../../contexts/FormContext';
import useFormStore from '../../store/formStore';
import { propTypes, defaultProps } from '../../components/dataEntry/AntdSwitch.react';


// 定义开关组件AntdSwitch，api参数参考https://ant.design/components/switch-cn/
const AntdSwitch = (props) => {
    // 取得必要属性或参数
    let {
        id,
        style,
        className,
        key,
        name,
        disabled,
        autoFocus,
        checked,
        checkedChildren,
        unCheckedChildren,
        size,
        loading,
        readOnly,
        setProps,
        persistence,
        persisted_props,
        persistence_type,
        loading_state,
        batchPropsNames
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
    const formContext = useContext(FormContext)

    const updateValues = useFormStore((state) => state.updateValues)
    const deleteItemValue = useFormStore((state) => state.deleteItemValue)

    // 处理AntdForm表单值搜集功能
    useEffect(() => {
        // 若上文中存在有效表单id
        if (formContext?.formId && (name || id)) {
            // 表单值更新
            updateValues(formContext.formId, name || id, checked)
        }
    }, [checked, name, id])

    // 处理组件卸载后，对应表单项值的清除
    useEffect(() => {
        return () => {
            // 若上文中存在有效表单id
            if (formContext?.formId && (name || id)) {
                // 表单值更新
                deleteItemValue(formContext.formId, name || id)
            }
        }
    }, [name, id])

    useEffect(() => {
        if (isUndefined(checked)) {
            setProps({ checked: false })
        }
    }, [])

    const onChange = checked => {
        if (!readOnly) {
            setProps({ checked: checked })
        }
    }

    // 返回定制化的前端组件
    return (
        <Switch
            id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            disabled={
                context && !isUndefined(context.componentDisabled) ?
                    context.componentDisabled :
                    disabled
            }
            defaultChecked={checked}
            autoFocus={autoFocus}
            checkedChildren={checkedChildren}
            checked={checked}
            unCheckedChildren={unCheckedChildren}
            size={size}
            loading={loading}
            onChange={onChange}
            persistence={persistence}
            persisted_props={persisted_props}
            persistence_type={persistence_type}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        />
    );
}

export default AntdSwitch;

AntdSwitch.defaultProps = defaultProps;
AntdSwitch.propTypes = propTypes;