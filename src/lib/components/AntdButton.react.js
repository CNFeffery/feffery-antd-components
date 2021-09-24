import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import 'antd/dist/antd.css';

// 定义分割线部件AntdButton，api参数参考https://ant.design/components/button-cn/
export default class AntdButton extends Component {
    render() {
        // 取得必要属性或参数
        const { id, children, className, style, setProps, type, href, target, block, danger, disabled, shape, size, loading_state } = this.props;

        var { nClicks } = this.props;

        // 监听点击事件并更新n_clicks属性的回调函数
        function updateClick(e) {
            nClicks++;
            // 更新nClicks
            setProps({ nClicks: nClicks })
        }

        // 返回定制化的前端部件
        return (
            <Button
                id={id}
                className={className}
                style={style}
                type={type}
                href={href}
                target={target}
                block={block}
                danger={danger}
                disabled={disabled}
                shape={shape}
                size={size}
                onClick={updateClick}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
            >{children}
            </Button>
        );
    }
}

// 定义参数或属性
AntdButton.propTypes = {
    // 部件id
    id: PropTypes.string,

    // 内嵌文字的文本内容
    children: PropTypes.node,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 设置按钮整体风格（可选项有primary、ghost、dashed、link、text、default，默认为default）
    type: PropTypes.string,

    // 设置跳转网址，功能同a标签
    href: PropTypes.string,

    // 配合href参数使用，设置跳转的动作类型
    target: PropTypes.string,

    // 设置按钮是否撑满父级元素的宽度，默认为false
    block: PropTypes.bool,

    // 设置按钮是否显示为危险状态，默认为false
    danger: PropTypes.bool,

    // 设置按钮是否以失效状态渲染，默认为false
    disabled: PropTypes.bool,

    // 设置按钮形状（circle：圆形，round：圆角矩形，默认不设置，即正常矩形）
    shape: PropTypes.string,

    // 设置按钮大小尺寸，可选的有'small'、'middle'和'large'，默认为'middle'
    size: PropTypes.string,

    // 记录按钮从渲染后开始被点击的次数，默认为0
    nClicks: PropTypes.number,

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
AntdButton.defaultProps = {
    type: 'default',
    block: false,
    danger: false,
    disabled: false,
    nClicks: 0
}
