import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdCarousel = React.lazy(() => import(/* webpackChunkName: "data_display" */ '../../fragments/dataDisplay/AntdCarousel.react'));

const AntdCarousel = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdCarousel {...props} />
        </Suspense>
    );
}

// 定义参数或属性
AntdCarousel.propTypes = {
    // 组件id
    id: PropTypes.string,

    // 可选，传入走马灯内各元素所组成的数组
    children: PropTypes.node,

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
     * 设置是否显示箭头
     * 默认值：`false`
     */
    arrows: PropTypes.bool,

    // 设置是否开启自动切换模式，默认为false
    autoplay: PropTypes.bool,

    // 设置面板指示位置，可选的有'top'、'bottom'、'left'与'right'，默认为'bottom'
    dotPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),

    // 设置动画效果，接受css中animation-timing-function参数合法值，默认为'linear'
    easing: PropTypes.string,

    // 设置动画效果，可选的有'scrollx'与'fade'，默认为'scrollx'
    effect: PropTypes.oneOf(['scrollx', 'fade']),

    // 设置轮播时间间隔，单位：毫秒，默认为3000
    autoplaySpeed: PropTypes.number,

    // 设置每次轮播动画的耗时，单位：毫秒，默认为500`
    speed: PropTypes.number,

    // 设置是否在鼠标悬停时暂停轮播，默认为false
    pauseOnHover: PropTypes.bool,

    /**
     * 是否启用无限循环切换
     * 默认：true
     */
    infinite: PropTypes.bool,

    /**
     * 是否针对走马灯中的子项实施懒加载效果
     * 默认：false
     */
    lazyLoad: PropTypes.bool,

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

// 设置默认参数
AntdCarousel.defaultProps = {
    arrows: false,
    autoplay: false,
    dotPosition: 'bottom',
    easing: 'linear',
    effect: 'scrollx',
    autoplaySpeed: 3000,
    speed: 500,
    pauseOnHover: false,
    infinite: true,
    lazyLoad: false
}

export default AntdCarousel;

export const propTypes = AntdCarousel.propTypes;
export const defaultProps = AntdCarousel.defaultProps;