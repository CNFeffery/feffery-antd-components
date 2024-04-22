import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdEditorLayout = React.lazy(() => import(/* webpackChunkName: "pro_editor" */ '../../fragments/proEditor/AntdEditorLayout.react'));

/**
 * 编辑器布局组件AntdEditorLayout
 */
const AntdEditorLayout = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdEditorLayout {...props} />
        </Suspense>
    );
}

AntdEditorLayout.propTypes = {
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
     * 配置页首布局内容，设置为`false`时不显示
     */
    header: PropTypes.oneOfType([
        PropTypes.exact({
            /**
             * 页首标题元素
             */
            title: PropTypes.node,
            /**
             * 页首额外操作区元素
             */
            extra: PropTypes.node,
            /**
             * 页首css样式
             */
            style: PropTypes.object,
            /**
             * 页首css类名
             */
            className: PropTypes.string,
            /**
             * 页首主要区域子元素
             */
            children: PropTypes.node,
            /**
             * 页首主题类型，可选的有`'ghost'`、`'block'`、`'pure'`
             */
            themeType: PropTypes.oneOf(['ghost', 'block', 'pure'])
        }),
        PropTypes.bool
    ]),

    /**
     * 配置页脚布局内容，设置为`false`时不显示
     */
    footer: PropTypes.oneOfType([
        PropTypes.exact({
            /**
             * 页脚标题元素
             */
            title: PropTypes.node,
            /**
             * 页脚额外操作区元素
             */
            extra: PropTypes.node,
            /**
             * 页脚css样式
             */
            style: PropTypes.object,
            /**
             * 页脚css类名
             */
            className: PropTypes.string,
            /**
             * 页脚主要区域子元素
             */
            children: PropTypes.node,
            /**
             * 页脚主题类型，可选的有`'ghost'`、`'block'`、`'pure'`
             */
            themeType: PropTypes.oneOf(['ghost', 'block', 'pure'])
        }),
        PropTypes.bool
    ]),

    /**
     * 配置左侧面板布局内容，设置为`false`时不显示
     */
    leftPannel: PropTypes.oneOfType([
        PropTypes.exact({
            /**
             * 面板子元素内容
             */
            children: PropTypes.node,
            /**
             * 面板方向，可选的有`'horizontal'`、`'vertical'`
             */
            direction: PropTypes.oneOf(['horizontal', 'vertical']),
            /**
             * 面板最小像素宽度
             */
            minWidth: PropTypes.number,
            /**
             * 面板最小像素高度
             */
            minHeight: PropTypes.number,
            /**
             * 面板最大像素宽度
             */
            maxWidth: PropTypes.number,
            /**
             * 面板最大像素高度
             */
            maxHeight: PropTypes.number,
            /**
             * 面板css样式
             */
            style: PropTypes.object,
            /**
             * 面板css类名
             */
            className: PropTypes.string,
            /**
             * 面板主题类型，可选的有`'ghost'`、`'block'`、`'pure'`
             */
            themeType: PropTypes.oneOf(['ghost', 'block', 'pure'])
        }),
        PropTypes.bool
    ]),

    /**
     * 配置右侧面板布局内容，设置为`false`时不显示
     */
    rightPannel: PropTypes.oneOfType([
        PropTypes.exact({
            /**
             * 面板子元素内容
             */
            children: PropTypes.node,
            /**
             * 面板方向，可选的有`'horizontal'`、`'vertical'`
             */
            direction: PropTypes.oneOf(['horizontal', 'vertical']),
            /**
             * 面板最小像素宽度
             */
            minWidth: PropTypes.number,
            /**
             * 面板最小像素高度
             */
            minHeight: PropTypes.number,
            /**
             * 面板最大像素宽度
             */
            maxWidth: PropTypes.number,
            /**
             * 面板最大像素高度
             */
            maxHeight: PropTypes.number,
            /**
             * 面板css样式
             */
            style: PropTypes.object,
            /**
             * 面板css类名
             */
            className: PropTypes.string,
            /**
             * 面板主题类型，可选的有`'ghost'`、`'block'`、`'pure'`
             */
            themeType: PropTypes.oneOf(['ghost', 'block', 'pure'])
        }),
        PropTypes.bool
    ]),

    /**
     * 配置底部面板布局内容，设置为`false`时不显示
     */
    bottomPannel: PropTypes.oneOfType([
        PropTypes.exact({
            /**
             * 面板子元素内容
             */
            children: PropTypes.node,
            /**
             * 面板方向，可选的有`'horizontal'`、`'vertical'`
             */
            direction: PropTypes.oneOf(['horizontal', 'vertical']),
            /**
             * 面板最小像素宽度
             */
            minWidth: PropTypes.number,
            /**
             * 面板最小像素高度
             */
            minHeight: PropTypes.number,
            /**
             * 面板最大像素宽度
             */
            maxWidth: PropTypes.number,
            /**
             * 面板最大像素高度
             */
            maxHeight: PropTypes.number,
            /**
             * 面板css样式
             */
            style: PropTypes.object,
            /**
             * 面板css类名
             */
            className: PropTypes.string,
            /**
             * 面板主题类型，可选的有`'ghost'`、`'block'`、`'pure'`
             */
            themeType: PropTypes.oneOf(['ghost', 'block', 'pure'])
        }),
        PropTypes.bool
    ]),

    /**
     * 配置中心面板布局内容，设置为`false`时不显示
     */
    centerPannel: PropTypes.oneOfType([
        PropTypes.exact({
            /**
             * 面板子元素内容
             */
            children: PropTypes.node,
            /**
             * 面板方向，可选的有`'horizontal'`、`'vertical'`
             */
            direction: PropTypes.oneOf(['horizontal', 'vertical']),
            /**
             * 面板最小像素宽度
             */
            minWidth: PropTypes.number,
            /**
             * 面板最小像素高度
             */
            minHeight: PropTypes.number,
            /**
             * 面板最大像素宽度
             */
            maxWidth: PropTypes.number,
            /**
             * 面板最大像素高度
             */
            maxHeight: PropTypes.number,
            /**
             * 面板css样式
             */
            style: PropTypes.object,
            /**
             * 面板css类名
             */
            className: PropTypes.string,
            /**
             * 面板主题类型，可选的有`'ghost'`、`'block'`、`'pure'`
             */
            themeType: PropTypes.oneOf(['ghost', 'block', 'pure'])
        }),
        PropTypes.bool
    ]),

    /**
     * 布局类型，可选的有`'Left&Right'`、`'LeftFull'`、`'RightFull'`、`'Bottom'`
     */
    type: PropTypes.oneOf(['Left&Right', 'LeftFull', 'RightFull', 'Bottom']),

    /**
     * 整体主题类型，可选的有`'ghost'`、`'block'`、`'pure'`
     */
    themeType: PropTypes.oneOf(['ghost', 'block', 'pure']),

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
    setProps: PropTypes.func
};

// 设置默认参数
AntdEditorLayout.defaultProps = {
}

export default AntdEditorLayout;

export const propTypes = AntdEditorLayout.propTypes;
export const defaultProps = AntdEditorLayout.defaultProps;