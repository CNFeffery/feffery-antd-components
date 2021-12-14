import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Popover } from 'antd';
import { InfoCircleOutlined } from "@ant-design/icons";
import { isNil, omit } from 'ramda';
import 'antd/dist/antd.css';

const { TabPane } = Tabs;

const parseChildrenToArray = children => {
    if (children && !Array.isArray(children)) {
        return [children];
    }
    return children;
};

const resolveChildProps = child => {
    // This may need to change in the future if https://github.com/plotly/dash-renderer/issues/84 is addressed
    if (
        // disabled is a defaultProp (so it's always set)
        // meaning that if it's not set on child.props, the actual
        // props we want are lying a bit deeper - which means they
        // are coming from Dash
        isNil(child.props.disabled) &&
        child.props._dashprivate_layout &&
        child.props._dashprivate_layout.props
    ) {
        // props are coming from Dash
        return child.props._dashprivate_layout.props;
    } else {
        // else props are coming from React (e.g. Demo.js, or Tabs.test.js)
        return child.props;
    }
};

// 定义标签页组件AntdTabs，api参数参考https://ant.design/components/tabs-cn/
export default class AntdTabs extends Component {

    constructor(props) {
        super(props)
        // 初始化value
        if (props.defaultActiveKey) {
            // 当defaultValue不为空时，为value初始化defaultValue对应的value值
            props.setProps({ activeKey: props.defaultActiveKey })
        }
    }

    render() {
        // 取得必要属性或参数
        let {
            id,
            children,
            className,
            style,
            defaultActiveKey,
            activeKey,
            size,
            tabPosition,
            type,
            setProps,
            loading_state
        } = this.props;

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
                            titleSideInfoPopover?.content ? <>
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

        const onChange = e => {
            setProps({ activeKey: e })
        }

        const onEdit = (targetKey, action) => {

            console.log({ targetKey, action })

            setProps({ latestDeletePane: targetKey })
        }

        return (
            <Tabs id={id}
                className={className}
                style={style}
                defaultActiveKey={defaultActiveKey}
                activeKey={activeKey}
                size={size}
                tabPosition={tabPosition}
                type={type}
                hideAdd={true}
                onChange={onChange}
                onEdit={onEdit}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }>
                {tabPanes}
            </Tabs>
        );
    }
}

// 定义参数或属性
AntdTabs.propTypes = {
    // 组件id
    id: PropTypes.string,

    /**
     * The content of the tab - will only be displayed if this tab is selected
     */
    children: PropTypes.node,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 设置默认激活的标签页面板对应key
    defaultActiveKey: PropTypes.string,

    // 设置标签页放置位置，可选的有'top'、'left'、'right'和'bottom'
    tabPosition: PropTypes.oneOf(['top', 'left', 'right', 'bottom']),

    // 设置组件大小尺寸，可选的有'small'、'default'和'large'
    size: PropTypes.oneOf(['small', 'default', 'large']),

    // 设置标签页渲染类型，可选的有'line'、'card'和'editable-card'，默认为'line'
    type: PropTypes.oneOf(['line', 'card', 'editable-card']),

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
    setProps: PropTypes.func
};

// 设置默认参数
AntdTabs.defaultProps = {
}