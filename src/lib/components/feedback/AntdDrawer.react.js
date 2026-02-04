// react核心
import React from 'react';
import PropTypes from 'prop-types';
// antd核心
import { Drawer } from 'antd';
// 辅助库
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { useLoading } from '../utils';
// 自定义hooks
import useCss from '../../hooks/useCss';

/**
 * 抽屉组件AntdDrawer
 */
const AntdDrawer = ({
    id,
    children,
    className,
    style,
    rootStyle,
    classNames,
    styles,
    key,
    visible = false,
    title,
    placement = 'right',
    closable = true,
    forceRender = false,
    destroyOnClose = false,
    containerId,
    containerSelector,
    height = 256,
    mask = true,
    maskClosable = true,
    width = 256,
    zIndex = 1000,
    loading = false,
    extra,
    footer,
    setProps,
    ...others
}) => {
    const onClose = () => {
        setProps({ visible: false });
    };

    return (
        <Drawer
            // 提取具有data-*或aria-*通配格式的属性
            {...pickBy(
                (_, k) => k.startsWith('data-') || k.startsWith('aria-'),
                others
            )}
            id={id}
            key={key}
            className={
                isString(className)
                    ? className
                    : className
                      ? useCss(className)
                      : undefined
            }
            style={
                containerId || containerSelector
                    ? {
                          ...{ position: 'absolute' },
                          ...style,
                      }
                    : style
            }
            classNames={classNames}
            styles={styles}
            rootStyle={
                containerId || containerSelector
                    ? {
                          position: 'absolute',
                          ...rootStyle,
                      }
                    : rootStyle
            }
            open={visible}
            title={title}
            placement={placement}
            closable={closable}
            forceRender={forceRender}
            destroyOnClose={destroyOnClose}
            getContainer={
                containerId || containerSelector
                    ? containerId
                        ? () =>
                              document.getElementById(containerId) ||
                              document.body
                        : () => eval(containerSelector)
                    : undefined
            }
            height={height}
            mask={mask}
            maskClosable={maskClosable}
            width={width}
            zIndex={zIndex}
            loading={loading}
            extra={extra}
            footer={footer}
            onClose={onClose}
            data-dash-is-loading={useLoading()}
        >
            {children}
        </Drawer>
    );
};

AntdDrawer.propTypes = {
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
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

    /**
     * 配置各子元素的css类名
     */
    classNames: PropTypes.exact({
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
        footer: PropTypes.string,
        /**
         * 遮罩层元素css类名
         */
        mask: PropTypes.string,
        /**
         * 抽屉容器元素css类名
         */
        content: PropTypes.string,
    }),

    /**
     * 配置各子元素的css样式
     */
    styles: PropTypes.exact({
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
        footer: PropTypes.object,
        /**
         * 遮罩层元素css样式
         */
        mask: PropTypes.object,
        /**
         * 抽屉容器元素css样式
         */
        content: PropTypes.object,
    }),

    /**
     * 抽屉根节点css样式（包含遮罩层），特殊的，当设置了`containerId`或`containerSelector`时，该参数会自动设置`position`为`absolute`
     */
    rootStyle: PropTypes.object,

    /**
     * 监听或设置抽屉是否可见
     * 默认值：`false`
     */
    visible: PropTypes.bool,

    /**
     * 组件型，抽屉标题内容
     */
    title: PropTypes.node,

    /**
     * 抽屉弹出位置，可选项有`'left'`、`'right'`、`'top'`、`'bottom'`
     * 默认值：`'right'`
     */
    placement: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),

    /**
     * 是否显示关闭按钮
     * 默认值：`true`
     */
    closable: PropTypes.bool,

    /**
     * 是否对抽屉内的子元素进行预渲染
     * 默认值：`false`
     */
    forceRender: PropTypes.bool,

    /**
     * 是否在关闭时销毁抽屉内的子元素
     * 默认值：`false`
     */
    destroyOnClose: PropTypes.bool,

    /**
     * 抽屉像素宽度，`placement`为`'left'`、`'right'`时有效
     * 默认值：`256`
     */
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * 抽屉像素高度，`placement`为`'top'`、`'bottom'`时有效
     * 默认值：`256`
     */
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * 是否显示遮罩层
     * 默认值：`true`
     */
    mask: PropTypes.bool,

    /**
     * 是否允许点击遮罩区域关闭抽屉
     * 默认值：`true`
     */
    maskClosable: PropTypes.bool,

    /**
     * 抽屉整体`z-index`
     * 默认值：`1000`
     */
    zIndex: PropTypes.number,

    /**
     * 是否渲染为加载中状态
     * 默认值：`false`
     */
    loading: PropTypes.bool,

    /**
     * 组件型，额外操作区元素
     */
    extra: PropTypes.node,

    /**
     * 组件型，底部元素
     */
    footer: PropTypes.node,

    /**
     * 用于设置`position`为`relative`的局部容器id
     */
    containerId: PropTypes.string,

    /**
     * 当目标容器定位较为复杂时，可传入获取元素对应的js代码字符串，优先级低于`containerId`
     */
    containerSelector: PropTypes.string,

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
};

export default AntdDrawer;
