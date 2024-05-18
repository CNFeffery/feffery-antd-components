import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdTimeRangePicker = React.lazy(() => import(/* webpackChunkName: "data_entry" */ '../../fragments/dataEntry/AntdTimeRangePicker.react'));

/**
 * 时间范围选择组件AntdTimeRangePicker
 */
const AntdTimeRangePicker = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdTimeRangePicker {...props} />
        </Suspense>
    );
}

AntdTimeRangePicker.propTypes = {
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
     * 展开菜单css类名
     */
    popupClassName: PropTypes.string,

    /**
     * 配合`AntdForm`表单批量值搜集/控制功能使用，充当当前表单项的字段名，以`id`作为缺省值
     */
    name: PropTypes.string,

    /**
     * 组件文案语种，可选项有`'zh-cn'`、`'en-us'`
     * 默认值：`'zh-cn'`
     */
    locale: PropTypes.oneOf(['zh-cn', 'en-us']),

    /**
     * 时间显示格式，[参考资料](https://day.js.org/docs/en/display/format)
     * 默认值：`'HH:mm:ss'`
     */
    format: PropTypes.string,

    /**
     * 小时选项间隔
     * 默认值：`1`
     */
    hourStep: PropTypes.number,

    /**
     * 分钟选项间隔
     * 默认值：`1`
     */
    minuteStep: PropTypes.number,

    /**
     * 秒选项间隔
     * 默认值：`1`
     */
    secondStep: PropTypes.number,

    /**
     * 是否使用12小时制，当设置为`true`时，`format`参数默认值变更为`'h:mm:ss a'`
     * 默认值：`false`
     */
    use12Hours: PropTypes.bool,

    /**
     * 是否允许一键清空已选值
     * 默认值：`true`
     */
    allowClear: PropTypes.bool,

    /**
     * 是否自动获取焦点
     * 默认值：`false`
     */
    autoFocus: PropTypes.bool,

    /**
     * 输入框占位文字内容
     */
    placeholder: PropTypes.arrayOf(PropTypes.string),

    /**
     * 选择面板展开方向，可选项有`'bottomLeft'`、`'bottomRight'`、`'topLeft'`、`'topRight'`
     * 默认值：`'bottomLeft'`
     */
    placement: PropTypes.oneOf(['bottomLeft', 'bottomRight', 'topLeft', 'topRight']),

    /**
     * 是否禁用当前组件
     * 默认值：`false`
     */
    disabled: PropTypes.arrayOf(PropTypes.bool),

    /**
     * 监听或设置已选值，与`format`格式对应
     */
    value: PropTypes.arrayOf(PropTypes.string),

    /**
     * 初始化已选值，与`format`格式对应
     */
    defaultValue: PropTypes.arrayOf(PropTypes.string),

    /**
     * 是否显示边框，设置为`true`时等价于`variant='outlined'`
     * 默认值：`true`
     */
    bordered: PropTypes.bool,

    /**
     * 形态变体类型，可选项有`'outlined'`、`'borderless'`、`'filled'`，其中`'outlined'`等价于`bordered=True`，但优先级更高
     */
    variant: PropTypes.oneOf(['outlined', 'borderless', 'filled']),

    /**
     * 当前组件尺寸规格，可选项有`'small'`、`'middle'`、`'large'`
     * 默认值：`'middle'`
     */
    size: PropTypes.oneOf(['small', 'middle', 'large']),

    /**
     * 监听或设置当前选择面板是否展开
     */
    open: PropTypes.bool,

    /**
     * 控制校验状态，可选项有`'error'`、`'warning'`
     */
    status: PropTypes.oneOf(['error', 'warning']),

    /**
     * 是否渲染为只读状态
     * 默认值：`false`
     */
    readOnly: PropTypes.bool,

    /**
     * 组件型，底部额外区域内容
     */
    extraFooter: PropTypes.node,

    /**
     * 相关展开层锚定策略，可选项有`'parent'`、`'body'`
     * 默认值：`'body'`
     */
    popupContainer: PropTypes.oneOf(['parent', 'body']),

    /**
     * 需要纳入[批量属性监听](/batch-props-values)的若干属性名
     */
    batchPropsNames: PropTypes.arrayOf(PropTypes.string),

    /**
     * 监听`batchPropsNames`中指定的若干属性值
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
     * 是否需要确认按钮，为`false`时失去焦点即代表选择
     * 默认值：`false`
     */
    needConfirm: PropTypes.bool,

    /**
    * Object that holds the loading state object coming from dash-renderer
    */
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
     * 开启属性持久化功能的若干属性名，可选项有`'value'`
     * 默认值：`['value']`
     */
    persisted_props: PropTypes.arrayOf(PropTypes.oneOf(['value'])),

    /**
     * 属性持久化存储类型，可选项有`'local'`（本地持久化），`'session'`（会话持久化），`'memory'`（内存持久化）
     * 默认值：`'local'`
     */
    persistence_type: PropTypes.oneOf(['local', 'session', 'memory'])
};

// 设置默认参数
AntdTimeRangePicker.defaultProps = {
    disabled: [false, false],
    hourStep: 1,
    minuteStep: 1,
    secondStep: 1,
    use12Hours: false,
    allowClear: true,
    autoFocus: false,
    bordered: true,
    size: 'middle',
    format: 'HH:mm:ss',
    needConfirm: false,
    persisted_props: ['value'],
    persistence_type: 'local',
    locale: 'zh-cn',
    placement: 'bottomLeft',
    popupContainer: 'body',
    batchPropsNames: []
}

export default AntdTimeRangePicker;

export const propTypes = AntdTimeRangePicker.propTypes;
export const defaultProps = AntdTimeRangePicker.defaultProps;