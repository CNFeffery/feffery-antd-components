import React, { useEffect } from 'react';
import { Tabs, Popover, Dropdown } from 'antd';
import { InfoCircleOutlined } from "@ant-design/icons";
import { omit } from 'ramda';
import AntdIcon from '../../../components/general/AntdIcon.react';
import { isString } from 'lodash';
import useCss from '../../../hooks/useCss';
import { parseChildrenToArray, resolveChildProps } from '../../../components/utils';
import { propTypes, defaultProps } from '../../../components/dataDisplay/tabs/AntdTabs.react';

const { TabPane } = Tabs;

// 定义标签页组件AntdTabs，api参数参考https://ant.design/components/tabs-cn/
const AntdTabs = (props) => {
    // 取得必要属性或参数
    let {
        id,
        children,
        className,
        style,
        key,
        items,
        disabledTabKeys,
        tabBarLeftExtraContent,
        tabBarRightExtraContent,
        defaultActiveKey,
        activeKey,
        size,
        tabPosition,
        type,
        centered,
        tabBarGutter,
        inkBarAnimated,
        tabPaneAnimated,
        destroyInactiveTabPane,
        tabCloseCounts,
        setProps,
        persistence,
        persisted_props,
        persistence_type,
        loading_state
    } = props;

    useEffect(() => {
        // 初始化value
        if (defaultActiveKey && !activeKey) {
            // 当defaultValue不为空时，为value初始化defaultValue对应的value值
            setProps({ activeKey: defaultActiveKey })
        }
    }, [])

    useEffect(() => {
        // 更新最新的标签页数量
        setProps({
            tabCount: (items || []).length
        })
    }, [items])

    const onChange = e => {
        setProps({ activeKey: e })
    }

    const onEdit = (targetKey, action) => {
        setProps({ latestDeletePane: targetKey, tabCloseCounts: tabCloseCounts + 1 })
    }

    // 0.2.x构造标签页新方式
    if (items) {
        // 根据disabledTabKeys进行指定标签页的禁用
        if (disabledTabKeys) {
            items = items.map(
                item => {
                    // 处理批量标签页禁用
                    if (disabledTabKeys.includes(item.key)) {
                        item = {
                            ...item,
                            disabled: true
                        }
                    }
                    return item;
                }
            )
        }

        return (
            <Tabs id={id}
                className={
                    isString(className) ?
                        className :
                        (className ? useCss(className) : undefined)
                }
                style={style}
                key={key}
                items={
                    // 处理标签页标题右键菜单功能
                    items.map(
                        item => {
                            if (item.contextMenu) {
                                item.label = <Dropdown
                                    menu={{
                                        items: item.contextMenu.map(
                                            itemProps => {
                                                return {
                                                    ...itemProps,
                                                    icon: itemProps.icon && (
                                                        itemProps.iconRenderer === 'fontawesome' ?
                                                            (
                                                                React.createElement(
                                                                    'i',
                                                                    {
                                                                        className: itemProps.icon
                                                                    }
                                                                )
                                                            ) :
                                                            (
                                                                <AntdIcon icon={itemProps.icon} />
                                                            )
                                                    )
                                                }
                                            }
                                        ),
                                        // 右键菜单事件监听
                                        onClick: (e) => {
                                            // 阻止事件蔓延
                                            e.domEvent.stopPropagation()
                                            // 更新相关事件信息
                                            setProps({
                                                clickedContextMenu: {
                                                    tabKey: item.key,
                                                    menuKey: e.key,
                                                    timestamp: Date.now()
                                                }
                                            })
                                        }
                                    }}
                                    trigger={['contextMenu']}
                                >
                                    <div >
                                        {item.label}
                                    </div>
                                </Dropdown>
                            }
                            return item;
                        }
                    )
                }
                defaultActiveKey={defaultActiveKey}
                activeKey={activeKey}
                size={size}
                tabPosition={tabPosition}
                type={type}
                centered={centered}
                tabBarGutter={tabBarGutter}
                tabBarExtraContent={{
                    left: tabBarLeftExtraContent,
                    right: tabBarRightExtraContent
                }}
                animated={{
                    inkBar: inkBarAnimated,
                    tabPane: tabPaneAnimated
                }}
                destroyInactiveTabPane={destroyInactiveTabPane}
                hideAdd={true}
                onChange={onChange}
                onEdit={onEdit}
                persistence={persistence}
                persisted_props={persisted_props}
                persistence_type={persistence_type}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                } />
        );
    }

    // Deprecated，将在0.3.x版本中进行移除
    children = parseChildrenToArray(children)

    const tabPanes = children.map(
        (child) => {
            let childProps = resolveChildProps(child)

            const {
                id,
                className,
                style,
                tab,
                key,
                disabled,
                closable,
                titleSideInfoPopover,
                loading_state,
                ...otherProps
            } = childProps;

            return (
                <TabPane
                    id={id}
                    className={className}
                    style={style}
                    tab={
                        (titleSideInfoPopover && titleSideInfoPopover.content) ? <>
                            <span>{tab}</span>
                            <Popover
                                title={titleSideInfoPopover.title}
                                content={
                                    <div
                                        style={{
                                            maxWidth: "250px",
                                            wordWrap: "break-word",
                                            whiteSpace: "normal",
                                            wordBreak: "break-all"
                                        }}
                                    >
                                        {titleSideInfoPopover.content}
                                    </div>
                                }
                                overlayStyle={{ maxWidth: "250px" }}
                                placement={"right"}
                                getPopupContainer={(triggerNode) => {
                                    return triggerNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                                }}
                            >
                                <InfoCircleOutlined
                                    style={{
                                        color: "#8c8c8c",
                                        paddingLeft: "4px",
                                        cursor: "pointer"
                                    }}
                                />
                            </Popover>
                        </> : tab
                    }
                    key={key}
                    disabled={disabled}
                    closable={closable}
                    loading_state={loading_state}
                    {...omit(
                        ['setProps', 'persistence', 'persistence_type', 'persisted_props'],
                        otherProps
                    )}>
                    {child}
                </TabPane>
            );
        }
    )

    return (
        <Tabs id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            defaultActiveKey={defaultActiveKey}
            activeKey={activeKey}
            size={size}
            tabPosition={tabPosition}
            type={type}
            centered={centered}
            tabBarGutter={tabBarGutter}
            tabBarExtraContent={{
                left: tabBarLeftExtraContent,
                right: tabBarRightExtraContent
            }}
            animated={{
                inkBar: inkBarAnimated,
                tabPane: tabPaneAnimated
            }}
            hideAdd={true}
            onChange={onChange}
            onEdit={onEdit}
            persistence={persistence}
            persisted_props={persisted_props}
            persistence_type={persistence_type}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }>
            {tabPanes}
        </Tabs>
    );
}

export default AntdTabs;

AntdTabs.defaultProps = defaultProps;
AntdTabs.propTypes = propTypes;