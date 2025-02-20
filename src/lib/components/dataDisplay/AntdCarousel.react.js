import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdCarousel = React.lazy(() => import(/* webpackChunkName: "data_display" */ '../../fragments/dataDisplay/AntdCarousel.react'));

/**
 * 走马灯组件AntdCarousel
 */
const AntdCarousel = ({
    id,
    children,
    className,
    style,
    key,
    arrows = false,
    autoplay = false,
    dotPosition = 'bottom',
    easing = 'linear',
    effect = 'scrollx',
    autoplaySpeed = 3000,
    speed = 500,
    pauseOnHover = false,
    infinite = true,
    lazyLoad = false,
    slidesToShow = 1,
    slidesToScroll = 1,
    setProps,
    ...others
}) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdCarousel {
                ...{
                    id,
                    children,
                    className,
                    style,
                    key,
                    arrows,
                    autoplay,
                    dotPosition,
                    easing,
                    effect,
                    autoplaySpeed,
                    speed,
                    pauseOnHover,
                    infinite,
                    lazyLoad,
                    slidesToShow,
                    slidesToScroll,
                    setProps,
                    ...others
                }
            } />
        </Suspense>
    );
}

AntdCarousel.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 组件型，定义走马灯中需要轮播的若干元素
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
     * 是否显示箭头
     * 默认值：`false`
     */
    arrows: PropTypes.bool,

    /**
     * 是否自动轮播，可传入字典型进行更多配置
     * 默认值：`false`
     */
    autoplay: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            /**
             * 是否展示指示点进度条
             */
            dotDuration: PropTypes.bool
        })
    ]),

    /**
     * 面板指示器位置，可选项有`'top'`、`'bottom'`、`'left'`、`'right'`
     * 默认值：`'bottom'`
     */
    dotPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),

    /**
     * 调整动画效果，同css中的`animation-timing-function`
     * 默认值：'linear'
     */
    easing: PropTypes.string,

    /**
     * 动化效果，可选项有`'scrollx'`、`'fade'`
     * 默认值：'scrollx'
     */
    effect: PropTypes.oneOf(['scrollx', 'fade']),

    /**
     * 轮播间隔时长，单位：毫秒
     * 默认值：`3000`
     */
    autoplaySpeed: PropTypes.number,

    /**
     * 轮播动画耗时，单位：毫秒
     * 默认值：`500`
     */
    speed: PropTypes.number,

    /**
     * 是否在鼠标悬停时暂停轮播
     * 默认值：`false`
     */
    pauseOnHover: PropTypes.bool,

    /**
     * 是否启用无限循环轮播
     * 默认值：`true`
     */
    infinite: PropTypes.bool,

    /**
     * 是否针对走马灯中的子项实施懒加载效果
     * 默认值：`false`
     */
    lazyLoad: PropTypes.bool,

    /**
     * 同时展示的子项数量
     * 默认值：`1`
     */
    slidesToShow: PropTypes.number,

    /**
     * 一次轮播划过的子项数量
     * 默认值：`1`
     */
    slidesToScroll: PropTypes.number,

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

export default AntdCarousel;

export const propTypes = AntdCarousel.propTypes;
export const defaultProps = AntdCarousel.defaultProps;