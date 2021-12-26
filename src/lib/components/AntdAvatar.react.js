import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'antd';
import { str2Icon } from './icons.react'
import 'antd/dist/antd.css';

// 定义头像组件AntdAvatar，api参数参考https://ant.design/components/avatar-cn/
export default class AntdAvatar extends Component {
    render() {
        // 取得必要属性或参数
        let {
            id,
            className,
            style,
            mode,
            text,
            src,
            srcSet,
            icon,
            alt,
            gap,
            size,
            shape,
            draggable,
            loading_state,
            setProps
        } = this.props;

        // image图片模式
        if (mode === 'image') {
            return (
                <Avatar
                    id={id}
                    className={className}
                    style={style}
                    src={src}
                    srcSet={srcSet}
                    alt={alt}
                    size={size}
                    shape={shape}
                    draggable={draggable}
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
                    className={className}
                    style={style}
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
                    className={className}
                    style={style}
                    icon={icon ? str2Icon.get(icon) : str2Icon.get('user')}
                    size={size}
                    shape={shape}
                    data-dash-is-loading={
                        (loading_state && loading_state.is_loading) || undefined
                    }
                />
            );
        }

    }
}

// 定义参数或属性
AntdAvatar.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 设置图像无法显示时的替代文本
    alt: PropTypes.string,

    // 对于字符型头像，设置字符距离左右两侧边界的像素距离，默认为4
    gap: PropTypes.number,

    // 设置头像模式，可选的有'text'、'icon'及'image'，默认为'icon'
    mode: PropTypes.oneOf(['text', 'icon', 'image']),

    // 设置头像的自定义icon，与AntdIcon通用，默认无icon
    icon: PropTypes.string,

    // 对应文字类型头像的文字内容
    text: PropTypes.string,

    // 设置图片类型的头像资源地址
    src: PropTypes.string,

    // 设置base64类型图片字符串
    srcSet: PropTypes.string,

    // 设置头像尺寸大小，默认为'default'
    size: PropTypes.oneOfType([
        // 头像像素边长
        PropTypes.number,

        // 固定的规格，可选的有'large'、'small'及'default'
        PropTypes.oneOf(['large', 'small', 'default']),

        // 响应式size
        PropTypes.exact({
            xs: PropTypes.number,
            sm: PropTypes.number,
            md: PropTypes.number,
            lg: PropTypes.number,
            xl: PropTypes.number,
            xxl: PropTypes.number
        })
    ]),

    // 设置头像的形状，可选的有'circle'、'square'，默认为'circle'
    shape: PropTypes.oneOf(['circle', 'square']),

    // 设置图片是否允许拖动
    draggable: PropTypes.bool,

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
AntdAvatar.defaultProps = {
    mode: 'icon'
}