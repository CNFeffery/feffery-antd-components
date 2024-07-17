// react核心
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
// antd核心
import { Modal } from 'antd';
import {
    CloseCircleFilled,
    CloseCircleOutlined,
    CloseCircleTwoTone
} from "@ant-design/icons";
// 辅助库
import Draggable from "react-draggable";
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { v4 as uuidv4 } from 'uuid';
// 自定义hooks
import useCss from '../../hooks/useCss';

/**
 * 弹出式卡片组件AntdPopupCard
 */
const AntdPopupCard = (props) => {
    const {
        id,
        children,
        className,
        key,
        style,
        visible,
        title,
        width,
        transitionType,
        closable,
        closeIconType,
        draggable,
        dragClassName,
        zIndex,
        bodyStyle,
        setProps,
        loading_state
    } = props;

    const [handleId, setHandleId] = useState(uuidv4().replace(/\d+/g, ""));
    const [disabled, setDisabled] = useState(false);
    const [bounds, setBounds] = useState({
        left: 0,
        top: 0,
        bottom: 0,
        right: 0
    });
    const draggleRef = useRef(null);

    const onStart = (_event, uiData) => {
        const { clientWidth, clientHeight } = window.document.documentElement;
        const targetRect = draggleRef.current.getBoundingClientRect();

        if (!targetRect) {
            return;
        }

        setBounds({
            left: -targetRect.left + uiData.x,
            right: clientWidth - (targetRect.right - uiData.x),
            top: -targetRect.top + uiData.y,
            bottom: clientHeight - (targetRect.bottom - uiData.y)
        });
    };


    return (
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
            title={
                <div
                    id={handleId}
                    className={
                        isString(dragClassName) ?
                            dragClassName :
                            (dragClassName ? useCss(dragClassName) : undefined)
                    }
                    style={{
                        width: "100%",
                        ...(
                            dragClassName?.cursor ? {} : { cursor: draggable ? "move" : 'inherit' }
                        )
                    }}
                    onMouseOver={() => {
                        if (disabled) {
                            setDisabled(false);
                        }
                    }}
                    onMouseOut={() => {
                        setDisabled(true);
                    }}
                >
                    {title}
                    {
                        closable ?
                            closeIconType === "outlined" ?
                                (<CloseCircleOutlined
                                    style={{
                                        position: "absolute",
                                        top: -12,
                                        right: -12,
                                        fontSize: 24,
                                        cursor: "pointer"
                                    }}
                                    onClick={() => setProps({ visible: false })}
                                />) :
                                (
                                    closeIconType == 'two-tone' ?
                                        ((<CloseCircleTwoTone
                                            style={{
                                                position: "absolute",
                                                top: -12,
                                                right: -12,
                                                fontSize: 24,
                                                cursor: "pointer"
                                            }}
                                            onClick={() => setProps({ visible: false })}
                                        />)) :
                                        (<CloseCircleFilled
                                            style={{
                                                position: "absolute",
                                                top: -12,
                                                right: -12,
                                                fontSize: 24,
                                                cursor: "pointer"
                                            }}
                                            onClick={() => setProps({ visible: false })}
                                        />)
                                ) :
                            null
                    }
                </div>
            }
            transitionName={transitionType === 'none' ? '' : `ant-${transitionType}`}
            width={width}
            open={visible}
            zIndex={zIndex}
            bodyStyle={bodyStyle}
            mask={false}
            maskClosable={false}
            closable={false}
            footer={false}
            wrapClassName={'ant-modal-wrap-overwrite'}
            modalRender={
                draggable ? (modal) => (
                    <Draggable
                        disabled={disabled}
                        bounds={bounds}
                        handle={'#' + handleId}
                        onStart={(event, uiData) => onStart(event, uiData)}
                    >
                        <div ref={draggleRef}>{modal}</div>
                    </Draggable>
                ) : undefined}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        >{children}</Modal>
    );
}

AntdPopupCard.propTypes = {
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
     * 组件型，标题内容
     */
    title: PropTypes.node,

    /**
     * 设置或监听当前弹出式卡片是否显示
     * 默认值：`true`
     */
    visible: PropTypes.bool,

    /**
     * 弹出式卡片像素宽度
     */
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),

    /**
     * 卡片显隐动画类型，可选项有`'none'`、`'fade'`、`'zoom'`、`'zoom-big'`、`'slide-up'`、`'slide-down'`、`'move-up'`、`'move-down'`
     * 默认值：`'zoom'`
     */
    transitionType: PropTypes.oneOf([
        'none', 'fade', 'zoom', 'zoom-big', 'slide-up',
        'slide-down', 'move-up', 'move-down'
    ]),

    /**
     * 是否显示右上角的关闭按钮
     * 默认值：`true`
     */
    closable: PropTypes.bool,

    /**
     * 关闭按钮类型，可选项有`'default'`、`'outlined'`、`'two-tone'`
     * 默认值：`'default'`
     */
    closeIconType: PropTypes.oneOf(['default', 'outlined', 'two-tone']),

    /**
     * 是否可拖拽
     * 默认值：`false`
     */
    draggable: PropTypes.bool,

    /**
     * 顶部可拖拽区域css类名
     */
    dragClassName: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    /**
     * 弹出式卡片z-index
     * 默认值：`1000`
     */
    zIndex: PropTypes.number,

    /**
     * 内容区域css样式
     */
    bodyStyle: PropTypes.object,

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
    })
};

// 设置默认参数
AntdPopupCard.defaultProps = {
    transitionType: 'fade',
    closeIconType: 'default',
    draggable: false,
    visible: true,
    closable: true,
    zIndex: 1000
}

export default AntdPopupCard;