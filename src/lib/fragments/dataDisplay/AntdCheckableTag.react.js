import React from 'react';
import useCss from '../../hooks/useCss';
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { Tag } from 'antd';
import { propTypes, defaultProps } from '../../components/dataDisplay/AntdCheckableTag.react';

const { CheckableTag } = Tag;

// 定义可选择标签AntdCheckableTag，api参数参考https://ant.design/components/tag-cn/
const AntdCheckableTag = (props) => {
    // 取得必要属性或参数
    let {
        id,
        className,
        style,
        key,
        content,
        checkedContent,
        unCheckedContent,
        checked,
        setProps,
        loading_state
    } = props;

    return (
        <CheckableTag
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
            checked={checked}
            onChange={(e) => setProps({ checked: e })}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }>
            {
                checked ? checkedContent || content : unCheckedContent || content
            }
        </CheckableTag>
    );
}

export default AntdCheckableTag;

AntdCheckableTag.defaultProps = defaultProps;
AntdCheckableTag.propTypes = propTypes;