import React from 'react';
import PropTypes from 'prop-types';
import { Empty, ConfigProvider } from 'antd';
import { str2Locale } from './locales.react';


const builtinImage = new Map([
    ['default', Empty.PRESENTED_IMAGE_DEFAULT],
    ['simple', Empty.PRESENTED_IMAGE_SIMPLE]
])

// 定义空状态组件AntdEmpty，api参数参考https://ant.design/components/empty-cn/
const AntdEmpty = (props) => {
    // 取得必要属性或参数
    let {
        id,
        children,
        className,
        style,
        key,
        locale,
        description,
        image,
        imageStyle,
        setProps,
        loading_state
    } = props;

    return (
        <ConfigProvider locale={str2Locale.get(locale)}>
            <Empty id={id}
                className={className}
                style={style}
                key={key}
                description={description} m
                image={builtinImage.get(image) || image}
                imageStyle={imageStyle}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                } >{children}</Empty>
        </ConfigProvider>
    );
}

// 定义参数或属性
AntdEmpty.propTypes = {
    // 组件id
    id: PropTypes.string,

    children: PropTypes.node,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 设置语言环境，可选的有'zh-cn'、'en-us'
    locale: PropTypes.oneOf(['zh-cn', 'en-us']),

    // 设置描述信息内容
    description: PropTypes.node,

    // 设置自定义图片的url地址，默认为内建图片
    image: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.oneOf([
            'default', 'simple'
        ])
    ]),

    // 设置自定义图片的css样式
    imageStyle: PropTypes.object,

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
AntdEmpty.defaultProps = {
    locale: 'zh-cn'
}

export default AntdEmpty;