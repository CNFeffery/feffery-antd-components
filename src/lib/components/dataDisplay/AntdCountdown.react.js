import React from 'react';
import PropTypes from 'prop-types';
import { Statistic } from 'antd';
import moment from 'moment';
import { isString } from 'lodash';
import useCss from '../../hooks/useCss';


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

// 定义参数或属性
AntdCountdown.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    // 自定义css字典
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 用于设置日期时间信息格式化显示的格式模板
    // 格式参考：https://momentjs.com/，如HH:mm:ss代表 时:分:秒
    format: PropTypes.string,

    // 设定截止日期时间字符串
    value: PropTypes.string,

    // 用于设置针对value进行格式化渲染的格式
    valueFormat: PropTypes.string,

    // 设置数值前缀内容，可选文字模式或图标模式
    prefix: PropTypes.node,

    // 设置数值后缀内容，可选文字模式或图标模式
    suffix: PropTypes.node,

    // 设置标题内容
    title: PropTypes.node,

    // 为title设置后缀的鼠标悬浮提示框内容，默认不设置则不渲染
    titleTooltip: PropTypes.string,

    // 设置数值的css样式
    valueStyle: PropTypes.object,

    loading_state: PropTypes.shape({
        /**
         * Determines if the component is loading or not
         */
        is_loading: PropTypes.bool,
        /**
         * Holds which property is loading
         */
        prop_name: PropTypes.string,
        /**
         * Holds the name of the component that is loading
         */
        component_name: PropTypes.string
    }),

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

// 设置默认参数
AntdCountdown.defaultProps = {
    valueFormat: 'YYYY-MM-DD hh:mm:ss'
}

export default AntdCountdown;