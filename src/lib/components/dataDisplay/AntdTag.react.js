import React from 'react';
import PropTypes from 'prop-types';
import useCss from '../../hooks/useCss';
import { isString } from 'lodash';
import { Tag } from 'antd';


// 定义标签组件AntdTag，api参数参考https://ant.design/components/tag-cn/
const AntdTag = (props) => {
    // 取得必要属性或参数
    let {
        id,
        className,
        style,
        key,
        content,
        color,
        href,
        target,
        bordered,
        setProps,
        loading_state
    } = props;

    return (
        <Tag id={id}
            key={key}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            color={color}
            bordered={bordered}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }>
            {href ? <a href={href} target={target}>{content}</a> : content}
        </Tag>
    );
}

// 定义参数或属性
AntdTag.propTypes = {
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

    // 自定义标签内部文字内容
    content: PropTypes.node,

    // 直接设置标签颜色风格，除了内置的若干色彩主题之外，还可自行传入16进制格式的色彩值
    color: PropTypes.string,

    // 当标签充当跳转链接的作用时，设置对应的链接url
    href: PropTypes.string,

    // 当标签充当跳转链接的作用时，设置对应的连接跳转方式，默认为'_blank'
    target: PropTypes.string,

    // 设置是否有边框，默认为true
    bordered: PropTypes.bool,

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
    target: '_blank',
    bordered: true
}

export default AntdTag;