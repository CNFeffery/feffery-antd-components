import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdAvatarGroup = React.lazy(() => import(/* webpackChunkName: "data_display" */ '../../fragments/dataDisplay/AntdAvatarGroup.react'));

/**
 * 头像组合组件AntdAvatarGroup
 */
const AntdAvatarGroup = ({
    id,
    children,
    className,
    style,
    key,
    max,
    size = 'default',
    setProps,
    ...others
}) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdAvatarGroup {
                ...{
                    id,
                    children,
                    className,
                    style,
                    key,
                    max,
                    size,
                    setProps,
                    ...others
                }
            } />
        </Suspense>
    );
}

AntdAvatarGroup.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 组件型，传入组内各`AntdAvatar`组件
     */
    children: PropTypes.node,

    /**
     * 当前组件css样式
     */
    style: PropTypes.object,

    /**
     * 当前组件css类名，支持[动态css](/advanced-classname)
     */
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    /**
     * 配置最多显示功能相关参数
     */
    max: PropTypes.shape({
        /**
         * 最多显示的头像个数，默认无限制
         */
        count: PropTypes.number,
        /**
         * 头像省略部分css样式
         */
        style: PropTypes.object,
        /**
         * 展开层相关配置参数
         */
        popover: PropTypes.shape({
            /**
             * 超出`maxCount`数量限制之外的头像气泡卡片弹出方位，可选项有`'top'`、`'bottom'`、`'right'`
             * 默认值：`'top'`
             */
            placement: PropTypes.oneOf(['top', 'bottom', 'right']),
            /**
             * 超出`maxCount`数量限制之外的头像气泡卡片弹出触发方式，可选项有`'hover'`、`'click'`
             * 默认值：`'hover'`
             */
            trigger: PropTypes.oneOf(['hover', 'click']),
        })
    }),

    /**
     * 统一设置内部头像尺寸规格，传入数值型表示像素尺寸，传入字符型表示内置规格，可选项有`'large'`、`'small'`、`'default'`，支持响应式断点
     * 默认值：`'default'`
     */
    size: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(['large', 'small', 'default']),
        PropTypes.exact({
            xs: PropTypes.number,
            sm: PropTypes.number,
            md: PropTypes.number,
            lg: PropTypes.number,
            xl: PropTypes.number,
            xxl: PropTypes.number
        })
    ]),

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
    setProps: PropTypes.func
};

export default AntdAvatarGroup;

export const propTypes = AntdAvatarGroup.propTypes;
export const defaultProps = AntdAvatarGroup.defaultProps;