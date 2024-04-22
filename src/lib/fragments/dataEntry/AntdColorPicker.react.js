import React, { useEffect, useContext } from 'react';
import { ColorPicker } from 'antd';
import { Color } from '@rc-component/color-picker';
import useCss from '../../hooks/useCss';
import { isString, isUndefined } from 'lodash';
import { pickBy } from 'ramda';
import PropsContext from '../../contexts/PropsContext';
import FormContext from '../../contexts/FormContext';
import useFormStore from '../../store/formStore';
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
                ).toLowerCase()
            })
        }
    }, [format])

    return (
        <ColorPicker
            // 提取具有data-*或aria-*通配格式的属性
            {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), props)}
            id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            allowClear={allowClear}
            arrow={arrow}
            value={
                formId && (name || id) ?
                    currentFormValue?.toLowerCase() || '#1677ff' :
                    value?.toLowerCase() || '#1677ff'
            }
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
                // AntdForm表单批量控制
                if (formId && (name || id)) {
                    // 表单值更新
                    updateItemValue(
                        formId,
                        name || id,
                        (
                            format === 'hex' ?
                                e.toHexString() :
                                (
                                    format === 'rgb' ?
                                        e.toRgbString() :
                                        e.toHsbString()
                                )
                        )?.toLowerCase()
                    )
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
                    )?.toLowerCase()
                })
            }}
            onClear={() => {
                // AntdForm表单批量控制
                if (formId && (name || id)) {
                    // 表单值更新
                    updateItemValue(formId, name || id, null)
                }
                setProps({ value: null })
            }}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            } />
    );
}

export default AntdColorPicker;

AntdColorPicker.defaultProps = defaultProps;
AntdColorPicker.propTypes = propTypes;