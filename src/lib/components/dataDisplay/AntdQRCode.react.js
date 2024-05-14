import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdQRCode = React.lazy(() => import(/* webpackChunkName: "data_display" */ '../../fragments/dataDisplay/AntdQRCode.react'));

/**
 * 二维码组件AntdQRCode
 */
const AntdQRCode = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdQRCode {...props} />
        </Suspense>
    );
}

AntdQRCode.propTypes = {
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
     * 组件文案语种，可选项有`'zh-cn'`、`'en-us'`
     * 默认值：`'zh-cn'`
     */
    locale: PropTypes.oneOf(['zh-cn', 'en-us']),

    /**
     * 二维码解析结果
     */
    value: PropTypes.string,

    /**
     * 渲染方式，可选项有`'canvas'`、`'svg'`
     * 默认值：`'canvas'`
     */
    type: PropTypes.oneOf(['canvas', 'svg']),

    /**
     * 二维码内嵌图片地址
     */
    icon: PropTypes.string,

    /**
     * 二维码像素边长
     * 默认值：`160`
     */
    size: PropTypes.number,

    /**
     * 二维码内嵌图片像素边长
     * 默认值：`40`
     */
    iconSize: PropTypes.number,

    /**
     * 二维码颜色
     * 默认值：`'#000'`
     */
    color: PropTypes.string,

    /**
     * 二维码背景颜色
     * 默认值：`'transparent'`
     */
    bgColor: PropTypes.string,

    /**
     * 二维码是否渲染边框
     * 默认值：`true`
     */
    bordered: PropTypes.bool,

    /**
     * 二维码纠错级别，可选项有`'L'`、`'M'`、`'Q'`、`'H'`
     * 默认值：`'M'`
     */
    errorLevel: PropTypes.oneOf(['L', 'M', 'Q', 'H']),

    /**
     * 二维码状态，可选项有`'active'`、`'expired'`、`'loading'`
     * 默认值：`'active'`
     */
    status: PropTypes.oneOf(['active', 'expired', 'loading']),

    /**
     * 当前二维码过期时间，单位：秒，到期后二维码状态将会被强制更新为`'expired'`
     */
    expires: PropTypes.number,

    /**
     * 是否在`value`处于回调更新中时，自动切换为`loading`状态
     * 默认值：`false`
     */
    autoSpin: PropTypes.bool,

    /**
     * 监听当前"点击刷新"按钮累计点击次数，仅在`status`为`'expired'`时有效
     * 默认值：`0`
     */
    refreshClicks: PropTypes.number,

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
AntdQRCode.defaultProps = {
    locale: 'zh-cn',
    type: 'canvas',
    size: 160,
    iconSize: 40,
    color: '#000',
    bgColor: 'transparent',
    bordered: true,
    errorLevel: 'M',
    status: 'active',
    autoSpin: false,
    refreshClicks: 0
}

export default AntdQRCode;

export const propTypes = AntdQRCode.propTypes;
export const defaultProps = AntdQRCode.defaultProps;