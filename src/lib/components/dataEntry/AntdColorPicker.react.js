import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdColorPicker = React.lazy(() => import(/* webpackChunkName: "data_entry" */ '../../fragments/dataEntry/AntdColorPicker.react'));

const AntdColorPicker = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdColorPicker {...props} />
        </Suspense>
    );
}

// 定义参数或属性
AntdColorPicker.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    // 自定义css字典
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    /**
     * 用于在基于AntdForm的表单值自动搜集功能中，充当当前表单项的字段名
     * 缺省时会以id作为字段名
     */
    name: PropTypes.string,

    /**
     * 是否允许清除已选颜色
     * 默认：false
     */
    allowClear: PropTypes.bool,

    /**
     * 配置颜色选择面板附带的箭头
     * 默认：true
     */
    arrow: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.exact({
            /**
             * 箭头是否位于面板中心
             */
            pointAtCenter: PropTypes.bool
        })
    ]),

    /**
     * 设置或监听当前选中的颜色值
     * 默认：'#1677FF'
     */
    value: PropTypes.string,

    /**
     * 设置或监听当前的颜色格式，可选的有'rgb'、'hex'、'hsb'
     * 默认：'hex'
     */
    format: PropTypes.oneOf(['rgb', 'hex', 'hsb']),

    /**
     * 是否禁用当前组件
     * 默认：false
     */
    disabled: PropTypes.bool,

    /**
     * 是否禁用透明度选择
     * 默认：true
     */
    disabledAlpha: PropTypes.bool,

    /**
     * 设置或监听当前颜色选择面板展开状态
     */
    open: PropTypes.bool,

    /**
     * 配置预设颜色选择项列表
     */
    presets: PropTypes.arrayOf(
        PropTypes.exact({
            /**
             * 当前项的标签内容
             */
            label: PropTypes.node,

            /**
             * 当前项对应的预设色彩值数组
             */
            colors: PropTypes.arrayOf(PropTypes.string),

            /**
             * 当前项默认是否展开
             */
            defaultOpen: PropTypes.bool
        })
    ),

    /**
     * 设置颜色选择面板的展开方位，可选的有'top'、'topLeft'、'topRight'、'bottom'、'bottomLeft'、'bottomRight'
     * 默认：'bottomLeft'
     */
    placement: PropTypes.oneOf([
        'top',
        'topLeft',
        'topRight',
        'bottom',
        'bottomLeft',
        'bottomRight'
    ]),

    /**
     * 是否显示颜色值文本
     * 默认：false
     */
    showText: PropTypes.bool,

    /**
     * 设置触发器尺寸规格，可选的有'large'、'middle'、'small'
     * 默认：'middle'
     */
    size: PropTypes.oneOf(['large', 'middle', 'small']),

    /**
     * 设置颜色选择面板触发方式，可选的有'hover'、'click'
     * 默认：'click'
     */
    trigger: PropTypes.oneOf(['hover', 'click']),

    /**
     * `data-*`格式属性通配
     */
    'data-*': PropTypes.string,

    /**
     * `aria-*`格式属性通配
     */
    'aria-*': PropTypes.string,

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
AntdColorPicker.defaultProps = {
    allowClear: false,
    format: 'hex',
    disabled: false,
    disabledAlpha: true,
    placement: 'bottomLeft',
    showText: false,
    size: 'middle',
    trigger: 'click',
    value: '#1677ff'
}

export default AntdColorPicker;

export const propTypes = AntdColorPicker.propTypes;
export const defaultProps = AntdColorPicker.defaultProps;