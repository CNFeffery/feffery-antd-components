import React from 'react';
import { Timeline } from 'antd';
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import useCss from '../../hooks/useCss';
import { propTypes, defaultProps } from '../../components/dataDisplay/AntdTimeline.react';

// 定义时间轴组件AntdTimeline，api参数参考https://ant.design/components/timeline-cn/
const AntdTimeline = (props) => {
    // 取得必要属性或参数
    let {
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
        loading_state
    } = props;

    return (
        <Timeline
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
            mode={mode}
            pending={pending}
            pendingDot={pendingDot}
            reverse={reverse}
            items={items.map(
                item => (
                    {
                        color: item.color,
                        dot: item.icon,
                        label: item.label,
                        children: item.content,
                        position: item.position
                    }
                )
            )}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        >
        </Timeline>
    );
}

export default AntdTimeline;

AntdTimeline.defaultProps = defaultProps;
AntdTimeline.propTypes = propTypes;