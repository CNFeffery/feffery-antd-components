import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdDescriptions = React.lazy(
    () =>
        import(
            /* webpackChunkName: "data_display" */ '../../../fragments/dataDisplay/descriptions/AntdDescriptions.react'
        )
);

/**
 * 描述列表组件AntdDescriptions
 */
const AntdDescriptions = ({
    id,
    children,
    className,
    style,
    styles,
    classNames,
    key,
    items,
    title,
    column = 3,
    bordered = false,
    size = 'default',
    layout = 'horizontal',
    extra,
    setProps,
    ...others
}) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdDescriptions
                {...{
                    id,
                    children,
                    className,
                    style,
                    styles,
                    classNames,
                    key,
                    items,
                    title,
                    column,
                    bordered,
                    size,
                    layout,
                    extra,
                    setProps,
                    ...others,
                }}
            />
        </Suspense>
    );
};

AntdDescriptions.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 组件型，传入内部各描述列表子项
     */
    children: PropTypes.node,

    /**
     * 当前组件css样式
     */
    style: PropTypes.object,

    /**
     * 当前组件css类名，支持[动态css](/advanced-classname)
     */
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

    /**
     * 细分控制子元素css样式
     */
    styles: PropTypes.exact({
        /**
         * 根元素css样式
         */
        root: PropTypes.object,
        /**
         * 头部元素css样式
         */
        header: PropTypes.object,
        /**
         * 标题元素css样式
         */
        title: PropTypes.object,
        /**
         * 额外内容css样式
         */
        extra: PropTypes.object,
        /**
         * 标签元素css样式
         */
        label: PropTypes.object,
        /**
         * 内容元素css样式
         */
        content: PropTypes.object,
    }),

    /**
     * 细分控制子元素css类名
     */
    classNames: PropTypes.exact({
        /**
         * 根元素css类名
         */
        root: PropTypes.string,
        /**
         * 头部元素css类名
         */
        header: PropTypes.string,
        /**
         * 标题元素css类名
         */
        title: PropTypes.string,
        /**
         * 额外内容css类名
         */
        extra: PropTypes.string,
        /**
         * 标签元素css类名
         */
        label: PropTypes.string,
        /**
         * 内容元素css类名
         */
        content: PropTypes.string,
    }),

    /**
     * 配置描述列表子项，优先级高于`children`
     */
    items: PropTypes.arrayOf(
        PropTypes.exact({
            /**
             * 组件型，子项标题内容
             */
            label: PropTypes.node,
            /**
             * 子项所占宽度份数，当设置为`'filled'`时会自适应占满当前行剩余可用空间
             * 默认值：`1`
             */
            span: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.oneOf(['filled']),
            ]),
            /**
             * 组件型，子项内容
             */
            children: PropTypes.node,
            /**
             * 子项css样式
             */
            style: PropTypes.object,
            /**
             * 子项css类名
             */
            className: PropTypes.string,
        })
    ),

    /**
     * 组件型，标题内容
     */
    title: PropTypes.node,

    /**
     * 每行显示的字段项数量，支持响应式
     * 默认值：`3`
     */
    column: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.exact({
            xxl: PropTypes.number,
            xl: PropTypes.number,
            lg: PropTypes.number,
            md: PropTypes.number,
            sm: PropTypes.number,
            xs: PropTypes.number,
        }),
    ]),

    /**
     * 是否显示边框
     * 默认值：`false`
     */
    bordered: PropTypes.bool,

    /**
     * 整体尺寸规格，可选项有`'small'`、`'default'`、`'large'`
     * 默认值：`'default'`
     */
    size: PropTypes.oneOf(['small', 'default', 'large']),

    /**
     * 布局方式，可选项有`'horizontal'`、`'vertical'`
     * 默认值：`'horizontal'`
     */
    layout: PropTypes.oneOf(['horizontal', 'vertical']),

    /**
     * 组件型，设置操作区域，显示在右上方
     */
    extra: PropTypes.node,

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
    setProps: PropTypes.func,
};

export default AntdDescriptions;

export const propTypes = AntdDescriptions.propTypes;
export const defaultProps = AntdDescriptions.defaultProps;
