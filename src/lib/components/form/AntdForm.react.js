import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';
import { isString } from 'lodash';
import useCss from '../../hooks/useCss';


// 定义表单组件AntdForm，api参数参考https://ant.design/components/form-cn/
const AntdForm = (props) => {
    // 取得必要属性或参数
    let {
        id,
        children,
        className,
        style,
        key,
        labelCol,
        wrapperCol,
        colon,
        labelAlign,
        layout,
        setProps,
        loading_state
    } = props;

    return (
        <Form id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
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
    layout: 'horizontal',
    colon: true,
    labelAlign: 'right'
}

export default AntdForm;