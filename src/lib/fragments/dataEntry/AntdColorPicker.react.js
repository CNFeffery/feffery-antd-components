// react核心
import React, { useEffect, useContext, useMemo, useState } from 'react';
// antd核心
import { ColorPicker } from 'antd';
import { Color } from '@rc-component/color-picker';
// 辅助库
import { has, isArray, isString, isUndefined } from 'lodash';
import { pickBy } from 'ramda';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 上下文
import PropsContext from '../../contexts/PropsContext';
import FormContext from '../../contexts/FormContext';
// 状态管理
import useFormStore from '../../store/formStore';
// 参数类型
import { propTypes, defaultProps } from '../../components/dataEntry/AntdColorPicker.react';

/**
 * 颜色选择器组件AntdColorPicker
 */
const AntdColorPicker = (props) => {
    let {
        id,
        className,
        style,
        key,
        name,
        allowClear,
        arrow,
        defaultValue,
        value,
        format,
        mode,
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

    const parseLinearGradient = (gradient) => {
        const matches = gradient.match(/\brgb\([^)]*\)\s*(\d+%?)/g);
        if (!matches) return [];

        // 处理匹配项，确保每个颜色后面都有百分比  
        let colors = [];
        let lastPercent = 0;
        matches.forEach((match, index) => {
            const [color, percentStr] = match.split(/\s+/);
            let percent = parseInt(percentStr.replace('%', ''), 10);

            // 如果百分比缺失，使用上一个百分比或100%（如果是最后一个元素）  
            if (isNaN(percent)) {
                percent = (index === matches.length - 1) ? 100 : lastPercent;
            }

            // 更新最后使用的百分比  
            lastPercent = percent;

            // 添加到结果数组中  
            colors.push({ color: color, percent: percent });
        });

        return colors;
    }

    const parseValue = (parseString) => {
        return parseString?.startsWith('linear-gradient') ? parseLinearGradient(parseString) : parseString?.toLowerCase()
    }

    const [formatColor, setFormatColor] = useState({});

    const context = useContext(PropsContext)
    const formId = useContext(FormContext)

    const updateItemValue = useFormStore((state) => state.updateItemValue)
    const deleteItemValue = useFormStore((state) => state.deleteItemValue)

    // 收集当前组件相关表单值
    const currentFormValue = useFormStore(state => state.values?.[formId]?.[name || id])

    const _defaultValue = useMemo(() => {
        return defaultValue ? defaultValue : (mode === 'gradient' ? 'linear-gradient(90deg, rgb(22,119,255) 0%, rgb(22,119,255) 100%)' : '#1677ff')
    }, [])

    useEffect(() => {
        // 初始化value
        if (_defaultValue && !value) {
            // 当_defaultValue不为空且value为空时，为value初始化_defaultValue对应的value值
            setProps({
                value: _defaultValue,
            })
        }
        let _value = parseValue(_defaultValue || value);
        let color;
        if (isArray(_value)) {
            color = _value[0].color
        } else {
            color = _value
        }
        let _color = new Color(color);
        setFormatColor({
            hex: _color.toHexString()?.toLowerCase(),
            rgb: _color.toRgbString()?.toLowerCase(),
            hsb: _color.toHsbString()?.toLowerCase()
        })
    }, [])

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
    const onFormatChange = (_format) => {
        setProps({ format: _format })
        if (value) {
            setProps({
                value: _format === 'hex' ?
                    formatColor.hex :
                    (
                        _format === 'rgb' ?
                            formatColor.rgb :
                            formatColor.hsb
                    )
            })
        }
    }

    // console.log(value)

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
            defaultValue={parseValue(_defaultValue)}
            value={
                formId && (name || id) ?
                    parseValue(currentFormValue) :
                    parseValue(value)
            }
            format={format}
            mode={mode}
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
            onFormatChange={onFormatChange}
            onOpenChange={(e) => setProps({ open: e })}
            onChange={(e) => {
                // AntdForm表单批量控制
                if (formId && (name || id)) {
                    // 表单值更新
                    updateItemValue(
                        formId,
                        name || id,
                        (
                            has(e, 'colors') ?
                                e.toCssString() :
                                (
                                    format === 'hex' ?
                                        e.toHexString() :
                                        (
                                            format === 'rgb' ?
                                                e.toRgbString() :
                                                e.toHsbString()
                                        )
                                )
                        )?.toLowerCase()
                    )
                }
                setProps({
                    value: (
                        has(e, 'colors') ?
                            e.toCssString() :
                            (
                                format === 'hex' ?
                                    e.toHexString() :
                                    (
                                        format === 'rgb' ?
                                            e.toRgbString() :
                                            e.toHsbString()
                                    )
                            )
                    )?.toLowerCase()
                })
                setFormatColor({
                    hex: e.toHexString()?.toLowerCase(),
                    rgb: e.toRgbString()?.toLowerCase(),
                    hsb: e.toHsbString()?.toLowerCase()
                    ,
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