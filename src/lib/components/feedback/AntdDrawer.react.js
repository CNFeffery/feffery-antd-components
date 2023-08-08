import React from 'react';
import PropTypes from 'prop-types';
import useCss from '../../hooks/useCss';
import { isString } from 'lodash';
import { Drawer } from 'antd';


// 定义抽屉组件AntdDrawer，api参数参考https://ant.design/components/drawer-cn/
const AntdDrawer = (props) => {
    // 取得必要属性或参数
    let {
        id,
        children,
        className,
        style,
        drawerStyle,
        bodyStyle,
        contentWrapperStyle,
        headerStyle,
        footerStyle,
        maskStyle,
        key,
        visible,
        title,
        placement,
        closable,
        forceRender,
        destroyOnClose,
        containerId,
        containerSelector,
        height,
        mask,
        maskClosable,
        width,
        zIndex,
        extra,
        footer,
        setProps,
        loading_state
    } = props;

    const onClose = () => {
        setProps({ visible: false })
    }

    return (
        <Drawer
            id={id}
            key={key}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={
                containerId || containerSelector ?
                    {
                        ...{ position: 'absolute' },
                        ...style
                    } :
                    style
            }
            drawerStyle={drawerStyle}
            bodyStyle={bodyStyle}
            contentWrapperStyle={contentWrapperStyle}
            headerStyle={headerStyle}
            footerStyle={footerStyle}
            maskStyle={maskStyle}
            open={visible}
            title={title}
            placement={placement}
            closable={closable}
            forceRender={forceRender}
            destroyOnClose={destroyOnClose}
            getContainer={
                containerId || containerSelector ?
                    (
                        containerId ?
                            () => document.getElementById(containerId) || document.body :
                            () => eval(containerSelector)
                    ) :
                    undefined}
            height={height}
            mask={mask}
            maskClosable={maskClosable}
            width={width}
            zIndex={zIndex}
            extra={extra}
            footer={footer}
            onClose={onClose}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        >{children}
        </Drawer>
    );
}

// 定义参数或属性
AntdDrawer.propTypes = {
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

    // 设置抽屉弹出层的css样式
    drawerStyle: PropTypes.object,

    // 设置抽屉内容部分的css样式
    bodyStyle: PropTypes.object,

    // 设置抽屉包裹内容部分的css样式
    contentWrapperStyle: PropTypes.object,

    // 设置抽屉头部的css样式
    headerStyle: PropTypes.object,

    // 设置抽屉页脚的css样式
    footerStyle: PropTypes.object,

    // 设置抽屉遮罩部分的css样式
    maskStyle: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 设置抽屉是否弹出，默认为false
    visible: PropTypes.bool,

    // 设置抽屉的标题内容
    title: PropTypes.node,

    // 设置抽屉的弹出位置，可选的有'left'、'right'、'top'和'bottom'，默认为'right'
    placement: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),

    // 设置是否显示右上角关闭按钮，默认为true
    closable: PropTypes.bool,

    // 设置是否对抽屉内的子元素进行预渲染，默认为false
    forceRender: PropTypes.bool,

    // 设置是否在关闭时销毁抽屉内的子元素，默认为false
    destroyOnClose: PropTypes.bool,

    // 设置抽屉的像素宽度，默认为256
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),

    // 当placement为'top'或'bottom'时，用于设置抽屉的像素高度，默认为256
    height: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),

    // 设置是否在抽屉展开时，在空白区域显示蒙版，默认为true
    mask: PropTypes.bool,

    // 设置点击蒙版区域时是否可以直接关闭抽屉，默认为true
    maskClosable: PropTypes.bool,

    // 快捷设置抽屉整体的z-index，默认为1000
    zIndex: PropTypes.number,

    // 设置额外操作区元素
    extra: PropTypes.node,

    // 设置页脚部分元素
    footer: PropTypes.node,

    // 当想要对抽屉进行局部渲染时，用于设置position为relative的容器id
    containerId: PropTypes.string,

    // 当目标容器定位较为复杂时，可传入获取元素对应的js代码字符串
    // 优先级低于containerId
    containerSelector: PropTypes.string,

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
AntdDrawer.defaultProps = {
    visible: false,
    placement: 'right',
    closable: true,
    forceRender: false,
    destroyOnClose: false,
    width: 256,
    height: 256,
    mask: true,
    maskClosable: true,
    zIndex: 1000
}

export default AntdDrawer;