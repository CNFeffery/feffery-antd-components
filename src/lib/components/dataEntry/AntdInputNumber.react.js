import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdInputNumber = React.lazy(() => import(/* webpackChunkName: "data_entry" */ '../../fragments/dataEntry/AntdInputNumber.react'));

/**
 * 数值输入框组件AntdInputNumber
 */
const AntdInputNumber = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdInputNumber {...props} />
        </Suspense>
    );
}

AntdInputNumber.propTypes = {
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
     * 组件型，前置标签内容
     */
    addonBefore: PropTypes.node,

    /**
     * 组件型，后置标签内容
     */
    addonAfter: PropTypes.node,

    /**
     * 组件型，前缀内嵌内容
     */
    prefix: PropTypes.node,

    /**
     * 组件型，后缀内嵌内容
     */
    suffix: PropTypes.node,

    /**
     * 是否自动获取焦点
     * 默认值：`false`
     */
    autoFocus: PropTypes.bool,

    /**
     * 是否显示增减数值按钮
     * 默认值：`true`
     */
    controls: PropTypes.bool,

    /**
     * 是否允许通过键盘上下方向键控制数值
     * 默认值：`true`
     */
    keyboard: PropTypes.bool,

    /**
     * 允许输入的数值下限，默认无限制
     */
    min: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),

    /**
     * 允许输入的数值上限，默认无限制
     */
    max: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),

    /**
     * 数值增减步长
     */
    step: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),

    /**
     * 数值精度
     */
    precision: PropTypes.number,

    /**
     * 是否开启字符串模式，用于在接受超高精度数值输入时不丢失精度，开启后，参数`min`、`max`、`step`、`value`、`defaultValue`均需要设置为字符型
     * 默认值：`false`
     */
    stringMode: PropTypes.bool,

    /**
     * 是否禁用当前组件
     * 默认值：`false`
     */
    disabled: PropTypes.bool,

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
     * 监听或设置已输入值
     */
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),

    /**
     * 初始化已输入值
     */
    defaultValue: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),

    /**
     * 监听防抖版本的已输入值
     */
    debounceValue: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),

    /**
     * 防抖延时时长，单位：毫秒
     * 默认值：`0`
     */
    debounceWait: PropTypes.number,

    /**
     * 监听输入框聚焦状态下，键盘enter键累计点按次数
     * 默认值：`0`
     */
    nSubmit: PropTypes.number,

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
     * 开启属性持久化功能的若干属性名，可选项有`'md5Value'`
     * 默认值：`['md5Value']`
     */
    persisted_props: PropTypes.arrayOf(PropTypes.oneOf(['value'])),

    /**
     * 属性持久化存储类型，可选项有`'local'`（本地持久化），`'session'`（会话持久化），`'memory'`（内存持久化）
     * 默认值：`'local'`
     */
    persistence_type: PropTypes.oneOf(['local', 'session', 'memory'])
};

// 设置默认参数
AntdInputNumber.defaultProps = {
    autoFocus: false,
    controls: true,
    keyboard: true,
    stringMode: false,
    disabled: false,
    size: 'middle',
    bordered: true,
    nSubmit: 0,
    debounceWait: 0,
    persisted_props: ['value'],
    persistence_type: 'local',
    batchPropsNames: []
}

export default AntdInputNumber;

export const propTypes = AntdInputNumber.propTypes;
export const defaultProps = AntdInputNumber.defaultProps;