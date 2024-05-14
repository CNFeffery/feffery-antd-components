// react核心
import React from 'react';
// antd核心
import { Badge } from 'antd';
// 辅助库
import { isString } from 'lodash';
import { pickBy } from 'ramda';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 参数类型
import { propTypes, defaultProps } from '../../components/dataDisplay/AntdRibbon.react';

/**
 * 缎带组件AntdRibbon
 */
const AntdRibbon = (props) => {
    let {
        id,
        children,
        className,
        style,
        key,
        color,
        placement,
        text,
        loading_state,
        setProps
    } = props;

    return (
        <Badge.Ribbon
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
            color={color}
            placement={placement}
            text={text}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        >{children}</Badge.Ribbon>
    );
}

export default AntdRibbon;

AntdRibbon.defaultProps = defaultProps;
AntdRibbon.propTypes = propTypes;