import React from 'react';
import { Avatar } from 'antd';
import useCss from '../../hooks/useCss';
import { isString } from 'lodash';
import AntdIcon from '../../components/general/AntdIcon.react';
import { propTypes, defaultProps } from '../../components/dataDisplay/AntdAvatar.react';

// 定义头像组件AntdAvatar，api参数参考https://ant.design/components/avatar-cn/
const AntdAvatar = (props) => {
    // 取得必要属性或参数
    let {
        id,
        className,
        style,
        key,
        mode,
        text,
        src,
        srcSet,
        draggable,
        crossOrigin,
        icon,
        iconRenderer,
        alt,
        gap,
        size,
        shape,
        loading_state,
        setProps
    } = props;

    // image图片模式
    if (mode === 'image') {
        return (
            <Avatar
                id={id}
                className={
                    isString(className) ?
                        className :
                        (className ? useCss(className) : undefined)
                }
                style={style}
                key={key}
                src={src}
                srcSet={srcSet}
                draggable={draggable}
                crossOrigin={crossOrigin}
                alt={alt}
                size={size}
                shape={shape}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
            />
        );
    } else if (mode === 'text') {

        // text文字模式
        return (
            <Avatar
                id={id}
                className={
                    isString(className) ?
                        className :
                        (className ? useCss(className) : undefined)
                }
                style={style}
                key={key}
                gap={gap}
                size={size}
                shape={shape}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
            >{text}</Avatar>
        );
    } else {
        // icon图标模式
        return (
            <Avatar
                id={id}
                className={
                    isString(className) ?
                        className :
                        (className ? useCss(className) : undefined)
                }
                style={style}
                key={key}
                icon={
                    icon ?
                        (
                            iconRenderer === 'fontawesome' ?
                                (
                                    React.createElement(
                                        'i',
                                        {
                                            className: icon
                                        }
                                    )
                                ) :
                                (
                                    <AntdIcon icon={icon} />
                                )
                        ) :
                        <AntdIcon icon={'antd-user'} />
                }
                size={size}
                shape={shape}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
            />
        );
    }
}

export default AntdAvatar;

AntdAvatar.defaultProps = defaultProps;
AntdAvatar.propTypes = propTypes;