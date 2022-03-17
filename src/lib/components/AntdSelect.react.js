import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Select, ConfigProvider } from 'antd';
import { str2Locale } from './locales.react';
import 'antd/dist/antd.css';

const { Option, OptGroup } = Select;

// 定义下拉选择组件AntdSelect，api参数参考https://ant.design/components/select-cn/
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
        let {
            id,
            style,
            className,
            locale,
            setProps,
            placeholder,
            size,
            options,
            colorsNameWidth,
            allowClear,
            disabled,
            value,
            mode,
            defaultValue,
            maxTagCount,
            listHeight,
            colorsMode,
            placement,
            status,
            loading_state,
            persistence,
            persisted_props,
            persistence_type
        } = this.props;

        // 用于获取用户已选择值的回调函数
        function updateSelectedValue(value) {
            setProps({ value: value })
        }

        // 基于dash端传入的options参数，推导出对应的组件
        var optionsJsx = [];
        for (var i = 0; i < options.length; i++) {
            // 当存在分组时
            if (options[i].hasOwnProperty('group')) {
                var groupOptions = [];
                // 构造OptGroup > Option结构
                for (var j = 0; j < options[i].options.length; j++) {
                    groupOptions.push(
                        <Option value={options[i].options[j].value} disabled={options[i].options[j].disabled}>
                            {
                                options[i].options[j].colors ?
                                    <div style={{ display: 'flex' }}>
                                        <div style={{
                                            flex: 'none',
                                            textAlign: 'center',
                                            width: colorsNameWidth,
                                            fontSize: 12
                                        }}>{options[i].options[j].label}</div>
                                        {
                                            colorsMode === 'sequential' ? <div style={{
                                                margin: "1px 0 1px 10px",
                                                borderRadius: "2px",
                                                flex: 'auto',
                                                background: options[i].options[j].colors.length > 1 ?
                                                    `linear-gradient(to right, ${options[i].options[j].colors.join()})` : options[i].options[j].colors[0]
                                            }} /> : <div style={{
                                                margin: "1px 0 1px 10px",
                                                borderRadius: "2px",
                                                flex: 'auto',
                                                'display': 'flex'
                                            }} >{
                                                    options[i].options[j].colors.map(c => <div style={{
                                                        flex: 'auto',
                                                        background: c
                                                    }} />)
                                                }</ div>
                                        }
                                    </div> : options[i].options[j].label
                            }
                        </Option>
                    )
                }
                optionsJsx.push(<OptGroup label={options[i].group}>{groupOptions}</OptGroup>)
            } else {
                optionsJsx.push(<Option value={options[i].value} disabled={options[i].disabled}>
                    {
                        options[i].colors ?
                            <div style={{ display: 'flex' }}>
                                <div style={{
                                    flex: 'none',
                                    textAlign: 'center',
                                    fontSize: 12,
                                    width: colorsNameWidth
                                }}>{options[i].label}</div>
                                {
                                    colorsMode === 'sequential' ? <div style={{
                                        margin: "1px 0 1px 10px",
                                        borderRadius: "2px",
                                        flex: 'auto',
                                        background: options[i].colors.length > 1 ?
                                            `linear-gradient(to right, ${options[i].colors.join()})` : options[i].colors[0]
                                    }} /> : <div style={{
                                        margin: "1px 0 1px 10px",
                                        borderRadius: "2px",
                                        flex: 'auto',
                                        'display': 'flex'
                                    }} >{
                                            options[i].colors.map(c => <div style={{
                                                flex: 'auto',
                                                background: c
                                            }} />)
                                        }</ div>
                                }

                            </div> : options[i].label
                    }
                </Option>)
            }
        }

        // 返回定制化的前端组件
        return (
            <ConfigProvider locale={str2Locale.get(locale)}>
                <Select
                    id={id}
                    className={className}
                    style={style}
                    mode={mode}
                    allowClear={allowClear}
                    placeholder={placeholder}
                    size={size}
                    value={value}
                    defaultValue={defaultValue}
                    onChange={updateSelectedValue}
                    maxTagCount={maxTagCount}
                    listHeight={listHeight}
                    disabled={disabled}
                    showSearch={true}
                    placement={placement}
                    status={status}
                    persistence={persistence}
                    persisted_props={persisted_props}
                    persistence_type={persistence_type}
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
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 设置语言环境，可选的有'zh-cn'、'en-us'
    locale: PropTypes.oneOf(['zh-cn', 'en-us']),

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
                disabled: PropTypes.bool,

                // 设置色带特殊渲染模式，接受以css色彩字符串为元素的数组
                // 会基于linear-gradient()对传入的色彩数组按顺序进行线性渲染
                colors: PropTypes.arrayOf(PropTypes.string)
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
                        disabled: PropTypes.bool,

                        // 设置色带特殊渲染模式，接受以css色彩字符串为元素的数组
                        // 会基于linear-gradient()对传入的色彩数组按顺序进行线性渲染
                        colors: PropTypes.arrayOf(PropTypes.string)
                    })
                )

            })
        ])
    ),

    // 手动设置colors模式下，颜色名称的像素宽度，默认为40
    colorsNameWidth: PropTypes.number,

    // 设置是否渲染内容清空按钮，默认为true
    allowClear: PropTypes.bool,

    // 设置选择模式（multiple：多选，tags：无则新增模式。默认为单选）
    mode: PropTypes.oneOf(['multiple', 'tags']),

    // 设置是否禁用整个组件
    disabled: PropTypes.bool,

    // 选择框默认文本
    placeholder: PropTypes.string,

    // 设置组件尺寸规格，可选的有'small'、'middle'及'large'
    size: PropTypes.oneOf([
        'small',
        'middle',
        'large'
    ]),

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

    // 色带模式下用于设置连续色带还是离散色带，可选的有'sequential'、'diverging'
    colorsMode: PropTypes.oneOf(['sequential', 'diverging']),

    // 用于设置悬浮展开层的方位，可选的有'bottomLeft'、'bottomRight'、'topLeft'、'topRight'
    // 默认为'bottomLeft'
    placement: PropTypes.oneOf(['bottomLeft', 'bottomRight', 'topLeft', 'topRight']),

    // 设置校验状态，可选的有'error'、'warning'
    status: PropTypes.oneOf(['error', 'warning']),

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
AntdSelect.defaultProps = {
    allowClear: true,
    maxTagCount: 5,
    listHeight: 256,
    options: [],
    colorsNameWidth: 40,
    colorsMode: 'sequential',
    persisted_props: ['value'],
    persistence_type: 'local',
    locale: 'zh-cn'
}