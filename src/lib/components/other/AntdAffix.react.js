// react核心
import React from 'react';
import PropTypes from 'prop-types';
// antd核心
import { Affix } from 'antd';
// 辅助库
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { parseChildrenToArray } from '../utils';
// 自定义hooks
import useCss from '../../hooks/useCss';

/**
 * 固钉组件AntdAffix
 */
const AntdAffix = (props) => {
    let {
        id,
        className,
        style,
        key,
        children,
        offsetBottom,
        offsetTop,
        target,
        setProps,
        loading_state
    } = props;

    children = parseChildrenToArray(children)

    return (
        <Affix
            // 提取具有data-*或aria-*通配格式的属性
            {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), props)}
            id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            offsetBottom={offsetBottom}
            offsetTop={offsetTop}
            target={() => target ? document.getElementById(target) : window}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        >
            {children}
        </Affix>
    );
}

AntdAffix.propTypes = {
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
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    /**
     * 触发固钉效果的视窗底部距离像素阈值
     */
    offsetBottom: PropTypes.number,

    /**
     * 触发固钉效果的视窗顶部距离像素阈值
     * 默认值：`0`
     */
    offsetTop: PropTypes.number,

    /**
     * 滚动事件监听的特定目标容器id
     */
    target: PropTypes.string,

    /**
     * `data-*`格式属性通配
     */
    'data-*': PropTypes.string,

    /**
     * `aria-*`格式属性通配
     */
    'aria-*': PropTypes.string,

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
AntdAffix.defaultProps = {
    offsetTop: 0
}

export default AntdAffix;