// react核心
import React from 'react';
import PropTypes from 'prop-types';
// antd核心
import { Skeleton } from 'antd';
// 辅助库
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { useLoading } from '../../utils';
// 自定义hooks
import useCss from '../../../hooks/useCss';

/**
 * 骨骼屏图片占位图组件AntdSkeletonImage
 */
const AntdSkeletonImage = ({
    id,
    style,
    className,
    key,
    setProps,
    ...others
}) => {
    return (
        <Skeleton.Image
            // 提取具有data-*或aria-*通配格式的属性
            {...pickBy(
                (_, k) => k.startsWith('data-') || k.startsWith('aria-'),
                others
            )}
            id={id}
            style={style}
            className={
                isString(className)
                    ? className
                    : className
                      ? useCss(className)
                      : undefined
            }
            key={key}
            data-dash-is-loading={useLoading()}
        />
    );
};

AntdSkeletonImage.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 当前组件css样式
     */
    style: PropTypes.object,

    /**
     * 当前组件css类名，支持[动态css](/advanced-classname)
     */
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

    /**
     * `data-*`格式属性通配
     */
    'data-*': PropTypes.string,

    /**
     * `aria-*`格式属性通配
     */
    'aria-*': PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};

export default AntdSkeletonImage;
