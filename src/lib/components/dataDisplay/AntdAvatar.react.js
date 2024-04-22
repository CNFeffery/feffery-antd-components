import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdAvatar = React.lazy(() => import(/* webpackChunkName: "data_display" */ '../../fragments/dataDisplay/AntdAvatar.react'));

const AntdAvatar = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdAvatar {...props} />
        </Suspense>
    );
}

// 定义参数或属性
AntdAvatar.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    // 自定义css字典
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 设置头像模式，可选的有'text'、'icon'及'image'，默认为'icon'
    mode: PropTypes.oneOf(['text', 'icon', 'image']),

    // 对于字符型头像，设置字符距离左右两侧边界的像素距离，默认为4
    gap: PropTypes.number,

    // 对应文字类型头像的文字内容
    text: PropTypes.string,

    // 设置头像的自定义icon，与AntdIcon通用，默认无icon
    icon: PropTypes.string,

    // 针对icon参数值设置渲染方式，默认为'AntdIcon'即icon等价于AntdIcon的icon参数
    // 当设置为'fontawesome'时，icon参数对应fontawesome图标的css类名
    iconRenderer: PropTypes.oneOf(['AntdIcon', 'fontawesome']),

    // 设置图像无法显示时的替代文本
    alt: PropTypes.string,

    // 设置图片类型的头像资源地址
    src: PropTypes.string,

    // 设置base64类型图片字符串
    srcSet: PropTypes.string,

    // 设置图片类型的头像其图片是否允许拖动
    draggable: PropTypes.oneOfType([
        // 布尔型输入
        PropTypes.bool,

        // 字符型输入，可选的有'true'和'false'
        PropTypes.oneOf(['true', 'false'])
    ]),

    // 设置图片类型的头像CORS属性：anonymous表示跨域请求不发送凭证信息、use-credentials表示跨域请求发送凭证信息、''表示不返回跨域资源，并在控制台中报告错误，而不加载跨域资源
    crossOrigin: PropTypes.oneOf(['anonymous', 'use-credentials', '']),

    // 设置头像尺寸大小，默认为'default'
    size: PropTypes.oneOfType([
        // 头像像素边长
        PropTypes.number,

        // 固定的规格，可选的有'large'、'small'及'default'
        PropTypes.oneOf(['large', 'small', 'default']),

        // 响应式size
        PropTypes.exact({
            xs: PropTypes.number,
            sm: PropTypes.number,
            md: PropTypes.number,
            lg: PropTypes.number,
            xl: PropTypes.number,
            xxl: PropTypes.number
        })
    ]),

    // 设置头像的形状，可选的有'circle'、'square'，默认为'circle'
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