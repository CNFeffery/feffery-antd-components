// react核心
import React, { useEffect } from 'react';
// antd核心
import { QRCode, ConfigProvider } from 'antd';
// 辅助库
import { isString } from 'lodash';
import { pickBy, equals } from 'ramda';
import { str2Locale } from '../../components/locales.react';
import { useLoading, loadingSelector } from '../../components/utils';
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
        ...others
    } = props;

    const ctx = window.dash_component_api.useDashContext();
    // 获取内部加载中组件信息
    const loading_info = ctx.useSelector(loadingSelector(ctx.componentPath), equals);

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
                {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), others)}
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
                status={
                    autoSpin && (loading_info.length > 0 && loading_info[0].property === 'value') ? 'loading' : status
                }
                onRefresh={() => setProps({ refreshClicks: refreshClicks + 1 })}
                data-dash-is-loading={useLoading()}
            />
        </ConfigProvider>
    );
}

export default AntdQRCode;

AntdQRCode.defaultProps = defaultProps;
AntdQRCode.propTypes = propTypes;