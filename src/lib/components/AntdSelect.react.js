import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Select, ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';

const { Option, OptGroup } = Select;

// 定义下拉选择部件AntdSelect，api参数参考https://ant.design/components/select-cn/
export default class AntdSelect extends Component {

    constructor(props) {
        super(props)
        // 初始化value
        if (props.defaultValue) {
            // 当defaultValue不为空时，为value初始化defaultValue对应的value值
            props.setProps({ value: props.defaultValue })
        }
    }

    render() {
        // 取得必要属性或参数
        const {
            id,
            style,
            className,
            setProps,
            placeholder,
            options,
            allowClear,
            disabled,
            mode,
            defaultValue,
            maxTagCount,
            listHeight,
            loading_state
        } = this.props;

        // 用于获取用户已选择值的回调函数
        function updateSelectedValue(value) {
            setProps({ value: value })
        }

        // 基于dash端传入的options参数，推导出对应的部件
        var optionsJsx = [];
        for (var i = 0; i < options.length; i++) {
            // 当存在分组时
            if (options[i].hasOwnProperty('group')) {
                var groupOptions = [];
                // 构造OptGroup > Option结构
                for (var j = 0; j < options[i].options.length; j++) {
                    groupOptions.push(<Option value={options[i].options[j].value} disabled={options[i].options[j].disabled}>{options[i].options[j].label}</Option>)
                }
                optionsJsx.push(<OptGroup label={options[i].group}>{groupOptions}</OptGroup>)
            } else {
                optionsJsx.push(<Option value={options[i].value} disabled={options[i].disabled}>{options[i].label}</Option>)
            }
        }

        // 返回定制化的前端部件
        return (
            <ConfigProvider locale={zhCN}>
                <Select
                    id={id}
                    className={className}
                    style={style}
                    mode={mode}
                    allowClear={allowClear}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    onChange={updateSelectedValue}
                    maxTagCount={maxTagCount}
                    listHeight={listHeight}
                    disabled={disabled}
                    showSearch={true}
                    data-dash-is-loading={
                        (loading_state && loading_state.is_loading) || undefined
                    }
                    getPopupContainer={(triggerNode) => triggerNode.parentNode}
                >
                    {optionsJsx}
                </Select>
            </ConfigProvider>
        );
    }
}

// 定义参数或属性
AntdSelect.propTypes = {
    // 部件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 定义下拉框可选项
    options: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.exact({
                // 选项对应显示的label
                label: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
                    .isRequired,

                // 选相对应的值
                value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
                    .isRequired,

                // 控制选项的禁止点击状态
                disabled: PropTypes.bool
            }),
            PropTypes.exact({
                // 分组对应组标签
                group: PropTypes.string.isRequired,

                // 组内选项集合
                options: PropTypes.arrayOf(
                    PropTypes.exact({
                        // 选项对应显示的label
                        label: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
                            .isRequired,

                        // 选相对应的值
                        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
                            .isRequired,

                        // 控制选项的禁止点击状态
                        disabled: PropTypes.bool
                    })
                )

            })
        ])
    ),

    // 设置是否渲染内容清空按钮，默认为true
    allowClear: PropTypes.bool,

    // 设置选择模式（multiple：多选，tags：无则新增模式。默认为''即单选）
    mode: PropTypes.string,

    // 设置是否禁用整个组件
    disabled: PropTypes.bool,

    // 选择框默认文本
    placeholder: PropTypes.string,

    // 对应已被选中的选项值或选项值数组
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        ),
    ]),

    // 设置默认被选中的选项，默认为空数组
    defaultValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        ),
    ]),

    // 设置最大显示的已选择选项，默认为5，超出部分会自动省略
    maxTagCount: PropTypes.number,

    // 设置下拉菜单的高度，默认256
    listHeight: PropTypes.number,

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
AntdSelect.defaultProps = {
    allowClear: true,
    maxTagCount: 5,
    listHeight: 256,
    options: []
}
