import React from 'react';
import PropTypes from 'prop-types';
import {
    defaultTheme,   // 默认主题
    darkTheme,      // 暗色主题
} from '@ant-design/compatible';
import { ConfigProvider, App, theme } from 'antd';
import { isUndefined, omitBy } from 'lodash';
import { StyleProvider, legacyLogicalPropertiesTransformer } from '@ant-design/cssinjs'
import PropsContext from '../../contexts/PropsContext';

const str2algorithm = new Map(
    [
        ['default', theme.defaultAlgorithm],
        ['dark', theme.darkAlgorithm],
        ['compact', theme.compactAlgorithm]
    ]
);

const str2oldTheme = new Map(
    [
        ['default', defaultTheme],
        ['dark', darkTheme]
    ]
)

// 定义参数配置组件AntdConfigProvider，api参数参考https://ant.design/components/tag-cn/
const AntdConfigProvider = (props) => {
    // 取得必要属性或参数
    let {
        id,
        children,
        key,
        algorithm,
        useOldTheme,
        primaryColor,
        componentDisabled,
        componentSize,
        locale,
        wavesDisabled,
        token,
        componentsToken,
        compatibilityMode,
        setProps,
        loading_state
    } = props;

    if (compatibilityMode) {
        return (
            <PropsContext.Provider
                value={
                    {
                        locale,
                        componentDisabled,
                        componentSize
                    }
                }
            >
                <StyleProvider hashPriority={'high'}
                    transformers={[legacyLogicalPropertiesTransformer]}>
                    <App notification={{
                        stack: false
                    }}>
                        <ConfigProvider id={id}
                            key={key}
                            theme={
                                useOldTheme ?
                                    str2oldTheme.get(useOldTheme) :
                                    {
                                        algorithm: (
                                            Array.isArray(algorithm) ?
                                                algorithm.map(e => str2algorithm.get(e)) :
                                                str2algorithm.get(algorithm)
                                        ),
                                        token: omitBy(
                                            {
                                                colorPrimary: primaryColor,
                                                ...token
                                            },
                                            isUndefined
                                        ),
                                        components: omitBy(
                                            {
                                                ...componentsToken
                                            },
                                            isUndefined
                                        )
                                    }
                            }
                            wave={{ disabled: wavesDisabled }}
                            data-dash-is-loading={
                                (loading_state && loading_state.is_loading) || undefined
                            }>
                            {children}
                        </ConfigProvider>
                    </App>
                </StyleProvider>
            </PropsContext.Provider>
        );
    }

    return (
        <PropsContext.Provider
            value={
                {
                    locale,
                    componentDisabled,
                    componentSize
                }
            }
        >
            <ConfigProvider id={id}
                key={key}
                theme={
                    useOldTheme ?
                        str2oldTheme.get(useOldTheme) :
                        {
                            algorithm: (
                                Array.isArray(algorithm) ?
                                    algorithm.map(e => str2algorithm.get(e)) :
                                    str2algorithm.get(algorithm)
                            ),
                            token: omitBy(
                                {
                                    colorPrimary: primaryColor,
                                    ...token
                                },
                                isUndefined
                            ),
                            components: omitBy(
                                {
                                    ...componentsToken
                                },
                                isUndefined
                            )
                        }
                }
                wave={{ disabled: wavesDisabled }}
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

    /**
     * 为内部组件设置快捷主题算法，支持多种主题组合，可选的主题有'default'、'dark'、'compact'
     * 默认：'default'
     */
    algorithm: PropTypes.oneOfType([
        PropTypes.oneOf(['default', 'dark', 'compact']),
        PropTypes.arrayOf(PropTypes.oneOf(['default', 'dark', 'compact']))
    ]),

    /**
     * 设置是否强制使用0.3.x版本之前的主题样式，可用的有'default'、'dark'
     */
    useOldTheme: PropTypes.oneOf(['default', 'dark']),

    // 自定义主色
    primaryColor: PropTypes.string,

    // 强制设置是否针对后台元素中的所有组件设置禁用状态
    componentDisabled: PropTypes.bool,

    // 强制设置后代元素的尺寸规格，可选的有'small'、'middle'、'large'
    // 其中'default'兼容'middle'
    componentSize: PropTypes.oneOf(['small', 'middle', 'large']),

    // 强制设置后代元素的语言，可选的有'zh-cn'、'en-us'
    locale: PropTypes.oneOf(['zh-cn', 'en-us']),

    /**
     * 设置是否禁用内部组件水波纹动效
     * 默认：false
     */
    wavesDisabled: PropTypes.bool,

    /**
     * 配置design token相关参数
     */
    token: PropTypes.shape({
        /**
         * 设置是否开启动画效果
         * 默认：true
         */
        motion: PropTypes.bool
    }),

    /**
     * 配置针对具体组件的design token相关参数
     */
    componentsToken: PropTypes.objectOf(
        PropTypes.shape({
            /**
             * 设置是否开启派生样式自动推导运算
             * 默认：false
             */
            algorithm: PropTypes.bool
        })
    ),

    /**
     * 是否开启针对88及以下版本Chromium内核浏览器的向下兼容模式
     * 默认：false
     */
    compatibilityMode: PropTypes.bool,

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
    algorithm: 'default',
    wavesDisabled: false,
    compatibilityMode: false
}

export default AntdConfigProvider;