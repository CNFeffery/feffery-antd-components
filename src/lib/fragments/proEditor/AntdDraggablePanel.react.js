// react核心
import React from 'react';
// 辅助库
import { isString } from 'lodash';
import { pickBy } from 'ramda';
// antd核心
import { DraggablePanel } from '@ant-design/pro-editor';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 参数类型
import { propTypes, defaultProps } from '../../components/proEditor/AntdDraggablePanel.react';

/**
 * 可拖拽面板组件AntdDraggablePanel
 */
const AntdDraggablePanel = (props) => {
    let {
        id,
        children,
        style,
        className,
        key,
        mode,
        defaultSize,
        defaultPosition,
        placement,
        minWidth,
        minHeight,
        maxWidth,
        maxHeight,
        resize,
        expandable,
        setProps,
        loading_state
    } = props;

    return (
        <DraggablePanel
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
            mode={mode}
            defaultSize={defaultSize}
            defaultPosition={defaultPosition}
            placement={placement}
            minWidth={minWidth}
            minHeight={minHeight}
            maxWidth={maxWidth}
            maxHeight={maxHeight}
            resize={resize}
            expandable={expandable}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            } >
            {children}
        </DraggablePanel>
    );
}

export default AntdDraggablePanel;

AntdDraggablePanel.defaultProps = defaultProps;
AntdDraggablePanel.propTypes = propTypes;