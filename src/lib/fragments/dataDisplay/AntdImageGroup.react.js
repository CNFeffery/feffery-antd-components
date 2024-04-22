import React, { useContext } from 'react';
import useCss from '../../hooks/useCss';
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { Image, ConfigProvider } from 'antd';
import { str2Locale } from '../../components/locales.react';
import PropsContext from '../../contexts/PropsContext';
import { propTypes, defaultProps } from '../../components/dataDisplay/AntdImageGroup.react';

// 定义图片组合组件AntdImageGroup，api参数参考https://ant.design/components/image-cn/
const AntdImageGroup = (props) => {
    let {
        id,
        children,
        className,
        style,
        key,
        locale,
        fallback,
        preview,
        visible,
        setProps,
        loading_state
    } = props;

    const context = useContext(PropsContext)
    locale = (context && context.locale) || locale

    return (
        <ConfigProvider locale={str2Locale.get(locale)}>
            <Image.PreviewGroup
                // 提取具有data-*或aria-*通配格式的属性
                {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), props)}
                id={id}
                style={style}
                className={
                    isString(className) ?
                        className :
                        (className ? useCss(className) : undefined)
                }
                key={key}
                fallback={fallback}
                preview={preview}
                visible={visible}
                onVisibleChange={(e) => setProps({ visible: e })}
            >
                {children}
            </Image.PreviewGroup>
        </ConfigProvider>
    );
}

export default AntdImageGroup;

AntdImageGroup.defaultProps = defaultProps;
AntdImageGroup.propTypes = propTypes;