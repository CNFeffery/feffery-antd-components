import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdRibbon = React.lazy(() => import(/* webpackChunkName: "data_display" */ '../../fragments/dataDisplay/AntdRibbon.react'));

const AntdRibbon = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdRibbon {...props} />
        </Suspense>
    );
}

// 定义参数或属性
AntdRibbon.propTypes = {
    // 组件id
    id: PropTypes.string,

    // 可选，传入要对其添加徽标的目标元素
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

    // 自定义缎带的颜色
    color: PropTypes.string,

    // 设置缎带的位置，可选的有'start'与'end'
    placement: PropTypes.oneOf(['start', 'end']),

    // 设置缎带中需要填入的文字
    text: PropTypes.node,

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
AntdRibbon.defaultProps = {
    placement: 'end'
}

export default AntdRibbon;

export const propTypes = AntdRibbon.propTypes;
export const defaultProps = AntdRibbon.defaultProps;