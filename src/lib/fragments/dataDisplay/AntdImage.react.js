// react核心
import React, { useState, useContext } from 'react';
// antd核心
import { Image, ConfigProvider } from 'antd';
// 辅助库
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { str2Locale } from '../../components/locales.react';
import { useLoading } from '../../components/utils';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 上下文
import PropsContext from '../../contexts/PropsContext';
// 参数类型
import { propTypes, defaultProps } from '../../components/dataDisplay/AntdImage.react';

const defaultFallback = `data:image/png;base64,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`

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
        previewCurrent,
        previewVisible,
        preview,
        toolbarExtra,
        setProps,
        ...others
    } = props;

    const context = useContext(PropsContext)
    locale = (context && context.locale) || locale

    // 多图片模式时
    if (Array.isArray(src)) {
        // 多图片折叠模式时
        if (multiImageMode === 'fold') {
            return (
                <ConfigProvider locale={str2Locale.get(locale)}>
                    <Image
                        // 提取具有data-*或aria-*通配格式的属性
                        {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), others)}
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
                        src={src[0]} // 取第一张图片作为触发图片
                        fallback={fallback || defaultFallback}
                        onClick={() => setProps({ previewVisible: true })} // 点击触发图片进入多图浏览模式
                    />
                    <div style={{ display: 'none' }}>
                        <Image.PreviewGroup
                            preview={{
                                ...preview,
                                current: previewCurrent,
                                visible: previewVisible,
                                onChange: (e) => setProps({ previewCurrent: e }),
                                onVisibleChange: e => setProps({ previewVisible: e }),
                                toolbarRender: (originalNode) => {
                                    return {
                                        ...originalNode,
                                        props: {
                                            ...originalNode.props,
                                            children: (
                                                toolbarExtra ?
                                                    [
                                                        ...originalNode.props.children,
                                                        ...(Array.isArray(toolbarExtra) ? toolbarExtra : [toolbarExtra])
                                                    ] :
                                                    originalNode.props.children
                                            )
                                        }
                                    };
                                }
                            }}
                        >
                            {src.map(
                                item => <Image src={item} fallback={fallback || defaultFallback} />
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
                        {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), others)}
                        id={id}
                        style={style}
                        className={
                            isString(className) ?
                                className :
                                (className ? useCss(className) : undefined)
                        }
                        key={key}
                        preview={{
                            ...preview,
                            current: previewCurrent,
                            visible: previewVisible,
                            onChange: (e) => setProps({ previewCurrent: e }),
                            onVisibleChange: e => setProps({ previewVisible: e }),
                            toolbarRender: (originalNode) => {
                                return {
                                    ...originalNode,
                                    props: {
                                        ...originalNode.props,
                                        children: (
                                            toolbarExtra ?
                                                [
                                                    ...originalNode.props.children,
                                                    ...(Array.isArray(toolbarExtra) ? toolbarExtra : [toolbarExtra])
                                                ] :
                                                originalNode.props.children
                                        )
                                    }
                                };
                            }
                        }}
                    >
                        {
                            src.map(
                                item => <Image src={item}
                                    fallback={fallback || defaultFallback}
                                    width={width} // 统一宽度
                                    height={height} // 统一高度
                                />
                            )
                        }
                    </Image.PreviewGroup>
                </ConfigProvider>
            );
        }
    } else {
        return (
            <ConfigProvider locale={str2Locale.get(locale)}>
                <Image
                    // 提取具有data-*或aria-*通配格式的属性
                    {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), others)}
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
                    fallback={fallback || defaultFallback}
                    preview={
                        preview ?
                            {
                                ...preview,
                                current: previewCurrent,
                                visible: previewVisible,
                                onChange: (e) => setProps({ previewCurrent: e }),
                                onVisibleChange: e => setProps({ previewVisible: e }),
                                toolbarRender: (originalNode) => {
                                    return {
                                        ...originalNode,
                                        props: {
                                            ...originalNode.props,
                                            children: (
                                                toolbarExtra ?
                                                    [
                                                        ...originalNode.props.children,
                                                        ...(Array.isArray(toolbarExtra) ? toolbarExtra : [toolbarExtra])
                                                    ] :
                                                    originalNode.props.children
                                            )
                                        }
                                    };
                                }
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