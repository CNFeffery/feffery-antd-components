import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Popover } from 'antd';
import { InfoCircleOutlined } from "@ant-design/icons";
import { omit } from 'ramda';

import { parseChildrenToArray, resolveChildProps } from '../utils';

const { TabPane } = Tabs;

// 定义标签页组件AntdTabs，api参数参考https://ant.design/components/tabs-cn/
const AntdTabs = (props) => {
    // 取得必要属性或参数
    let {
        id,
        children,
        items,
        disabledTabKeys,
        tabBarLeftExtraContent,
        tabBarRightExtraContent,
        className,
        style,
        key,
        defaultActiveKey,
        activeKey,
        size,
        tabPosition,
        type,
        centered,
        tabBarGutter,
        inkBarAnimated,
        tabPaneAnimated,
        setProps,
        persistence,
        persisted_props,
        persistence_type,
        loading_state
    } = props;

    useEffect(() => {
        // 初始化value
        if (defaultActiveKey) {
            // 当defaultValue不为空时，为value初始化defaultValue对应的value值
            setProps({ activeKey: defaultActiveKey })
        }
    }, [])

    const onChange = e => {
        setProps({ activeKey: e })
    }

    const onEdit = (targetKey, action) => {
        setProps({ latestDeletePane: targetKey })
    }

    // 构造标签页新方式
    if (items) {

        // 根据disabledTabKeys进行指定标签页的禁用
        if (disabledTabKeys) {
            items = items.map(
                item => {
                    if (disabledTabKeys.includes(item.key)) {
                        return {
                            ...item,
                            disabled: true
                        }
                    }
                    return item
                }
            )
        }

        return (
            <Tabs id={id}
                className={className}
                style={style}
                key={key}
                items={items}
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
                } />
        );
    }

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
            className={className}
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

// 定义参数或属性
AntdTabs.propTypes = {
    // 组件id
    id: PropTypes.string,

    children: PropTypes.node,

    // 用于定义标签页的新写法
    items: PropTypes.arrayOf(
        PropTypes.exact({
            // 用于设置标签页标题内容
            label: PropTypes.node,

            // 用于设置标签页对应的唯一key
            key: PropTypes.string,

            // 用于设置标签页的子元素
            children: PropTypes.node,

            // 用于设置是否禁用当前标签页，默认为false
            disabled: PropTypes.bool,

            // 用于设置当标签页被隐藏时是否强制渲染子元素，默认为false
            forceRender: PropTypes.bool,

            // 设置在'editable-card'模式下，当前标签页是否可被关闭，默认为true
            closable: PropTypes.bool
        })
    ),

    // 设置需要呈现禁用状态的标签页key值数组，优先级高于items[].disabled
    // 即当items[].disabled设置为false但对应key在disabledTabKeys中时，仍然会禁用对应的标签页
    disabledTabKeys: PropTypes.arrayOf(PropTypes.string),

    // 用于设置第一方位额外元素
    tabBarLeftExtraContent: PropTypes.node,

    // 用于设置第二方位额外元素
    tabBarRightExtraContent: PropTypes.node,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 设置默认激活的标签页面板对应key
    defaultActiveKey: PropTypes.string,

    // 设置标签页放置位置，可选的有'top'、'left'、'right'和'bottom'
    tabPosition: PropTypes.oneOf(['top', 'left', 'right', 'bottom']),

    // 设置组件大小尺寸，可选的有'small'、'default'和'large'
    size: PropTypes.oneOf(['small', 'default', 'large']),

    // 设置标签页渲染类型，可选的有'line'、'card'和'editable-card'，默认为'line'
    type: PropTypes.oneOf(['line', 'card', 'editable-card']),

    // 设置是否开启居中布局，默认为false
    centered: PropTypes.bool,

    // 设置标签卡之间的像素间距
    tabBarGutter: PropTypes.number,

    // 设置标签卡切换是否渲染动画效果，默认为true
    inkBarAnimated: PropTypes.bool,

    // 设置标签内容切换是否渲染动画效果，默认为false
    tabPaneAnimated: PropTypes.bool,

    // 对应当前被选中的标签页面板对应key
    activeKey: PropTypes.string,

    // 对应最近一次进行删除操作的标签页面板对应key
    latestDeletePane: PropTypes.string,

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
    persisted_props: PropTypes.arrayOf(PropTypes.oneOf(['activeKey'])),

    /**
     * Where persisted user changes will be stored:
     * memory: only kept in memory, reset on page refresh.
     * local: window.localStorage, data is kept after the browser quit.
     * session: window.sessionStorage, data is cleared once the browser quit.
     */
    persistence_type: PropTypes.oneOf(['local', 'session', 'memory'])
};

// 设置默认参数
AntdTabs.defaultProps = {
    persisted_props: ['activeKey'],
    persistence_type: 'local',
    inkBarAnimated: true,
    tabPaneAnimated: false,
    disabledTabKeys: []
}

export default AntdTabs;