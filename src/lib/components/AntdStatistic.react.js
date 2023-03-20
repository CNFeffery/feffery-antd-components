import React from 'react';
import PropTypes from 'prop-types';
import { Statistic, Space } from 'antd';
import AntdTooltip from './AntdTooltip.react';
import useCss from '../hooks/useCss';
import { isString, isNumber } from 'lodash';
import { QuestionCircleOutlined } from "@ant-design/icons";


// 定义统计数值组件AntdStatistic，api参数参考https://ant.design/components/statistic-cn/
const AntdStatistic = (props) => {
    // 取得必要属性或参数
    let {
        id,
        className,
        style,
        key,
        value,
        showGroupSeparator,
        precision,
        prefix,
        suffix,
        title,
        titleTooltip,
        valueStyle,
        setProps,
        loading_state
    } = props;

    return (
        <Statistic id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            value={isString(value) || isNumber(value) ? value : undefined}
            formatter={
                !(isString(value) || isNumber(value)) ? () => value : undefined
            }
            groupSeparator={showGroupSeparator ? ',' : ''}
            precision={precision}
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
AntdStatistic.propTypes = {
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

    // 设定要显示的数值
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.node
    ]),

    // 设置是否为数值渲染千分位逗号标识符，默认为true
    showGroupSeparator: PropTypes.bool,

    // 设置数值精度，即小数点后位数
    precision: PropTypes.number,

    // 设置数值前缀内容
    prefix: PropTypes.node,

    // 设置数值后缀内容，可选文字模式或图标模式
    suffix: PropTypes.node,

    // 设置标题文字内容
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
AntdStatistic.defaultProps = {
    showGroupSeparator: true
}

export default AntdStatistic;