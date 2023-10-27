import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdCardMeta = React.lazy(() => import(/* webpackChunkName: "data_display" */ '../../../fragments/dataDisplay/card/AntdCardMeta.react'));

const AntdCardMeta = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdCardMeta {...props} />
        </Suspense>
    );
}

// 定义参数或属性
AntdCardMeta.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    // 自定义css字典
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 设置网格头像/图标
    avatar: PropTypes.node,

    // 设置网格描述内容
    description: PropTypes.node,

    // 设置网格标题内容
    title: PropTypes.node,

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
AntdCardMeta.defaultProps = {}

export default AntdCardMeta;

export const propTypes = AntdCardMeta.propTypes;
export const defaultProps = AntdCardMeta.defaultProps;