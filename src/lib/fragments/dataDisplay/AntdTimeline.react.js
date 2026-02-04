// react核心
import React from 'react';
// antd核心
import { Timeline } from 'antd';
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
} from '../../components/dataDisplay/AntdTimeline.react';

/**
 * 时间轴组件AntdTimeline
 */
const AntdTimeline = (props) => {
    const {
        id,
        className,
        style,
        key,
        items,
        mode,
        pending,
        pendingDot,
        reverse,
        setProps,
        ...others
    } = props;

    return (
        <Timeline
            // 提取具有data-*或aria-*通配格式的属性
            {...pickBy(
                (_, k) => k.startsWith('data-') || k.startsWith('aria-'),
                others
            )}
            id={id}
            className={
                isString(className)
                    ? className
                    : className
                      ? useCss(className)
                      : undefined
            }
            style={style}
            key={key}
            mode={mode}
            pending={pending}
            pendingDot={pendingDot}
            reverse={reverse}
            items={items.map((item) => ({
                color: item.color,
                dot: item.icon,
                label: item.label,
                children: item.content,
                position: item.position,
            }))}
            data-dash-is-loading={useLoading()}
        ></Timeline>
    );
};

export default AntdTimeline;

AntdTimeline.defaultProps = defaultProps;
AntdTimeline.propTypes = propTypes;
