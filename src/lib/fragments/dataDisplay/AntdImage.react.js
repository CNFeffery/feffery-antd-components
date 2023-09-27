import React, { useState, useContext } from 'react';
import useCss from '../../hooks/useCss';
import { isString } from 'lodash';
import { Image, ConfigProvider } from 'antd';
import { str2Locale } from '../../components/locales.react';
import PropsContext from '../../contexts/PropsContext';
import { propTypes, defaultProps } from '../../components/dataDisplay/AntdImage.react';

// 定义图片组件AntdImage，api参数参考https://ant.design/components/image-cn/
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

    const [visible, setVisible] = useState(false);

    // 多图片模式时
    if (Array.isArray(src)) {
        // 多图片折叠模式时
        if (multiImageMode === 'fold') {
            return (
                <ConfigProvider locale={str2Locale.get(locale)}>
                    <Image
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
                    <Image.PreviewGroup id={id}
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
                    preview={preview}
                />
            </ConfigProvider>
        );
    }
}

export default AntdImage;

AntdImage.defaultProps = defaultProps;
AntdImage.propTypes = propTypes;