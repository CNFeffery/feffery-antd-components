import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdMentions = React.lazy(() => import(/* webpackChunkName: "data_entry" */ '../../fragments/dataEntry/AntdMentions.react'));

/**
 * 提及组件AntdMentions
 */
const AntdMentions = ({
    id,
    className,
    style,
    popupClassName,
    key,
    name,
    autoSize = false,
    prefix = '@',
    value,
    defaultValue,
    placement = 'bottom',
    bordered = true,
    variant,
    placeholder,
    options,
    disabled = false,
    status,
    autoFocus = false,
    popupContainer,
    setProps,
    batchPropsNames = [],
    ...others
}) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdMentions {
                ...{
                    id,
                    className,
                    style,
                    popupClassName,
                    key,
                    name,
                    autoSize,
                    prefix,
                    value,
                    defaultValue,
                    placement,
                    bordered,
                    variant,
                    placeholder,
                    options,
                    disabled,
                    status,
                    autoFocus,
                    popupContainer,
                    setProps,
                    batchPropsNames,
                    ...others
                }
            } />
        </Suspense>
    );
}

AntdMentions.propTypes = {
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
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    /**
     * 展开菜单css类名
     */
    popupClassName: PropTypes.string,

    /**
     * 配合`AntdForm`表单批量值搜集/控制功能使用，充当当前表单项的字段名，以`id`作为缺省值
     */
    name: PropTypes.string,

    /**
     * 配置输入框高度自适应相关功能
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
            maxRows: PropTypes.number
        })
    ]),

    /**
     * 触发选择菜单展开的关键字
     * 默认值：`'@'`
     */
    prefix: PropTypes.string,

    /**
     * 监听或设置已输入值
     */
    value: PropTypes.string,

    /**
     * 初始化已输入值
     */
    defaultValue: PropTypes.string,

    /**
     * 必填，配置选择菜单子项
     */
    options: PropTypes.arrayOf(
        PropTypes.exact({
            /**
             * 组件型，当前选项标签内容
             */
            label: PropTypes.node,
            /**
             * 当前选项值
             */
            value: PropTypes.string
        })
    ).isRequired,

    /**
     * 监听输入内容中对应的已选子项值
     */
    selectedOptions: PropTypes.arrayOf(PropTypes.string),

    /**
     * 是否禁用当前组件
     * 默认值：`false`
     */
    disabled: PropTypes.bool,

    /**
     * 选择菜单弹出方向，可选项有`'top'`、`'bottom'`
     * 默认值：`'bottom'`
     */
    placement: PropTypes.oneOf(['top', 'bottom']),

    /**
     * 是否显示边框，设置为`true`时等价于`variant='outlined'`
     * 默认值：`true`
     */
    bordered: PropTypes.bool,

    /**
     * 形态变体类型，可选项有`'outlined'`、`'borderless'`、`'filled'`、`'underlined'`，其中`'outlined'`等价于`bordered=True`，但优先级更高
     */
    variant: PropTypes.oneOf(['outlined', 'borderless', 'filled', 'underlined']),

    /**
     * 输入框占位文字内容
     */
    placeholder: PropTypes.string,

    /**
     * 控制校验状态，可选项有`'error'`、`'warning'`
     */
    status: PropTypes.oneOf(['error', 'warning']),

    /**
     * 是否自动获取焦点
     * 默认值：`false`
     */
    autoFocus: PropTypes.bool,

    /**
     * 相关展开层锚定策略，可选项有`'parent'`、`'body'`
     * 默认值：`'body'`
     */
    popupContainer: PropTypes.oneOf(['parent', 'body']),

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
    setProps: PropTypes.func
};

export default AntdMentions;

export const propTypes = AntdMentions.propTypes;
export const defaultProps = AntdMentions.defaultProps;