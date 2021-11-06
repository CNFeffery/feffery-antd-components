import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'antd';
import 'antd/dist/antd.css';

// 定义开关部件AntdSwitch，api参数参考https://ant.design/components/switch-cn/
export default class AntdSwitch extends Component {

    constructor(props) {
        super(props)
        if (!props.checked) {
            props.setProps({ checked: false })
        }
    }

    render() {
        // 取得必要属性或参数
        let {
            id,
            style,
            className,
            disabled,
            checked,
            checkedChildren,
            unCheckedChildren,
            size,
            setProps,
            loading_state
        } = this.props;

        const onChange = checked => {
            setProps({ checked: checked })
        }

        // 返回定制化的前端部件
        return (
            <Switch
                id={id}
                className={className}
                style={style}
                disabled={disabled}
                defaultChecked={checked}
                checkedChildren={checkedChildren}
                unCheckedChildren={unCheckedChildren}
                size={size}
                onChange={onChange}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
            />
        );

    }
}

// 定义参数或属性
AntdSwitch.propTypes = {
    // 部件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css
    style: PropTypes.object,

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
AntdSwitch.defaultProps = {}
