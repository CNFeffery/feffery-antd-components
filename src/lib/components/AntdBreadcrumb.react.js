import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb, Menu } from 'antd';
import { str2Icon } from './icons.react';
import 'antd/dist/antd.css';

// 定义面包屑组件AntdBreadcrumb，api参数参考https://ant.design/components/breadcrumb-cn/
export default class AntdBreadcrumb extends Component {
    render() {
        // 取得必要属性或参数
        let {
            id,
            className,
            style,
            separator,
            items,
            setProps,
            loading_state
        } = this.props;

        return (
            <Breadcrumb id={id}
                className={className}
                style={style}
                separator={separator}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }>
                {items.map(
                    item => (
                        <Breadcrumb.Item
                            overlay={
                                item.menuItems ? <Menu>
                                    {item.menuItems.map(
                                        menuItem => (
                                            <Menu.Item icon={str2Icon.get(menuItem.icon)}
                                                disabled={menuItem.disabled}>
                                                <a href={menuItem.href}
                                                    target={menuItem.target}>
                                                    {menuItem.title}
                                                </a>
                                            </Menu.Item>
                                        )
                                    )}
                                </Menu> : null
                            }>
                            {str2Icon.get(item.icon)}
                            <a href={item.href}
                                target={item.target}>
                                {item.title}
                            </a>
                        </Breadcrumb.Item>
                    )
                )}
            </Breadcrumb>
        );
    }
}

// 定义参数或属性
AntdBreadcrumb.propTypes = {
    // 部件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 定义生成面包屑的数据结构
    items: PropTypes.arrayOf(
        PropTypes.exact({
            // 定义节点文字内容
            title: PropTypes.string,

            // 定义节点链接url
            href: PropTypes.string,

            // 定义节点链接跳转target属性
            target: PropTypes.string,

            // 自定义前缀图标，与AntdIcon相通
            icon: PropTypes.string,

            // 可选，用于设置在当前节点下生成下拉菜单的数据结构
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
                    icon: PropTypes.string
                })
            )
        })
    ),

    // 自定义分隔符
    separator: PropTypes.string,

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
AntdBreadcrumb.defaultProps = {
}
