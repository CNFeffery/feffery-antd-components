import React, { useEffect } from 'react';
import { QRCode, ConfigProvider } from 'antd';
import useCss from '../../hooks/useCss';
import { isString } from 'lodash';
import { str2Locale } from '../../components/locales.react';
import { propTypes, defaultProps } from '../../components/dataDisplay/AntdImage.react';


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

export default AntdQRCode;

AntdQRCode.defaultProps = defaultProps;
AntdQRCode.propTypes = propTypes;