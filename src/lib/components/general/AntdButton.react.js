// react核心
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
// antd核心
import { Button } from 'antd';
// 辅助库
import { isString, isUndefined } from 'lodash';
import { useRequest } from 'ahooks';
import { HappyProvider } from '@ant-design/happy-work-theme';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 自定义上下文
import PropsContext from '../../contexts/PropsContext';


/**
 * 按钮组件AntdButton，api参数参考https://ant.design/components/button-cn/
 */
const AntdButton = (props) => {
    let {
        id,
        children,
        loadingChildren,
        className,
        style,
        styles,
        classNames,
        key,
        setProps,
        type,
        href,
        htmlType,
        target,
        block,
        danger,
        disabled,
        ghost,
        shape,
        size,
        nClicks,
        clickExecuteJsString,
        debounceWait,
        icon,
        loading,
        autoSpin,
        motionType,
        loading_state
    } = props;

    // 使用自定义上下文
    const context = useContext(PropsContext)

    // 防抖点击事件监听
    const { run: onClick } = useRequest(
        () => {
            // 若clickExecuteJsString有效，则通过eval进行执行
            if (clickExecuteJsString) {
                try {
                    eval(clickExecuteJsString)
                } catch (error) {
                    console.error(error)
                }
            }

            if (autoSpin) {
                // 更新nClicks，并自动进入loading状态
                setProps({ nClicks: nClicks + 1, loading: true })
            } else {
                // 更新nClicks
                setProps({ nClicks: nClicks + 1 })
            }
        },
        {
            debounceWait: debounceWait,
            debounceLeading: true,
            manual: true
        }
    )

    const renderElement = (
        <Button
            id={id}
            key={key}
            style={style}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            styles={styles}
            classNames={classNames}
            type={type}
            href={href}
            htmlType={htmlType}
            target={target}
            block={block}
            danger={danger}
            disabled={
                context && !isUndefined(context.componentDisabled) ?
                    context.componentDisabled :
                    disabled
            }
            ghost={ghost}
            shape={shape}
            size={
                context && !isUndefined(context.componentSize) ?
                    context.componentSize :
                    size
            }
            icon={icon}
            loading={loading}
            onClick={onClick}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        >
            {loading ? (loadingChildren || children) : children}
        </Button>
    );

    if (motionType === 'happy-work') {
        return (
            <HappyProvider >
                {renderElement}
            </HappyProvider>
        )
    }
    return renderElement;
}


AntdButton.propTypes = {
    /**
     * 当前组件唯一id
     */
    id: PropTypes.string,

    /**
     * 当前按钮内嵌元素
     */
    children: PropTypes.node,

    /**
     * 当前按钮css样式
     */
    style: PropTypes.object,

    /**
     * 当前按钮css类，支持动态css类特性
     */
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    /**
     * 细分控制子元素css样式
     */
    styles: PropTypes.exact({
        /**
         * 控制图标部分元素css样式
         */
        icon: PropTypes.object
    }),

    /**
     * 细分控制子元素css类
     */
    classNames: PropTypes.exact({
        /**
         * 控制图标部分元素css类
         */
        icon: PropTypes.string
    }),

    /**
     * 当前组件辅助用唯一id，可通过更新key值实现强制重绘
     */
    key: PropTypes.string,

    /**
     * 当前按钮加载状态下内嵌元素
     */
    loadingChildren: PropTypes.node,

    /**
     * 当前按钮类型，可选的有'default'、'primary'、'ghost'、'dashed'、'link'、'text'
     * 默认：'primary'
     */
    type: PropTypes.oneOf(['default', 'primary', 'ghost', 'dashed', 'link', 'text']),

    /**
     * 当前按钮点击跳转链接地址
     */
    href: PropTypes.string,

    /**
     * 设置button原生的type值，可选值请参考HTML标准
     */
    htmlType: PropTypes.string,

    /**
     * 当前按钮点击跳转链接行为类型
     */
    target: PropTypes.string,

    /**
     * 当前按钮是否撑满父元素
     * 默认：false
     */
    block: PropTypes.bool,

    /**
     * 当前按钮是否呈现危险状态
     * 默认：false
     */
    danger: PropTypes.bool,

    /**
     * 当前按钮是否呈现禁用状态
     * 默认：false
     */
    disabled: PropTypes.bool,

    /**
     * 幽灵属性，使当前按钮背景透明
     * 默认：false
     */
    ghost: PropTypes.bool,

    /**
     * 当前按钮形状，可选的有'default'、'circle'、'round'
     * 默认：'default'
     */
    shape: PropTypes.oneOf(['default', 'circle', 'round']),

    /**
     * 当前按钮尺寸规格，可选的有'small'、'middle'、'large'
     * 默认：'middle'
     */
    size: PropTypes.oneOf(['small', 'middle', 'large']),

    /**
     * 当前按钮累计被点击次数
     * 默认：0
     */
    nClicks: PropTypes.number,

    /**
     * 按钮点击时额外需要执行的js程序字符串
     */
    clickExecuteJsString: PropTypes.string,

    /**
     * 当前按钮点击事件监听防抖延时，单位：毫秒
     * 默认：200
     */
    debounceWait: PropTypes.number,

    /**
     * 当前按钮内嵌元素前缀图标
     */
    icon: PropTypes.node,

    /**
     * 当前按钮是否呈现加载中状态
     * 默认：false
     */
    loading: PropTypes.bool,

    /**
     * 当前按钮在每次点击后是否自动进入加载中状态
     * 默认：false
     */
    autoSpin: PropTypes.bool,

    /**
     * 为当前按钮设置特殊的点击动效，可选的有'happy-work'
     */
    motionType: PropTypes.oneOf(['happy-work']),

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
AntdButton.defaultProps = {
    type: 'default',
    shape: 'default',
    block: false,
    danger: false,
    disabled: false,
    ghost: false,
    size: 'middle',
    nClicks: 0,
    debounceWait: 0,
    autoSpin: false
}

export default React.memo(AntdButton);