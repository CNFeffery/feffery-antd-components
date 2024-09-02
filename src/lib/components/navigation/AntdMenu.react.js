// react核心
import React, { Component, useEffect } from 'react';
import PropTypes from 'prop-types';
// antd核心
import { Menu, Button } from 'antd';
import AntdIcon from "../general/AntdIcon.react";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
// 辅助库
import { get, isArray, isUndefined, isNull, isString, cloneDeep } from 'lodash';
import { pickBy } from 'ramda';
import isAbsoluteUrl from 'is-absolute-url';
// 自定义hooks
import useCss from '../../hooks/useCss';

const { SubMenu, Item, ItemGroup, Divider } = Menu;

// 自定义UtilsLink
function CustomEvent(event, params) {
    params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
    };
    const evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
}
CustomEvent.prototype = window.Event.prototype;

function isExternalLink(external_link, href) {
    if (isUndefined(external_link) || isNull(external_link)) {
        return isAbsoluteUrl(href);
    }
    return external_link;
}

function findByKey(array, key) {
    for (let item of array) {
        if (get(item, 'props.key') === key) {
            return item;
        }
        if (get(item, 'children') && isArray(get(item, 'children'))) {
            const result = findByKey(item.children, key);
            if (result) {
                return result;
            }
        }
    }
    return null;
}

function findKeyPath(array, key, path = []) {
    for (let item of array) {
        let currentPath = [...path, item.props.key];
        if (get(item, 'props.key') === key) {
            return currentPath;
        }
        if (get(item, 'children') && isArray(get(item, 'children'))) {
            const result = findKeyPath(item.children, key, currentPath);
            if (result) {
                return result;
            }
        }
    }
    return null;
}

class UtilsLink extends Component {

    constructor(props) {
        super(props);
        this.updateLocation = this.updateLocation.bind(this);
    }

    updateLocation(e) {
        const hasModifiers = e.metaKey || e.shiftKey || e.altKey || e.ctrlKey;
        if (hasModifiers) {
            return;
        }
        if (this.props.disabled) {
            e.preventDefault();
            return;
        }
        if (this.props.preOnClick) {
            this.props.preOnClick();
        }
        const { external_link, href } = this.props;
        if (href && !isExternalLink(external_link, href)) {
            // prevent anchor from updating location
            e.preventDefault();
            const { href } = this.props;
            window.history.pushState({}, '', href);
            window.dispatchEvent(new CustomEvent('_dashprivate_pushstate'));
            // scroll back to top
            window.scrollTo(0, 0);
        }
    }

    render() {
        const {
            children,
            external_link,
            preOnClick,
            target,
            href,
            download,
            ...otherProps
        } = this.props;
        const linkIsExternal = href && isExternalLink(external_link, href);

        return (
            <a
                href={href}
                target={linkIsExternal ? target : null}
                download={download && linkIsExternal ? download : null}
                {...otherProps}
                onClick={e => this.updateLocation(e)}
            >
                {children}
            </a>
        );
    }
}

// 字符串 -> 组件
const str2Jsx = new Map([
    ['SubMenu', SubMenu],
    ['Item', Item],
    ['ItemGroup', ItemGroup],
    ['Divider', Divider]
])

// 当前的SubMenu节点key值数组
const rootSubmenuKeys = [];

