import React, { useEffect } from 'react';
import { Tabs, Dropdown } from 'antd';
import AntdIcon from '../../components/general/AntdIcon.react';
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import useCss from '../../hooks/useCss';
import { propTypes, defaultProps } from '../../components/dataDisplay/AntdTabs.react';

// 定义标签页组件AntdTabs，api参数参考https://ant.design/components/tabs-cn/
const AntdTabs = (props) => {
    // 取得必要属性或参数
    let {
        id,
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
        indicatorSize,
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

    // 空值处理
    items = items || [];

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

    useEffect(() => {
        // 同步当前items子项key值数组
        setProps({
            itemKeys: (items || []).map(item => item.key)
        })
    }, [items])

    const onChange = e => {
        setProps({ activeKey: e })
    }

    const onEdit = (targetKey, action) => {
        setProps({ latestDeletePane: targetKey, tabCloseCounts: tabCloseCounts + 1 })
    }

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

    // 当标签页内容、前缀后额外内容均为空时，返回空节点
    if (items.length === 0 && !tabBarLeftExtraContent && !tabBarRightExtraContent) {
        return <></>;
    }

    return (
        <Tabs
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
            indicatorSize={indicatorSize.subTractFromOrigin ? (origin) => origin - indicatorSize.width : indicatorSize.width}
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

export default AntdTabs;

AntdTabs.defaultProps = defaultProps;
AntdTabs.propTypes = propTypes;