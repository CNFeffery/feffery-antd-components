/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Skeleton } from 'antd';
import useCss from '../../../hooks/useCss';
import { isString } from 'lodash';
import { pickBy } from 'ramda';

// 定义骨骼屏头像占位图组件AntdSkeletonAvatar
const AntdSkeletonAvatar = (props) => {

    // 取得必要属性或参数
    const {
        id,
        style,
        className,
        key,
        active,
        shape,
        size,
        loading_state,
        setProps
    } = props;

    // 返回定制化的前端组件
    return (
        <Skeleton.Avatar
            // 提取具有data-*或aria-*通配格式的属性
            {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), props)}
            id={id}
            style={style}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            key={key}
            active={active}
            shape={shape}
            size={size}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        />
    );
}

// 定义参数或属性
AntdSkeletonAvatar.propTypes = {
    // 组件id
    id: PropTypes.string,

    style: PropTypes.object,

    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    key: PropTypes.string,

    // 设置是否展示动画效果，默认为false
    active: PropTypes.bool,

    // 设置头像占位图的形状，可选的有'circle'、'square'，默认为'circle'
    shape: PropTypes.oneOf(['circle', 'square']),

    // 设置头像占位图的大小，默认为'default'
    size: PropTypes.oneOfType([
        // 头像像素边长
        PropTypes.number,

        // 固定的规格，可选的有'large'、'small'及'default'
        PropTypes.oneOf(['large', 'small', 'default'])
    ]),

    /**
     * `data-*`格式属性通配
     */
    'data-*': PropTypes.string,

    /**
     * `aria-*`格式属性通配
     */
    'aria-*': PropTypes.string,

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
AntdSkeletonAvatar.defaultProps = {
    active: false,
    shape: 'circle',
    size: 'default'
}

export default AntdSkeletonAvatar;