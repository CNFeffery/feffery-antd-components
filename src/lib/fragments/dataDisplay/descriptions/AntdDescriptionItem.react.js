import React from 'react';
import { isString } from 'lodash';
import useCss from '../../../hooks/useCss';
import { parseChildrenToArray } from '../../../components/utils';
import { propTypes, defaultProps } from '../../../components/dataDisplay/descriptions/AntdDescriptionItem.react';

// 定义描述列表子项组件AntdDescriptionItem，api参数参考https://ant.design/components/descriptions-cn/
const AntdDescriptionItem = (props) => {
    // 取得必要属性或参数
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
        <div id={id}
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