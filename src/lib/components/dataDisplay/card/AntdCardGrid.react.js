import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdCardGrid = React.lazy(() => import(/* webpackChunkName: "data_display" */ '../../../fragments/dataDisplay/card/AntdCardGrid.react'));

const AntdCardGrid = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdCardGrid {...props} />
        </Suspense>
    );
}

// 定义参数或属性
AntdCardGrid.propTypes = {
    // 组件id
    id: PropTypes.string,

    /**
     * The content of the tab - will only be displayed if this tab is selected
     */
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

    // 设置网格是否可鼠标悬浮呈现浮起效果，默认为true
    hoverable: PropTypes.bool,

    /**
     * 监听当前卡片网格累计点击次数
     * 默认：0
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
AntdCardGrid.defaultProps = {
    hoverable: true,
    nClicks: 0
}

export default AntdCardGrid;

export const propTypes = AntdCardGrid.propTypes;
export const defaultProps = AntdCardGrid.defaultProps;