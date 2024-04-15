import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdForm = React.lazy(() => import(/* webpackChunkName: "data_entry" */ '../../../fragments/dataEntry/form/AntdForm.react'));

const AntdForm = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdForm {...props} />
        </Suspense>
    );
}

// 定义参数或属性
AntdForm.propTypes = {
    // 组件id
    id: PropTypes.string,

    /**
     * The content of the tab - will only be displayed if this tab is selected
     */
    children: PropTypes.node,

    // css类名
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    // 自定义css字典
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 设置表单布局模式，可选的有'horizontal'、'vertical'与'inline'，默认为'horizontal'
    layout: PropTypes.oneOf(['horizontal', 'vertical', 'inline']),

    // 设置表单项标签列宽相关属性，同AntdCol划分为24份宽度
    labelCol: PropTypes.exact({
        // 设置span宽度
        span: PropTypes.number,

        // 设置offset平移宽度
        offset: PropTypes.number,

        // 同css中的flex属性
        flex: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
    }),

    // 设置表单项列宽相关属性，同AntdCol划分为24份宽度
    wrapperCol: PropTypes.exact({
        // 设置span宽度
        span: PropTypes.number,

        // 设置offset平移宽度
        offset: PropTypes.number,

        // 同css中的flex属性
        flex: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
    }),

    // 设置是否显示表单项标签后的冒号，仅在layout='horizontal'下有效
    colon: PropTypes.bool,

    // 设置表单项标签的文本对齐方式，可选的有'left'与'right'，默认为'right'
    labelAlign: PropTypes.oneOf(['left', 'right']),

    // 设置超长表单项标签是否允许换行
    // 默认：false
    labelWrap: PropTypes.bool,

    /**
     * 设置默认的验证提示模板
     */
    validateMessages: PropTypes.exact({
        default: PropTypes.string,
        required: PropTypes.string,
        enum: PropTypes.string,
        whitespace: PropTypes.string,
        date: PropTypes.exact({
            format: PropTypes.string,
            parse: PropTypes.string,
            invalid: PropTypes.string
        }),
        types: PropTypes.exact({
            string: PropTypes.string,
            method: PropTypes.string,
            array: PropTypes.string,
            object: PropTypes.string,
            number: PropTypes.string,
            date: PropTypes.string,
            boolean: PropTypes.string,
            integer: PropTypes.string,
            float: PropTypes.string,
            regexp: PropTypes.string,
            email: PropTypes.string,
            url: PropTypes.string,
            hex: PropTypes.string
        }),
        string: PropTypes.exact({
            len: PropTypes.string,
            min: PropTypes.string,
            max: PropTypes.string,
            range: PropTypes.string
        }),
        number: PropTypes.exact({
            len: PropTypes.string,
            min: PropTypes.string,
            max: PropTypes.string,
            range: PropTypes.string
        }),
        array: PropTypes.exact({
            len: PropTypes.string,
            min: PropTypes.string,
            max: PropTypes.string,
            range: PropTypes.string
        }),
        pattern: PropTypes.exact({
            mismatch: PropTypes.string
        })
    }),

    /**
     * 统一设置字段触发验证的时机，可选值有onChange、onBlur、onFocus，默认为onChange
     */
    validateTrigger: PropTypes.oneOfType([
        PropTypes.oneOf([
            'onChange',
            'onBlur',
            'onFocus'
        ]),
        PropTypes.arrayOf(PropTypes.oneOf([
            'onChange',
            'onBlur',
            'onFocus'
        ]))
    ]),

    /**
     * 搜集内部表单输入类组件的输入值变化情况
     */
    values: PropTypes.object,

    /**
     * 设置表单默认值，只有初始化以及重置时生效
     */
    initialValues: PropTypes.object,

    /**
     * 监听搜集内部表单输入类组件的校验结果
     */
    formValidateStatus: PropTypes.bool,

    /**
     * 控制参数，用于提交表单时手动搜集表单的校验结果，回调设置为true后会自动变为false
     */
    submitForm: PropTypes.bool,

    /**
     * 辅助监听表单提交参数
     */
    submitFormClicks: PropTypes.number,

    /**
     * 控制参数，用于重置表单项校验状态（不能重置表单项包裹的组件的值，需要通过回调重置表单项包裹的组件的值），回调设置为true后会自动变为false
     */
    resetForm: PropTypes.bool,

    /**
     * 辅助监听表单重置参数
     */
    resetFormClicks: PropTypes.number,

    /**
     * 统一设置内部各AntdFormItem的validateStatus值，键为对应AntdFormItem的label值
     * 优先级低于各AntdFormItem的validateStatus值
     */
    validateStatuses: PropTypes.objectOf(
        PropTypes.oneOf([
            'success', 'warning', 'error', 'validating'
        ])
    ),

    /**
     * 统一设置内部各AntdFormItem的help值，键为对应AntdFormItem的label值
     * 优先级低于各AntdFormItem的help值
     */
    helps: PropTypes.objectOf(PropTypes.node),

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

const typeTemplate = '${label} is not a valid ${type}';

// 设置默认参数
AntdForm.defaultProps = {
    layout: 'horizontal',
    colon: true,
    labelAlign: 'right',
    labelWrap: false,
    validateMessages: {
        default: 'Field validation error for ${label}',
        required: 'Please enter ${label}',
        enum: '${label} must be one of [${enum}]',
        whitespace: '${label} cannot be a blank character',
        date: {
            format: '${label} date format is invalid',
            parse: '${label} cannot be converted to a date',
            invalid: '${label} is an invalid date',
        },
        types: {
            string: typeTemplate,
            method: typeTemplate,
            array: typeTemplate,
            object: typeTemplate,
            number: typeTemplate,
            date: typeTemplate,
            boolean: typeTemplate,
            integer: typeTemplate,
            float: typeTemplate,
            regexp: typeTemplate,
            email: typeTemplate,
            url: typeTemplate,
            hex: typeTemplate,
        },
        string: {
            len: '${label} must be ${len} characters',
            min: '${label} must be at least ${min} characters',
            max: '${label} must be up to ${max} characters',
            range: '${label} must be between ${min}-${max} characters',
        },
        number: {
            len: '${label} must be equal to ${len}',
            min: '${label} must be minimum ${min}',
            max: '${label} must be maximum ${max}',
            range: '${label} must be between ${min}-${max}',
        },
        array: {
            len: 'Must be ${len} ${label}',
            min: 'At least ${min} ${label}',
            max: 'At most ${max} ${label}',
            range: 'The amount of ${label} must be between ${min}-${max}',
        },
        pattern: {
            mismatch: '${label} does not match the pattern ${pattern}',
        },
    },
    submitForm: false,
    submitFormClicks: 0,
    resetForm: false,
    resetFormClicks: 0
}

export default AntdForm;

export const propTypes = AntdForm.propTypes;
export const defaultProps = AntdForm.defaultProps;