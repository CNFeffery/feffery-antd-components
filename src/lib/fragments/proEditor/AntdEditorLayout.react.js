// react核心
import React from 'react';
// 辅助库
import { isString, isBoolean } from 'lodash';
// antd核心
import { EditorLayout } from '@ant-design/pro-editor';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 自定义上下文
import { propTypes, defaultProps } from '../../components/proEditor/AntdEditorLayout.react';

/**
 * 编辑器布局组件AntdEditorLayout
 */
const AntdEditorLayout = (props) => {
    let {
        id,
        style,
        className,
        header,
        footer,
        leftPannel,
        rightPannel,
        bottomPannel,
        centerPannel,
        type,
        themeType,
        setProps,
        loading_state
    } = props;

    return (
        <EditorLayout id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            header={
                (isBoolean(header) && !header) ?
                    header :
                    {
                        ...header,
                        iconConfig: {
                            title: header?.title || ''
                        }
                    }
            }
            footer={
                (isBoolean(footer) && !footer) ?
                    footer :
                    {
                        ...footer,
                        iconConfig: {
                            title: footer?.title || ''
                        }
                    }
            }
            leftPannel={leftPannel}
            rightPannel={rightPannel}
            bottomPannel={bottomPannel}
            centerPannel={centerPannel}
            type={type}
            themeType={themeType}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            } />
    );
}

export default AntdEditorLayout;

AntdEditorLayout.defaultProps = defaultProps;
AntdEditorLayout.propTypes = propTypes;