// react核心
import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
// antd核心
import { Popconfirm, ConfigProvider } from 'antd';
// 辅助库
import { str2Locale } from '../locales.react';
import { parseChildrenToArray } from '../utils';
import { isString, isUndefined } from 'lodash';
import { pickBy } from 'ramda';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 自定义上下文
import PropsContext from '../../contexts/PropsContext';

/**
 * 气泡确认框组件AntdPopconfirm
 */
const AntdPopconfirm = (props) => {
    let {
        id,
        children,
        className,
        style,
        key,
        locale,
        icon,
        title,
        description,
        disabled,
        placement,
        mouseEnterDelay,
        mouseLeaveDelay,
        overlayClassName,
        overlayStyle,
        overlayInnerStyle,
        okText,
        okButtonProps,
        cancelText,
        cancelButtonProps,
        showCancel,
        confirmCounts,
        cancelCounts,
        trigger,
        zIndex,
        arrow,
        fresh,
        open,
        permanent,
        popupContainer,
        setProps,
        loading_state
    } = props;

    const arrowPoint = useMemo(() => {
        if (arrow === 'hide') {
            return false;
        }
        if (arrow === 'show') {
            return true;
        }
        return {
            pointAtCenter: true,
        };
    }, [arrow])

    const context = useContext(PropsContext)
    locale = (context && context.locale) || locale

    children = parseChildrenToArray(children)

    // 监听确认按钮点击事件
    const listenConfirm = () => {
        setProps({ confirmCounts: confirmCounts + 1 })
    };

    // 监听取消按钮点击事件
    const listenCancel = () => {
        setProps({ cancelCounts: cancelCounts + 1 })
    };

    return (
        <ConfigProvider locale={str2Locale.get(locale)}>
            <Popconfirm
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
                icon={icon}
                title={title}
                description={description}
                disabled={
                    context && !isUndefined(context.componentDisabled) ?
                        context.componentDisabled :
                        disabled
                }
                placement={placement}
                mouseEnterDelay={mouseEnterDelay}
                mouseLeaveDelay={mouseLeaveDelay}
                overlayClassName={
                    isString(overlayClassName) ?
                        overlayClassName :
                        (overlayClassName ? useCss(overlayClassName) : undefined)
                }
                overlayStyle={overlayStyle}
                overlayInnerStyle={overlayInnerStyle}
                trigger={trigger}
                okText={okText}
                okButtonProps={okButtonProps}
                cancelText={cancelText}
                cancelButtonProps={cancelButtonProps}
                zIndex={zIndex}
                arrow={arrowPoint}
                fresh={fresh}
                open={open}
                showCancel={showCancel}
                onOpenChange={
                    permanent ? undefined : (e) => setProps({ open: e })
                }
                getPopupContainer={
                    popupContainer === 'parent' ?
                        (triggerNode) => triggerNode.parentNode :
                        undefined
                }
                onCancel={listenCancel}
                onConfirm={listenConfirm}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }>
                {children}
            </Popconfirm>
        </ConfigProvider>
    );
}

