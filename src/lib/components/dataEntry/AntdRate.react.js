import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdRate = React.lazy(() => import(/* webpackChunkName: "data_entry" */ '../../fragments/dataEntry/AntdRate.react'));

const AntdRate = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdRate {...props} />
        </Suspense>
    );
}

// 定义参数或属性
AntdRate.propTypes = {
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

    // 设置是否允许再次点击后清除已评分数，默认为true
    allowClear: PropTypes.bool,

    // 设置是否允许半选，默认为false
    allowHalf: PropTypes.bool,

    // 设置星星数量，默认为5
    count: PropTypes.number,

    // 自定义每个等级的提示文字
    tooltips: PropTypes.arrayOf(
        PropTypes.string
    ),

    // 设置是否以只读方式进行展示，默认为false
    disabled: PropTypes.bool,

    // 对应当前的星星数量
    value: PropTypes.number,

    // 设置默认已选星数量，默认为0
    defaultValue: PropTypes.number,

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
AntdRate.defaultProps = {
    allowClear: true,
    allowHalf: false,
    count: 5,
    defaultValue: 0,
    disabled: false,
    persisted_props: ['value'],
    persistence_type: 'local',
    batchPropsNames: []
}

export default AntdRate;

export const propTypes = AntdRate.propTypes;
export const defaultProps = AntdRate.defaultProps;