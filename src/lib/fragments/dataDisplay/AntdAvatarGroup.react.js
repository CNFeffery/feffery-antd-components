// react核心W
import React from 'react';
// antd核心
import { Avatar } from 'antd';
// 辅助库
import { isString } from 'lodash';
import { pickBy } from 'ramda';
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
        maxCount,
        maxPopoverPlacement,
        maxPopoverTrigger,
        maxStyle,
        size,
        loading_state,
        setProps
    } = props;

    return (
        <Avatar.Group
            // 提取具有data-*或aria-*通配格式的属性
            {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), props)}
            id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            maxCount={maxCount}
            maxPopoverPlacement={maxPopoverPlacement}
            maxPopoverTrigger={maxPopoverTrigger}
            maxStyle={maxStyle}
            size={size}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        >{children}</Avatar.Group>
    );
}

export default AntdAvatarGroup;

AntdAvatarGroup.defaultProps = defaultProps;
AntdAvatarGroup.propTypes = propTypes;