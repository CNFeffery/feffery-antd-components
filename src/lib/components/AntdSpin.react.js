import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import 'antd/dist/antd.css';
import './styles.css'

const parseChildrenToArray = children => {
    if (children && !Array.isArray(children)) {
        return [children];
    }
    return children;
};

// 定义加载动画部件AntdSpin，api参数参考https://ant.design/components/spin-cn/
const AntdSpin = (props) => {
    // 取得必要属性或参数
    let {
        id,
        className,
        wrapperClassName,
        style,
        children,
        spinning,
        size,
        delay,
        loading_state,
        text,
        listenPropsMode,
        excludeProps,
        includeProps,
        debug,
        setProps
    } = props;

    children = parseChildrenToArray(children)

    const [showSpinning, setShowSpinning] = useState(spinning);
    const timer = useRef();

    useEffect(() => {
        if (loading_state) {
            if (timer.current) {
                clearTimeout(timer.current);
            }
            if (loading_state.is_loading && !showSpinning) {
                // 当listenPropsMode为'default'时
                if (listenPropsMode === 'default') {
                    if (debug) {
                        console.log(loading_state.component_name + '.' + loading_state.prop_name)
                    }
                    setShowSpinning(true);
                } else if (listenPropsMode === 'exclude') {
                    // 当listenPropsMode为'exclude'模式时
                    // 当前触发loading_state的组件+属性组合不在排除列表中时，激活动画
                    if (excludeProps.indexOf(loading_state.component_name + '.' + loading_state.prop_name) === -1) {
                        if (debug) {
                            console.log(loading_state.component_name + '.' + loading_state.prop_name)
                        }
                        setShowSpinning(true);
                    }
                } else if (listenPropsMode === 'include') {
                    // 当listenPropsMode为'include'模式时
                    // 当前触发loading_state的组件+属性组合在包含列表中时，激活动画
                    if (includeProps.indexOf(loading_state.component_name + '.' + loading_state.prop_name) !== -1) {
                        if (debug) {
                            console.log(loading_state.component_name + '.' + loading_state.prop_name)
                        }
                        setShowSpinning(true);
                    }
                }

            } else if (!loading_state.is_loading && showSpinning) {
                timer.current = setTimeout(() => setShowSpinning(false));
            }
        }
    }, [loading_state]);

    // 返回定制化的前端部件
    return (<
        Spin id={id}
        className={className}
        wrapperClassName={wrapperClassName}
        style={style}
        spinning={showSpinning}
        size={size}
        delay={delay}
        tip={text}
        data-dash-is-loading={
            (loading_state && loading_state.is_loading) || undefined
        } > {children} </Spin>
    );
}

AntdSpin._dashprivate_isLoadingComponent = true;

// 定义参数或属性
AntdSpin.propTypes = {
    // 部件id
    id: PropTypes.string,

    /**
     * The content of the tab - will only be displayed if this tab is selected
     */
    children: PropTypes.node,

    // css类名
    className: PropTypes.string,

    // 包装器类名
    wrapperClassName: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 设置是否处于加载中状态
    spinning: PropTypes.bool,

    // 设置加载中部件的大小尺寸，可选的有'small'、'middle'及'large'，默认为'middle'
    size: PropTypes.oneOf(['small', 'middle', 'large']),

    // 设置延迟加载时长，单位：毫秒，若delay时长内加载结束则不渲染加载动画
    delay: PropTypes.number,

    // 设置加载动画附带的说明文字
    text: PropTypes.string,

    // 设置是否开启debug模式，开启后，每次动画加载都会在开发者工具的控制台打印prop信息
    debug: PropTypes.bool,

    // 设置自定义监听组件的模式，可选的有'default'、'exclude'、'include'，默认为'default'
    listenPropsMode: PropTypes.oneOf(['default', 'exclude', 'include']),

    // 设置需要忽略输出监听过程的组件信息列表
    // 仅在listenPropsMode为'exclude'时生效
    excludeProps: PropTypes.arrayOf(PropTypes.string),

    // 设置需要包含输出监听过程的组件信息列表
    // 仅在listenPropsMode为'include'时生效
    includeProps: PropTypes.arrayOf(PropTypes.string),

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
    spinning: false,
    listenPropsMode: 'default',
    excludeProps: [],
    includeProps: [],
    debug: false
}

export default AntdSpin;