import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

const { Footer } = Layout;

const parseChildrenToArray = children => {
    if (children && !Array.isArray(children)) {
        return [children];
    }
    return children;
};

// 定义页尾部件AntdFooter，api参数参考https://ant.design/components/layout-cn/
export default class AntdFooter extends Component {
    render() {
        // 取得必要属性或参数
        let {
            id,
            children,
            className,
            style,
            setProps
        } = this.props;

        children = parseChildrenToArray(children)

        return (
            <Footer id={id}
                className={className}
                style={style}>
                {children}
            </Footer>
        );
    }
}

// 定义参数或属性
AntdFooter.propTypes = {
    // 部件id
    id: PropTypes.string,

    /**
     * The content of the tab - will only be displayed if this tab is selected
     */
    children: PropTypes.node,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

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
AntdFooter.defaultProps = {
}