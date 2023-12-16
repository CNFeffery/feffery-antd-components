import React from 'react';
import useCss from '../../hooks/useCss';
import { isString } from 'lodash';
import { DraggablePanel } from '@ant-design/pro-editor/es/DraggablePanel';
import { propTypes, defaultProps } from '../../components/dataDisplay/AntdDraggablePanel.react';

// 定义可拖拽面板组件AntdDraggablePanel，api参数参考https://pro-editor.antdigital.dev/zh-CN/components/draggable-panel
const AntdDraggablePanel = (props) => {
    // 取得必要属性或参数
    let {
        id,
        children,
        style,
        className,
        key,
        mode,
        placement,
        minWidth,
        minHeight,
        maxWidth,
        maxHeight,
        expandable,
        isExpand,
        setProps,
        loading_state
    } = props;

    return (
        <DraggablePanel id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            mode={mode}
            placement={placement}
            minWidth={minWidth}
            minHeight={minHeight}
            maxWidth={maxWidth}
            maxHeight={maxHeight}
            expandable={expandable}
            isExpand={isExpand}
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