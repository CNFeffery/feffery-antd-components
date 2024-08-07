// react核心
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
// 辅助库
import { isString } from 'lodash';
import { pickBy } from 'ramda';
// 自定义hooks
import useCss from '../../../hooks/useCss';

/**
 * 自定义骨架屏组件AntdCustomSkeleton
 */
const AntdCustomSkeleton = (props) => {
    let {
        id,
        className,
        style,
        key,
        children,
        skeletonContent,
        loading,
        delay,
        listenPropsMode,
        excludeProps,
        includeProps,
        debug,
        manual,
        loading_state,
        setProps
    } = props;

    const [showLoading, setShowLoading] = useState(loading);
    const timer = useRef();
    const delayTimer = useRef();

    useEffect(() => {
        if (!manual && loading_state) {
            if (timer.current) {
                clearTimeout(timer.current);
            }
            if (delayTimer.current) {
                clearTimeout(delayTimer.current);
            }
            if (loading_state.is_loading && !showLoading) {
                // 当listenPropsMode为'default'时
                if (listenPropsMode === 'default') {
                    if (debug) {
                        console.log(loading_state.component_name + '.' + loading_state.prop_name.split('@')[0])
                    }
                    delayTimer.current = setTimeout(
                        () => setShowLoading(true),
                        delay
                    );
                } else if (listenPropsMode === 'exclude') {
                    // 当listenPropsMode为'exclude'模式时
                    // 当前触发loading_state的组件+属性组合不在排除列表中时，激活动画
                    if (excludeProps.indexOf(loading_state.component_name + '.' + loading_state.prop_name.split('@')[0]) === -1) {
                        if (debug) {
                            console.log(loading_state.component_name + '.' + loading_state.prop_name.split('@')[0])
                        }
                        delayTimer.current = setTimeout(
                            () => setShowLoading(true),
                            delay
                        );
                    }
                } else if (listenPropsMode === 'include') {
                    // 当listenPropsMode为'include'模式时
                    // 当前触发loading_state的组件+属性组合在包含列表中时，激活动画
                    if (includeProps.indexOf(loading_state.component_name + '.' + loading_state.prop_name.split('@')[0]) !== -1) {
                        if (debug) {
                            console.log(loading_state.component_name + '.' + loading_state.prop_name.split('@')[0])
                        }
                        delayTimer.current = setTimeout(
                            () => setShowLoading(true),
                            delay
                        );
                    }
                }

            } else if (!loading_state.is_loading && showLoading) {
                timer.current = setTimeout(() => setShowLoading(false));
            }
        }
    }, [loading_state]);

    return (
        <div
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
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        >{(manual ? loading : showLoading) ? skeletonContent : children}
        </div>
    );
}

AntdCustomSkeleton._dashprivate_isLoadingComponent = true;

AntdCustomSkeleton.propTypes = {
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
     * 组件型，加载状态下显示的内容
     */
    skeletonContent: PropTypes.node,

    /**
     * 是否处于加载中状态
     */
    loading: PropTypes.bool,

    /**
     * 加载动画渲染延时，单位：毫秒
     * 默认值：`0`
     */
    delay: PropTypes.number,

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
AntdCustomSkeleton.defaultProps = {
    loading: false,
    listenPropsMode: 'default',
    excludeProps: [],
    includeProps: [],
    debug: false,
    manual: false
}

export default AntdCustomSkeleton;