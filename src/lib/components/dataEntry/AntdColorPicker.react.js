import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdColorPicker = React.lazy(() => import(/* webpackChunkName: "data_entry" */ '../../fragments/dataEntry/AntdColorPicker.react'));

/**
 * 颜色选择器组件AntdColorPicker
 */
const AntdColorPicker = ({
    id,
    className,
    style,
    key,
    locale = 'zh-cn',
    name,
    enableBatchControl = true,
    allowClear = false,
    arrow,
    defaultValue,
    value,
    format = 'hex',
    mode = 'single',
    disabled = false,
    disabledAlpha = true,
    open,
    presets,
    placement = 'bottomLeft',
    showText = false,
    size = 'middle',
    trigger = 'click',
    setProps,
    ...others
}) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdColorPicker {
                ...{
                    id,
                    className,
                    style,
                    key,
                    locale,
                    name,
                    enableBatchControl,
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
                    ...others
                }
            } />
        </Suspense>
    );
}

AntdColorPicker.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 当前组件css样式
     */
    style: PropTypes.object,

    /**
     * 当前组件css类名，支持[动态css](/advanced-classname)
     */
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    /**
     * 组件文案语种，可选项有`'zh-cn'`（简体中文）、`'en-us'`（英语）、`'de-de'`（德语）
     * 默认值：`'zh-cn'`
     */
    locale: PropTypes.oneOf(['zh-cn', 'en-us', 'de-de']),

    /**
     * 配合`AntdForm`表单批量值搜集/控制功能使用，充当当前表单项的字段名，以`id`作为缺省值
     */
    name: PropTypes.string,

    /**
     * 控制当前组件是否参与有效的`AntdForm`表单批量值搜集/控制功能
     * 默认值：`true`
     */
    enableBatchControl: PropTypes.bool,

    /**
     * 是否允许清除已选颜色
     * 默认值：`false`
     */
    allowClear: PropTypes.bool,

    /**
     * 配置颜色选择面板额外箭头
     * 默认值：`true`
     */
    arrow: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.exact({
            /**
             * 箭头是否指向面板中心
             * 默认值：`false`
             */
            pointAtCenter: PropTypes.bool
        })
    ]),

    /**
     * 初始化已输入值
     */
    defaultValue: PropTypes.string,

    /**
     * 监听或设置选中颜色值
     * 默认值：`'#1677FF'`
     */
    value: PropTypes.string,

    /**
     * 监听或设置颜色格式，可选项有`'rgb'`、`'hex'`、`'hsb'`
     * 默认值：`'hex'`
     */
    format: PropTypes.oneOf(['rgb', 'hex', 'hsb']),

    /**
     * 选择器模式，用于配置单色与渐变，可选项有`'single'`、`'gradient'`，支持单选项或多选项组合
     * 默认值：`single`
     */
    mode: PropTypes.oneOfType([
        PropTypes.oneOf(['single', 'gradient']),
        PropTypes.arrayOf(
            PropTypes.oneOf(['single', 'gradient'])
        )
    ]),

    /**
     * 是否禁用当前组件
     * 默认值：`false`
     */
    disabled: PropTypes.bool,

    /**
     * 是否禁用透明度选择
     * 默认值：`true`
     */
    disabledAlpha: PropTypes.bool,

    /**
     * 监听或设置颜色选择面板展开状态
     */
    open: PropTypes.bool,

    /**
     * 配置预设颜色选择项
     */
    presets: PropTypes.arrayOf(
        PropTypes.exact({
            /**
             * 组件型，当前预设项标签内容
             */
            label: PropTypes.node,
            /**
             * 当前预设项所包含的颜色值数组
             */
            colors: PropTypes.arrayOf(PropTypes.string),
            /**
             * 当前预设项默认是否展开
             * 默认值：`true`
             */
            defaultOpen: PropTypes.bool
        })
    ),

    /**
     * 颜色选择面板展开方向，可选项有`'top'`、`'topLeft'`、`'topRight'`、`'bottom'`、`'bottomLeft'`、`'bottomRight'`
     * 默认值：`'bottomRight'`
     */
    placement: PropTypes.oneOf([
        'top', 'topLeft', 'topRight', 'bottom', 'bottomLeft', 'bottomRight'
    ]),

    /**
     * 是否显示颜色值文本
     * 默认值：`false`
     */
    showText: PropTypes.bool,

    /**
     * 设置触发控件尺寸规格，可选项有`'large'`、`'middle'`、`'small'`
     * 默认值：`'middle'`
     */
    size: PropTypes.oneOf(['large', 'middle', 'small']),

    /**
     * 颜色选择面板触发方式，可选项有`'hover'`、`'click'`
     * 默认值：`'click'`
     */
    trigger: PropTypes.oneOf(['hover', 'click']),

    /**
     * `data-*`格式属性通配
     */
    'data-*': PropTypes.string,

    /**
     * `aria-*`格式属性通配
     */
    'aria-*': PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export default AntdColorPicker;

export const propTypes = AntdColorPicker.propTypes;
export const defaultProps = AntdColorPicker.defaultProps;