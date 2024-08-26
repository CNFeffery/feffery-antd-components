import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdEmpty = React.lazy(() => import(/* webpackChunkName: "data_display" */ '../../fragments/dataDisplay/AntdEmpty.react'));

/**
 * 空状态组件AntdEmpty
 */
const AntdEmpty = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdEmpty {...props} />
        </Suspense>
    );
}

AntdEmpty.propTypes = {
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
     * 组件文案语种，可选项有`'zh-cn'`（简体中文）、`'en-us'`（英语）、`'de-de'`（德语）
     * 默认值：`'zh-cn'`
     */
    locale: PropTypes.oneOf(['zh-cn', 'en-us', 'de-de']),

    /**
     * 描述信息内容
     */
    description: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.bool
    ]),

    /**
     * 状态图片地址，也可以使用内置图片，可选项有`'default'`、`'simple'`
     * 默认值：`'default'`
     */
    image: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.oneOf([
            'default', 'simple'
        ])
    ]),

    /**
     * 状态图片css样式
     */
    imageStyle: PropTypes.object,

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
AntdEmpty.defaultProps = {
    locale: 'zh-cn',
    image: 'default'
}

export default AntdEmpty;

export const propTypes = AntdEmpty.propTypes;
export const defaultProps = AntdEmpty.defaultProps;