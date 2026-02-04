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
} from '../../components/dataDisplay/AntdCheckableTag.react';

const { CheckableTag } = Tag;

/**
 * 可选择标签AntdCheckableTag
 */
const AntdCheckableTag = (props) => {
    const {
        id,
        className,
        style,
        key,
        content,
        checkedContent,
        unCheckedContent,
        checked,
        setProps,
        ...others
    } = props;

    return (
        <CheckableTag
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
            checked={checked}
            onChange={(e) => setProps({ checked: e })}
            data-dash-is-loading={useLoading()}
        >
            {checked ? checkedContent || content : unCheckedContent || content}
        </CheckableTag>
    );
};

export default AntdCheckableTag;

AntdCheckableTag.defaultProps = defaultProps;
AntdCheckableTag.propTypes = propTypes;
