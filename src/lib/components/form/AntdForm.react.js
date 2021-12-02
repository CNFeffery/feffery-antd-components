import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';
import 'antd/dist/antd.css';

// 定义表单部件AntdForm，api参数参考https://ant.design/components/form-cn/
export default class AntdForm extends Component {
    render() {
        // 取得必要属性或参数
        let {
            id,
            children,
            className,
            style,
            labelCol,
            wrapperCol,
            colon,
            labelAlign,
            layout,
            setProps,
            loading_state
        } = this.props;

        return (
            <Form id={id}
                className={className}
                style={style}
                labelCol={labelCol}
                wrapperCol={wrapperCol}
                colon={colon}
                labelAlign={labelAlign}
                layout={layout}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }>
                {children}
            </Form>
        );
    }
}

// 定义参数或属性
AntdForm.propTypes = {
    // 部件id
    id: PropTypes.string,

    /**
     * The content of the tab - will only be displayed if this tab is selected
     */
    children: PropTypes.node,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 设置表单项标签列宽相关属性，同AntdCol划分为24份宽度
    labelCol: PropTypes.exact({
        // 设置span宽度
        span: PropTypes.number,

        // 设置offset平移宽度
        offset: PropTypes.number,
    }),

    // 设置表单项列宽相关属性，同AntdCol划分为24份宽度
    wrapperCol: PropTypes.exact({
        // 设置span宽度
        span: PropTypes.number,

        // 设置offset平移宽度
        offset: PropTypes.number,
    }),

    // 设置是否显示表单项标签后的冒号，仅在layout='horizontal'下有效
    colon: PropTypes.bool,

    // 设置表单项标签的文本对齐方式，可选的有'left'与'right'，默认为'right'
    labelAlign: PropTypes.oneOf(['left', 'right']),

    // 设置表单布局模式，可选的有'horizontal'、'vertical'与'inline'，默认为'horizontal'
    layout: PropTypes.oneOf(['horizontal', 'vertical', 'inline']),

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
AntdForm.defaultProps = {
}
