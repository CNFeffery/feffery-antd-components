// react核心
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
// antd核心
import { Modal } from 'antd';
import {
    CloseCircleFilled,
    CloseCircleOutlined,
    CloseCircleTwoTone,
} from '@ant-design/icons';
// 辅助库
import Draggable from 'react-draggable';
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { v4 as uuidv4 } from 'uuid';
import { useLoading } from '../utils';
// 自定义hooks
import useCss from '../../hooks/useCss';

/**
 * 弹出式卡片组件AntdPopupCard
 */
const AntdPopupCard = ({
    id,
    children,
    className,
    key,
    style,
    styles,
    classNames,
    visible = true,
    title,
    width,
    transitionType = 'fade',
    forceRender = false,
    destroyOnClose = true,
    closable = true,
    closeIconType = 'default',
    draggable = false,
    dragClassName,
    zIndex = 1000,
    loading = false,
    setProps,
    ...others
}) => {
    const [handleId, setHandleId] = useState(uuidv4().replace(/\d+/g, ''));
    const [disabled, setDisabled] = useState(false);
    const [bounds, setBounds] = useState({
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
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
            bottom: clientHeight - (targetRect.bottom - uiData.y),
        });
    };

    return (
        <Modal
            // 提取具有data-*或aria-*通配格式的属性
            {...pickBy(
                (_, k) => k.startsWith('data-') || k.startsWith('aria-'),
                others
            )}
            id={id}
            className={
                isString(className)
                    ? className
                    : className
                      ? useCss(className)
                      : undefined
            }
            style={style}
            styles={styles}
            classNames={classNames}
            key={key}
            title={
                <div
                    id={handleId}
                    className={
                        isString(dragClassName)
                            ? dragClassName
                            : dragClassName
                              ? useCss(dragClassName)
                              : undefined
                    }
                    style={{
                        width: '100%',
                        ...(dragClassName?.cursor
                            ? {}
                            : { cursor: draggable ? 'move' : 'inherit' }),
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
                    {closable ? (
                        closeIconType === 'outlined' ? (
                            <CloseCircleOutlined
                                style={{
                                    position: 'absolute',
                                    top: -12,
                                    right: -12,
                                    fontSize: 24,
                                    cursor: 'pointer',
                                }}
                                onClick={() => setProps({ visible: false })}
                            />
                        ) : closeIconType == 'two-tone' ? (
                            <CloseCircleTwoTone
                                style={{
                                    position: 'absolute',
                                    top: -12,
                                    right: -12,
                                    fontSize: 24,
                                    cursor: 'pointer',
                                }}
                                onClick={() => setProps({ visible: false })}
                            />
                        ) : (
                            <CloseCircleFilled
                                style={{
                                    position: 'absolute',
                                    top: -12,
                                    right: -12,
                                    fontSize: 24,
                                    cursor: 'pointer',
                                }}
                                onClick={() => setProps({ visible: false })}
                            />
                        )
                    ) : null}
                </div>
            }
            transitionName={
                transitionType === 'none' ? '' : `ant-${transitionType}`
            }
            forceRender={forceRender}
            destroyOnClose={destroyOnClose}
            width={width}
            open={visible}
            zIndex={zIndex}
            mask={false}
            maskClosable={false}
            closable={false}
            footer={false}
            wrapClassName={'ant-modal-wrap-overwrite'}
            modalRender={
                draggable
                    ? (modal) => (
                          <Draggable
                              disabled={disabled}
                              bounds={bounds}
                              handle={'#' + handleId}
                              onStart={(event, uiData) =>
                                  onStart(event, uiData)
                              }
                          >
                              <div ref={draggleRef}>{modal}</div>
                          </Draggable>
                      )
                    : undefined
            }
            loading={loading}
            data-dash-is-loading={useLoading()}
        >
            {children}
        </Modal>
    );
};

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
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

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
        footer: PropTypes.object,
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
        footer: PropTypes.string,
    }),

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
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * 卡片显隐动画类型，可选项有`'none'`、`'fade'`、`'zoom'`、`'zoom-big'`、`'zoom-big-fast'`、`'slide-up'`、`'slide-down'`、`'slide-left'`、`'slide-right'`、`'move-up'`、`'move-down'`、`'move-left'`、`'move-right'`
     * 默认值：`'zoom'`
     */
    transitionType: PropTypes.oneOf([
        'none',
        'fade',
        'zoom',
        'zoom-big',
        'zoom-big-fast',
        'slide-up',
        'slide-down',
        'slide-left',
        'slide-right',
        'move-up',
        'move-down',
        'move-left',
        'move-right',
    ]),

    /**
     * 是否在初始化卡片未显示时，强制渲染卡片内部元素
     * 默认值：`false`
     */
    forceRender: PropTypes.bool,

    /**
     * 是否在卡片关闭后自动销毁内部元素
     * 默认值：`true`
     */
    destroyOnClose: PropTypes.bool,

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
    dragClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

    /**
     * 弹出式卡片z-index
     * 默认值：`1000`
     */
    zIndex: PropTypes.number,

    /**
     * 是否整体渲染为加载中状态
     * 默认值：`false`
     */
    loading: PropTypes.bool,

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

export default AntdPopupCard;
