// react核心
import React, { useEffect, useContext } from 'react';
// antd核心
import { Slider } from 'antd';
// 辅助库
import { isString, isUndefined } from 'lodash';
import { pickBy } from 'ramda';
import { useLoading } from '../../components/utils';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 上下文
import PropsContext from '../../contexts/PropsContext';
import FormContext from '../../contexts/FormContext';
// 状态管理
import useFormStore from '../../store/formStore';
// 参数类型
import { propTypes, defaultProps } from '../../components/dataEntry/AntdSlider.react';

/**
 * 滑动输入条组件AntdSlider
 */
const AntdSlider = (props) => {
    let {
        id,
        name,
        className,
        style,
        styles,
        classNames,
        key,
        enableBatchControl,
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
        setProps,
        persistence,
        persisted_props,
        persistence_type,
        batchPropsNames,
        ...others
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
            if (formId && (name || id) && enableBatchControl) {
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
            if (formId && (name || id) && enableBatchControl) {
                // 表单值更新
                updateItemValue(formId, name || id, e)
            }
            setProps({ value: e })
        }
    }

    return (
        <Slider
            // 提取具有data-*或aria-*通配格式的属性
            {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), others)}
            id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            styles={styles}
            classNames={classNames}
            key={key}
            defaultValue={
                formId && (name || id) && enableBatchControl ?
                    undefined :
                    defaultValue
            }
            value={
                formId && (name || id) && enableBatchControl ?
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
            data-dash-is-loading={useLoading()}
        />
    );
}

export default AntdSlider;

AntdSlider.defaultProps = defaultProps;
AntdSlider.propTypes = propTypes;