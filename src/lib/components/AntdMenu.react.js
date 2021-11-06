import React, { Component } from 'react';
import isAbsoluteUrl from 'is-absolute-url';
import PropTypes from 'prop-types';
import { Menu, Button } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import './styles.css'
import { str2Icon } from './icons.react'

const { SubMenu, Item, ItemGroup } = Menu;

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
    if (typeof external_link === 'undefined' || external_link === null) {
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

// 定义导航菜单部件AntdMenu，api参数参考https://ant.design/components/menu-cn/
export default class AntdMenu extends Component {

    constructor(props) {
        super(props)
        // 初始化value
        if (props.defaultSelectedKey) {
            // 当defaultSelectedKey不为空时，为currentKey初始化defaultSelectedKey对应的key值
            props.setProps({ currentKey: props.defaultSelectedKey })
        }
    }

    state = {
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        // 取得必要属性或参数
        let {
            id,
            className,
            style,
            menuItems,
            mode,
            theme,
            defaultOpenKeys,
            currentKey,
            defaultSelectedKey,
            renderCollapsedButton,
            setProps,
            loading_state
        } = this.props;

        if (!currentKey && defaultSelectedKey) {
            currentKey = defaultSelectedKey
        }

        // 定义字符串-> 组件 Map对象
        let str2Jsx = new Map([['SubMenu', SubMenu], ['Item', Item], ['ItemGroup', ItemGroup]])

        // 递归推导jsonx可解析的对象
        function raw2Jsx(obj, str2Jsx, str2Icon) {
            // 若obj为数组
            if (Array.isArray(obj)) {
                // 若obj为数组，则针对数组中每个对象向下递归
                obj = obj.map(obj_ => raw2Jsx(obj_, str2Jsx, str2Icon))

            } else if (obj.hasOwnProperty('component')) {
                // 若obj包含children属性，则向下递归处理
                if (obj.hasOwnProperty('children')) {
                    Object.assign(obj, { children: obj.children.map(obj_ => raw2Jsx(obj_, str2Jsx, str2Icon)) })

                    if (obj.component === 'SubMenu') {
                        obj = <SubMenu
                            key={obj.props.key}
                            title={obj.props.title}
                            disabled={obj.props.disabled}
                            icon={str2Icon.get(obj.props.icon)}>
                            {obj.children}
                        </SubMenu>
                    } else {
                        obj = <ItemGroup
                            key={obj.props.key}
                            title={obj.props.title}
                            disabled={obj.props.disabled}
                            icon={str2Icon.get(obj.props.icon)}>
                            {obj.children}
                        </ItemGroup>
                    }
                } else {

                    // 生成Item对应的jsx
                    if (obj.props.href) {
                        obj = <Item
                            key={obj.props.key}
                            title={obj.props.title}
                            disabled={obj.props.disabled}
                            danger={obj.props.danger}
                            icon={str2Icon.get(obj.props.icon)}
                        >
                            <UtilsLink href={obj.props.href} target={obj.props.target}>{obj.props.title}</UtilsLink>
                        </Item>
                    } else {
                        obj = <Item
                            key={obj.props.key}
                            title={obj.props.title}
                            disabled={obj.props.disabled}
                            danger={obj.props.danger}
                            icon={str2Icon.get(obj.props.icon)}
                        >
                            {obj.props.title}
                        </Item>
                    }
                }
            }
            return obj;
        }

        // 避免非初始化情况下的递归处理
        if (typeof menuItems[0].component == 'string') {
            menuItems = raw2Jsx(menuItems, str2Jsx, str2Icon)
        }

        // 监听Item的点击事件
        function listenSelected(item) {
            // 将当前选中的key值赋给currentKey
            setProps({ currentKey: item.key })
        }

        if (renderCollapsedButton) {
            return (

                <div style={{ width: '100%' }}>
                    <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                    </Button>
                    <Menu
                        id={id}
                        className={className}
                        style={style}
                        mode={mode}
                        theme={theme}
                        selectedKeys={[currentKey]}
                        defaultOpenKeys={defaultOpenKeys}
                        defaultSelectedKeys={defaultSelectedKey ? [defaultSelectedKey] : defaultSelectedKey}
                        selectedKeys={[currentKey]}
                        onSelect={listenSelected}
                        inlineCollapsed={this.state.collapsed}
                        data-dash-is-loading={
                            (loading_state && loading_state.is_loading) || undefined
                        }
                    >
                        {menuItems}
                    </Menu>
                </div>
            );
        } else {
            return (
                <Menu
                    id={id}
                    className={className}
                    style={style}
                    mode={mode}
                    theme={theme}
                    selectedKeys={[currentKey]}
                    defaultOpenKeys={defaultOpenKeys}
                    defaultSelectedKeys={defaultSelectedKey ? [defaultSelectedKey] : defaultSelectedKey}
                    onSelect={listenSelected}
                    data-dash-is-loading={
                        (loading_state && loading_state.is_loading) || undefined
                    }
                >
                    {menuItems}
                </Menu>
            );
        }


    }
}

// 定义参数或属性
AntdMenu.propTypes = {
    // 部件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 用于构建菜单内容结构的对象
    menuItems: PropTypes.array,

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

    // 默认展开的SubMenu菜单项key值数组
    defaultOpenKeys: PropTypes.arrayOf(PropTypes.string),

    // 默认选中的菜单项对应key
    defaultSelectedKey: PropTypes.string,

    // 设置是否渲染菜单展开/收缩按钮
    renderCollapsedButton: PropTypes.bool,

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
AntdMenu.defaultProps = {
    mode: 'vertical',
    theme: 'light',
    renderCollapsedButton: false
}
