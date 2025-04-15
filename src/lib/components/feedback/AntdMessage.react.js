// react核心
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// antd核心
import { message } from 'antd';
import AntdIcon from '../general/AntdIcon.react';
// 辅助库
import { isString } from 'lodash';
// 自定义hooks
import useCss from '../../hooks/useCss';

/**
 * 全局提示组件AntdMessage
 */
const AntdMessage = ({
    className,
    style,
    content,
    type = 'default',
    duration = 3,
    icon,
    iconRenderer = 'AntdIcon',
    top = 8,
    maxCount,
    setProps
}) => {

    let config = {
        className: (
            isString(className) ?
                className :
                (className ? useCss(className) : undefined)
        ),
        style: style,
        content: content || ' ', // 规避content为空时Objects are not valid as a React child报错问题
        duration: duration,
        top: top,
        maxCount: maxCount
    }

    if (icon) {
        config.icon = (
            iconRenderer === 'fontawesome' ?
                (
                    React.createElement(
                        'i',
                        {
                            className: icon,
                            style: { marginRight: 3 }
                        }
                    )
                ) :
                (
                    <AntdIcon icon={icon} style={{ marginRight: 3 }} />
                )
        )
    }

    const [messageApi, contextHolder] = message.useMessage(config);

    useEffect(() => {
        if (type === 'default') {
            messageApi.open(config)
        } else if (type === 'success') {
            messageApi.success(config)
        } else if (type === 'error') {
            messageApi.error(config)
        } else if (type === 'info') {
            messageApi.info(config)
        } else if (type === 'warning') {
            messageApi.warning(config)
        }
    })

    return <>{contextHolder}</>;
}

AntdMessage.propTypes = {
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
     * 当前组件css类名
     */
    className: PropTypes.string,

    /**
     * 提示信息内容
     */
    content: PropTypes.string,

    /**
     * 提示信息类型，可选项有`'default'`、`'success'`、`'error'`、`'info'`、`'warning'`
     * 默认值：'default'
     */
    type: PropTypes.oneOf(['default', 'success', 'error', 'info', 'warning']),

    /**
     * 提示信息自动消失对应的延时，单位：秒，设置为`0`时不会自动消失
     * 默认值：`3`
     */
    duration: PropTypes.number,

    /**
     * 提示信息距离顶端的像素距离
     * 默认值：`8`
     */
    top: PropTypes.number,

    /**
     * 最多允许同时出现的提示信息数量
     */
    maxCount: PropTypes.number,

    /**
     * 自定义前缀图标，同`AntdIcon`的`icon`参数
     */
    icon: PropTypes.string,

    /**
     * 自定义前缀图标渲染方式，可选项有`'AntdIcon'`、`'fontawesome'`
     */
    iconRenderer: PropTypes.oneOf(['AntdIcon', 'fontawesome']),

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export default AntdMessage;