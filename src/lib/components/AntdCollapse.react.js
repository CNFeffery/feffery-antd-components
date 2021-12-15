import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'antd';
import 'antd/dist/antd.css';

const { Panel } = Collapse;

const parseChildrenToArray = children => {
    if (children && !Array.isArray(children)) {
        return [children];
    }
    return children;
};

// 定义折叠面板组件AntdCollapse，api参数参考https://ant.design/components/steps-cn/
export default class AntdCollapse extends Component {
    render() {
        // 取得必要属性或参数
        let {
            id,
            children,
            className,
            style,
            title,
            is_open,
            bordered,
            showArrow,
            collapsible,
            ghost,
            setProps,
            loading_state
        } = this.props;

        children = parseChildrenToArray(children)

        return (
            <Collapse
                id={id}
                className={className}
                defaultActiveKey={is_open ? ['1'] : []}
                style={style}
                bordered={bordered}
                ghost={ghost}
                collapsible={collapsible}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }>
                <Panel
                    key='1'
                    header={title}
                    showArrow={showArrow}
                >
                    {children}
                </Panel>
            </Collapse>
        );
    }
}

// 定义参数或属性
AntdCollapse.propTypes = {
    // 组件id
    id: PropTypes.string,

    children: PropTypes.node,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 设置折叠控件所显示的标题文字
    title: PropTypes.string,

    // 设置是否打开，默认为true
    is_open: PropTypes.bool,

    // 设置是否渲染边框
    bordered: PropTypes.bool,

    // 设置是否显示箭头
    showArrow: PropTypes.bool,

    // 设置是否开启透明面板模式
    ghost: PropTypes.bool,

    // 设置可折叠点击触发区域，'header'表示仅限标题文字区域，'disabled'表示禁用折叠
    collapsible: PropTypes.oneOf(['header', 'disabled']),

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
AntdCollapse.defaultProps = {
    title: '',
    is_open: true
}
