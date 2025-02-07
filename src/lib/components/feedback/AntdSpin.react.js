// react核心
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
// antd核心
import { Spin } from 'antd';
// 辅助库
import { isString, isNumber } from 'lodash';
import { pickBy, equals } from 'ramda';
import { useLoading, loadingSelector } from '../utils';
// 自定义hooks
import useCss from '../../hooks/useCss'

/**
 * 加载动画组件AntdSpin
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
        text,
        listenPropsMode,
        excludeProps,
        includeProps,
        debug,
        indicator,
        manual,
        percent,
        setProps
    } = props;

    const ctx = window.dash_component_api.useDashContext();
    // 获取内部加载中组件信息
    const loading_info = ctx.useSelector(loadingSelector(ctx.componentPath), equals);

    useEffect(() => {
        // 检查数值型percent参数是否取值在合法的0到100之间
        if (isNumber(percent) && (percent < 0 || percent > 100)) {
            // 抛出中英文错误提示
            setProps({ _dash_error: new Error('数值型percent取值应在0到100之间！\nThe value of the numerical type "percent" should be between 0 and 100!') });
        }
    }, [percent])

    const [showSpinning, setShowSpinning] = useState(spinning);
    const timer = useRef();

    useEffect(() => {
        // 非手动控制模式下
        if (!manual && loading_info) {
            if (timer.current) {
                clearTimeout(timer.current);
            }
            if (loading_info.length > 0 && !showSpinning) {
                // 当listenPropsMode为'default'时
                if (listenPropsMode === 'default') {
                    if (debug) {
                        loading_info.forEach(item => console.log(item.id + '.' + item.property))
                    }
                    setShowSpinning(true);
                } else if (listenPropsMode === 'exclude') {
                    // 当listenPropsMode为'exclude'模式时
                    // 当前触发加载状态的组件+属性组合均不在排除列表中时，激活动画
                    if (loading_info.every(item => excludeProps.indexOf(item.id + '.' + item.property) === -1)) {
                        if (debug) {
                            loading_info.forEach(item => console.log(item.id + '.' + item.property))
                        }
                        setShowSpinning(true);
                    }
                } else if (listenPropsMode === 'include') {
                    // 当listenPropsMode为'include'模式时
                    // 当前触发加载状态的组件+属性组合至少有一个在包含列表中时，激活动画
                    if (loading_info.some(item => includeProps.indexOf(item.id + '.' + item.property) !== -1)) {
                        if (debug) {
                            loading_info.forEach(item => console.log(item.id + '.' + item.property))
                        }
                        setShowSpinning(true);
                    }
                }

            } else if (loading_info.length === 0 && showSpinning) {
                timer.current = setTimeout(() => setShowSpinning(false));
            }
        }
    }, [loading_info]);

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
                    spinning={manual ? spinning : showSpinning}
                    size={size}
                    delay={delay}
                    fullscreen={fullscreen}
                    tip={text}
                    indicator={indicator}
                    percent={percent}
                    data-dash-is-loading={useLoading()} />
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
            spinning={manual ? spinning : showSpinning}
            size={size}
            delay={delay}
            fullscreen={fullscreen}
            tip={text}
            indicator={indicator}
            percent={percent}
            data-dash-is-loading={useLoading()} > {children} </Spin>
    );
}

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
     * 是否开启手动控制模式，开启后是否处于加载状态将由`spinning`参数控制，与内部元素参与的回调状态无关
     * 默认值：`false`
     */
    manual: PropTypes.bool,

    /**
     * 控制加载中状态下的环状进度渲染形式，传入0到100之间数值型时表示实际进度，传入`'auto'`时会预估一个永远不会停止的进度
     */
    percent: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['auto'])]),

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

// 设置默认参数
AntdSpin.defaultProps = {
    size: 'middle',
    spinning: false,
    fullscreen: false,
    listenPropsMode: 'default',
    excludeProps: [],
    includeProps: [],
    debug: false,
    manual: false
}

export default AntdSpin;