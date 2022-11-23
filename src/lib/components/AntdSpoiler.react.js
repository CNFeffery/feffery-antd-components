import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';
import { useSize } from 'ahooks';
import { locale2text } from './locales.react';

const { Link } = Typography;

// 定义展开收起组件AntdSpoiler
const AntdSpoiler = (props) => {
    // 取得必要属性或参数
    let {
        id,
        children,
        className,
        style,
        key,
        locale,
        contentClassName,
        contentStyle,
        hideLabel,
        showLabel,
        open,
        maxHeight,
        transitionDuration,
        loading_state,
        setProps
    } = props;

    const ref = useRef(null);
    const size = useSize(ref);

    return (
        <div id={id}
            key={key}
            className={className}
            style={style}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }>
            <div className={contentClassName}
                style={
                    {
                        transitionTimingFunction: 'ease',
                        ...contentStyle,
                        maxHeight: open ? (size && size.height) : maxHeight,
                        transitionDuration: transitionDuration,
                        transitionProperty: 'max-height',
                        overflow: 'hidden'
                    }
                }>
                <div ref={ref}>
                    {children}
                </div>
            </div>
            <Link onClick={() => {
                setProps({
                    open: !open
                })
            }}>
                {
                    open ? hideLabel || locale2text.AntdSpoiler[locale].hideLabel : showLabel || locale2text.AntdSpoiler[locale].showLabel
                }
            </Link>
        </div>
    );
}

// 定义参数或属性
AntdSpoiler.propTypes = {
    id: PropTypes.string,

    children: PropTypes.node,

    className: PropTypes.string,

    style: PropTypes.object,

    // 内容区css类
    contentClassName: PropTypes.string,

    // 内容区css样式
    contentStyle: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 设置语言环境，可选的有'zh-cn'、'en-us'
    locale: PropTypes.oneOf(['zh-cn', 'en-us']),

    // 设置展开状态下，收起按钮的文案
    hideLabel: PropTypes.string,

    // 设置收起状态下，展开按钮的文案
    showLabel: PropTypes.string,

    // 设置或监听当前是否处于展开状态，默认为false
    open: PropTypes.bool,

    // 设置收起状态下的内容区域最大像素高度，默认为100
    maxHeight: PropTypes.number,

    // 设置展开收起过渡动画的时长，默认为'0.2s'
    transitionDuration: PropTypes.string,

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
}

// 设置默认参数
AntdSpoiler.defaultProps = {
    locale: 'zh-cn',
    open: false,
    maxHeight: 50,
    transitionDuration: '0.1s'
}

export default React.memo(AntdSpoiler);