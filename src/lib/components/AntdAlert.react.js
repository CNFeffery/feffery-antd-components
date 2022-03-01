import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextLoop from 'react-text-loop'
import { Alert } from 'antd';
import { omit } from "ramda";
import { renderDashComponents } from "dash-extensions-js";
import Marquee from 'react-fast-marquee';
import 'antd/dist/antd.css';

// 定义警告提示组件AntdAlert，api参数参考https://ant.design/components/alert-cn/
export default class AntdAlert extends Component {
    render() {
        // 取得必要属性或参数
        let {
            id,
            className,
            style,
            message,
            description,
            type,
            showIcon,
            closable,
            messageRenderMode,
            setProps,
            loading_state
        } = this.props;

        // 解析非children参数传入的其他组件数组
        let nProps = omit(
            ["setProps", "children", "loading_state", "className"],
            this.props
        );
        nProps = renderDashComponents(nProps, ["message", "description"]);

        if (messageRenderMode === 'loop-text' && Array.isArray(nProps.message)) {
            return (
                <Alert id={id}
                    className={className}
                    style={style}
                    message={
                        <TextLoop mask>
                            {nProps.message.map(item => <div>{item}</div>)}
                        </TextLoop>
                    }
                    type={type}
                    description={nProps.description}
                    showIcon={showIcon}
                    closable={closable}
                    data-dash-is-loading={
                        (loading_state && loading_state.is_loading) || undefined
                    }>
                </Alert>
            );
        }

        return (
            <Alert id={id}
                className={className}
                style={style}
                message={
                    messageRenderMode === 'marquee' ?
                        <Marquee pauseOnHover gradient={false}>
                            {nProps.message}
                        </Marquee> :
                        nProps.message
                }
                type={type}
                description={nProps.description}
                showIcon={showIcon}
                closable={closable}>
            </Alert>
        );
    }
}

// 定义参数或属性
AntdAlert.propTypes = {

    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 设置警告组件内的额外信息元素
    description: PropTypes.any,

    // 设置显示的文字信息
    message: PropTypes.oneOfType([
        PropTypes.any,
        PropTypes.arrayOf(PropTypes.any)
    ]),

    // 设置提示类型，可选的有'success'、'info'、'warning'和'error'四种
    type: PropTypes.oneOf(['success', 'info', 'warning', 'error']),

    // 设置是否显示辅助图标，默认为false
    showIcon: PropTypes.bool,

    // 设置警告提示是否有关闭按钮，默认为false
    closable: PropTypes.bool,

    // 设置message的渲染模式，可选的有'default'、'loop-text'（轮播文字）与'marquee'（跑马灯），默认为'default'
    // 其中loop-text模式需要message输入为数组
    messageRenderMode: PropTypes.oneOf(['default', 'loop-text', 'marquee']),

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,

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
    })
};

// 设置默认参数
AntdAlert.defaultProps = {
    closable: false,
    messageRenderMode: 'default'
}
