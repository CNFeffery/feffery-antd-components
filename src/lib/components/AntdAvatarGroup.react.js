import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'antd';
import useCss from '../hooks/useCss';
import { isString } from 'lodash';

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

// 定义参数或属性
AntdAvatarGroup.propTypes = {
    // 组件id
    id: PropTypes.string,

    // 内嵌的若干个AntdAvatar元素
    children: PropTypes.node,

    // css类名
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    // 自定义css字典
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 设置要显示的最大头像个数，默认无限制
    maxCount: PropTypes.number,

    // 设置超出maxCount部分的头像气泡卡片弹出方位
    // 可选的有'top'、'bottom'，默认为'top'
    maxPopoverPlacement: PropTypes.oneOf(['top', 'bottom']),

    // 设置超出maxCount部分的头像气泡卡片弹出触发方式
    // 可选的有'hover'、'focus'、'click'，默认为'hover'
    maxPopoverTrigger: PropTypes.oneOf(['hover', 'focus', 'click']),

    // 为省略头像部分设置css样式
    maxStyle: PropTypes.object,

    // 统一设置内部头像的大小，默认为'default'
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
AntdAvatarGroup.defaultProps = {
}

export default AntdAvatarGroup;