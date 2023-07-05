import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import {
    CloseCircleFilled,
    CloseCircleOutlined,
    CloseCircleTwoTone
} from "@ant-design/icons";
import Draggable from "react-draggable";
import { isString } from 'lodash';
import useCss from '../hooks/useCss';
import { v4 as uuidv4 } from 'uuid';

// 定义弹出卡片组件AntdPopupCard，api参数参考https://ant.design/components/modal-cn/
const AntdPopupCard = (props) => {
    // 取得必要属性或参数
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

    // 返回定制化的前端组件
    return (
        <Modal
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

// 定义参数或属性
AntdPopupCard.propTypes = {
    // 组件id
    id: PropTypes.string,

    // 内嵌文字的文本内容
    children: PropTypes.node,

    // css类名
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    // 自定义css字典
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 设置标题内容
    title: PropTypes.node,

    // 设置&记录当前弹出卡片是否可见，默认为true
    visible: PropTypes.bool,

    // 自定义对话框的像素宽度
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),

    // 设置卡片显隐动画类型，可选的有'fade'、'zoom'、'zoom-big'、'zoom-big-fast'、'zoom-up'、
    // 'zoom-down'、'zoom-left'、'zoom-right'、'slide-up'、'slide-down'、'slide-left'、
    // 'slide-right'、'move-up'、'move-down'、'move-left'、'move-right'
    transitionType: PropTypes.oneOf([
        'none', 'fade', 'zoom', 'zoom-big', 'zoom-big-fast', 'slide-up',
        'slide-down', 'slide-left', 'slide-right', 'move-up', 'move-down',
        'move-left', 'move-right'
    ]),

    // 设置是否渲染关闭按钮，默认为true
    closable: PropTypes.bool,

    // 设置关闭按钮类型，可选的有'default'、'outlined'、'two-tone'
    closeIconType: PropTypes.oneOf(['default', 'outlined', 'two-tone']),

    // 设置是否可拖拽，默认为false
    draggable: PropTypes.bool,

    // 设置标题拖拽区域的css类名
    dragClassName: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    // 设置弹出卡片的zIndex，默认为1000
    zIndex: PropTypes.number,

    // 自定义弹出卡片主体区域css样式
    bodyStyle: PropTypes.object,

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