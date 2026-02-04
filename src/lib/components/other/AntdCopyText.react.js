// react核心
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
// antd核心
import { Typography, ConfigProvider } from 'antd';
// 辅助库
import { str2Locale } from '../locales.react';
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { useLoading } from '../utils';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 上下文
import PropsContext from '../../contexts/PropsContext';

const { Text } = Typography;

/**
 * 文字复制组件AntdCopyText
 */
const AntdCopyText = ({
    id,
    className,
    style,
    key,
    locale = 'zh-cn',
    text = '',
    format = 'text/plain',
    tooltips,
    beforeIcon,
    afterIcon,
    setProps,
    ...others
}) => {
    const context = useContext(PropsContext);
    locale = (context && context.locale) || locale;

    return (
        <ConfigProvider locale={str2Locale.get(locale)}>
            <Text
                // 提取具有data-*或aria-*通配格式的属性
                {...pickBy(
                    (_, k) => k.startsWith('data-') || k.startsWith('aria-'),
                    others
                )}
                id={id}
                className={
                    isString(className)
                        ? className
                        : className
                          ? useCss(className)
                          : undefined
                }
                style={style}
                key={key}
                copyable={{
                    text: text,
                    icon: [beforeIcon, afterIcon],
                    format: format,
                    tooltips: tooltips,
                }}
                data-dash-is-loading={useLoading()}
            />
        </ConfigProvider>
    );
};

AntdCopyText.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 当前组件css样式
     */
    style: PropTypes.object,

    /**
     * 当前组件css类名，支持[动态css](/advanced-classname)
     */
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

    /**
     * 组件文案语种，可选项有`'zh-cn'`（简体中文）、`'en-us'`（英语）、`'de-de'`（德语）、`'ru-ru'`（俄语）
     * 默认值：`'zh-cn'`
     */
    locale: PropTypes.oneOf(['zh-cn', 'en-us', 'de-de', 'ru-ru']),

    /**
     * 复制目标内容
     */
    text: PropTypes.string,

    /**
     * 剪切板内容的类型，可选项有`'text/plain'`、`text/html`
     * 默认值：`'text/plain'`
     */
    format: PropTypes.oneOf(['text/plain', 'text/html']),

    /**
     * 设置复制前后的文字提示内容，格式为`[复制前内容, 复制后内容]`，设置为`false`时关闭文字提示
     */
    tooltips: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.bool,
    ]),

    /**
     * 组件型，未复制状态图标
     */
    beforeIcon: PropTypes.node,

    /**
     * 组件型，完成复制状态图标
     */
    afterIcon: PropTypes.node,

    /**
     * `data-*`格式属性通配
     */
    'data-*': PropTypes.string,

    /**
     * `aria-*`格式属性通配
     */
    'aria-*': PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};

export default AntdCopyText;
