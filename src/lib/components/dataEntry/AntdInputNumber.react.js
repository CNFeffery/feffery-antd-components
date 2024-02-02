import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdInputNumber = React.lazy(() => import(/* webpackChunkName: "data_entry" */ '../../fragments/dataEntry/AntdInputNumber.react'));

const AntdInputNumber = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdInputNumber {...props} />
        </Suspense>
    );
}

// 定义参数或属性
AntdInputNumber.propTypes = {
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

    // 设置前置标签内容
    addonBefore: PropTypes.node,

    // 设置后置标签内容
    addonAfter: PropTypes.node,

    // 用于设置是否自动获取焦点，默认为false
    autoFocus: PropTypes.bool,

    // 设置框内嵌前缀内容
    prefix: PropTypes.node,

    // 设置是否显示增减辅助按钮，默认为true
    controls: PropTypes.bool,

    // 设置是否启用键盘快捷行为，默认为true
    keyboard: PropTypes.bool,

    // 设置允许输入的最小值，默认不限制
    min: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),

    // 设置允许输入的最大值，默认不限制
    max: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),

    // 设置每次改变的步长
    step: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),

    // 设置数值精度，即小数位数
    precision: PropTypes.number,

    // 设置是否开启字符值模式，可用于输入高精度小数时不丢失精度
    // 开启此模式后，min、max、step、value与defaultValue都应当为字符型，默认为false
    stringMode: PropTypes.bool,

    // 设置是否禁用，默认为false
    disabled: PropTypes.bool,

    // 用于设置输入框尺寸，可选的有'small'、'middle'与'large'，默认不填则为'middle'
    size: PropTypes.oneOf(['small', 'middle', 'large']),

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

    // 用于设置占位提示内容
    placeholder: PropTypes.string,

    // 对应当前输入值
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),

    // 设置默认值
    defaultValue: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),

    // 记录防抖状态下的已输入内容
    debounceValue: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),

    // 用于配置debounceValue变化更新的防抖等待时长（单位：毫秒），默认为0
    debounceWait: PropTypes.number,

    // 记录聚焦于输入框内部时，enter键被点按的次数
    nSubmit: PropTypes.number,

    // 设置校验状态，可选的有'error'、'warning'
    status: PropTypes.oneOf(['error', 'warning']),

    // 设置是否以只读模式渲染，默认为false
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
AntdInputNumber.defaultProps = {
    autoFocus: false,
    controls: true,
    keyboard: true,
    stringMode: false,
    disabled: false,
    size: 'middle',
    bordered: true,
    nSubmit: 0,
    debounceWait: 0,
    persisted_props: ['value'],
    persistence_type: 'local',
    batchPropsNames: []
}

export default AntdInputNumber;

export const propTypes = AntdInputNumber.propTypes;
export const defaultProps = AntdInputNumber.defaultProps;