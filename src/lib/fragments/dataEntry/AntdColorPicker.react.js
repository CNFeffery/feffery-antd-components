import React, { useEffect, useContext } from 'react';
import { ColorPicker } from 'antd';
import { Color } from '@rc-component/color-picker';
import useCss from '../../hooks/useCss';
import { isString, isUndefined } from 'lodash';
import PropsContext from '../../contexts/PropsContext';
import useFormStore from '../../store/formStore';
import useFormItemStore from '../../store/formItemStore';
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
    const updateValues = useFormStore((state) => state.updateValues)
    const updateAntdColorPicker = useFormItemStore((state) => state.updateAntdColorPicker)

    // 处理AntdForm表单值搜集功能
    useEffect(() => {
        if (name || id) {
            updateValues({ [name || id]: value || null })
        }
    }, [value])

    // 如果当前组件被表单项包裹，初始渲染时对表单项进行赋值
    useEffect(() => {
        if (name || id) {
            updateAntdColorPicker({ [name || id]: { value: value || null } })
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
                if (name || id) {
                    updateAntdColorPicker({
                        [name || id]: {
                            value: (
                                format === 'hex' ?
                                    e.toHexString() :
                                    (
                                        format === 'rgb' ?
                                            e.toRgbString() :
                                            e.toHsbString()
                                    )
                            ) || null, timestamp: Date.now()
                        }
                    })
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