// react核心
import React from 'react';
import PropTypes from 'prop-types';
// antd核心
import { Breadcrumb, Menu } from 'antd';
import AntdIcon from '../general/AntdIcon.react';
// 辅助库
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { useLoading } from '../utils';
// 自定义hooks
import useCss from '../../hooks/useCss';

/**
 * 面包屑组件AntdBreadcrumb
 */
const AntdBreadcrumb = ({
    id,
    className,
    style,
    key,
    separator = '/',
    items,
    setProps,
    ...others
}) => {

    return (
        <Breadcrumb
            // 提取具有data-*或aria-*通配格式的属性
            {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), others)}
            id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            separator={separator}
            data-dash-is-loading={useLoading()}>
            {items.map(
                item => (
                    <Breadcrumb.Item
                        overlay={
                            item.menuItems ? <Menu>
                                {item.menuItems.map(
                                    menuItem => (
                                        <Menu.Item
                                            icon={
                                                menuItem.icon ?
                                                    (
                                                        menuItem.iconRenderer === 'fontawesome' ?
                                                            (
                                                                React.createElement(
                                                                    'i',
                                                                    {
                                                                        className: menuItem.icon,
                                                                        style: { marginRight: 3 }
                                                                    }
                                                                )
                                                            ) :
                                                            (
                                                                <AntdIcon icon={menuItem.icon} style={{ marginRight: 3 }} />
                                                            )
                                                    ) : null
                                            }
                                            disabled={menuItem.disabled}>
                                            <a href={menuItem.href}
                                                target={menuItem.target}>
                                                {menuItem.title}
                                            </a>
                                        </Menu.Item>
                                    )
                                )}
                            </Menu> : null
                        }
                        onClick={e => setProps({
                            clickedItem: {
                                itemTitle: item.title,
                                itemKey: item.key,
                                timestamp: Date.now()
                            }
                        })}
                    >
                        {
                            item.icon ? (
                                item.iconRenderer === 'fontawesome' ?
                                    (
                                        React.createElement(
                                            'i',
                                            {
                                                className: item.icon,
                                                style: { marginRight: 3 }
                                            }
                                        )
                                    ) :
                                    (
                                        <AntdIcon icon={item.icon} style={{ marginRight: 3 }} />
                                    )
                            ) : null
                        }
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

AntdBreadcrumb.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 当前组件css样式
     */
    style: PropTypes.object,

    /**
     * 当前组件css类名，支持[动态css](/advanced-classname)
     */
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    /**
     * 面包屑节点数据结构
     */
    items: PropTypes.arrayOf(
        PropTypes.exact({
            /**
             * 节点标题
             */
            title: PropTypes.string,
            /**
             * 节点唯一key值
             */
            key: PropTypes.string,
            /**
             * 节点链接地址
             */
            href: PropTypes.string,
            /**
             * 节点链接跳转行为
             */
            target: PropTypes.string,
            /**
             * 节点前缀图标名称，与`iconRenderer`方式相关联，`'AntdIcon'`方式下同AntdIcon的icon参数，`'fontawesome'`方式下代表图标的css类名
             */
            icon: PropTypes.string,
            /**
             * 前缀图标渲染方式，可选项有`'AntdIcon'`、`'fontawesome'`
             * 默认值：`'AntdIcon'`
             */
            iconRenderer: PropTypes.oneOf(['AntdIcon', 'fontawesome']),
            /**
             * 为当前节点设置下拉菜单生成所需的数据结构
             */
            menuItems: PropTypes.arrayOf(
                PropTypes.exact({
                    /**
                     * 下拉菜单节点标题
                     */
                    title: PropTypes.string,
                    /**
                     * 下拉菜单节点链接地址
                     */
                    href: PropTypes.string,
                    /**
                     * 下拉菜单节点链接跳转方式
                     */
                    target: PropTypes.string,
                    /**
                     * 是否禁用当前下拉菜单节点
                     */
                    disabled: PropTypes.bool,
                    /**
                     * 下拉菜单节点前缀图标名称，与`iconRenderer`方式相关联，`'AntdIcon'`方式下同AntdIcon的icon参数，`'fontawesome'`方式下代表图标的css类名
                     */
                    icon: PropTypes.string,
                    /**
                     * 前缀图标渲染方式，可选项有`'AntdIcon'`、`'fontawesome'`
                     * 默认值：`'AntdIcon'`
                     */
                    iconRenderer: PropTypes.oneOf(['AntdIcon', 'fontawesome'])
                })
            )
        })
    ),

    /**
     * 组件型，分隔符
     * 默认值：`'/'`
     */
    separator: PropTypes.node,

    /**
     * 监听面包屑节点点击事件
     */
    clickedItem: PropTypes.exact({
        /**
         * 被点击节点标题
         */
        itemTitle: PropTypes.string,
        /**
         * 被点击节点key值
         */
        itemKey: PropTypes.string,
        /**
         * 点击事件时间戳
         */
        timestamp: PropTypes.number
    }),

    /**
     * `data-*`格式属性通配
     */
    'data-*': PropTypes.string,

    /**
     * `aria-*`格式属性通配
     */
    'aria-*': PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export default AntdBreadcrumb;