import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdPopover = React.lazy(() => import(/* webpackChunkName: "data_display" */ '../../fragments/dataDisplay/AntdPopover.react'));

/**
 * 气泡卡片组件Popover
 */
const AntdPopover = ({
    id,
    children,
    className,
    style,
    styles,
    classNames,
    key,
    title,
    content,
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
            <LazyAntdPopover {
                ...{
                    id,
                    children,
                    className,
                    style,
                    styles,
                    classNames,
                    key,
                    title,
                    content,
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

AntdPopover.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 组件型，气泡卡片触发目标元素
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
     * 细分控制子元素css样式
     */
    styles: PropTypes.exact({
        /**
         * 根元素（包含箭头、内容元素）css样式
         */
        root: PropTypes.object,
        /**
         * 内容元素css样式
         */
        body: PropTypes.object
    }),

    /**
     * 细分控制子元素css类名
     */
    classNames: PropTypes.exact({
        /**
         * 根元素（包含箭头、内容元素）css类名
         */
        root: PropTypes.string,
        /**
         * 内容元素css类名
         */
        body: PropTypes.string
    }),

    /**
     * 组件型，标题内容
     */
    title: PropTypes.node,

    /**
     * 组件型，内容区元素
     */
    content: PropTypes.node,

    /**
     * 气泡卡片展开方向，可选项有`'top'`、`'left'`、`'right'`、`'bottom'`、`'topLeft'`、`'topRight'`、`'bottomLeft'`、`'bottomRight'`、`'leftTop'`、`'leftBottom'`、`'rightTop'`、`'rightBottom'`
     * 默认值：`top'`
     */
    placement: PropTypes.oneOf([
        'top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom'
    ]),

    /**
     * 背景颜色
     */
    color: PropTypes.string,

    /**
     * 鼠标移入到气泡卡片弹出延时，单位：秒
     * 默认值：`0.1`
     */
    mouseEnterDelay: PropTypes.number,

    /**
     * 鼠标移出到气泡卡片消失延时，单位：秒
     * 默认值：`0.1`
     */
    mouseLeaveDelay: PropTypes.number,

    /**
     * 气泡卡片css类名，支持[动态css](/advanced-classname)
     */
    overlayClassName: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    /**
     * 气泡卡片css样式
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
    trigger: PropTypes.oneOfType([
        PropTypes.oneOf(['hover', 'focus', 'click']),
        PropTypes.arrayOf(PropTypes.oneOf(['hover', 'focus', 'click']))
    ]),

    /**
     * 气泡卡片z-index
     */
    zIndex: PropTypes.number,

    /**
     * 控制气泡卡片附带箭头显示形式，可选项有`'show'`、`'hide'`、`'center'`
     * 默认值：`'show'`
     */
    arrow: PropTypes.oneOf(['show', 'hide', 'center']),

    /**
     * 是否始终保持更新内容
     * 默认值：`false`
     */
    fresh: PropTypes.bool,

    /**
     * 监听或设置当前气泡卡片的展开状态
     * 默认值：`false`
     */
    open: PropTypes.bool,

    /**
     * 是否保持气泡卡片处于`open`对应状态不变
     * 默认值：`false`
     */
    permanent: PropTypes.bool,

    /**
     * 气泡卡片展开层锚定策略，可选项有`'parent'`、`'body'`
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

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export default AntdPopover;

export const propTypes = AntdPopover.propTypes;
export const defaultProps = AntdPopover.defaultProps;