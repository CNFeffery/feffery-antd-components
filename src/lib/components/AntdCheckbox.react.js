import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';
import 'antd/dist/antd.css';

// 定义选择框部件AntdCheckbox，api参数参考https://ant.design/components/checkbox-cn/
export default class AntdCheckbox extends Component {

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
            label,
            disabled,
            checked,
            setProps,
            loading_state
        } = this.props;

        const onChange = e => {
            setProps({ checked: e.target.checked })
        }

        // 返回定制化的前端部件
        return (
            <Checkbox
                id={id}
                className={className}
                style={style}
                onChange={onChange}
                disabled={disabled}
                checked={checked}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
            >
                {label}
            </Checkbox>
        );

    }
}

// 定义参数或属性
AntdCheckbox.propTypes = {
    // 部件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 设置是否禁用组件
    disabled: PropTypes.bool,

    // 用于在单checkbox模式下设置选项对应显示的文字内容
    label: PropTypes.string,

    // 对应选择框当前是否被选择
    checked: PropTypes.bool,

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
AntdCheckbox.defaultProps = {}
