import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdDocDialog = React.lazy(() => import(/* webpackChunkName: "other" */ '../../fragments/other/AntdDocDialog.react'));

/**
 * 文档嵌入弹框组件AntdDocDialog
 */
const AntdDocDialog = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdDocDialog {...props} />
        </Suspense>
    );
}

AntdDocDialog.propTypes = {
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
     * 组件是否显示
     * 默认值：`false`
     */
    visible: PropTypes.bool,

    /**
     * 标题
     * 默认值：`'帮助文档'`
     */
    title: PropTypes.string,

    /**
     * 距离屏幕顶部距离
     */
    defaultTop: PropTypes.number,

    /**
     * 嵌入模式一般属性配置
     */
    embedConfig: PropTypes.exact({
        /**
         * 弹窗缩放最小限制[宽，高]
         */
        min: PropTypes.arrayOf(PropTypes.number),
        /**
         * 弹窗缩放最大限制[宽，高]
         */
        max: PropTypes.arrayOf(PropTypes.number),
        /**
         * 弹窗默认宽度
         * 默认值：`520`
         */
        width: PropTypes.number,
        /**
         * 弹窗默认高度
         * 默认值：`600`
         */
        height: PropTypes.number,
        /**
         * 弹窗默认位置
         */
        left: PropTypes.number,
        /**
         * 弹窗默认位置
         */
        top: PropTypes.number,
    }),

    /**
     * 弹窗模式一般属性配置
     */
    normalConfig: PropTypes.exact({
        /**
         * 弹窗缩放最小限制[宽，高]
         */
        min: PropTypes.arrayOf(PropTypes.number),
        /**
         * 弹窗缩放最大限制[宽，高]
         */
        max: PropTypes.arrayOf(PropTypes.number),
        /**
         * 弹窗默认宽度
         * 默认值：`520`
         */
        width: PropTypes.number,
        /**
         * 弹窗默认高度
         * 默认值：`600`
         */
        height: PropTypes.number,
        /**
         * 弹窗默认位置
         */
        left: PropTypes.number,
        /**
         * 弹窗默认位置
         */
        top: PropTypes.number,
    }),

    /**
     * 帮助文档链接地址，`key`为当前路由的`pathname`，`value`为链接地址
     */
    docUrls: PropTypes.objectOf(PropTypes.string),

    /**
     * 帮助文档重定向地址，若当前路由不在`docUrls`的`key`中，则跳转至此地址
     */
    fallbackUrl: PropTypes.string,

    /**
     * 监听关闭按钮点击行为
     */
    closeTimestamp: PropTypes.number,

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
AntdDocDialog.defaultProps = {
    visible: false,
    title: '帮助文档'
}

export default AntdDocDialog;

export const propTypes = AntdDocDialog.propTypes;
export const defaultProps = AntdDocDialog.defaultProps;