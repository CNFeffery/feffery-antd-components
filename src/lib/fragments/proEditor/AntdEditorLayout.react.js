import React from 'react';
import useCss from '../../hooks/useCss';
import { isString, isBoolean } from 'lodash';
import { EditorLayout } from '@ant-design/pro-editor';
import { propTypes, defaultProps } from '../../components/proEditor/AntdEditorLayout.react';

// 定义编辑器布局组件AntdEditorLayout，api参数参考https://pro-editor.antdigital.dev/zh-CN/components/layout#apis
const AntdEditorLayout = (props) => {
    // 取得必要属性或参数
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