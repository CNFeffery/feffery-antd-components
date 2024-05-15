import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdTimeline = React.lazy(() => import(/* webpackChunkName: "data_display" */ '../../fragments/dataDisplay/AntdTimeline.react'));

/**
 * 时间轴组件AntdTimeline
 */
const AntdTimeline = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdTimeline {...props} />
        </Suspense>
    );
}

AntdTimeline.propTypes = {
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
     * 必填，定义时间轴节点
     */
    items: PropTypes.arrayOf(
        PropTypes.exact({
            /**
             * 组件型，当前节点正文内容
             */
            content: PropTypes.node,
            /**
             * 当前节点颜色，可用于表达节点状态，常用方案有`'blue'`（进行中或默认状态）、`'green'`（已完成状态）、`'red'`（警告或错误状态）、`'grey'`（未完成或失效状态）
             */
            color: PropTypes.string,
            /**
             * 组件型，自定义作为图标的元素
             */
            icon: PropTypes.node,
            /**
             * 组件型，当前节点标签内容
             */
            label: PropTypes.node,
            // 设置节点位置，可选的有'left'和'right'
            /**
             * 当前节点位置，可选项有`'left'`、`'right'`
             */
            position: PropTypes.oneOf(['left', 'right'])
        })
    ).isRequired,

    /**
     * 时间轴与内容的相对位置，可选项有`'left'`、`'alternate'`、`'right'`
     */
    mode: PropTypes.oneOf(['left', 'alternate', 'right']),

    /**
     * 组件型，设置时间轴末尾额外幽灵节点标题内容，默认不添加
     */
    pending: PropTypes.node,

    /**
     * 组件型，自定义幽灵节点图标
     */
    pendingDot: PropTypes.node,

    /**
     * 是否逆序排列时间轴
     * 默认值：`false`
     */
    reverse: PropTypes.bool,

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
AntdTimeline.defaultProps = {
    mode: 'left',
    reverse: false
}

export default AntdTimeline;

export const propTypes = AntdTimeline.propTypes;
export const defaultProps = AntdTimeline.defaultProps;