import React from 'react';
import { Timeline } from 'antd';
import { isString } from 'lodash';
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
        <Timeline id={id}
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
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        >{items.map(
            item => (
                <Timeline.Item color={item.color}
                    dot={item.icon}
                    label={item.label}>
                    {item.content}
                </Timeline.Item>
            )
        )}
        </Timeline>
    );
}

export default AntdTimeline;

AntdTimeline.defaultProps = defaultProps;
AntdTimeline.propTypes = propTypes;