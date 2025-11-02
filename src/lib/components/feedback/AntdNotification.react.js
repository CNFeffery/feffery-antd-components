// react核心
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// antd核心
import { notification, Button } from 'antd';
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
    showProgress = false,
    pauseOnHover = true,
    closable = true,
    closeButton,
    stack = false,
    setProps
}) => {

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
        showProgress: showProgress,
        pauseOnHover: pauseOnHover,
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
        ),
        stack: stack
    }

    const [notificationApi, contextHolder] = notification.useNotification(config);

    useEffect(() => {
        if (type === 'default') {
            notificationApi.open(config)
        } else if (type === 'success') {
            notificationApi.success(config)
        } else if (type === 'error') {
            notificationApi.error(config)
        } else if (type === 'info') {
            notificationApi.info(config)
        } else if (type === 'warning') {
            notificationApi.warning(config)
        }
    })

    return <>{contextHolder}</>;
}

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
    message: PropTypes.node,

    /**
     * 通知提醒描述信息
     */
    description: PropTypes.node,

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
     * 是否显示自动关闭进度条
     * 默认值：`false`
     */
    showProgress: PropTypes.bool,

    /**
     * `showProgress=True`时，是否在鼠标移入时暂停进度条倒计时
     * 默认值：`true`
     */
    pauseOnHover: PropTypes.bool,

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
     * 是否开启多通知自动折叠堆叠功能
     * 默认值：`false`
     */
    stack: PropTypes.bool,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};

export default AntdNotification;
