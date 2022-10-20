import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { parseChildrenToArray } from '../utils';

// 定义描述列表子项组件AntdDescriptionItem，api参数参考https://ant.design/components/descriptions-cn/
export default class AntdDescriptionItem extends Component {
    render() {
        // 取得必要属性或参数
        let {
            id,
            children,
            className,
            style,
            key,
            label,
            span,
            labelStyle,
            contentStyle,
            setProps,
            loading_state
        } = this.props;

        children = parseChildrenToArray(children)

        return (
            <div id={id}
                className={className}
                style={style}
                key={key}
                label={label}
                span={span}
                labelStyle={labelStyle}
                contentStyle={contentStyle}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }>
                {children}
            </div>
        );
    }
}

// 定义参数或属性
AntdDescriptionItem.propTypes = {
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

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 设置内容描述标题内容
    label: PropTypes.string,

    // 设置当前列表占位份数，默认为1
    span: PropTypes.number,

    // 设置字段标签css样式
    labelStyle: PropTypes.object,

    // 设置字段内容css样式
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
AntdDescriptionItem.defaultProps = {
}
