import React from 'react';
import PropTypes from 'prop-types';
import { FloatButton } from 'antd';
import useCss from '../../hooks/useCss';
import { isString } from 'lodash';

// 定义悬浮按钮组件AntdFloatButton
const AntdFloatButton = (props) => {
    // 取得必要属性或参数
    let {
        id,
        className,
        style,
        key,
        icon,
        description,
        tooltip,
        type,
        shape,
        href,
        target,
        nClicks,
        setProps,
        loading_state
    } = props;

    return (
        <FloatButton id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            icon={icon}
            description={description}
            tooltip={tooltip}
            type={type}
            shape={shape}
            href={href}
            target={target}
            onClick={() => setProps({ nClicks: nClicks + 1 })}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        />
    );
}

// 定义参数或属性
AntdFloatButton.propTypes = {
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

    /**
     * 组件型，用于设置自定义图标元素
     */
    icon: PropTypes.node,

    /**
     * 组件型，用于设置文字及其他内容，仅shape='square'时可用
     */
    description: PropTypes.node,

    /**
     * 组件型，用于设置附加气泡卡片的内部元素
     */
    tooltip: PropTypes.node,

    /**
     * 设置按钮类型，可选的有'default'、'primary'
     * 默认：'default'
     */
    type: PropTypes.oneOf(['default', 'primary']),

    /**
     * 设置按钮形状，可选的有'circle'、'square'
     * 默认：'circle'
     */
    shape: PropTypes.oneOf(['circle', 'square']),

    /**
     * 为按钮设置点击后跳转的链接地址
     */
    href: PropTypes.string,

    /**
     * 设置链接点击跳转行为
     * 默认：'_blank'
     */
    target: PropTypes.string,

    /**
     * 监听当前悬浮按钮累计点击次数
     */
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
AntdFloatButton.defaultProps = {
    type: 'default',
    shape: 'circle',
    target: '_blank',
    nClicks: 0
}

export default AntdFloatButton;