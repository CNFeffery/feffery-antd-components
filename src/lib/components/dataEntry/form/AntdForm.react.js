import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdForm = React.lazy(() => import(/* webpackChunkName: "data_entry" */ '../../../fragments/dataEntry/form/AntdForm.react'));

/**
 * 表单组件AntdForm
 */
const AntdForm = ({
    id,
    children,
    className,
    style,
    key,
    labelCol,
    wrapperCol,
    colon = true,
    labelAlign = 'right',
    labelWrap = false,
    layout = 'horizontal',
    enableBatchControl = false,
    values,
    validateStatuses,
    helps,
    tooltips,
    setProps,
    ...others
}) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdForm {
                ...{
                    id,
                    children,
                    className,
                    style,
                    key,
                    labelCol,
                    wrapperCol,
                    colon,
                    labelAlign,
                    labelWrap,
                    layout,
                    enableBatchControl,
                    values,
                    validateStatuses,
                    helps,
                    tooltips,
                    setProps,
                    ...others
                }
            } />
        </Suspense>
    );
}

AntdForm.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 组件型，内嵌相关`AntdFormItem`组件或常用表单输入类组件
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
     * 表单布局模式，可选项有`'horizontal'`、`'vertical'`、`'inline'`
     * 默认值：`'horizontal'`
     */
    layout: PropTypes.oneOf(['horizontal', 'vertical', 'inline']),

    /**
     * 配置表单项标签部分相关参数
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
        flex: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
    }),

    /**
     * 配置表单项控件部分相关参数
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
        flex: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
    }),

    /**
     * 当`layput='horizontal'`时，控制是否在表单项标签部分末尾添加冒号
     */
    colon: PropTypes.bool,

    /**
     * 表单项标签部分文本对齐方式，可选项有`'left'`、`'right'`
     * 默认值：`'right'`
     */
    labelAlign: PropTypes.oneOf(['left', 'right']),

    /**
     * 针对超长表单项标签是否允许换行
     * 默认值：`false`
     */
    labelWrap: PropTypes.bool,

    /**
     * 是否启用表单批量控制功能，开启后会导致部分性能的损耗
     * 默认值：`false`
     */
    enableBatchControl: PropTypes.bool,

    /**
     * 当`enableBatchControl=True`时，可用于监听或设置搜集内部表单输入类组件的输入值变化情况，开启后内部表单输入类组件自身的`defaultValue`、`value`参数将会失效
     */
    values: PropTypes.object,

    /**
     * 当`enableBatchControl=True`时，可用于统一设置内部各`AntdFormItem`组件的`validateStatus`值，键为对应`AntdFormItem`组件的`label`值，优先级低于各`AntdFormItem`组件的`validateStatus`值
     */
    validateStatuses: PropTypes.objectOf(
        /**
         * 校验状态值，可选项有`'success'`、`'warning'`、`'error'`、`'validating'`
         */
        PropTypes.oneOf(['success', 'warning', 'error', 'validating'])
    ),

    /**
     * 当`enableBatchControl=True`时，可用于统一设置内部各`AntdFormItem`组件的`help`值，键为对应`AntdFormItem`组件的`label`值，优先级低于各`AntdFormItem`组件的`help`值
     */
    helps: PropTypes.objectOf(PropTypes.node),

    /**
     * 当`enableBatchControl=True`时，可用于统一设置内部各`AntdFormItem`组件的`tooltip`值，键为对应`AntdFormItem`组件的`label`值，优先级低于各`AntdFormItem`组件的`tooltip`值
     */
    tooltips: PropTypes.objectOf(PropTypes.node),

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

export default AntdForm;

export const propTypes = AntdForm.propTypes;
export const defaultProps = AntdForm.defaultProps;