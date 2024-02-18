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
     * 监听搜集内部表单输入类组件的输入值变化情况
     */
    values: PropTypes.object,

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
    labelAlign: 'right',
    labelWrap: false
}

export default AntdForm;

export const propTypes = AntdForm.propTypes;
export const defaultProps = AntdForm.defaultProps;