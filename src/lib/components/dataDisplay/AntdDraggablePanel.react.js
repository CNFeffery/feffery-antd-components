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
     * 设置当前面板默认尺寸
     */
    defaultSize: PropTypes.exact({
        /**
         * 设置像素宽度数值，或css宽度字符串
         */
        width: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]),

        /**
         * 设置像素高度数值，或css高度字符串
         */
        height: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ])
    }),

    /**
     * 设置当前面板默认位置
     */
    defaultPosition: PropTypes.exact({
        /**
         * 设置距离文档左端像素距离
         */
        x: PropTypes.number,

        /**
         * 设置距离文档顶端像素距离
         */
        y: PropTypes.number
    }),

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
     * 配置尺寸可调整性，可独立控制各个方向，也可直接控制所有方向是否可调整尺寸
     */
    resize: PropTypes.oneOfType(
        [
            PropTypes.bool,
            PropTypes.exact({
                bottom: PropTypes.bool,
                bottomLeft: PropTypes.bool,
                bottomRight: PropTypes.bool,
                left: PropTypes.bool,
                right: PropTypes.bool,
                top: PropTypes.bool,
                topLeft: PropTypes.bool,
                topRight: PropTypes.bool
            })
        ]
    ),

    /**
     * 面板是否可展开
     * 默认：true
     */
    expandable: PropTypes.bool,

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