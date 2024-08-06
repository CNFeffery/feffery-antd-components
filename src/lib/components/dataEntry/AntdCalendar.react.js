import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdCalendar = React.lazy(() => import(/* webpackChunkName: "data_entry" */ '../../fragments/dataEntry/AntdCalendar.react'));

/**
 * 日历组件AntdCalendar
 */
const AntdCalendar = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdCalendar {...props} />
        </Suspense>
    );
}

AntdCalendar.propTypes = {
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
     * 配合`AntdForm`表单批量值搜集/控制功能使用，充当当前表单项的字段名，以`id`作为缺省值
     */
    name: PropTypes.string,

    /**
     * 组件文案语种，可选项有`'zh-cn'`、`'en-us'`
     * 默认值：`'zh-cn'`
     */
    locale: PropTypes.oneOf(['zh-cn', 'en-us']),

    /**
     * 日期显示格式，[参考资料](https://day.js.org/docs/en/display/format)
     * 默认值：`'YYYY-MM-DD'`
     */
    format: PropTypes.string,

    /**
     * 日历尺寸规格，可选项有`'default'`、`'large'`
     * 默认值：`'default'`
     */
    size: PropTypes.oneOf(['default', 'large']),

    /**
     * 监听或设置当前选中日期值
     */
    value: PropTypes.string,

    /**
     * 初始化选中日期值
     */
    defaultValue: PropTypes.string,

    /**
     * 自定义对应月份、日期的单元格显示内容
     */
    customCells: PropTypes.arrayOf(
        PropTypes.exact({
            /**
             * 必填，当前项对应类型，可选项有`'month'`、`'date'`
             */
            type: PropTypes.oneOf(['month', 'date']).isRequired,
            /**
             * 当前项匹配的月份值
             */
            month: PropTypes.number,
            /**
             * 当前项匹配的日期值
             */
            date: PropTypes.number,
            /**
             * 自定义内容
             */
            content: PropTypes.node
        })
    ),

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
AntdCalendar.defaultProps = {
    format: 'YYYY-MM-DD',
    size: 'default',
    persisted_props: ['value'],
    persistence_type: 'local',
    locale: 'zh-cn'
}

export default AntdCalendar;

export const propTypes = AntdCalendar.propTypes;
export const defaultProps = AntdCalendar.defaultProps;