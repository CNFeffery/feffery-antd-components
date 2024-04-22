import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdTimeline = React.lazy(() => import(/* webpackChunkName: "data_display" */ '../../fragments/dataDisplay/AntdTimeline.react'));

const AntdTimeline = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdTimeline {...props} />
        </Suspense>
    );
}

// 定义参数或属性
AntdTimeline.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    // 自定义css字典
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 用于按顺序定义时间轴节点信息
    items: PropTypes.arrayOf(
        PropTypes.exact({
            // 设置该节点的主体文字内容
            content: PropTypes.node,

            // 设置圆圈颜色来表达对应节点的状态，供参考的状态色有：
            // blue：可表示正在进行或默认状态
            // green：可表示已完成
            // red：可表示警告或错误状态
            // grey：可表示未完成或失效状态
            color: PropTypes.string,

            // 用于自定义作为节点图标的元素
            icon: PropTypes.node,

            // 设置节点在单独另一侧显示的标签内容
            label: PropTypes.node,

            // 设置节点位置，可选的有'left'和'right'
            position: PropTypes.oneOf(['left', 'right'])
        })
    ).isRequired,

    // 设置时间轴在content的哪一侧，可选的有'left'、'alternate'及'right'
    // 默认为'right'
    mode: PropTypes.oneOf(['left', 'alternate', 'right']),

    // 设置在时间轴尾部添加“加载中”幽灵节点对应的文字说明内容
    // 默认不设置则不会添加
    pending: PropTypes.node,

    // 设自定义时间轴尾部“加载中”状态所展示的元素内容
    pendingDot: PropTypes.node,

    // 设置是否对时间轴逆序排列（默认false顺序下，方向从上往下）
    // 默认为false
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