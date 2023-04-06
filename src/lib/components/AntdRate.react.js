import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Rate } from 'antd';
import { isString, isUndefined } from 'lodash';
import useCss from '../hooks/useCss';
import PropsContext from '../contexts/PropsContext';


// 定义评分组件AntdRate，api参数参考https://ant.design/components/rate-cn/
const AntdRate = (props) => {
    // 取得必要属性或参数
    let {
        id,
        className,
        style,
        key,
        allowClear,
        allowHalf,
        count,
        disabled,
        tooltips,
        defaultValue,
        value,
        setProps,
        loading_state,
        persistence,
        persisted_props,
        persistence_type
    } = props;

    const context = useContext(PropsContext)

    useEffect(() => {
        // 初始化value
        if (defaultValue && !value) {
            // 当defaultValue不为空时，为value初始化defaultValue对应的value值
            setProps({ value: defaultValue })
        }
    }, [])

    return (
        <Rate id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            allowClear={allowClear}
            allowHalf={allowHalf}
            count={count}
            disabled={
                context && !isUndefined(context.componentDisabled) ?
                    context.componentDisabled :
                    disabled
            }
            tooltips={tooltips}
            value={value}
            onChange={v => setProps({ value: v })}
            persistence={persistence}
            persisted_props={persisted_props}
            persistence_type={persistence_type}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            } />
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
    persistence_type: 'local'
}

export default AntdRate;