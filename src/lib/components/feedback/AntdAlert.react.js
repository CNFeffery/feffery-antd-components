// react核心
import PropTypes from 'prop-types';
// antd核心
import { Alert } from 'antd';
// 辅助库
import TextLoop from 'react-text-loop'
import Marquee from 'react-fast-marquee';
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { useLoading } from '../utils';
// 自定义hooks
import useCss from '../../hooks/useCss';

/**
 * 警告提示组件AntdAlert
 */
const AntdAlert = ({
    id,
    className,
    style,
    key,
    type = 'info',
    showIcon = false,
    icon,
    closable = false,
    message,
    messageRenderMode = 'default',
    description,
    action,
    banner = false,
    setProps,
    ...others
}) => {

    if (messageRenderMode === 'loop-text' && Array.isArray(message)) {
        return (
            <Alert
                // 提取具有data-*或aria-*通配格式的属性
                {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), others)}
                id={id}
                className={
                    isString(className) ?
                        className :
                        (className ? useCss(className) : undefined)
                }
                style={style}
                key={key}
                title={
                    <TextLoop mask>
                        {message.map(item => <div>{item}</div>)}
                    </TextLoop>
                }
                type={type}
                description={description}
                showIcon={showIcon}
                icon={icon}
                closable={closable}
                action={action}
                banner={banner}
                data-dash-is-loading={useLoading()} />
        );
    }

    return (
        <Alert
            // 提取具有data-*或aria-*通配格式的属性
            {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), others)}
            id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            title={
                messageRenderMode === 'marquee' ?
                    <Marquee pauseOnHover gradient={false}>
                        {message}
                    </Marquee> :
                    message
            }
            type={type}
            description={description}
            showIcon={showIcon}
            icon={icon}
            closable={closable}
            action={action}
            banner={banner}
            data-dash-is-loading={useLoading()} />
    );
}

AntdAlert.propTypes = {
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
     * 主要提示信息内容
     */
    message: PropTypes.node,

    /**
     * 额外提示信息内容
     */
    description: PropTypes.node,

    /**
     * 提示信息类型，可选项有`'success'`、`'info'`、`'warning'`、`'error'`
     * 默认值：`'info'`
     */
    type: PropTypes.oneOf(['success', 'info', 'warning', 'error']),

    /**
     * 是否显示额外图标
     * 默认值：`false`
     */
    showIcon: PropTypes.bool,

    /**
     * 组件型，当`showIcon=true`时，用于自定义图标元素
     */
    icon: PropTypes.node,

    /**
     * 是否可关闭
     * 默认值：`false`
     */
    closable: PropTypes.bool,

    /**
     * 渲染模式，可选项有`'default'`、`'loop-text'`、`'marquee'`
     * 默认值：`'default'`
     */
    messageRenderMode: PropTypes.oneOf(['default', 'loop-text', 'marquee']),

    /**
     * 组件型，定义右上角额外操作区元素
     */
    action: PropTypes.node,

    /**
     * 是否用作顶部公告
     * 默认值：`false`
     */
    banner: PropTypes.bool,

    /**
     * `data-*`格式属性通配
     */
    'data-*': PropTypes.string,

    /**
     * `aria-*`格式属性通配
     */
    'aria-*': PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export default AntdAlert;