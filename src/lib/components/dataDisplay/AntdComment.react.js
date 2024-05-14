import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdComment = React.lazy(() => import(/* webpackChunkName: "data_display" */ '../../fragments/dataDisplay/AntdComment.react'));

/**
 * 评论组件AntdComment
 */
const AntdComment = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdComment {...props} />
        </Suspense>
    );
}

AntdComment.propTypes = {
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
     * 评论唯一id，可用于数据库匹配等场景
     */
    commentId: PropTypes.string,

    /**
     * 评论发布用户名
     */
    authorName: PropTypes.string,

    /**
     * 评论发布用户名附带链接地址
     */
    authorNameHref: PropTypes.string,

    /**
     * 必填，配置发布日期时间相关参数
     */
    publishTime: PropTypes.exact({
        /**
         * 必填，日期时间字符串
         */
        value: PropTypes.string.isRequired,
        /**
         * 与日期时间字符串匹配的格式
         */
        format: PropTypes.string
    }).isRequired,

    /**
     * 是否以相对时间格式呈现发布日期时间
     */
    fromNow: PropTypes.bool,

    /**
     * 是否显示“支持/反对”按钮
     * 默认值：`true`
     */
    showLikeDislike: PropTypes.bool,

    /**
     * 是否显示“添加回复”按钮
     * 默认值：`true`
     */
    showReply: PropTypes.bool,

    /**
     * 是否显示“删除”按钮
     * 默认值：`false`
     */
    showDelete: PropTypes.bool,

    /**
     * 监听“添加回复”按钮累计点击次数
     * 默认值：`0`
     */
    replyClicks: PropTypes.number,

    /**
     * 监听“删除”按钮累计点击次数
     * 默认值：`0`
     */
    deleteClicks: PropTypes.number,

    /**
     * 组件型，评论正文内容
     */
    commentContent: PropTypes.node,

    /**
     * 监听或设置“支持”次数
     */
    likesCount: PropTypes.number,

    /**
     * 监听或设置“反对”次数
     */
    dislikesCount: PropTypes.number,

    /**
     * 监听或设置当前评论“支持/反对”状态，可选项有`'liked'`、`'disliked'`、`'default'`
     * 默认值：`'default'`
     */
    action: PropTypes.oneOf(['liked', 'disliked', 'default']),

    /**
     * 设置当前评论初始化时的“支持/反对”状态，可选项有`'liked'`、`'disliked'`、`'default'`
     */
    defaultAction: PropTypes.oneOf(['liked', 'disliked', 'default']),

    /**
     * 配置评论用户头像，同`AntdAvatar`
     */
    avatarProps: PropTypes.object,

    /**
     * 相关展开层锚定策略，可选项有`'parent'`、`'body'`
     * 默认值：`'body'`
     */
    popupContainer: PropTypes.oneOf(['parent', 'body']),

    // 用于自定义需要纳入batchProps中的属性名数组
    /**
     * 需要纳入[批量属性监听](/batch-props-values)的若干属性名
     */
    batchPropsNames: PropTypes.arrayOf(PropTypes.string),

    /**
     * 监听`batchPropsNames`中指定的若干属性值
     */
    batchPropsValues: PropTypes.object,

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

AntdComment.defaultProps = {
    showLikeDislike: true,
    showReply: true,
    showDelete: false,
    likesCount: 0,
    dislikesCount: 0,
    deleteClicks: 0,
    fromNow: false,
    replyClicks: 0,
    locale: 'zh-cn',
    popupContainer: 'body',
    batchPropsNames: []
}

export default AntdComment;

export const propTypes = AntdComment.propTypes;
export const defaultProps = AntdComment.defaultProps;