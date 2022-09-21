import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Statistic, Space } from 'antd';
import AntdTooltip from './AntdTooltip.react';
import AntdIcon from './AntdIcon.react';
import { useCss } from 'react-use';
import { isString } from 'lodash';
import { QuestionCircleOutlined } from "@ant-design/icons";
import 'antd/dist/antd.css';

// 定义统计数值组件AntdStatistic，api参数参考https://ant.design/components/statistic-cn/
export default class AntdStatistic extends Component {
    render() {
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
        } = this.props;

        return (
            <Statistic id={id}
                className={
                    isString(className) ?
                        className :
                        useCss(className)
                }
                style={style}
                key={key}
                value={value}
                groupSeparator={showGroupSeparator ? ',' : ''}
                precision={precision}
                prefix={
                    prefix ? (
                        prefix.mode === 'icon' ?
                            <AntdIcon icon={prefix.content} /> :
                            prefix.content
                    ) : null
                }
                suffix={
                    suffix ? (
                        suffix.mode === 'icon' ?
                            <AntdIcon icon={suffix.content} /> :
                            suffix.content
                    ) : null
                }
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
        PropTypes.string
    ]),

    // 设置是否为数值渲染千分位逗号标识符，默认为true
    showGroupSeparator: PropTypes.bool,

    // 设置数值精度，即小数点后位数
    precision: PropTypes.number,

    // 设置数值前缀内容，可选文字模式或图标模式
    prefix: PropTypes.exact({
        // 设置内容模式，'text'或不设置时代表文字模式
        // 'icon'时代表图标模式
        mode: PropTypes.oneOf([
            'text', 'icon'
        ]),

        // 当mode='text'时传入前缀文本内容
        // 当mode='icon'时传入前缀图标对应的icon别名
        // 同AntdIcon的icon参数
        content: PropTypes.string
    }),

    // 设置数值后缀内容，可选文字模式或图标模式
    suffix: PropTypes.exact({
        // 设置内容模式，'text'或不设置时代表文字模式
        // 'icon'时代表图标模式
        mode: PropTypes.oneOf([
            'text', 'icon'
        ]),

        // 当mode='text'时传入后缀文本内容
        // 当mode='icon'时传入后缀图标对应的icon别名
        // 同AntdIcon的icon参数
        content: PropTypes.string
    }),

    // 设置标题文字内容
    title: PropTypes.string,

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