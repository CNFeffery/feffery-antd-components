import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Popover } from 'antd';
import { InfoCircleOutlined } from "@ant-design/icons";
import { omit } from 'ramda';
import 'antd/dist/antd.css';
import { parseChildrenToArray, resolveChildProps } from '../utils';

const { TabPane } = Tabs;


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
            persistence,
            persisted_props,
            persistence_type,
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

        const onChange = e => {
            setProps({ activeKey: e })
        }

        const onEdit = (targetKey, action) => {

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
    persistence_type: 'local'
}