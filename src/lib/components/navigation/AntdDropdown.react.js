// react核心
import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
// antd核心
import { Dropdown, Button, Typography } from 'antd';
import AntdIcon from '../general/AntdIcon.react';
import { DownOutlined } from '@ant-design/icons';
// 辅助库
import { isString, isUndefined } from 'lodash';
import { pickBy } from 'ramda';
import { useLoading } from '../utils';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 自定义上下文
import PropsContext from '../../contexts/PropsContext';

const { Link } = Typography;

/**
 * 下拉菜单组件AntdDropdown
 */
const AntdDropdown = ({
    id,
    children,
    className,
    style,
    wrapperStyle,
    wrapperClassName,
    key,
    title,
    buttonMode = false,
    arrow = false,
    disabled = false,
    overlayClassName,
    overlayStyle,
    placement,
    trigger = 'hover',
    autoAdjustOverflow = true,
    visible = false,
    menuItems,
    nClicks = 0,
    selectable = false,
    multiple = false,
    selectedKeys,
    nonSelectableKeys = [],
    popupContainer = 'body',
    buttonProps,
    freePosition = false,
    freePositionStyle,
    freePositionClassName,
    setProps,
    batchPropsNames = [],
    ...others
}) => {

    // 批属性监听
    useEffect(() => {
        if (batchPropsNames && batchPropsNames.length !== 0) {
            let _batchPropsValues = {};
            for (let propName of batchPropsNames) {
                _batchPropsValues[propName] = props[propName];
            }
            setProps({
                batchPropsValues: _batchPropsValues
            })
        }
    })

    const context = useContext(PropsContext)

    return (
        <Dropdown
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
            menu={{
                items: menuItems.map(
                    (menuItem) => ({
                        type: menuItem.isDivider ? 'divider' : undefined,
                        disabled: menuItem.disabled,
                        key: menuItem.key || menuItem.title,
                        label: (
                            <a href={menuItem.href}
                                target={menuItem.target}>
                                {menuItem.title}
                            </a>
                        ),
                        extra: menuItem.extra,
                        icon: (
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
                                ) :
                                null
                        )
                    })
                ),
                selectable: selectable,
                multiple: multiple,
                selectedKeys: selectedKeys,
                onClick: (item, key, keyPath, e) => {
                    setProps({
                        clickedKey: item.key,
                        nClicks: nClicks + 1,
                        ...(
                            freePosition && !multiple ?
                                {
                                    visible: false
                                } :
                                {}
                        )
                    })
                },
                onSelect: (e) => setProps({ selectedKeys: (e.selectedKeys || []).filter(key => !nonSelectableKeys.includes(key)) }),
                onDeselect: (e) => setProps({ selectedKeys: e.selectedKeys })
            }}
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
            onOpenChange={(e) => setProps({ visible: e })}
            getPopupContainer={
                popupContainer === 'parent' ?
                    (triggerNode) => triggerNode.parentNode :
                    undefined
            }
            data-dash-is-loading={useLoading()}>
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
                        children ?
                            (
                                <div className={
                                    isString(wrapperClassName) ?
                                        wrapperClassName :
                                        (wrapperClassName ? useCss(wrapperClassName) : undefined)
                                }
                                    style={{
                                        display: 'inline-block',
                                        ...wrapperStyle
                                    }}>
                                    {children}
                                </div>
                            ) :
                            (
                                buttonMode ?
                                    <Button
                                        {...buttonProps}
                                    >
                                        {title} <DownOutlined />
                                    </Button>
                                    :
                                    <Link onClick={e => e.preventDefault()}>
                                        {title} <DownOutlined />
                                    </Link>
                            )
                    )
            }
        </Dropdown>
    );
}

