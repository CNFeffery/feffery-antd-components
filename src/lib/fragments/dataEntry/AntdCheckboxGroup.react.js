import React, { useContext, useEffect } from 'react';
import { Checkbox } from 'antd';
import { isString, isUndefined } from 'lodash';
import useCss from '../../hooks/useCss';
import PropsContext from '../../contexts/PropsContext';
import { propTypes, defaultProps } from '../../components/dataEntry/AntdCheckboxGroup.react';


// 定义组合选择框组件AntdCheckboxGroup，api参数参考https://ant.design/components/checkbox-cn/
const AntdCheckboxGroup = (props) => {
    // 取得必要属性或参数
    let {
        id,
        style,
        className,
        key,
        options,
        value,
        disabled,
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

    const onChange = e => {
        if (!readOnly) {
            setProps({ value: e })
        }
    }

    // 返回定制化的前端组件
    return (
        <Checkbox.Group
            id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            options={options}
            value={value}
            disabled={
                context && !isUndefined(context.componentDisabled) ?
                    context.componentDisabled :
                    disabled
            }
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

export default AntdCheckboxGroup;

AntdCheckboxGroup.defaultProps = defaultProps;
AntdCheckboxGroup.propTypes = propTypes;