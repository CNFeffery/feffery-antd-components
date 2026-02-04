// antd核心
import { Statistic, Space, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
// 辅助库
import dayjs from 'dayjs';
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { useLoading } from '../../components/utils';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 参数类型
import {
    propTypes,
    defaultProps,
} from '../../components/dataDisplay/AntdCountup.react';

const { Timer } = Statistic;

/**
 *正计时组件AntdCountup
 */
const AntdCountup = (props) => {
    const {
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
        <Timer
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
            type={'countup'} // 指定类型为正计时
            value={dayjs(value, valueFormat)}
            format={format}
            prefix={prefix}
            suffix={suffix}
            title={
                titleTooltip ? (
                    <Space size={5}>
                        {title}
                        <Tooltip title={titleTooltip}>
                            <QuestionCircleOutlined />
                        </Tooltip>
                    </Space>
                ) : (
                    title
                )
            }
            valueStyle={valueStyle}
            data-dash-is-loading={useLoading()}
        />
    );
};

export default AntdCountup;

AntdCountup.defaultProps = defaultProps;
AntdCountup.propTypes = propTypes;
