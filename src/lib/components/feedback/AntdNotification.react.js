// react核心
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// antd核心
import { notification, Button, App } from 'antd';
// 辅助库
import { isString, omit } from 'lodash';
// 自定义hooks
import useCss from '../../hooks/useCss';

/**
 * 通知提醒框组件AntdNotification
 */
const AntdNotification = ({
    className,
    style,
    message,
    description,
    type = 'default',
    placement = 'topRight',
    top = 24,
    bottom = 24,
    duration = 4.5,
    closable = true,
    closeButton,
    underCompatibilityMode,
    setProps
}) => {

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
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

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
     * 通知提醒主要信息
     */
    message: PropTypes.string,

    /**
     * 通知提醒描述信息
     */
    description: PropTypes.string,

    /**
     * 通知提醒类型，可选项有`'default'`、`'success'`、`'error'`、`'info'`、`'warning'`
     * 默认值：`'default'`
     */
    type: PropTypes.oneOf(['default', 'success', 'error', 'info', 'warning']),

    /**
     * 通知提醒框在屏幕中的弹出位置，可选项有`'top'`、`'bottom'`、`'topLeft'`、`'topRight'`、`'bottomLeft'`、`'bottomRight'`
     * 默认值：`'topRight'`
     */
    placement: PropTypes.oneOf(['top', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight']),

    /**
     * 当通知从顶部弹出时，设置距离顶部的像素距离
     * 默认值：`24`
     */
    top: PropTypes.number,

    /**
     * 当通知从底部弹出时，设置距离底部的像素距离
     * 默认值：`24`
     */
    bottom: PropTypes.number,

    /**
     * 通知从显示到自动消失的时长，单位：秒，当传入`None`时会一直显示
     * 默认值：`4.5`
     */
    duration: PropTypes.number,

    /**
     * 是否显示关闭按钮
     * 默认值：`true`
     */
    closable: PropTypes.bool,

    /**
     * 配置右下方关闭按钮相关参数，默认不显示关闭按钮
     */
    closeButton: PropTypes.exact({
        /**
         * 按钮内容
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
         * 按钮类型，可选项有`'default'`、`'primary'`、`'ghost'`、`'dashed'`、`'link'`、`'text'`
         * 默认值：`'default'`
         */
        type: PropTypes.oneOf(['default', 'primary', 'ghost', 'dashed', 'link', 'text']),
        /**
         * 按钮是否呈现危险状态
         * 默认值：`false`
         */
        danger: PropTypes.bool
    }),

    /**
     * 当前通知提醒框组件是否位于设置了`compatibilityMode=true`的`AntdConfigProvider`内部
     */
    underCompatibilityMode: PropTypes.bool,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};

export default AntdNotification;