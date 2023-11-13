import React, { useEffect } from 'react';
import { ColorPicker } from 'antd';
import { Color } from '@rc-component/color-picker';
import useCss from '../../hooks/useCss';
import { isString } from 'lodash';
import { propTypes, defaultProps } from '../../components/dataEntry/AntdColorPicker.react';


// 定义颜色选择器组件AntdColorPicker，api参数参考https://ant.design/components/color-picker-cn
const AntdColorPicker = (props) => {
    // 取得必要属性或参数
    let {
        id,
        className,
        style,
        key,
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
            disabled={disabled}
            disabledAlpha={disabledAlpha}
            open={open}
            presets={presets}
            placement={placement}
            showText={showText}
            size={size}
            trigger={trigger}
            onFormatChange={(e) => setProps({ format: e })}
            onOpenChange={(e) => setProps({ open: e })}
            onChangeComplete={(e) => setProps({
                value: (
                    format === 'hex' ?
                        e.toHexString() :
                        (
                            format === 'rgb' ?
                                e.toRgbString() :
                                e.toHsbString()
                        )
                )
            })}
            onClear={() => setProps({ value: null })}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            } />
    );
}

export default AntdColorPicker;

AntdColorPicker.defaultProps = defaultProps;
AntdColorPicker.propTypes = propTypes;