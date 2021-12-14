import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import zhCN from 'antd/lib/locale/zh_CN';
import { Comment, Tooltip, ConfigProvider } from 'antd';
import { AntdAvatar } from '..';
import { omit } from 'ramda';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './styles.css'

moment.locale('zh-cn');

const parseChildrenToArray = children => {
    if (children && !Array.isArray(children)) {
        return [children];
    }
    return children;
};

// 定义评论组件AntdComment，api参数参考https://ant.design/components/comment-cn/
const AntdComment = (props) => {
    // 取得必要属性或参数
    let {
        id,
        children,
        className,
        style,
        commentId,
        replyCounts,
        authorName,
        authorNameHref,
        publishTime,
        fromNow,
        commentContent,
        likesCount,
        dislikesCount,
        action,
        defaultAction,
        avatarProps,
        setProps,
        loading_state
    } = props;

    children = parseChildrenToArray(children)

    if (!action && defaultAction) {
        setProps({
            action: defaultAction
        })
    }

    const like = () => {
        setProps({
            likesCount: action === 'liked' ? likesCount : likesCount + 1,
            action: 'liked',
            dislikesCount: action === 'disliked' ? dislikesCount - 1 : dislikesCount
        });
    };

    const dislike = () => {
        setProps({
            dislikesCount: action === 'disliked' ? dislikesCount : dislikesCount + 1,
            action: 'disliked',
            likesCount: action === 'liked' ? likesCount - 1 : likesCount
        })
    };

    const actions = [
        <Tooltip key="comment-basic-like" title="支持">
            <span onClick={like}>
                {action === 'liked' ? <LikeFilled style={{ color: 'rgb(236, 65, 65)' }} /> : <LikeOutlined />}
                <span className="comment-action">{likesCount}</span>
            </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="反对">
            <span onClick={dislike}>
                {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
                <span className="comment-action">{dislikesCount}</span>
            </span>
        </Tooltip>,
        <span key="comment-basic-reply-to" onClick={() => {
            console.log({ replyCounts })
            setProps({ replyCounts: replyCounts + 1 })
        }}>添加回复</span>,
    ];

    return (
        <ConfigProvider locale={zhCN}>
            <Comment
                id={id}
                className={className}
                style={style}
                actions={actions}
                author={<a href={authorNameHref} target={'_blank'}>{authorName}</a>}
                avatar={<AntdAvatar {...omit(
                    ['setProps', 'persistence', 'persistence_type', 'persisted_props'],
                    avatarProps
                )} />}
                content={
                    <p>{commentContent}</p>
                }
                datetime={
                    <Tooltip title={moment().format(publishTime.value)} placement={'right'}>
                        <span>{fromNow ?
                            moment(publishTime.value, publishTime.format ? publishTime.format : 'YYYY-MM-DD HH:mm:ss').fromNow() :
                            publishTime.value}</span>
                    </Tooltip>
                }
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
            >
                {children}
            </Comment>
        </ConfigProvider>
    );
}

// 定义参数或属性
AntdComment.propTypes = {
    // 组件id
    id: PropTypes.string,

    /**
     * The content of the tab - will only be displayed if this tab is selected
     */
    children: PropTypes.node,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 定义评论唯一id，主要用于数据库匹配场景
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

    // 设置“添加回复”按钮被点击次数，默认为0
    replyCounts: PropTypes.number,

    // 设置评论正文内容
    commentContent: PropTypes.string,

    // 设置评论对应点赞次数
    likesCount: PropTypes.number,

    // 设置评论对应反对次数
    dislikesCount: PropTypes.number,

    // 对应当前支持/反对状态，可选的有'liked'与'disliked'
    action: PropTypes.oneOf(['liked', 'disliked']),

    // 设置初始化时的支持/反对状态
    defaultAction: PropTypes.oneOf(['liked', 'disliked']),

    // 定义头像参数，与AntdAvatar一致
    avatarProps: PropTypes.object,

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
AntdComment.defaultProps = {
    likesCount: 0,
    dislikesCount: 0,
    fromNow: false,
    replyCounts: 0
}

export default AntdComment;