import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdTooltip = React.lazy(() => import(/* webpackChunkName: "data_display" */ '../../fragments/dataDisplay/AntdTooltip.react'));

const AntdTooltip = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdTooltip {...props} />
        </Suspense>
    );
}

// 定义参数或属性
AntdTooltip.propTypes = {
    // 组件id
    id: PropTypes.string,

    children: PropTypes.node,

    // css类名
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    // 自定义css字典
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 设置显示的文字内容
    title: PropTypes.node,

    // 设置气泡框的位置，可选的有'top'、'left'、'right'、'bottom'、'topLeft'
    // 、'topRight'、'bottomLeft'、'bottomRight'、'leftTop'、'leftBottom'
    // 、'rightTop'、'rightBottom'，默认为'top'
    placement: PropTypes.oneOf([
        'top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft',
        'bottomRight'
    ]),

    // 设置背景颜色
    color: PropTypes.string,

    // 设置鼠标移入后延时多少才显示 Tooltip，单位：秒，默认为0.1
    mouseEnterDelay: PropTypes.number,

    // 设置鼠标移出后延时多少才隐藏 Tooltip，单位：秒，默认为0.1
    mouseLeaveDelay: PropTypes.number,

    // 设置卡片css类
    overlayClassName: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    // 设置卡片样式
    overlayStyle: PropTypes.object,

    // 设置卡片内容区域的样式
    overlayInnerStyle: PropTypes.object,

    // 设置触发行为，可选的有'hover'、'focus'、'click'，或是以上多个组成的数组，默认为'hover'
    trigger: PropTypes.oneOfType(
        [
            PropTypes.oneOf(['hover', 'focus', 'click']),
            PropTypes.arrayOf(PropTypes.oneOf(['hover', 'focus', 'click']))
        ]
    ),

    // 设置悬浮层zIndex
    zIndex: PropTypes.number,

    // 设置修改箭头的显示状态以及修改箭头是否指向目标元素中心，默认为'show'
    arrow: PropTypes.oneOf(['show', 'hide', 'center']),

    // 用于设置是否始终保持更新内容，默认为false。默认情况下，Tooltip 在关闭时会缓存内容，设置该属性后会始终保持更新。
    fresh: PropTypes.bool,

    // 用于监听或控制当前tooltip的显隐，默认为false
    open: PropTypes.bool,

    // 用于设置是否保持tooltip显示/隐藏
    // 默认为false
    permanent: PropTypes.bool,

    // 设置悬浮层锚定策略，可选的有'parent'、'body'，默认为'body'
    popupContainer: PropTypes.oneOf(['parent', 'body']),

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
AntdTooltip.defaultProps = {
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    placement: 'top',
    trigger: 'hover',
    popupContainer: 'body',
    arrow: 'show',
    fresh: false,
    open: false,
    permanent: false
}

export default AntdTooltip;

export const propTypes = AntdTooltip.propTypes;
export const defaultProps = AntdTooltip.defaultProps;