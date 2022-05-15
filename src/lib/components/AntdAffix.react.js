import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Affix } from 'antd';
import 'antd/dist/antd.css';
import { parseChildrenToArray } from './utils';

// 定义固钉组件AntdAffix，api参数参考https://ant.design/components/affix-cn/
export default class AntdAffix extends Component {
    render() {
        // 取得必要属性或参数
        let {
            id,
            className,
            style,
            key,
            children,
            offsetBottom,
            offsetTop,
            target,
            setProps,
            loading_state
        } = this.props;

        children = parseChildrenToArray(children)

        return (
            <Affix id={id}
                className={className}
                style={style}
                key={key}
                offsetBottom={offsetBottom}
                offsetTop={offsetTop}
                target={() => target ? document.getElementById(target) : window}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
            >
                {children}
            </Affix>
        );
    }
}

// 定义参数或属性
AntdAffix.propTypes = {
    // 组件id
    id: PropTypes.string,

    children: PropTypes.node,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 设置固钉在用户滚动页面后距离窗口底部的阈值
    // 到达这个阈值后会触发固钉的锚定页面功能
    offsetBottom: PropTypes.number,

    // 设置固钉在用户滚动页面后距离窗口顶部的阈值
    // 到达这个阈值后会触发固钉的锚定页面功能
    offsetTop: PropTypes.number,

    // 设置固钉监听滚动事件对应的容器元素id信息
    target: PropTypes.string,

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
AntdAffix.defaultProps = {
}
