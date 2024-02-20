import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdSlider = React.lazy(() => import(/* webpackChunkName: "data_entry" */ '../../fragments/dataEntry/AntdSlider.react'));

const AntdSlider = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdSlider {...props} />
        </Suspense>
    );
}

// 定义参数或属性
AntdSlider.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    // 自定义css字典
    style: PropTypes.object,

    // 用于设置slider滑轨的css样式
    railStyle: PropTypes.object,

    /**
     * 细分控制子元素css样式
     */
    styles: PropTypes.exact({
        /**
         * 设置选择条css样式
         */
        track: PropTypes.object,

        /**
         * 设置背景条css样式
         */
        rail: PropTypes.object
    }),

    /**
     * 细分控制子元素css类
     */
    classNames: PropTypes.exact({
        /**
         * 设置选择条css类
         */
        track: PropTypes.string,

        /**
         * 设置背景条css类
         */
        rail: PropTypes.string
    }),

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    /**
     * 用于在基于AntdForm的表单值自动搜集功能中，充当当前表单项的字段名
     * 缺省时会以id作为字段名
     */
    name: PropTypes.string,

    // 设置是否以垂直模式显示滑动输入条，默认为false
    vertical: PropTypes.bool,

    // 是否以范围形式进行渲染
    range: PropTypes.bool,

    // 设置范围最小值
    min: PropTypes.number.isRequired,

    // 设置范围最大值
    max: PropTypes.number.isRequired,

    // 设置步长
    step: PropTypes.number,

    // 定义特定刻度参数
    marks: PropTypes.objectOf(PropTypes.string),

    // 用于设置刻度对应的tooltip的显示策略，true代表一直保持显示
    // false表示即使鼠标悬浮也不显示，默认不设置则只有鼠标悬浮时才会显示
    tooltipVisible: PropTypes.bool,

    //  设置tooltip显示内容前缀文字
    tooltipPrefix: PropTypes.string,

    // 设置tooltip显示内容后缀文字
    tooltipSuffix: PropTypes.string,

    // 设置是否禁用整个组件
    disabled: PropTypes.bool,

    // 记录用户输入的值或范围
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.number)
    ]),

    // 设置默认值或默认范围
    defaultValue: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.number)
    ]),

    // 用于设置是否自动获取焦点，默认为false
    autoFocus: PropTypes.bool,

    // 设置悬浮层锚定策略，可选的有'parent'、'body'，默认为'body'
    popupContainer: PropTypes.oneOf(['parent', 'body']),

    // 设置是否以只读模式进行渲染，默认为false
    readOnly: PropTypes.bool,

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
    setProps: PropTypes.func,

    /**
   * Used to allow user interactions in this component to be persisted when
   * the component - or the page - is refreshed. If `persisted` is truthy and
   * hasn't changed from its previous value, a `value` that the user has
   * changed while using the app will keep that change, as long as
   * the new `value` also matches what was given originally.
   * Used in conjunction with `persistence_type`.
   */
    persistence: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.number
    ]),

    /**
     * Properties whose user interactions will persist after refreshing the
     * component or the page. Since only `value` is allowed this prop can
     * normally be ignored.
     */
    persisted_props: PropTypes.arrayOf(PropTypes.oneOf(['value'])),

    /**
     * Where persisted user changes will be stored:
     * memory: only kept in memory, reset on page refresh.
     * local: window.localStorage, data is kept after the browser quit.
     * session: window.sessionStorage, data is cleared once the browser quit.
     */
    persistence_type: PropTypes.oneOf(['local', 'session', 'memory'])
};

// 设置默认参数
AntdSlider.defaultProps = {
    vertical: false,
    range: false,
    min: 0,
    max: 100,
    step: 1,
    tooltipPrefix: '',
    tooltipSuffix: '',
    disabled: false,
    popupContainer: 'body',
    readOnly: false,
    autoFocus: false,
    persisted_props: ['value'],
    persistence_type: 'local',
    batchPropsNames: []
}

export default AntdSlider;

export const propTypes = AntdSlider.propTypes;
export const defaultProps = AntdSlider.defaultProps;