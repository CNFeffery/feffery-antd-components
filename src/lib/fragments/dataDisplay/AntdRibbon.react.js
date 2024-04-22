import React from 'react';
import { Badge } from 'antd';
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import useCss from '../../hooks/useCss';
import { propTypes, defaultProps } from '../../components/dataDisplay/AntdRibbon.react';


// 定义缎带组件AntdRibbon，api参数参考https://ant.design/components/badge-cn/#Badge.Ribbon-(4.5.0+)
const AntdRibbon = (props) => {
    // 取得必要属性或参数
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