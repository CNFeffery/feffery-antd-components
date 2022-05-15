import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Descriptions } from 'antd';
import { isNil, omit } from 'ramda';
import 'antd/dist/antd.css';
import { parseChildrenToArray, resolveChildProps } from '../utils';

// 定义描述列表组件AntdDescriptions，api参数参考https://ant.design/components/descriptions-cn/
export default class AntdDescriptions extends Component {

    render() {
        // 取得必要属性或参数
        let {
            id,
            children,
            className,
            style,
            key,
            title,
            column,
            bordered,
            size,
            layout,
            labelStyle,
            contentStyle,
            setProps,
            loading_state
        } = this.props;

        children = parseChildrenToArray(children)

        let size2size = new Map([
            ['small', 'small'],
            ['default', 'middle'],
            ['large', 'default']
        ])

        const descriptionItems = children.map(
            (child) => {
                let childProps = resolveChildProps(child)

                const {
                    id,
                    className,
                    style,
                    label,
                    span,
                    labelStyle,
                    contentStyle,
                    loading_state,
                    ...otherProps
                } = childProps;

                return (
                    <Descriptions.Item
                        id={id}
                        className={className}
                        style={style}
                        label={label}
                        span={span}
                        labelStyle={labelStyle}
                        contentStyle={contentStyle}
                        loading_state={loading_state}
                        {...omit(
                            ['setProps', 'persistence', 'persistence_type', 'persisted_props'],
                            otherProps
                        )}>
                        {child}
                    </Descriptions.Item>
                );
            }
        )

        return (
            <Descriptions id={id}
                className={className}
                style={style}
                key={key}
                title={title}
                column={column}
                bordered={bordered}
                size={size2size.get(size)}
                layout={layout}
                labelStyle={labelStyle}
                contentStyle={contentStyle}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }>
                {descriptionItems}
            </Descriptions>
        );
    }
}

// 定义参数或属性
AntdDescriptions.propTypes = {
    // 组件id
    id: PropTypes.string,

    children: PropTypes.node,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 设置标题内容
    title: PropTypes.string,

    // 设置同一行允许放置的字段项数量，默认为3
    column: PropTypes.oneOfType([
        PropTypes.number,
        // 响应式
        PropTypes.exact({
            xxl: PropTypes.number,
            xl: PropTypes.number,
            lg: PropTypes.number,
            md: PropTypes.number,
            sm: PropTypes.number,
            xs: PropTypes.number
        })
    ]),

    // 设置是否显示边框，默认为false
    bordered: PropTypes.bool,

    // 设置整体尺寸规格，可选的有'small'、'default'与'large'
    size: PropTypes.oneOf(['small', 'default', 'large']),

    // 设置字段标签与字段内容的布局方式，可选的有'horizontal'和'vertical'
    layout: PropTypes.oneOf(['horizontal', 'vertical']),

    // 设置字段标签的css样式
    labelStyle: PropTypes.object,

    // 设置字段内容的css样式
    contentStyle: PropTypes.object,

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
AntdDescriptions.defaultProps = {
    size: 'default'
}