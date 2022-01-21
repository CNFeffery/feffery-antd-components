import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';

// 定义走马灯组件AntdCarousel，api参数参考https://ant.design/components/carousel-cn/
export default class AntdCarousel extends Component {
    render() {
        // 取得必要属性或参数
        let {
            id,
            children,
            className,
            style,
            autoplay,
            dotPosition,
            easing,
            effect,
            loading_state,
            setProps
        } = this.props;

        return (
            <div id={id}
                className={className}
                style={{ ...{ width: '100%' }, ...style }}>
                <Carousel
                    autoplay={autoplay}
                    dotPosition={dotPosition}
                    easing={easing}
                    effect={effect}
                    data-dash-is-loading={
                        (loading_state && loading_state.is_loading) || undefined
                    }
                >{children}</Carousel>
            </div>
        );
    }
}

// 定义参数或属性
AntdCarousel.propTypes = {
    // 组件id
    id: PropTypes.string,

    // 可选，传入走马灯内各元素所组成的数组
    children: PropTypes.node,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 设置是否开启自动切换模式，默认为false
    autoplay: PropTypes.bool,

    // 设置面板指示位置，可选的有'top'、'bottom'、'left'与'right'，默认为'bottom'
    dotPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),

    // 设置动画效果，接受css中animation-timing-function参数合法值，默认为'linear'
    easing: PropTypes.string,

    // 设置动画效果，可选的有'scrollx'与'fade'，默认为'scrollx'
    effect: PropTypes.oneOf(['scrollx', 'fade']),

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
}