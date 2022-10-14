import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { str2Locale } from './locales.react';
import { Modal, ConfigProvider } from 'antd';
import 'antd/dist/antd.css';

// 定义对话框组件AntdModal，api参数参考https://ant.design/components/modal-cn/
export default class AntdModal extends Component {
    render() {
        // 取得必要属性或参数
        const {
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
            loading_state
        } = this.props;

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

        // 返回定制化的前端组件
        return (
            <ConfigProvider locale={str2Locale.get(locale)}>
                <Modal
                    id={id}
                    className={className}
                    style={style}
                    key={key}
                    title={title}
                    open={visible}
                    okText={confirmLoading ? (loadingOkText || okText) : okText}
                    cancelText={cancelText}
                    okButtonProps={okButtonProps}
                    cancelButtonProps={cancelButtonProps}
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
                    destroyOnClose={true}
                    data-dash-is-loading={
                        (loading_state && loading_state.is_loading) || undefined
                    }
                >{children}</Modal>
            </ConfigProvider>
        );
    }
}

// 定义参数或属性
AntdModal.propTypes = {
    // 组件id
    id: PropTypes.string,

    // 内嵌文字的文本内容
    children: PropTypes.node,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 设置语言环境，可选的有'zh-cn'、'en-us'
    locale: PropTypes.oneOf(['zh-cn', 'en-us']),

    // 设置标题内容
    title: PropTypes.node,

    // 设置对话框是否可见
    visible: PropTypes.bool,

    // 设置确认按钮文字
    okText: PropTypes.string,

    // 设置confirmLoading状态下按钮的文字内容
    loadingOkText: PropTypes.string,

    // 配置确认按钮相关参数
    okButtonProps: PropTypes.exact({
        // 设置按钮尺寸规格，可选的有'default'/'small'/'large'
        size: PropTypes.oneOf(['default', 'small', 'large']),

        // 设置按钮整体风格（可选项有primary、ghost、dashed、link、text、default）
        type: PropTypes.oneOf(['primary', 'ghost', 'dashed', 'link', 'text', 'default']),

        // 设置按钮是否显示为危险状态
        danger: PropTypes.bool
    }),

    // 设置取消按钮文字
    cancelText: PropTypes.string,

    // 配置取消按钮相关参数
    cancelButtonProps: PropTypes.exact({
        // 设置按钮尺寸规格，可选的有'default'/'small'/'large'
        size: PropTypes.oneOf(['default', 'small', 'large']),

        // 设置按钮整体风格（可选项有primary、ghost、dashed、link、text、default）
        type: PropTypes.oneOf(['primary', 'ghost', 'dashed', 'link', 'text', 'default']),

        // 设置按钮是否显示为危险状态
        danger: PropTypes.bool
    }),

    // 设置是否渲染底部按钮区域
    renderFooter: PropTypes.bool,

    // 自定义对话框的像素宽度
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),

    // 设置是否垂直居中显示对话框
    centered: PropTypes.bool,

    // 是否支持键盘esc关闭
    keyboard: PropTypes.bool,

    // 是否显示右上角的关闭按钮
    closable: PropTypes.bool,

    // 是否显示背景蒙版
    mask: PropTypes.bool,

    // 点击背景蒙版是否可以关闭对话框
    maskClosable: PropTypes.bool,

    // 设置点击确认按钮是否会触发对话框关闭，默认为true
    okClickClose: PropTypes.bool,

    // 设置模态框的zIndex，默认为1000
    zIndex: PropTypes.number,

    // 自定义mask遮罩css样式
    maskStyle: PropTypes.object,

    // 自定义模态框主体区域css样式
    bodyStyle: PropTypes.object,

    // 记录确认按钮被点击的次数
    okCounts: PropTypes.number,

    // 记录取消按钮被点击的次数
    cancelCounts: PropTypes.number,

    // 记录关闭按钮被点击的次数
    closeCounts: PropTypes.number,

    // 设置页脚中确认按钮是否处于加载中状态，默认为false
    confirmLoading: PropTypes.bool,

    // 设置是否在每次确认按钮点击之后，是否自动更新confirmLoading=true，从而配合回调
    // 实现回调运作中按钮无可点击的效果
    // 默认为false
    confirmAutoSpin: PropTypes.bool,

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
    okCounts: 0,
    cancelCounts: 0,
    closeCounts: 0,
    locale: 'zh-cn',
    okClickClose: true,
    confirmLoading: false,
    confirmAutoSpin: false
}
