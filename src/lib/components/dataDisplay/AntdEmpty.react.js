import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdEmpty = React.lazy(() => import(/* webpackChunkName: "data_display" */ '../../fragments/dataDisplay/AntdEmpty.react'));

/**
 * 空状态组件AntdEmpty
 */
const AntdEmpty = ({
    id,
    children,
    className,
    style,
    styles,
    classNames,
    key,
    locale = 'zh-cn',
    description,
    image = 'default',
    setProps,
    ...others
}) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdEmpty {
                ...{
                    id,
                    children,
                    className,
                    style,
                    styles,
                    classNames,
                    key,
                    locale,
                    description,
                    image,
                    setProps,
                    ...others
                }
            } />
        </Suspense>
    );
}

AntdEmpty.propTypes = {
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
     * 细分控制子元素css样式
     */
    styles: PropTypes.exact({
        /**
         * 根元素css样式
         */
        root: PropTypes.object,
        /**
         * 图标元素css样式
         */
        image: PropTypes.object,
        /**
         * 描述元素css样式
         */
        description: PropTypes.object,
        /**
         * 底部元素css样式
         */
        footer: PropTypes.object
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
         * 图标元素css类名
         */
        image: PropTypes.string,
        /**
         * 描述元素css类名
         */
        description: PropTypes.string,
        /**
         * 底部元素css类名
         */
        footer: PropTypes.string
    }),

    /**
     * 当前组件css类名，支持[动态css](/advanced-classname)
     */
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    /**
     * 组件文案语种，可选项有`'zh-cn'`（简体中文）、`'en-us'`（英语）、`'de-de'`（德语）
     * 默认值：`'zh-cn'`
     */
    locale: PropTypes.oneOf(['zh-cn', 'en-us', 'de-de']),

    /**
     * 描述信息内容
     */
    description: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.bool
    ]),

    /**
     * 状态图片地址，也可以使用内置图片，可选项有`'default'`、`'simple'`
     * 默认值：`'default'`
     */
    image: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.oneOf([
            'default', 'simple'
        ])
    ]),

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

export default AntdEmpty;

export const propTypes = AntdEmpty.propTypes;
export const defaultProps = AntdEmpty.defaultProps;