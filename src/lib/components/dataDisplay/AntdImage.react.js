import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdImage = React.lazy(() => import(/* webpackChunkName: "data_display" */ '../../fragments/dataDisplay/AntdImage.react'));

/**
 * 图片组件AntdImage
 */
const AntdImage = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdImage {...props} />
        </Suspense>
    );
}

AntdImage.propTypes = {
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
     * 组件文案语种，可选项有`'zh-cn'`（简体中文）、`'en-us'`（英语）、`'de-de'`（德语）
     * 默认值：`'zh-cn'`
     */
    locale: PropTypes.oneOf(['zh-cn', 'en-us', 'de-de']),

    /**
     * 图片alt信息
     */
    alt: PropTypes.string,

    /**
     * 图片宽度
     */
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),

    /**
     * 图片高度
     */
    height: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),

    /**
     * 配置图片资源地址，当传入数组时为多图片模式
     */
    src: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]),

    /**
     * 图片加载失败占位图资源地址
     */
    fallback: PropTypes.string,

    /**
     * 多图片模式展示方式，可选项有`'fold'`、`'unfold'`
     * 默认值：`'fold'`
     */
    multiImageMode: PropTypes.oneOf(['fold', 'unfold']),

    /**
     * 监听或控制当前图片预览层是否处于打开状态
     */
    previewVisible: PropTypes.bool,

    /**
     * 监听或控制当前图片预览对应切换到的图片下标
     */
    previewCurrent: PropTypes.number,

    /**
     * 配置图片预览相关功能，传入`false`时会禁用预览功能
     * 默认值：`true`
     */
    preview: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.exact({
            /**
             * 自定义预览图链接地址
             */
            src: PropTypes.string,
            /**
             * 预览模式下是否可移动图片
             */
            movable: PropTypes.bool,
            /**
             * 组件型，用于自定义缩略图遮罩元素
             */
            mask: PropTypes.node,
            /**
             * 缩略图遮罩元素css类名
             */
            maskClassName: PropTypes.string,
            /**
             * 缩略图根节点css类名
             */
            rootClassName: PropTypes.string,
            /**
             * `1+scaleStep`值为每一步缩放的倍数
             * 默认值：`0.5`
             */
            scaleStep: PropTypes.number,
            /**
             * 最小缩放倍数
             * 默认值：`1`
             */
            minScale: PropTypes.number,
            /**
             * 最大缩放倍数
             * 默认值：`50`
             */
            maxScale: PropTypes.number
        })
    ]),

    /**
     * 针对预览模式下的工具栏，末尾扩充自定义工具图标元素
     */
    toolbarExtra: PropTypes.node,

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
AntdImage.defaultProps = {
    preview: true,
    multiImageMode: 'fold',
    locale: 'zh-cn'
}

export default AntdImage;

export const propTypes = AntdImage.propTypes;
export const defaultProps = AntdImage.defaultProps;