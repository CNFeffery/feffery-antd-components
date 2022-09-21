import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import { isString } from 'lodash';
import { useCss } from 'react-use';
import 'antd/dist/antd.css';
import { parseChildrenToArray } from '../utils';

const { Header } = Layout;

// 定义页首组件AntdHeader，api参数参考https://ant.design/components/layout-cn/
export default class AntdHeader extends Component {
    render() {
        // 取得必要属性或参数
        let {
            id,
            children,
            className,
            style,
            key,
            setProps,
            loading_state
        } = this.props;

        children = parseChildrenToArray(children)

        return (
            <Header id={id}
                className={
                    isString(className) ?
                        className :
                        useCss(className)
                }
                style={style}
                key={key}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }>
                {children}
            </Header>
        );
    }
}

// 定义参数或属性
AntdHeader.propTypes = {
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
AntdHeader.defaultProps = {
}
