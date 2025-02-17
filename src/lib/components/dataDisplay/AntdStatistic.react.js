// react核心
import React from 'react';
import PropTypes from 'prop-types';
// antd核心
import { Statistic, Space, Tooltip } from 'antd';
import { QuestionCircleOutlined } from "@ant-design/icons";
// 辅助库
import { isString, isNumber } from 'lodash';
import { pickBy } from 'ramda';
import { useLoading } from '../utils';
// 自定义hooks
import useCss from '../../hooks/useCss';

/**
 * 统计数值组件AntdStatistic
 */
const AntdStatistic = ({
    id,
    className,
    style,
    key,
    value,
    showGroupSeparator = true,
    precision,
    prefix,
    suffix,
    title,
    titleTooltip,
    valueStyle,
    setProps,
    ...others
}) => {

    return (
        <Statistic
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

AntdStatistic.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 当前组件css样式
     */
    style: PropTypes.object,

    /**
     * 当前组件css类名，支持[动态css](/advanced-classname)
     */
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    /**
     * 支持组件型，要展示的数值
     */
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.node
    ]),

    /**
     * 是否为数值型`value`添加千分位符
     * 默认值：`true`
     */
    showGroupSeparator: PropTypes.bool,

    /**
     * 针对数值型`value`，设置数值精度
     */
    precision: PropTypes.number,

    /**
     * 组件型，数值前缀内容
     */
    prefix: PropTypes.node,

    /**
     * 组件型，数值后缀内容
     */
    suffix: PropTypes.node,

    /**
     * 组件型，标题内容
     */
    title: PropTypes.node,

    /**
     * 为标题内容添加额外鼠标悬停提示信息
     */
    titleTooltip: PropTypes.string,

    /**
     * 数值内容css样式
     */
    valueStyle: PropTypes.object,

    /**
     * `data-*`格式属性通配
     */
    'data-*': PropTypes.string,

    /**
     * `aria-*`格式属性通配
     */
    'aria-*': PropTypes.string,

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

export default AntdStatistic;