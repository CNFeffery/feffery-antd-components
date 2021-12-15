import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';
import 'antd/dist/antd.css';

// 定义组合选择框组件AntdCheckboxGroup，api参数参考https://ant.design/components/checkbox-cn/
export default class AntdCheckboxGroup extends Component {

    constructor(props) {
        super(props)
        if (!props.value) {
            props.setProps({ value: [] })
        }
    }

    render() {
        // 取得必要属性或参数
        let {
            id,
            style,
            className,
            options,
            value,
            setProps,
            loading_state
        } = this.props;

        const onChange = target => {
            setProps({ value: target })
        }

        // 返回定制化的前端组件
        return (
            <Checkbox.Group
                id={id}
                className={className}
                style={style}
                options={options}
                value={value}
                onChange={onChange}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
            />
        );

    }
}

// 定义参数或属性
AntdCheckboxGroup.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 设置是否禁用组件
    disabled: PropTypes.bool,

    // 用于在checkbox组模式下定义每个选择框的信息
    options: PropTypes.arrayOf(
        PropTypes.exact({
            // 设置选项显示的文字内容
            label: PropTypes.string,

            // 设置选项对应的值
            value: PropTypes.string,

            // 设置是否禁用当前选项
            disabled: PropTypes.bool
        })
    ),

    // 对应组合选择框当前被选中的选项的value数组
    value: PropTypes.arrayOf(PropTypes.string),

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
AntdCheckboxGroup.defaultProps = {}
