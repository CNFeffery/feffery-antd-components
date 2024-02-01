import React from 'react';
import PropTypes from 'prop-types';

// 定义空节点组件Fragment
const Fragment = (props) => (<>{props.children}</>);

// 定义参数或属性
Fragment.propTypes = {
    /**
     * 组件id
     */
    id: PropTypes.string,

    /**
     * 用于传入内部组件
     */
    children: PropTypes.node,

    /**
     * 辅助刷新用唯一标识key值
     */
    key: PropTypes.string,

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
Fragment.defaultProps = {
}

export default Fragment;