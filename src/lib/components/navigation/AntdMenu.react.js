import React, { Component, useEffect } from 'react';
import isAbsoluteUrl from 'is-absolute-url';
import PropTypes from 'prop-types';
import AntdIcon from "../general/AntdIcon.react";
import { isUndefined, isNull, isString, cloneDeep } from 'lodash';
import { Menu, Button } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
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

// 定义字符串-> 组件 Map对象
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

// 定义导航菜单组件AntdMenu，api参数参考https://ant.design/components/menu-cn/
const AntdMenu = (props) => {
    // 取得必要属性或参数
    let {
        id,
        className,
        style,
        key,
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
                    id={id}
                    className={
                        isString(className) ?
                            className :
                            (className ? useCss(className) : undefined)
                    }
                    style={style}
                    key={key}
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
                id={id}
                className={
                    isString(className) ?
                        className :
                        (className ? useCss(className) : undefined)
                }
                style={style}
                key={key}
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

// 定义参数或属性
AntdMenu.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    // 自定义css字典
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 用于构建菜单内容结构的对象
    menuItems: PropTypes.array,

    // 用于针对具体key值对应的菜单项定义组件型标题内容
    // 优先级高于menuItems中对应节点的title属性
    menuItemKeyToTitle: PropTypes.objectOf(PropTypes.node),

    // 用于设置导航菜单显示模式
    // 默认'vertical'即垂直显示模式
    // 'horizontal'表示水平显示模式
    // 'inline'表示垂直内嵌显示模式
    mode: PropTypes.oneOf(['vertical', 'horizontal', 'inline']),

    // 用于设置导航菜单整体风格主题
    // 默认'light'即明亮主题
    // 'dark'为暗黑主题
    theme: PropTypes.oneOf(['light', 'dark']),

    // 对应当前被选中的选项对应key
    currentKey: PropTypes.string,

    // 对应当前展开的SubMenu节点key值数组
    openKeys: PropTypes.arrayOf(PropTypes.string),

    // 设置是否只展开当前父级菜单
    onlyExpandCurrentSubMenu: PropTypes.bool,

    // 默认展开的SubMenu菜单项key值数组
    defaultOpenKeys: PropTypes.arrayOf(PropTypes.string),

    // 默认选中的菜单项对应key
    defaultSelectedKey: PropTypes.string,

    // 设置是否渲染菜单展开/收缩按钮
    renderCollapsedButton: PropTypes.bool,

    // 设置悬浮层锚定策略，可选的有'parent'、'body'，默认为'body'
    popupContainer: PropTypes.oneOf(['parent', 'body']),

    // 设置当前菜单是否处于折叠状态（仅inline模式下有效），默认为false
    inlineCollapsed: PropTypes.bool,

    // 设置inline模式下，子菜单缩进像素宽度
    // 默认为：24
    inlineIndent: PropTypes.number,

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
    persisted_props: PropTypes.arrayOf(PropTypes.oneOf(['currentKey', 'openKeys'])),

    /**
     * Where persisted user changes will be stored:
     * memory: only kept in memory, reset on page refresh.
     * local: window.localStorage, data is kept after the browser quit.
     * session: window.sessionStorage, data is cleared once the browser quit.
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
    persisted_props: ['currentKey', 'openKeys'],
    persistence_type: 'local'
}

export default AntdMenu;