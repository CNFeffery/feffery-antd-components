import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdFormItem = React.lazy(() => import(/* webpackChunkName: "data_entry" */ '../../../fragments/dataEntry/form/AntdFormItem.react'));

const AntdFormItem = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdFormItem {...props} />
        </Suspense>
    );
}

// 定义参数或属性
AntdFormItem.propTypes = {
    /**
     * 组件id
     */
    id: PropTypes.string,

    /**
     * The content of the tab - will only be displayed if this tab is selected
     */
    children: PropTypes.node,

    /**
     * css类名
     */
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    /**
     * 自定义css字典
     */
    style: PropTypes.object,

    /**
     * 辅助刷新用唯一标识key值
     */
    key: PropTypes.string,

    /**
     * 设置是否为标签添加必填*标识，默认为false
     */
    required: PropTypes.bool,

    /**
     * 设置表单项标签列宽相关属性，同AntdCol划分为24份宽度，优先级高于AntdForm
     */
    labelCol: PropTypes.exact({
        /**
         * 设置span宽度
         */
        span: PropTypes.number,

        /**
         * 设置offset平移宽度
         */
        offset: PropTypes.number,

        /**
         * 同css中的flex属性
         */
        flex: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
    }),

    /**
     * 配合label参数，表示是否显示label后面的冒号，默认为true
     */
    colon: PropTypes.bool,

    /**
     * 设置表单项列宽相关属性，同AntdCol划分为24份宽度，优先级高于AntdForm
     */
    wrapperCol: PropTypes.exact({
        /**
         * 设置span宽度
         */
        span: PropTypes.number,

        /**
         * 设置offset平移宽度
         */
        offset: PropTypes.number,

        /**
         * 同css中的flex属性
         */
        flex: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
    }),

    /**
     * 设置表单项标签内容
     */
    label: PropTypes.node,

    /**
     * 设置表单项标签文本对齐方式，可选的为'left'与'right'，默认为'right'
     */
    labelAlign: PropTypes.oneOf(['left', 'right']),

    /**
     * 在label后添加额外tooltip鼠标悬浮提示信息
     */
    tooltip: PropTypes.node,

    /**
     * 设置表单项额外的提示信息
     */
    extra: PropTypes.node,

    /**
     * 设置校验状态，不设置时会根据设置的校验规则自动生成
     */
    validateStatus: PropTypes.oneOf([
        'success', 'warning', 'error', 'validating'
    ]),

    /**
     * 是否配合不同的validateStatus值，呈现对应的状态图标，建议仅用于AntdInput
     * 默认：false
     */
    hasFeedback: PropTypes.bool,

    /**
     * 设置与validateStatus状态一致的校验提示信息
     */
    help: PropTypes.node,

    /**
     * 设置是否隐藏字段，隐藏后仍然会收集和校验字段，默认为false
     */
    hidden: PropTypes.bool,

    /**
     * 设置默认验证字段的信息
     */
    messageVariables: PropTypes.object,

    /**
     * 为true时不带样式，作为纯字段控件使用，默认为false
     */
    noStyle: PropTypes.bool,

    /**
     * 设置当字段被删除时是否保留字段值，默认为true
     */
    preserve: PropTypes.bool,

    /**
     * 设置子元素默认值，如果与AntdForm的initialValues冲突则以AntdForm为准
     */
    initialValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    /**
     * 设置字段名，支持数组
     */
    name: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]))
    ]),

    /**
     * 校验规则，设置字段的校验逻辑
     */
    rules: PropTypes.arrayOf(PropTypes.exact({
        /**
         * 仅在 type 为 array 类型时有效，用于指定数组元素的校验规则
         */
        defaultField: PropTypes.object,

        /**
         * 是否匹配枚举中的值（需要将 type 设置为 enum）
         */
        enum: PropTypes.any,

        /**
         * 仅在 type 为 array 或 object 类型时有效，用于指定子元素的校验规则
         */
        fields: PropTypes.any,

        /**
         * string 类型时为字符串长度；number 类型时为确定数字； array 类型时为数组长度
         */
        len: PropTypes.number,

        /**
         * 必须设置 type：string 类型为字符串最大长度；number 类型时为最大值；array 类型时为数组最大长度
         */
        max: PropTypes.number,

        /**
         * 错误信息，不设置时会通过模板自动生成
         */
        message: PropTypes.string,

        /**
         * 必须设置 type：string 类型为字符串最小长度；number 类型时为最小值；array 类型时为数组最小长度
         */
        min: PropTypes.number,

        /**
         * 正则表达式匹配
         */
        pattern: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.instanceOf(RegExp)
        ]),

        /**
         * 是否为必选字段
         */
        required: PropTypes.bool,

        /**
         * 类型，常见有 string |number |boolean |url | email等
         */
        type: PropTypes.oneOf([
            'string',
            'number',
            'boolean',
            'method',
            'regexp',
            'integer',
            'float',
            'array',
            'object',
            'enum',
            'date',
            'url',
            'hex',
            'email',
            'any'
        ]),

        /**
         * 设置触发验证时机，可选值有onChange、onBlur、onFocus，默认为onChange，必须是AntdFormItem的validateTrigger的子集
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
         * 设置自定义校验js函数字符串
         */
        validator: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.func
        ]),

        /**
         * 仅警告，不阻塞表单提交
         */
        warningOnly: PropTypes.bool,

        /**
         * 如果字段仅包含空格则校验不通过，只在 type: 'string' 时生效
         */
        whitespace: PropTypes.bool
    })),

    /**
     * 设置触发验证时机，可选值有onChange、onBlur、onFocus，默认为onChange
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
     * 设置子节点的值的属性，默认为'value'
     */
    valuePropName: PropTypes.string,

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
AntdFormItem.defaultProps = {
    hidden: false,
    hasFeedback: false,
    noStyle: false,
    preserve: true
}

export default AntdFormItem;

export const propTypes = AntdFormItem.propTypes;
export const defaultProps = AntdFormItem.defaultProps;