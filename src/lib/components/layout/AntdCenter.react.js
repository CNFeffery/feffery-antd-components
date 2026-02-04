// react核心
import PropTypes from 'prop-types';
// antd核心
import { theme } from 'antd';
// 辅助库
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { parseChildrenToArray, useLoading } from '../utils';
// 自定义hooks
import useCss from '../../hooks/useCss';

const { useToken } = theme;

/**
 * 居中组件AntdCenter
 */
const AntdCenter = ({
    id,
    children,
    className,
    style,
    key,
    inline = false,
    inheritStyleToken = false,
    setProps,
    ...others
}) => {
    const { token } = useToken();

    children = parseChildrenToArray(children);

    return (
        <div
            // 提取具有data-*或aria-*通配格式的属性
            {...pickBy(
                (_, k) => k.startsWith('data-') || k.startsWith('aria-'),
                others
            )}
            id={id}
            className={
                isString(className)
                    ? className
                    : className
                      ? useCss(className)
                      : undefined
            }
            style={{
                display: inline ? 'inline-flex' : 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                ...(inheritStyleToken
                    ? {
                          backgroundColor: token.colorBgBase,
                          color: token.colorTextBase,
                          fontSize: token.fontSize,
                      }
                    : {}),
                ...style,
            }}
            key={key}
            data-dash-is-loading={useLoading()}
        >
            {children}
        </div>
    );
};

AntdCenter.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 组件型，内嵌元素
     */
    children: PropTypes.node,

    /**
     * 当前组件css样式
     */
    style: PropTypes.object,

    /**
     * 当前组件css类名，支持[动态css](/advanced-classname)
     */
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

    /**
     * 是否渲染为行内元素
     * 默认值：`false`
     */
    inline: PropTypes.bool,

    /**
     * 是否在背景色、字体颜色、字体大小等样式上联动`AntdConfigProvider`相关设置
     * 默认值：`false`
     */
    inheritStyleToken: PropTypes.bool,

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
    setProps: PropTypes.func,
};

export default AntdCenter;
