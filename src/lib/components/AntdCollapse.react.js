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
            persistence,
            persisted_props,
            persistence_type,
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
                onChange={(e) => {
                    if (e.length === 1) {
                        setProps({
                            is_open: true
                        })
                    } else {
                        setProps({
                            is_open: false
                        })
                    }
                }}
                persistence={persistence}
                persisted_props={persisted_props}
                persistence_type={persistence_type}
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
    setProps: PropTypes.func,

    /**
  * Used to allow user interactions in this component to be persisted when
  * the component - or the page - is refreshed. If `persisted` is truthy and
  * hasn't changed from its previous value, a `value` that the user has
  * changed while using the app will keep that change, as long as
  * the new `value` also matches what was given originally.
  * Used in conjunction with `persistence_type`.
  */
    persistence: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.number
    ]),

    /**
     * Properties whose user interactions will persist after refreshing the
     * component or the page. Since only `value` is allowed this prop can
     * normally be ignored.
     */
    persisted_props: PropTypes.arrayOf(PropTypes.oneOf(['is_open'])),

    /**
     * Where persisted user changes will be stored:
     * memory: only kept in memory, reset on page refresh.
     * local: window.localStorage, data is kept after the browser quit.
     * session: window.sessionStorage, data is cleared once the browser quit.
     */
    persistence_type: PropTypes.oneOf(['local', 'session', 'memory'])
};

// 设置默认参数
AntdCollapse.defaultProps = {
    title: '',
    is_open: true,
    persisted_props: ['is_open'],
    persistence_type: 'local'
}
