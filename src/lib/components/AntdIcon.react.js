import { str2Icon } from './icons.react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';

// 定义图标组件AntdIcon
export default class AntdIcon extends Component {
    render() {
        // 取得必要属性或参数
        let {
            id,
            className,
            icon,
            style,
            setProps,
            loading_state
        } = this.props;

        return (
            <span id={id}
                className={className}
                style={
                    icon.startsWith('fc') || icon.startsWith('md') ?
                        { ...{ transform: 'translateY(15%)', verticalAlign: 'middle', fontSize: '16px' }, ...style } :
                        { ...{ verticalAlign: 'middle', fontSize: '16px' }, ...style }
                }
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }>
                {str2Icon.get(icon)}
            </span>
        );
    }
}

// 定义参数或属性
AntdIcon.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 用于指定icon类型,
    icon: PropTypes.string,

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
AntdIcon.defaultProps = {
}
