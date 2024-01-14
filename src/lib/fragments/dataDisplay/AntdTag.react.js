import React from 'react';
import useCss from '../../hooks/useCss';
import { isString } from 'lodash';
import { Tag } from 'antd';
import { propTypes, defaultProps } from '../../components/dataDisplay/AntdTag.react';

// 定义标签组件AntdTag，api参数参考https://ant.design/components/tag-cn/
const AntdTag = (props) => {
    // 取得必要属性或参数
    let {
        id,
        className,
        style,
        key,
        content,
        icon,
        color,
        href,
        target,
        bordered,
        setProps,
        loading_state
    } = props;

    return (
        <Tag id={id}
            key={key}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            icon={icon}
            color={color}
            bordered={bordered}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }>
            {href ? <a href={href} target={target}>{content}</a> : content}
        </Tag>
    );
}

export default AntdTag;

AntdTag.defaultProps = defaultProps;
AntdTag.propTypes = propTypes;