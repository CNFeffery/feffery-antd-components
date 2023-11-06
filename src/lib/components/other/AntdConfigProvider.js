import React from 'react';
import PropTypes from 'prop-types';
import { ConfigProvider, theme } from 'antd';
import { isUndefined, omitBy } from 'lodash';
import PropsContext from '../../contexts/PropsContext';

const str2algorithm = new Map(
    [
        ['default', theme.defaultAlgorithm],
        ['dark', theme.darkAlgorithm],
        ['compact', theme.compactAlgorithm]
    ]
);

// 定义参数配置组件AntdConfigProvider，api参数参考https://ant.design/components/tag-cn/
const AntdConfigProvider = (props) => {
    // 取得必要属性或参数
    let {
        id,
        children,
        key,
        algorithm,
        primaryColor,
        componentDisabled,
        componentSize,
        locale,
        setProps,
        loading_state
    } = props;

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
                    {
                        algorithm: (
                            Array.isArray(algorithm) ?
                                algorithm.map(e => str2algorithm.get(e)) :
                                str2algorithm.get(algorithm)
                        ),
                        token: omitBy(
                            {
                                colorPrimary: primaryColor
                            },
                            isUndefined
                        )
                    }
                }
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

    // 自定义主色
    primaryColor: PropTypes.string,

    // 强制设置是否针对后台元素中的所有组件设置禁用状态
    componentDisabled: PropTypes.bool,

    // 强制设置后代元素的尺寸规格，可选的有'small'、'middle'、'large'
    // 其中'default'兼容'middle'
    componentSize: PropTypes.oneOf(['small', 'middle', 'large']),

    // 强制设置后代元素的语言，可选的有'zh-cn'、'en-us'
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
    algorithm: 'default'
}

export default AntdConfigProvider;