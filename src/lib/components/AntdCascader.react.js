import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Cascader, ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';

// 定义级联选择部件AntdCascader，api参数参考https://ant.design/components/cascader-cn/
export default class AntdCascader extends Component {

    constructor(props) {
        super(props)
        if (!props.value) {
            props.setProps({ value: props.defaultValue })
        }

    }

    render() {
        // 取得必要属性或参数
        let {
            id,
            style,
            className,
            options,
            changeOnSelect,
            size,
            bordered,
            disabled,
            placeholder,
            defaultValue,
            expandTrigger,
            popupPlacement,
            setProps,
            loading_state
        } = this.props;


        const filter = (inputValue, path) => {
            return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
        }

        const onSelect = (e) => {
            setProps({ value: e })
        }

        // 返回定制化的前端部件
        return (
            <ConfigProvider locale={zhCN}>
                <Cascader
                    id={id}
                    className={className}
                    style={{ ...{ width: '100%' }, ...style }}
                    options={options}
                    changeOnSelect={changeOnSelect}
                    size={size}
                    bordered={bordered}
                    disabled={disabled}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    popupPlacement={popupPlacement}
                    expandTrigger={expandTrigger}
                    showSearch={filter}
                    onChange={onSelect}
                    data-dash-is-loading={
                        (loading_state && loading_state.is_loading) || undefined
                    }
                    getPopupContainer={(triggerNode) => triggerNode.parentNode}
                />
            </ConfigProvider>
        );
    }
}

// 定义递归PropTypes
const PropOptionNodeShape = {
    // 选项对应的值
    value: PropTypes.string.isRequired,

    // 选项对应显示的文字标题
    label: PropTypes.string.isRequired,

    // 设置是否禁止选中
    disabled: PropTypes.bool,

};

const PropOptionNode = PropTypes.shape(PropOptionNodeShape);
PropOptionNodeShape.children = PropTypes.arrayOf(PropOptionNode);
const optionDataPropTypes = PropTypes.arrayOf(PropOptionNode);

// 定义参数或属性
AntdCascader.propTypes = {
    // 部件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 组织选项层级结构对应的json数据
    options: optionDataPropTypes.isRequired,

    // 设置是否禁用组件
    disabled: PropTypes.bool,

    // 设置是否任意节点被选择都会被触发选值改变回调
    // 而不一定非要选中末端叶节点
    changeOnSelect: PropTypes.bool,

    // 设置组件尺寸大小，可选的有'small'、'middle'及'large'，默认为'middle'
    size: PropTypes.string,

    // 设置是否渲染边框
    bordered: PropTypes.bool,

    // 设置选择框默认填充说明文字
    placeholder: PropTypes.string,

    // 设置默认的选中项
    defaultValue: PropTypes.arrayOf(PropTypes.string),

    // 对应回调中用户已选择的值
    value: PropTypes.arrayOf(PropTypes.string),

    // 设置子菜单展开交互方式，可选的有'click'和'hover'，默认为'click'
    expandTrigger: PropTypes.string,

    // 设置悬浮层的弹出位置，可选的有'bottomLeft'、'bottomRight'、'topLeft'与'topRight'，默认为'bottomLeft'
    popupPlacement: PropTypes.string,

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
AntdCascader.defaultProps = {
    changeOnSelect: false
}
