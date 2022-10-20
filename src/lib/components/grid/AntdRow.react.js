import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row } from 'antd';
import { useCss } from 'react-use';
import { isString } from 'lodash';

import { parseChildrenToArray } from '../utils';

// 定义行组件AntdRow，api参数参考https://ant.design/components/grid-cn/
const AntdRow = (props) => {
    // 取得必要属性或参数
    let {
        id,
        children,
        className,
        style,
        key,
        align,
        gutter,
        justify,
        wrap,
        setProps,
        loading_state
    } = props;

    children = parseChildrenToArray(children)

    return (
        <Row id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            align={align}
            gutter={gutter}
            justify={justify}
            wrap={wrap}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }>
            {children}
        </Row>
    );
}

// 定义参数或属性
AntdRow.propTypes = {
    // 组件id
    id: PropTypes.string,

    /**
     * The content of the tab - will only be displayed if this tab is selected
     */
    children: PropTypes.node,

    // css类名
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    // 自定义css字典
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

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
    align: PropTypes.oneOf(['top', 'middle', 'bottom']),

    // 设置栅格间隔
    gutter: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.number),
        // 响应式设置水平间隔
        PropTypes.exact({
            xs: PropTypes.number,
            sm: PropTypes.number,
            md: PropTypes.number,
            lg: PropTypes.number,
            xl: PropTypes.number,
            xxl: PropTypes.number
        })
    ]),

    // 设置水平排列方式，可选的有'start'、'end'、'center'、'space-around'、'space-between'，默认为'start'
    justify: PropTypes.oneOf([
        'start', 'end', 'center', 'space-around', 'space-between'
    ]),

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

export default AntdRow;