// 递归推导多层菜单结构
const raw2Jsx = (obj, str2Jsx, menuItemKeyToTitle) => {
    // 若obj为数组
    if (Array.isArray(obj)) {
        // 若obj为数组，则针对数组中每个对象向下递归
        obj = obj.map(obj_ => raw2Jsx(obj_, str2Jsx, menuItemKeyToTitle))

    } else if (obj.hasOwnProperty('component')) {
        // 若obj包含children属性，则向下递归处理
        if (obj.hasOwnProperty('children')) {
            Object.assign(obj, { children: obj.children.map(obj_ => raw2Jsx(obj_, str2Jsx, menuItemKeyToTitle)) })
            if (obj.component === 'SubMenu') {
                rootSubmenuKeys.push(obj.props.key)
                obj = <SubMenu
                    key={obj.props.key}
                    title={menuItemKeyToTitle[obj.props.key] || obj.props.title}
                    disabled={obj.props.disabled}
                    icon={
                        obj.props.iconRenderer === 'fontawesome' ?
                            (
                                React.createElement(
                                    'i',
                                    {
                                        className: obj.props.icon
                                    }
                                )
                            ) :
                            (
                                <AntdIcon icon={obj.props.icon} />
                            )
                    }>
                    {obj.children}
                </SubMenu>
            } else {
                obj = <ItemGroup
                    key={obj.props.key}
                    title={menuItemKeyToTitle[obj.props.key] || obj.props.title}
                    disabled={obj.props.disabled}
                    icon={
                        obj.props.iconRenderer === 'fontawesome' ?
                            (
                                React.createElement(
                                    'i',
                                    {
                                        className: obj.props.icon
                                    }
                                )
                            ) :
                            (
                                <AntdIcon icon={obj.props.icon} />
                            )
                    }>
                    {obj.children}
                </ItemGroup>
            }
        } else {
            // 检查obj.component是否为Divider
            if (obj.component === 'Divider') {
                obj = <Divider dashed={obj.props && obj.props.dashed} />
            } else if (obj.props.href) {
                // 生成Item对应的jsx
                obj = <Item
                    key={obj.props.key}
                    title={menuItemKeyToTitle[obj.props.key] || obj.props.title}
                    disabled={obj.props.disabled}
                    danger={obj.props.danger}
                    icon={
                        obj.props.iconRenderer === 'fontawesome' ?
                            (
                                React.createElement(
                                    'i',
                                    {
                                        className: obj.props.icon
                                    }
                                )
                            ) :
                            (
                                <AntdIcon icon={obj.props.icon} />
                            )
                    }
                    name={obj.props && obj.props.name}
                >
                    <UtilsLink href={obj.props.href} target={obj.props.target}>{menuItemKeyToTitle[obj.props.key] || obj.props.title}</UtilsLink>
                </Item>
            } else {
                obj = <Item
                    key={obj.props.key}
                    title={menuItemKeyToTitle[obj.props.key] || obj.props.title}
                    disabled={obj.props.disabled}
                    danger={obj.props.danger}
                    icon={
                        obj.props.iconRenderer === 'fontawesome' ?
                            (
                                React.createElement(
                                    'i',
                                    {
                                        className: obj.props.icon
                                    }
                                )
                            ) :
                            (
                                <AntdIcon icon={obj.props.icon} />
                            )
                    }
                    name={obj.props && obj.props.name}
                >
                    {menuItemKeyToTitle[obj.props.key] || obj.props.title}
                </Item>
            }
        }
    }
    return obj;
}

/**
 * 导航菜单组件AntdMenu
 */
