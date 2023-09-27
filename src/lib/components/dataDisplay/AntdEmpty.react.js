import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdEmpty = React.lazy(() => import(/* webpackChunkName: "data_display" */ '../../fragments/dataDisplay/AntdEmpty.react'));

const AntdEmpty = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdEmpty {...props} />
        </Suspense>
    );
}

// 定义参数或属性
AntdEmpty.propTypes = {
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

    // 设置语言环境，可选的有'zh-cn'、'en-us'
    locale: PropTypes.oneOf(['zh-cn', 'en-us']),

    // 设置描述信息内容
    description: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.bool
    ]),

    // 设置自定义图片的url地址，默认为内建图片
    image: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.oneOf([
            'default', 'simple'
        ])
    ]),

    // 设置自定义图片的css样式
    imageStyle: PropTypes.object,

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