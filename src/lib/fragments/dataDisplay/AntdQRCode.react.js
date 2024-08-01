// react核心
import React, { useEffect } from 'react';
// antd核心
import { QRCode, ConfigProvider } from 'antd';
// 辅助库
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { str2Locale } from '../../components/locales.react';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 参数类型
import { propTypes, defaultProps } from '../../components/dataDisplay/AntdQRCode.react';

/**
 * 二维码组件AntdQRCode
 */
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
                // 提取具有data-*或aria-*通配格式的属性
                {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), props)}
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

export default AntdQRCode;

AntdQRCode.defaultProps = defaultProps;
AntdQRCode.propTypes = propTypes;