// react核心
import React, { useEffect } from 'react';
// antd核心
import { Tabs, Dropdown } from 'antd';
import AntdIcon from '../../components/general/AntdIcon.react';
// 辅助库
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { useLoading } from '../../components/utils';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 参数类型
import {
    propTypes,
    defaultProps,
} from '../../components/dataDisplay/AntdTabs.react';

/**
 * 标签页组件AntdTabs
 */
const AntdTabs = (props) => {
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
        indicator,
        tabBarGutter,
        tabBarStyle,
        inkBarAnimated,
        tabPaneAnimated,
        destroyInactiveTabPane,
        tabCloseCounts,
        placeholder,
        setProps,
        persistence,
        persisted_props,
        persistence_type,
        ...others
    } = props;

    useEffect(() => {
        // 初始化value
        if (defaultActiveKey && !activeKey) {
            // 当defaultValue不为空时，为value初始化defaultValue对应的value值
            setProps({ activeKey: defaultActiveKey });
        }
    }, []);

    useEffect(() => {
        // 更新最新的标签页数量
        setProps({
            tabCount: (items || []).length,
        });
    }, [items]);

    useEffect(() => {
        // 同步当前items子项key值数组
        setProps({
            itemKeys: (items || []).map((item) => item.key),
        });
    }, [items]);

    const onChange = (e) => {
        setProps({ activeKey: e });
    };

    const onEdit = (targetKey, action) => {
        setProps({
            latestDeletePane: targetKey,
            tabCloseCounts: tabCloseCounts + 1,
        });
    };

    // 根据disabledTabKeys进行指定标签页的禁用
    if (disabledTabKeys) {
        items = (items || []).map((item) => {
            // 处理批量标签页禁用
            if (disabledTabKeys.includes(item.key)) {
                item = {
                    ...item,
                    disabled: true,
                };
            }
            return item;
        });
    }

    return (
        <>
            <Tabs
                // 提取具有data-*或aria-*通配格式的属性
                {...pickBy(
                    (_, k) => k.startsWith('data-') || k.startsWith('aria-'),
                    others
                )}
                id={id}
                className={
                    isString(className)
                        ? className
                        : className
                          ? useCss(className)
                          : undefined
                }
                style={
                    // 子项为空且无额外内容时
                    (!items || items.length === 0) &&
                    !(tabBarLeftExtraContent || tabBarRightExtraContent)
                        ? { ...style, display: 'none' }
                        : style
                }
                key={key}
                items={
                    // 处理标签页标题右键菜单功能
                    (items || []).map((item) => {
                        if (item.contextMenu) {
                            item.label = (
                                <Dropdown
                                    menu={{
                                        items: item.contextMenu.map(
                                            (itemProps) => {
                                                return {
                                                    ...itemProps,
                                                    icon:
                                                        itemProps.icon &&
                                                        (itemProps.iconRenderer ===
                                                        'fontawesome' ? (
                                                            React.createElement(
                                                                'i',
                                                                {
                                                                    className:
                                                                        itemProps.icon,
                                                                }
                                                            )
                                                        ) : (
                                                            <AntdIcon
                                                                icon={
                                                                    itemProps.icon
                                                                }
                                                            />
                                                        )),
                                                };
                                            }
                                        ),
                                        // 右键菜单事件监听
                                        onClick: (e) => {
                                            // 阻止事件蔓延
                                            e.domEvent.stopPropagation();
                                            // 更新相关事件信息
                                            setProps({
                                                clickedContextMenu: {
                                                    tabKey: item.key,
                                                    menuKey: e.key,
                                                    timestamp: Date.now(),
                                                },
                                            });
                                        },
                                    }}
                                    trigger={['contextMenu']}
                                >
                                    <div>{item.label}</div>
                                </Dropdown>
                            );
                        }
                        return item;
                    })
                }
                defaultActiveKey={defaultActiveKey}
                activeKey={activeKey}
                size={size}
                tabPosition={tabPosition}
                type={type}
                centered={centered}
                indicator={{
                    size: (origin) => {
                        if (indicator?.size) {
                            if (indicator.size < 0) {
                                return origin + indicator.size;
                            }
                            return indicator.size;
                        }
                        return origin;
                    },
                    align: indicator?.align,
                }}
                tabBarGutter={tabBarGutter}
                tabBarStyle={tabBarStyle}
                tabBarExtraContent={{
                    left: tabBarLeftExtraContent,
                    right: tabBarRightExtraContent,
                }}
                animated={{
                    inkBar: inkBarAnimated,
                    tabPane: tabPaneAnimated,
                }}
                destroyOnHidden={destroyInactiveTabPane}
                hideAdd={true}
                onChange={onChange}
                onEdit={onEdit}
                data-dash-is-loading={useLoading()}
            />
            {
                // 子项为空时
                !items || items.length === 0 ? placeholder : null
            }
        </>
    );
};

export default AntdTabs;

AntdTabs.defaultProps = defaultProps;
AntdTabs.propTypes = propTypes;
