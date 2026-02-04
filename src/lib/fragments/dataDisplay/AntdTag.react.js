// react核心
import React from 'react';
// antd核心
import { Tag } from 'antd';
// 辅助库
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { useLoading } from '../../components/utils';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 参数类型
import {
    propTypes,
    defaultProps,
} from '../../components/dataDisplay/AntdTag.react';

/**
 * 标签组件AntdTag
 */
const AntdTag = (props) => {
    const {
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
        closeIcon,
        closeCounts,
        setProps,
        ...others
    } = props;

    return (
        <Tag
            // 提取具有data-*或aria-*通配格式的属性
            {...pickBy(
                (_, k) => k.startsWith('data-') || k.startsWith('aria-'),
                others
            )}
            id={id}
            key={key}
            className={
                isString(className)
                    ? className
                    : className
                      ? useCss(className)
                      : undefined
            }
            style={style}
            icon={icon}
            color={color}
            bordered={bordered}
            closeIcon={closeIcon}
            onClose={(e) => {
                // 阻止默认关闭事件
                e.preventDefault();
                setProps({
                    closeCounts: closeCounts + 1,
                });
            }}
            data-dash-is-loading={useLoading()}
        >
            {href ? (
                <a href={href} target={target}>
                    {content}
                </a>
            ) : (
                content
            )}
        </Tag>
    );
};

export default AntdTag;

AntdTag.defaultProps = defaultProps;
AntdTag.propTypes = propTypes;
