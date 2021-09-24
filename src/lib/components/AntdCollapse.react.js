import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'antd';
import { isNil } from 'ramda';
import { RightSquareOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const { Panel } = Collapse;

const resolveChildProps = child => {
    // This may need to change in the future if https://github.com/plotly/dash-renderer/issues/84 is addressed
    if (
        // disabled is a defaultProp (so it's always set)
        // meaning that if it's not set on child.props, the actual
        // props we want are lying a bit deeper - which means they
        // are coming from Dash
        isNil(child.props.disabled) &&
        child.props._dashprivate_layout &&
        child.props._dashprivate_layout.props
    ) {
        // props are coming from Dash
        return child.props._dashprivate_layout.props;
    } else {
        // else props are coming from React (e.g. Demo.js, or Tabs.test.js)
        return child.props;
    }
};

const parseChildrenToArray = children => {
    if (children && !Array.isArray(children)) {
        return [children];
    }
    return children;
};

// 定义折叠面板部件AntdCollapse，api参数参考https://ant.design/components/steps-cn/
export default class AntdCollapse extends Component {
    render() {
        // 取得必要属性或参数
        let {
            id,
            children,
            className,
            style,
            setProps,
            pureMode,
            loading_state,
            title,
            is_open,
            bordered,
            showArrow,
            collapsible,
            ghost
        } = this.props;

        children = parseChildrenToArray(children)

        // 若开启纯净模式
        if (pureMode) {
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

    // 设置折叠控件所显示的标题文字
    title: PropTypes.string,

    // 设置是否打开，默认为true
    is_open: PropTypes.bool,

    // 设置是否开启纯净模式，默认为false
    pureMode: PropTypes.bool,

    // 设置是否渲染边框
    bordered: PropTypes.bool,

    // 设置是否显示箭头
    showArrow: PropTypes.bool,

    // 设置是否开启透明面板模式
    ghost: PropTypes.bool,

    // 设置可折叠点击触发区域，'header'表示仅限标题文字区域，'disabled'表示禁用折叠
    collapsible: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

// 设置默认参数
AntdCollapse.defaultProps = {
    title: '',
    is_open: true,
    pureMode: false
}
