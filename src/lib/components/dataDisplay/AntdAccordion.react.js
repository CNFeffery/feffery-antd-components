import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdAccordion = React.lazy(() => import(/* webpackChunkName: "data_display" */ '../../fragments/dataDisplay/AntdAccordion.react'));

/**
 * 手风琴组件AntdAccordion
 */
const AntdAccordion = ({
    id,
    className,
    style,
    key,
    classNames,
    styles,
    items,
    accordion = true,
    activeKey,
    defaultActiveKey,
    bordered = true,
    size = 'middle',
    collapsible,
    expandIconPosition = 'left',
    ghost = false,
    setProps,
    ...others
}) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdAccordion {
                ...{
                    id,
                    className,
                    style,
                    key,
                    classNames,
                    styles,
                    items,
                    accordion,
                    activeKey,
                    defaultActiveKey,
                    bordered,
                    size,
                    collapsible,
                    expandIconPosition,
                    ghost,
                    setProps,
                    ...others
                }
            } />
        </Suspense>
    );
}

AntdAccordion.propTypes = {
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
         * 细分控制子元素css样式
         */
    styles: PropTypes.shape({
        /**
         * 头部元素css样式
         */
        header: PropTypes.object,
        /**
         * 内容元素css样式
         */
        body: PropTypes.object
    }),

    /**
     * 细分控制子元素css类名
     */
    classNames: PropTypes.shape({
        /**
         * 头部元素css类名
         */
        header: PropTypes.string,
        /**
         * 内容元素css类名
         */
        body: PropTypes.string
    }),

    /**
     * 定义手风琴子项
     */
    items: PropTypes.arrayOf(
        PropTypes.exact({
            /**
             * 当前子项内部元素
             */
            children: PropTypes.node,
            /**
             * 当前子项css类名，支持[动态css](/advanced-classname)
             */
            className: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.object
            ]),
            /**
             * 当前子项css样式
             */
            style: PropTypes.object,
            /**
             * 必填，当前子项唯一key值
             */
            key: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]).isRequired,
            /**
             * 当前子项折叠触发方式，可选项有`'header'`、`'disabled'`、`'icon'`
             */
            collapsible: PropTypes.oneOf(['header', 'disabled', 'icon']),
            /**
             * 当前子项标题元素
             */
            title: PropTypes.node,
            /**
             * 当前子项右上角额外元素
             */
            extra: PropTypes.node,
            /**
             * 是否展示当前手风琴项的箭头图标
             * 默认值：`true`
             */
            showArrow: PropTypes.bool,
            /**
             * 是否强制渲染内部元素
             * 默认值：`false`
             */
            forceRender: PropTypes.bool,
        })
    ),

    /**
     * 是否开启手风琴模式
     * 默认值：`true`
     */
    accordion: PropTypes.bool,

    /**
     * 监听或设置当前处于展开状态的手风琴项key值
     */
    activeKey: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.number)
    ]),

    /**
     * 设置初始化处于展开状态的手风琴项key值
     */
    defaultActiveKey: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.number)
    ]),

    /**
     * 是否渲染边框
     * 默认值：`true`
     */
    bordered: PropTypes.bool,

    /**
     * 组件尺寸规格，可选项有`'small'`、`'middle'`、`'large'`
     * 默认值：`'middle'`
     */
    size: PropTypes.oneOf(['large', 'middle', 'small']),

    /**
     * 设置所有子项折叠触发方式，可选项有`'header'`、`'disabled'`、`'icon'`
     */
    collapsible: PropTypes.oneOf(['header', 'disabled', 'icon']),

    /**
     * 设置折叠图标位置，可选项有`'left'`、`'right'`
     */
    expandIconPosition: PropTypes.oneOf(['left', 'right']),

    /**
     * 是否开启透明无边框模式
     * 默认值：`false`
     */
    ghost: PropTypes.bool,

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

export default AntdAccordion;

export const propTypes = AntdAccordion.propTypes;
export const defaultProps = AntdAccordion.defaultProps;