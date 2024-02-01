import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Skeleton } from 'antd';
import useCss from '../../../hooks/useCss';
import { isString } from 'lodash';

// 定义骨架屏组件AntdSkeleton，api参数参考https://ant.design/components/skeleton-cn/
const AntdSkeleton = (props) => {
    // 取得必要属性或参数
    let {
        id,
        className,
        style,
        key,
        children,
        loading,
        active,
        delay,
        avatar,
        paragraph,
        round,
        title,
        listenPropsMode,
        excludeProps,
        includeProps,
        debug,
        loading_state,
        setProps
    } = props;

    const [showLoading, setShowLoading] = useState(loading);
    const timer = useRef();
    const delayTimer = useRef();

    useEffect(() => {
        if (loading_state) {
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

    // 返回定制化的前端组件
    return (
        <Skeleton
            id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            loading={showLoading}
            active={active}
            avatar={avatar}
            paragraph={paragraph}
            round={round}
            title={title}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        >{children}
        </Skeleton>
    );
}

AntdSkeleton._dashprivate_isLoadingComponent = true;

// 定义参数或属性
AntdSkeleton.propTypes = {
    // 组件id
    id: PropTypes.string,

    children: PropTypes.node,

    // css类名
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    // 自定义css字典
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 设置是否处于加载中状态
    loading: PropTypes.bool,

    // 设置是否显示动画效果，默认为false
    active: PropTypes.bool,

    /**
     * 设置加载延时时长，单位：毫秒
     * 默认：0
     */
    delay: PropTypes.number,

    // 设置是否显示头像占位图，默认为false
    avatar: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.exact({
            // 设置是否对头像占位展示动画效果（仅在单独使用头像占位时生效）
            // 默认为false
            active: PropTypes.bool,

            // 指定头像的形状，可选的有'circle'、'square'
            shape: PropTypes.oneOf(['circle', 'square']),

            // 设置头像占位图的大小
            size: PropTypes.oneOfType([
                // 像素大小
                PropTypes.number,

                // 固定规格，可选的有'large'、'small'与'default'
                PropTypes.oneOf([
                    'large', 'small', 'default'
                ])
            ])
        })
    ]),

    // 设置是否显示段落占位图，默认为true
    paragraph: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.exact({
            // 设置段落占位图的行数
            rows: PropTypes.number,

            // 设置段落占位图的宽度（数值像素或字符串css宽度），若为数组时，则一一对应每行宽度，
            // 反之则是最后一行的宽度
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

    // 设置是否显示标题占位图，默认为true
    title: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.exact({
            // 设置标题占位图的宽度（数值像素宽度或字符串css宽度）
            width: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string
            ])
        })
    ]),

    // 设置段落与标题占位是否显示圆角，默认为false
    round: PropTypes.bool,

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
AntdSkeleton.defaultProps = {
    loading: false,
    delay: 0,
    active: false,
    delay: 0,
    avatar: false,
    paragraph: true,
    title: true,
    round: false,
    debug: false,
    listenPropsMode: 'default',
    excludeProps: [],
    includeProps: []
}

export default AntdSkeleton;