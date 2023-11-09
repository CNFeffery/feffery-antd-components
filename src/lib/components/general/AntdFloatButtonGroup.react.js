import React from 'react';
import PropTypes from 'prop-types';
import { FloatButton } from 'antd';
import useCss from '../../hooks/useCss';
import { isString } from 'lodash';

// 定义悬浮按钮组AntdFloatButtonGroup
const AntdFloatButtonGroup = (props) => {
    // 取得必要属性或参数
    let {
        id,
        children,
        className,
        style,
        key,
        icon,
        description,
        tooltip,
        type,
        shape,
        trigger,
        open,
        setProps,
        loading_state
    } = props;

    return (
        <FloatButton.Group id={id}
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
            trigger={trigger}
            open={open}
            onOpenChange={(e) => setProps({ open: e })}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        >{children}</FloatButton.Group>
    );
}

// 定义参数或属性
AntdFloatButtonGroup.propTypes = {
    // 组件id
    id: PropTypes.string,

    /**
     * 当前悬浮按钮组内各悬浮按钮组件
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
     * 设置内部各按钮形状，可选的有'circle'、'square'
     * 默认：'circle'
     */
    shape: PropTypes.oneOf(['circle', 'square']),

    /**
     * 当传入有效值时，用于设置菜单触发模式，可选的有'click'、'hover'
     */
    trigger: PropTypes.oneOf(['click', 'hover']),

    /**
     * 用于设置或监听当前悬浮按钮组展开状态
     */
    open: PropTypes.bool,

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
AntdFloatButtonGroup.defaultProps = {
    type: 'default',
    shape: 'circle'
}

export default AntdFloatButtonGroup;