import React from 'react';
import PropTypes from 'prop-types';
import { Typography, ConfigProvider } from 'antd';
import { str2Locale } from './locales.react';


const { Text } = Typography;

// 定义文字复制组件AntdCopyText，api参数参考https://ant.design/components/typography-cn/
const AntdCopyText = (props) => {
    // 取得必要属性或参数
    let {
        id,
        className,
        style,
        key,
        locale,
        text,
        beforeIcon,
        afterIcon,
        setProps,
        loading_state
    } = this.props;

    return (
        <ConfigProvider locale={str2Locale.get(locale)}>
            <Text id={id}
                className={className}
                style={style}
                key={key}
                copyable={{
                    text: text,
                    icon: [beforeIcon, afterIcon]
                }}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                } />
        </ConfigProvider>
    );
}

// 定义参数或属性
AntdCopyText.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 设置语言环境，可选的有'zh-cn'、'en-us'
    locale: PropTypes.oneOf(['zh-cn', 'en-us']),

    // 设置点击按钮后复制到粘贴板的文字内容
    text: PropTypes.string,

    // 定义复制之前的图标
    beforeIcon: PropTypes.node,

    // 定义复制之后的图标
    afterIcon: PropTypes.node,

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
AntdCopyText.defaultProps = {
    locale: 'zh-cn',
    text: ''
}

export default AntdCopyText;