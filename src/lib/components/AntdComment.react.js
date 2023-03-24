import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { str2Locale } from './locales.react';
import { Comment, Tooltip, Popconfirm, ConfigProvider } from 'antd';
import { AntdAvatar } from '..';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import { parseChildrenToArray } from './utils';
import { isString } from 'lodash';
import useCss from '../hooks/useCss';
import PropsContext from '../contexts/PropsContext';

// 定义评论组件AntdComment，api参数参考https://ant.design/components/comment-cn/
const AntdComment = (props) => {
    // 取得必要属性或参数
    let {
        id,
        children,
        className,
        style,
        key,
        locale,
        commentId,
        showLikeDislike,
        showReply,
        showDelete,
        replyClicks,
        deleteClicks,
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
        popupContainer,
        setProps,
        loading_state
    } = props;

    const context = useContext(PropsContext)
    locale = (context && context.locale) || locale

    if (locale === 'zh-cn') {
        moment.locale('zh-cn');
    } else if (locale === 'en-us') {
        moment.locale('en');
    }

    children = parseChildrenToArray(children)

    useEffect(() => {
        if (!action && defaultAction) {
            setProps({
                action: defaultAction
            })
        }
    }, [])

    const like = () => {
        setProps({
            likesCount: action === 'liked' ? likesCount - 1 : likesCount + 1,
            action: action === 'liked' ? 'default' : 'liked',
            dislikesCount: action === 'disliked' ? dislikesCount - 1 : dislikesCount
        });
    };

    const dislike = () => {
        setProps({
            dislikesCount: action === 'disliked' ? dislikesCount - 1 : dislikesCount + 1,
            action: action === 'disliked' ? 'default' : 'disliked',
            likesCount: action === 'liked' ? likesCount - 1 : likesCount
        })
    };

    const actions = [
        showLikeDislike ?
            <Tooltip key="comment-basic-like" title={locale === "zh-cn" ? "支持" : "like"}>
                <span onClick={like}>
                    {action === 'liked' ? <LikeFilled style={{ color: 'rgb(236, 65, 65)' }} /> : <LikeOutlined />}
                    <span className="comment-action">{likesCount}</span>
                </span>
            </Tooltip> : undefined,
        showLikeDislike ?
            <Tooltip key="comment-basic-dislike" title={locale === "zh-cn" ? "反对" : "dislike"}>
                <span onClick={dislike}>
                    {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
                    <span className="comment-action">{dislikesCount}</span>
                </span>
            </Tooltip> : undefined,
        showReply ?
            <span key="comment-basic-reply-to" onClick={() => {
                setProps({ replyClicks: replyClicks + 1 })
            }}>{locale === 'zh-cn' ? "添加回复" : "Add a reply"}</span> : undefined,
        showDelete ?
            <Popconfirm
                title={locale === 'zh-cn' ? "确认删除" : "Confirm deletion"}
                onConfirm={() => setProps({ deleteClicks: deleteClicks + 1 })}
                okText={locale === 'zh-cn' ? "确认" : "Yes"}
                cancelText={locale === 'zh-cn' ? "取消" : "No"}
                getPopupContainer={
                    popupContainer === 'parent' ?
                        (triggerNode) => triggerNode.parentNode :
                        undefined
                }>
                <span key="comment-basic-delete">{locale === 'zh-cn' ? "删除" : "Delete"}</span>
            </Popconfirm> : undefined
    ];

    return (
        <ConfigProvider locale={str2Locale.get(locale)}>
            <Comment
                id={id}
                className={
                    isString(className) ?
                        className :
                        (className ? useCss(className) : undefined)
                }
                style={style}
                key={commentId}
                actions={actions}
                author={<a href={authorNameHref} target={'_blank'}>{authorName}</a>}
                avatar={<AntdAvatar {...avatarProps} />}
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
    popupContainer: 'body'
}

export default AntdComment;