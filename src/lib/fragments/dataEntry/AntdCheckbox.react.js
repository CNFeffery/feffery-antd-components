import React, { useContext, useEffect } from 'react';
import { Checkbox } from 'antd';
import { isString, isUndefined } from 'lodash';
import { getBatchPropsValues } from '../utils';
import useCss from '../../hooks/useCss';
import PropsContext from '../../contexts/PropsContext';
import { propTypes, defaultProps } from '../../components/dataEntry/AntdCheckbox.react';


// 定义选择框组件AntdCheckbox，api参数参考https://ant.design/components/checkbox-cn/
const AntdCheckbox = (props) => {
    // 取得必要属性或参数
    let {
        id,
        style,
        className,
        key,
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
        loading_state,
        batchPropsNames,
        batchPropsValues,
        batchFormValuesMode
    } = props;

    // 批属性监听
    useEffect(() => {
        if (!batchFormValuesMode && batchPropsNames && batchPropsNames.length !== 0) {
            setProps({
                batchPropsValues: getBatchPropsValues(batchPropsNames, props)
            })
        }
    })

    useEffect(() => {
        if (batchFormValuesMode) {
            setProps({ checked: batchPropsValues?.checked })
        }
    }, [batchPropsValues])

    const context = useContext(PropsContext)

    const onBlur = () => {
        props?.onBlur?.()
    }

    const onFocus = () => {
        props?.onFocus?.()
    }

    const onChange = (e) => {
        let _batchPropsValues = batchFormValuesMode ? getBatchPropsValues(batchPropsNames, props) : e.target.checked
        if (batchFormValuesMode) {
            if (batchPropsNames.includes('checked')) {
                _batchPropsValues['checked'] = e.target.checked
            }
        }
        props?.onChange?.(_batchPropsValues)
        if (!readOnly) {
            setProps({ checked: e.target.checked })
        }
    }

    // 返回定制化的前端组件
    return (
        <Checkbox
            id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            onBlur={onBlur}
            onFocus={onFocus}
            onChange={onChange}
            disabled={
                context && !isUndefined(context.componentDisabled) ?
                    context.componentDisabled :
                    disabled
            }
            autoFocus={autoFocus}
            checked={checked}
            indeterminate={indeterminate}
            persistence={persistence}
            persisted_props={persisted_props}
            persistence_type={persistence_type}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        >{label}</Checkbox>
    );
}

export default AntdCheckbox;

AntdCheckbox.defaultProps = defaultProps;
AntdCheckbox.propTypes = propTypes;