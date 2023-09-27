import React from 'react';
import { Statistic } from 'antd';
import moment from 'moment';
import { isString } from 'lodash';
import useCss from '../../hooks/useCss';
import { propTypes, defaultProps } from '../../components/dataDisplay/AntdCountdown.react';

const { Countdown } = Statistic;

// 定义倒计时组件AntdCountdown，api参数参考https://ant.design/components/statistic-cn/
const AntdCountdown = (props) => {
    // 取得必要属性或参数
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
        loading_state
    } = props;

    return (
        <Countdown id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            value={moment(value, valueFormat)}
            format={format}
            prefix={prefix}
            suffix={suffix}
            title={titleTooltip ?
                <Space size={5}>
                    {title}
                    <AntdTooltip title={titleTooltip} >
                        <QuestionCircleOutlined />
                    </AntdTooltip>
                </Space>
                : title}
            valueStyle={valueStyle}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        />
    );
}

export default AntdCountdown;

AntdCountdown.defaultProps = defaultProps;
AntdCountdown.propTypes = propTypes;