import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdBadge = React.lazy(() => import(/* webpackChunkName: "data_display" */ '../../fragments/dataDisplay/AntdBadge.react'));

const AntdBadge = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdBadge {...props} />
        </Suspense>
    );
}

// 定义参数或属性
AntdBadge.propTypes = {
    // 组件id
    id: PropTypes.string,

    // 可选，传入要对其添加徽标的目标元素
    children: PropTypes.node,

    // css类名
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    // 自定义css字典
    style: PropTypes.object,

    /**
     * 细分控制子元素css样式
     */
    styles: PropTypes.exact({
        /**
         * 控制根元素css样式
         */
        root: PropTypes.object,

        /**
         * 控制徽标元素css样式
         */
        indicator: PropTypes.object
    }),

    /**
     * 细分控制子元素css类
     */
    classNames: PropTypes.exact({
        /**
         * 控制根元素css类
         */
        root: PropTypes.string,

        /**
         * 控制徽标元素css类
         */
        indicator: PropTypes.string
    }),

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 自定义徽标颜色
    color: PropTypes.string,

    // 自定义展示的数字，为0时若不设置showZero=true则会自动隐藏
    // 可配合overflowCount参数设置展示封顶的数值大小，譬如count=105时
    // 设置overflowCount=99，会显示为99+
    count: PropTypes.number,

    // 设置是否不展示数字，只显示一个小红点，默认为false
    dot: PropTypes.bool,

    // 设置当count=0时，是否仍然显示0数值，默认为false
    showZero: PropTypes.bool,

    // 设置数字值封顶大小，默认为99
    overflowCount: PropTypes.number,

    // 设置徽标的位置像素偏移，格式为[x方向偏移, y方向偏移]
    offset: PropTypes.arrayOf(PropTypes.number),

    // 设置徽标状态，可选的有'success'、'processing'、'default'、'error'及'warning'
    status: PropTypes.oneOf(['success', 'processing', 'default', 'error', 'warning']),

    // 当status已设置时有效，用于设置状态徽标的文本内容
    text: PropTypes.string,

    // 设置鼠标放在状态徽标上时显示的文字内容
    title: PropTypes.string,

    // 设置徽标规格大小，可选的有'default'和'small'
    size: PropTypes.oneOf(['default', 'small']),

    // 记录徽标被点击次数，默认为0
    nClicks: PropTypes.number,

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
AntdBadge.defaultProps = {
    nClicks: 0,
    dot: false,
    showZero: false,
    overflowCount: 99,
    size: 'default'
}

export default AntdBadge;

export const propTypes = AntdBadge.propTypes;
export const defaultProps = AntdBadge.defaultProps;