AntdDropdown.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 组件型，下拉菜单触发锚定元素
     */
    children: PropTypes.node,

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
     * 锚定元素父容器css样式
     */
    wrapperStyle: PropTypes.object,

    /**
     * 锚定元素父容器css类名
     */
    wrapperClassName: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    /**
     * 下拉菜单触发元素标题内容，children参数未设置时有效
     */
    title: PropTypes.string,

    /**
     * 下拉菜单触发元素是否渲染为按钮形式，children参数未设置时有效
     * 默认值：`false`
     */
    buttonMode: PropTypes.bool,

    /**
     * 针对下拉菜单触发元素的按钮形式进行进一步配置
     */
    buttonProps: PropTypes.exact({
        /**
         * 按钮尺寸规格，可选项有`'small'`、`'middle'`、`'large'`
         * 默认值：`'middle'`
         */
        size: PropTypes.oneOf(['small', 'middle', 'large']),
        /**
         * 按钮类型，可选项有`'default'`、`'primary'`、`'ghost'`、`'dashed'`、`'link'`、`'text'`
         * 默认值：`'default'`
         */
        type: PropTypes.oneOf(['default', 'primary', 'ghost', 'dashed', 'link', 'text']),
        /**
         * 按钮是否呈现危险样式
         * 默认值：`false`
         */
        danger: PropTypes.bool,
        /**
         * 按钮css样式
         */
        style: PropTypes.object,
        /**
         * 按钮css类名
         */
        className: PropTypes.string
    }),

    /**
     * 是否开启自由位置模式
     * 默认值：`false`
     */
    freePosition: PropTypes.bool,

    /**
     * 自由位置模式开启后，控制挂载位置对应css样式
     */
    freePositionStyle: PropTypes.object,

    /**
     * 自由位置模式开启后，控制挂载位置对应css类名
     */
    freePositionClassName: PropTypes.string,

    /**
     * 监听被点击的下拉菜单选项key值
     */
    clickedKey: PropTypes.string,

    /**
     * 监听下拉菜单选项累计被点击次数
     * 默认值：`0`
     */
    nClicks: PropTypes.number,

    /**
     * 下拉菜单数据结构
     */
    menuItems: PropTypes.arrayOf(
        PropTypes.exact({
            /**
             * 组件型，节点标题
             */
            title: PropTypes.node,
            /**
             * 组件型，额外内容
             */
            extra: PropTypes.node,
            /**
             * 节点链接地址
             */
            href: PropTypes.string,
            /**
             * 节点链接跳转行为
             */
            target: PropTypes.string,
            /**
             * 是否禁用节点
             * 默认值：`false`
             */
            disabled: PropTypes.bool,
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
             * 节点唯一key值
             */
            key: PropTypes.string,
            /**
             * 节点是否渲染为分割线
             */
            isDivider: PropTypes.bool
        })
    ),

    /**
     * 菜单项是否可选择
     * 默认值：`false`
     */
    selectable: PropTypes.bool,

    /**
     * 菜单项是否可多选
     * 默认值：`false`
     */
    multiple: PropTypes.bool,

    /**
     * 设置或监听当前已选中菜单项key值
     */
    selectedKeys: PropTypes.arrayOf(PropTypes.string),

    /**
     * 设置不可选中项key值数组
     * 默认值：`[]`
     */
    nonSelectableKeys: PropTypes.arrayOf(PropTypes.string),

    /**
     * 下拉菜单是否渲染指示箭头
     * 默认值：`false`
     */
    arrow: PropTypes.bool,

    /**
     * 是否禁用组件功能
     * 默认值：`false`
     */
    disabled: PropTypes.bool,

    /**
     * 下拉菜单容器css类名，支持[动态css](/advanced-classname)
     */
    overlayClassName: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    /**
     * 下拉菜单容器css样式
     */
    overlayStyle: PropTypes.object,

    /**
     * 下拉菜单弹出方位，可选项有`'bottomLeft'`、`'bottomCenter'`、`'bottomRight'`、`'topLeft'`、`'topCenter'`、`'topRight'`
     */
    placement: PropTypes.oneOf(['bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight']),

    /**
     * 下拉菜单显示触发方式，可选项有`'click'`、`'hover'`
     * 默认值：`'hover'`
     */
    trigger: PropTypes.oneOf(['click', 'hover']),

    /**
     * 下拉菜单是否在被遮挡时自动调整位置
     * 默认值：`true`
     */
    autoAdjustOverflow: PropTypes.bool,

    /**
     * 监听或设置下拉菜单是否展开
     * 默认值：`false`
     */
    visible: PropTypes.bool,

    /**
     * 下拉菜单展开层锚定策略，可选项有`'parent'`、`'body'`
     * 默认值：`'body'`
     */
    popupContainer: PropTypes.oneOf(['parent', 'body']),

    /**
     * 需要纳入批属性监听的属性名
     * 默认值：`[]`
     */
    batchPropsNames: PropTypes.arrayOf(PropTypes.string),

    /**
     * 批量监听与当前batchPropsNames对应的属性值
     */
    batchPropsValues: PropTypes.object,

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

export default AntdDropdown;