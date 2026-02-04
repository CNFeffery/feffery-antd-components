import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdCardGrid = React.lazy(
    () =>
        import(
            /* webpackChunkName: "data_display" */ '../../../fragments/dataDisplay/card/AntdCardGrid.react'
        )
);

/**
 * 卡片网格组件AntdCardGrid
 */
const AntdCardGrid = ({
    id,
    children,
    className,
    style,
    key,
    hoverable = true,
    nClicks = 0,
    setProps,
    ...others
}) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdCardGrid
                {...{
                    id,
                    children,
                    className,
                    style,
                    key,
                    hoverable,
                    nClicks,
                    setProps,
                    ...others,
                }}
            />
        </Suspense>
    );
};

AntdCardGrid.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 组件型，内嵌元素
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
     * 鼠标悬停时是否显示特殊样式
     * 默认值：`true`
     */
    hoverable: PropTypes.bool,

    /**
     * 监听当前卡片网格累计点击次数
     * 默认值：`0`
     */
    nClicks: PropTypes.number,

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

export default AntdCardGrid;

export const propTypes = AntdCardGrid.propTypes;
export const defaultProps = AntdCardGrid.defaultProps;
