// react核心
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
// antd核心
import { Modal, ConfigProvider } from 'antd';
// 辅助库
import { str2Locale } from '../locales.react';
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { useLoading } from '../utils';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 自定义上下文
import PropsContext from '../../contexts/PropsContext';

/**
 * 对话框组件AntdModal
 */
const AntdModal = ({
    id,
    children,
    className,
    key,
    style,
    styles,
    classNames,
    locale = 'zh-cn',
    setProps,
    title,
    visible = false,
    renderFooter = false,
    okButtonProps,
    cancelButtonProps,
    okText,
    loadingOkText,
    cancelText,
    width = 520,
    centered = false,
    keyboard = true,
    closable = true,
    mask = true,
    maskClosable = true,
    okClickClose = true,
    preventClose = false,
    zIndex = 1000,
    okCounts = 0,
    cancelCounts = 0,
    closeCounts = 0,
    confirmLoading = false,
    confirmAutoSpin = false,
    transitionType = 'zoom',
    forceRender = false,
    destroyOnClose = true,
    loading = false,
    autoLoading = false,
    ...others
}) => {

    const context = useContext(PropsContext)
    locale = (context && context.locale) || locale

    // 监听确认按钮点击事件
    const listenOk = () => {
        if (okClickClose) {
            setProps({ visible: false, okCounts: okCounts + 1 })
        } else if (confirmAutoSpin) {
            setProps({ okCounts: okCounts + 1, confirmLoading: true })
        } else {
            setProps({ okCounts: okCounts + 1 })
        }
    };

    // 监听取消按钮点击事件
    const listenCancel = () => {
        // 是否阻止默认的各类关闭触发行为生效
        if (preventClose) {
            setProps({ cancelCounts: cancelCounts + 1 })
        } else {
            setProps({ visible: false, cancelCounts: cancelCounts + 1 })
        }
    };

    // 监听关闭按钮点击事件
    const listenClose = () => {
        setProps({ closeCounts: closeCounts + 1 })
    };

    // --- autoLoading logic ---
    // Consider children "present" only if there is at least one non-falsy node.
    const hasChildren = React.Children.toArray(children).filter(Boolean).length > 0;
    // When autoLoading is enabled: show the antd skeleton if modal is open and we don't have content yet.
    // The moment children arrive, this flips to false automatically.
    const autoSkeleton = autoLoading && visible && !hasChildren;
    const effectiveLoading = Boolean(loading || autoSkeleton);

    return (
        <ConfigProvider locale={str2Locale.get(locale)}>
            <Modal
                // 提取具有data-*或aria-*通配格式的属性
                {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), others)}
                id={id}
                className={
                    isString(className) ?
                        className :
                        (className ? useCss(className) : undefined)
                }
                style={style}
                styles={styles}
                classNames={classNames}
                key={key}
                title={title}
                open={visible}
                okText={confirmLoading ? (loadingOkText || okText) : okText}
                cancelText={cancelText}
                okButtonProps={okButtonProps}
                cancelButtonProps={cancelButtonProps}
                transitionName={transitionType === 'none' ? '' : `ant-${transitionType}`}
                width={width}
                centered={centered}
                keyboard={keyboard}
                closable={closable}
                mask={mask}
                maskClosable={maskClosable}
                zIndex={zIndex}
                onOk={listenOk}
                onCancel={listenCancel}
                afterClose={listenClose}
                footer={renderFooter ? undefined : null}
                confirmLoading={confirmLoading}
                forceRender={forceRender}
                destroyOnHidden={destroyOnClose}
                loading={effectiveLoading}
                data-dash-is-loading={useLoading()}
            >{children}</Modal>
        </ConfigProvider>
    );
}

