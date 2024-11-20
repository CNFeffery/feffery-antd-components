// react核心
import React, { useCallback, useEffect, useState } from 'react';
// oceanbase design核心
import { DocDialog } from '@oceanbase/ui';
// 辅助库
import { isString } from 'lodash';
import { pickBy } from 'ramda';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 参数类型
import { propTypes, defaultProps } from '../../components/other/AntdDocDialog.react';

/**
 * 文档嵌入弹框组件AntdDocDialog
 */
const AntdDocDialog = (props) => {
    let {
        id,
        key,
        className,
        style,
        visible,
        title,
        defaultTop,
        embedConfig,
        normalConfig,
        docUrls,
        fallbackUrl,
        closeTimestamp,
        loading_state,
        setProps
    } = props;

    const [showDialog, setShowDialog] = useState(visible);

    const setVisible = useCallback(
        (payload) => {
            setShowDialog(payload);
            setProps({
                visible: false,
                closeTimestamp: new Date().getTime()
            })
        },
        [setShowDialog]
    );

    useEffect(() => {
        setShowDialog(visible);
    }, [visible]);

    return (
        <DocDialog
            // 提取具有data-*或aria-*通配格式的属性
            {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), props)}
            id={id}
            key={key}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            visible={showDialog}
            title={title}
            defaultTop={defaultTop}
            embedConfig={embedConfig}
            normalConfig={normalConfig}
            docUrls={docUrls}
            fallbackUrl={fallbackUrl}
            setVisible={setVisible}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        />
    );
}

export default AntdDocDialog;

AntdDocDialog.defaultProps = defaultProps;
AntdDocDialog.propTypes = propTypes;