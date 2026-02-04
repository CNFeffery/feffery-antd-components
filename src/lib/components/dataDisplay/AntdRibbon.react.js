import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdRibbon = React.lazy(
    () =>
        import(
            /* webpackChunkName: "data_display" */ '../../fragments/dataDisplay/AntdRibbon.react'
        )
);

/**
 * 缎带组件AntdRibbon
 */
const AntdRibbon = ({
    id,
    children,
    className,
    style,
    key,
    color,
    placement = 'end',
    text,
    setProps,
    ...others
}) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdRibbon
                {...{
                    id,
                    children,
                    className,
                    style,
                    key,
                    color,
                    placement,
                    text,
                    setProps,
                    ...others,
                }}
            />
        </Suspense>
    );
};

AntdRibbon.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 组件型，添加徽标的目标元素
     */
    children: PropTypes.node,

    /**
     * 当前组件css样式
     */
    style: PropTypes.object,

    /**
     * 当前组件css类名，支持[动态css](/advanced-classname)
     */
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

    /**
     * 缎带颜色
     */
    color: PropTypes.string,

    /**
     * 缎带显示位置，可选项有`'start'`、`'end'`
     * 默认值：`'end'`
     */
    placement: PropTypes.oneOf(['start', 'end']),

    /**
     * 组件型，缎带内容
     */
    text: PropTypes.node,

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

export default AntdRibbon;

export const propTypes = AntdRibbon.propTypes;
export const defaultProps = AntdRibbon.defaultProps;
