import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { notification, Button, App } from 'antd';
import { isString, omit } from 'lodash';
import useCss from '../../hooks/useCss';

/**
 * 通知提醒框组件AntdNotification
 */
const AntdNotification = (props) => {
    // 取得必要属性或参数
    let {
        className,
        style,
        message,
        description,
        type,
        placement,
        top,
        bottom,
        duration,
        closable,
        closeButton,
        underCompatibilityMode,
        loading_state,
        setProps
    } = props;

    const [api, contextHolder] = notification.useNotification({ stack: false });
    const { notification: _notification } = App.useApp();

    let config = {
        className: (
            isString(className) ?
                className :
                (className ? useCss(className) : undefined)
        ),
        style: style,
        message: message,
        description: description,
        placement: placement,
        top: top,
        bottom: bottom,
        duration: duration,
        closeIcon: (
            closable ?
                undefined :
                <span style={{ visibility: "hidden" }} />
        ),
        btn: (
            closeButton ?
                (
                    <Button type="primary" size="small" onClick={() => api.destroy()} {...omit(closeButton, ['content'])}>
                        {closeButton.content}
                    </Button>
                ) :
                undefined
        )
    }

    useEffect(() => {
        if (underCompatibilityMode) {
            if (type === 'default') {
                _notification.open(config)
            } else if (type === 'success') {
                _notification.success(config)
            } else if (type === 'error') {
                _notification.error(config)
            } else if (type === 'info') {
                _notification.info(config)
            } else if (type === 'warning') {
                _notification.warning(config)
            }
        } else {
            if (type === 'default') {
                api.open(config)
            } else if (type === 'success') {
                api.success(config)
            } else if (type === 'error') {
                api.error(config)
            } else if (type === 'info') {
                api.info(config)
            } else if (type === 'warning') {
                api.warning(config)
            }
        }
    })

    return <>{contextHolder}</>;
}

// 定义参数或属性
AntdNotification.propTypes = {
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

    // 设置通知提醒标题，必填
    message: PropTypes.string,

    // 设置通知提醒内容
    description: PropTypes.string,

    // 设置通知类型，可选项有'default'、'success'、'error'、'info'、'warning'，默认为'default'
    type: PropTypes.oneOf(['default', 'success', 'error', 'info', 'warning']),

    // 设置通知在屏幕中的弹出位置，可选的有'topLeft'、'topRight'、'bottomLeft'和'bottomRight'，默认为'topRight'
    placement: PropTypes.oneOf(['topLeft', 'topRight', 'bottomLeft', 'bottomRight']),

    // 当通知从顶部弹出时，设置距离顶部的像素距离
    // 默认为24
    top: PropTypes.number,

    // 当通知从底部弹出时，设置距离底部的像素距离
    // 默认为24
    bottom: PropTypes.number,

    // 设置通知从显示到自动消失的时长（秒），默认为4.5，当传入null时表示不会自动消失
    duration: PropTypes.number,

    // 设置是否渲染关闭图标，默认为true
    closable: PropTypes.bool,

    /**
     * 配置右下方关闭按钮相关参数
     * 默认不渲染关闭按钮
     */
    closeButton: PropTypes.exact({
        /**
         * 按钮文案内容
         */
        content: PropTypes.string,
        /**
         * 按钮css样式
         */
        style: PropTypes.object,
        /**
         * 按钮css类名
         */
        className: PropTypes.string,
        /**
         * 按钮类型，可选的有'default'、'primary'、'ghost'、'dashed'、'link'、'text'
         * 默认：'primary'
         */
        type: PropTypes.oneOf(['default', 'primary', 'ghost', 'dashed', 'link', 'text']),
        /**
         * 当前按钮是否呈现危险状态
         * 默认：false
         */
        danger: PropTypes.bool
    }),

    /**
     * 设置当前消息提示组件是否处于设置了compatibilityMode=true的AntdConfigProvider内部
     */
    underCompatibilityMode: PropTypes.bool,

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
    setProps: PropTypes.func,
};

// 设置默认参数
AntdNotification.defaultProps = {
    type: 'default',
    placement: 'topRight',
    top: 24,
    bottom: 24,
    duration: 4.5,
    closable: true
}

export default AntdNotification;