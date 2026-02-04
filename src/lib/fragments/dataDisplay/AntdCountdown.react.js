// antd核心
import { Statistic, Space, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
// 辅助库
import dayjs from 'dayjs';
import { isString, isEqual } from 'lodash';
import { pickBy } from 'ramda';
import { useLoading } from '../../components/utils';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 参数类型
import {
    propTypes,
    defaultProps,
} from '../../components/dataDisplay/AntdCountdown.react';

const { Timer } = Statistic;

/**
 * 倒计时组件AntdCountdown
 */
const AntdCountdown = (props) => {
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
            type={'countdown'} // 指定类型为倒计时
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
            onFinish={() =>
                setProps({ finishEvent: { timestamp: Date.now() } })
            }
            data-dash-is-loading={useLoading()}
        />
    );
};

const preventUpdateProps = ['finishEvent'];

export default React.memo(AntdCountdown, (prevProps, nextProps) => {
    // 计算发生变化的参数名，并排除setProps属性
    const changedProps = Object.keys(nextProps).filter(
        (key) => !isEqual(prevProps[key], nextProps[key]) && key !== 'setProps'
    );

    // changedProps中全部变化的prop都在preventUpdateProps中声明时
    // 阻止本次重绘
    return changedProps.every((propName) =>
        preventUpdateProps.includes(propName)
    );
});

AntdCountdown.defaultProps = defaultProps;
AntdCountdown.propTypes = propTypes;
