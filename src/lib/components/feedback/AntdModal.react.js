// react核心
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
// antd核心
import { Modal, ConfigProvider } from 'antd';
// 辅助库
import { str2Locale } from '../locales.react';
import { isString } from 'lodash';
import { pickBy } from 'ramda';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 自定义上下文
import PropsContext from '../../contexts/PropsContext';

/**
 * 对话框组件AntdModal
 */
const AntdModal = (props) => {
    let {
        id,
        children,
        className,
        key,
        style,
        locale,
        setProps,
        title,
        visible,
        renderFooter,
        okButtonProps,
        cancelButtonProps,
        okText,
        loadingOkText,
        cancelText,
        width,
        centered,
        keyboard,
        closable,
        mask,
        maskClosable,
        okClickClose,
        zIndex,
        maskStyle,
        bodyStyle,
        okCounts,
        cancelCounts,
        closeCounts,
        confirmLoading,
        confirmAutoSpin,
        transitionType,
        destroyOnClose,
        loading_state
    } = props;

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
        setProps({ visible: false, cancelCounts: cancelCounts + 1 })
    };

    // 监听关闭按钮点击事件
    const listenClose = () => {
        setProps({ closeCounts: closeCounts + 1 })
    };

    
    return (
        <ConfigProvider locale={str2Locale.get(locale)}>
            <Modal
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
                maskStyle={maskStyle}
                bodyStyle={bodyStyle}
                onOk={listenOk}
                onCancel={listenCancel}
                afterClose={listenClose}
                footer={renderFooter ? undefined : null}
                confirmLoading={confirmLoading}
                destroyOnClose={destroyOnClose}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
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
     * 组件文案语种，可选项有`'zh-cn'`、`'en-us'`
     * 默认值：`'zh-cn'`
     */
    locale: PropTypes.oneOf(['zh-cn', 'en-us']),

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
        PropTypes.string
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
     * 模态框z-index
     * 默认值：`1000`
     */
    zIndex: PropTypes.number,

    /**
     * 遮罩层css样式
     */
    maskStyle: PropTypes.object,

    /**
     * 内容区域css样式
     */
    bodyStyle: PropTypes.object,

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
     * 卡片显隐动画类型，可选项有`'fade'`、`'zoom'`、`'zoom-big'`、`'zoom-big-fast'`、`'zoom-up'`、`'zoom-down'`、`'zoom-left'`、`'zoom-right'`、`'slide-up'`、`'slide-down'`、`'slide-left'`、`'slide-right'`、`'move-up'`、`'move-down'`、`'move-left'`、`'move-right'`
     * 默认值：`'zoom'`
     */
    transitionType: PropTypes.oneOf([
        'none', 'fade', 'zoom', 'zoom-big', 'zoom-big-fast', 'slide-up',
        'slide-down', 'slide-left', 'slide-right', 'move-up', 'move-down',
        'move-left', 'move-right'
    ]),

    /**
     * 是否在模态框关闭后自动销毁内部元素
     * 默认值：`true`
     */
    destroyOnClose: PropTypes.bool,

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
    setProps: PropTypes.func,

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
};

// 设置默认参数
AntdModal.defaultProps = {
    visible: false,
    renderFooter: false,
    width: 520,
    centered: false,
    keyboard: true,
    closable: true,
    mask: true,
    maskClosable: true,
    okClickClose: true,
    zIndex: 1000,
    okCounts: 0,
    cancelCounts: 0,
    closeCounts: 0,
    confirmLoading: false,
    confirmAutoSpin: false,
    transitionType: 'zoom',
    destroyOnClose: true,
    locale: 'zh-cn'
}

export default AntdModal;