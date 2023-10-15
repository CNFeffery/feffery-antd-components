import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdCheckbox = React.lazy(() => import(/* webpackChunkName: "data_entry" */ '../../fragments/dataEntry/AntdCheckbox.react'));

const AntdCheckbox = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdCheckbox {...props} />
        </Suspense>
    );
}

// 定义参数或属性
AntdCheckbox.propTypes = {
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

    // 设置是否禁用组件
    disabled: PropTypes.bool,

    // 用于设置选项对应显示的文字内容
    label: PropTypes.node,

    // 用于设置是否自动获取焦点，默认为false
    autoFocus: PropTypes.bool,

    // 对应选择框当前是否被选择，默认为false
    checked: PropTypes.bool,

    // 设置当前选择框是否样式强制为半选状态，默认为false
    // 此参数仅与样式有关，与勾选状态无关
    indeterminate: PropTypes.bool,

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
    persisted_props: PropTypes.arrayOf(PropTypes.oneOf(['checked'])),

    /**
     * Where persisted user changes will be stored:
     * memory: only kept in memory, reset on page refresh.
     * local: window.localStorage, data is kept after the browser quit.
     * session: window.sessionStorage, data is cleared once the browser quit.
     */
    persistence_type: PropTypes.oneOf(['local', 'session', 'memory'])
};

// 设置默认参数
AntdCheckbox.defaultProps = {
    persisted_props: ['checked'],
    persistence_type: 'local',
    disabled: false,
    autoFocus: false,
    checked: false,
    indeterminate: false,
    readOnly: false,
    batchPropsNames: []
}

export default AntdCheckbox;

export const propTypes = AntdCheckbox.propTypes;
export const defaultProps = AntdCheckbox.defaultProps;