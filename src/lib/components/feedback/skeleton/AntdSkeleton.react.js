// react核心
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
// antd核心
import { Skeleton } from 'antd';
// 辅助库
import { isString } from 'lodash';
import { pickBy, equals } from 'ramda';
import { useLoading, loadingSelector } from '../../utils';
// 自定义hooks
import useCss from '../../../hooks/useCss';

/**
 * 骨架屏组件AntdSkeleton
 */
const AntdSkeleton = ({
    id,
    className,
    style,
    key,
    children,
    loading = false,
    active = false,
    delay = 0,
    avatar = false,
    paragraph = true,
    round = false,
    title = true,
    listenPropsMode = 'default',
    excludeProps = [],
    includeProps = [],
    debug = false,
    manual = false,
    setProps,
    ...others
}) => {

    const ctx = window.dash_component_api.useDashContext();
    // 获取内部加载中组件信息
    const loading_info = ctx.useSelector(loadingSelector(ctx.componentPath), equals);

    const [showLoading, setShowLoading] = useState(loading);
    const timer = useRef();
    const delayTimer = useRef();

    useEffect(() => {
        if (!manual && loading_info) {
            if (timer.current) {
                clearTimeout(timer.current);
            }
            if (delayTimer.current) {
                clearTimeout(delayTimer.current);
            }
            if (loading_info.length > 0 && !showLoading) {
                // 当listenPropsMode为'default'时
                if (listenPropsMode === 'default') {
                    if (debug) {
                        loading_info.forEach(item => console.log(item.id + '.' + item.property))
                    }
                    delayTimer.current = setTimeout(
                        () => setShowLoading(true),
                        delay
                    );
                } else if (listenPropsMode === 'exclude') {
                    // 当listenPropsMode为'exclude'模式时
                    // 当前触发加载状态的组件+属性组合均不在排除列表中时，激活动画
                    if (loading_info.every(item => excludeProps.indexOf(item.id + '.' + item.property) === -1)) {
                        if (debug) {
                            loading_info.forEach(item => console.log(item.id + '.' + item.property))
                        }
                        delayTimer.current = setTimeout(
                            () => setShowLoading(true),
                            delay
                        );
                    }
                } else if (listenPropsMode === 'include') {
                    // 当listenPropsMode为'include'模式时
                    // 当前触发加载状态的组件+属性组合至少有一个在包含列表中时，激活动画
                    if (loading_info.some(item => includeProps.indexOf(item.id + '.' + item.property) !== -1)) {
                        if (debug) {
                            loading_info.forEach(item => console.log(item.id + '.' + item.property))
                        }
                        delayTimer.current = setTimeout(
                            () => setShowLoading(true),
                            delay
                        );
                    }
                }

            } else if (loading_info.length === 0 && showLoading) {
                timer.current = setTimeout(() => setShowLoading(false));
            }
        }
    }, [loading_info]);

    return (
        <Skeleton
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
            loading={manual ? loading : showLoading}
            active={active}
            avatar={avatar}
            paragraph={paragraph}
            round={round}
            title={title}
            data-dash-is-loading={useLoading()}
        >{children}
        </Skeleton>
    );
}

AntdSkeleton.propTypes = {
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
     * 是否处于加载中状态
     */
    loading: PropTypes.bool,

    /**
     * 是否显示动画
     * 默认值：`false`
     */
    active: PropTypes.bool,

    /**
     * 加载动画渲染延时，单位：毫秒
     * 默认值：`0`
     */
    delay: PropTypes.number,

    /**
     * 配置头像占位图相关参数，设置为`false`时不显示
     * 默认值：`true`
     */
    avatar: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.exact({
            /**
             * 头像占位图是否显示动画
             * 默认值：`false`
             */
            active: PropTypes.bool,
            /**
             * 头像占位图形状，可选项有`'circle'`、`'square'`
             */
            shape: PropTypes.oneOf(['circle', 'square']),
            /**
             * 头像占位图尺寸，传入数值型表示像素尺寸，也可传入预设的尺寸规格，可选项有`'large'`、`'small'`、`'default'`
             * 默认值：`'default'`
             */
            size: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.oneOf(['large', 'small', 'default'])
            ]),
        })
    ]),

    /**
     * 配置段落占位图相关参数，设置为`false`时不显示
     * 默认值：`true`
     */
    paragraph: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.exact({
            /**
             * 段落占位图行数
             */
            rows: PropTypes.number,
            // 设置段落占位图的宽度（数值像素或字符串css宽度），若为数组时，则一一对应每行宽度，
            // 反之则是最后一行的宽度
            /**
             * 段落占位图宽度，当传入*int*或*string*型时，用于设置段落占位图最后一行的宽度，当传入*list*型时，用于逐行设置宽度
             */
            width: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string,
                PropTypes.arrayOf(
                    PropTypes.oneOfType([
                        PropTypes.number,
                        PropTypes.string
                    ])
                )
            ])
        })
    ]),

    /**
     * 是否显示标题占位图
     * 默认值：`true`
     */
    title: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.exact({
            /**
             * 标题占位图宽度
             */
            width: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string
            ])
        })
    ]),

    /**
     * 段落、标题占位图是否渲染圆角
     * 默认值：`false`
     */
    round: PropTypes.bool,

    /**
     * 是否开启debug模式，开启后，每次动画加载都会在开发者工具的控制台打印相关`prop`信息
     * 默认值：`false`
     */
    debug: PropTypes.bool,

    /**
     * 监听模式，可选项有`'default'`、`'exclude'`、`'include'`
     * 默认值：`'default'`
     */
    listenPropsMode: PropTypes.oneOf(['default', 'exclude', 'include']),

    /**
     * `listenPropsMode='exclude'`时，设置需要排除监听的回调目标列表，格式如`['组件id1.组件属性1', '组件id2.组件属性2', ...]`
     */
    excludeProps: PropTypes.arrayOf(PropTypes.string),

    /**
     * `listenPropsMode='include'`时，设置需要包含监听的回调目标列表，格式如`['组件id1.组件属性1', '组件id2.组件属性2', ...]`
     */
    includeProps: PropTypes.arrayOf(PropTypes.string),

    /**
     * 是否开启手动控制模式，开启后是否处于加载状态将由`loading`参数控制，与内部元素参与的回调状态无关
     * 默认值：`false`
     */
    manual: PropTypes.bool,

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

AntdSkeleton.dashChildrenUpdate = true;

export default AntdSkeleton;