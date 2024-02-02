import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdMentions = React.lazy(() => import(/* webpackChunkName: "data_entry" */ '../../fragments/dataEntry/AntdMentions.react'));

const AntdMentions = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdMentions {...props} />
        </Suspense>
    );
}

// 定义参数或属性
AntdMentions.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    // 自定义css字典
    style: PropTypes.object,

    /**
     * 设置弹框菜单css类名
     */
    popupClassName: PropTypes.string,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 设置是否开启自适应内容高度，默认为false
    // 特别地，还可以传入对象来自行设置最少最多展示的子项行数
    autoSize: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.exact({
            // 设置最小子项行数
            minRows: PropTypes.number,

            // 设置最大子项行数
            maxRows: PropTypes.number
        })
    ]),

    // 设置触发子项展开的关键字，默认为'@'
    prefix: PropTypes.string,

    // 对应当前输入框中文本内容
    value: PropTypes.string,

    // 设置默认子项值
    defaultValue: PropTypes.string,

    // 设置待提及的子项名称
    options: PropTypes.arrayOf(
        PropTypes.exact({
            // 子项标签文字
            label: PropTypes.node,

            // 子项值
            value: PropTypes.string
        })
    ).isRequired,

    // 监听已选择子项value值数组
    selectedOptions: PropTypes.arrayOf(PropTypes.string),

    // 设置是否禁用，默认为false
    disabled: PropTypes.bool,

    // 设置子项弹出层的展示位置，可选的有'top'与'bottom'，默认为'bottom'
    placement: PropTypes.oneOf(['top', 'bottom']),

    /**
     * 设置是否渲染边框，设置为true时等价于variant='outlined'
     * 默认：true
     */
    bordered: PropTypes.bool,

    /**
     * 设置形态变体类型，可选的有'outlined'、'borderless'、'filled'
     * 其中'outlined'等价于bordered=true，优先级高于bordered
     */
    variant: PropTypes.oneOf(['outlined', 'borderless', 'filled']),

    /**
     * 设置占位提示内容
     */
    placeholder: PropTypes.string,

    // 设置校验状态，可选的有'error'、'warning'
    status: PropTypes.oneOf(['error', 'warning']),

    // 用于设置是否自动获取焦点，默认为false
    autoFocus: PropTypes.bool,

    // 设置悬浮层锚定策略，可选的有'parent'、'body'，默认为'body'
    popupContainer: PropTypes.oneOf(['parent', 'body']),

    // 用于自定义需要纳入batchProps中的属性名数组
    batchPropsNames: PropTypes.arrayOf(PropTypes.string),

    // 打包监听batchPropsNames中定义的属性值变化
    batchPropsValues: PropTypes.object,

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
AntdMentions.defaultProps = {
    autoSize: false,
    prefix: '@',
    placement: 'bottom',
    bordered: true,
    disabled: false,
    autoFocus: false,
    selectedOptions: [],
    batchPropsNames: []
}

export default AntdMentions;

export const propTypes = AntdMentions.propTypes;
export const defaultProps = AntdMentions.defaultProps;