import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { message } from 'antd';
import AntdIcon from '../general/AntdIcon.react';
import { isString } from 'lodash';
import useCss from '../../hooks/useCss';

// 定义全局提示组件AntdMessage，api参数参考https://ant.design/components/message-cn/
const AntdMessage = (props) => {
    // 取得必要属性或参数
    let {
        id,
        className,
        style,
        key,
        content,
        type,
        duration,
        icon,
        iconRenderer,
        top,
        maxCount,
        loading_state,
        setProps
    } = props;

    // 令全局参数初始化时生效
    useEffect(() => {
        message.config({
            top: top,
            maxCount: maxCount
        });
    }, []);

    let config = {
        className: (
            isString(className) ?
                className :
                (className ? useCss(className) : undefined)
        ),
        style: style,
        content: content,
        duration: duration
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

    useEffect(() => {
        if (type === 'default') {
            message.open(config)
        } else if (type === 'success') {
            message.success(config)
        } else if (type === 'error') {
            message.error(config)
        } else if (type === 'info') {
            message.info(config)
        } else if (type === 'warning') {
            message.warning(config)
        }
    })

    return (
        <div
            id={id}
            key={key}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        ></div>
    );
}

// 定义参数或属性
AntdMessage.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 设置文字内容，必填
    content: PropTypes.string,

    // 设置通知类型，可选项有'default'、'success'、'error'、'info'、'warning'，默认为'default'
    type: PropTypes.oneOf(['default', 'success', 'error', 'info', 'warning']),

    // 设置通知从显示到自动消失的时长（秒），默认为3，当传入0时表示不会自动消失
    duration: PropTypes.number,

    // 设置消息距离顶端的像素距离，默认为8
    top: PropTypes.number,

    // 设置全局最多允许同时存在的提示数量，默认不限制
    maxCount: PropTypes.number,

    // 设置自定义icon，与AntdIcon中支持的图标相对应
    icon: PropTypes.string,

    // 针对icon参数值设置渲染方式，默认为'AntdIcon'即icon等价于AntdIcon的icon参数
    // 当设置为'fontawesome'时，icon参数对应fontawesome图标的css类名
    iconRenderer: PropTypes.oneOf(['AntdIcon', 'fontawesome']),

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
AntdMessage.defaultProps = {
    type: 'default',
    duration: 3,
    top: 8,
    iconRenderer: 'AntdIcon'
}

export default AntdMessage;