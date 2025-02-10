import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdCardMeta = React.lazy(() => import(/* webpackChunkName: "data_display" */ '../../../fragments/dataDisplay/card/AntdCardMeta.react'));

/**
 * 结构化卡片组件AntdCardMeta
 */
const AntdCardMeta = ({
    id,
    className,
    style,
    key,
    avatar,
    description,
    title,
    setProps,
    ...others
}) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdCardMeta {
                ...{
                    id,
                    className,
                    style,
                    key,
                    avatar,
                    description,
                    title,
                    setProps,
                    ...others
                }
            } />
        </Suspense>
    );
}

AntdCardMeta.propTypes = {
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
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    /**
     * 组件型，头像元素
     */
    avatar: PropTypes.node,

    /**
     * 组件型，描述内容
     */
    description: PropTypes.node,

    /**
     * 组件型，标题内容
     */
    title: PropTypes.node,

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

export default AntdCardMeta;

export const propTypes = AntdCardMeta.propTypes;
export const defaultProps = AntdCardMeta.defaultProps;