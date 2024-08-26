// react核心
import React, { useEffect, useContext } from 'react';
// antd核心
import { Tooltip, Popconfirm, ConfigProvider } from 'antd';
import { Comment } from '@ant-design/compatible';
import AntdAvatar from './AntdAvatar.react';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
// 辅助库
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { str2Locale, locale2text } from '../../components/locales.react';
import { parseChildrenToArray } from '../../components/utils';
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import 'dayjs/locale/de';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 上下文
import PropsContext from '../../contexts/PropsContext';
// 参数类型
import { propTypes, defaultProps } from '../../components/dataDisplay/AntdComment.react';

// 调用dayjs相对时间插件模块
dayjs.extend(relativeTime)

/**
 * 评论组件AntdComment
 */
const AntdComment = (props) => {
    let {
        id,
        children,
        className,
        style,
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

    // 批量属性监听
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
        dayjs.locale('zh-cn');
    } else if (locale === 'en-us') {
        dayjs.locale('en');
    } else if (locale === 'de-de') {
        dayjs.locale('de');
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
            <Tooltip key="comment-basic-like" title={locale2text.Comment[locale].likeTooltipTitle}>
                <span onClick={like}>
                    {action === 'liked' ? <LikeFilled style={{ color: 'rgb(236, 65, 65)' }} /> : <LikeOutlined />}
                    <span className="comment-action">{likesCount}</span>
                </span>
            </Tooltip> : undefined,
        showLikeDislike ?
            <Tooltip key="comment-basic-dislike" title={locale2text.Comment[locale].dislikeTooltipTitle}>
                <span onClick={dislike}>
                    {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
                    <span className="comment-action">{dislikesCount}</span>
                </span>
            </Tooltip> : undefined,
        showReply ?
            <span key="comment-basic-reply-to" onClick={() => {
                setProps({ replyClicks: replyClicks + 1 })
            }}>{locale2text.Comment[locale].replayTitle}</span> : undefined,
        showDelete ?
            <Popconfirm
                title={locale2text.Comment[locale].deleteConfirmTitle}
                onConfirm={() => setProps({ deleteClicks: deleteClicks + 1 })}
                okText={locale2text.Comment[locale].deleteConfirmOkText}
                cancelText={locale2text.Comment[locale].deleteConfirmCancelText}
                getPopupContainer={
                    popupContainer === 'parent' ?
                        (triggerNode) => triggerNode.parentNode :
                        undefined
                }>
                <span key="comment-basic-delete">{locale2text.Comment[locale].deleteTitle}</span>
            </Popconfirm> : undefined
    ];

    return (
        <ConfigProvider locale={str2Locale.get(locale)}>
            <Comment
                // 提取具有data-*或aria-*通配格式的属性
                {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), props)}
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
                    <Tooltip title={dayjs().format(publishTime.value)} placement={'right'}>
                        <span>{fromNow ?
                            dayjs(publishTime.value, publishTime.format ? publishTime.format : 'YYYY-MM-DD HH:mm:ss').fromNow() :
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