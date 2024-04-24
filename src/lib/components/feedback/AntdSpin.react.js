// react核心
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
// antd核心
import { Spin } from 'antd';
// 辅助库
import { isString } from 'lodash';
import { pickBy } from 'ramda';
// 自定义hooks
import useCss from '../../hooks/useCss'

/**
 * 加载动画组件AntdSpid
 */
const AntdSpin = (props) => {
    let {
        id,
        className,
        wrapperClassName,
        style,
        key,
        children,
        spinning,
        size,
        delay,
        fullscreen,
        loading_state,
        text,
        listenPropsMode,
        excludeProps,
        includeProps,
        debug,
        indicator,
        setProps
    } = props;

    const [showSpinning, setShowSpinning] = useState(spinning);
    const timer = useRef();

    useEffect(() => {
        if (loading_state) {
            if (timer.current) {
                clearTimeout(timer.current);
            }
            if (loading_state.is_loading && !showSpinning) {
                // 当listenPropsMode为'default'时-
                if (listenPropsMode === 'default') {
                    if (debug) {
                        console.log(loading_state.component_name + '.' + loading_state.prop_name.split('@')[0])
                    }
                    setShowSpinning(true);
                } else if (listenPropsMode === 'exclude') {
                    // 当listenPropsMode为'exclude'模式时
                    // 当前触发loading_state的组件+属性组合不在排除列表中时，激活动画
                    if (excludeProps.indexOf(loading_state.component_name + '.' + loading_state.prop_name.split('@')[0]) === -1) {
                        if (debug) {
                            console.log(loading_state.component_name + '.' + loading_state.prop_name.split('@')[0])
                        }
                        setShowSpinning(true);
                    }
                } else if (listenPropsMode === 'include') {
                    // 当listenPropsMode为'include'模式时
                    // 当前触发loading_state的组件+属性组合在包含列表中时，激活动画
                    if (includeProps.indexOf(loading_state.component_name + '.' + loading_state.prop_name.split('@')[0]) !== -1) {
                        if (debug) {
                            console.log(loading_state.component_name + '.' + loading_state.prop_name.split('@')[0])
                        }
                        setShowSpinning(true);
                    }
                }

            } else if (!loading_state.is_loading && showSpinning) {
                timer.current = setTimeout(() => setShowSpinning(false));
            }
        }
    }, [loading_state]);

    // 修复设置全屏后子元素无法渲染的问题
    if (fullscreen) {
        return (
            <>
                <Spin
                    // 提取具有data-*或aria-*通配格式的属性
                    {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), props)}
                    id={id}
                    className={
                        isString(className) ?
                            className :
                            (className ? useCss(className) : undefined)
                    }
                    key={key}
                    wrapperClassName={
                        isString(wrapperClassName) ?
                            wrapperClassName :
                            (wrapperClassName ? useCss(wrapperClassName) : undefined)
                    }
                    style={style}
                    spinning={showSpinning}
                    size={size}
                    delay={delay}
                    fullscreen={fullscreen}
                    tip={text}
                    indicator={indicator}
                    data-dash-is-loading={
                        (loading_state && loading_state.is_loading) || undefined
                    } />
                {children}
            </>
        );
    }

    return (
        <Spin
            // 提取具有data-*或aria-*通配格式的属性
            {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), props)}
            id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            key={key}
            wrapperClassName={
                isString(wrapperClassName) ?
                    wrapperClassName :
                    (wrapperClassName ? useCss(wrapperClassName) : undefined)
            }
            style={style}
            spinning={showSpinning}
            size={size}
            delay={delay}
            fullscreen={fullscreen}
            tip={text}
            indicator={indicator}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            } > {children} </Spin>
    );
}

AntdSpin._dashprivate_isLoadingComponent = true;

AntdSpin.propTypes = {
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
     * 外层容器css类名
     */
    wrapperClassName: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    /**
     * 是否处于加载中状态
     */
    spinning: PropTypes.bool,

    /**
     * 默认加载状态图标的尺寸，可选项有`'small'`、`'middle'`、`'large'`
     * 默认值：`'middle'`
     */
    size: PropTypes.oneOf(['small', 'middle', 'large']),

    /**
     * 加载动画渲染延时，单位：毫秒
     * 默认值：`0`
     */
    delay: PropTypes.number,

    /**
     * 加载动画提示文字
     */
    text: PropTypes.string,

    /**
     * 是否开启全屏模式
     * 默认值：`false`
     */
    fullscreen: PropTypes.bool,

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
     * 组件型，自定义加载状态图标
     */
    indicator: PropTypes.node,

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
AntdSpin.defaultProps = {
    size: 'middle',
    spinning: false,
    fullscreen: false,
    listenPropsMode: 'default',
    excludeProps: [],
    includeProps: [],
    debug: false
}

export default AntdSpin;