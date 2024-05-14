import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdDescriptionItem = React.lazy(() => import(/* webpackChunkName: "data_display" */ '../../../fragments/dataDisplay/descriptions/AntdDescriptionItem.react'));

/**
 * 描述列表子项组件AntdDescriptionItem
 */
const AntdDescriptionItem = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdDescriptionItem {...props} />
        </Suspense>
    );
}

AntdDescriptionItem.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 组件型，内嵌元素
     */
    children: PropTypes.node,

    /**
     * 当前组件css样式
     */
    style: PropTypes.object,

    /**
     * 当前组件css类名，支持[动态css](/advanced-classname)
     */
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    /**
     * 组件型，标题内容
     */
    label: PropTypes.node,

    /**
     * 所占宽度份数
     * 默认值：`1`
     */
    span: PropTypes.number,

    /**
     * 标签css样式
     */
    labelStyle: PropTypes.object,

    /**
     * 内容css样式
     */
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