const AntdMenu = (props) => {
    let {
        id,
        className,
        style,
        key,
        expandIcon,
        menuItems,
        menuItemKeyToTitle,
        mode,
        theme,
        defaultOpenKeys,
        currentKey,
        openKeys,
        onlyExpandCurrentSubMenu,
        defaultSelectedKey,
        renderCollapsedButton,
        popupContainer,
        inlineCollapsed,
        inlineIndent,
        triggerSubMenuAction,
        setProps,
        persistence,
        persisted_props,
        persistence_type,
        loading_state
    } = props;

    const onOpenChange = (keys) => {
        if (onlyExpandCurrentSubMenu) {
            const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
            if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
                setProps({ openKeys: keys });
            } else {
                setProps({ openKeys: latestOpenKey ? [latestOpenKey] : [] });
            }
        } else {
            setProps({ openKeys: keys });
        }
    };

    useEffect(() => {
        // 初始化currentKey
        if (defaultSelectedKey && !currentKey) {
            // 当defaultSelectedKey不为空且currentKey为空时
            // 为currentKey初始化defaultSelectedKey对应的key值
            setProps({ currentKey: defaultSelectedKey })
        }

        // 初始化openKeys
        if (defaultOpenKeys) {
            // 当defaultOpenKeys不为空且openKeys为空时
            // 为openKeys初始化defaultOpenKeys对应的key值
            setProps({ openKeys: defaultOpenKeys })
        }
    }, [])

    useEffect(() => {
        // 当currentKey发生变化时，自动查找currentKey对应的菜单信息
        let currentItem = findByKey(menuItems, currentKey)
        // 当currentKey发生变化时，自动查找currentKey对应的key路径信息和菜单路径信息
        let currentKeyPath = findKeyPath(menuItems, currentKey)
        let currentItemPath = currentKeyPath?.map(item => findByKey(menuItems, item))
        setProps({
            currentItem: currentItem,
            currentKeyPath: currentKeyPath,
            currentItemPath: currentItemPath
        })
    }, [currentKey])

    // 基于menuItems推导jsx数据结构
    let _menuItems = raw2Jsx(cloneDeep(menuItems), str2Jsx, menuItemKeyToTitle || {})

    // 监听Item的点击事件
    const listenSelected = (item) => {
        // 将当前选中的key值赋给currentKey
        setProps({ currentKey: item.key })
    }

    if (renderCollapsedButton) {
        return (
            <div style={{ width: '100%' }}>
                <Button type="primary" onClick={() => setProps({ inlineCollapsed: !inlineCollapsed })}>
                    {React.createElement(inlineCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                </Button>
                <Menu
                    // 提取具有data-*或aria-*通配格式的属性
                    {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), props)}
                    id={id}
                    className={
                        isString(className) ?
                            className :
                            (className ? useCss(className) : undefined)
                    }
                    style={style}
                    key={key}
                    expandIcon={
                        React.isValidElement(expandIcon)
                            ? expandIcon
                            : (props) => props.isSubMenu
                                ? (props.isOpen
                                    ? expandIcon.collapse
                                    : expandIcon.expand)
                                : undefined
                    }
                    mode={mode}
                    theme={theme}
                    selectedKeys={[currentKey]}
                    openKeys={openKeys}
                    defaultOpenKeys={defaultOpenKeys}
                    defaultSelectedKeys={defaultSelectedKey ? [defaultSelectedKey] : defaultSelectedKey}
                    onSelect={listenSelected}
                    onOpenChange={onOpenChange}
                    getPopupContainer={
                        popupContainer === 'parent' ?
                            (triggerNode) => triggerNode.parentNode :
                            undefined
                    }
                    inlineCollapsed={inlineCollapsed}
                    inlineIndent={inlineIndent}
                    triggerSubMenuAction={triggerSubMenuAction}
                    persistence={persistence}
                    persisted_props={persisted_props}
                    persistence_type={persistence_type}
                    data-dash-is-loading={
                        (loading_state && loading_state.is_loading) || undefined
                    }
                >
                    {_menuItems}
                </Menu>
            </div>
        );
    } else {
        return (
            <Menu
                // 提取具有data-*或aria-*通配格式的属性
                {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), props)}
                id={id}
                className={
                    isString(className) ?
                        className :
                        (className ? useCss(className) : undefined)
                }
                style={style}
                key={key}
                expandIcon={
                    React.isValidElement(expandIcon)
                        ? expandIcon
                        : (props) => props.isSubMenu
                            ? (props.isOpen
                                ? expandIcon.collapse
                                : expandIcon.expand)
                            : undefined
                }
                mode={mode}
                theme={theme}
                selectedKeys={[currentKey]}
                openKeys={openKeys}
                defaultOpenKeys={defaultOpenKeys}
                defaultSelectedKeys={defaultSelectedKey ? [defaultSelectedKey] : defaultSelectedKey}
                onSelect={listenSelected}
                onOpenChange={onOpenChange}
                getPopupContainer={
                    popupContainer === 'parent' ?
                        (triggerNode) => triggerNode.parentNode :
                        undefined
                }
                inlineCollapsed={inlineCollapsed}
                inlineIndent={inlineIndent}
                triggerSubMenuAction={triggerSubMenuAction}
                persistence={persistence}
                persisted_props={persisted_props}
                persistence_type={persistence_type}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
            >
                {_menuItems}
            </Menu>
        );
    }
}

