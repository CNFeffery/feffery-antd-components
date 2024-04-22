import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdDescriptionItem = React.lazy(() => import(/* webpackChunkName: "data_display" */ '../../../fragments/dataDisplay/descriptions/AntdDescriptionItem.react'));

const AntdDescriptionItem = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdDescriptionItem {...props} />
        </Suspense>
    );
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
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    // 自定义css字典
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 设置内容描述标题内容
    label: PropTypes.node,

    // 设置当前列表占位份数，默认为1
    span: PropTypes.number,

    // 设置字段标签css样式
    labelStyle: PropTypes.object,

    // 设置字段内容css样式
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
AntdDescriptionItem.defaultProps = {
    span: 1
}

export default AntdDescriptionItem;

export const propTypes = AntdDescriptionItem.propTypes;
export const defaultProps = AntdDescriptionItem.defaultProps;