AntdModal.propTypes = {
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
     * 细分控制子元素css样式
     */
    styles: PropTypes.exact({
        /**
         * 遮罩层元素css样式
         */
        mask: PropTypes.object,
        /**
         * 容器元素css样式
         */
        content: PropTypes.object,
        /**
         * 包裹层元素css样式
         */
        wrapper: PropTypes.object,
        /**
         * 头部元素css样式
         */
        header: PropTypes.object,
        /**
         * 内容元素css样式
         */
        body: PropTypes.object,
        /**
         * 底部元素css样式
         */
        footer: PropTypes.object
    }),

    /**
     * 细分控制子元素css类名
     */
    classNames: PropTypes.exact({
        /**
         * 遮罩层元素css类名
         */
        mask: PropTypes.string,
        /**
         * 容器元素css类名
         */
        content: PropTypes.string,
        /**
         * 包裹层元素css类名
         */
        wrapper: PropTypes.string,
        /**
         * 头部元素css类名
         */
        header: PropTypes.string,
        /**
         * 内容元素css类名
         */
        body: PropTypes.string,
        /**
         * 底部元素css类名
         */
        footer: PropTypes.string
    }),

    /**
     * 组件文案语种，可选项有`'zh-cn'`（简体中文）、`'en-us'`（英语）、`'de-de'`（德语）、`'ru-ru'`（俄语）
     * 默认值：`'zh-cn'`
     */
    locale: PropTypes.oneOf(['zh-cn', 'en-us', 'de-de', 'ru-ru']),

    /**
     * 监听或设置对话框是否可见
     * 默认值：`false`
     */
    visible: PropTypes.bool,

    /**
     * 组件型，标题内容
     */
    title: PropTypes.node,

    /**
     * 是否渲染底部操作按钮
     * 默认值：`false`
     */
    renderFooter: PropTypes.bool,

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
     * 对话框像素宽度
     * 默认值：`520`
     */
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        // 响应式
        PropTypes.shape({
            /**
             * 对应页面宽度<576px的响应式断点
             */
            xs: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string
            ]),
            /**
             * 对应页面宽度≥576px的响应式断点
             */
            sm: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string
            ]),
            /**
             * 对应页面宽度≥768px的响应式断点
             */
            md: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string
            ]),
            /**
             * 对应页面宽度≥992px的响应式断点
             */
            lg: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string
            ]),
            /**
             * 对应页面宽度≥1200px的响应式断点
             */
            xl: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string
            ]),
            /**
             * 对应页面宽度≥1600px的响应式断点
             */
            xxl: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string
            ])
        })
    ]),

    /**
     * 是否垂直居中显示对话框
     * 默认值：`false`
     */
    centered: PropTypes.bool,

    /**
     * 是否支持键盘esc关闭对话框
     * 默认值：`true`
     */
    keyboard: PropTypes.bool,

    /**
     * 是否显示右上角的关闭按钮
     * 默认值：`true`
     */
    closable: PropTypes.bool,

    /**
     * 是否显示背景遮罩
     * 默认值：`true`
     */
    mask: PropTypes.bool,

    /**
     * 是否允许点击遮罩层关闭对话框
     * 默认值：`true`
     */
    maskClosable: PropTypes.bool,

    /**
     * 是否点击确认按钮触发对话框关闭
     * 默认值：`true`
     */
    okClickClose: PropTypes.bool,

    /**
     * 是否阻止通过点击关闭图标、点击遮罩层区域、点击取消、按下ESC等方式自动触发的对话框关闭行为
     * 默认值：`false`
     */
    preventClose: PropTypes.bool,

    /**
     * 模态框z-index
     * 默认值：`1000`
     */
    zIndex: PropTypes.number,

    /**
     * 监听确认按钮累计点击次数
     * 默认值：`0`
     */
    okCounts: PropTypes.number,

    /**
     * 监听取消按钮累计点击次数
     * 默认值：`0`
     */
    cancelCounts: PropTypes.number,

    /**
     * 监听关闭按钮累计点击次数
     * 默认值：`0`
     */
    closeCounts: PropTypes.number,

    /**
     * 是否在每次确认按钮点击之后，自动更新`confirmLoading=true`
     * 默认值：`false`
     */
    confirmAutoSpin: PropTypes.bool,

    /**
     * 组件型，`confirmLoading=true`时，确认按钮的内容
     */
    loadingOkText: PropTypes.node,

    /**
     * 底部确认按钮是否处于加载中状态
     * 默认值：`false`
     */
    confirmLoading: PropTypes.bool,

    /**
     * 模态框显隐动画类型，可选项有`'none'`、`'fade'`、`'zoom'`、`'zoom-big'`、`'zoom-big-fast'`、`'slide-up'`、`'slide-down'`、`'slide-left'`、`'slide-right'`、`'move-up'`、`'move-down'`、`'move-left'`、`'move-right'`
     * 默认值：`'zoom'`
     */
    transitionType: PropTypes.oneOf([
        'none', 'fade', 'zoom', 'zoom-big', 'zoom-big-fast', 'slide-up',
        'slide-down', 'slide-left', 'slide-right', 'move-up', 'move-down', 'move-left', 'move-right'
    ]),

    /**
     * 是否在初始化模态框未显示时，强制渲染模态框内部元素
     * 默认值：`false`
     */
    forceRender: PropTypes.bool,

    /**
     * 是否在模态框关闭后自动销毁内部元素
     * 默认值：`true`
     */
    destroyOnClose: PropTypes.bool,

    /**
     * 是否整体渲染为加载中状态
     * 默认值：`false`
     */
    loading: PropTypes.bool,

    /**
     * 是否在模态框打开且未提供children内容时自动显示加载骨架，
     * 并在children到达后自动隐藏骨架
     * 默认值：`false`
     *
     * 用途：从后端（如Dash回调）异步注入内容时，避免手动切换loading。
     */
    autoLoading: PropTypes.bool,

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

export default AntdModal;