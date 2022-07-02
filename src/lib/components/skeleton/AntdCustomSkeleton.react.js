import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Skeleton } from 'antd';
import 'antd/dist/antd.css';
import { parseChildrenToArray } from '../utils';

// 自定义骨架屏组件AntdCustomSkeleton
const AntdCustomSkeleton = (props) => {
    // 取得必要属性或参数
    let {
        id,
        className,
        style,
        key,
        children,
        skeletonContent,
        loading,
        listenPropsMode,
        excludeProps,
        includeProps,
        debug,
        loading_state,
        setProps
    } = props;

    children = parseChildrenToArray(children)

    const [showLoading, setShowLoading] = useState(loading);
    const timer = useRef();

    useEffect(() => {
        if (loading_state) {
            if (timer.current) {
                clearTimeout(timer.current);
            }
            if (loading_state.is_loading && !showLoading) {
                // 当listenPropsMode为'default'时
                if (listenPropsMode === 'default') {
                    if (debug) {
                        console.log(loading_state.component_name + '.' + loading_state.prop_name)
                    }
                    setShowLoading(true);
                } else if (listenPropsMode === 'exclude') {
                    // 当listenPropsMode为'exclude'模式时
                    // 当前触发loading_state的组件+属性组合不在排除列表中时，激活动画
                    if (excludeProps.indexOf(loading_state.component_name + '.' + loading_state.prop_name) === -1) {
                        if (debug) {
                            console.log(loading_state.component_name + '.' + loading_state.prop_name)
                        }
                        setShowLoading(true);
                    }
                } else if (listenPropsMode === 'include') {
                    // 当listenPropsMode为'include'模式时
                    // 当前触发loading_state的组件+属性组合在包含列表中时，激活动画
                    if (includeProps.indexOf(loading_state.component_name + '.' + loading_state.prop_name) !== -1) {
                        if (debug) {
                            console.log(loading_state.component_name + '.' + loading_state.prop_name)
                        }
                        setShowLoading(true);
                    }
                }

            } else if (!loading_state.is_loading && showLoading) {
                timer.current = setTimeout(() => setShowLoading(false));
            }
        }
    }, [loading_state]);

    // 返回定制化的前端组件
    return (
        <div
            id={id}
            className={className}
            style={style}
            key={key}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        >{showLoading ? skeletonContent : children}
        </div>
    );
}

AntdCustomSkeleton._dashprivate_isLoadingComponent = true;

// 定义参数或属性
AntdCustomSkeleton.propTypes = {
    // 组件id
    id: PropTypes.string,

    children: PropTypes.node,

    // 设置加载状态时应当展示作为骨骼屏的内容
    skeletonContent: PropTypes.node,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 设置是否处于加载中状态
    loading: PropTypes.bool,

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
AntdCustomSkeleton.defaultProps = {
    loading: false,
    listenPropsMode: 'default',
    excludeProps: [],
    includeProps: [],
    debug: false
}

export default AntdCustomSkeleton;