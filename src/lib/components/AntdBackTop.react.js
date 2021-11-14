import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BackTop } from 'antd';
import 'antd/dist/antd.css';

// 定义回到顶部组件AntdBackTop，api参数参考https://ant.design/components/back-top-cn/
export default class AntdBackTop extends Component {
    render() {
        // 取得必要属性或参数
        let {
            id,
            className,
            style,
            duration,
            visibilityHeight,
            containerId,
            setProps
        } = this.props;

        return (
            <BackTop id={id}
                className={className}
                style={style}
                target={containerId ? () => document.getElementById(containerId) : () => window}
                duration={duration * 1000}
                visibilityHeight={visibilityHeight} />
        );
    }
}

// 定义参数或属性
AntdBackTop.propTypes = {
    // 部件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 设置回到顶部所需时间，单位秒，默认0.45
    duration: PropTypes.number,

    // 设置出现回到顶部组件显示的滚动像素高度阈值，默认为400
    visibilityHeight: PropTypes.number,

    // 设置绑定滚动条事件对应的容器id
    containerId: PropTypes.string,

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
AntdBackTop.defaultProps = {
}