AntdPopconfirm.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 组件型，气泡确认框挂载元素
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
     * 组件文案语种，可选项有`'zh-cn'`（简体中文）、`'en-us'`（英语）、`'de-de'`（德语）
     * 默认值：`'zh-cn'`
     */
    locale: PropTypes.oneOf(['zh-cn', 'en-us', 'de-de']),

    /**
     * 组件型，提示图标
     */
    icon: PropTypes.node,

    /**
     * 组件型，标题内容
     */
    title: PropTypes.node,

    /**
     * 组件型，描述内容
     */
    description: PropTypes.node,

    /**
     * 是否禁用当前组件
     * 默认值：`false`
     */
    disabled: PropTypes.bool,

    /**
     * 气泡确认框弹出位置，可选项有`'top'`、`'left'`、`'right'`、`'bottom'`、`'topLeft'`、`'topRight'`、`'bottomLeft'`、`'bottomRight'`、`'leftTop'`、`'leftBottom'`、`'rightTop'`、`'rightBottom'`
     * 默认值：`'top'`
     */
    placement: PropTypes.oneOf([
        'top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft',
        'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom'
    ]),

    /**
     * 从鼠标移入挂载元素，到气泡确认框显示的延时，单位：秒
     * 默认值：`0.1`
     */
    mouseEnterDelay: PropTypes.number,

    /**
     * 从鼠标移出挂载元素，到气泡确认框消失的延时，单位：秒
     * 默认值：`0.1`
     */
    mouseLeaveDelay: PropTypes.number,

    /**
     * 气泡确认框css类名
     */
    overlayClassName: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    /**
     * 气泡确认框css样式
     */
    overlayStyle: PropTypes.object,

    /**
     * 内容区域css样式
     */
    overlayInnerStyle: PropTypes.object,

    /**
     * 组件型，确认按钮内容
     */
    okText: PropTypes.node,

    /**
     * 配置确认按钮相关参数
     */
    okButtonProps: PropTypes.exact({
        /**
         * 按钮尺寸规格，可选项有`'small'`、`'middle'`、`'large'`
         * 默认值：`'middle'`
         */
        size: PropTypes.oneOf(['small', 'middle', 'large']),

        /**
         * 按钮类型，可选项有`'default'`、`'primary'`、`'ghost'`、`'dashed'`、`'link'`、`'text'`
         * 默认值：`'default'`
         */
        type: PropTypes.oneOf(['primary', 'ghost', 'dashed', 'link', 'text', 'default']),

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
         * 按钮形状，可选项有`'default'`、`'circle'`、`'round'`
         * 默认值：`'default'`
         */
        shape: PropTypes.oneOf(['circle', 'round']),

        /**
         * 按钮css样式
         */
        style: PropTypes.object,

        /**
         * 按钮css类名
         */
        className: PropTypes.string
    }),

    /**
     * 组件型，取消按钮内容
     */
    cancelText: PropTypes.node,

    /**
     * 配置取消按钮相关参数
     */
    cancelButtonProps: PropTypes.exact({
        /**
         * 按钮尺寸规格，可选项有`'small'`、`'middle'`、`'large'`
         * 默认值：`'middle'`
         */
        size: PropTypes.oneOf(['small', 'middle', 'large']),

        /**
         * 按钮类型，可选项有`'default'`、`'primary'`、`'ghost'`、`'dashed'`、`'link'`、`'text'`
         * 默认值：`'default'`
         */
        type: PropTypes.oneOf(['primary', 'ghost', 'dashed', 'link', 'text', 'default']),

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
         * 按钮形状，可选项有`'default'`、`'circle'`、`'round'`
         * 默认值：`'default'`
         */
        shape: PropTypes.oneOf(['circle', 'round']),

        /**
         * 按钮css样式
         */
        style: PropTypes.object,

        /**
         * 按钮css类名
         */
        className: PropTypes.string
    }),

    /**
     * 是否显示取消按钮
     * 默认值：`true`
     */
    showCancel: PropTypes.bool,

    /**
     * 监听确认按钮累计点击次数
     * 默认值：`0`
     */
    confirmCounts: PropTypes.number,

    /**
     * 监听取消按钮累计点击次数
     * 默认值：`0`
     */
    cancelCounts: PropTypes.number,

    /**
     * 气泡确认框触发行为，可选项有`'hover'`、`'focus'`、`'click'`，可多选组合
     * 默认值：`'click'`
     */
    trigger: PropTypes.oneOfType(
        [
            PropTypes.oneOf(['hover', 'focus', 'click']),
            PropTypes.arrayOf(PropTypes.oneOf(['hover', 'focus', 'click']))
        ]
    ),

    /**
     * 气泡确认框z-index
     */
    zIndex: PropTypes.number,

    /**
     * 指示箭头显示形式，可选项有`'show'`、`'hide'`、`'center'`
     * 默认值：`'show'`
     */
    arrow: PropTypes.oneOf(['show', 'hide', 'center']),

    /**
     * 是否保持内容更新
     * 默认值：`false`
     */
    fresh: PropTypes.bool,

    /**
     * 监听或设置气泡确认框的显示状态
     * 默认值：`false`
     */
    open: PropTypes.bool,

    /**
     * 是否保持气泡确认框显示/隐藏
     * 默认值：`false`
     */
    permanent: PropTypes.bool,

    /**
     * 悬浮层渲染挂载父节点策略，可选项有`'parent'`、`'body'`
     * 默认值：`'body'`
     */
    popupContainer: PropTypes.oneOf(['parent', 'body']),

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
AntdPopconfirm.defaultProps = {
    disabled: false,
    placement: 'top',
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    showCancel: true,
    confirmCounts: 0,
    cancelCounts: 0,
    trigger: 'click',
    locale: 'zh-cn',
    popupContainer: 'body',
    arrow: 'show',
    fresh: false,
    open: false,
    permanent: false
}

export default AntdPopconfirm;