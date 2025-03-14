import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdCard = React.lazy(() => import(/* webpackChunkName: "data_display" */ '../../../fragments/dataDisplay/card/AntdCard.react'));

const AntdCard = ({
    id,
    children,
    className,
    style,
    key,
    actions,
    extraLink,
    extra,
    coverImg,
    bodyStyle,
    headStyle,
    bordered = true,
    hoverable = false,
    size = 'default',
    title,
    nClicks = 0,
    setProps,
    ...others
}) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdCard {
                ...{
                    id,
                    children,
                    className,
                    style,
                    key,
                    actions,
                    extraLink,
                    extra,
                    coverImg,
                    bodyStyle,
                    headStyle,
                    bordered,
                    hoverable,
                    size,
                    title,
                    nClicks,
                    setProps,
                    ...others
                }
            } />
        </Suspense>
    );
}

AntdCard.propTypes = {
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
     * 组件型，底部操作区元素
     */
    actions: PropTypes.node,

    /**
     * 组件型，标题内容
     */
    title: PropTypes.node,

    /**
     * 配置卡片右上角额外链接相关参数
     */
    extraLink: PropTypes.exact({
        /**
         * 链接文字内容
         */
        content: PropTypes.string,
        /**
         * 链接地址
         */
        href: PropTypes.string,
        /**
         * 链接跳转行为
         */
        target: PropTypes.string,
        /**
         * 链接css类名
         */
        className: PropTypes.string,
        /**
         * 链接css样式
         */
        style: PropTypes.object
    }),

    /**
     * 组件型，卡片右上角额外元素，优先级高于`extraLink`
     */
    extra: PropTypes.node,

    /**
     * 配置封面图片相关参数
     */
    coverImg: PropTypes.exact({
        /**
         * 图片资源地址
         */
        src: PropTypes.string,
        /**
         * 图片alt信息
         */
        alt: PropTypes.string,
        /**
         * 图片css类名
         */
        className: PropTypes.string,
        /**
         * 图片css样式
         */
        style: PropTypes.object
    }),

    /**
     * 内容区css样式
     */
    bodyStyle: PropTypes.object,

    /**
     * 标题css样式
     */
    headStyle: PropTypes.object,

    /**
     * 是否渲染边框
     * 默认值：`true`
     */
    bordered: PropTypes.bool,

    /**
     * 是否在鼠标悬停时显示特殊样式
     * 默认值：`false`
     */
    hoverable: PropTypes.bool,

    /**
     * 卡片尺寸规格，可选项有`'default'`、`'small'`
     * 默认值：`'default'`
     */
    size: PropTypes.oneOf(['default', 'small']),

    /**
     * 监听当前卡片累计点击次数
     * 默认值：`0`
     */
    nClicks: PropTypes.number,

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

export default AntdCard;

export const propTypes = AntdCard.propTypes;
export const defaultProps = AntdCard.defaultProps;