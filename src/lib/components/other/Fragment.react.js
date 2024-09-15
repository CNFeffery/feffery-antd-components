// react核心
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// antd核心
import { theme } from 'antd';

const { useToken } = theme;

/**
 * 空节点组件Fragment
 */
const Fragment = (props) => {

    const { token: _token } = useToken();

    useEffect(() => {
        props.setProps({ token: _token });
    }, [_token])

    return (<>{props.children}</>);
};

// 定义参数或属性
Fragment.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 组件型，内嵌元素
     */
    children: PropTypes.node,

    /**
     * 监听当前组件所在作用范围对应的样式`token`参数，需配合上层`AntdConfigProvider`组件使用
     */
    token: PropTypes.object,

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