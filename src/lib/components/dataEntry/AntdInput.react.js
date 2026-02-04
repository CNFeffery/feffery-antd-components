import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdInput = React.lazy(
    () =>
        import(
            /* webpackChunkName: "data_entry" */ '../../fragments/dataEntry/AntdInput.react'
        )
);

/**
 * 输入框组件AntdInput
 */
const AntdInput = ({
    id,
    className,
    style,
    styles,
    classNames,
    key,
    name,
    enableBatchControl = true,
    mode = 'default',
    passwordUseMd5 = false,
    autoComplete = 'on',
    placeholder,
    value,
    size = 'middle',
    addonBefore,
    addonAfter,
    prefix,
    suffix,
    allowClear = false,
    autoFocus = false,
    bordered = true,
    variant,
    defaultValue,
    disabled = false,
    maxLength,
    showCount = false,
    countFormat,
    nClicksSearch = 0,
    nSubmit = 0,
    status,
    autoSize = false,
    debounceWait = 0,
    readOnly,
    emptyAsNone = false,
    setProps,
    persistence,
    persisted_props,
    persistence_type,
    batchPropsNames = [],
    ...others
}) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdInput
                {...{
                    id,
                    className,
                    style,
                    styles,
                    classNames,
                    key,
                    name,
                    enableBatchControl,
                    mode,
                    passwordUseMd5,
                    autoComplete,
                    placeholder,
                    value,
                    size,
                    addonBefore,
                    addonAfter,
                    prefix,
                    suffix,
                    allowClear,
                    autoFocus,
                    bordered,
                    variant,
                    defaultValue,
                    disabled,
                    maxLength,
                    showCount,
                    countFormat,
                    nClicksSearch,
                    nSubmit,
                    status,
                    autoSize,
                    debounceWait,
                    readOnly,
                    emptyAsNone,
                    setProps,
                    persistence,
                    persisted_props,
                    persistence_type,
                    batchPropsNames,
                    ...others,
                }}
            />
        </Suspense>
    );
};

