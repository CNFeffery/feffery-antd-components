// react核心
import { useContext } from 'react';
import PropTypes from 'prop-types';
// antd核心
import { Typography, ConfigProvider } from 'antd';
// 辅助库
import { str2Locale } from '../../locales.react';
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { parseChildrenToArray, useLoading } from '../../utils';
// 自定义hooks
import useCss from '../../../hooks/useCss';
// 自定义上下文
import PropsContext from '../../../contexts/PropsContext';

const { Paragraph } = Typography;

/**
 * 段落组件AntdParagraph
 */
const AntdParagraph = ({
    id,
    children,
    className,
    style,
    key,
    locale = 'zh-cn',
    code,
    copyable,
    strikethrough,
    disabled,
    mark,
    strong,
    italic,
    underline,
    type,
    ellipsis = false,
    setProps,
    ...others
}) => {

    const context = useContext(PropsContext)
    locale = (context && context.locale) || locale

    children = parseChildrenToArray(children)

    return (
        <ConfigProvider locale={str2Locale.get(locale)}>
            <Paragraph
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
                code={code}
                copyable={copyable}
                delete={strikethrough}
                disabled={disabled}
                mark={mark}
                strong={strong}
                italic={italic}
                underline={underline}
                type={type}
                ellipsis={ellipsis}
                data-dash-is-loading={useLoading()}>
                {children}
            </Paragraph>
        </ConfigProvider>
    );
}

AntdParagraph.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 组件型，内嵌元素
     */
    children: PropTypes.node,

    /**
     * 当前组件css样式
     */
    style: PropTypes.object,

    /**
     * 当前组件css类名，支持[动态css](/advanced-classname)
     */
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    /**
     * 组件文案语种，可选项有`'zh-cn'`（简体中文）、`'en-us'`（英语）、`'de-de'`（德语）、`'ru-ru'`（俄语）
     * 默认值：`'zh-cn'`
     */
    locale: PropTypes.oneOf(['zh-cn', 'en-us', 'de-de', 'ru-ru']),

    /**
     * 是否渲染为代码形式
     */
    code: PropTypes.bool,

    /**
     * 是否开启快捷复制功能
     */
    copyable: PropTypes.bool,

    /**
     * 是否渲染为删除线形式
     */
    strikethrough: PropTypes.bool,

    /**
     * 是否渲染为禁用形式
     */
    disabled: PropTypes.bool,

    /**
     * 是否渲染为高亮形式
     */
    mark: PropTypes.bool,

    /**
     * 是否渲染为加粗形式
     */
    strong: PropTypes.bool,

    /**
     * 是否渲染为斜体形式
     */
    italic: PropTypes.bool,

    /**
     * 是否渲染为下划线形式
     */
    underline: PropTypes.bool,

    /**
     * 设置内容特殊状态形式，可选项有`'secondary'`、`'success'`、`'warning'`、`'danger'`
     */
    type: PropTypes.oneOf(['secondary', 'success', 'warning', 'danger']),

    /**
     * 配置内容省略相关功能，设置为`false`则不开启
     * 默认值：`false`
     */
    ellipsis: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.exact({
            /**
             * 是否可展开
             */
            expandable: PropTypes.oneOfType([
                PropTypes.bool,
                PropTypes.oneOf(['collapsible'])
            ]),
            /**
             * 最大显示行数
             */
            rows: PropTypes.number,
            /**
             * 自定义内容省略后缀
             */
            suffix: PropTypes.string,
            /**
             * 组件型，自定义内容展开控件
             */
            symbol: PropTypes.node
        })
    ]),

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
    setProps: PropTypes.func
};

export default AntdParagraph;