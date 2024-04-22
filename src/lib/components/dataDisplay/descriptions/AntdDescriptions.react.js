import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdDescriptions = React.lazy(() => import(/* webpackChunkName: "data_display" */ '../../../fragments/dataDisplay/descriptions/AntdDescriptions.react'));

const AntdDescriptions = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdDescriptions {...props} />
        </Suspense>
    );
}

// 定义参数或属性
AntdDescriptions.propTypes = {
    // 组件id
    id: PropTypes.string,

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

    // 数据驱动形式的内部子项定义，设置后会忽略children参数
    items: PropTypes.arrayOf(
        PropTypes.exact({
            // 设置当前子项标题内容
            label: PropTypes.node,

            // 设置当前子项占位份数，默认为1
            span: PropTypes.number,

            // 设置当前子项内容
            children: PropTypes.node,

            // 设置当前子项标签css样式
            labelStyle: PropTypes.object,

            // 设置当前子项内容css样式
            contentStyle: PropTypes.object,

            // 设置当前子项css样式
            style: PropTypes.object,

            // 设置当前子项css类名
            className: PropTypes.string
        })
    ),

    // 设置标题内容
    title: PropTypes.node,

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
    // 默认为'horizontal'
    layout: PropTypes.oneOf(['horizontal', 'vertical']),

    // 设置字段标签的css样式
    labelStyle: PropTypes.object,

    // 设置字段内容的css样式
    contentStyle: PropTypes.object,

    /**
     * `data-*`格式属性通配
     */
    'data-*': PropTypes.string,

    /**
     * `aria-*`格式属性通配
     */
    'aria-*': PropTypes.string,

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
    column: 3,
    bordered: false,
    layout: 'horizontal',
    size: 'default'
}

export default AntdDescriptions;

export const propTypes = AntdDescriptions.propTypes;
export const defaultProps = AntdDescriptions.defaultProps;