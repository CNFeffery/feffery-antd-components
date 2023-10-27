import React from 'react';
import { Card } from 'antd';
import { isString } from 'lodash';
import useCss from '../../../hooks/useCss';
import { propTypes, defaultProps } from '../../../components/dataDisplay/card/AntdCardMeta.react';

// 定义卡片头像、标题和描述信息组件AntdCardMeta，api参数参考https://ant.design/components/card-cn/
const { Meta } = Card;
const AntdCardMeta = (props) => {
    // 取得必要属性或参数
    let {
        id,
        className,
        style,
        key,
        avatar,
        description,
        title,
        setProps,
        loading_state
    } = props;

    return (
        <Meta id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            avatar={avatar}
            description={description}
            title={title}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }>
        </Meta>
    );
}

export default AntdCardMeta;

AntdCardMeta.defaultProps = defaultProps;
AntdCardMeta.propTypes = propTypes;