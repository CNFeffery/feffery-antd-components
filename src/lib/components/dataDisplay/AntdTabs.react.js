import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdTabs = React.lazy(() => import(/* webpackChunkName: "data_display" */ '../../fragments/dataDisplay/AntdTabs.react'));

/**
 * 标签页组件AntdTabs
 */
const AntdTabs = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdTabs {...props} />
        </Suspense>
    );
}

AntdTabs.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

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
     * 标签页类型，可选项有`'line'`、`'card'`、`'editable-card'`
     * 默认值：`'line'`
     */
    type: PropTypes.oneOf(['line', 'card', 'editable-card']),

    /**
     * 定义标签项
     */
    items: PropTypes.arrayOf(
        PropTypes.exact({
            /**
             * 组件型，标签页标题
             */
            label: PropTypes.node,
            /**
             * 标签页唯一识别id
             */
            key: PropTypes.string,
            /**
             * 组件型，标签页内部元素
             */
            children: PropTypes.node,
            /**
             * 组件型，标签页图标元素
             */
            icon: PropTypes.node,
            /**
             * `'editable-card'`型标签页可用，用于自定义关闭按钮，设置为`None`或`false`时会隐藏默认的关闭按钮
             */
            closeIcon: PropTypes.oneOfType([
                PropTypes.bool,
                PropTypes.node,
            ]),
            /**
             * 是否在当前标签页隐藏时，自动销毁当前标签页内部元素
             * 默认值：`false`
             */
            destroyInactiveTabPane: PropTypes.bool,
            /**
             * 是否禁用当前标签页
             * 默认值：`false`
             */
            disabled: PropTypes.bool,
            /**
             * 初始化是否强制渲染当前标签页内部元素
             * 默认值：`false`
             */
            forceRender: PropTypes.bool,
            /**
             * `'editable-card'`型标签页可用，控制当前标签页是否可被关闭
             * 默认值：`true`
             */
            closable: PropTypes.bool,
            /**
             * 为当前标签页标题配置右键菜单相关参数
             */
            contextMenu: PropTypes.arrayOf(
                PropTypes.exact({
                    /**
                     * 当前右键菜单项唯一标识id
                     */
                    key: PropTypes.string,
                    /**
                     * 当前右键菜单项标题
                     */
                    label: PropTypes.string,
                    /**
                     * 当前右键菜单项前缀图标类型，`iconRenderer`为`'AntdIcon'`时同`AntdIcon`同名参数，`iconRenderer`为`'fontawesome'`时为css类名
                     */
                    icon: PropTypes.string,
                    /**
                     * 当前右键菜单项前缀图标渲染方式，可选项有`'AntdIcon'`、`'fontawesome'`
                     */
                    iconRenderer: PropTypes.oneOf(['AntdIcon', 'fontawesome']),
                })
            )
        })
    ),

    /**
     * 监听当前各标签页`key`值，顺序与`items`一致
     */
    itemKeys: PropTypes.arrayOf(PropTypes.string),

    /**
     * 监听或设置当前激活的标签页对应`key`值
     */
    activeKey: PropTypes.string,

    /**
     * 初始化激活的标签页对应`key`值
     */
    defaultActiveKey: PropTypes.string,

    /**
     * 呈现禁用状态的标签页`key`值数组，优先级高于`items`中各标签页的`disabled`设定
     */
    disabledTabKeys: PropTypes.arrayOf(PropTypes.string),

    /**
     * 标签页切换控件显示方位，可选项有`'top'`、`'left'`、`'right'`、`'bottom'`
     * 默认值：`'top'`
     */
    tabPosition: PropTypes.oneOf(['top', 'left', 'right', 'bottom']),

    /**
     * 当前组件尺寸规格，可选项有`'small'`、`'default'`、`'large'`
     * 默认值：'default'
     */
    size: PropTypes.oneOf(['small', 'default', 'large']),

    /**
     * 是否居中显示标签页切换控件
     * 默认值：`false`
     */
    centered: PropTypes.bool,

    /**
     * 配置指示条长度及对齐方式
     */
    indicator: PropTypes.exact({
        /**
         * 指示条像素宽度，当传入负数时，表示在完整宽度基础上应减去的像素宽度，默认与标签卡片同宽
         */
        size: PropTypes.number,
        /**
         * 指示条对齐方式，可选项有`'start'`、`'center'`、`'end'`
         */
        align: PropTypes.oneOf(['start', 'center', 'end'])
    }),

    /**
     * 标签卡片之间的像素间距
     */
    tabBarGutter: PropTypes.number,

    /**
     * 标签卡片css样式
     */
    tabBarStyle: PropTypes.object,

    /**
     * 标签卡片切换是否添加动画效果
     * 默认值：`true`
     */
    inkBarAnimated: PropTypes.bool,

    /**
     * 标签内容切换是否添加动画效果
     * 默认值：`false`
     */
    tabPaneAnimated: PropTypes.bool,

    /**
     * 监听最近一次删除操作对应的标签页`key`值
     */
    latestDeletePane: PropTypes.string,

    /**
     * 标签页关闭按钮累计点击次数
     * 默认值：`0`
     */
    tabCloseCounts: PropTypes.number,

    /**
     * 组件型，第一方位额外元素
     */
    tabBarLeftExtraContent: PropTypes.node,

    /**
     * 组件型，第二方位额外元素
     */
    tabBarRightExtraContent: PropTypes.node,

    /**
     * 监听标签页数量
     */
    tabCount: PropTypes.number,

    /**
     * 统一设置是否自动销毁取消激活状态的标签页内部元素
     */
    destroyInactiveTabPane: PropTypes.bool,

    /**
     * 监听标签页标题右键菜单项相关点击事件
     */
    clickedContextMenu: PropTypes.exact({
        /**
         * 被点击的右键菜单项对应标签页`key`值
         */
        tabKey: PropTypes.string,
        /**
         * 被点击的右键菜单项对应`key`值
         */
        menuKey: PropTypes.string,
        /**
         * 事件对应时间戳信息
         */
        timestamp: PropTypes.number
    }),

    /**
     * 当`items`为空或长度为`0`时，替代进行占位显示的内容
     */
    placeholder: PropTypes.node,

    /**
     * `data-*`格式属性通配
     */
    'data-*': PropTypes.string,

    /**
     * `aria-*`格式属性通配
     */
    'aria-*': PropTypes.string,

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
     * 是否开启[属性持久化](/prop-persistence)
     */
    persistence: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.number
    ]),

    /**
     * 开启属性持久化功能的若干属性名，可选项有`'activeKey'`
     * 默认值：`['activeKey']`
     */
    persisted_props: PropTypes.arrayOf(PropTypes.oneOf(['activeKey'])),

    /**
     * 属性持久化存储类型，可选项有`'local'`（本地持久化），`'session'`（会话持久化），`'memory'`（内存持久化）
     * 默认值：`'local'`
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
    tabCloseCounts: 0,
    persisted_props: ['activeKey'],
    persistence_type: 'local'
}

export default AntdTabs;

export const propTypes = AntdTabs.propTypes;
export const defaultProps = AntdTabs.defaultProps;