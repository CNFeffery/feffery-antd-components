import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Mentions } from 'antd';
import 'antd/dist/antd.css';

const { Option } = Mentions;

// 定义提及组件AntdMentions，api参数参考https://ant.design/components/mentions-cn/
export default class AntdMentions extends Component {

    render() {
        // 取得必要属性或参数
        let {
            id,
            className,
            style,
            popupContainerId,
            autoSize,
            prefix,
            defaultValue,
            placement,
            value,
            options,
            disabled,
            setProps,
            loading_state
        } = this.props;

        const onChange = (e) => {
            setProps({ value: e })
        }

        const onSelect = (e) => {
            // 获取最新一次被选中的子项value值
            let latestSelectedOption = e.value

            // 计算当前options中value值数组
            let optionValues = options.map(item => item.value)

            // 抽取已输入内容中的已选择子项内容
            let presentSelectedOptions = (
                (
                    (value || '')
                        .match(eval(`/${prefix || '@'}\\S{1,}\\s/g`))
                    || []
                )
                    .map(
                        s => s.slice(1, s.length).trim()
                    )
                    .concat([latestSelectedOption])
                    // 处理latestSelectedOption与options中value值的存在性问题
                    .filter(s => optionValues.indexOf(s) !== -1)
            )

            // 更新输入框中已标记子项value值列表
            setProps({
                selectedOptions: presentSelectedOptions
            })
        }

        return (
            <Mentions id={id}
                className={className}
                style={style}
                autoSize={autoSize}
                prefix={prefix}
                defaultValue={defaultValue}
                placement={placement}
                disabled={disabled}
                onChange={onChange}
                onSelect={onSelect}
                getPopupContainer={(triggerNode) => triggerNode.parentNode}
                // getPopupContainer={popupContainerId ? () => document.getElementById(popupContainerId) : popupContainerId}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
            >
                {
                    options.map(
                        (item, idx) => <Option value={item.value} key={idx}>{item.label}</Option>
                    )
                }
            </Mentions>
        );
    }
}

// 定义参数或属性
AntdMentions.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 设置悬浮组件所绑定的position: relative的祖先容器对应id，用于修正内嵌滚动条组件不跟随移动问题
    popupContainerId: PropTypes.string,

    // 设置是否开启自适应内容高度，默认为false
    // 特别地，还可以传入对象来自行设置最少最多展示的子项行数
    autoSize: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.exact({
            // 设置最小子项行数
            minRows: PropTypes.number,

            // 设置最大子项行数
            maxRows: PropTypes.number
        })
    ]),

    // 设置触发子项展开的关键字，默认为'@'
    prefix: PropTypes.string,

    // 设置默认子项值
    defaultValue: PropTypes.string,

    // 设置子项弹出层的展示位置，可选的有'top'与'bottom'，默认为'bottom'
    placement: PropTypes.oneOf(['top', 'bottom']),

    // 设置待提及的子项名称
    options: PropTypes.arrayOf(
        PropTypes.exact({
            // 子项标签文字
            label: PropTypes.string,

            // 子项值
            value: PropTypes.string
        })
    ),

    // 监听已选择子项value值数组
    selectedOptions: PropTypes.arrayOf(PropTypes.string),

    // 对应当前输入框中文本内容
    value: PropTypes.string,

    // 设置是否禁用，默认为false
    disabled: PropTypes.bool,

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
AntdMentions.defaultProps = {
    selectedOptions: []
}
