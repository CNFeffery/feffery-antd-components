// react核心
import React from 'react';
import PropTypes from 'prop-types';
// antd核心
import { ConfigProvider, App, theme } from 'antd';
import {
    // 默认主题
    defaultTheme,
    // 暗色主题
    darkTheme,
} from '@ant-design/compatible';
import { StyleProvider, legacyLogicalPropertiesTransformer } from '@ant-design/cssinjs'
// 辅助库
import { isUndefined, omitBy } from 'lodash';
// 自定义上下文
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

/**
 * 参数配置组件AntdConfigProvider
 */
const AntdConfigProvider = (props) => {
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

AntdConfigProvider.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 组件型，内嵌元素
     */
    children: PropTypes.node,

    /**
     * 为内部组件设置快捷主题算法，支持多种主题组合，可选项有`'default'`、`'dark'`、`'compact'`
     * 默认值：`'default'`
     */
    algorithm: PropTypes.oneOfType([
        PropTypes.oneOf(['default', 'dark', 'compact']),
        PropTypes.arrayOf(PropTypes.oneOf(['default', 'dark', 'compact']))
    ]),

    /**
     * 是否强制使用`0.3.x`版本之前的主题样式，可选项有`'default'`、`'dark'`
     */
    useOldTheme: PropTypes.oneOf(['default', 'dark']),

    /**
     * 主题色
     */
    primaryColor: PropTypes.string,

    /**
     * 是否针后代元素中的所有组件强制设置禁用状态
     */
    componentDisabled: PropTypes.bool,

    /**
     * 强制设置后代元素的尺寸规格，可选项有`'small'`、`'middle'`、`'large'`，其中`'default'`兼容`'middle'`
     */
    componentSize: PropTypes.oneOf(['small', 'middle', 'large']),

    /**
     * 强制设置后代元素的语言，可选项有`'zh-cn'`、`'en-us'`
     */
    locale: PropTypes.oneOf(['zh-cn', 'en-us']),

    /**
     * 是否禁用内部组件水波纹动效
     * 默认值：`false`
     */
    wavesDisabled: PropTypes.bool,

    /**
     * 配置`design token`相关参数
     */
    token: PropTypes.shape({
        /**
         * 是否开启动画效果
         * 默认值：`true`
         */
        motion: PropTypes.bool
    }),

    /**
     * 配置针对具体组件的`design token`相关参数
     */
    componentsToken: PropTypes.objectOf(
        PropTypes.shape({
            /**
             * 是否开启派生样式自动推导运算
             * 默认值：`false`
             */
            algorithm: PropTypes.bool
        })
    ),

    /**
     * 是否开启针对`88`及以下版本`Chromium`内核浏览器的向下兼容模式
     * 默认值：`false`
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