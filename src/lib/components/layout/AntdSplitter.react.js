// react核心
import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
// antd核心
import { Splitter } from 'antd';
// 辅助库
import { isString } from 'lodash';
import { pickBy } from 'ramda';
// 自定义hooks
import useCss from '../../hooks/useCss';

/**
 * 分隔面板组件AntdSplitter
 */
const AntdSplitter = (props) => {
    let {
        id,
        className,
        style,
        key,
        layout,
        items,
        currentSizes,
        setProps,
        loading_state
    } = props;

    const [sizes, setSizes] = useState(items.map(item => item.size));

    const _items = useMemo(() => {
        return items.map((item, index) => sizes ? <Splitter.Panel {...item} size={sizes[index]} /> : <Splitter.Panel {...item} />)
    }, [sizes])

    useEffect(() => {
        let currentSizes = _items.map(
            (item, index) => { return { key: item.key, size: sizes[index] } }
        )
        setProps({ currentSizes: currentSizes })
    }, [_items])

    const onResize = (_sizes) => {
        setSizes(_sizes);
    }

    return (
        <Splitter
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
            layout={layout}
            onResize={onResize}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }>
            {_items}
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
     * 配置分隔面板子项，优先级高于`children`
     */
    items: PropTypes.arrayOf(
        PropTypes.shape({
            /**
             * 面板key
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
        })
    ).isRequired,

    /**
     * 监听当前面板大小变化信息
     */
    currentSizes: PropTypes.arrayOf(PropTypes.exact({
        /**
         * 面板key
         */
        key: PropTypes.string,
        /**
         * 面板大小
         */
        size: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ])
    })),


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
AntdSplitter.defaultProps = {
    layout: 'horizontal',
}

export default AntdSplitter;