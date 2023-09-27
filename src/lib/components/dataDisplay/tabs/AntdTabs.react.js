import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdTabs = React.lazy(() => import(/* webpackChunkName: "data_display" */ '../../../fragments/dataDisplay/tabs/AntdTabs.react'));

const AntdTabs = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdTabs {...props} />
        </Suspense>
    );
}

// 定义参数或属性
AntdTabs.propTypes = {
    // 组件id
    id: PropTypes.string,

    children: PropTypes.node,

    // css类名
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    // 自定义css字典
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

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
            closable: PropTypes.bool,

            // 为当前标签页标题设置右键菜单相关参数
            contextMenu: PropTypes.arrayOf(
                PropTypes.exact({
                    // 为当前右键菜单选项设置唯一key值
                    key: PropTypes.string,
                    // 为当前右键菜单项设置标题内容
                    label: PropTypes.string,
                    // 为当前选项设置前缀图标，同AntdIcon中的icon参数
                    icon: PropTypes.string,
                    // 针对icon参数值设置渲染方式，默认为'AntdIcon'即icon等价于AntdIcon的icon参数
                    // 当设置为'fontawesome'时，icon参数对应fontawesome图标的css类名
                    iconRenderer: PropTypes.oneOf(['AntdIcon', 'fontawesome']),
                })
            )
        })
    ),

    // 对应当前被选中的标签页面板对应key
    activeKey: PropTypes.string,

    // 设置默认激活的标签页面板对应key
    defaultActiveKey: PropTypes.string,

    // 设置需要呈现禁用状态的标签页key值数组，优先级高于items[].disabled
    // 即当items[].disabled设置为false但对应key在disabledTabKeys中时，仍然会禁用对应的标签页
    disabledTabKeys: PropTypes.arrayOf(PropTypes.string),

    // 设置标签页放置位置，可选的有'top'、'left'、'right'和'bottom'
    // 默认为'top'
    tabPosition: PropTypes.oneOf(['top', 'left', 'right', 'bottom']),

    // 设置组件大小尺寸，可选的有'small'、'default'和'large'
    // 默认为'default'
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

    // 对应最近一次进行删除操作的标签页面板对应key
    latestDeletePane: PropTypes.string,

    // 用于设置第一方位额外元素
    tabBarLeftExtraContent: PropTypes.node,

    // 用于设置第二方位额外元素
    tabBarRightExtraContent: PropTypes.node,

    // 监听当前标签页组件中所包含标签页数量
    tabCount: PropTypes.number,

    // 设置标签页不激活时是否自动销毁内部元素
    // 默认：false
    destroyInactiveTabPane: PropTypes.bool,

    // 当有标签页标题的右键菜单选项被点击时，监听相关的事件信息
    clickedContextMenu: PropTypes.exact({
        // 记录对应的标签页key值
        tabKey: PropTypes.string,
        // 记录对应的右键菜单选项key值
        menuKey: PropTypes.string,
        // 记录事件发生时的时间戳信息
        timestamp: PropTypes.number
    }),

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
    disabledTabKeys: [],
    tabPosition: 'top',
    size: 'default',
    type: 'line',
    centered: false,
    inkBarAnimated: true,
    tabPaneAnimated: false,
    destroyInactiveTabPane: false,
    persisted_props: ['activeKey'],
    persistence_type: 'local'
}

export default AntdTabs;

export const propTypes = AntdTabs.propTypes;
export const defaultProps = AntdTabs.defaultProps;