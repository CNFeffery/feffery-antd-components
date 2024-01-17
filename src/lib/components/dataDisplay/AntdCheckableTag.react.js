import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdCheckableTag = React.lazy(() => import(/* webpackChunkName: "data_display" */ '../../fragments/dataDisplay/AntdCheckableTag.react'));

const AntdCheckableTag = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdCheckableTag {...props} />
        </Suspense>
    );
}

// 定义参数或属性
AntdCheckableTag.propTypes = {
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

    // 设置标签内容
    content: PropTypes.node,

    // 勾选状态下显示的标签内容
    checkedContent: PropTypes.node,

    // 非勾选状态下显示的标签内容
    unCheckedContent: PropTypes.node,

    /**
     * 设置或监听当前标签的选择状态
     * 默认：false
     */
    checked: PropTypes.bool,

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
AntdCheckableTag.defaultProps = {
    checked: false
}

export default AntdCheckableTag;

export const propTypes = AntdCheckableTag.propTypes;
export const defaultProps = AntdCheckableTag.defaultProps;