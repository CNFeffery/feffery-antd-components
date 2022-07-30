import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import { parseChildrenToArray } from '../utils';

// 定义手风琴项组件AntdAccordionItem，api参数参考https://ant.design/components/collapse-cn/#Collapse.Panel
export default class AntdAccordionItem extends Component {
    render() {
        // 取得必要属性或参数
        let {
            id,
            children,
            className,
            style,
            key,
            collapsible,
            title,
            showArrow,
            forceRender,
            loading_state
        } = this.props;

        children = parseChildrenToArray(children)

        return (
            <div
                id={id}
                className={className}
                style={style}
                key={key}
                collapsible={collapsible}
                header={title}
                showArrow={showArrow}
                forceRender={forceRender}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }>
                {children}
            </div>
        );
    }
}

// 定义参数或属性
AntdAccordionItem.propTypes = {
    // 组件id
    id: PropTypes.string,

    children: PropTypes.node,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 设置当前手风琴项的key值，用于唯一标识当前手风琴项，必填
    key: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,

    // 设置当前手风琴项的折叠触发行为，可选的有'header'、'disabled'
    collapsible: PropTypes.oneOf(['header', 'disabled']),

    // 设置当前手风琴项标题文字内容，默认为''
    title: PropTypes.string,

    // 设置是否展示当前手风琴项的箭头图标，默认为true
    showArrow: PropTypes.bool,

    // 设置当折叠面板默认未展开时强制渲染内部元素，默认为false
    forceRender: PropTypes.bool,

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
AntdAccordionItem.defaultProps = {
    title: ''
}
