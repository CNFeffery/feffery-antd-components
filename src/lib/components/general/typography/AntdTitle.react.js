// react核心
import { useContext } from 'react';
import PropTypes from 'prop-types';
// antd核心
import { Typography, ConfigProvider } from 'antd';
// 辅助库
import { isString } from 'lodash';
import { str2Locale } from '../../locales.react';
import { parseChildrenToArray } from '../../utils';
// 自定义hooks
import useCss from '../../../hooks/useCss';
// 自定义上下文
import PropsContext from '../../../contexts/PropsContext';

const { Title } = Typography;

/**
 * 标题组件AntdTitle
 */
const AntdTitle = (props) => {
    let {
        id,
        children,
        className,
        style,
        key,
        locale,
        level,
        code,
        copyable,
        strikethrough,
        disabled,
        mark,
        strong,
        italic,
        underline,
        type,
        keyboard,
        setProps,
        loading_state
    } = props;

    const context = useContext(PropsContext)
    locale = (context && context.locale) || locale

    children = parseChildrenToArray(children)

    return (
        <ConfigProvider locale={str2Locale.get(locale)}>
            <Title id={id}
                className={
                    isString(className) ?
                        className :
                        (className ? useCss(className) : undefined)
                }
                style={style}
                key={key}
                level={level}
                code={code}
                copyable={copyable}
                delete={strikethrough}
                disabled={disabled}
                mark={mark}
                strong={strong}
                italic={italic}
                underline={underline}
                type={type}
                keyboard={keyboard}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }>
                {children}
            </Title>
        </ConfigProvider>
    );
}

// 定义参数或属性
AntdTitle.propTypes = {
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
     * 组件文案语种，可选项有`'zh-cn'`、`'en-us'`
     * 默认值：`'zh-cn'`
     */
    locale: PropTypes.oneOf(['zh-cn', 'en-us']),

    /**
     * 标题级别，可选项有`1`、`2`、`3`、`4`、`5`
     * 默认值：`1`
     */
    level: PropTypes.number,

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
     * 是否渲染为键盘形式
     */
    keyboard: PropTypes.bool,

    /**
     * 设置内容特殊状态形式，可选项有`'secondary'`、`'success'`、`'warning'`、`'danger'`
     */
    type: PropTypes.oneOf(['secondary', 'success', 'warning', 'danger']),

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
AntdTitle.defaultProps = {
    locale: 'zh-cn',
    level: 1
}

export default AntdTitle;