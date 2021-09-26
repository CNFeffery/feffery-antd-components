import React, { Component } from 'react';
import PropTypes from 'prop-types';
import zhCN from 'antd/lib/locale/zh_CN';
import { Modal, ConfigProvider } from 'antd';
import { str2Icon } from './icons.react'
import 'antd/dist/antd.css';

// 定义对话框部件AntdModal，api参数参考https://ant.design/components/modal-cn/
export default class AntdModal extends Component {
    render() {
        // 取得必要属性或参数
        const {
            id,
            children,
            className,
            style,
            setProps,
            title,
            visible,
            renderFooter,
            okText,
            cancelText,
            width,
            centered,
            keyboard,
            closable,
            mask,
            maskClosable,
            okCounts,
            cancelCounts,
            closeCounts,
            loading_state
        } = this.props;

        // 监听确认按钮点击事件
        const listenOk = () => {
            setProps({ visible: false, okCounts: okCounts + 1 })
        };

        // 监听取消按钮点击事件
        const listenCancel = () => {
            setProps({ visible: false, cancelCounts: cancelCounts + 1 })
        };

        // 监听关闭按钮点击事件
        const listenClose = () => {
            setProps({ closeCounts: closeCounts + 1 })
        };

        // 若设置了渲染底部按钮区内容
        if (renderFooter) {

            // 返回定制化的前端部件
            return (
                <ConfigProvider locale={zhCN}>
                    <Modal
                        id={id}
                        className={className}
                        style={style}
                        title={title?.content ?
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                {str2Icon.get(title.prefixIcon)}
                                {<span style={{ marginLeft: '5px' }}>{title.content}</span>}
                            </div> : title}
                        visible={visible}
                        okText={okText}
                        cancelText={cancelText}
                        width={width}
                        centered={centered}
                        keyboard={keyboard}
                        closable={closable}
                        mask={mask}
                        maskClosable={maskClosable}
                        onOk={listenOk}
                        onCancel={listenCancel}
                        afterClose={listenClose}
                        destroyOnClose={true}
                        data-dash-is-loading={
                            (loading_state && loading_state.is_loading) || undefined
                        }
                    >{children}</Modal>
                </ConfigProvider>
            );
        } else {
            // 返回定制化的前端部件
            return (
                <ConfigProvider locale={zhCN}>
                    <Modal
                        id={id}
                        className={className}
                        style={style}
                        title={title?.content ?
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                {str2Icon.get(title.prefixIcon)}
                                {<span style={{ marginLeft: '5px' }}>{title.content}</span>}
                            </div> : title}
                        visible={visible}
                        footer={null}
                        width={width}
                        centered={centered}
                        keyboard={keyboard}
                        closable={closable}
                        mask={mask}
                        maskClosable={maskClosable}
                        onOk={listenOk}
                        onCancel={listenCancel}
                        destroyOnClose={true}
                        afterClose={listenClose}
                        data-dash-is-loading={
                            (loading_state && loading_state.is_loading) || undefined
                        }
                    >{children}</Modal>
                </ConfigProvider>
            );
        }
    }
}

// 定义参数或属性
AntdModal.propTypes = {
    // 部件id
    id: PropTypes.string,

    // 内嵌文字的文本内容
    children: PropTypes.node,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

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

    // 设置标题内容
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.exact({
            // 设置标题文本内容
            content: PropTypes.string,

            // 设置前缀icon
            prefixIcon: PropTypes.string
        })
    ]),

    // 设置对话框是否可见
    visible: PropTypes.bool,

    // 设置确认按钮文字
    okText: PropTypes.string,

    // 设置取消按钮文字
    cancelText: PropTypes.string,

    // 设置是否渲染底部按钮区域
    renderFooter: PropTypes.bool,

    // 自定义对话框的像素宽度
    width: PropTypes.number,

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

    // 记录确认按钮被点击的次数
    okCounts: PropTypes.number,

    // 记录取消按钮被点击的次数
    cancelCounts: PropTypes.number,

    // 记录关闭按钮被点击的次数
    closeCounts: PropTypes.number,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

// 设置默认参数
AntdModal.defaultProps = {
    visible: false,
    okCounts: 0,
    cancelCounts: 0,
    closeCounts: 0
}
