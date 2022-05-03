import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'antd';
import 'antd/dist/antd.css';
import { omit } from 'ramda';
import { parseChildrenToArray, resolveChildProps } from '../utils';

const { Panel } = Collapse;

// 定义手风琴组件AntdAccordion，api参数参考https://ant.design/components/collapse/#components-collapse-demo-accordion
export default class AntdAccordion extends Component {

    constructor(props) {
        super(props)
        if (props.defaultActiveKey) {
            props.setProps({ activeKey: props.defaultActiveKey })
        }
    }

    render() {
        // 取得必要属性或参数
        let {
            id,
            children,
            className,
            style,
            accordion,
            activeKey,
            defaultActiveKey,
            bordered,
            collapsible,
            expandIconPosition,
            ghost,
            loading_state,
            setProps
        } = this.props;

        children = parseChildrenToArray(children)

        const accordionItems = children.map(
            (child) => {
                let childProps = resolveChildProps(child)

                const {
                    id,
                    className,
                    style,
                    key,
                    collapsible,
                    title,
                    showArrow,
                    loading_state,
                    ...otherProps
                } = childProps;

                return (
                    <Panel
                        id={id}
                        className={className}
                        style={style}
                        key={key}
                        collapsible={collapsible}
                        header={title}
                        showArrow={showArrow}
                        loading_state={loading_state}
                        {...omit(
                            ['setProps', 'persistence', 'persistence_type', 'persisted_props'],
                            otherProps
                        )}>
                        {child}
                    </Panel>
                );
            }
        )

        return (
            <Collapse
                id={id}
                className={className}
                style={style}
                accordion={accordion}
                activeKey={activeKey}
                defaultActiveKey={defaultActiveKey}
                bordered={bordered}
                collapsible={collapsible}
                expandIconPosition={expandIconPosition}
                ghost={ghost}
                onChange={(e) => setProps({ activeKey: e })}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }>
                {accordionItems}
            </Collapse>
        );
    }
}

// 定义参数或属性
AntdAccordion.propTypes = {
    // 组件id
    id: PropTypes.string,

    children: PropTypes.node,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 设置是否开启手风琴模式，默认为true
    accordion: PropTypes.bool,

    // 设置/记录当前处于展开状态的手风琴项的key值
    activeKey: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.number)
    ]),

    // 设置默认处于展开状态的手风琴项的key值
    defaultActiveKey: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.number)
    ]),

    // 设置是否渲染边框，默认为true
    bordered: PropTypes.bool,

    // 统一设置所有手风琴项的折叠触发行为，可选的有'header'、'disabled'
    collapsible: PropTypes.oneOf(['header', 'disabled']),

    // 自定义折叠图标位置，可选的有'left'、'right'
    expandIconPosition: PropTypes.oneOf(['left', 'right']),

    // 设置是否开启透明无边框模式，默认为false
    ghost: PropTypes.bool,

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
AntdAccordion.defaultProps = {
    accordion: true
}
