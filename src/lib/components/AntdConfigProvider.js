import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ConfigProvider } from 'antd';
import PropsContext from '../contexts/PropsContext';

// 定义参数配置组件AntdConfigProvider，api参数参考https://ant.design/components/tag-cn/
const AntdConfigProvider = (props) => {
    // 取得必要属性或参数
    let {
        id,
        children,
        key,
        primaryColor,
        componentDisabled,
        componentSize,
        locale,
        setProps,
        loading_state
    } = props;

    useEffect(() => {
        ConfigProvider.config({
            theme: {
                primaryColor: primaryColor
            }
        })
    }, [primaryColor])

    return (
        <PropsContext.Provider
            value={
                {
                    locale
                }
            }
        >
            <ConfigProvider id={id}
                key={key}
                componentDisabled={componentDisabled}
                componentSize={componentSize}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }>
                {children}
            </ConfigProvider>
        </PropsContext.Provider>
    );
}

// 定义参数或属性
AntdConfigProvider.propTypes = {
    // 组件id
    id: PropTypes.string,

    children: PropTypes.node,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 自定义主色
    primaryColor: PropTypes.string,

    // 设置是否针对子元素所有组件强制开启禁用状态
    componentDisabled: PropTypes.bool,

    // 总体设置子元素的尺寸规格，可选的有'small'、'default'、'large'
    componentSize: PropTypes.oneOf(['small', 'default', 'large']),

    // 设置语言环境，可选的有'zh-cn'、'en-us'
    locale: PropTypes.oneOf(['zh-cn', 'en-us']),

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
AntdConfigProvider.defaultProps = {
}

export default AntdConfigProvider;