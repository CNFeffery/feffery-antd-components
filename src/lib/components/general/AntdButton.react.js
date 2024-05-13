// react核心
import { useContext } from 'react';
import PropTypes from 'prop-types';
// antd核心
import { Button } from 'antd';
// 辅助库
import { isString, isUndefined } from 'lodash';
import { pickBy } from 'ramda';
import { useRequest } from 'ahooks';
import { HappyProvider } from '@ant-design/happy-work-theme';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 自定义上下文
import PropsContext from '../../contexts/PropsContext';

/**
 * 按钮组件AntdButton
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
        target,
        autoInsertSpace,
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
        iconPosition,
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
            // 提取具有data-*或aria-*通配格式的属性
            {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), props)}
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
            target={target}
            autoInsertSpace={autoInsertSpace}
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
            iconPosition={iconPosition}
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
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 组件型，按钮内嵌元素
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
     * 细分控制子元素css样式
     */
    styles: PropTypes.exact({
        /**
         * 按钮图标元素css样式
         */
        icon: PropTypes.object
    }),

    /**
     * 细分控制子元素css类名
     */
    classNames: PropTypes.exact({
        /**
         * 按钮图标元素css类名
         */
        icon: PropTypes.string
    }),

    /**
     * 组件型，按钮加载状态下显示的内嵌元素
     */
    loadingChildren: PropTypes.node,

    /**
     * 按钮类型，可选项有`'default'`、`'primary'`、`'ghost'`、`'dashed'`、`'link'`、`'text'`
     * 默认值：`'default'`
     */
    type: PropTypes.oneOf(['default', 'primary', 'ghost', 'dashed', 'link', 'text']),

    /**
     * 按钮点击跳转链接地址
     */
    href: PropTypes.string,

    /**
     * 按钮点击跳转链接方式
     * 默认值：`'_blank'`
     */
    target: PropTypes.string,

    /**
     * 按钮两个汉字内是否插入空格
     * 默认值：`true`
     */
    autoInsertSpace: PropTypes.bool,

    /**
     * 按钮是否渲染为块级元素（宽度撑满父容器）
     * 默认值：`false`
     */
    block: PropTypes.bool,

    /**
     * 按钮是否呈现危险样式
     * 默认值：`false`
     */
    danger: PropTypes.bool,

    /**
     * 按钮是否呈现禁用状态
     * 默认值：`false`
     */
    disabled: PropTypes.bool,

    /**
     * 按钮是否呈现透明背景状态
     * 默认值：`false`
     */
    ghost: PropTypes.bool,

    /**
     * 按钮形状，可选项有`'default'`、`'circle'`、`'round'`
     * 默认值：`'default'`
     */
    shape: PropTypes.oneOf(['default', 'circle', 'round']),

    /**
     * 按钮尺寸规格，可选项有`'small'`、`'middle'`、`'large'`
     * 默认值：`'middle'`
     */
    size: PropTypes.oneOf(['small', 'middle', 'large']),

    /**
     * 按钮累计点击次数，用于监听按钮点击行为
     * 默认值：`0`
     */
    nClicks: PropTypes.number,

    /**
     * 按钮点击时需要附带执行的js程序字符串
     */
    clickExecuteJsString: PropTypes.string,

    /**
     * 按钮点击事件监听防抖延时，单位：毫秒
     * 默认值：`0`
     */
    debounceWait: PropTypes.number,

    /**
     * 组件型，按钮内嵌前缀图标元素
     */
    icon: PropTypes.node,

    /**
     * 按钮图标组件的位置，可选项有`'start'`、`'end'`
     * 默认值：`'start'`
     */
    iconPosition: PropTypes.oneOf(['start', 'end']),

    /**
     * 按钮是否呈现加载状态
     * 默认值：`false`
     */
    loading: PropTypes.bool,

    /**
     * 当前按钮在每次点击后是否自动进入加载中状态
     * 默认值：`false`
     */
    autoSpin: PropTypes.bool,

    /**
     * 按钮额外的特殊交互类型，可选项有`'happy-work'`
     */
    motionType: PropTypes.oneOf(['happy-work']),

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
AntdButton.defaultProps = {
    type: 'default',
    target: '_blank',
    autoInsertSpace: true,
    block: false,
    danger: false,
    disabled: false,
    ghost: false,
    shape: 'default',
    size: 'middle',
    nClicks: 0,
    debounceWait: 0,
    iconPosition: 'start',
    autoSpin: false
}

export default AntdButton;