import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Statistic } from 'antd';
import moment from 'moment';
import { str2Icon } from './icons.react'
import 'antd/dist/antd.css';

const { Countdown } = Statistic;

// 定义倒计时组件AntdCountdown，api参数参考https://ant.design/components/statistic-cn/
export default class AntdCountdown extends Component {
    render() {
        // 取得必要属性或参数
        let {
            id,
            className,
            style,
            value,
            format,
            valueFormat,
            prefix,
            suffix,
            title,
            valueStyle,
            setProps,
            loading_state
        } = this.props;

        return (
            <Countdown id={id}
                className={className}
                style={style}
                value={moment(value, valueFormat)}
                format={format}
                prefix={
                    prefix ? (
                        prefix.mode === 'icon' ?
                            str2Icon.get(prefix.content) :
                            prefix.content
                    ) : null
                }
                suffix={
                    suffix ? (
                        suffix.mode === 'icon' ?
                            str2Icon.get(suffix.content) :
                            suffix.content
                    ) : null
                }
                title={title}
                valueStyle={valueStyle}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
            />
        );
    }
}

// 定义参数或属性
AntdCountdown.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 用于设置日期时间信息格式化显示的格式模板
    // 格式参考：https://momentjs.com/，如HH:mm:ss代表 时:分:秒
    format: PropTypes.string,

    // 设定截止日期时间字符串
    value: PropTypes.string,

    // 设定与截止日期时间字符串对应的格式化参数
    // 格式参考：https://momentjs.com/，如HH:mm:ss代表 时:分:秒
    valueFormat: PropTypes.string,

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