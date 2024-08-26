import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdSpoiler = React.lazy(() => import(/* webpackChunkName: "data_display" */ '../../fragments/dataDisplay/AntdSpoiler.react'));

/**
 * 展开收起组件AntdSpoiler
 */
const AntdSpoiler = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdSpoiler {...props} />
        </Suspense>
    );
}

AntdSpoiler.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 组件型，内嵌元素
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
     * 内容区css类名，支持[动态css](/advanced-classname)
     */
    contentClassName: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    /**
     * 内容区css样式
     */
    contentStyle: PropTypes.object,

    /**
     * 组件文案语种，可选项有`'zh-cn'`（简体中文）、`'en-us'`（英语）、`'de-de'`（德语）
     * 默认值：`'zh-cn'`
     */
    locale: PropTypes.oneOf(['zh-cn', 'en-us', 'de-de']),

    /**
     * 组件型，展开状态下，收起按钮的文案内容
     */
    hideLabel: PropTypes.node,

    /**
     * 组件型，收起状态下，展开按钮的文案内容
     */
    showLabel: PropTypes.node,

    /**
     * 展开/收起按钮的位置，可选项有`'left'`、`'right'`
     * 默认值：`'left'`
     */
    labelPosition: PropTypes.oneOf(['left', 'right']),

    /**
     * 监听或设置是否处于展开状态
     * 默认值：`false`
     */
    open: PropTypes.bool,

    /**
     * 收起状态下，内容区域最大像素高度
     * 默认值：`50`
     */
    maxHeight: PropTypes.number,

    /**
     * 展开/收起过渡动画耗时，单位：秒
     * 默认值：`0.1`
     */
    transitionDuration: PropTypes.number,

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