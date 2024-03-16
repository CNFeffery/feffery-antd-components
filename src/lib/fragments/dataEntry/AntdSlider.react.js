import React, { useEffect, useContext, useMemo } from 'react';
import { Slider } from 'antd';
import { isString, isUndefined } from 'lodash';
import useCss from '../../hooks/useCss';
import PropsContext from '../../contexts/PropsContext';
import useFormStore from '../../store/formStore';
import useFormItemStore from '../../store/formItemStore';
import { propTypes, defaultProps } from '../../components/dataEntry/AntdSlider.react';


// 定义滑动输入条组件AntdSlider，api参数参考https://ant.design/components/slider-cn/
const AntdSlider = (props) => {
    // 取得必要属性或参数
    let {
        id,
        name,
        className,
        style,
        railStyle,
        styles,
        classNames,
        key,
        value,
        defaultValue,
        disabled,
        autoFocus,
        vertical,
        range,
        min,
        max,
        step,
        marks,
        tooltipVisible,
        tooltipPrefix,
        tooltipSuffix,
        popupContainer,
        readOnly,
        loading_state,
        setProps,
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
    const updateAntdSlider = useFormItemStore((state) => state.updateAntdSlider)

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
            updateAntdSlider({[name || id]: {value: value || null}})
        }
    }, [])

    useEffect(() => {
        // 初始化value
        if (range) {
            // 范围选择模式时
            if (!value) {
                setProps({
                    value: defaultValue || [min, max],
                    defaultValue: defaultValue || [min, max]
                })
            }
        } else {
            // 单值选择模式时
            if (!value && value !== 0) {
                setProps({
                    value: (defaultValue || defaultValue === 0) ? defaultValue : max,
                    defaultValue: (defaultValue || defaultValue === 0) ? defaultValue : max
                })
            }
        }
    }, [])

    // 设置tipFormatter格式化函数
    const formatter = (e) => {
        return tooltipPrefix + `${e}` + tooltipSuffix
    }

    // 监听blur事件
    const onBlur = e => {
        if (currentValidateTrigger.includes('onBlur') && (name || id)) {
            updateAntdSlider({[name || id]: {value: value || null, timestamp: Date.now()}})
        }
    }

    // 监听focus事件
    const onFocus = e => {
        if (currentValidateTrigger.includes('onFocus') && (name || id)) {
            updateAntdSlider({[name || id]: {value: value || null, timestamp: Date.now()}})
        }
    }

    // 监听用户完成拖拽的动作
    const onChange = (e) => {
        if (!readOnly) {
            if (currentValidateTrigger.includes('onChange') && (name || id)) {
                updateAntdSlider({[name || id]: {value: e || null, timestamp: Date.now()}})
            }
            setProps({ value: e })
        }
    }

    // 返回定制化的前端组件
    return (
        <Slider
            id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            railStyle={railStyle}
            styles={styles}
            classNames={classNames}
            key={key}
            value={value}
            defaultValue={defaultValue}
            disabled={
                context && !isUndefined(context.componentDisabled) ?
                    context.componentDisabled :
                    disabled
            }
            autoFocus={autoFocus}
            vertical={vertical}
            range={range}
            min={min}
            max={max}
            step={step}
            marks={marks}
            tooltip={{
                open: tooltipVisible,
                getPopupContainer: popupContainer === 'parent' ?
                    (triggerNode) => triggerNode.parentNode :
                    undefined,
                formatter: formatter
            }}
            onBlur={onBlur}
            onFocus={onFocus}
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

export default AntdSlider;

AntdSlider.defaultProps = defaultProps;
AntdSlider.propTypes = propTypes;