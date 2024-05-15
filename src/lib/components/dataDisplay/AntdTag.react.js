import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdTag = React.lazy(() => import(/* webpackChunkName: "data_display" */ '../../fragments/dataDisplay/AntdTag.react'));

/**
 * 标签组件AntdTag
 */
const AntdTag = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdTag {...props} />
        </Suspense>
    );
}

AntdTag.propTypes = {
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
     * 组件型，标签内容
     */
    content: PropTypes.node,

    /**
     * 组件型，标签前缀图标
     */
    icon: PropTypes.node,

    /**
     * 标签颜色，可使用内置的若干种颜色主题，也可使用任何合法的css颜色值
     */
    color: PropTypes.string,

    /**
     * 标签点击跳转链接地址
     */
    href: PropTypes.string,

    /**
     * 标签链接跳转行为
     */
    target: PropTypes.string,

    /**
     * 是否渲染边框
     * 默认值：`true`
     */
    bordered: PropTypes.bool,

    /**
     * 是否渲染关闭按钮
     * 默认值：`false`
     */
    closeIcon: PropTypes.bool,

    /**
     * `closeIcon=True`时，监听关闭按钮累计点击次数
     * 默认值：`0`
     */
    closeCounts: PropTypes.number,

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
AntdTag.defaultProps = {
    target: '_blank',
    bordered: true,
    closeIcon: false,
    closeCounts: 0
}

export default AntdTag;

export const propTypes = AntdTag.propTypes;
export const defaultProps = AntdTag.defaultProps;