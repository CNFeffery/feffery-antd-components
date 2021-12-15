import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

const { Sider } = Layout;

const parseChildrenToArray = children => {
    if (children && !Array.isArray(children)) {
        return [children];
    }
    return children;
};

// 定义侧边栏组件AntdSider，api参数参考https://ant.design/components/layout-cn/
export default class AntdSider extends Component {
    render() {
        // 取得必要属性或参数
        let {
            id,
            children,
            className,
            style,
            breakpoint,
            collapsed,
            collapsedWidth,
            collapsible,
            defaultCollapsed,
            reverseArrow,
            theme,
            width,
            trigger,
            setProps,
            loading_state
        } = this.props;

        const onCollapse = collapsed => {
            setProps({ collapsed });
        };

        children = parseChildrenToArray(children)

        return (
            <Sider id={id}
                className={className}
                style={style}
                breakpoint={breakpoint}
                collapsed={collapsed}
                collapsedWidth={collapsedWidth}
                collapsible={collapsible}
                defaultCollapsed={defaultCollapsed}
                reverseArrow={reverseArrow}
                theme={theme}
                width={width}
                trigger={trigger}
                onCollapse={onCollapse}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }>
                {children}
            </Sider>
        );
    }
}

// 定义参数或属性
AntdSider.propTypes = {
    // 组件id
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

    // 对应当前侧边栏是否收起
    collapsed: PropTypes.bool,

    // 设置收缩的像素宽度，默认为80即80px
    collapsedWidth: PropTypes.number,

    // 设置是否可收起，默认为false
    collapsible: PropTypes.bool,

    // 设置是否默认状态即收起，默认为false
    defaultCollapsed: PropTypes.bool,

    // 设置是否折叠提示箭头的方向，通常在Sider位于右侧时使用，默认为false
    reverseArrow: PropTypes.bool,

    // 设置主题颜色，默认为'dark'
    theme: PropTypes.oneOf(['light', 'dark']),

    // 设置侧边栏像素宽度，默认为200px
    width: PropTypes.number,

    // 自定义触发器，自定义时需要设置为null
    trigger: PropTypes.node,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

// 设置默认参数
AntdSider.defaultProps = {
    collapsed: false
}