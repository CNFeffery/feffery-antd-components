import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';
import 'antd/dist/antd.css';

// 定义表单项组件AntdFormItem，api参数参考https://ant.design/components/form-cn/
export default class AntdFormItem extends Component {
    render() {
        // 取得必要属性或参数
        let {
            id,
            children,
            className,
            style,
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
            setProps,
            loading_state
        } = this.props;

        return (
            <Form.Item id={id}
                className={className}
                style={style}
                labelCol={labelCol}
                colon={colon}
                wrapperCol={wrapperCol}
                label={label}
                labelAlign={labelAlign}
                tooltip={tooltip}
                extra={extra}
                help={help}
                hasFeedback={true}
                hidden={hidden}
                required={required}
                validateStatus={validateStatus}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }>
                {children}
            </Form.Item>
        );
    }
}

// 定义参数或属性
AntdFormItem.propTypes = {
    // 组件id
    id: PropTypes.string,

    /**
     * The content of the tab - will only be displayed if this tab is selected
     */
    children: PropTypes.node,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 设置是否为标签添加必填*标识，默认为false
    required: PropTypes.bool,

    // 设置表单项标签列宽相关属性，同AntdCol划分为24份宽度，优先级高于AntdForm
    labelCol: PropTypes.exact({
        // 设置span宽度
        span: PropTypes.number,

        // 设置offset平移宽度
        offset: PropTypes.number,
    }),

    // 配合label参数，表示是否显示label后面的冒号，默认为true
    colon: PropTypes.bool,

    // 设置表单项列宽相关属性，同AntdCol划分为24份宽度，优先级高于AntdForm
    wrapperCol: PropTypes.exact({
        // 设置span宽度
        span: PropTypes.number,

        // 设置offset平移宽度
        offset: PropTypes.number,
    }),

    // 设置标签文本内容
    label: PropTypes.string,

    // 设置表单项标签文本对齐方式，可选的为'left'与'right'，默认为'right'
    labelAlign: PropTypes.oneOf(['left', 'right']),

    // 在label后添加额外tooltip鼠标悬浮提示信息
    tooltip: PropTypes.string,

    // 设置表单项额外的提示信息
    extra: PropTypes.string,

    // 设置与validateStatus状态一致的校验提示信息
    help: PropTypes.string,

    // 设置是否隐藏字段，隐藏后仍然会收集和校验字段，默认为false
    hidden: PropTypes.bool,

    // 设置校验状态，不设置时会根据设置的校验规则自动生成
    validateStatus: PropTypes.oneOf([
        'success', 'warning', 'error', 'validating'
    ]),

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
}
