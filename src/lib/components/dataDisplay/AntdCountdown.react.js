import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdCountdown = React.lazy(() => import(/* webpackChunkName: "data_display" */ '../../fragments/dataDisplay/AntdCountdown.react'));

const AntdCountdown = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdCountdown {...props} />
        </Suspense>
    );
}

// 定义参数或属性
AntdCountdown.propTypes = {
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

    // 用于设置日期时间信息格式化显示的格式模板
    // 格式参考：https://momentjs.com/，如HH:mm:ss代表 时:分:秒
    format: PropTypes.string,

    // 设定截止日期时间字符串
    value: PropTypes.string,

    // 用于设置针对value进行格式化渲染的格式
    valueFormat: PropTypes.string,

    // 设置数值前缀内容，可选文字模式或图标模式
    prefix: PropTypes.node,

    // 设置数值后缀内容，可选文字模式或图标模式
    suffix: PropTypes.node,

    // 设置标题内容
    title: PropTypes.node,

    // 为title设置后缀的鼠标悬浮提示框内容，默认不设置则不渲染
    titleTooltip: PropTypes.string,

    // 设置数值的css样式
    valueStyle: PropTypes.object,

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
AntdCountdown.defaultProps = {
    valueFormat: 'YYYY-MM-DD hh:mm:ss'
}

export default AntdCountdown;

export const propTypes = AntdCountdown.propTypes;
export const defaultProps = AntdCountdown.defaultProps;