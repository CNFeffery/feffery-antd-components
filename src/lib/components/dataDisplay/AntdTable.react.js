import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdTable = React.lazy(() => import(/* webpackChunkName: "antd_table" */ '../../fragments/AntdTable.react'));

/**
 * 表格组件AntdTable
 */
const AntdTable = ({
    id,
    className,
    style,
    key,
    locale = 'zh-cn',
    containerId,
    columns = [],
    showHeader = true,
    rowHoverable = true,
    tableLayout,
    miniChartHeight = 30,
    miniChartAnimation = false,
    rowSelectionType,
    selectedRowKeys,
    rowSelectionWidth = 32,
    rowSelectionCheckStrictly,
    rowSelectionIgnoreRowKeys,
    sticky = false,
    titlePopoverInfo,
    columnsFormatConstraint,
    enableHoverListen = false,
    data = [],
    sortOptions = {},
    showSorterTooltip = true,
    showSorterTooltipTarget = 'full-header',
    filterOptions = {},
    defaultFilteredValues = {},
    pagination,
    bordered = false,
    maxHeight,
    maxWidth,
    scrollToFirstRowOnChange = true,
    size = 'middle',
    mode = 'client-side',
    nClicksButton = 0,
    nDoubleClicksCell = 0,
    summaryRowContents,
    summaryRowBlankColumns = 0,
    summaryRowFixed = false,
    customFormatFuncs,
    conditionalStyleFuncs = {},
    expandedRowKeyToContent,
    expandedRowWidth,
    expandRowByClick = false,
    defaultExpandedRowKeys,
    expandedRowKeys,
    enableCellClickListenColumns = [],
    nClicksCell = 0,
    nContextMenuClicksCell = 0,
    emptyContent,
    cellUpdateOptimize = false,
    nClicksDropdownItem = 0,
    hiddenRowKeys = [],
    virtual = false,
    title,
    footer,
    loading = false,
    rowClassName,
    selectedRowsSyncWithData = false,
    setProps,
    ...others
}) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdTable {
                ...{
                    id,
                    className,
                    style,
                    key,
                    locale,
                    containerId,
                    columns,
                    showHeader,
                    rowHoverable,
                    tableLayout,
                    miniChartHeight,
                    miniChartAnimation,
                    rowSelectionType,
                    selectedRowKeys,
                    rowSelectionWidth,
                    rowSelectionCheckStrictly,
                    rowSelectionIgnoreRowKeys,
                    sticky,
                    titlePopoverInfo,
                    columnsFormatConstraint,
                    enableHoverListen,
                    data,
                    sortOptions,
                    showSorterTooltip,
                    showSorterTooltipTarget,
                    filterOptions,
                    defaultFilteredValues,
                    pagination,
                    bordered,
                    maxHeight,
                    maxWidth,
                    scrollToFirstRowOnChange,
                    size,
                    mode,
                    nClicksButton,
                    nDoubleClicksCell,
                    summaryRowContents,
                    summaryRowBlankColumns,
                    summaryRowFixed,
                    customFormatFuncs,
                    conditionalStyleFuncs,
                    expandedRowKeyToContent,
                    expandedRowWidth,
                    expandRowByClick,
                    defaultExpandedRowKeys,
                    expandedRowKeys,
                    enableCellClickListenColumns,
                    nClicksCell,
                    nContextMenuClicksCell,
                    emptyContent,
                    cellUpdateOptimize,
                    nClicksDropdownItem,
                    hiddenRowKeys,
                    virtual,
                    title,
                    footer,
                    loading,
                    rowClassName,
                    selectedRowsSyncWithData,
                    setProps,
                    ...others
                }
            } />
        </Suspense>
    );
}

