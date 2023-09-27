import React, { useEffect, useContext } from 'react';
import moment from 'moment';
import { str2Locale } from '../../components/locales.react';
import { Comment, Tooltip, Popconfirm, ConfigProvider } from 'antd';
import AntdAvatar from './AntdAvatar.react';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import { parseChildrenToArray } from '../../components/utils';
import { isString } from 'lodash';
import useCss from '../../hooks/useCss';
import PropsContext from '../../contexts/PropsContext';
import { propTypes, defaultProps } from '../../components/dataDisplay/AntdComment.react';

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
        loading_state,
        batchPropsNames
    } = props;

    // 批属性监听
    useEffect(() => {
        if (batchPropsNames && batchPropsNames.length !== 0) {
            let _batchPropsValues = {};
            for (let propName of batchPropsNames) {
                _batchPropsValues[propName] = props[propName];
            }
            setProps({
                batchPropsValues: _batchPropsValues
            })
        }
    })

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

export default AntdComment;

AntdComment.defaultProps = defaultProps;
AntdComment.propTypes = propTypes;