import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdTable = React.lazy(() => import(/* webpackChunkName: "antd_table" */ '../../fragments/AntdTable.react'));

const AntdTable = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdTable {...props} />
        </Suspense>
    );
}


// 定义参数或属性
AntdTable.propTypes = {
    // 组件id
    id: PropTypes.string,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 辅助刷新用唯一标识key值
    key: PropTypes.string,

    // 设置语言环境，可选的有'zh-cn'、'en-us'
    locale: PropTypes.oneOf(['zh-cn', 'en-us']),

    // 当表格悬浮层出现滚轮滑动不跟随情况时，用于传入需要绑定的参照容器id信息辅助定位
    containerId: PropTypes.string,

    // 定义字段名称及相关属性
    columns: PropTypes.arrayOf(
        PropTypes.exact({
            // 字段对应表头显示的文字内容
            title: PropTypes.oneOfType([
                PropTypes.func,
                PropTypes.node
            ]).isRequired,

            // 字段id信息
            dataIndex: PropTypes.string.isRequired,

            // 为当前字段设置所属字段组
            group: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.arrayOf(PropTypes.string)
            ]),

            // 预处理方式
            renderOptions: PropTypes.exact({

                // 设置渲染处理类型，可选项有'link'、'ellipsis'、'mini-line'、'mini-bar'、'mini-progress'、'mini-area'、'tags'、'button'
                // 'copyable'、'status-badge'、'image'、'custom-format'、'ellipsis-copyable'、'corner-mark'、'checkbox'、'switch'
                // 'row-merge'、'dropdown'、'dropdown-links'、'image-avatar'
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

                // 当renderType='link'时，此参数会将传入的字符串作为渲染link的显示文字内容
                renderLinkText: PropTypes.string,

                // 当renderType='button'时，此参数用于传入与气泡确认卡片相关的参数设置内容
                renderButtonPopConfirmProps: PropTypes.exact({
                    // 设置气泡卡片的标题内容
                    title: PropTypes.string,

                    // 设置气泡卡片的okText内容
                    okText: PropTypes.string,

                    // 设置气泡卡片的cancelText内容
                    cancelText: PropTypes.string
                }),

                // 当renderType='mini-line'、'mini-area'或'mini-bar'时
                // 用于设置渲染tooltip所使用到的自定义格式化函数字符串
                tooltipCustomContent: PropTypes.string,

                // 若当前字段再渲染模式为mini-progress或mini-ring-progress时生效
                // 用于设置进度为1时的填充色，默认为#52c41a
                progressOneHundredPercentColor: PropTypes.string,

                // 若当前字段再渲染模式为mini-ring-progress时生效
                // 用于设置百分比文字字体像素大小
                ringProgressFontSize: PropTypes.number,

                // 针对dropdown、dropdown-links模式，设置当前字段内dropdown相关参数
                dropdownProps: PropTypes.exact({
                    // 设置下拉菜单锚点文字标题内容
                    title: PropTypes.string,

                    // 设置下拉框是否显示连接箭头，默认为false
                    arrow: PropTypes.bool,

                    // 是否禁用功能，优先级低于每条记录值内部的设定
                    disabled: PropTypes.bool,

                    // 设置下拉菜单容器的类名
                    overlayClassName: PropTypes.string,

                    // 设置下拉菜单容器的样式
                    overlayStyle: PropTypes.object,

                    // 设置菜单弹出的方位，可选的有'bottomLeft'、'bottomCenter'、'bottomRight'、
                    // 'topLeft'、'topCenter'与'topRight'
                    placement: PropTypes.oneOf([
                        'bottomLeft', 'bottomCenter', 'bottomRight',
                        'topLeft', 'topCenter', 'topRight'
                    ])
                })
            }),

            // 列固定对齐方式，可选项有'left'、'right'
            fixed: PropTypes.oneOf(['left', 'right']),

            // 设置是否可编辑，默认为false
            editable: PropTypes.bool,

            // 配置编辑输入框相关参数
            editOptions: PropTypes.exact({
                // 设置编辑框模式，默认为'default'，其他可选项有'text-area'
                mode: PropTypes.oneOf(['default', 'text-area']),
                // 当mode='textarea'时，用于配置自适应高度相关功能，默认为false
                autoSize: PropTypes.oneOfType([
                    PropTypes.bool,
                    PropTypes.exact({
                        minRows: PropTypes.number,
                        maxRows: PropTypes.number
                    })
                ]),
                // 可选，限制当前字段下编辑模式输入框的最大输入字符数，默认无限制
                maxLength: PropTypes.number,
                // 可选，用于在输入框中无内容时设置占位提示内容
                placeholder: PropTypes.string
            }),

            // 设置列对齐方式，可选项有'left'、'center'、'right'
            align: PropTypes.oneOf(['left', 'center', 'right']),

            // 自定义列宽度
            width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

            // 控制是否隐藏当前字段，设置为true时进行隐藏，默认为false
            hidden: PropTypes.bool,

            /**
             * 若当前字段通过defaultFilteredValues设置了初始化默认选中筛选值，
             * 用于设置是否在用户点击重置按钮后恢复默认选中筛选项
             * 默认：false
             */
            filterResetToDefaultFilteredValue: PropTypes.bool,

            // 防止状态更新报错占位用，无实际意义
            ellipsis: PropTypes.any,

            // 防止状态更新报错占位用，无实际意义
            sorter: PropTypes.any,

            // 防止状态更新报错占位用，无实际意义
            render: PropTypes.any,

            // 确保onCell属性类型检查通过，无实际意义
            onCell: PropTypes.any,

            // 备份title信息，无实际意义
            title_: PropTypes.any
        })
    ),

    // 定义与columns匹配的行记录数组
    data: PropTypes.arrayOf(
        PropTypes.objectOf(
            PropTypes.oneOfType([
                // 针对向下嵌套children的兼容处理
                PropTypes.arrayOf(PropTypes.any),

                // 支持自由组件模式
                PropTypes.node,

                // 常规模式、ellipsis模式、copyable模式、custom-format模式、ellipsis-copyable模式
                PropTypes.string,

                // 常规模式、ellipsis模式、mini-prorgess模式、mini-ring-progress模式、copyable模式、custom-format模式
                // 其中mini-prorgess模式、mini-ring-progress模式输入值需在0~1之间
                PropTypes.number,

                // link模式
                PropTypes.exact({
                    // 自定义链接显示的文字内容，优先级高于renderLinkText参数
                    content: PropTypes.string,
                    // href链接
                    href: PropTypes.string,
                    // target行为属性，默认为'_blank'
                    target: PropTypes.string,
                    // 设置是否禁用当前链接，默认为false
                    disabled: PropTypes.bool
                }),

                // mini-line模式、mini-bar模式、mini-area模式
                PropTypes.arrayOf(PropTypes.number),

                // tags模式
                PropTypes.oneOfType([
                    // 单标签
                    PropTypes.exact({
                        // 标签颜色
                        color: PropTypes.string,
                        // 标签内容
                        tag: PropTypes.oneOfType([
                            PropTypes.string,
                            PropTypes.number
                        ])
                    }),
                    // 多标签
                    PropTypes.arrayOf(
                        PropTypes.exact({
                            // 标签颜色
                            color: PropTypes.string,
                            // 标签内容
                            tag: PropTypes.oneOfType([
                                PropTypes.string,
                                PropTypes.number
                            ])
                        })
                    )
                ]),

                // button模式
                PropTypes.oneOfType([
                    // 单按钮
                    PropTypes.exact({
                        // 设置是否禁用按钮，默认为false
                        disabled: PropTypes.bool,
                        // 设置按钮的type属性，同AntdButton
                        type: PropTypes.oneOf(['primary', 'ghost', 'dashed', 'link', 'text', 'default']),
                        // 设置按钮的danger属性，同AntdButton
                        danger: PropTypes.bool,
                        // 设置按钮的css样式
                        style: PropTypes.object,
                        // 设置按钮的文本内容
                        content: PropTypes.string,
                        // link类型对应的href
                        href: PropTypes.string,
                        // link类型对应的target
                        target: PropTypes.string,
                        // 为当前按钮设置前缀图标，同AntdIcon中的同名参数
                        icon: PropTypes.string,
                        // 针对icon参数值设置渲染方式，默认为'AntdIcon'即icon等价于AntdIcon的icon参数
                        // 当设置为'fontawesome'时，icon参数对应fontawesome图标的css类名
                        iconRenderer: PropTypes.oneOf(['AntdIcon', 'fontawesome']),
                        // 用于存放任意结构的自定义辅助信息
                        custom: PropTypes.any
                    }),

                    // 多按钮
                    PropTypes.arrayOf(
                        PropTypes.exact({
                            // 设置是否禁用按钮，默认为false
                            disabled: PropTypes.bool,
                            // 设置按钮的type属性，同AntdButton
                            type: PropTypes.oneOf(['primary', 'ghost', 'dashed', 'link', 'text', 'default']),
                            // 设置按钮的danger属性，同AntdButton
                            danger: PropTypes.bool,
                            // 设置按钮的css样式
                            style: PropTypes.object,
                            // 设置按钮的文本内容
                            content: PropTypes.string,
                            // link类型对应的href
                            href: PropTypes.string,
                            // link类型对应的target
                            target: PropTypes.string,
                            // 为当前按钮设置前缀图标，同AntdIcon中的同名参数
                            icon: PropTypes.string,
                            // 针对icon参数值设置渲染方式，默认为'AntdIcon'即icon等价于AntdIcon的icon参数
                            // 当设置为'fontawesome'时，icon参数对应fontawesome图标的css类名
                            iconRenderer: PropTypes.oneOf(['AntdIcon', 'fontawesome']),
                            // 用于存放任意结构的自定义辅助信息
                            custom: PropTypes.any
                        })
                    )
                ]),

                // status-badge模式
                PropTypes.exact({
                    // 设置状态徽标的状态
                    status: PropTypes.oneOf(['success', 'processing', 'default', 'error', 'warning']),
                    // 设置状态徽标的后缀文字内容
                    text: PropTypes.oneOfType([
                        PropTypes.string,
                        PropTypes.number
                    ])
                }),

                // image模式
                PropTypes.exact({
                    // 设置图片的src属性
                    src: PropTypes.string,

                    // 设置图片的高度
                    height: PropTypes.oneOfType([
                        PropTypes.string,
                        PropTypes.number
                    ]),

                    // 设置是否允许预览，默认为true
                    preview: PropTypes.bool
                }),

                // corner-mark模式
                PropTypes.exact({
                    // 设置角标的方位，可选的有'top-left'、'top-right'、'bottom-left'、'bottom-right'
                    placement: PropTypes.oneOf(['top-left', 'top-right', 'bottom-left', 'bottom-right']),
                    // 设置角标的颜色，默认为'#1890ff'
                    color: PropTypes.string,
                    // 设置单元格数值内容
                    content: PropTypes.oneOfType([
                        PropTypes.number,
                        PropTypes.string
                    ]),
                    // 设置角标x方向像素偏移量
                    offsetX: PropTypes.number,
                    // 设置角标y方向像素偏移量
                    offsetY: PropTypes.number,
                    // 设置是否隐藏当前角标，默认为false
                    hide: PropTypes.bool
                }),

                // checkbox模式
                PropTypes.exact({
                    // 设置初始化勾选状态，必填
                    checked: PropTypes.bool,
                    // 设置是否禁用当前checkbox
                    disabled: PropTypes.bool,
                    // 设置勾选框文本标签信息
                    label: PropTypes.string,
                    // 用于存放任意结构的自定义辅助信息
                    custom: PropTypes.any
                }),

                // switch模式
                PropTypes.exact({
                    // 设置初始化开关状态，必填
                    checked: PropTypes.bool,
                    // 设置是否禁用当前开关
                    disabled: PropTypes.bool,
                    // 设置“开”状态下标签信息
                    checkedChildren: PropTypes.string,
                    // 设置“关”状态下标签信息
                    unCheckedChildren: PropTypes.string,
                    // 用于存放任意结构的自定义辅助信息
                    custom: PropTypes.any
                }),

                // row-merge模式
                PropTypes.exact({
                    // 设置单元格数值内容
                    content: PropTypes.oneOfType([
                        PropTypes.number,
                        PropTypes.string
                    ]),
                    // 设置从当前单元格开始向后合并的单元格数量，0则代表不向后合并
                    rowSpan: PropTypes.number
                }),

                // dropdown模式
                PropTypes.arrayOf(
                    PropTypes.exact({
                        // 设置当前链接显示的文字内容
                        title: PropTypes.string,
                        // 设置是否禁用当前链接
                        disabled: PropTypes.bool,
                        // 设置当前链接的前缀图标，同AntdIcon的icon参数
                        icon: PropTypes.string,
                        // 针对icon参数值设置渲染方式，默认为'AntdIcon'即icon等价于AntdIcon的icon参数
                        // 当设置为'fontawesome'时，icon参数对应fontawesome图标的css类名
                        iconRenderer: PropTypes.oneOf(['AntdIcon', 'fontawesome']),
                        // 设置当前节点是否充当分割线
                        isDivider: PropTypes.bool,
                        // 用于存放任意结构的自定义辅助信息
                        custom: PropTypes.any
                    })
                ),

                // dropdown-links模式
                PropTypes.arrayOf(
                    PropTypes.exact({
                        // 设置当前链接显示的文字内容
                        title: PropTypes.string,
                        // 设置当前链接url
                        href: PropTypes.string,
                        // 设置是否禁用当前链接
                        disabled: PropTypes.bool,
                        // 设置当前链接的前缀图标，同AntdIcon的icon参数
                        icon: PropTypes.string,
                        // 针对icon参数值设置渲染方式，默认为'AntdIcon'即icon等价于AntdIcon的icon参数
                        // 当设置为'fontawesome'时，icon参数对应fontawesome图标的css类名
                        iconRenderer: PropTypes.oneOf(['AntdIcon', 'fontawesome']),
                        // 设置当前节点是否充当分割线
                        isDivider: PropTypes.bool
                    })
                ),

                // image-avatar模式
                PropTypes.exact({
                    // 设置当前图片类型的头像资源地址
                    src: PropTypes.string,
                    // 设置头像尺寸大小，默认为'default'
                    size: PropTypes.oneOfType([
                        // 头像像素边长
                        PropTypes.number,
                        // 固定的规格，可选的有'large'、'small'及'default'
                        PropTypes.oneOf(['large', 'small', 'default']),
                        // 响应式size
                        PropTypes.exact({
                            xs: PropTypes.number,
                            sm: PropTypes.number,
                            md: PropTypes.number,
                            lg: PropTypes.number,
                            xl: PropTypes.number,
                            xxl: PropTypes.number
                        })
                    ]),
                    // 设置头像的形状，可选的有'circle'、'square'，默认为'circle'
                    shape: PropTypes.oneOf(['circle', 'square'])
                }),

                // select模式
                PropTypes.exact({
                    // 设置下拉选择的css类
                    className: PropTypes.string,
                    // 设置下拉选择的css样式，其中宽度默认为'100%'
                    style: PropTypes.object,
                    // 设置下拉选择选项内容
                    options: PropTypes.arrayOf(
                        PropTypes.exact({
                            // 设置选项内容
                            label: PropTypes.string,
                            // 设置选项内容的值
                            value: PropTypes.oneOfType([
                                PropTypes.string,
                                PropTypes.number
                            ])
                        })
                    ),
                    // 设置下拉选择菜单像素高度，默认为256
                    listHeight: PropTypes.number,
                    // 设置选择模式（multiple：多选，tags：自由新增模式。默认为单选）
                    mode: PropTypes.oneOf(['multiple', 'tags']),
                    // 设置是否禁用当前下拉选择
                    disabled: PropTypes.bool,
                    // 设置下拉选择尺寸规格，可选的有'small'、'middle'及'large'
                    // 默认为'middle'
                    size: PropTypes.oneOf([
                        'small',
                        'middle',
                        'large'
                    ]),
                    // 设置当前下拉选择组件是否渲染边框，默认为true
                    bordered: PropTypes.bool,
                    // 选择框默认文本
                    placeholder: PropTypes.string,
                    // 用于设置悬浮展开层的方位，可选的有'bottomLeft'、'bottomRight'、'topLeft'、'topRight'
                    // 默认为'bottomLeft'
                    placement: PropTypes.oneOf(['bottomLeft', 'bottomRight', 'topLeft', 'topRight']),
                    // 对应已被选中的选项值或选项值数组
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
                    // 设置最大显示的已选择选项，默认为5，超出部分会自动省略
                    maxTagCount: PropTypes.oneOfType([
                        PropTypes.number,
                        PropTypes.oneOf(['responsive'])
                    ]),
                    // 设置输入框下输入内容进行搜索的字段，可选的有'value'、'label'，默认为'value'
                    optionFilterProp: PropTypes.oneOf(['value', 'label']),
                    // 设置是否渲染内容清空按钮，默认为true
                    allowClear: PropTypes.bool
                })
            ])
        )
    ),

    // 设置是否为单元格添加边框线，默认为False
    bordered: PropTypes.bool,

    // 设置组件最大高度，每页超出部分将自动转换为竖向滑动浏览方式
    maxHeight: PropTypes.number,

    // 设置组件最大宽度，每页超出部分将自动转换为横向滑动浏览方式
    maxWidth: PropTypes.number,

    // 设置表格单元格尺寸规格，可选的有'small'、'default'和'large'
    size: PropTypes.oneOf(['small', 'default', 'large']),

    // 进阶通用参数
    // 行选择相关参数
    // 设置行选择模式，默认不开启，可选的有'checkbox'、'radio'
    rowSelectionType: PropTypes.oneOf(['checkbox', 'radio']),

    // 监听已被选择的行key值数组
    selectedRowKeys: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
    ),

    // 设置行选择框对应的列宽度，默认为32
    rowSelectionWidth: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),

    // 记录已被选择的行记录值列表
    selectedRows: PropTypes.array,

    // 设置是否当data更新时，根据当前有效的selectedRowKeys参数对selectedRows进行同步更新
    // 默认为false
    selectedRowsSyncWithData: PropTypes.bool,

    // 设置粘性表头属性，默认为false
    sticky: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.exact({
            offsetHeader: PropTypes.number
        })
    ]),

    // 设置是否启用行悬浮事件监听（此功能可能会干扰其他正常表格功能，慎用），默认为false
    enableHoverListen: PropTypes.bool,

    // 记录表头各字段事件
    // 记录表头各字段鼠标移入事件
    recentlyMouseEnterColumnDataIndex: PropTypes.string,

    // 记录表格数据行事件
    // 记录最近一次鼠标移入行事件对应行的key
    recentlyMouseEnterRowKey: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),

    // 监听最近一次鼠标移入行事件对应行的记录
    recentlyMouseEnterRow: PropTypes.object,

    // 为每个title设置气泡卡片悬浮说明信息，格式如{字段1: {title: '标题内容', 'content': '说明内容巴拉巴拉巴拉'}}
    titlePopoverInfo: PropTypes.objectOf(
        PropTypes.exact({
            // 气泡卡片标题
            title: PropTypes.string,
            // 气泡卡片内容
            content: PropTypes.string,
            // 气泡卡片弹出方位，可选的有'top'、'left'、'right'、'bottom'、'topLeft'
            // 、'topRight'、'bottomLeft'、'bottomRight'、'leftTop'、'leftBottom'
            // 、'rightTop'、'rightBottom'，默认为'bottom'
            placement: PropTypes.oneOf([
                'top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft',
                'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom'
            ]),
            // 设置悬浮层css样式
            overlayStyle: PropTypes.object
        })
    ),

    // 为每个字段设置基于【正则表达式】的格式约束，用于在“可编辑单元格”中约束新内容的写入
    columnsFormatConstraint: PropTypes.objectOf(
        PropTypes.exact({
            // 设置对应字段的正则表达式规则
            rule: PropTypes.string,

            // 设置自定义错误提示内容，默认为'不符合纯汉字输入要求！'
            content: PropTypes.string
        })
    ),

    // 定义排序参数
    sortOptions: PropTypes.exact({

        // 定义要参与排序的字段对应的dataIndex，多字段组合排序情况下顺序即为优先级，从高往低
        sortDataIndexes: PropTypes.arrayOf(PropTypes.string),

        // 设置是否进行多列组合排序，当设置为'auto'时会开启自动组合排序模式，此时组合排序的字段优先级由用户点击排序的字段顺序所动态决定
        multiple: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.oneOf(['auto'])
        ])
    }),

    // 定义筛选参数
    filterOptions: PropTypes.objectOf(
        PropTypes.exact({
            // 设置筛选模式，可选的有'checkbox'、'keyword'、'tree'
            // 其中'tree'模式需要依赖树形结构参数filterCustomTreeItems
            // 默认为'checkbox'
            filterMode: PropTypes.oneOf(['checkbox', 'keyword', 'tree']),

            // 'checkbox'模式下可用，用于自定义待筛选项
            filterCustomItems: PropTypes.oneOfType([
                PropTypes.arrayOf([
                    PropTypes.string,
                    PropTypes.number
                ]),
                PropTypes.any
            ]),

            // 'tree'模式下可用，用于自定义树型筛选菜单结构
            filterCustomTreeItems: PropTypes.arrayOf(PropTypes.object),

            // 'checkbox'模式下可用，用于设置是否允许多选，默认为true
            filterMultiple: PropTypes.bool,

            // 'checkbox'模式下可用，用于设置是否开启搜索框，默认为false
            filterSearch: PropTypes.bool
        })
    ),

    /**
     * 监听或设置各字段筛选功能初始化时已选中值
     */
    defaultFilteredValues: PropTypes.objectOf(PropTypes.array),

    // 翻页相关参数，设置为false时不展示和进行分页
    pagination: PropTypes.oneOfType([
        PropTypes.exact({
            // 设置分页组件的位置，可选项有'topLeft'、'topCenter'、'topRight'、'bottomLeft'、'bottomCenter'以及'bottomRight'
            position: PropTypes.oneOf([
                'topLeft', 'topCenter', 'topRight',
                'bottomLeft', 'bottomCenter', 'bottomRight'
            ]),

            // 每页显示的记录行数
            pageSize: PropTypes.number,

            // 当前的页码
            current: PropTypes.number,

            // 设置是否展示pageSize切换器，当total大于50时默认为true
            showSizeChanger: PropTypes.bool,

            // 设定每页尺寸切换可选的范围
            pageSizeOptions: PropTypes.arrayOf(PropTypes.number),

            // 设置是否显示原生页面悬浮提示title信息，默认为true
            showTitle: PropTypes.bool,

            // 设置是否渲染快速跳转控件，默认为false
            showQuickJumper: PropTypes.bool,

            // 定义总记录行数显示部分的前缀文字，默认为"共 "
            showTotalPrefix: PropTypes.string,

            // 定义总记录行数显示部分的后缀文字，默认为" 条记录"
            showTotalSuffix: PropTypes.string,

            // 用于设置是否在数据记录只有一页时自动隐藏分页器，默认为false
            hideOnSinglePage: PropTypes.bool,

            // 设置是否开启简洁模式
            simple: PropTypes.bool,

            // 设置是否禁用分页，默认为false
            disabled: PropTypes.bool,

            // 设置分页器尺寸，可选的有'default'和'small'，默认为'default'
            size: PropTypes.oneOf(['default', 'small']),

            // 用于在后端分页时手动设置总数据记录数量
            total: PropTypes.number,

            // 设置是否展示较少的跳页选项
            // 默认：false
            showLessItems: PropTypes.bool
        }),
        PropTypes.bool
    ]),

    // 经过修改操作后，当前状态下最新的dataSource数据
    currentData: PropTypes.array,

    // 经过最近一次修改操作后，被修改的行所对应dataSource中的json字典
    recentlyChangedRow: PropTypes.object,

    // 经过最近一次修改操作后，被修改的行所对应列的dataIndex信息
    recentlyChangedColumn: PropTypes.string,

    // 经过最近一次排序操作后，对应的字段及排序方式信息
    sorter: PropTypes.exact({
        // 对应参与排序的字段数组
        columns: PropTypes.arrayOf(PropTypes.string),

        // 对应参与排序的各个字段的排序方式（ascend：升序，descend：升序）
        orders: PropTypes.arrayOf(PropTypes.oneOf(['ascend', 'descend']))
    }),

    // 经过最近一次筛选操作后，对应的字段及筛选值信息
    filter: PropTypes.object,

    // 设置数据操纵模式，可选的有'client-side'（前端）、'server-side'（后端），默认为'client-side'
    mode: PropTypes.oneOf(['client-side', 'server-side']),

    // 设置总结栏内容数组，请与每个字段保持一一对应
    summaryRowContents: PropTypes.arrayOf(
        PropTypes.exact({
            // 总结栏单元格内容
            content: PropTypes.node,

            // 设置当前值横跨的字段数量，默认为1
            colSpan: PropTypes.number,

            // 设置列对齐方式，可选项有'left'、'center'、'right'
            align: PropTypes.oneOf(['left', 'center', 'right'])
        })
    ),

    // 设置总结栏是否启用fixed功能，默认为false
    summaryRowFixed: PropTypes.bool,

    // 以对应字段的dataIndex为键，传入js函数字符串，用于自定义逻辑改变每个单元格的style样式
    conditionalStyleFuncs: PropTypes.objectOf(
        PropTypes.string
    ),

    // 配置行可展开内容，键名为对应行的key，键值为对应行的展开内容
    expandedRowKeyToContent: PropTypes.arrayOf(
        PropTypes.exact({
            key: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]).isRequired,
            content: PropTypes.node
        })
    ),

    // 设置行展开控件所占的宽度
    expandedRowWidth: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),

    // 设置是否允许直接点击行进行展开，默认为false
    expandRowByClick: PropTypes.bool,

    // 设置初始化时处于展开状态的行key值数组
    defaultExpandedRowKeys: PropTypes.arrayOf(PropTypes.string),

    // 设置启用单元格点击事件监听的字段dataIndex数组，开启后会干扰多种再渲染模式的交互，
    // 以及自定义条件单元格模式，请慎用
    enableCellClickListenColumns: PropTypes.arrayOf(
        PropTypes.string
    ),

    // 记录单元格点击事件
    // 单击事件
    // 记录单元格点击事件对应的字段dataIndex信息
    recentlyCellClickColumn: PropTypes.string,

    // 记录单元格点击事件对应的行记录信息
    recentlyCellClickRecord: PropTypes.object,

    // 记录单元格单击事件发生的总次数
    nClicksCell: PropTypes.number,

    // 双击事件
    // 记录单元格点击事件对应的字段dataIndex信息
    recentlyCellDoubleClickColumn: PropTypes.string,

    // 记录单元格点击事件对应的行记录信息
    recentlyCellDoubleClickRecord: PropTypes.object,

    // 记录单元格单击事件发生的总次数
    nDoubleClicksCell: PropTypes.number,

    // 自定义空数据状态内容
    emptyContent: PropTypes.node,

    // 设置是否开启单元格渲染优化，默认为true
    cellUpdateOptimize: PropTypes.bool,

    // 再渲染模式
    // 迷你图模式相关参数
    // 为迷你图模式单元格设置像素高度，默认为30
    miniChartHeight: PropTypes.number,

    // 设置迷你图模式是否启用出现动画，默认为false
    miniChartAnimation: PropTypes.bool,

    // 按钮模式相关参数
    // button模式下，最近一次点击事件发生的行对应record信息
    recentlyButtonClickedRow: PropTypes.object,

    // 当前生命周期下，button模式对应字段中按钮被点击过的总次数
    nClicksButton: PropTypes.number,

    // 对应最近一次按钮模式下被点击的按钮文字内容
    clickedContent: PropTypes.string,

    // 对应最近一次按钮模式下被点击的按钮数据项对应custom字段内容
    clickedCustom: PropTypes.any,

    // 对应最近一次按钮模式下被点击的按钮对应列dataIndex
    recentlyButtonClickedDataIndex: PropTypes.string,

    // 自定义格式模式
    // 针对custom-format自定义格式化对应的字段，设置针对对应列每个值从原始数值到格式化结果的js函数字符串
    // 键名为对应字段的dataIndex
    customFormatFuncs: PropTypes.objectOf(
        PropTypes.string
    ),

    // 勾选框模式相关参数
    // 用于监听最近发生勾选事件的记录行
    recentlyCheckedRow: PropTypes.object,

    // 用于监听最近发生勾选事件的勾选框标签内容
    recentlyCheckedLabel: PropTypes.string,

    // 用于监听最近发生勾选事件的字段dataIndex信息
    recentlyCheckedDataIndex: PropTypes.string,

    // 用于监听最近发生的勾选行为对应的勾选状态
    recentlyCheckedStatus: PropTypes.bool,

    // 开关模式相关参数
    // 用于监听最近发生开关切换事件的记录行
    recentlySwitchRow: PropTypes.object,

    // 用于监听最近发生开关切换事件的字段dataIndex信息
    recentlySwitchDataIndex: PropTypes.string,

    // 用于监听最近发生的开关切换行为对应的切换后状态
    recentlySwitchStatus: PropTypes.bool,

    // dropdown再渲染模式
    // 用于监听表格中dropdown相关累计点击次数
    nClicksDropdownItem: PropTypes.number,

    // 用于监听最近一次被点击的dropdown选项title值
    recentlyClickedDropdownItemTitle: PropTypes.string,

    // 用于监听最近一次被点击的dropdown对应的字段dataIndex
    recentlyDropdownItemClickedDataIndex: PropTypes.string,

    // 用于监听最近一次被点击的dropdown对应的行记录
    recentlyDropdownItemClickedRow: PropTypes.object,

    // select再渲染模式
    // 用于监听最近发生select选值变更对应的记录行
    recentlySelectRow: PropTypes.object,

    // 用于监听最近发生select选值变更的字段dataIndex信息
    recentlySelectDataIndex: PropTypes.string,

    // 用于监听最近发生select选值变更对应的最新value状态
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

    // 用于设置需要进行隐藏的行对应key值数组，默认为[]
    hiddenRowKeys: PropTypes.arrayOf(PropTypes.string),

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
AntdTable.defaultProps = {
    // 通用参数
    locale: 'zh-cn',
    data: [],
    columns: [],
    size: 'default',
    bordered: false,
    // 进阶通用参数
    sortOptions: {
        sortDataIndexes: []
    },
    filterOptions: {},
    defaultFilteredValues: {},
    mode: 'client-side',
    sticky: false,
    enableHoverListen: false,
    expandRowByClick: false,
    enableCellClickListenColumns: [],
    nClicksCell: 0,
    nDoubleClicksCell: 0,
    cellUpdateOptimize: false,
    summaryRowFixed: false,
    conditionalStyleFuncs: {},
    rowSelectionWidth: 32,
    selectedRowsSyncWithData: false,
    hiddenRowKeys: [],
    // 按钮模式相关
    nClicksButton: 0,
    // 迷你图相关
    miniChartHeight: 30,
    miniChartAnimation: false,
    // dropdown模式相关
    nClicksDropdownItem: 0
};

export default AntdTable;

export const propTypes = AntdTable.propTypes;
export const defaultProps = AntdTable.defaultProps;