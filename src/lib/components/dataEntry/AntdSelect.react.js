import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdSelect = React.lazy(() => import(/* webpackChunkName: "data_entry" */ '../../fragments/dataEntry/AntdSelect.react'));

/**
 * 下拉选择组件AntdSelect
 */
const AntdSelect = ({
    id,
    style,
    className,
    popupClassName,
    key,
    name,
    locale = 'zh-cn',
    setProps,
    placeholder,
    size = 'middle',
    bordered = true,
    variant,
    options = [],
    colorsNameWidth = 40,
    allowClear = true,
    autoFocus = false,
    disabled,
    value,
    mode,
    defaultValue,
    maxTagCount = 5,
    listHeight = 256,
    colorsMode = 'sequential',
    placement = 'bottomLeft',
    status,
    optionFilterProp = 'value',
    optionFilterMode = 'case-insensitive',
    autoSpin = false,
    debounceWait = 0,
    autoClearSearchValue = true,
    emptyContent,
    loadingEmptyContent,
    dropdownBefore,
    dropdownAfter,
    prefix,
    suffixIcon,
    popupContainer = 'body',
    readOnly,
    maxCount,
    popupMatchSelectWidth = true,
    persistence,
    persisted_props = ['value'],
    persistence_type = 'local',
    batchPropsNames = [],
    ...others
}) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdSelect {
                ...{
                    id,
                    style,
                    className,
                    popupClassName,
                    key,
                    name,
                    locale,
                    setProps,
                    placeholder,
                    size,
                    bordered,
                    variant,
                    options,
                    colorsNameWidth,
                    allowClear,
                    autoFocus,
                    disabled,
                    value,
                    mode,
                    defaultValue,
                    maxTagCount,
                    listHeight,
                    colorsMode,
                    placement,
                    status,
                    optionFilterProp,
                    optionFilterMode,
                    autoSpin,
                    debounceWait,
                    autoClearSearchValue,
                    emptyContent,
                    loadingEmptyContent,
                    dropdownBefore,
                    dropdownAfter,
                    prefix,
                    suffixIcon,
                    popupContainer,
                    readOnly,
                    maxCount,
                    popupMatchSelectWidth,
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

AntdSelect.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果F
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
     * 配置下拉选项
     */
    options: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.exact({
                /**
                 * 组件型，当前选项标签内容
                 */
                label: PropTypes.node.isRequired,
                /**
                 * 当前选项值
                 */
                value: PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.number
                ]).isRequired,
                /**
                 * 是否禁用当前选项
                 * 默认值：`false`
                 */
                disabled: PropTypes.bool,
                /**
                 * 针对色带特殊渲染模式，设置生成渐变色带所需的色彩值数组
                 */
                colors: PropTypes.arrayOf(PropTypes.string)
            }),
            PropTypes.exact({
                /**
                 * 组件型，当前分组标签内容
                 */
                group: PropTypes.node,
                /**
                 * 配置当前分组内选项
                 */
                options: PropTypes.arrayOf(
                    PropTypes.exact({
                        /**
                         * 组件型，当前选项标签内容
                         */
                        label: PropTypes.node.isRequired,
                        /**
                         * 当前选项值
                         */
                        value: PropTypes.oneOfType([
                            PropTypes.string,
                            PropTypes.number
                        ]).isRequired,
                        /**
                         * 是否禁用当前选项
                         * 默认值：`false`
                         */
                        disabled: PropTypes.bool,
                        /**
                         * 针对色带特殊渲染模式，设置生成渐变色带所需的色彩值数组
                         */
                        colors: PropTypes.arrayOf(PropTypes.string)
                    })
                )
            })
        ])
    ),

    /**
     * 下拉菜单最大像素高度
     */
    listHeight: PropTypes.number,

    /**
     * 色带特殊渲染模式下，设置渲染形式，可选项有`'sequential'`、`'diverging'`
     */
    colorsMode: PropTypes.oneOf(['sequential', 'diverging']),

    /**
     * 色带特殊渲染模式下，设置各选项名称部分像素宽度
     * 默认值：`40`
     */
    colorsNameWidth: PropTypes.number,

    /**
     * 选择模式，可选项有`'multiple'`（多选）、`'tags'`（自由新增）
     */
    mode: PropTypes.oneOf(['multiple', 'tags']),

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
     * 选择面板展开方向，可选项有`'bottomLeft'`、`'bottomRight'`、`'topLeft'`、`'topRight'`
     * 默认值：`'bottomLeft'`
     */
    placement: PropTypes.oneOf(['bottomLeft', 'bottomRight', 'topLeft', 'topRight']),

    /**
     * 监听或设置已选值
     */
    value: PropTypes.oneOfType([
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ])
        ),
    ]),

    /**
     * 初始化已选值
     */
    defaultValue: PropTypes.oneOfType([
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ])
        ),
    ]),

    /**
     * 当`multiple=True`时，已选值展示的最大数量
     * 默认值：`5`
     */
    maxTagCount: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(['responsive'])
    ]),

    /**
     * 控制校验状态，可选项有`'error'`、`'warning'`
     */
    status: PropTypes.oneOf(['error', 'warning']),

    /**
     * 基于搜索框中输入内容进行搜索的目标字段，可选项有`'value'`、`'label'`
     * 默认值：`'value'`
     */
    optionFilterProp: PropTypes.oneOf(['value', 'label']),

    /**
     * 监听搜索框已输入内容
     */
    searchValue: PropTypes.string,

    /**
     * 搜索匹配模式，可选项有`'case-insensitive'`（大小写不敏感）、`'case-sensitive'`（大小写敏感）、`'regex'`（正则表达式）、`'remote-match'`（远程匹配模式）
     * 默认值：`'case-insensitive'`
     */
    optionFilterMode: PropTypes.oneOf(['case-insensitive', 'case-sensitive', 'regex', 'remote-match']),

    /**
     * 以防抖延时的方式监听搜索框已输入内容
     */
    debounceSearchValue: PropTypes.string,

    /**
     * 防抖延时时长，单位：毫秒
     * 默认值：`0`
     */
    debounceWait: PropTypes.number,

    /**
     * 是否在当前组件相关属性处理回调更新中状态时，以加载中状态进行渲染
     * 默认值：`false`
     */
    autoSpin: PropTypes.bool,

    /**
     * 当`mode`为`'multiple'`或`'tags'`时，设置是否在选中项后自动清空搜索框中的内容
     * 默认值：`true`
     */
    autoClearSearchValue: PropTypes.bool,

    /**
     * 组件型，自定义空数据状态提示内容
     */
    emptyContent: PropTypes.node,

    /**
     * 组件型，自定义加载中状态下的空数据状态提示内容
     */
    loadingEmptyContent: PropTypes.node,

    /**
     * 组件型，选择菜单前缀内容
     */
    dropdownBefore: PropTypes.node,

    /**
     * 组件型，选择菜单后缀内容
     */
    dropdownAfter: PropTypes.node,

    /**
     * 组件型，前缀内嵌内容
     */
    prefix: PropTypes.node,

    /**
     * 自定义选择框后缀图标内容
     */
    suffixIcon: PropTypes.node,

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
     * 选择菜单是否与选择框同宽，设置为`false`时将关闭虚拟滚动功能
     * 默认值：`true`
     */
    popupMatchSelectWidth: PropTypes.bool,

    /**
     * 是否渲染为只读状态
     * 默认值：`false`
     */
    readOnly: PropTypes.bool,

    /**
     * `'multiple'`及 `'tags'`模式下有效，限制已选项数量上限
     */
    maxCount: PropTypes.number,

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

export default AntdSelect;

export const propTypes = AntdSelect.propTypes;
export const defaultProps = AntdSelect.defaultProps;