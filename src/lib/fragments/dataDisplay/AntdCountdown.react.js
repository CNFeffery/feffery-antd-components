// react核心
import React from 'react';
// antd核心
import { Statistic, Space, Tooltip } from 'antd';
import { QuestionCircleOutlined } from "@ant-design/icons";
// 辅助库
import dayjs from 'dayjs';
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { useLoading } from '../../components/utils';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 参数类型
import { propTypes, defaultProps } from '../../components/dataDisplay/AntdCountdown.react';

const { Countdown } = Statistic;

/**
 * 倒计时组件AntdCountdown
 */
const AntdCountdown = (props) => {
    let {
        id,
        className,
        style,
        key,
        value,
        valueFormat,
        format,
        prefix,
        suffix,
        title,
        titleTooltip,
        valueStyle,
        setProps,
        ...others
    } = props;

    return (
        <Countdown
            // 提取具有data-*或aria-*通配格式的属性
            {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), others)}
            id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            value={dayjs(value, valueFormat)}
            format={format}
            prefix={prefix}
            suffix={suffix}
            title={titleTooltip ?
                <Space size={5}>
                    {title}
                    <Tooltip title={titleTooltip} >
                        <QuestionCircleOutlined />
                    </Tooltip>
                </Space>
                : title}
            valueStyle={valueStyle}
            data-dash-is-loading={useLoading()}
        />
    );
}

export default AntdCountdown;

AntdCountdown.defaultProps = defaultProps;
AntdCountdown.propTypes = propTypes;