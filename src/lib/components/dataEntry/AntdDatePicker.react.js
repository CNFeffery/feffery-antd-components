import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdDatePicker = React.lazy(() => import(/* webpackChunkName: "data_entry" */ '../../fragments/dataEntry/AntdDatePicker.react'));

/**
 * 日期选择组件AntdDatePicker
 */
const AntdDatePicker = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdDatePicker {...props} />
        </Suspense>
    );
}

AntdDatePicker.propTypes = {
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
     * 组件文案语种，可选项有`'zh-cn'`（简体中文）、`'en-us'`（英语）、`'de-de'`（德语）
     * 默认值：`'zh-cn'`
     */
    locale: PropTypes.oneOf(['zh-cn', 'en-us', 'de-de']),

    /**
     * 日期时间显示格式，[参考资料](https://day.js.org/docs/en/display/format)
     * 默认值：`'YYYY-MM-DD'`
     */
    format: PropTypes.string,

    /**
     * 日期选择粒度，可选项有`'date'`、`'week'`、`'month'`、`'quarter'`、`'year'`
     * 默认值：`'date'`
     */
    picker: PropTypes.oneOf(['date', 'week', 'month', 'quarter', 'year']),

    /**
     * 自定义每周起始日下标
     */
    firstDayOfWeek: PropTypes.number,

    /**
     * 是否禁用当前组件
     * 默认值：`false`
     */
    disabled: PropTypes.bool,

    /**
     * 配置时间选择面板相关参数
     * 默认值：`false`
     */
    showTime: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.exact({
            /**
             * 时间选择面板初始化选中时间字符串
             */
            defaultValue: PropTypes.string,
            /**
             * 与`defaultValue`对应的时间格式，[参考资料](https://day.js.org/docs/en/display/format)
             * 默认值：`'HH:mm:ss'`
             */
            format: PropTypes.string
        })
    ]),

    /**
     * 当前组件尺寸规格，可选项有`'small'`、`'middle'`、`'large'`
     * 默认值：`'middle'`
     */
    size: PropTypes.oneOf(['small', 'middle', 'large']),

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
     * 输入框占位文字内容
     */
    placeholder: PropTypes.string,

    /**
     * 选择面板展开方向，可选项有`'bottomLeft'`、`'bottomRight'`、`'topLeft'`、`'topRight'`
     * 默认值：`'bottomLeft'`
     */
    placement: PropTypes.oneOf(['bottomLeft', 'bottomRight', 'topLeft', 'topRight']),

    /**
     * 监听或设置已选值，与`format`格式对应
     */
    value: PropTypes.string,

    /**
     * 初始化已选值，与`format`格式对应
     */
    defaultValue: PropTypes.string,

    /**
     * 监听或设置面板展开对应日期，与`format`格式对应
     */
    pickerValue: PropTypes.string,

    /**
     * 配置日期禁用项策略数组，满足策略中至少一项规则的日期将会被禁止选中
     */
    disabledDatesStrategy: PropTypes.arrayOf(
        PropTypes.exact({
            /**
             * 当前策略类型，可选项有`'eq'`（等于）、`'ne'`（不等于）、`'le'`（小于等于）、`'lt'`（小于）、`'ge'`（大于等于）
             * 、`'gt'`（大于）、`'in'`（属于）、`'not-in'`（不属于）、`'in-enumerate-dates'`（属于日期字符串枚举数组），`'not-in-enumerate-dates'`（不属于日期字符串枚举数组）
             */
            mode: PropTypes.oneOf(['eq', 'ne', 'le', 'lt', 'ge', 'gt', 'in', 'not-in', 'in-enumerate-dates', 'not-in-enumerate-dates']),
            /**
             * 当前策略约束目标，可选项有`'dayOfYear'`（按年份天数）、`'dayOfWeek'`（按周天数）、`'day'`（按日）
             * 、`'month'`（按月份）、`'quarter'`（按季度）、`'year'`（按年份）、`'specific-date'`（具体日期）
             * ，其中在`'specific-date'`目标下，`value`值将严格按照`'YYYY-MM-DD'`格式进行解析
             */
            target: PropTypes.oneOf(['day', 'month', 'quarter', 'year', 'dayOfYear', 'dayOfWeek', 'specific-date']),
            /**
             * 与策略类型、策略约束目标相对应的实际约束值
             */
            value: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string,
                PropTypes.arrayOf(PropTypes.number),
                PropTypes.arrayOf(PropTypes.string)
            ])
        })
    ),

    /**
     * 控制校验状态，可选项有`'error'`、`'warning'`
     */
    status: PropTypes.oneOf(['error', 'warning']),

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
     * 是否渲染为只读状态
     * 默认值：`false`
     */
    readOnly: PropTypes.bool,

    /**
     * 组件型，底部额外区域内容
     */
    extraFooter: PropTypes.node,

    /**
     * 是否显示“今天”快捷选择按钮
     * 默认值：`true`
     */
    showToday: PropTypes.bool,

    /**
     * 配置预设项列表
     */
    presets: PropTypes.arrayOf(
        PropTypes.exact({
            /**
             * 组件型，当前预设项标题
             */
            label: PropTypes.node,
            /**
             * 当前预设项对应值，与`format`格式对应
             */
            value: PropTypes.string
        })
    ),

    /**
     * 配合`presets`参数，监听最近一次预设项点击事件相关信息
     */
    clickedPreset: PropTypes.exact({
        /**
         * 对应预设项值
         */
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        /**
         * 事件对应时间戳信息
         */
        timestamp: PropTypes.number
    }),

    /**
     * 是否需要点击按钮确认选值，传入`false`时失去焦点即代表选择
     * 默认值：`false`
     */
    needConfirm: PropTypes.bool,

    /**
     * 自定义对应日期的单元格样式
     */
    customCells: PropTypes.arrayOf(
        PropTypes.exact({
            /**
             * 当前项匹配的年份值
             */
            year: PropTypes.number,
            /**
             * 当前项匹配的月份值
             */
            month: PropTypes.number,
            /**
             * 当前项匹配的日期值
             */
            date: PropTypes.number,
            /**
             * 自定义css样式
             */
            style: PropTypes.object,
            /**
             * 自定义css类名
             */
            className: PropTypes.string
        })
    ),

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
AntdDatePicker.defaultProps = {
    picker: 'date',
    disabled: false,
    showTime: false,
    size: 'middle',
    bordered: true,
    allowClear: true,
    autoFocus: false,
    locale: 'zh-cn',
    placement: 'bottomLeft',
    showToday: true,
    needConfirm: false,
    popupContainer: 'body',
    persisted_props: ['value'],
    persistence_type: 'local',
    batchPropsNames: []
}

export default AntdDatePicker;

export const propTypes = AntdDatePicker.propTypes;
export const defaultProps = AntdDatePicker.defaultProps;