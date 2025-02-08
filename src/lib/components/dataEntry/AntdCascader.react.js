import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdCascader = React.lazy(() => import(/* webpackChunkName: "data_entry" */ '../../fragments/dataEntry/AntdCascader.react'));

/**
 * 级联选择组件AntdCascader
 */
const AntdCascader = ({
    id,
    style,
    className,
    popupClassName,
    key,
    name,
    locale = 'zh-cn',
    options,
    optionFilterProp = 'label',
    panelMode = false,
    optionsNodeKeyToLabel,
    optionsMode = 'tree',
    changeOnSelect = false,
    size,
    bordered = true,
    variant,
    disabled = false,
    placeholder,
    defaultValue,
    value,
    placement = 'bottomLeft',
    maxTagCount,
    multiple = false,
    expandTrigger = 'click',
    status,
    allowClear = true,
    autoFocus = false,
    showCheckedStrategy,
    popupContainer = 'body',
    prefix,
    suffixIcon,
    readOnly,
    setProps,
    persistence,
    persisted_props = ['value'],
    persistence_type = 'local',
    batchPropsNames = [],
    ...others
}) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdCascader {
                ...{
                    id,
                    style,
                    className,
                    popupClassName,
                    key,
                    name,
                    locale,
                    options,
                    optionFilterProp,
                    panelMode,
                    optionsNodeKeyToLabel,
                    optionsMode,
                    changeOnSelect,
                    size,
                    bordered,
                    variant,
                    disabled,
                    placeholder,
                    defaultValue,
                    value,
                    placement,
                    maxTagCount,
                    multiple,
                    expandTrigger,
                    status,
                    allowClear,
                    autoFocus,
                    showCheckedStrategy,
                    popupContainer,
                    prefix,
                    suffixIcon,
                    readOnly,
                    setProps,
                    persistence,
                    persisted_props,
                    persistence_type,
                    batchPropsNames,
                    ...others
                }
            } />
        </Suspense>
    );
}

// 定义递归PropTypes
const PropOptionNodeShape = {
    /**
     * 当前节点值
     */
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    /**
     * 当前节点唯一识别id
     */
    key: PropTypes.string,
    /**
     * 当前节点标题内容
     */
    label: PropTypes.string.isRequired,
    /**
     * 是否禁用当前节点
     */
    disabled: PropTypes.bool
};

const PropOptionNode = PropTypes.shape(PropOptionNodeShape);
PropOptionNodeShape.children = PropTypes.arrayOf(PropOptionNode);
const optionDataPropTypes = PropTypes.arrayOf(PropOptionNode);

// 定义扁平节点PropTypes
const PropFlatOptionNodeShape = {
    /**
     * 当前节点值
     */
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    /**
     * 当前节点标题内容
     */
    label: PropTypes.string.isRequired,
    /**
     * 是否禁用当前节点
     */
    disabled: PropTypes.bool,
    /**
     * 当前节点唯一识别id
     */
    key: PropTypes.string,
    /**
     * 当前节点对应父节点`key`值
     */
    parent: PropTypes.string
};

AntdCascader.propTypes = {
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
     * 对应`options`格式的渲染模式，可选项有`'tree'`（树形模式）、`'flat'`（扁平模式）
     * 默认值：`'tree'`
     */
    optionsMode: PropTypes.oneOf(['tree', 'flat']),

    /**
     * 定义构造级联选择所需的数据结构，与`optionsMode`一致
     */
    options: PropTypes.oneOfType([
        /**
         * 树形模式对应结构
         */
        optionDataPropTypes,
        /**
         * 偏平模式对应结构
         */
        PropTypes.arrayOf(PropFlatOptionNodeShape)
    ]).isRequired,

    /**
     * 针对级联结构中的指定节点，定义作为标题的组件型内容，优先级高于`options`中对应的`label`值
     */
    optionsNodeKeyToLabel: PropTypes.objectOf(PropTypes.node),

    /**
     * 选项关键词搜索时的目标字段，可选项有`'value'`、`'label'`
     * 默认值：`'label'`
     */
    optionFilterProp: PropTypes.oneOf(['value', 'label']),

    /**
     * 是否开启内嵌面板模式
     * 默认值：`false`
     */
    panelMode: PropTypes.bool,

    /**
     * 是否禁用当前组件
     * 默认值：`false`
     */
    disabled: PropTypes.bool,

    /**
     * 是否当级联选择中的任意节点被选择时均进行选中值更新
     * 默认值：`false`
     */
    changeOnSelect: PropTypes.bool,

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
     * 选择菜单展开方向，可选项有`'bottomLeft'`、`'bottomRight'`、`'topLeft'`、`'topRight'`
     * 默认值：`'bottomLeft'`
     */
    placement: PropTypes.oneOf(['bottomLeft', 'bottomRight', 'topLeft', 'topRight']),

    /**
     * 监听或设置已选值
     */
    value: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ])
        ),
        PropTypes.arrayOf(
            PropTypes.arrayOf(
                PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.number
                ])
            )
        )
    ]),

    /**
     * 初始化已选值
     */
    defaultValue: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ])
        ),
        PropTypes.arrayOf(
            PropTypes.arrayOf(
                PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.number
                ])
            )
        )
    ]),

    /**
     * 是否开启多选模式
     * 默认值：`false`
     */
    multiple: PropTypes.bool,

    /**
     * 当`multiple=True`时，已选值展示的最大数量
     */
    maxTagCount: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(['responsive'])
    ]),

    /**
     * 选择菜单展开触发方式，可选项有`'click'`、`'hover'`
     * 默认值：`'click'`
     */
    expandTrigger: PropTypes.oneOf(['click', 'hover']),

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
     * 已选项回填策略，可选项有`'show-parent'`、`'show-child'`
     */
    showCheckedStrategy: PropTypes.oneOf(['show-parent', 'show-child']),

    /**
     * 组件型，前缀内嵌内容
     */
    prefix: PropTypes.node,

    /**
     * 自定义选择框后缀图标内容
     */
    suffixIcon: PropTypes.node,

    /**
     * 是否渲染为只读状态
     * 默认值：`false`
     */
    readOnly: PropTypes.bool,

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

export default AntdCascader;

export const propTypes = AntdCascader.propTypes;
export const defaultProps = AntdCascader.defaultProps;