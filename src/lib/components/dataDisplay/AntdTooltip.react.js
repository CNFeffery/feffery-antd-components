import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdTooltip = React.lazy(() => import(/* webpackChunkName: "data_display" */ '../../fragments/dataDisplay/AntdTooltip.react'));

/**
 * 文字提示组件AntdTooltip
 */
const AntdTooltip = ({
    id,
    children,
    className,
    style,
    key,
    title,
    placement = 'top',
    color,
    mouseEnterDelay = 0.1,
    mouseLeaveDelay = 0.1,
    overlayClassName,
    overlayStyle,
    overlayInnerStyle,
    trigger = 'hover',
    zIndex,
    arrow = 'show',
    fresh = false,
    open = false,
    permanent = false,
    popupContainer = 'body',
    setProps,
    ...others
}) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdTooltip {
                ...{
                    id,
                    children,
                    className,
                    style,
                    key,
                    title,
                    placement,
                    color,
                    mouseEnterDelay,
                    mouseLeaveDelay,
                    overlayClassName,
                    overlayStyle,
                    overlayInnerStyle,
                    trigger,
                    zIndex,
                    arrow,
                    fresh,
                    open,
                    permanent,
                    popupContainer,
                    setProps,
                    ...others
                }
            } />
        </Suspense>
    );
}

AntdTooltip.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 组件型，文字提示挂载目标
     */
    children: PropTypes.node,

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
     * 组件型，文字提示内容
     */
    title: PropTypes.node,

    /**
     * 文字提示弹出方向，可选项有`'top'`、`'left'`、`'right'`、`'bottom'`、`'topLeft'`、`'topRight'`、`'bottomLeft'`、`'bottomRight'`、`'leftTop'`、`'leftBottom'`、`'rightTop'`、`'rightBottom'`
     * 默认值：`'top'`
     */
    placement: PropTypes.oneOf([
        'top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'
    ]),

    /**
     * 背景颜色
     */
    color: PropTypes.string,

    /**
     * 鼠标移入到文字提示弹出延时，单位：秒
     * 默认值：`0.1`
     */
    mouseEnterDelay: PropTypes.number,

    /**
     * 鼠标移出到文字提示消失延时，单位：秒
     * 默认值：`0.1`
     */
    mouseLeaveDelay: PropTypes.number,

    /**
     * 文字提示卡片css类名，支持[动态css](/advanced-classname)
     */
    overlayClassName: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    /**
     * 文字提示卡片css样式
     */
    overlayStyle: PropTypes.object,

    /**
     * 内容区css样式
     */
    overlayInnerStyle: PropTypes.object,

    /**
     * 触发方式，可选项有`'hover'`、`'focus'`、`'click'`，可多选
     * 默认值：`'hover'`
     */
    trigger: PropTypes.oneOfType(
        [
            PropTypes.oneOf(['hover', 'focus', 'click']),
            PropTypes.arrayOf(PropTypes.oneOf(['hover', 'focus', 'click']))
        ]
    ),

    /**
     * 文字提示卡片z-index
     */
    zIndex: PropTypes.number,

    /**
     * 文字提示卡片附带箭头显示形式，可选项有`'show'`、`'hide'`、`'center'`
     * 默认值：`'show'`
     */
    arrow: PropTypes.oneOf(['show', 'hide', 'center']),

    /**
     * 是否始终保持更新内容
     * 默认值：`false`
     */
    fresh: PropTypes.bool,

    /**
     * 监听或设置当前文字提示卡片的展开状态
     * 默认值：`false`
     */
    open: PropTypes.bool,

    /**
     * 是否保持文字提示卡片处于`open`对应状态不变
     * 默认值：`false`
     */
    permanent: PropTypes.bool,

    /**
     * 文字提示卡片展开层锚定策略，可选项有`'parent'`、`'body'`
     * 默认值：`'body'`
     */
    popupContainer: PropTypes.oneOf(['parent', 'body']),

    /**
     * `data-*`格式属性通配
     */
    'data-*': PropTypes.string,

    /**
     * `aria-*`格式属性通配
     */
    'aria-*': PropTypes.string,

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

export default AntdTooltip;

export const propTypes = AntdTooltip.propTypes;
export const defaultProps = AntdTooltip.defaultProps;