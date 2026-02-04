import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdFormItem = React.lazy(
    () =>
        import(
            /* webpackChunkName: "data_entry" */ '../../../fragments/dataEntry/form/AntdFormItem.react'
        )
);

/**
 * 表单项组件AntdFormItem
 */
const AntdFormItem = ({
    id,
    children,
    className,
    style,
    key,
    labelCol,
    colon,
    wrapperCol,
    label,
    labelAlign,
    tooltip,
    extra,
    help,
    hidden = false,
    required = false,
    validateStatus,
    hasFeedback = false,
    layout,
    setProps,
    ...others
}) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdFormItem
                {...{
                    id,
                    children,
                    className,
                    style,
                    key,
                    labelCol,
                    colon,
                    wrapperCol,
                    label,
                    labelAlign,
                    tooltip,
                    extra,
                    help,
                    hidden,
                    required,
                    validateStatus,
                    hasFeedback,
                    layout,
                    setProps,
                    ...others,
                }}
            />
        </Suspense>
    );
};

AntdFormItem.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 组件型，内嵌相关常用表单输入类组件
     */
    children: PropTypes.node,

    /**
     * 当前组件css样式
     */
    style: PropTypes.object,

    /**
     * 当前组件css类名，支持[动态css](/advanced-classname)
     */
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

    /**
     * 是否显示表示必填项的额外“*”标识
     * 默认值：`false`
     */
    required: PropTypes.bool,

    /**
     * 配置表单项标签部分相关参数，优先级高于所属`AntdForm`中的`labelCol`参数
     */
    labelCol: PropTypes.exact({
        /**
         * 标签部分所占宽度份数（总份数24）
         */
        span: PropTypes.number,
        /**
         * 标签部分向右偏移宽度份数
         */
        offset: PropTypes.number,
        /**
         * 同css中的flex属性，用于更灵活的控制标签部分所占宽度
         */
        flex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),

    /**
     * 配置表单项控件部分相关参数，优先级高于所属`AntdForm`中的`labelCol`参数
     */
    wrapperCol: PropTypes.exact({
        /**
         * 控件部分所占宽度份数（总份数24）
         */
        span: PropTypes.number,
        /**
         * 控件部分向右偏移宽度份数
         */
        offset: PropTypes.number,
        /**
         * 同css中的flex属性，用于更灵活的控制控件部分所占宽度
         */
        flex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),

    /**
     * 当`layout='horizontal'`时，控制是否在表单项标签部分末尾添加冒号，优先级高于所属`AntdForm`中的`colon`参数
     */
    colon: PropTypes.bool,

    /**
     * 组件型，当前表单项标签内容
     */
    label: PropTypes.node,

    /**
     * 表单项标签部分文本对齐方式，可选项有`'left'`、`'right'`，优先级高于所属`AntdForm`中的`labelAlign`参数
     * 默认值：`'right'`
     */
    labelAlign: PropTypes.oneOf(['left', 'right']),

    /**
     * 组件型，当前表单项标签内容后的额外文字提示信息
     */
    tooltip: PropTypes.node,

    /**
     * 组件型，当前表单项额外提示信息
     */
    extra: PropTypes.node,

    /**
     * 控制校验状态，可选项有`'success'`、`'warning'`、`'error'`、`'validating'`
     */
    validateStatus: PropTypes.oneOf([
        'success',
        'warning',
        'error',
        'validating',
    ]),

    /**
     * 与`validateStatus`设定的状态对应，用于控制是否显示额外的状态图标
     * 默认值：`false`
     */
    hasFeedback: PropTypes.bool,

    /**
     * 组件型，与`validateStatus`状态一致的额外说明内容
     */
    help: PropTypes.node,

    /**
     * 是否隐藏当前字段
     * 默认值：`false`
     */
    hidden: PropTypes.bool,

    /**
     * 表单项布局模式，可选项有`'horizontal'`、`'vertical'`
     */
    layout: PropTypes.oneOf(['horizontal', 'vertical']),

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

export default AntdFormItem;

export const propTypes = AntdFormItem.propTypes;
export const defaultProps = AntdFormItem.defaultProps;
