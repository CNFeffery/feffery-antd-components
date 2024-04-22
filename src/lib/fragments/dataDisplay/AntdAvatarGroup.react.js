import React from 'react';
import { Avatar } from 'antd';
import useCss from '../../hooks/useCss';
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { propTypes, defaultProps } from '../../components/dataDisplay/AntdAvatarGroup.react';

// 定义头像组合组件AntdAvatarGroup，api参数参考https://ant.design/components/avatar-cn/
const AntdAvatarGroup = (props) => {
    // 取得必要属性或参数
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