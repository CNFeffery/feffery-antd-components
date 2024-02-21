import React, { useEffect, useContext } from 'react';
import { ColorPicker } from 'antd';
import { Color } from '@rc-component/color-picker';
import useCss from '../../hooks/useCss';
import { isString, isUndefined } from 'lodash';
import PropsContext from '../../contexts/PropsContext';
import FormContext from '../../contexts/FormContext';
import FormItemContext from '../../contexts/FormItemContext';
import { propTypes, defaultProps } from '../../components/dataEntry/AntdColorPicker.react';

// 定义颜色选择器组件AntdColorPicker，api参数参考https://ant.design/components/color-picker-cn
const AntdColorPicker = (props) => {
    // 取得必要属性或参数
    let {
        id,
        className,
        style,
        key,
        name,
        allowClear,
        arrow,
        value,
        format,
        disabled,
        disabledAlpha,
        open,
        presets,
        placement,
        showText,
        size,
        trigger,
        setProps,
        loading_state
    } = props;

    const context = useContext(PropsContext)
    const formContext = useContext(FormContext)
    const formItemContext = useContext(FormItemContext)

    // 处理AntdForm表单值搜集功能
    useEffect(() => {
        // 当上下文有效，且存在有效字段名
        if (formContext && formContext.setValues && (name || id)) {
            // 融合当前最新value值到上文_values中
            formContext.setValues((prevValues) => ({
                ...prevValues,
                ...{
                    [name || id]: value || null
                }
            }))
        }
    }, [value])

    // 如果当前组件被表单项包裹，初始渲染时对表单项进行赋值
    useEffect(() => {
        // 当上下文有效，且存在有效字段名
        if (formItemContext && formItemContext.setItemValues && (name || id)) {
            // 融合当前最新value值到上文itemValues中
            formItemContext.setItemValues((prevValues) => ({
                ...prevValues,
                ...{
                    [name || id]: value || null
                }
            }))
        }
    }, [])

    // 每次format发生变更时，同步更新value值
    useEffect(() => {
        if (value) {
            let _color = new Color(value)
            setProps({
                value: (
                    format === 'hex' ?
                        _color.toHexString() :
                        (
                            format === 'rgb' ?
                                _color.toRgbString() :
                                _color.toHsbString()
                        )
                )
            })
        }
    }, [format])

    return (
        <ColorPicker id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            allowClear={allowClear}
            arrow={arrow}
            value={value}
            format={format}
            disabled={
                context && !isUndefined(context.componentDisabled) ?
                    context.componentDisabled :
                    disabled
            }
            disabledAlpha={disabledAlpha}
            open={open}
            presets={presets}
            placement={placement}
            showText={showText}
            size={size}
            trigger={trigger}
            onFormatChange={(e) => setProps({ format: e })}
            onOpenChange={(e) => setProps({ open: e })}
            onChangeComplete={(e) => {
                // 当上下文有效，且存在有效字段名
                if (formItemContext && formItemContext.setItemValues && (name || id)) {
                    // 融合当前最新value值到上文itemValues中
                    formItemContext.setItemValues((prevValues) => ({
                        ...prevValues,
                        ...{
                            [name || id]: (
                                format === 'hex' ?
                                    e.toHexString() :
                                    (
                                        format === 'rgb' ?
                                            e.toRgbString() :
                                            e.toHsbString()
                                    )
                            ) || null
                        }
                    }))
                }
                setProps({
                    value: (
                        format === 'hex' ?
                            e.toHexString() :
                            (
                                format === 'rgb' ?
                                    e.toRgbString() :
                                    e.toHsbString()
                            )
                    )
                })
            }}
            onClear={() => setProps({ value: null })}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            } />
    );
}

export default AntdColorPicker;

AntdColorPicker.defaultProps = defaultProps;
AntdColorPicker.propTypes = propTypes;