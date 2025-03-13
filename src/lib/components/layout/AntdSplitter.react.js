// react核心
import React from 'react';
import PropTypes from 'prop-types';
// antd核心
import { Splitter } from 'antd';
// 辅助库
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { useLoading } from '../utils';
// 自定义hooks
import useCss from '../../hooks/useCss';

/**
 * 分隔面板组件AntdSplitter
 */
const AntdSplitter = ({
    id,
    className,
    style,
    key,
    layout = 'horizontal',
    items,
    lazy = false,
    setProps,
    ...others
}) => {

    return (
        <Splitter
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
            layout={layout}
            lazy={lazy}
            data-dash-is-loading={useLoading()}>
            {
                (items || []).map(
                    (item, index) => (
                        <Splitter.Panel key={index} {...item} />
                    )
                )
            }
        </Splitter>
    );
}

AntdSplitter.propTypes = {
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
     * 布局方向，可选项有`'horizontal'`、`'vertical'`
     * 默认值：`'horizontal'`
     */
    layout: PropTypes.oneOf(['horizontal', 'vertical']),

    /**
     * 配置分隔面板子项
     */
    items: PropTypes.arrayOf(
        PropTypes.shape({
            /**
             * 当前子项唯一识别`key`
             */
            key: PropTypes.string,
            /**
             * 组件型，内嵌元素
             */
            children: PropTypes.node,
            /**
             * 当前子项`css`样式
             */
            style: PropTypes.object,
            /**
             * 当前子项`css`类名
             */
            className: PropTypes.string,
            /**
             * 初始面板尺寸，支持数字`px`或者文字`'百分比%'`类型
             */
            defaultSize: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string
            ]),
            /**
             * 面板尺寸，支持数字`px`或者文字`'百分比%'`类型
             */
            size: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string
            ]),
            /**
             * 最小尺寸，支持数字`px`或者文字`'百分比%'`类型
             */
            min: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string
            ]),
            /**
             * 最大尺寸，支持数字`px`或者文字`'百分比%'`类型
             */
            max: PropTypes.oneOfType([
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
        })
    ).isRequired,

    /**
     * 是否开启延迟渲染模式，开启后面板将在拖拽调整完成后才进行更新渲染
     * 默认值：`false`
     */
    lazy: PropTypes.bool,

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

export default AntdSplitter;