import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdAccordion = React.lazy(() => import(/* webpackChunkName: "data_display" */ '../../fragments/dataDisplay/AntdAccordion.react'));

const AntdAccordion = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdAccordion {...props} />
        </Suspense>
    );
}

// 定义参数或属性
AntdAccordion.propTypes = {
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

    // 设置用于定义手风琴列表的数组数据
    items: PropTypes.arrayOf(
        PropTypes.exact({
            // 设置当前手风琴项的子元素内容
            children: PropTypes.node,
            // 设置当前手风琴项的css类
            className: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.object
            ]),
            // 设置当前手风琴项的css样式
            style: PropTypes.object,
            // 设置当前手风琴项的key值，用于唯一标识当前手风琴项，必填
            key: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]).isRequired,
            // 设置当前手风琴项的折叠触发行为，可选的有'header'、'disabled'、'icon'
            collapsible: PropTypes.oneOf(['header', 'disabled', 'icon']),
            // 设置当前手风琴项的标题内容
            title: PropTypes.node,
            // 设置手风琴项右上角的额外区域内容
            extra: PropTypes.node,
            // 设置是否展示当前手风琴项的箭头图标，默认为true
            showArrow: PropTypes.bool,
            // 设置当折叠面板默认未展开时强制渲染内部元素，默认为false
            forceRender: PropTypes.bool,
        })
    ),

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

    // 统一设置所有手风琴项的折叠触发行为，可选的有'header'、'disabled'、'icon'
    collapsible: PropTypes.oneOf(['header', 'disabled', 'icon']),

    // 自定义折叠图标位置，可选的有'left'、'right'
    expandIconPosition: PropTypes.oneOf(['left', 'right']),

    // 设置是否开启透明无边框模式，默认为false
    ghost: PropTypes.bool,

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
AntdAccordion.defaultProps = {
    accordion: true,
    bordered: true,
    expandIconPosition: 'left',
    ghost: false
}

export default AntdAccordion;

export const propTypes = AntdAccordion.propTypes;
export const defaultProps = AntdAccordion.defaultProps;