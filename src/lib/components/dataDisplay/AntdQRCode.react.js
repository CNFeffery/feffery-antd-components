import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { QRCode, ConfigProvider } from 'antd';
import useCss from '../../hooks/useCss';
import { isString } from 'lodash';
import { str2Locale } from '../locales.react';

// 定义二维码组件AntdQRCode，api参数参考https://ant.design/components/collapse/#components-collapse-demo-accordion
const AntdQRCode = (props) => {
    let {
        id,
        className,
        style,
        key,
        locale,
        value,
        type,
        icon,
        size,
        iconSize,
        color,
        bgColor,
        bordered,
        errorLevel,
        status,
        expires,
        autoSpin,
        refreshClicks,
        setProps,
        loading_state
    } = props;

    console.log(loading_state)

    useEffect(() => {
        if (value && expires) {
            setTimeout(
                () => {
                    setProps({ status: 'expired' })
                },
                expires * 1000
            )
        }
    }, [value])

    return (
        <ConfigProvider
            locale={str2Locale.get(locale)}
        >
            <QRCode
                id={id}
                className={
                    isString(className) ?
                        className :
                        (className ? useCss(className) : undefined)
                }
                style={style}
                key={key}
                value={value}
                type={type}
                icon={icon}
                size={size}
                iconSize={iconSize}
                color={color}
                bgColor={bgColor}
                bordered={bordered}
                errorLevel={errorLevel}
                status={autoSpin && loading_state?.prop_name?.startsWith('value') ? 'loading' : status}
                onRefresh={() => setProps({ refreshClicks: refreshClicks + 1 })}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
            />
        </ConfigProvider>
    );
}

// 定义参数或属性
AntdQRCode.propTypes = {
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

    // 设置语言环境，可选的有'zh-cn'、'en-us'
    locale: PropTypes.oneOf(['zh-cn', 'en-us']),

    /**
     * 用于设置扫描后的文本
     */
    value: PropTypes.string,

    /**
     * 设置渲染类型，可选的有'canvas'、'primary'
     * 默认：'canvas'
     */
    type: PropTypes.oneOf(['canvas', 'svg']),

    /**
     * 用于设置二维码中图片的地址（目前只支持图片地址）
     */
    icon: PropTypes.string,

    /**
     * 设置二维码像素尺寸
     * 默认：160
     */
    size: PropTypes.number,

    /**
     * 设置二维码中图片的大小
     * 默认：40
     */
    iconSize: PropTypes.number,

    /**
     * 设置二维码颜色
     * 默认：'#000'
     */
    color: PropTypes.string,

    /**
     * 设置二维码背景颜色
     * 默认：'transparent'
     */
    bgColor: PropTypes.string,

    /**
     * 设置二维码是否有边框
     * 默认：true
     */
    bordered: PropTypes.bool,

    /**
     * 设置二维码纠错等级，可选的有'L'、'M'、'Q'、'H'
     * 默认：'M'
     */
    errorLevel: PropTypes.oneOf(['L', 'M', 'Q', 'H']),

    /**
     * 设置二维码状态，可选的有'active'、'expired'、'loading'
     * 默认：'active'
     */
    status: PropTypes.oneOf(['active', 'expired', 'loading']),

    /**
     * 设置当前二维码过期时间，单位：秒，到期后二维码状态将会被强制更新为'expired'
     */
    expires: PropTypes.number,

    /**
     * 是否在value处于回调更新中时，自动切换到loading状态
     * 默认：false
     */
    autoSpin: PropTypes.bool,

    /**
     * 监听当前"点击刷新"按钮累计点击次数，仅在status为'expired'时有意义
     */
    refreshClicks: PropTypes.number,

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
AntdQRCode.defaultProps = {
    locale: 'zh-cn',
    type: 'canvas',
    size: 160,
    iconSize: 40,
    color: '#000',
    bgColor: 'transparent',
    bordered: true,
    errorLevel: 'M',
    status: 'active',
    autoSpin: false,
    refreshClicks: 0
}

export default AntdQRCode;