AntdTable.propTypes = {
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
     * 当前组件css类名
     */
    className: PropTypes.string,

    /**
     * 组件文案语种，可选项有`'zh-cn'`（简体中文）、`'en-us'`（英语）、`'de-de'`（德语）、`'ru-ru'`（俄语）
     * 默认值：`'zh-cn'`
     */
    locale: PropTypes.oneOf(['zh-cn', 'en-us', 'de-de', 'ru-ru']),

    /**
     * 当表格渲染在具有滚动条的局部容器中时，指定该容器id，可避免出现部分表格内部展开层随滚动条滚动显示异常的问题
     */
    containerId: PropTypes.string,

    /**
     * 配置字段定义相关参数
     */
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            /**
             * 必填，当前字段标题
             */
            title: PropTypes.oneOfType([
                PropTypes.func,
                PropTypes.node
            ]).isRequired,
            /**
             * 必填，当前字段唯一识别id
             */
            dataIndex: PropTypes.string.isRequired,
            /**
             * 当前字段所属分组信息，用于渲染多级表头
             */
            group: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.arrayOf(PropTypes.string)
            ]),
            /**
             * 配置字段[再渲染模式](/AntdTable-rerender)相关参数
             */
            renderOptions: PropTypes.exact({
                /**
                 * 再渲染类型，可选项有`'link'`、`'ellipsis'`、`'copyable'`、`'ellipsis-copyable'`、`'tags'`、`'status-badge'`、`'image'`
                 * 、`'custom-format'`、`'corner-mark'`、`'row-merge'`、`'dropdown'`、`'dropdown-links'`、`'image-avatar'`
                 * 、`'mini-line'`、`'mini-bar'`、`'mini-progress'`、`'mini-ring-progress'`、`'mini-area'`
                 * 、`'button'`、`'checkbox'`、`'switch'`、`'select'`
                 */
                renderType: PropTypes.oneOf([
                    // 内容展示类
                    'link', 'ellipsis', 'copyable', 'ellipsis-copyable', 'tags',
                    'status-badge', 'image', 'custom-format', 'corner-mark',
                    'row-merge', 'dropdown', 'dropdown-links', 'image-avatar',
                    // 迷你图类
                    'mini-line', 'mini-bar', 'mini-progress', 'mini-ring-progress', 'mini-area',
                    // 监听交互类
                    'button', 'checkbox', 'switch', 'select'
                ]),
                /**
                 * 当`renderType='link'`时，统一设置渲染链接文本内容
                 */
                renderLinkText: PropTypes.string,
                /**
                 * 当`renderType='button'`时，控制多个按钮之间是否添加分割线
                 */
                renderButtonSplit: PropTypes.bool,
                /**
                 * 当`renderType='button'`时，配置气泡确认框相关参数
                 */
                renderButtonPopConfirmProps: PropTypes.exact({
                    /**
                     * 气泡确认框标题
                     */
                    title: PropTypes.string,
                    /**
                     * 气泡确认框确认按钮文案
                     */
                    okText: PropTypes.string,
                    /**
                     * 气泡确认框取消按钮文案
                     */
                    cancelText: PropTypes.string
                }),
                /**
                 * 当`renderType`为`'mini-line'`、`'mini-area'`、`'mini-bar'`时，设置图表颜色
                 */
                miniChartColor: PropTypes.string,
                /**
                 * 当`renderType`为`'mini-line'`、`'mini-area'`、`'mini-bar'`时，设置用于渲染信息卡片的`javascript`函数字符串
                 */
                tooltipCustomContent: PropTypes.string,
                /**
                 * 当`renderType`为`'mini-progress'`、`'mini-ring-progress'`时，设置进度完成状态下的填充色
                 */
                progressOneHundredPercentColor: PropTypes.string,
                /**
                 * 当`renderType`为`'mini-progress'`时，设置进度条是否附带进度数值信息
                 * 默认值：`false`
                 */
                progressShowPercent: PropTypes.bool,
                /**
                 * 当`renderType`为`'mini-progress'`时，设置进度条附带进度数值信息的小数位数，默认保持原始数值的精度
                 */
                progressPercentPrecision: PropTypes.number,
                /**
                 * 当`renderType`为`'mini-progress'`时，设置进度条附带进度数值信息显示的位置
                 */
                progressPercentPosition: PropTypes.shape({
                    /**
                     * 对齐方式，可选项有`'start'`、`'center'`、`'end'`
                     */
                    align: PropTypes.oneOf(['start', 'center', 'end']),
                    /**
                     * 内外位置，可选项有`'inner'`、`'outer'`
                     */
                    type: PropTypes.oneOf(['inner', 'outer'])
                }),
                /**
                 * 当`renderType`为`'mini-progress'`时，设置进度条形状类型，可选项有`'square'`、`'round'`
                 * 默认值：`'square'`
                 */
                progressStrokeLinecap: PropTypes.oneOf(['square', 'round']),
                /**
                 * 当`renderType`为`'mini-progress'`时，设置进度条像素尺寸
                 */
                progressSize: PropTypes.number,
                /**
                 * 当`renderType`为`'mini-progress'`时，设置进度条主体部分颜色，支持通过字段`'from'`、`'to'`配置渐变色
                 */
                progressColor: PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.shape({
                        /**
                         * 渐变色起始颜色
                         */
                        from: PropTypes.string,
                        /**
                         * 渐变色结束颜色
                         */
                        to: PropTypes.string
                    })
                ]),
                /**
                 * 当`renderType='mini-ring-progress'`时，设置进度数值像素大小
                 */
                ringProgressFontSize: PropTypes.number,
                /**
                 * 当`renderType`为`'dropdown'`、`'dropdown-links'`时，配置下拉菜单相关参数
                 */
                dropdownProps: PropTypes.exact({
                    /**
                     * 下拉菜单锚点标题内容
                     */
                    title: PropTypes.string,
                    /**
                     * 下拉菜单是否显示指示箭头
                     * 默认值：`false`
                     */
                    arrow: PropTypes.bool,
                    /**
                     * 是否整体禁用下拉菜单功能，优先级低于各记录值内部参数
                     */
                    disabled: PropTypes.bool,
                    /**
                     * 下拉菜单容器css类名
                     */
                    overlayClassName: PropTypes.string,
                    /**
                     * 下拉菜单容器css样式
                     */
                    overlayStyle: PropTypes.object,
                    /**
                     * 下拉菜单展开方向，可选项有`'bottomLeft'`、`'bottomCenter'`、`'bottomRight'`、`'topLeft'`、`'topCenter'`、`'topRight'`
                     */
                    placement: PropTypes.oneOf([
                        'bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight'
                    ])
                })
            }),
            /**
             * 当前字段冻结方向，可选项有`'left'`、`'right'`，设置为`true`时等价于`'left'`
             */
            fixed: PropTypes.oneOfType([
                PropTypes.oneOf(['left', 'right']),
                PropTypes.bool
            ]),
            /**
             * 当前字段是否可编辑
             * 默认值：`false`
             */
            editable: PropTypes.bool,
            /**
             * 配置可编辑模式下输入框相关参数
             */
            editOptions: PropTypes.exact({
                /**
                 * 编辑框模式，可选项有`'default'`、`'text-area'`
                 * 默认值：`'default'`
                 */
                mode: PropTypes.oneOf(['default', 'text-area']),
                /**
                 * 当`mode='textarea'`时，配置文本框自适应高度相关功能，同`AntdInput`
                 * 默认值：`false`
                 */
                autoSize: PropTypes.oneOfType([
                    PropTypes.bool,
                    PropTypes.exact({
                        minRows: PropTypes.number,
                        maxRows: PropTypes.number
                    })
                ]),
                /**
                 * 限制当前字段可编辑模式下，输入框内最多可输入的字符数量，默认无限制
                 */
                maxLength: PropTypes.number,
                /**
                 * 输入框无输入值时的占位提示信息
                 */
                placeholder: PropTypes.string,
                /**
                 * 当前字段下需进行输入框禁用的行记录`key`值列表
                 */
                disabledKeys: PropTypes.arrayOf(PropTypes.string),
            }),
            /**
             * 当前字段对齐方式，可选项有`'left'`、`'center'`、`'right'`
             * 默认值：`'center'`
             */
            align: PropTypes.oneOf(['left', 'center', 'right']),
            /**
             * 当前表头对齐方式，默认跟随当前字段对齐方式，可选项有`'left'`、`'center'`、`'right'`
             * 默认值：`'center'`
             */
            headerAlign: PropTypes.oneOf(['left', 'center', 'right']),
            /**
             * 当前字段宽度
             */
            width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
            /**
             * 控制当前字段最小宽度，仅当`tableLayout="auto"`时有效
             */
            minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
            /**
             * 是否隐藏当前字段
             * 默认值：`false`
             */
            hidden: PropTypes.bool,
            /**
             * 当前字段css类名
             */
            className: PropTypes.string,
            /**
             * 当前字段初始化时的默认排序状态，可选项有`'ascend'`、`'descend'`
             */
            defaultSortOrder: PropTypes.oneOf(['ascend', 'descend']),
            /**
             * 若当前字段通过参数`defaultFilteredValues`设置了初始化默认选中的筛选值，用于设置是否在用户点击重置按钮后恢复默认选中筛选项
             * 默认值：`false`
             */
            filterResetToDefaultFilteredValue: PropTypes.bool
        })
    ),

    /**
     * 是否显示表头
     * 默认值：`true`
     */
    showHeader: PropTypes.bool,

    /**
     * 表格行是否开启鼠标悬停样式效果
     * 默认值：`true`
     */
    rowHoverable: PropTypes.bool,

    /**
     * 当`columns`中各字段未设置`width`时，用于控制整体字段宽度分配方式，可选项有`'auto'`、`'fixed'`
     */
    tableLayout: PropTypes.oneOf(['auto', 'fixed']),

    /**
     * 定义表格数据源，与`columns`对应
     */
    data: PropTypes.arrayOf(
        PropTypes.objectOf(
            PropTypes.oneOfType([
                /**
                 * 通过`children`向下嵌套行记录
                 */
                PropTypes.arrayOf(PropTypes.any),
                /**
                 * 组件型元素
                 */
                PropTypes.node,
                /**
                 * 常规模式、`'ellipsis'`模式、`'copyable'`模式、`'custom-format'`模式、`'ellipsis-copyable'`模式
                 */
                PropTypes.string,
                /**
                 * 常规模式、`'ellipsis'`模式、`'mini-prorgess'`模式、`mini-ring-progress`模式、`'copyable'`模式、`'custom-format'`模式，
                 * 其中`mini-prorgess`模式、`'mini-ring-progress'`模式下输入值需在0~1之间
                 */
                PropTypes.number,
                PropTypes.bool,
                /**
                 * `'link'`模式
                 */
                PropTypes.exact({
                    /**
                     * 适用于`'link'`模式，链接显示的文字内容，优先级高于字段配置信息中的`renderLinkText`参数
                     */
                    content: PropTypes.string,
                    /**
                     * 适用于`'link'`模式，链接地址
                     */
                    href: PropTypes.string,
                    /**
                     * 适用于`'link'`模式，链接跳转行为
                     * 默认值：`'_blank'`
                     */
                    target: PropTypes.string,
                    /**
                     * 适用于`'link'`模式，是否禁用当前链接
                     * 默认值：`false`
                     */
                    disabled: PropTypes.bool
                }),
                /**
                 * `'mini-line'`模式、`'mini-bar'`模式、`'mini-area'`模式
                 */
                PropTypes.arrayOf(PropTypes.number),
                /**
                 * `tags`模式
                 */
                PropTypes.oneOfType([
                    /**
                     * 渲染单个标签
                     */
                    PropTypes.exact({
                        /**
                         * 适用于`'tags'`模式，标签颜色
                         */
                        color: PropTypes.string,
                        /**
                         * 适用于`'tags'`模式，标签内容
                         */
                        tag: PropTypes.oneOfType([
                            PropTypes.string,
                            PropTypes.number
                        ])
                    }),
                    /**
                     * 渲染多个标签
                     */
                    PropTypes.arrayOf(
                        PropTypes.exact({
                            /**
                             * 适用于`'tags'`模式，当前标签颜色
                             */
                            color: PropTypes.string,
                            /**
                             * 适用于`'tags'`模式，当前标签内容
                             */
                            tag: PropTypes.oneOfType([
                                PropTypes.string,
                                PropTypes.number
                            ])
                        })
                    )
                ]),
                /**
                 * `'button'`模式
                 */
                PropTypes.oneOfType([
                    /**
                     * 渲染单个按钮
                     */
                    PropTypes.exact({
                        /**
                         * 适用于`'button'`模式，同`AntdButton`中的同名参数
                         */
                        disabled: PropTypes.bool,
                        /**
                         * 适用于`'button'`模式，同`AntdButton`中的同名参数
                         */
                        type: PropTypes.oneOf(['primary', 'ghost', 'dashed', 'link', 'text', 'default']),
                        /**
                         * 适用于`'button'`模式，同`AntdButton`中的同名参数
                         */
                        color: PropTypes.oneOf(['default', 'primary', 'danger', 'blue', 'purple', 'cyan', 'green', 'magenta', 'pink', 'red', 'orange', 'yellow', 'volcano', 'geekblue', 'lime', 'gold']),
                        /**
                         * 适用于`'button'`模式，同`AntdButton`中的同名参数
                         */
                        variant: PropTypes.oneOf(['outlined', 'dashed', 'solid', 'filled', 'text', 'link']),
                        /**
                         * 适用于`'button'`模式，同`AntdButton`中的同名参数
                         */
                        danger: PropTypes.bool,
                        /**
                         * 适用于`'button'`模式，同`AntdButton`中的同名参数
                         */
                        style: PropTypes.object,
                        /**
                         * 适用于`'button'`模式，按钮内容
                         */
                        content: PropTypes.string,
                        /**
                         * 适用于`'button'`模式，同`AntdButton`中的同名参数
                         */
                        href: PropTypes.string,
                        /**
                         * 适用于`'button'`模式，同`AntdButton`中的同名参数
                         */
                        target: PropTypes.string,
                        /**
                         * 适用于`'button'`模式，用于为当前按钮配置气泡确认框相关参数，优先级更高
                         */
                        popConfirmProps: PropTypes.exact({
                            /**
                             * 气泡确认框标题
                             */
                            title: PropTypes.string,
                            /**
                             * 气泡确认框确认按钮文案
                             */
                            okText: PropTypes.string,
                            /**
                             * 气泡确认框取消按钮文案
                             */
                            cancelText: PropTypes.string
                        }),
                        /**
                         * 适用于`'button'`模式，按钮前缀图标类型，`iconRenderer`为`'AntdIcon'`时同`AntdIcon`同名参数，`iconRenderer`为`'fontawesome'`时为css类名
                         */
                        icon: PropTypes.string,
                        /**
                         * 适用于`'button'`模式，按钮前缀图标渲染方式，可选项有`'AntdIcon'`、`'fontawesome'`
                         */
                        iconRenderer: PropTypes.oneOf(['AntdIcon', 'fontawesome']),
                        /**
                         * 适用于`'button'`模式，为当前按钮添加额外的文字提示功能
                         */
                        tooltip: PropTypes.shape({
                            /**
                             * 文字提示内容
                             */
                            title: PropTypes.string,
                            /**
                             * 文字提示弹出方向，可选项有`'top'`、`'left'`、`'right'`、`'bottom'`、`'topLeft'`、`'topRight'`、`'bottomLeft'`、`'bottomRight'`、`'leftTop'`、`'leftBottom'`、`'rightTop'`、`'rightBottom'`
                             * 默认值：`'top'`
                             */
                            placement: PropTypes.oneOf([
                                'top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'
                            ]),
                        }),
                        /**
                         * 适用于`'button'`模式，额外补充信息
                         */
                        custom: PropTypes.any
                    }),
                    /**
                     * 渲染多个按钮
                     */
                    PropTypes.arrayOf(
                        PropTypes.exact({
                            /**
                             * 适用于`'button'`模式，同`AntdButton`中的同名参数
                             */
                            disabled: PropTypes.bool,
                            /**
                             * 适用于`'button'`模式，同`AntdButton`中的同名参数
                             */
                            type: PropTypes.oneOf(['primary', 'ghost', 'dashed', 'link', 'text', 'default']),
                            /**
                             * 适用于`'button'`模式，同`AntdButton`中的同名参数
                             */
                            danger: PropTypes.bool,
                            /**
                             * 适用于`'button'`模式，同`AntdButton`中的同名参数
                             */
                            style: PropTypes.object,
                            /**
                             * 适用于`'button'`模式，按钮内容
                             */
                            content: PropTypes.string,
                            /**
                             * 适用于`'button'`模式，同`AntdButton`中的同名参数
                             */
                            href: PropTypes.string,
                            /**
                             * 适用于`'button'`模式，同`AntdButton`中的同名参数
                             */
                            target: PropTypes.string,
                            /**
                             * 适用于`'button'`模式，当前按钮前缀图标类型，`iconRenderer`为`'AntdIcon'`时同`AntdIcon`同名参数，`iconRenderer`为`'fontawesome'`时为css类名
                             */
                            icon: PropTypes.string,
                            /**
                             * 适用于`'button'`模式，当前按钮前缀图标渲染方式，可选项有`'AntdIcon'`、`'fontawesome'`
                             */
                            iconRenderer: PropTypes.oneOf(['AntdIcon', 'fontawesome']),
                            /**
                             * 适用于`'button'`模式，额外补充信息
                             */
                            custom: PropTypes.any
                        })
                    )
                ]),
                /**
                 * `'status-badge'`模式
                 */
                PropTypes.exact({
                    /**
                     * 适用于`'status-badge'`模式，状态徽标状态，可选项有`'success'`、`'processing'`、`'default'`、`'error'`、`'warning'`
                     */
                    status: PropTypes.oneOf(['success', 'processing', 'default', 'error', 'warning']),
                    /**
                     * 适用于`'status-badge'`模式，状态徽标标签内容
                     */
                    text: PropTypes.oneOfType([
                        PropTypes.string,
                        PropTypes.number
                    ])
                }),
                /**
                 * `'image'`模式
                 */
                PropTypes.exact({
                    /**
                     * 适用于`'image'`模式，图片资源地址
                     */
                    src: PropTypes.string,
                    /**
                     * 适用于`'image'`模式，图片高度
                     */
                    height: PropTypes.oneOfType([
                        PropTypes.string,
                        PropTypes.number
                    ]),
                    /**
                     * 适用于`'image'`模式，图片是否可交互预览
                     * 默认值：`true`
                     */
                    preview: PropTypes.bool
                }),
                /**
                 * `'corner-mark'`模式
                 */
                PropTypes.exact({
                    /**
                     * 适用于`'corner-mark'`模式，角标显示方位，可选项有`'top-left'`、`'top-right'`、`'bottom-left'`、`'bottom-right'`
                     */
                    placement: PropTypes.oneOf(['top-left', 'top-right', 'bottom-left', 'bottom-right']),
                    /**
                     * 适用于`'corner-mark'`模式，角标颜色
                     * 默认值：`'#1890ff'`
                     */
                    color: PropTypes.string,
                    /**
                     * 适用于`'corner-mark'`模式，单元格数值内容
                     */
                    content: PropTypes.oneOfType([
                        PropTypes.number,
                        PropTypes.string
                    ]),
                    /**
                     * 适用于`'corner-mark'`模式，角标水平方向像素偏移量
                     */
                    offsetX: PropTypes.number,
                    /**
                     * 适用于`'corner-mark'`模式，角标竖直方向像素偏移量
                     */
                    offsetY: PropTypes.number,
                    /**
                     * 适用于`'corner-mark'`模式，是否隐藏当前角标
                     * 默认值：`false`
                     */
                    hide: PropTypes.bool
                }),
                /**
                 * `'checkbox'`模式
                 */
                PropTypes.exact({
                    /**
                     * 适用于`'checkbox'`模式，当前勾选框状态
                     */
                    checked: PropTypes.bool,
                    /**
                     * 适用于`'checkbox'`模式，是否禁用当前勾选框
                     */
                    disabled: PropTypes.bool,
                    /**
                     * 适用于`'checkbox'`模式，当前勾选框标签内容
                     */
                    label: PropTypes.string,
                    /**
                     * 适用于`'checkbox'`模式，额外补充信息
                     */
                    custom: PropTypes.any
                }),
                /**
                 * `'switch'`模式
                 */
                PropTypes.exact({
                    /**
                     * 适用于`'switch'`模式，当前开关状态
                     */
                    checked: PropTypes.bool,
                    /**
                     * 适用于`'switch'`模式，是否禁用当前开关
                     */
                    disabled: PropTypes.bool,
                    /**
                     * 适用于`'switch'`模式，“开”状态标签内容
                     */
                    checkedChildren: PropTypes.string,
                    /**
                     * 适用于`'switch'`模式，“关”状态标签内容
                     */
                    unCheckedChildren: PropTypes.string,
                    /**
                     * 适用于`'switch'`模式，额外补充信息
                     */
                    custom: PropTypes.any
                }),
                /**
                 * `'row-merge'`模式
                 */
                PropTypes.exact({
                    /**
                     * 适用于`'row-merge'`模式，单元格数值内容
                     */
                    content: PropTypes.oneOfType([
                        PropTypes.number,
                        PropTypes.string
                    ]),
                    /**
                     * 适用于`'row-merge'`模式，从当前单元格开始，向后合并的其他单元格数量
                     */
                    rowSpan: PropTypes.number
                }),
                /**
                 * `'dropdown'`模式
                 */
                PropTypes.arrayOf(
                    PropTypes.exact({
                        /**
                         * 适用于`'dropdown'`模式，当前下拉菜单项锚点内容
                         */
                        title: PropTypes.string,
                        /**
                         * 适用于`'dropdown'`模式，是否禁用当前下拉菜单项
                         */
                        disabled: PropTypes.bool,
                        /**
                         * 适用于`'dropdown'`模式，当前按钮前缀图标类型，`iconRenderer`为`'AntdIcon'`时同`AntdIcon`同名参数，`iconRenderer`为`'fontawesome'`时为css类名
                         */
                        icon: PropTypes.string,
                        /**
                         * 适用于`'dropdown'`模式，当前按钮前缀图标渲染方式，可选项有`'AntdIcon'`、`'fontawesome'`
                         */
                        iconRenderer: PropTypes.oneOf(['AntdIcon', 'fontawesome']),
                        /**
                         * 适用于`'dropdown'`模式，额外补充信息
                         */
                        custom: PropTypes.any,
                        /**
                         * 适用于`'dropdown'`模式，当前项是否渲染为分割线
                         * 默认值：`false`
                         */
                        isDivider: PropTypes.bool
                    })
                ),
                /**
                 * `'dropdown-links'`模式
                 */
                PropTypes.arrayOf(
                    PropTypes.exact({
                        /**
                         * 适用于`'dropdown-links'`模式，当前下拉菜单项锚点内容
                         */
                        title: PropTypes.string,
                        /**
                         * 适用于`'dropdown-links'`模式，当前下拉菜单项链接地址
                         */
                        href: PropTypes.string,
                        /**
                         * 适用于`'dropdown-links'`模式，是否禁用当前下拉菜单项
                         */
                        disabled: PropTypes.bool,
                        /**
                         * 适用于`'dropdown-links'`模式，当前按钮前缀图标类型，`iconRenderer`为`'AntdIcon'`时同`AntdIcon`同名参数，`iconRenderer`为`'fontawesome'`时为css类名
                         */
                        icon: PropTypes.string,
                        /**
                         * 适用于`'dropdown-links'`模式，当前按钮前缀图标渲染方式，可选项有`'AntdIcon'`、`'fontawesome'`
                         */
                        iconRenderer: PropTypes.oneOf(['AntdIcon', 'fontawesome']),
                        /**
                         * 适用于`'dropdown-links'`模式，当前项是否渲染为分割线
                         * 默认值：`false`
                         */
                        isDivider: PropTypes.bool
                    })
                ),
                /**
                 * `'image-avatar'`模式
                 */
                PropTypes.exact({
                    /**
                     * 适用于`'image-avatar'`模式，头像图片资源链接
                     */
                    src: PropTypes.string,
                    /**
                     * 适用于`'image-avatar'`模式，头像尺寸规格，传入数值型时表示像素大小，传入字符型时可使用内置尺寸规格，可选项有`'small'`、`'default'`、`'large'`，支持响应式
                     * 默认值：`'default'`
                     */
                    size: PropTypes.oneOfType([
                        PropTypes.number,
                        PropTypes.oneOf(['large', 'small', 'default']),
                        PropTypes.exact({
                            xs: PropTypes.number,
                            sm: PropTypes.number,
                            md: PropTypes.number,
                            lg: PropTypes.number,
                            xl: PropTypes.number,
                            xxl: PropTypes.number
                        })
                    ]),
                    /**
                     * 适用于`'image-avatar'`模式，头像形状，可选项有`'circle'`、`'square'`
                     * 默认值：`'circle'`
                     */
                    shape: PropTypes.oneOf(['circle', 'square'])
                }),
                /**
                 * `'select'`模式
                 */
                PropTypes.exact({
                    /**
                     * 适用于`'select'`模式，下拉选择css类名
                     */
                    className: PropTypes.string,
                    /**
                     * 适用于`'select'`模式，下拉选择css样式，其中`width`默认为`'100%'`
                     */
                    style: PropTypes.object,
                    /**
                     * 适用于`'select'`模式，定义下拉选择选项
                     */
                    options: PropTypes.arrayOf(
                        PropTypes.exact({
                            /**
                             * 当前选项标题
                             */
                            label: PropTypes.string,
                            /**
                             * 当前选项值
                             */
                            value: PropTypes.oneOfType([
                                PropTypes.string,
                                PropTypes.number
                            ])
                        })
                    ),
                    /**
                     * 适用于`'select'`模式，下拉选择菜单像素高度
                     * 默认值：`256`
                     */
                    listHeight: PropTypes.number,
                    /**
                     * 适用于`'select'`模式，选择模式，可选项有`'multiple'`、`'tags'`，默认为单选模式
                     */
                    mode: PropTypes.oneOf(['multiple', 'tags']),
                    /**
                     * 适用于`'select'`模式，是否禁用当前下拉选择
                     */
                    disabled: PropTypes.bool,
                    /**
                     * 适用于`'select'`模式，下拉选择尺寸规格，可选项有`'small'`、`'middle'`、`'large'`
                     * 默认值：`'middle'`
                     */
                    size: PropTypes.oneOf([
                        'small', 'middle', 'large'
                    ]),
                    /**
                     * 适用于`'select'`模式，是否渲染边框
                     * 默认值：`true`
                     */
                    bordered: PropTypes.bool,
                    /**
                     * 适用于`'select'`模式，选择框占位内容
                     */
                    placeholder: PropTypes.string,
                    /**
                     * 适用于`'select'`模式，下拉菜单展开方向，可选项有`'bottomLeft'`、`'bottomRight'`、`'topLeft'`、`'topRight'`
                     * 默认值：`'bottomLeft'`
                     */
                    placement: PropTypes.oneOf(['bottomLeft', 'bottomRight', 'topLeft', 'topRight']),
                    /**
                     * 适用于`'select'`模式，下拉选择已选中值
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
                     * 适用于`'select'`模式，最多显示的已选中选项数量，超出部分将会自动省略
                     * 默认值：`5`
                     */
                    maxTagCount: PropTypes.oneOfType([
                        PropTypes.number,
                        PropTypes.oneOf(['responsive'])
                    ]),
                    /**
                     * 适用于`'select'`模式，选择框内搜索对应的目标字段，可选项有`'value'`、`'label'`
                     * 默认值：`'value'`
                     */
                    optionFilterProp: PropTypes.oneOf(['value', 'label']),
                    /**
                     * 适用于`'select'`模式，是否允许快捷清空已选项
                     * 默认值：`true`
                     */
                    allowClear: PropTypes.bool
                }),
                /**
                 * 兼容携带自定义数据的场景
                 */
                PropTypes.object
            ])
        )
    ),

    /**
     * 是否渲染框线
     * 默认值：`false`
     */
    bordered: PropTypes.bool,

    /**
     * 表格最大像素高度，当实际表格高度超出限制时，会自动渲染竖直滚动条
     */
    maxHeight: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),

    /**
     * 表格最大宽度，当实际表格宽度超出限制时，会自动渲染水平滚动条
     */
    maxWidth: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.bool
    ]),

    /**
     * 当分页、排序、筛选操作触发表格变化后，是否滚动到表格顶部
     * 默认值：`true`
     */
    scrollToFirstRowOnChange: PropTypes.bool,

    /**
     * 表格单元格尺寸规格，可选项有`'small'`、`'middle'`、`'large'`
     */
    size: PropTypes.oneOf(['small', 'middle', 'large']),

    /**
     * 行选择模式，可选项有`'checkbox'`（多选）、`'radio'`（单选），默认不开启行选择功能
     */
    rowSelectionType: PropTypes.oneOf(['checkbox', 'radio']),

    /**
     * 监听已选行对应`key`值
     */
    selectedRowKeys: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
    ),

    /**
     * 监听已选行记录
     */
    selectedRows: PropTypes.array,

    /**
     * 行选择控件所在列宽度
     * 默认值：`32`
     */
    rowSelectionWidth: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),

    /**
     * 针对嵌套行，各行与其所嵌套的内部行之间的行选择行为是否互相独立
     * 默认值：`true`
     */
    rowSelectionCheckStrictly: PropTypes.bool,

    /**
     * 指定不可被选中的行对应`key`值
     */
    rowSelectionIgnoreRowKeys: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
    ),

    /**
     * 当表格数据源`data`更新时，是否根据当前有效的`selectedRowKeys`参数对`selectedRows`中的数据进行同步更新
     * 默认值：`false`
     */
    selectedRowsSyncWithData: PropTypes.bool,

    /**
     * 配置粘性表头相关功能
     * 默认值：`false`
     */
    sticky: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.exact({
            /**
             * 粘贴在其下方的元素的 CSS 选择器
             */
            belowSelector: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.arrayOf(PropTypes.string)
            ]),
            /**
             * 粘性表头竖直方向上的像素偏移量
             */
            offsetHeader: PropTypes.number,
            /**
             * 粘性表头底部横向滚动条竖直方向上的像素偏移量
             */
            offsetScroll: PropTypes.number
        })
    ]),

    /**
     * 是否启用行鼠标移入/移出事件监听，开启后可能会影响到部分其他功能，请根据实际情况进行使用
     * 默认值：`false`
     */
    enableHoverListen: PropTypes.bool,

    /**
     * 当`enableHoverListen=True`时，监听最近一次鼠标移入的字段对应`dataIndex`信息
     */
    recentlyMouseEnterColumnDataIndex: PropTypes.string,

    /**
     * 当`enableHoverListen=True`时，监听最近一次鼠标移入的行对应`key`信息
     */
    recentlyMouseEnterRowKey: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),

    /**
     * 当`enableHoverListen=True`时，监听最近一次鼠标移入的行数据信息
     */
    recentlyMouseEnterRow: PropTypes.object,

    /**
     * 配置各字段标题额外气泡说明卡片信息相关参数
     */
    titlePopoverInfo: PropTypes.objectOf(
        PropTypes.exact({
            /**
             * 气泡卡片标题
             */
            title: PropTypes.string,
            /**
             * 气泡卡片内容
             */
            content: PropTypes.string,
            /**
             * 气泡卡片弹出方位，可选项有`'top'`、`'left'`、`'right'`、`'bottom'`、`'topLeft'`、`'topRight'`、`'bottomLeft'`、`'bottomRight'`、`'leftTop'`、`'leftBottom'`、`'rightTop'`、`'rightBottom'`
             * 默认值：`'bottom'`
             */
            placement: PropTypes.oneOf([
                'top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom'
            ]),
            /**
             * 气泡卡片展开层css样式
             */
            overlayStyle: PropTypes.object
        })
    ),

    /**
     * 针对开启了可编辑模式的字段，配置基于正则表达式的输入内容格式校验约束规则
     */
    columnsFormatConstraint: PropTypes.objectOf(
        PropTypes.exact({
            /**
             * 正则表达式，用于校验输入内容是否符合格式要求
             */
            rule: PropTypes.string,
            /**
             * 用户输入内容校验失败时的提示说明信息
             */
            content: PropTypes.string
        })
    ),

    /**
     * 配置表格字段排序相关功能
     */
    sortOptions: PropTypes.exact({
        /**
         * 参与排序的若干字段`dataIndex`数组，多字段组合排序时，数组顺序即为组合排序优先级顺序，由高到低
         */
        sortDataIndexes: PropTypes.arrayOf(PropTypes.string),
        /**
         * 是否启用多字段组合排序，当设置为`'auto'`时表示自动组合排序，此时组合排序的字段优先级顺序与用户依次点击排序字段的顺序对应
         * 默认值：`false``
         */
        multiple: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.oneOf(['auto'])
        ]),
        /**
         * 为各字段指定排序比较模式，可选项有`'number'`（强制数值型排序）、`'custom'`（自定义排序）
         */
        forceCompareModes: PropTypes.objectOf(
            PropTypes.oneOf(['number', 'custom'])
        ),
        /**
         * 当`forceCompareModes`为`'custom'`时，用于为相应字段设置自定义排序对应的元素顺序
         */
        customOrders: PropTypes.objectOf(PropTypes.array)
    }),

    /**
     * 针对可排序字段是否在鼠标移入表头后展示额外信息提示
     * 默认值：`true`
     */
    showSorterTooltip: PropTypes.bool,

    /**
     * 控制可排序字段表头额外信息提示的鼠标移入触发目标，可选项有`'full-header'`、`'sorter-icon'`
     * 默认值：`'full-header'`
     */
    showSorterTooltipTarget: PropTypes.oneOf(['full-header', 'sorter-icon']),

    /**
     * 配置表格字段筛选相关功能
     */
    filterOptions: PropTypes.objectOf(
        PropTypes.exact({
            /**
             * 筛选模式，可选项有`'checkbox'`、`'keyword'`、`'tree'`，其中`'tree'`模式需要依赖相应的`'filterCustomTreeItems'`参数进行自定义树形菜单结构的构造
             * 默认值：`'checkbox'`
             */
            filterMode: PropTypes.oneOf(['checkbox', 'keyword', 'tree']),
            /**
             * `filterMode`为`'checkbox'`时，用于自定义筛选菜单项
             */
            filterCustomItems: PropTypes.oneOfType([
                PropTypes.arrayOf([
                    PropTypes.string,
                    PropTypes.number
                ]),
                PropTypes.any
            ]),
            /**
             * `filterMode`为`'tree'`时，用于构造自定义树形菜单结构
             */
            filterCustomTreeItems: PropTypes.arrayOf(PropTypes.object),
            /**
             * `filterMode`为`'checkbox'`时，是否开启多选模式
             * 默认值：`true`
             */
            filterMultiple: PropTypes.bool,
            /**
             * `filterMode`为`'checkbox'`时，是否开启搜索框
             * 默认值：`false`
             */
            filterSearch: PropTypes.bool
        })
    ),

    /**
     * 字段筛选相关字段默认选中的筛选值
     */
    defaultFilteredValues: PropTypes.objectOf(PropTypes.array),

    /**
     * 配置表格翻页相关功能，设置为`false`时将关闭分页相关功能
     */
    pagination: PropTypes.oneOfType([
        PropTypes.exact({
            /**
             * 分页组件渲染方位，可选项有`'topLeft'`、`'topCenter'`、`'topRight'`、`'bottomLeft'`、`'bottomCenter'`、`'bottomRight'`
             * 默认值：`'bottomRight'`
             */
            position: PropTypes.oneOf([
                'topLeft', 'topCenter', 'topRight', 'bottomLeft', 'bottomCenter', 'bottomRight'
            ]),
            /**
             * 监听或设置每页允许显示的最大行记录数量
             */
            pageSize: PropTypes.number,
            /**
             * 监听或设置当前页码
             */
            current: PropTypes.number,
            /**
             * 是否显示`pageSize`切换控件，当表格总记录数量大于50时默认为`true`
             */
            showSizeChanger: PropTypes.bool,
            /**
             * `pageSize`切换控件的可选项
             */
            pageSizeOptions: PropTypes.arrayOf(PropTypes.number),
            /**
             * 各页码在鼠标移入时，是否显示浏览器原生提示信息
             * 默认值：`true`
             */
            showTitle: PropTypes.bool,
            /**
             * 是否渲染快捷跳页控件
             * 默认值：`false`
             */
            showQuickJumper: PropTypes.bool,
            /**
             * 总记录描述文案前缀文字
             */
            showTotalPrefix: PropTypes.string,
            /**
             * 总记录描述文案后缀文字
             */
            showTotalSuffix: PropTypes.string,
            /**
             * 是否在数据行数量不足一页时，自动隐藏分页相关控件
             * 默认值：`false`
             */
            hideOnSinglePage: PropTypes.bool,
            /**
             * 是否开启简洁模式
             * 默认值：`false`
             */
            simple: PropTypes.bool,
            /**
             * 是否禁用分页相关控件
             * 默认值：`false`
             */
            disabled: PropTypes.bool,
            /**
             * 分页控件尺寸规格，可选项有`'small'`、`'default'`
             * 默认值：`'default'`
             */
            size: PropTypes.oneOf(['default', 'small']),
            /**
             * 手动设置总记录数量，通常配合[服务端数据加载模式](/AntdTable-server-side-mode)使用
             */
            total: PropTypes.number,
            /**
             * 是否优先展示较少的跳页项
             * 默认值：`false`
             */
            showLessItems: PropTypes.bool
        }),
        PropTypes.bool
    ]),

    /**
     * 监听经过编辑修改操作后，最新状态下的表格数据源
     */
    currentData: PropTypes.array,

    /**
     * 监听最近一次编辑修改操作，对应的被修改行记录数据
     */
    recentlyChangedRow: PropTypes.object,

    /**
     * 监听最近一次编辑修改操作，对应的被修改字段`dataIndex`信息
     */
    recentlyChangedColumn: PropTypes.string,

    /**
     * 监听排序操作相关行为参数
     */
    sorter: PropTypes.exact({
        /**
         * 监听排序涉及的字段`dataIndex`信息
         */
        columns: PropTypes.arrayOf(PropTypes.string),
        /**
         * 监听排序涉及的字段对应排序方式，其中`'ascend'`表示升序，`'descend'`表示降序
         */
        orders: PropTypes.arrayOf(PropTypes.oneOf(['ascend', 'descend']))
    }),

    /**
     * 监听筛选操作相关行为参数
     */
    filter: PropTypes.object,

    /**
     * 表格数据加载控制方式，可选项有`'client-side'`（客户端加载）、`'server-side'`（服务端），其中服务端模式适用于大量数据展示需求，具体请参考[服务端数据加载模式](/AntdTable-server-side-mode)
     * 默认值：`'client-side'`
     */
    mode: PropTypes.oneOf(['client-side', 'server-side']),

    /**
     * 配置总结栏内容，按数组顺序渲染
     */
    summaryRowContents: PropTypes.arrayOf(
        PropTypes.shape({
            /**
             * 组件型，当前总结栏单元格内容
             */
            content: PropTypes.node,
            /**
             * 当前总结栏单元格横跨占据的字段数量
             * 默认值：`1`
             */
            colSpan: PropTypes.number,
            /**
             * 当前总结栏列对齐方式，可选项有`'left'`、`'center'`、`'right'`
             */
            align: PropTypes.oneOf(['left', 'center', 'right']),
        })
    ),

    /**
     * 总结栏每行用于占位的列数，适用于同时使用行选择等功能的场景
     * 默认值：`0`
     */
    summaryRowBlankColumns: PropTypes.number,

    /**
     * 总结栏是否启用固定布局功能，也可设置为`'top'`、`'bottom'`控制总结栏固定在顶部或底部
     * 默认值：`false`
     */
    summaryRowFixed: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(['top', 'bottom'])
    ]),

    /**
     * 配置各字段条件格式化渲染对应的`javascript`函数字符串
     */
    conditionalStyleFuncs: PropTypes.objectOf(
        PropTypes.string
    ),

    /**
     * 配置各数据行的行展开内容，键为数据行`key`值，值为对应行的展开内容
     */
    expandedRowKeyToContent: PropTypes.arrayOf(
        PropTypes.exact({
            key: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]).isRequired,
            content: PropTypes.node
        })
    ),

    /**
     * 行展开控件所在列宽度
     */
    expandedRowWidth: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),

    /**
     * 是否允许通过直接点击行的方式展开对应行
     * 默认值：`false`
     */
    expandRowByClick: PropTypes.bool,

    /**
     * 初始化处于展开状态的行对应`key`值
     */
    defaultExpandedRowKeys: PropTypes.arrayOf(PropTypes.string),

    /**
     * 监听或设置处于展开状态的行对应`key`值
     */
    expandedRowKeys: PropTypes.arrayOf(PropTypes.string),

    /**
     * 是否启用单元格单击、双击、右键相关事件的监听，开启后可能会影响到部分其他功能，请根据实际情况进行使用
     * 默认值：`false`
     */
    enableCellClickListenColumns: PropTypes.arrayOf(PropTypes.string),

    /**
     * 当`enableCellClickListenColumns=True`时，监听最近一次单元格单击事件对应的字段`dataIndex`
     */
    recentlyCellClickColumn: PropTypes.string,

    /**
     * 当`enableCellClickListenColumns=True`时，监听最近一次单元格单击事件对应的行记录信息
     */
    recentlyCellClickRecord: PropTypes.object,

    /**
     * 当`enableCellClickListenColumns=True`时，监听表格单元格单击事件累计发生次数
     * 默认值：`0`
     */
    nClicksCell: PropTypes.number,

    /**
     * 当`enableCellClickListenColumns=True`时，监听最近一次表格单元格单击事件详细参数
     */
    cellClickEvent: PropTypes.exact({
        /**
         * 以页面整体左上角为原点，记录x坐标
         */
        pageX: PropTypes.number,
        /**
         * 以页面整体左上角为原点，记录y坐标
         */
        pageY: PropTypes.number,
        /**
         * 以浏览器窗口左上角为原点，记录x坐标
         */
        clientX: PropTypes.number,
        /**
         * 以浏览器窗口左上角为原点，记录y坐标
         */
        clientY: PropTypes.number,
        /**
         * 以屏幕左上角为原点，记录x坐标
         */
        screenX: PropTypes.number,
        /**
         * 以屏幕左上角为原点，记录y坐标
         */
        screenY: PropTypes.number,
        /**
         * 事件对应的时间戳
         */
        timestamp: PropTypes.number
    }),

    /**
     * 当`enableCellClickListenColumns=True`时，监听最近一次单元格双击事件对应的字段`dataIndex`
     */
    recentlyCellDoubleClickColumn: PropTypes.string,

    /**
     * 当`enableCellClickListenColumns=True`时，监听最近一次单元格双击事件对应的行记录信息
     */
    recentlyCellDoubleClickRecord: PropTypes.object,

    /**
     * 当`enableCellClickListenColumns=True`时，监听表格单元格双击事件累计发生次数
     * 默认值：`0`
     */
    nDoubleClicksCell: PropTypes.number,

    /**
     * 当`enableCellClickListenColumns=True`时，监听最近一次表格单元格双击事件详细参数
     */
    cellDoubleClickEvent: PropTypes.exact({
        /**
         * 以页面整体左上角为原点，记录x坐标
         */
        pageX: PropTypes.number,
        /**
         * 以页面整体左上角为原点，记录y坐标
         */
        pageY: PropTypes.number,
        /**
         * 以浏览器窗口左上角为原点，记录x坐标
         */
        clientX: PropTypes.number,
        /**
         * 以浏览器窗口左上角为原点，记录y坐标
         */
        clientY: PropTypes.number,
        /**
         * 以屏幕左上角为原点，记录x坐标
         */
        screenX: PropTypes.number,
        /**
         * 以屏幕左上角为原点，记录y坐标
         */
        screenY: PropTypes.number,
        /**
         * 事件对应的时间戳
         */
        timestamp: PropTypes.number
    }),

    /**
     * 当`enableCellClickListenColumns=True`时，监听最近一次单元格右键事件对应的字段`dataIndex`
     */
    recentlyContextMenuClickColumn: PropTypes.string,

    /**
     * 当`enableCellClickListenColumns=True`时，监听最近一次单元格右键事件对应的行记录信息
     */
    recentlyContextMenuClickRecord: PropTypes.object,

    /**
     * 当`enableCellClickListenColumns=True`时，监听表格单元格右键事件累计发生次数
     * 默认值：`0`
     */
    nContextMenuClicksCell: PropTypes.number,

    /**
     * 当`enableCellClickListenColumns=True`时，监听最近一次表格单元格右键事件详细参数
     */
    cellContextMenuClickEvent: PropTypes.exact({
        /**
         * 以页面整体左上角为原点，记录x坐标
         */
        pageX: PropTypes.number,
        /**
         * 以页面整体左上角为原点，记录y坐标
         */
        pageY: PropTypes.number,
        /**
         * 以浏览器窗口左上角为原点，记录x坐标
         */
        clientX: PropTypes.number,
        /**
         * 以浏览器窗口左上角为原点，记录y坐标
         */
        clientY: PropTypes.number,
        /**
         * 以屏幕左上角为原点，记录x坐标
         */
        screenX: PropTypes.number,
        /**
         * 以屏幕左上角为原点，记录y坐标
         */
        screenY: PropTypes.number,
        /**
         * 事件对应的时间戳
         */
        timestamp: PropTypes.number
    }),

    /**
     * 组件型，自定义空数据状态下，表格内的显示内容
     */
    emptyContent: PropTypes.node,

    /**
     * 是否严格启用单元格内容渲染优化，开启后，会基于单元格数据对单元格内容进行渲染优化，减少渲染次数
     * 默认值：`false`
     */
    cellUpdateOptimize: PropTypes.bool,

    /**
     * 针对再渲染模式中的各迷你图模式，统一设置相关单元格像素高度
     * 默认值：`30`
     */
    miniChartHeight: PropTypes.number,

    /**
     * 针对再渲染模式中的各迷你图模式，是否启用出场动画
     * 默认值：`false`
     */
    miniChartAnimation: PropTypes.bool,

    /**
     * 针对再渲染模式中的`'button'`模式，监听最近一次按钮点击对应的行记录信息
     */
    recentlyButtonClickedRow: PropTypes.object,

    /**
     * 针对再渲染模式中的`'button'`模式，监听表格中按钮点击累计次数
     * 默认值：`0`
     */
    nClicksButton: PropTypes.number,

    /**
     * 针对再渲染模式中的`'button'`模式，监听最近一次按钮点击对应的按钮文字内容
     */
    clickedContent: PropTypes.string,

    /**
     * 针对再渲染模式中的`'button'`模式，监听最近一次按钮点击对应的按钮数据项对应`'custom'`字段内容
     */
    clickedCustom: PropTypes.any,

    /**
     * 针对再渲染模式中的`'button'`模式，监听最近一次按钮点击对应的字段`dataIndex`
     */
    recentlyButtonClickedDataIndex: PropTypes.string,

    /**
     * 针对再渲染模式中的`'custom-format'`模式，键为对应字段`dataIndex`信息，值为对应的预处理`javascript`函数字符串
     */
    customFormatFuncs: PropTypes.objectOf(
        PropTypes.string
    ),

    /**
     * 针对再渲染模式中的`'checkbox'`模式，监听最近发生勾选事件的记录行
     */
    recentlyCheckedRow: PropTypes.object,

    /**
     * 针对再渲染模式中的`'checkbox'`模式，监听最近发生勾选事件的勾选框标签内容
     */
    recentlyCheckedLabel: PropTypes.string,

    /**
     * 针对再渲染模式中的`'checkbox'`模式，监听最近发生勾选事件的字段`dataIndex`信息
     */
    recentlyCheckedDataIndex: PropTypes.string,

    /**
     * 针对再渲染模式中的`'checkbox'`模式，监听最近发生勾选事件对应的勾选状态
     */
    recentlyCheckedStatus: PropTypes.bool,

    /**
     * 针对再渲染模式中的`'switch'`模式，监听最近发生开关切换事件的记录行
     */
    recentlySwitchRow: PropTypes.object,

    /**
     * 针对再渲染模式中的`'switch'`模式，监听最近发生开关切换事件对应的开关状态
     */
    recentlySwitchDataIndex: PropTypes.string,

    /**
     * 针对再渲染模式中的`'switch'`模式，监听最近发生开关切换事件对应的开关状态
     */
    recentlySwitchStatus: PropTypes.bool,

    /**
     * 针对再渲染模式中的`'dropdown'`模式，监听表格中各下拉菜单项累计点击次数
     */
    nClicksDropdownItem: PropTypes.number,

    /**
     * 针对再渲染模式中的`'dropdown'`模式，监听最近一次被点击的下拉菜单项`title`值
     */
    recentlyClickedDropdownItemTitle: PropTypes.string,

    /**
     * 针对再渲染模式中的`'dropdown'`模式，监听最近一次被点击的下拉菜单项对应的字段dataIndex
     */
    recentlyDropdownItemClickedDataIndex: PropTypes.string,

    /**
     * 针对再渲染模式中的`'dropdown'`模式，监听最近一次被点击的下拉菜单项对应的行记录
     */
    recentlyDropdownItemClickedRow: PropTypes.object,

    /**
     * 针对再渲染模式中的`'select'`模式，监听最近发生下拉选项值更新的记录行
     */
    recentlySelectRow: PropTypes.object,

    /**
     * 针对再渲染模式中的`'select'`模式，监听最近发生下拉选项值更新对应的字段`dataIndex`
     */
    recentlySelectDataIndex: PropTypes.string,

    /**
     * 针对再渲染模式中的`'select'`模式，监听最近发生下拉选项值更新对应的选项值
     */
    recentlySelectValue: PropTypes.oneOfType([
        PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]),
        PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string
            ])
        )
    ]),

    /**
     * 需要进行隐藏的行记录`key`值数组
     * 默认值：`[]`
     */
    hiddenRowKeys: PropTypes.arrayOf(PropTypes.string),

    /**
     * 是否在表格底层进行重绘时，通过深度比较数据源`data`变化情况，来进行表格重绘优化，适用于中小数据量表格
     * 默认值：`false`
     */
    dataDeepCompare: PropTypes.bool,

    /**
     * 是否开启虚拟滚动模式
     * 默认值：`false`
     */
    virtual: PropTypes.bool,

    /**
     * 组件型，表格整体标题内容
     */
    title: PropTypes.node,

    /**
     * 组件型，表格整体页脚内容
     */
    footer: PropTypes.node,

    /**
     * 是否启用表格自带加载中状态
     * 默认值：`false`
     */
    loading: PropTypes.bool,

    /**
     * 表格行css类名，支持通过`func`字段定义`javascript`函数动态计算
     */
    rowClassName: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            /**
             * 字符串形式的`javascript`函数
             */
            func: PropTypes.string
        })
    ]),

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
    setProps: PropTypes.func
};

export default AntdTable;

export const propTypes = AntdTable.propTypes;
export const defaultProps = AntdTable.defaultProps;