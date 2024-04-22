import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdCard = React.lazy(() => import(/* webpackChunkName: "data_display" */ '../../../fragments/dataDisplay/card/AntdCard.react'));

const AntdCard = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdCard {...props} />
        </Suspense>
    );
}

// 定义参数或属性
AntdCard.propTypes = {
    // 组件id
    id: PropTypes.string,

    /**
     * The content of the tab - will only be displayed if this tab is selected
     */
    children: PropTypes.node,

    // css类名
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    // 自定义css字典
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 卡片操作组，位置在卡片底部
    actions: PropTypes.arrayOf(PropTypes.node),

    // 设置卡片标题内容
    title: PropTypes.node,

    // 设置卡片右上角额外链接功能
    extraLink: PropTypes.exact({
        // 链接文字内容
        content: PropTypes.string,

        // 链接url地址
        href: PropTypes.string,

        // 链接target跳转事件，默认为'_blank'
        target: PropTypes.string,

        // 链接className
        className: PropTypes.string,

        // 链接css样式表
        style: PropTypes.object
    }),

    /**
     * 设置卡片右上角额外元素，优先级高于extraLink
     */
    extra: PropTypes.node,

    // 设置卡片填充封面图片功能，会自适应卡片的尺寸
    coverImg: PropTypes.exact({
        // 设置src属性
        src: PropTypes.string,

        // 设置alt属性
        alt: PropTypes.string,

        // css类名
        className: PropTypes.string,

        // 设置css样式表
        style: PropTypes.object
    }),

    // 设置内容区域自定义样式
    bodyStyle: PropTypes.object,

    // 设置标题区域自定义样式
    headStyle: PropTypes.object,

    // 设置是否有边框，默认为true
    bordered: PropTypes.bool,

    // 设置卡片鼠标悬浮时是否呈现浮起效果，默认为false
    hoverable: PropTypes.bool,

    // 设置卡片的尺寸，可选的有'default'与'small'，默认为'default'
    size: PropTypes.oneOf(['default', 'small']),

    /**
     * 监听当前卡片累计点击次数
     * 默认：0
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
AntdCard.defaultProps = {
    bordered: true,
    hoverable: false,
    size: 'default',
    nClicks: 0
}

export default AntdCard;

export const propTypes = AntdCard.propTypes;
export const defaultProps = AntdCard.defaultProps;