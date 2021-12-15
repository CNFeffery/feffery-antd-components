import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Menu, Button } from 'antd';
import { str2Icon } from './icons.react';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

// 定义下拉菜单组件AntdDropdown，api参数参考https://ant.design/components/dropdown-cn/
export default class AntdDropdown extends Component {
    render() {
        // 取得必要属性或参数
        let {
            id,
            className,
            style,
            title,
            buttonMode,
            arrow,
            disabled,
            overlayClassName,
            overlayStyle,
            placement,
            trigger,
            visible,
            menuItems,
            setProps,
            loading_state
        } = this.props;

        return (
            <Dropdown id={id}
                className={className}
                style={style}
                overlay={
                    <Menu onClick={(item, key, keyPath, domEvent) => (
                        setProps({
                            clickedKey: item.key
                        })
                    )}>
                        {
                            menuItems.map(
                                menuItem => (
                                    // 判断isDivider参数是否不为false
                                    menuItem.isDivider ?
                                        <Menu.Divider /> :
                                        <Menu.Item icon={str2Icon.get(menuItem.icon)}
                                            disabled={menuItem.disabled}
                                            key={menuItem.key ? menuItem.key : menuItem.title}>
                                            <a href={menuItem.href}
                                                target={menuItem.target}>
                                                {menuItem.title}
                                            </a>
                                        </Menu.Item>
                                )
                            )
                        }
                    </Menu>
                }
                arrow={arrow}
                disabled={disabled}
                overlayClassName={overlayClassName}
                overlayStyle={overlayStyle}
                placement={placement}
                trigger={[trigger]}
                visible={visible}
                onVisibleChange={(v) => setProps({
                    visible: v
                })}
                getPopupContainer={(triggerNode) => triggerNode.parentNode}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }>
                {
                    buttonMode ?
                        <Button>
                            {title} <DownOutlined />
                        </Button>
                        :
                        <a className="ant-dropdown-link"
                            onClick={e => e.preventDefault()}>
                            {title} <DownOutlined />
                        </a>
                }
            </Dropdown>
        );
    }
}

// 定义参数或属性
AntdDropdown.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 设置下拉菜单触发点文字标题信息
    title: PropTypes.string,

    // 设置下拉菜单触发节点是否渲染为“按钮模式”，默认为false
    buttonMode: PropTypes.bool,

    // 记录最近一次被点击的下拉菜单选项对应key
    clickedKey: PropTypes.string,

    // 用于设置下拉菜单的数据结构
    menuItems: PropTypes.arrayOf(
        PropTypes.exact({
            // 定义节点文字内容
            title: PropTypes.string,

            // 定义节点链接url
            href: PropTypes.string,

            // 定义节点链接跳转target属性
            target: PropTypes.string,

            // 设置是否禁用当前节点，默认为false
            disabled: PropTypes.bool,

            // 自定义前缀图标，与AntdIcon相通
            icon: PropTypes.string,

            // 自定义key值，用于监听点击事件必填
            key: PropTypes.string,

            // 自定义当前节点是否为分割线，若设置为true，则会忽略其他同级参数
            isDivider: PropTypes.bool
        })
    ),

    // 设置下拉框是否显示连接箭头，默认为false
    arrow: PropTypes.bool,

    // 是否禁用功能，默认为false
    disabled: PropTypes.bool,

    // 设置下拉菜单容器的类名
    overlayClassName: PropTypes.string,

    // 设置下拉菜单容器的样式
    overlayStyle: PropTypes.object,

    // 设置菜单弹出的方位，可选的有'bottomLeft'、'bottomCenter'、'bottomRight'、
    // 'topLeft'、'topCenter'与'topRight'
    placement: PropTypes.oneOf([
        'bottomLeft', 'bottomCenter', 'bottomRight',
        'topLeft', 'topCenter', 'topRight'
    ]),

    // 设置触发下拉菜单显示的行为，'click'表示点击，'hover'表示鼠标悬浮
    trigger: PropTypes.oneOf(['click', 'hover']),

    // 对应下拉菜单是否显示，默认为false
    visible: PropTypes.bool,

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
AntdDropdown.defaultProps = {
    visible: false,
    buttonMode: false,
    trigger: 'hover'
}
