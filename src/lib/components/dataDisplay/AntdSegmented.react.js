import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdSegmented = React.lazy(() => import(/* webpackChunkName: "data_display" */ '../../fragments/dataDisplay/AntdSegmented.react'));

const AntdSegmented = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdSegmented {...props} />
        </Suspense>
    );
}

// 定义参数或属性
AntdSegmented.propTypes = {
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

    // 设置选项参数数组
    options: PropTypes.arrayOf(
        PropTypes.exact({
            // 设置选项的标题内容
            label: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.node
            ]).isRequired,

            // 设置选项的对应值
            value: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]).isRequired,

            // 设置是否禁用当前选项
            disabled: PropTypes.bool,

            // 传入与AntdIcon相通的icon参数
            icon: PropTypes.string,

            // 针对icon参数值设置渲染方式，默认为'AntdIcon'即icon等价于AntdIcon的icon参数
            // 当设置为'fontawesome'时，icon参数对应fontawesome图标的css类名
            iconRenderer: PropTypes.oneOf(['AntdIcon', 'fontawesome']),
        })
    ),

    // 对应当前已选中的值
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),

    // 设置初始化状态下被选中的值
    defaultValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),

    // 设置是否占据父级容器全部宽度，默认为false
    block: PropTypes.bool,

    // 设置是否禁用整体组件
    disabled: PropTypes.bool,

    // 当optionType为'button'时，用于设置按钮的大小规格
    // 可选的有'large'、'middle'和'small'，默认为'middle'
    size: PropTypes.oneOf(['large', 'middle', 'small']),

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
AntdSegmented.defaultProps = {
    block: false,
    disabled: false,
    size: 'middle',
    persisted_props: ['value'],
    persistence_type: 'local',
    batchPropsNames: []
}

export default AntdSegmented;

export const propTypes = AntdSegmented.propTypes;
export const defaultProps = AntdSegmented.defaultProps;