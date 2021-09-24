import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

const parseChildrenToArray = children => {
    if (children && !Array.isArray(children)) {
        return [children];
    }
    return children;
};

// 定义行部件AntdRow，api参数参考https://ant.design/components/grid-cn/
export default class AntdRow extends Component {
    render() {
        // 取得必要属性或参数
        let {
            id,
            children,
            className,
            style,
            align,
            gutter,
            justify,
            wrap,
            setProps
        } = this.props;

        children = parseChildrenToArray(children)

        return (
            <Row id={id}
                className={className}
                style={style}
                align={align}
                gutter={gutter}
                justify={justify}
                wrap={wrap}>
                {children}
            </Row>
        );
    }
}

// 定义参数或属性
AntdRow.propTypes = {
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

    // 设置垂直对齐方式，可选的有'top'、'middle'和'bottom'，默认为'top'
    align: PropTypes.string,

    // 设置栅格间隔
    gutter: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.arrayOf(PropTypes.number)]),

    // 设置水平排列方式，可选的有'start'、'end'、'center'、'space-around'、'space-between'，默认为'start'
    justify: PropTypes.string,

    // 设置每行宽度超过24时是否自动换行，默认为true
    wrap: PropTypes.bool,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

// 设置默认参数
AntdRow.defaultProps = {
}
