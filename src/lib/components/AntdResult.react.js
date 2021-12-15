import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Result } from 'antd';
import 'antd/dist/antd.css';

// 定义结果组件AntdResult，api参数参考https://ant.design/components/result-cn/
export default class AntdResult extends Component {
    render() {
        // 取得必要属性或参数
        let {
            id,
            className,
            style,
            status,
            title,
            subTitle,
            loading_state,
            setProps
        } = this.props;

        return (
            <Result id={id}
                className={className}
                style={style}
                status={status}
                title={title}
                subTitle={subTitle}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }>
            </Result>
        );
    }
}

// 定义参数或属性
AntdResult.propTypes = {
    // 组件id
    id: PropTypes.string,

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

    // 用于设置结果的状态风格，可选的有'success'、'error'、
    // 'info'、'warning'、'404'、'403'、'500'，默认为'info'
    status: PropTypes.oneOf(['success', 'error', 'info', 'warning', '404', '403', '500']),

    // 用于设置标题文字内容
    title: PropTypes.string,

    // 用于设置副标题文字内容
    subTitle: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

// 设置默认参数
AntdResult.defaultProps = {}