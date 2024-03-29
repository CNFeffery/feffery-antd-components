import React, { useEffect, useContext, useMemo } from 'react';
import { Rate } from 'antd';
import { isString, isUndefined } from 'lodash';
import useCss from '../../hooks/useCss';
import PropsContext from '../../contexts/PropsContext';
import useFormStore from '../../store/formStore';
import useFormItemStore from '../../store/formItemStore';
import { propTypes, defaultProps } from '../../components/dataEntry/AntdRate.react';


// 定义评分组件AntdRate，api参数参考https://ant.design/components/rate-cn/
const AntdRate = (props) => {
    // 取得必要属性或参数
    let {
        id,
        className,
        style,
        key,
        name,
        allowClear,
        allowHalf,
        count,
        disabled,
        autoFocus,
        tooltips,
        defaultValue,
        value,
        setProps,
        loading_state,
        persistence,
        persisted_props,
        persistence_type,
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
    const updateValues = useFormStore((state) => state.updateValues)
    const validateTrigger = useFormItemStore((state) => state.validateTrigger)
    const updateAntdRate = useFormItemStore((state) => state.updateAntdRate)

    const currentValidateTrigger = useMemo(() => {
        return validateTrigger.filter((item) => item[name || id]).flatMap((item) => item[name || id])
    }, [validateTrigger])

    // 处理AntdForm表单值搜集功能
    useEffect(() => {
        if (name || id) {
            updateValues({[name || id]: value || null})
        }
    }, [value])

    // 如果当前组件被表单项包裹，初始渲染时对表单项进行赋值
    useEffect(() => {
        if (name || id) {
            updateAntdRate({[name || id]: {value: value || null}})
        }
    }, [])

    useEffect(() => {
        // 初始化value
        if (defaultValue && !value) {
            // 当defaultValue不为空时，为value初始化defaultValue对应的value值
            setProps({ value: defaultValue })
        }
    }, [])

    // 监听blur事件
    const onBlur = e => {
        if (currentValidateTrigger.includes('onBlur') && (name || id)) {
            updateAntdRate({[name || id]: {value: value || null, timestamp: Date.now()}})
        }
    }

    // 监听focus事件
    const onFocus = e => {
        if (currentValidateTrigger.includes('onFocus') && (name || id)) {
            updateAntdRate({[name || id]: {value: value || null, timestamp: Date.now()}})
        }
    }

    // 监听change事件
    const onChange = e => {
        if (currentValidateTrigger.includes('onChange') && (name || id)) {
            updateAntdRate({[name || id]: {value: e || null, timestamp: Date.now()}})
        }
        setProps({ value: e });
    }

    return (
        <Rate id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            allowClear={allowClear}
            allowHalf={allowHalf}
            count={count}
            disabled={
                context && !isUndefined(context.componentDisabled) ?
                    context.componentDisabled :
                    disabled
            }
            autoFocus={autoFocus}
            tooltips={tooltips}
            value={value}
            onBlur={onBlur}
            onFocus={onFocus}
            onChange={onChange}
            persistence={persistence}
            persisted_props={persisted_props}
            persistence_type={persistence_type}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            } />
    );
}

export default AntdRate;

AntdRate.defaultProps = defaultProps;
AntdRate.propTypes = propTypes;