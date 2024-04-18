import React, { useEffect, useContext } from 'react';
import { Slider } from 'antd';
import { isString, isUndefined } from 'lodash';
import useCss from '../../hooks/useCss';
import PropsContext from '../../contexts/PropsContext';
import FormContext from '../../contexts/FormContext';
import useFormStore from '../../store/formStore';
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

    // 监听用户完成拖拽的动作
    const onChange = (e) => {
        if (!readOnly) {
            // AntdForm表单批量控制
            if (formId && (name || id)) {
                // 表单值更新
                updateItemValue(formId, name || id, e)
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
            defaultValue={
                formId && (name || id) ?
                    undefined :
                    defaultValue
            }
            value={
                formId && (name || id) ?
                    currentFormValue :
                    value
            }
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