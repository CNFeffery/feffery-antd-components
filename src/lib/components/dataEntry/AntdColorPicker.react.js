import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ColorPicker } from 'antd';
import { Color } from '@rc-component/color-picker';
import useCss from '../../hooks/useCss';
import { isString } from 'lodash';

// 定义颜色选择器组件AntdColorPicker
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

// 定义参数或属性
AntdColorPicker.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    // 自定义css字典
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    /**
     * 是否允许清除已选颜色
     * 默认：false
     */
    allowClear: PropTypes.bool,

    /**
     * 配置颜色选择面板附带的箭头
     * 默认：true
     */
    arrow: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.exact({
            /**
             * 箭头是否位于面板中心
             */
            pointAtCenter: PropTypes.bool
        })
    ]),

    /**
     * 设置或监听当前选中的颜色值
     * 默认：'#1677FF'
     */
    value: PropTypes.string,

    /**
     * 设置或监听当前的颜色格式，可选的有'rgb'、'hex'、'hsb'
     * 默认：'hex'
     */
    format: PropTypes.oneOf(['rgb', 'hex', 'hsb']),

    /**
     * 是否禁用当前组件
     * 默认：false
     */
    disabled: PropTypes.bool,

    /**
     * 是否禁用透明度选择
     * 默认：true
     */
    disabledAlpha: PropTypes.bool,

    /**
     * 设置或监听当前颜色选择面板展开状态
     */
    open: PropTypes.bool,

    /**
     * 配置预设颜色选择项列表
     */
    presets: PropTypes.arrayOf(
        PropTypes.exact({
            /**
             * 当前项的标签内容
             */
            label: PropTypes.node,

            /**
             * 当前项对应的预设色彩值数组
             */
            colors: PropTypes.arrayOf(PropTypes.string),

            /**
             * 当前项默认是否展开
             */
            defaultOpen: PropTypes.bool
        })
    ),

    /**
     * 设置颜色选择面板的展开方位，可选的有'top'、'topLeft'、'topRight'、'bottom'、'bottomLeft'、'bottomRight'
     * 默认：'bottomLeft'
     */
    placement: PropTypes.oneOf([
        'top',
        'topLeft',
        'topRight',
        'bottom',
        'bottomLeft',
        'bottomRight'
    ]),

    /**
     * 是否显示颜色值文本
     * 默认：false
     */
    showText: PropTypes.bool,

    /**
     * 设置触发器尺寸规格，可选的有'large'、'middle'、'small'
     * 默认：'middle'
     */
    size: PropTypes.oneOf(['large', 'middle', 'small']),

    /**
     * 设置颜色选择面板触发方式，可选的有'hover'、'click'
     * 默认：'click'
     */
    trigger: PropTypes.oneOf(['hover', 'click']),

    loading_state: PropTypes.shape({
        /**
         * Determines if the component is loading or not
         */
        is_loading: PropTypes.bool,
        /**
         * Holds which property is loading
         */
        prop_name: PropTypes.string,
        /**
         * Holds the name of the component that is loading
         */
        component_name: PropTypes.string
    }),

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

// 设置默认参数
AntdColorPicker.defaultProps = {
    allowClear: false,
    format: 'hex',
    disabled: false,
    disabledAlpha: true,
    placement: 'bottomLeft',
    showText: false,
    size: 'middle',
    trigger: 'click',
    value: '#1677FF'
}

export default AntdColorPicker;