// react核心W
import React from 'react';
// antd核心
import { Avatar } from 'antd';
// 辅助库
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { useLoading } from '../../components/utils';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 参数类型
import { propTypes, defaultProps } from '../../components/dataDisplay/AntdAvatarGroup.react';

/**
 * 头像组合组件AntdAvatarGroup
 */
const AntdAvatarGroup = (props) => {
    let {
        id,
        children,
        className,
        style,
        key,
        max,
        size,
        setProps,
        ...others
    } = props;

    return (
        <Avatar.Group
            // 提取具有data-*或aria-*通配格式的属性
            {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), others)}
            id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            max={max}
            size={size}
            data-dash-is-loading={useLoading()}
        >{children}</Avatar.Group>
    );
}

export default AntdAvatarGroup;

AntdAvatarGroup.defaultProps = defaultProps;
AntdAvatarGroup.propTypes = propTypes;