AntdInput.propTypes = {
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
     * 细分控制子元素css样式
     */
    styles: PropTypes.exact({
        /**
         * 控制文本框元素css样式
         */
        input: PropTypes.object,

        /**
         * 控制前缀容器css样式
         */
        prefix: PropTypes.object,

        /**
         * 控制后缀容器css样式
         */
        suffix: PropTypes.object,

        /**
         * 控制文字计数元素css样式
         */
        count: PropTypes.object,

        /**
         * 控制文本域元素css样式
         */
        textarea: PropTypes.object,
    }),

    /**
     * 细分控制子元素css类名
     */
    classNames: PropTypes.exact({
        /**
         * 控制文本框元素css类名
         */
        input: PropTypes.string,

        /**
         * 控制前缀容器css类名
         */
        prefix: PropTypes.string,

        /**
         * 控制后缀容器css类名
         */
        suffix: PropTypes.string,

        /**
         * 控制文字计数元素css类名
         */
        count: PropTypes.string,

        /**
         * 控制文本域元素css类名
         */
        textarea: PropTypes.string,
    }),

    /**
     * 配合`AntdForm`表单批量值搜集/控制功能使用，充当当前表单项的字段名，以`id`作为缺省值
     */
    name: PropTypes.string,

    /**
     * 控制当前组件是否参与有效的`AntdForm`表单批量值搜集/控制功能
     * 默认值：`true`
     */
    enableBatchControl: PropTypes.bool,

    /**
     * 输入框模式，可选项有`'default'`、`'search'`、`'text-area'`、`'password'`
     * 默认值：`'default'`
     */
    mode: PropTypes.oneOf(['default', 'search', 'text-area', 'password']),

    /**
     * 是否开启浏览器自带的自动补全功能，可选项有`'off'`、`'on'`
     * 默认值：`'on'`
     */
    autoComplete: PropTypes.oneOf(['off', 'on']),

    /**
     * 是否禁用当前组件
     * 默认值：`false`
     */
    disabled: PropTypes.bool,

    /**
     * 当前组件尺寸规格，可选项有`'small'`、`'middle'`、`'large'`
     * 默认值：`'middle'`
     */
    size: PropTypes.oneOf(['small', 'middle', 'large']),

    /**
     * 是否显示边框，设置为`true`时等价于`variant='outlined'`
     * 默认值：`true`
     */
    bordered: PropTypes.bool,

    /**
     * 形态变体类型，可选项有`'outlined'`、`'borderless'`、`'filled'`、`'underlined'`，其中`'outlined'`等价于`bordered=True`，但优先级更高
     */
    variant: PropTypes.oneOf([
        'outlined',
        'borderless',
        'filled',
        'underlined',
    ]),

    /**
     * 输入框占位文字内容
     */
    placeholder: PropTypes.string,

    /**
     * 监听或设置已输入值
     */
    value: PropTypes.string,

    /**
     * 初始化已输入值
     */
    defaultValue: PropTypes.string,

    /**
     * 针对`'password'`模式，是否启用md5加密功能
     * 默认值：`false`
     */
    passwordUseMd5: PropTypes.bool,

    /**
     * 当`passwordUseMd5=True`时，监听已输入值md5编码结果
     */
    md5Value: PropTypes.string,

    /**
     * 监听防抖版本的已输入值
     */
    debounceValue: PropTypes.string,

    /**
     * 防抖延时时长，单位：毫秒
     * 默认值：`0`
     */
    debounceWait: PropTypes.number,

    /**
     * 组件型，前置标签内容
     */
    addonBefore: PropTypes.node,

    /**
     * 组件型，后置标签内容
     */
    addonAfter: PropTypes.node,

    /**
     * 组件型，前缀内嵌内容
     */
    prefix: PropTypes.node,

    /**
     * 组件型，后缀内嵌内容
     */
    suffix: PropTypes.node,

    /**
     * 限制输入框最大可输入字符数量
     */
    maxLength: PropTypes.number,

    /**
     * 是否显示已输入字符计数
     * 默认值：`false`
     */
    showCount: PropTypes.bool,

    /**
     * 正则表达式，用于配合字符计数相关功能，自定义计数规则
     */
    countFormat: PropTypes.string,

    /**
     * 针对`'text-area'`模式，配置输入框高度自适应相关功能
     * 默认值：`false`
     */
    autoSize: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.exact({
            /**
             * 输入框最小行数
             */
            minRows: PropTypes.number,
            /**
             * 输入框最大行数
             */
            maxRows: PropTypes.number,
        }),
    ]),

    /**
     * 监听输入框聚焦状态下，键盘enter键累计点按次数
     * 默认值：`0`
     */
    nSubmit: PropTypes.number,

    /**
     * 针对`'search'`模式，监听搜索按钮累计点击次数
     * 默认值：`0`
     */
    nClicksSearch: PropTypes.number,

    /**
     * 控制校验状态，可选项有`'error'`、`'warning'`
     */
    status: PropTypes.oneOf(['error', 'warning']),

    /**
     * 是否允许一键清空已输入值
     * 默认值：`false`
     */
    allowClear: PropTypes.bool,

    /**
     * 是否自动获取焦点
     * 默认值：`false`
     */
    autoFocus: PropTypes.bool,

    /**
     * 监听输入框是否聚焦
     */
    focusing: PropTypes.bool,

    /**
     * 是否渲染为只读状态
     * 默认值：`false`
     */
    readOnly: PropTypes.bool,

    /**
     * 当输入框已输入值为空时，是否强制更新`value`为空值，从而统一空字符串与空值混合的情况
     * 默认值：`false`
     */
    emptyAsNone: PropTypes.bool,

    /**
     * 需要纳入[批量属性监听](/batch-props-values)的若干属性名
     */
    batchPropsNames: PropTypes.arrayOf(PropTypes.string),

    /**
     * 监听`batchPropsNames`中指定的若干属性值
     */
    batchPropsValues: PropTypes.object,

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

    /**
     * 是否开启[属性持久化](/prop-persistence)
     */
    persistence: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.number,
    ]),

    /**
     * 开启属性持久化功能的若干属性名，可选项有`'value'`、`'md5Value'`
     * 默认值：`['value', 'md5Value']`
     */
    persisted_props: PropTypes.arrayOf(PropTypes.oneOf(['value', 'md5Value'])),

    /**
     * 属性持久化存储类型，可选项有`'local'`（本地持久化），`'session'`（会话持久化），`'memory'`（内存持久化）
     * 默认值：`'local'`
     */
    persistence_type: PropTypes.oneOf(['local', 'session', 'memory']),
};

AntdInput.dashPersistence = {
    persisted_props: ['value', 'md5Value'],
    persistence_type: 'local',
};

export default AntdInput;

export const propTypes = AntdInput.propTypes;
export const defaultProps = AntdInput.defaultProps;
