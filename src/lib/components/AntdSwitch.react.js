import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'antd';
import { isUndefined } from 'lodash';


// 定义开关组件AntdSwitch，api参数参考https://ant.design/components/switch-cn/
const AntdSwitch = (props) => {
    // 取得必要属性或参数
    let {
        id,
        style,
        className,
        key,
        disabled,
        checked,
        checkedChildren,
        unCheckedChildren,
        size,
        loading,
        setProps,
        persistence,
        persisted_props,
        persistence_type,
        loading_state
    } = props;

    useEffect(() => {
        if (isUndefined(checked)) {
            setProps({ checked: false })
        }
    }, [])

    const onChange = checked => {
        setProps({ checked: checked })
    }

    // 返回定制化的前端组件
    return (
        <Switch
            id={id}
            className={className}
            style={style}
            key={key}
            disabled={disabled}
            defaultChecked={checked}
            checkedChildren={checkedChildren}
            checked={checked}
            unCheckedChildren={unCheckedChildren}
            size={size}
            loading={loading}
            onChange={onChange}
            persistence={persistence}
            persisted_props={persisted_props}
            persistence_type={persistence_type}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        />
    );
}

// 定义参数或属性
AntdSwitch.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 设置是否禁用组件
    disabled: PropTypes.bool,

    // 对应选择框当前是否被选择
    checked: PropTypes.bool,

    // 设置开启状态显示的文字内容，默认为''
    checkedChildren: PropTypes.string,

    // 设置关闭状态显示的文字内容，默认为''
    unCheckedChildren: PropTypes.string,

    // 设置开关大小，可选的有'default'与'small'，默认为'default'
    size: PropTypes.oneOf(['default', 'small']),

    // 设置是否渲染loading状态，默认为false
    loading: PropTypes.bool,

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
AntdSwitch.defaultProps = {
    persisted_props: ['checked'],
    persistence_type: 'local'
}

export default AntdSwitch;