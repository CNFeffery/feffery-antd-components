import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdComment = React.lazy(() => import(/* webpackChunkName: "data_display" */ '../../fragments/dataDisplay/AntdComment.react'));

const AntdComment = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdComment {...props} />
        </Suspense>
    );
}

// 定义参数或属性
AntdComment.propTypes = {
    // 组件id
    id: PropTypes.string,

    children: PropTypes.node,

    // css类名
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    // 自定义css字典
    style: PropTypes.object,

    // 设置语言环境，可选的有'zh-cn'、'en-us'
    locale: PropTypes.oneOf(['zh-cn', 'en-us']),

    // 可选，用于定义评论唯一id，主要用于数据库匹配场景
    commentId: PropTypes.string,

    // 设置评论发布用户名
    authorName: PropTypes.string,

    // 设置评论发布用户名跳转链接
    authorNameHref: PropTypes.string,

    // 设置发布日期时间
    publishTime: PropTypes.exact({
        // 必填参数，设置日期时间值
        value: PropTypes.string.isRequired,

        // 设置日期时间格式字符串
        format: PropTypes.string
    }).isRequired,

    // 设置是否展示从此刻开始倒推相对时间
    fromNow: PropTypes.bool,

    // 设置是否显示“支持/反对”按钮，默认为true
    showLikeDislike: PropTypes.bool,

    // 设置是否显示“添加回复”按钮，默认为true
    showReply: PropTypes.bool,

    // 设置是否显示“删除”按钮，默认为false
    showDelete: PropTypes.bool,

    // 设置“添加回复”按钮被点击次数，默认为0
    replyClicks: PropTypes.number,

    // 设置“删除”按钮被点击次数，默认为0
    deleteClicks: PropTypes.number,

    // 设置评论正文内容
    commentContent: PropTypes.node,

    // 设置评论对应点赞次数
    likesCount: PropTypes.number,

    // 设置评论对应反对次数
    dislikesCount: PropTypes.number,

    // 对应当前支持/反对状态，可选的有'liked'与'disliked'
    action: PropTypes.oneOf(['liked', 'disliked', 'default']),

    // 设置初始化时的支持/反对状态
    defaultAction: PropTypes.oneOf(['liked', 'disliked', 'default']),

    // 定义头像参数，与AntdAvatar一致
    avatarProps: PropTypes.object,

    // 设置悬浮层锚定策略，可选的有'parent'、'body'，默认为'body'
    popupContainer: PropTypes.oneOf(['parent', 'body']),

    // 用于自定义需要纳入batchProps中的属性名数组
    batchPropsNames: PropTypes.arrayOf(PropTypes.string),

    // 打包监听batchPropsNames中定义的属性值变化
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