import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tag } from 'antd';
import 'antd/dist/antd.css';

// 定义标签部件AntdTag，api参数参考https://ant.design/components/tag-cn/
export default class AntdTag extends Component {
    render() {
        // 取得必要属性或参数
        let {
            id,
            className,
            style,
            content,
            color,
            href,
            target,
            setProps,
            loading_state
        } = this.props;

        return (
            <Tag id={id}
                className={className}
                style={style}
                color={color}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }>
                {href ? <a href={href} target={target}>{content}</a> : content}
            </Tag>
        );
    }
}

// 定义参数或属性
AntdTag.propTypes = {
    // 部件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 自定义标签内部文字内容
    content: PropTypes.string,

    // 直接设置标签颜色风格，除了内置的若干色彩主题之外，还可自行传入16进制格式的色彩值
    color: PropTypes.string,

    // 当标签充当跳转链接的作用时，设置对应的链接url
    href: PropTypes.string,

    // 当标签充当跳转链接的作用时，设置对应的连接跳转方式，默认为'_blank'
    target: PropTypes.string,

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
AntdTag.defaultProps = {
    content: '',
    target: '_blank'
}
