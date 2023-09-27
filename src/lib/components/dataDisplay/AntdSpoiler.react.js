import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdSpoiler = React.lazy(() => import(/* webpackChunkName: "data_display" */ '../../fragments/dataDisplay/AntdSpoiler.react'));

const AntdSpoiler = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdSpoiler {...props} />
        </Suspense>
    );
}

// 定义参数或属性
AntdSpoiler.propTypes = {
    id: PropTypes.string,

    children: PropTypes.node,

    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    style: PropTypes.object,

    // 内容区css类
    contentClassName: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    // 内容区css样式
    contentStyle: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 设置语言环境，可选的有'zh-cn'、'en-us'
    locale: PropTypes.oneOf(['zh-cn', 'en-us']),

    // 设置展开状态下，收起按钮的文案
    hideLabel: PropTypes.node,

    // 设置收起状态下，展开按钮的文案
    showLabel: PropTypes.node,

    // 设置展开/收起按钮的位置，默认为'left'
    labelPosition: PropTypes.oneOf(['left', 'right']),

    // 设置或监听当前是否处于展开状态，默认为false
    open: PropTypes.bool,

    // 设置收起状态下的内容区域最大像素高度，默认为50
    maxHeight: PropTypes.number,

    // 设置展开收起过渡动画的时长，单位：秒，默认为0.1
    transitionDuration: PropTypes.number,

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
}

// 设置默认参数
AntdSpoiler.defaultProps = {
    locale: 'zh-cn',
    open: false,
    maxHeight: 50,
    transitionDuration: 0.1,
    labelPosition: 'left'
}

export default AntdSpoiler;

export const propTypes = AntdSpoiler.propTypes;
export const defaultProps = AntdSpoiler.defaultProps;