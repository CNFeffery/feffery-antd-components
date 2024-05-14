// react核心
import React from 'react';
// 辅助库
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { parseChildrenToArray } from '../../../components/utils';
// 自定义hooks
import useCss from '../../../hooks/useCss';
// 参数类型
import { propTypes, defaultProps } from '../../../components/dataDisplay/descriptions/AntdDescriptionItem.react';

/**
 * 描述列表子项组件AntdDescriptionItem
 */
const AntdDescriptionItem = (props) => {
    let {
        id,
        children,
        className,
        style,
        key,
        label,
        span,
        labelStyle,
        contentStyle,
        setProps,
        loading_state
    } = props;

    children = parseChildrenToArray(children)

    return (
        <div
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
            label={label}
            span={span}
            labelStyle={labelStyle}
            contentStyle={contentStyle}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }>
            {children}
        </div>
    );
}

export default AntdDescriptionItem;

AntdDescriptionItem.defaultProps = defaultProps;
AntdDescriptionItem.propTypes = propTypes;