import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'antd';
import 'antd/dist/antd.css';
import { parseChildrenToArray } from '../utils';

// 定义列组件AntdCol，api参数参考https://ant.design/components/grid-cn/
export default class AntdCol extends Component {
    render() {
        // 取得必要属性或参数
        let {
            id,
            children,
            className,
            style,
            span,
            offset,
            order,
            pull,
            push,
            flex,
            xs,
            sm,
            md,
            lg,
            xl,
            xxl,
            setProps,
            loading_state
        } = this.props;

        children = parseChildrenToArray(children)

        return (
            <Col id={id}
                className={className}
                style={{ height: '100%', ...style }}
                span={span}
                offset={offset}
                order={order}
                pull={pull}
                push={push}
                flex={flex}
                xs={xs}
                sm={sm}
                md={md}
                lg={lg}
                xl={xl}
                xxl={xxl}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }>
                {children}
            </Col>
        );
    }
}

// 定义参数或属性
AntdCol.propTypes = {
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

    // 设置栅格占位格数，为0时相当于display: none
    span: PropTypes.number,

    // 设置栅格左侧间隔格数，间隔内不可以有栅格，默认为0
    offset: PropTypes.number,

    // 设置栅格的顺序，默认为0
    order: PropTypes.number,

    // 设置栅格向左移动格数，默认为0
    pull: PropTypes.number,

    // 设置栅格向右移动格数，默认为0
    push: PropTypes.number,

    // 额外的flex属性辅助
    flex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    // 响应式参数
    xs: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.exact({
            // 设置栅格占位格数，为0时相当于display: none
            span: PropTypes.number,

            // 设置栅格左侧间隔格数，间隔内不可以有栅格，默认为0
            offset: PropTypes.number,

            // 设置栅格的顺序，默认为0
            order: PropTypes.number,

            // 设置栅格向左移动格数，默认为0
            pull: PropTypes.number,

            // 设置栅格向右移动格数，默认为0
            push: PropTypes.number
        })
    ]),

    sm: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.exact({
            // 设置栅格占位格数，为0时相当于display: none
            span: PropTypes.number,

            // 设置栅格左侧间隔格数，间隔内不可以有栅格，默认为0
            offset: PropTypes.number,

            // 设置栅格的顺序，默认为0
            order: PropTypes.number,

            // 设置栅格向左移动格数，默认为0
            pull: PropTypes.number,

            // 设置栅格向右移动格数，默认为0
            push: PropTypes.number
        })
    ]),

    md: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.exact({
            // 设置栅格占位格数，为0时相当于display: none
            span: PropTypes.number,

            // 设置栅格左侧间隔格数，间隔内不可以有栅格，默认为0
            offset: PropTypes.number,

            // 设置栅格的顺序，默认为0
            order: PropTypes.number,

            // 设置栅格向左移动格数，默认为0
            pull: PropTypes.number,

            // 设置栅格向右移动格数，默认为0
            push: PropTypes.number
        })
    ]),

    lg: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.exact({
            // 设置栅格占位格数，为0时相当于display: none
            span: PropTypes.number,

            // 设置栅格左侧间隔格数，间隔内不可以有栅格，默认为0
            offset: PropTypes.number,

            // 设置栅格的顺序，默认为0
            order: PropTypes.number,

            // 设置栅格向左移动格数，默认为0
            pull: PropTypes.number,

            // 设置栅格向右移动格数，默认为0
            push: PropTypes.number
        })
    ]),

    xl: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.exact({
            // 设置栅格占位格数，为0时相当于display: none
            span: PropTypes.number,

            // 设置栅格左侧间隔格数，间隔内不可以有栅格，默认为0
            offset: PropTypes.number,

            // 设置栅格的顺序，默认为0
            order: PropTypes.number,

            // 设置栅格向左移动格数，默认为0
            pull: PropTypes.number,

            // 设置栅格向右移动格数，默认为0
            push: PropTypes.number
        })
    ]),

    xxl: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.exact({
            // 设置栅格占位格数，为0时相当于display: none
            span: PropTypes.number,

            // 设置栅格左侧间隔格数，间隔内不可以有栅格，默认为0
            offset: PropTypes.number,

            // 设置栅格的顺序，默认为0
            order: PropTypes.number,

            // 设置栅格向左移动格数，默认为0
            pull: PropTypes.number,

            // 设置栅格向右移动格数，默认为0
            push: PropTypes.number
        })
    ]),

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

// 设置默认参数
AntdCol.defaultProps = {
}
