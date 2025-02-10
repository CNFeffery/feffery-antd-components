// react核心
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
// antd核心
import { Collapse } from 'antd';
// 辅助库
import { parseChildrenToArray, useLoading } from '../utils';
import { isString, isUndefined } from 'lodash';
import { pickBy } from 'ramda';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 上下文
import PropsContext from '../../contexts/PropsContext';

/**
 * 折叠面板组件AntdCollapse
 */
const AntdCollapse = ({
    id,
    children,
    className,
    style,
    key,
    styles,
    classNames,
    title,
    isOpen = true,
    bordered = true,
    size = 'middle',
    showArrow = true,
    collapsible,
    ghost = false,
    forceRender = false,
    setProps,
    persistence,
    persisted_props,
    persistence_type,
    ...others
}) => {

    children = parseChildrenToArray(children)

    const context = useContext(PropsContext)

    return (
        <Collapse
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
            items={
                [
                    {
                        key: '1',
                        label: title,
                        children: children,
                        showArrow: showArrow,
                        forceRender: forceRender,
                        styles: styles,
                        classNames: classNames
                    }
                ]
            }
            activeKey={isOpen ? ['1'] : []}
            bordered={bordered}
            size={
                context && !isUndefined(context.componentSize) ?
                    context.componentSize :
                    size
            }
            ghost={ghost}
            collapsible={collapsible}
            onChange={(e) => {
                if (e.length === 1) {
                    setProps({
                        isOpen: true
                    })
                } else {
                    setProps({
                        isOpen: false
                    })
                }
            }}
            persistence={persistence}
            persisted_props={persisted_props}
            persistence_type={persistence_type}
            data-dash-is-loading={useLoading()} />
    );
}

AntdCollapse.propTypes = {
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
     * 细分控制子元素css样式
     */
    styles: PropTypes.shape({
        /**
         * 头部元素css样式
         */
        header: PropTypes.object,
        /**
         * 内容元素css样式
         */
        body: PropTypes.object
    }),

    /**
     * 细分控制子元素css类名
     */
    classNames: PropTypes.shape({
        /**
         * 头部元素css类名
         */
        header: PropTypes.string,
        /**
         * 内容元素css类名
         */
        body: PropTypes.string
    }),

    /**
     * 组件型，标题内容
     */
    title: PropTypes.node,

    /**
     * 是否展开
     * 默认值：`true`
     */
    isOpen: PropTypes.bool,

    /**
     * 组件尺寸规格，可选项有`'small'`、`'middle'`、`'large'`
     * 默认值：`'middle'`
     */
    size: PropTypes.oneOf(['large', 'middle', 'small']),

    /**
     * 是否渲染边框
     * 默认值：`true`
     */
    bordered: PropTypes.bool,

    /**
     * 是否渲染箭头
     * 默认值：`true`
     */
    showArrow: PropTypes.bool,

    /**
     * 是否开启透明背景模式
     * 默认值：`false`
     */
    ghost: PropTypes.bool,

    /**
     * 折叠交互触发行为，可选项有`'header'`（仅标题区域）、`'disabled'`（禁用折叠）、`'icon'`（仅图标区域）
     */
    collapsible: PropTypes.oneOf(['header', 'disabled', 'icon']),

    /**
     * 初始化未展开时，是否强制渲染内部元素
     * 默认值：`false`
     */
    forceRender: PropTypes.bool,

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

    /**
     * 是否开启[属性持久化](/prop-persistence)
     */
    persistence: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.number
    ]),

    /**
     * 开启属性持久化功能的若干属性名，可选项有`'isOpen'`
     * 默认值：`['isOpen']`
     */
    persisted_props: PropTypes.arrayOf(PropTypes.oneOf(['isOpen'])),

    /**
     * 属性持久化存储类型，可选项有`'local'`（本地持久化），`'session'`（会话持久化），`'memory'`（内存持久化）
     * 默认值：`'local'`
     */
    persistence_type: PropTypes.oneOf(['local', 'session', 'memory'])
};

AntdCollapse.dashPersistence = {
    persisted_props: ['isOpen'],
    persistence_type: 'local'
}

export default AntdCollapse;