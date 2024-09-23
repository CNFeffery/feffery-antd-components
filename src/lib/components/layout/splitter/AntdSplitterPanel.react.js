// react核心
import React from 'react';
import PropTypes from 'prop-types';
// antd核心
import { Splitter } from 'antd';
// 辅助库
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { parseChildrenToArray } from '../../utils';
// 自定义hooks
import useCss from '../../../hooks/useCss';

/**
 * 分隔面板子项组件AntdSplitterPanel
 */
const AntdSplitterPanel = (props) => {
    let {
        id,
        children,
        className,
        style,
        key,
        defaultSize,
        min,
        max,
        size,
        collapsible,
        resizable,
        setProps,
        loading_state
    } = props;

    children = parseChildrenToArray(children)

    return (
        <Splitter.Panel
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
            defaultSize={defaultSize}
            min={min}
            max={max}
            size={size}
            collapsible={collapsible}
            resizable={resizable}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }>
            {children}
        </Splitter.Panel>
    );
}

AntdSplitterPanel.propTypes = {
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
     * 初始面板大小，支持数字`px`或者文字`'百分比%'`类型
     */
    defaultSize: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),

    /**
     * 最小阈值，支持数字`px`或者文字`'百分比%'`类型
     */
    min: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),

    /**
     * 最大阈值，支持数字`px`或者文字`'百分比%'`类型
     */
    max: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),

    /**
     * 面板大小，支持数字`px`或者文字`'百分比%'`类型
     */
    size: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),

    /**
     * 是否可折叠
     * 默认值：`false`
     */
    collapsible: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            start: PropTypes.bool,
            end: PropTypes.bool
        })
    ]),

    /**
     * 是否开启拖拽伸缩
     * 默认值：`true`
     */
    resizable: PropTypes.bool,

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
AntdSplitterPanel.defaultProps = {
    collapsible: false,
    resizable: true,
}

export default AntdSplitterPanel;