import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography, ConfigProvider } from 'antd';
import { str2Locale } from '../locales.react';
import { useCss } from 'react-use';
import { isString } from 'lodash';
import 'antd/dist/antd.css';
import { parseChildrenToArray } from '../utils';

const { Paragraph } = Typography;

// 定义段落组件AntdParagraph，api参数参考https://ant.design/components/typography-cn/
export default class AntdParagraph extends Component {
    render() {
        // 取得必要属性或参数
        let {
            id,
            children,
            className,
            style,
            key,
            locale,
            code,
            copyable,
            strikethrough,
            disabled,
            mark,
            strong,
            italic,
            underline,
            type,
            setProps,
            loading_state
        } = this.props;

        children = parseChildrenToArray(children)

        return (
            <ConfigProvider locale={str2Locale.get(locale)}>
                <Paragraph id={id}
                    className={
                        isString(className) ?
                            className :
                            useCss(className)
                    }
                    style={style}
                    key={key}
                    code={code}
                    copyable={copyable}
                    delete={strikethrough}
                    disabled={disabled}
                    mark={mark}
                    strong={strong}
                    italic={italic}
                    underline={underline}
                    type={type}
                    data-dash-is-loading={
                        (loading_state && loading_state.is_loading) || undefined
                    }>
                    {children}
                </Paragraph>
            </ConfigProvider>
        );
    }
}

// 定义参数或属性
AntdParagraph.propTypes = {
    // 组件id
    id: PropTypes.string,

    /**
     * The content of the tab - will only be displayed if this tab is selected
     */
    children: PropTypes.node,

    // css类名
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    // 自定义css字典
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 设置语言环境，可选的有'zh-cn'、'en-us'
    locale: PropTypes.oneOf(['zh-cn', 'en-us']),

    // 设置是否以code模式渲染内容
    code: PropTypes.bool,

    // 设置内容是否可快速复制
    copyable: PropTypes.bool,

    // 设置是否以删除线模式渲染内容
    strikethrough: PropTypes.bool,

    // 设置是否以禁用模式渲染内容
    disabled: PropTypes.bool,

    // 设置是否添加标记样式
    mark: PropTypes.bool,

    // 设置是否加粗
    strong: PropTypes.bool,

    // 设置是否斜体
    italic: PropTypes.bool,

    // 设置是否添加下划线
    underline: PropTypes.bool,

    // 设置文本状态类型渲染，可用的有'secondary'、'success'、'warning'和'danger'，默认无状态
    type: PropTypes.oneOf(['secondary', 'success', 'warning', 'danger']),

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
AntdParagraph.defaultProps = {
    locale: 'zh-cn'
}