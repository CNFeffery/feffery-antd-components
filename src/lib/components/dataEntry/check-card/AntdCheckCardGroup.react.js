import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdCheckCardGroup = React.lazy(() => import(/* webpackChunkName: "data_entry" */ '../../../fragments/dataEntry/check-card/AntdCheckCardGroup.react'));

const AntdCheckCardGroup = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdCheckCardGroup {...props} />
        </Suspense>
    );
}

// 定义参数或属性
AntdCheckCardGroup.propTypes = {
    // 组件id
    id: PropTypes.string,

    // 传入内部嵌套的各个AntdCheckCard组件
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

    // 设置是否允许多选，默认为false
    multiple: PropTypes.bool,

    // 设置是否允许当前组合卡片内无选中值，默认为true
    allowNoValue: PropTypes.bool,

    // 设置是否显示边框，默认为true
    bordered: PropTypes.bool,

    // 设置/记录当前选项的选项值
    value: PropTypes.oneOfType([
        PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]),
        PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string
            ])
        )
    ]),

    // 设置默认选中的选项值
    defaultValue: PropTypes.oneOfType([
        PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]),
        PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string
            ])
        )
    ]),

    // 是否禁用当前整组选择卡片，默认为false
    disabled: PropTypes.bool,

    // 设置尺寸规格，可选的有'small'、'default'及'large'
    // 默认为'default'
    size: PropTypes.oneOf(['small', 'default', 'large']),

    // 设置是否以只读模式进行渲染
    // 默认为false
    readOnly: PropTypes.bool,

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
AntdCheckCardGroup.defaultProps = {
    multiple: false,
    allowNoValue: true,
    bordered: true,
    disabled: false,
    size: 'default',
    readOnly: false,
    persisted_props: ['value'],
    persistence_type: 'local'
}

export default AntdCheckCardGroup;

export const propTypes = AntdCheckCardGroup.propTypes;
export const defaultProps = AntdCheckCardGroup.defaultProps;