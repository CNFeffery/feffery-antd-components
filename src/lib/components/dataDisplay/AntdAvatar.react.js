import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdAvatar = React.lazy(() => import(/* webpackChunkName: "data_display" */ '../../fragments/dataDisplay/AntdAvatar.react'));

/**
 * 头像组件AntdAvatar
 */
const AntdAvatar = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdAvatar {...props} />
        </Suspense>
    );
}

AntdAvatar.propTypes = {
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
     * 头像模式，可选项有`'text'`、`'icon'`、`'image'`
     * 默认值：`'icon'`
     */
    mode: PropTypes.oneOf(['text', 'icon', 'image']),

    /**
     * `mode='text'`时，设置字符距离左右两侧边界的像素距离
     * 默认值：`4`
     */
    gap: PropTypes.number,

    /**
     * `mode='text'`时，设置文字内容
     */
    text: PropTypes.string,

    /**
     * `mode='icon'`时，设置图标，同**AntdIcon**的`icon`参数
     */
    icon: PropTypes.string,

    /**
     * `mode='icon'`时，设置图标渲染方式，可选项有`'AntdIcon'`、`'fontawesome'`
     */
    iconRenderer: PropTypes.oneOf(['AntdIcon', 'fontawesome']),

    /**
     * `mode='image'`时，设置图像无法显示时的占位文字
     */
    alt: PropTypes.string,

    /**
     * `mode='image'`时，设置图片地址
     */
    src: PropTypes.string,

    /**
     * `mode='image'`时，设置图片base64地址
     */
    srcSet: PropTypes.string,

    /**
     * `mode='image'`时，设置图片是否允许拖拽
     */
    draggable: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(['true', 'false'])
    ]),

    /**
     * `mode='image'`时，设置图片的CORS属性，可选项有`'anonymous'`、`'use-credentials'`、`''`
     */
    crossOrigin: PropTypes.oneOf(['anonymous', 'use-credentials', '']),

    /**
     * 配置头像尺寸，可传入数值型代表像素尺寸（支持响应式），或传入字符型使用预设尺寸规格，可选项有`'large'`、`'small'`、`'default'`
     * 默认值：`'default'`
     */
    size: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(['large', 'small', 'default']),
        PropTypes.exact({
            xs: PropTypes.number,
            sm: PropTypes.number,
            md: PropTypes.number,
            lg: PropTypes.number,
            xl: PropTypes.number,
            xxl: PropTypes.number
        })
    ]),

    /**
     * 头像形状，可选项有`'circle'`、`'square'`
     * 默认值：`'circle'`
     */
    shape: PropTypes.oneOf(['circle', 'square']),

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
AntdAvatar.defaultProps = {
    mode: 'icon',
    gap: 4,
    size: 'default',
    shape: 'circle',
    iconRenderer: 'AntdIcon'
}

export default AntdAvatar;

export const propTypes = AntdAvatar.propTypes;
export const defaultProps = AntdAvatar.defaultProps;