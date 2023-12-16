import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdDraggablePanel = React.lazy(() => import(/* webpackChunkName: "data_display" */ '../../fragments/dataDisplay/AntdDraggablePanel.react'));

const AntdDraggablePanel = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdDraggablePanel {...props} />
        </Suspense>
    );
}

// 定义参数或属性
AntdDraggablePanel.propTypes = {
    /**
     * 组件id
     */
    id: PropTypes.string,

    /**
     * 内部组件元素
     */
    children: PropTypes.node,

    /**
     * css样式
     */
    style: PropTypes.object,

    /**
     * css类名
     */
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    /**
     * 强制刷新用
     */
    key: PropTypes.string,

    /**
     * 设置面板模式，可选的有'fixed'（固定模式）、'float'（浮动窗口模式）
     * 默认：'fixed'
     */
    mode: PropTypes.oneOf(['fixed', 'float']),

    /**
     * 固定模式下，用于设置面板朝向，可选的有'right'、'left'、'top'、'bottom'
     * 默认：'right'
     */
    placement: PropTypes.oneOf(['right', 'left', 'top', 'bottom']),

    /**
     * 面板最小像素宽度
     */
    minWidth: PropTypes.number,

    /**
     * 面板最小像素高度
     */
    minHeight: PropTypes.number,

    /**
     * 面板最大像素宽度
     */
    maxWidth: PropTypes.number,

    /**
     * 面板最大像素高度
     */
    maxHeight: PropTypes.number,

    /**
     * 面板是否可展开
     * 默认：true
     */
    expandable: PropTypes.bool,

    /**
     * 设置或监听当前面板是否为展开状态
     */
    isExpand: PropTypes.bool,

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
AntdDraggablePanel.defaultProps = {
    mode: 'fixed',
    placement: 'right',
    expandable: true
}

export default AntdDraggablePanel;

export const propTypes = AntdDraggablePanel.propTypes;
export const defaultProps = AntdDraggablePanel.defaultProps;