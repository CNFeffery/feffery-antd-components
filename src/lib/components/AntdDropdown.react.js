import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Menu, Button } from 'antd';
import AntdIcon from './AntdIcon.react';
import { DownOutlined } from '@ant-design/icons';
import { isString, isUndefined } from 'lodash';
import useCss from '../hooks/useCss';
import PropsContext from '../contexts/PropsContext';


// 定义下拉菜单组件AntdDropdown，api参数参考https://ant.design/components/dropdown-cn/
const AntdDropdown = (props) => {
    // 取得必要属性或参数
    let {
        id,
        className,
        style,
        key,
        title,
        buttonMode,
        arrow,
        disabled,
        overlayClassName,
        overlayStyle,
        placement,
        trigger,
        autoAdjustOverflow,
        visible,
        menuItems,
        nClicks,
        popupContainer,
        buttonProps,
        freePosition,
        freePositionStyle,
        freePositionClassName,
        setProps,
        loading_state
    } = props;

    const context = useContext(PropsContext)

    return (
        <Dropdown id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            overlay={
                <Menu onClick={(item, key, keyPath, domEvent) => (
                    setProps({
                        clickedKey: item.key,
                        nClicks: nClicks + 1,
                        ...(
                            freePosition ?
                                {
                                    visible: false
                                } :
                                {}
                        )
                    })
                )}>
                    {
                        menuItems.map(
                            menuItem => (
                                // 判断isDivider参数是否不为false
                                menuItem.isDivider ?
                                    <Menu.Divider /> :
                                    <Menu.Item
                                        icon={
                                            menuItem.icon ?
                                                (
                                                    menuItem.iconRenderer === 'fontawesome' ?
                                                        (
                                                            React.createElement(
                                                                'i',
                                                                {
                                                                    className: menuItem.icon
                                                                }
                                                            )
                                                        ) :
                                                        (
                                                            <AntdIcon icon={menuItem.icon} />
                                                        )
                                                ) : null
                                        }
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
            disabled={
                context && !isUndefined(context.componentDisabled) ?
                    context.componentDisabled :
                    disabled
            }
            overlayClassName={
                isString(overlayClassName) ?
                    overlayClassName :
                    (overlayClassName ? useCss(overlayClassName) : undefined)
            }
            overlayStyle={overlayStyle}
            placement={placement}
            trigger={[trigger]}
            autoAdjustOverflow={autoAdjustOverflow}
            open={visible}
            onOpenChange={(v) => setProps({
                visible: v
            })}
            getPopupContainer={
                popupContainer === 'parent' ?
                    (triggerNode) => triggerNode.parentNode :
                    undefined
            }
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }>
            {
                // 开启自由位置模式
                freePosition ?
                    (
                        <div
                            style={{
                                width: 1,
                                height: 1,
                                position: 'fixed',
                                background: 'transparent',
                                ...freePositionStyle
                            }}
                            className={freePositionClassName}
                        />
                    ) :
                    (
                        buttonMode ?
                            <Button
                                {...buttonProps}
                            >
                                {title} <DownOutlined />
                            </Button>
                            :
                            <a className="ant-dropdown-link"
                                onClick={e => e.preventDefault()}>
                                {title} <DownOutlined />
                            </a>
                    )
            }
        </Dropdown>
    );
}

// 定义参数或属性
AntdDropdown.propTypes = {
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

    // 设置下拉菜单触发点文字标题信息
    title: PropTypes.string,

    // 设置下拉菜单触发节点是否渲染为“按钮模式”，默认为false
    buttonMode: PropTypes.bool,

    // 配置按钮模式下，按钮的一些基本属性
    buttonProps: PropTypes.exact({
        // 设置按钮尺寸规格，可选的有'default'/'small'/'large'
        size: PropTypes.oneOf(['default', 'small', 'large']),

        // 设置按钮整体风格（可选项有primary、ghost、dashed、link、text、default）
        type: PropTypes.oneOf(['primary', 'ghost', 'dashed', 'link', 'text', 'default']),

        // 设置按钮是否显示为危险状态
        danger: PropTypes.bool,

        // 设置按钮的css样式
        style: PropTypes.object,

        // 设置按钮的css类名
        className: PropTypes.string
    }),

    // 设置是否开启自由位置模式，默认为false，此项开启后会覆盖buttonMode参数
    freePosition: PropTypes.bool,

    // 当freePosition=true时，用于为自由位置挂载位置设置css样式
    freePositionStyle: PropTypes.object,

    // 当freePosition=true时，用于为自由位置挂载位置设置css类
    freePositionClassName: PropTypes.string,

    // 记录最近一次被点击的下拉菜单选项对应key
    clickedKey: PropTypes.string,

    // 记录总被点击次数，用于在clickedKey未更新时辅助触发回调
    nClicks: PropTypes.number,

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

            // 针对icon参数值设置渲染方式，默认为'AntdIcon'即icon等价于AntdIcon的icon参数
            // 当设置为'fontawesome'时，icon参数对应fontawesome图标的css类名
            iconRenderer: PropTypes.oneOf(['AntdIcon', 'fontawesome']),

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
    overlayClassName: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

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

    // 用于设置是否在下拉菜单被遮挡时自动调整位置，默认为true
    autoAdjustOverflow: PropTypes.bool,

    // 对应下拉菜单是否显示，默认为false
    visible: PropTypes.bool,

    // 设置悬浮层锚定策略，可选的有'parent'、'body'，默认为'body'
    popupContainer: PropTypes.oneOf(['parent', 'body']),

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
    arrow: false,
    disabled: false,
    visible: false,
    buttonMode: false,
    trigger: 'hover',
    nClicks: 0,
    popupContainer: 'body',
    autoAdjustOverflow: true,
    freePosition: false
}

export default AntdDropdown;