AntdMenu.propTypes = {
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
     * 自定义展开图标，建议仅在`mode='inline'`时使用字典类型
     */
    expandIcon: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.exact({
            /**
             * 展开图标
             */
            expand: PropTypes.node,
            /**
             * 收起图标
             */
            collapse: PropTypes.node
        })
    ]),

    /**
     * 导航菜单数据结构
     */
    menuItems: PropTypes.array,

    /**
     * 为指定节点定义组件型菜单项标题，优先级高于menuItems中对应节点的title属性
     */
    menuItemKeyToTitle: PropTypes.objectOf(PropTypes.node),

    /**
     * 显示模式，可选项有`'vertical'`、`'horizontal'`、`'inline'`
     * 默认值：`'vertical'`
     */
    mode: PropTypes.oneOf(['vertical', 'horizontal', 'inline']),

    /**
     * 主题，可选项有`'light'`、`'dark'`
     * 默认值：`'light'`
     */
    theme: PropTypes.oneOf(['light', 'dark']),

    /**
     * 监听或设置当前已选中菜单项key值
     */
    currentKey: PropTypes.string,

    /**
     * 监听当前已选中菜单项信息
     */
    currentItem: PropTypes.object,

    /**
     * 监听当前已选中菜单项key值路径信息
     */
    currentKeyPath: PropTypes.array,

    /**
     * 监听当前已选中菜单项路径信息
     */
    currentItemPath: PropTypes.array,

    /**
     * 监听或设置当前已展开子菜单项key值
     */
    openKeys: PropTypes.arrayOf(PropTypes.string),

    /**
     * 是否只展开当前选中项的父级菜单
     * 默认值：`false`
     */
    onlyExpandCurrentSubMenu: PropTypes.bool,

    /**
     * 默认展开的菜单项key值
     */
    defaultOpenKeys: PropTypes.arrayOf(PropTypes.string),

    // 默认选中的菜单项对应key
    defaultSelectedKey: PropTypes.string,

    /**
     * 是否渲染菜单折叠状态控制按钮
     * 默认值：`false`
     */
    renderCollapsedButton: PropTypes.bool,

    /**
     * 菜单展开层锚定策略，可选项有`'parent'`、`'body'`
     * 默认值：`'body'`
     */
    popupContainer: PropTypes.oneOf(['parent', 'body']),

    /**
     * 当前菜单是否折叠，仅inline模式下有效
     * 默认值：`false`
     */
    inlineCollapsed: PropTypes.bool,

    /**
     * inline模式下，子菜单相对上一级的像素缩进宽度
     * 默认值：`24`
     */
    inlineIndent: PropTypes.number,

    /**
     * `SubMenu`展开/关闭的触发行为，可选项有`'hover'`、`'click'`，`mode='inline'`下无效
     * 默认值：`'hover'`
     */
    triggerSubMenuAction: PropTypes.oneOf(['hover', 'click']),

    /**
     * `data-*`格式属性通配
     */
    'data-*': PropTypes.string,

    /**
     * `aria-*`格式属性通配
     */
    'aria-*': PropTypes.string,

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
     * 是否为当前组件开启持久化功能
     */
    persistence: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.number
    ]),

    /**
     * 当前组件启用持久化的属性值数组，可选项有`'currentKey'`、`'openKeys'`
     * 默认值：`['currentKey', 'openKeys']`
     */
    persisted_props: PropTypes.arrayOf(PropTypes.oneOf(['currentKey', 'openKeys'])),

    /**
     * 当前组件的属性持久化存储类型
     * 默认值：`'local'`
     */
    persistence_type: PropTypes.oneOf(['local', 'session', 'memory'])
};

// 设置默认参数
AntdMenu.defaultProps = {
    mode: 'vertical',
    theme: 'light',
    onlyExpandCurrentSubMenu: false,
    renderCollapsedButton: false,
    popupContainer: 'body',
    inlineCollapsed: false,
    inlineIndent: 24,
    triggerSubMenuAction: 'hover',
    persisted_props: ['currentKey', 'openKeys'],
    persistence_type: 'local'
}

export default AntdMenu;