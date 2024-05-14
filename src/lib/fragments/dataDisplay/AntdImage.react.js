// react核心
import React, { useState, useContext } from 'react';
// antd核心
import { Image, ConfigProvider } from 'antd';
// 辅助库
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { str2Locale } from '../../components/locales.react';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 上下文
import PropsContext from '../../contexts/PropsContext';
// 参数类型
import { propTypes, defaultProps } from '../../components/dataDisplay/AntdImage.react';

/**
 * 图片组件AntdImage
 */
const AntdImage = (props) => {
    let {
        id,
        className,
        style,
        key,
        locale,
        width,
        height,
        src,
        fallback,
        multiImageMode,
        preview,
        setProps,
        loading_state
    } = props;

    const context = useContext(PropsContext)
    locale = (context && context.locale) || locale

    const [visible, setVisible] = useState(preview?.visible || false);

    // 多图片模式时
    if (Array.isArray(src)) {
        // 多图片折叠模式时
        if (multiImageMode === 'fold') {
            return (
                <ConfigProvider locale={str2Locale.get(locale)}>
                    <Image
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
                        preview={{ visible: false }}
                        width={width}
                        height={height}
                        src={src[0]}
                        fallback={fallback}
                        onClick={() => setVisible(true)}
                    />
                    <div style={{ display: 'none' }}>
                        <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                            {src.map(
                                src_ => <Image src={src_} fallback={fallback} />
                            )}
                        </Image.PreviewGroup>
                    </div>
                </ConfigProvider>
            );
        } else {
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
                        key={key}>
                        {src.map(
                            src_ => <Image src={src_} fallback={fallback} width={width} height={height} />
                        )}
                    </Image.PreviewGroup>
                </ConfigProvider>
            );
        }
    } else {
        return (
            <ConfigProvider locale={str2Locale.get(locale)}>
                <Image
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
                    width={width}
                    height={height}
                    src={src}
                    fallback={fallback}
                    preview={
                        preview ?
                            {
                                ...preview,
                                visible: visible,
                                onVisibleChange: vis => setVisible(vis)
                            } :
                            false
                    }
                />
            </ConfigProvider>
        );
    }
}

export default AntdImage;

AntdImage.defaultProps = defaultProps;
AntdImage.propTypes = propTypes;