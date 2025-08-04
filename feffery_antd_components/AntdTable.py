# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args

ComponentType = typing.Union[
    str,
    int,
    float,
    Component,
    None,
    typing.Sequence[typing.Union[str, int, float, Component, None]],
]

NumberType = typing.Union[
    typing.SupportsFloat, typing.SupportsInt, typing.SupportsComplex
]


class AntdTable(Component):
    """An AntdTable component.
表格组件AntdTable

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- className (string; optional):
    当前组件css类名.

- locale (a value equal to: 'zh-cn', 'en-us', 'de-de', 'ru-ru'; default 'zh-cn'):
    组件文案语种，可选项有`'zh-cn'`（简体中文）、`'en-us'`（英语）、`'de-de'`（德语）、`'ru-ru'`（俄语）
    默认值：`'zh-cn'`.

- containerId (string; optional):
    当表格渲染在具有滚动条的局部容器中时，指定该容器id，可避免出现部分表格内部展开层随滚动条滚动显示异常的问题.

- columns (list of dicts; optional):
    配置字段定义相关参数.

    `columns` is a list of dicts with keys:

    - title (a list of or a singular dash component, string or number; required):
        必填，当前字段标题.

    - dataIndex (string; required):
        必填，当前字段唯一识别id.

    - group (string | list of strings; optional):
        当前字段所属分组信息，用于渲染多级表头.

    - renderOptions (dict; optional):
        配置字段[再渲染模式](/AntdTable-rerender)相关参数.

        `renderOptions` is a dict with keys:

        - renderType (a value equal to: 'link', 'ellipsis', 'copyable', 'ellipsis-copyable', 'tags', 'status-badge', 'image', 'custom-format', 'corner-mark', 'row-merge', 'dropdown', 'dropdown-links', 'image-avatar', 'mini-line', 'mini-bar', 'mini-progress', 'mini-ring-progress', 'mini-area', 'button', 'checkbox', 'switch', 'select'; optional):
            再渲染类型，可选项有`'link'`、`'ellipsis'`、`'copyable'`、`'ellipsis-copyable'`、`'tags'`、`'status-badge'`、`'image'`
            、`'custom-format'`、`'corner-mark'`、`'row-merge'`、`'dropdown'`、`'dropdown-links'`、`'image-avatar'`
            、`'mini-line'`、`'mini-bar'`、`'mini-progress'`、`'mini-ring-progress'`、`'mini-area'`
            、`'button'`、`'checkbox'`、`'switch'`、`'select'`.

        - renderLinkText (string; optional):
            当`renderType='link'`时，统一设置渲染链接文本内容.

        - renderButtonSplit (boolean; optional):
            当`renderType='button'`时，控制多个按钮之间是否添加分割线.

        - renderButtonPopConfirmProps (dict; optional):
            当`renderType='button'`时，配置气泡确认框相关参数.

            `renderButtonPopConfirmProps` is a dict with keys:

            - title (string; optional):
                气泡确认框标题.

            - okText (string; optional):
                气泡确认框确认按钮文案.

            - cancelText (string; optional):
                气泡确认框取消按钮文案.

        - miniChartColor (string; optional):
            当`renderType`为`'mini-line'`、`'mini-area'`、`'mini-bar'`时，设置图表颜色.

        - tooltipCustomContent (string; optional):
            当`renderType`为`'mini-line'`、`'mini-area'`、`'mini-bar'`时，设置用于渲染信息卡片的`javascript`函数字符串.

        - progressOneHundredPercentColor (string; optional):
            当`renderType`为`'mini-progress'`、`'mini-ring-progress'`时，设置进度完成状态下的填充色
            默认值：`'#52c41a'`.

        - ringProgressFontSize (number; optional):
            当`renderType='mini-ring-progress'`时，设置进度数值像素大小.

        - dropdownProps (dict; optional):
            当`renderType`为`'dropdown'`、`'dropdown-links'`时，配置下拉菜单相关参数.

            `dropdownProps` is a dict with keys:

            - title (string; optional):
                下拉菜单锚点标题内容.

            - arrow (boolean; optional):
                下拉菜单是否显示指示箭头  默认值：`False`.

            - disabled (boolean; optional):
                是否整体禁用下拉菜单功能，优先级低于各记录值内部参数.

            - overlayClassName (string; optional):
                下拉菜单容器css类名.

            - overlayStyle (dict; optional):
                下拉菜单容器css样式.

            - placement (a value equal to: 'bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight'; optional):
                下拉菜单展开方向，可选项有`'bottomLeft'`、`'bottomCenter'`、`'bottomRight'`、`'topLeft'`、`'topCenter'`、`'topRight'`.

    - fixed (a value equal to: 'left', 'right' | boolean; optional):
        当前字段冻结方向，可选项有`'left'`、`'right'`，设置为`True`时等价于`'left'`.

    - editable (boolean; optional):
        当前字段是否可编辑  默认值：`False`.

    - editOptions (dict; optional):
        配置可编辑模式下输入框相关参数.

        `editOptions` is a dict with keys:

        - mode (a value equal to: 'default', 'text-area'; optional):
            编辑框模式，可选项有`'default'`、`'text-area'`  默认值：`'default'`.

        - autoSize (dict; optional):
            当`mode='textarea'`时，配置文本框自适应高度相关功能，同`AntdInput`
            默认值：`False`.

            `autoSize` is a boolean

          Or dict with keys:

    - minRows (number; optional)

    - maxRows (number; optional)

        - maxLength (number; optional):
            限制当前字段可编辑模式下，输入框内最多可输入的字符数量，默认无限制.

        - placeholder (string; optional):
            输入框无输入值时的占位提示信息.

        - disabledKeys (list of strings; optional):
            当前字段下需进行输入框禁用的行记录`key`值列表.

    - align (a value equal to: 'left', 'center', 'right'; optional):
        当前字段对齐方式，可选项有`'left'`、`'center'`、`'right'`  默认值：`'center'`.

    - headerAlign (a value equal to: 'left', 'center', 'right'; optional):
        当前表头对齐方式，默认跟随当前字段对齐方式，可选项有`'left'`、`'center'`、`'right'`
        默认值：`'center'`.

    - width (number | string; optional):
        当前字段宽度.

    - minWidth (number | string; optional):
        控制当前字段最小宽度，仅当`tableLayout=\"auto\"`时有效.

    - hidden (boolean; optional):
        是否隐藏当前字段  默认值：`False`.

    - className (string; optional):
        当前字段css类名.

    - defaultSortOrder (a value equal to: 'ascend', 'descend'; optional):
        当前字段初始化时的默认排序状态，可选项有`'ascend'`、`'descend'`.

    - filterResetToDefaultFilteredValue (boolean; optional):
        若当前字段通过参数`defaultFilteredValues`设置了初始化默认选中的筛选值，用于设置是否在用户点击重置按钮后恢复默认选中筛选项
        默认值：`False`.

- showHeader (boolean; default True):
    是否显示表头  默认值：`True`.

- rowHoverable (boolean; default True):
    表格行是否开启鼠标悬停样式效果  默认值：`True`.

- tableLayout (a value equal to: 'auto', 'fixed'; optional):
    当`columns`中各字段未设置`width`时，用于控制整体字段宽度分配方式，可选项有`'auto'`、`'fixed'`.

- data (list of dicts; optional):
    定义表格数据源，与`columns`对应.

    `data` is a list of dicts with strings as keys and values of type
    list of boolean | number | string | dict | lists | a list of or a
    singular dash component, string or number | string | number |
    boolean | dict with keys:

    - content (string; optional):
        适用于`'link'`模式，链接显示的文字内容，优先级高于字段配置信息中的`renderLinkText`参数.

    - href (string; optional):
        适用于`'link'`模式，链接地址.

    - target (string; optional):
        适用于`'link'`模式，链接跳转行为  默认值：`'_blank'`.

    - disabled (boolean; optional):
        适用于`'link'`模式，是否禁用当前链接  默认值：`False`.

      Or list of numbers | dict with keys:

    - color (string; optional):
        适用于`'tags'`模式，标签颜色.

    - tag (string | number; optional):
        适用于`'tags'`模式，标签内容. | list of dicts with keys:

    - color (string; optional):
        适用于`'tags'`模式，当前标签颜色.

    - tag (string | number; optional):
        适用于`'tags'`模式，当前标签内容. | dict with keys:

    - disabled (boolean; optional):
        适用于`'button'`模式，同`AntdButton`中的同名参数.

    - type (a value equal to: 'primary', 'ghost', 'dashed', 'link', 'text', 'default'; optional):
        适用于`'button'`模式，同`AntdButton`中的同名参数.

    - color (a value equal to: 'default', 'primary', 'danger', 'blue', 'purple', 'cyan', 'green', 'magenta', 'pink', 'red', 'orange', 'yellow', 'volcano', 'geekblue', 'lime', 'gold'; optional):
        适用于`'button'`模式，同`AntdButton`中的同名参数.

    - variant (a value equal to: 'outlined', 'dashed', 'solid', 'filled', 'text', 'link'; optional):
        适用于`'button'`模式，同`AntdButton`中的同名参数.

    - danger (boolean; optional):
        适用于`'button'`模式，同`AntdButton`中的同名参数.

    - style (dict; optional):
        适用于`'button'`模式，同`AntdButton`中的同名参数.

    - content (string; optional):
        适用于`'button'`模式，按钮内容.

    - href (string; optional):
        适用于`'button'`模式，同`AntdButton`中的同名参数.

    - target (string; optional):
        适用于`'button'`模式，同`AntdButton`中的同名参数.

    - popConfirmProps (dict; optional):
        适用于`'button'`模式，用于为当前按钮配置气泡确认框相关参数，优先级更高.

        `popConfirmProps` is a dict with keys:

        - title (string; optional):
            气泡确认框标题.

        - okText (string; optional):
            气泡确认框确认按钮文案.

        - cancelText (string; optional):
            气泡确认框取消按钮文案.

    - icon (string; optional):
        适用于`'button'`模式，按钮前缀图标类型，`iconRenderer`为`'AntdIcon'`时同`AntdIcon`同名参数，`iconRenderer`为`'fontawesome'`时为css类名.

    - iconRenderer (a value equal to: 'AntdIcon', 'fontawesome'; optional):
        适用于`'button'`模式，按钮前缀图标渲染方式，可选项有`'AntdIcon'`、`'fontawesome'`.

    - tooltip (dict; optional):
        适用于`'button'`模式，为当前按钮添加额外的文字提示功能.

        `tooltip` is a dict with keys:

        - title (string; optional):
            文字提示内容.

        - placement (a value equal to: 'top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'; optional):
            文字提示弹出方向，可选项有`'top'`、`'left'`、`'right'`、`'bottom'`、`'topLeft'`、`'topRight'`、`'bottomLeft'`、`'bottomRight'`、`'leftTop'`、`'leftBottom'`、`'rightTop'`、`'rightBottom'`
            默认值：`'top'`.

    - custom (boolean | number | string | dict | list; optional):
        适用于`'button'`模式，额外补充信息. | list of dicts with keys:

    - disabled (boolean; optional):
        适用于`'button'`模式，同`AntdButton`中的同名参数.

    - type (a value equal to: 'primary', 'ghost', 'dashed', 'link', 'text', 'default'; optional):
        适用于`'button'`模式，同`AntdButton`中的同名参数.

    - danger (boolean; optional):
        适用于`'button'`模式，同`AntdButton`中的同名参数.

    - style (dict; optional):
        适用于`'button'`模式，同`AntdButton`中的同名参数.

    - content (string; optional):
        适用于`'button'`模式，按钮内容.

    - href (string; optional):
        适用于`'button'`模式，同`AntdButton`中的同名参数.

    - target (string; optional):
        适用于`'button'`模式，同`AntdButton`中的同名参数.

    - icon (string; optional):
        适用于`'button'`模式，当前按钮前缀图标类型，`iconRenderer`为`'AntdIcon'`时同`AntdIcon`同名参数，`iconRenderer`为`'fontawesome'`时为css类名.

    - iconRenderer (a value equal to: 'AntdIcon', 'fontawesome'; optional):
        适用于`'button'`模式，当前按钮前缀图标渲染方式，可选项有`'AntdIcon'`、`'fontawesome'`.

    - custom (boolean | number | string | dict | list; optional):
        适用于`'button'`模式，额外补充信息. | dict with keys:

    - status (a value equal to: 'success', 'processing', 'default', 'error', 'warning'; optional):
        适用于`'status-badge'`模式，状态徽标状态，可选项有`'success'`、`'processing'`、`'default'`、`'error'`、`'warning'`.

    - text (string | number; optional):
        适用于`'status-badge'`模式，状态徽标标签内容. | dict with keys:

    - src (string; optional):
        适用于`'image'`模式，图片资源地址.

    - height (string | number; optional):
        适用于`'image'`模式，图片高度.

    - preview (boolean; optional):
        适用于`'image'`模式，图片是否可交互预览  默认值：`True`. | dict with keys:

    - placement (a value equal to: 'top-left', 'top-right', 'bottom-left', 'bottom-right'; optional):
        适用于`'corner-mark'`模式，角标显示方位，可选项有`'top-left'`、`'top-right'`、`'bottom-left'`、`'bottom-right'`.

    - color (string; optional):
        适用于`'corner-mark'`模式，角标颜色  默认值：`'#1890ff'`.

    - content (number | string; optional):
        适用于`'corner-mark'`模式，单元格数值内容.

    - offsetX (number; optional):
        适用于`'corner-mark'`模式，角标水平方向像素偏移量.

    - offsetY (number; optional):
        适用于`'corner-mark'`模式，角标竖直方向像素偏移量.

    - hide (boolean; optional):
        适用于`'corner-mark'`模式，是否隐藏当前角标  默认值：`False`. | dict with keys:

    - checked (boolean; optional):
        适用于`'checkbox'`模式，当前勾选框状态.

    - disabled (boolean; optional):
        适用于`'checkbox'`模式，是否禁用当前勾选框.

    - label (string; optional):
        适用于`'checkbox'`模式，当前勾选框标签内容.

    - custom (boolean | number | string | dict | list; optional):
        适用于`'checkbox'`模式，额外补充信息. | dict with keys:

    - checked (boolean; optional):
        适用于`'switch'`模式，当前开关状态.

    - disabled (boolean; optional):
        适用于`'switch'`模式，是否禁用当前开关.

    - checkedChildren (string; optional):
        适用于`'switch'`模式，“开”状态标签内容.

    - unCheckedChildren (string; optional):
        适用于`'switch'`模式，“关”状态标签内容.

    - custom (boolean | number | string | dict | list; optional):
        适用于`'switch'`模式，额外补充信息. | dict with keys:

    - content (number | string; optional):
        适用于`'row-merge'`模式，单元格数值内容.

    - rowSpan (number; optional):
        适用于`'row-merge'`模式，从当前单元格开始，向后合并的其他单元格数量. | list of dicts with keys:

    - title (string; optional):
        适用于`'dropdown'`模式，当前下拉菜单项锚点内容.

    - disabled (boolean; optional):
        适用于`'dropdown'`模式，是否禁用当前下拉菜单项.

    - icon (string; optional):
        适用于`'dropdown'`模式，当前按钮前缀图标类型，`iconRenderer`为`'AntdIcon'`时同`AntdIcon`同名参数，`iconRenderer`为`'fontawesome'`时为css类名.

    - iconRenderer (a value equal to: 'AntdIcon', 'fontawesome'; optional):
        适用于`'dropdown'`模式，当前按钮前缀图标渲染方式，可选项有`'AntdIcon'`、`'fontawesome'`.

    - custom (boolean | number | string | dict | list; optional):
        适用于`'dropdown'`模式，额外补充信息.

    - isDivider (boolean; optional):
        适用于`'dropdown'`模式，当前项是否渲染为分割线  默认值：`False`. | list of dicts with keys:

    - title (string; optional):
        适用于`'dropdown-links'`模式，当前下拉菜单项锚点内容.

    - href (string; optional):
        适用于`'dropdown-links'`模式，当前下拉菜单项链接地址.

    - disabled (boolean; optional):
        适用于`'dropdown-links'`模式，是否禁用当前下拉菜单项.

    - icon (string; optional):
        适用于`'dropdown-links'`模式，当前按钮前缀图标类型，`iconRenderer`为`'AntdIcon'`时同`AntdIcon`同名参数，`iconRenderer`为`'fontawesome'`时为css类名.

    - iconRenderer (a value equal to: 'AntdIcon', 'fontawesome'; optional):
        适用于`'dropdown-links'`模式，当前按钮前缀图标渲染方式，可选项有`'AntdIcon'`、`'fontawesome'`.

    - isDivider (boolean; optional):
        适用于`'dropdown-links'`模式，当前项是否渲染为分割线  默认值：`False`. | dict with keys:

    - src (string; optional):
        适用于`'image-avatar'`模式，头像图片资源链接.

    - size (dict; optional):
        适用于`'image-avatar'`模式，头像尺寸规格，传入数值型时表示像素大小，传入字符型时可使用内置尺寸规格，可选项有`'small'`、`'default'`、`'large'`，支持响应式
        默认值：`'default'`.

        `size` is a number | a value equal to: 'large', 'small',
        'default' | dict with keys:

        - xs (number; optional)

        - sm (number; optional)

        - md (number; optional)

        - lg (number; optional)

        - xl (number; optional)

        - xxl (number; optional)

    - shape (a value equal to: 'circle', 'square'; optional):
        适用于`'image-avatar'`模式，头像形状，可选项有`'circle'`、`'square'`
        默认值：`'circle'`. | dict with keys:

    - className (string; optional):
        适用于`'select'`模式，下拉选择css类名.

    - style (dict; optional):
        适用于`'select'`模式，下拉选择css样式，其中`width`默认为`'100%'`.

    - options (list of dicts; optional):
        适用于`'select'`模式，定义下拉选择选项.

        `options` is a list of dicts with keys:

        - label (string; optional):

            当前选项标题.

        - value (string | number; optional):

            当前选项值.

    - listHeight (number; optional):
        适用于`'select'`模式，下拉选择菜单像素高度  默认值：`256`.

    - mode (a value equal to: 'multiple', 'tags'; optional):
        适用于`'select'`模式，选择模式，可选项有`'multiple'`、`'tags'`，默认为单选模式.

    - disabled (boolean; optional):
        适用于`'select'`模式，是否禁用当前下拉选择.

    - size (a value equal to: 'small', 'middle', 'large'; optional):
        适用于`'select'`模式，下拉选择尺寸规格，可选项有`'small'`、`'middle'`、`'large'`
        默认值：`'middle'`.

    - bordered (boolean; optional):
        适用于`'select'`模式，是否渲染边框  默认值：`True`.

    - placeholder (string; optional):
        适用于`'select'`模式，选择框占位内容.

    - placement (a value equal to: 'bottomLeft', 'bottomRight', 'topLeft', 'topRight'; optional):
        适用于`'select'`模式，下拉菜单展开方向，可选项有`'bottomLeft'`、`'bottomRight'`、`'topLeft'`、`'topRight'`
        默认值：`'bottomLeft'`.

    - value (string | number | list of string | numbers; optional):
        适用于`'select'`模式，下拉选择已选中值.

    - maxTagCount (number | a value equal to: 'responsive'; optional):
        适用于`'select'`模式，最多显示的已选中选项数量，超出部分将会自动省略  默认值：`5`.

    - optionFilterProp (a value equal to: 'value', 'label'; optional):
        适用于`'select'`模式，选择框内搜索对应的目标字段，可选项有`'value'`、`'label'`
        默认值：`'value'`.

    - allowClear (boolean; optional):
        适用于`'select'`模式，是否允许快捷清空已选项  默认值：`True`. | dict

- bordered (boolean; default False):
    是否渲染框线  默认值：`False`.

- maxHeight (number | string; optional):
    表格最大像素高度，当实际表格高度超出限制时，会自动渲染竖直滚动条.

- maxWidth (number | string | boolean; optional):
    表格最大宽度，当实际表格宽度超出限制时，会自动渲染水平滚动条.

- scrollToFirstRowOnChange (boolean; default True):
    当分页、排序、筛选操作触发表格变化后，是否滚动到表格顶部  默认值：`True`.

- size (a value equal to: 'small', 'middle', 'large'; default 'middle'):
    表格单元格尺寸规格，可选项有`'small'`、`'middle'`、`'large'`.

- rowSelectionType (a value equal to: 'checkbox', 'radio'; optional):
    行选择模式，可选项有`'checkbox'`（多选）、`'radio'`（单选），默认不开启行选择功能.

- selectedRowKeys (list of string | numbers; optional):
    监听已选行对应`key`值.

- selectedRows (list; optional):
    监听已选行记录.

- rowSelectionWidth (string | number; default 32):
    行选择控件所在列宽度  默认值：`32`.

- rowSelectionCheckStrictly (boolean; optional):
    针对嵌套行，各行与其所嵌套的内部行之间的行选择行为是否互相独立  默认值：`True`.

- rowSelectionIgnoreRowKeys (list of string | numbers; optional):
    指定不可被选中的行对应`key`值.

- selectedRowsSyncWithData (boolean; default False):
    当表格数据源`data`更新时，是否根据当前有效的`selectedRowKeys`参数对`selectedRows`中的数据进行同步更新
    默认值：`False`.

- sticky (dict; default False):
    配置粘性表头相关功能  默认值：`False`.

    `sticky` is a boolean | dict with keys:

    - offsetHeader (number; optional):
        粘性表头竖直方向上的像素偏移量.

    - offsetScroll (number; optional):
        粘性表头底部横向滚动条竖直方向上的像素偏移量.

- enableHoverListen (boolean; default False):
    是否启用行鼠标移入/移出事件监听，开启后可能会影响到部分其他功能，请根据实际情况进行使用  默认值：`False`.

- recentlyMouseEnterColumnDataIndex (string; optional):
    当`enableHoverListen=True`时，监听最近一次鼠标移入的字段对应`dataIndex`信息.

- recentlyMouseEnterRowKey (string | number; optional):
    当`enableHoverListen=True`时，监听最近一次鼠标移入的行对应`key`信息.

- recentlyMouseEnterRow (dict; optional):
    当`enableHoverListen=True`时，监听最近一次鼠标移入的行数据信息.

- titlePopoverInfo (dict; optional):
    配置各字段标题额外气泡说明卡片信息相关参数.

    `titlePopoverInfo` is a dict with strings as keys and values of
    type dict with keys:

    - title (string; optional):
        气泡卡片标题.

    - content (string; optional):
        气泡卡片内容.

    - placement (a value equal to: 'top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom'; optional):
        气泡卡片弹出方位，可选项有`'top'`、`'left'`、`'right'`、`'bottom'`、`'topLeft'`、`'topRight'`、`'bottomLeft'`、`'bottomRight'`、`'leftTop'`、`'leftBottom'`、`'rightTop'`、`'rightBottom'`
        默认值：`'bottom'`.

    - overlayStyle (dict; optional):
        气泡卡片展开层css样式.

- columnsFormatConstraint (dict; optional):
    针对开启了可编辑模式的字段，配置基于正则表达式的输入内容格式校验约束规则.

    `columnsFormatConstraint` is a dict with strings as keys and
    values of type dict with keys:

    - rule (string; optional):
        正则表达式，用于校验输入内容是否符合格式要求.

    - content (string; optional):
        用户输入内容校验失败时的提示说明信息.

- sortOptions (dict; optional):
    配置表格字段排序相关功能.

    `sortOptions` is a dict with keys:

    - sortDataIndexes (list of strings; optional):
        参与排序的若干字段`dataIndex`数组，多字段组合排序时，数组顺序即为组合排序优先级顺序，由高到低.

    - multiple (boolean | a value equal to: 'auto'; optional):
        是否启用多字段组合排序，当设置为`'auto'`时表示自动组合排序，此时组合排序的字段优先级顺序与用户依次点击排序字段的顺序对应
        默认值：`False``.

    - forceCompareModes (dict with strings as keys and values of type a value equal to: 'number', 'custom'; optional):
        为各字段指定排序比较模式，可选项有`'number'`（强制数值型排序）、`'custom'`（自定义排序）.

    - customOrders (dict with strings as keys and values of type list; optional):
        当`forceCompareModes`为`'custom'`时，用于为相应字段设置自定义排序对应的元素顺序.

- showSorterTooltip (boolean; default True):
    针对可排序字段是否在鼠标移入表头后展示额外信息提示  默认值：`True`.

- showSorterTooltipTarget (a value equal to: 'full-header', 'sorter-icon'; default 'full-header'):
    控制可排序字段表头额外信息提示的鼠标移入触发目标，可选项有`'full-header'`、`'sorter-icon'`
    默认值：`'full-header'`.

- filterOptions (dict; optional):
    配置表格字段筛选相关功能.

    `filterOptions` is a dict with strings as keys and values of type
    dict with keys:

    - filterMode (a value equal to: 'checkbox', 'keyword', 'tree'; optional):
        筛选模式，可选项有`'checkbox'`、`'keyword'`、`'tree'`，其中`'tree'`模式需要依赖相应的`'filterCustomTreeItems'`参数进行自定义树形菜单结构的构造
        默认值：`'checkbox'`.

    - filterCustomItems (list | boolean | number | string | dict | list; optional):
        `filterMode`为`'checkbox'`时，用于自定义筛选菜单项.

    - filterCustomTreeItems (list of dicts; optional):
        `filterMode`为`'tree'`时，用于构造自定义树形菜单结构.

    - filterMultiple (boolean; optional):
        `filterMode`为`'checkbox'`时，是否开启多选模式  默认值：`True`.

    - filterSearch (boolean; optional):
        `filterMode`为`'checkbox'`时，是否开启搜索框  默认值：`False`.

- defaultFilteredValues (dict with strings as keys and values of type list; optional):
    字段筛选相关字段默认选中的筛选值.

- pagination (dict; optional):
    配置表格翻页相关功能，设置为`False`时将关闭分页相关功能.

    `pagination` is a dict with keys:

    - position (a value equal to: 'topLeft', 'topCenter', 'topRight', 'bottomLeft', 'bottomCenter', 'bottomRight'; optional):
        分页组件渲染方位，可选项有`'topLeft'`、`'topCenter'`、`'topRight'`、`'bottomLeft'`、`'bottomCenter'`、`'bottomRight'`
        默认值：`'bottomRight'`.

    - pageSize (number; optional):
        监听或设置每页允许显示的最大行记录数量.

    - current (number; optional):
        监听或设置当前页码.

    - showSizeChanger (boolean; optional):
        是否显示`pageSize`切换控件，当表格总记录数量大于50时默认为`True`.

    - pageSizeOptions (list of numbers; optional):
        `pageSize`切换控件的可选项.

    - showTitle (boolean; optional):
        各页码在鼠标移入时，是否显示浏览器原生提示信息  默认值：`True`.

    - showQuickJumper (boolean; optional):
        是否渲染快捷跳页控件  默认值：`False`.

    - showTotalPrefix (string; optional):
        总记录描述文案前缀文字.

    - showTotalSuffix (string; optional):
        总记录描述文案后缀文字.

    - hideOnSinglePage (boolean; optional):
        是否在数据行数量不足一页时，自动隐藏分页相关控件  默认值：`False`.

    - simple (boolean; optional):
        是否开启简洁模式  默认值：`False`.

    - disabled (boolean; optional):
        是否禁用分页相关控件  默认值：`False`.

    - size (a value equal to: 'default', 'small'; optional):
        分页控件尺寸规格，可选项有`'small'`、`'default'`  默认值：`'default'`.

    - total (number; optional):
        手动设置总记录数量，通常配合[服务端数据加载模式](/AntdTable-server-side-mode)使用.

    - showLessItems (boolean; optional):
        是否优先展示较少的跳页项  默认值：`False`. | boolean

- currentData (list; optional):
    监听经过编辑修改操作后，最新状态下的表格数据源.

- recentlyChangedRow (dict; optional):
    监听最近一次编辑修改操作，对应的被修改行记录数据.

- recentlyChangedColumn (string; optional):
    监听最近一次编辑修改操作，对应的被修改字段`dataIndex`信息.

- sorter (dict; optional):
    监听排序操作相关行为参数.

    `sorter` is a dict with keys:

    - columns (list of strings; optional):
        监听排序涉及的字段`dataIndex`信息.

    - orders (list of a value equal to: 'ascend', 'descend's; optional):
        监听排序涉及的字段对应排序方式，其中`'ascend'`表示升序，`'descend'`表示降序.

- filter (dict; optional):
    监听筛选操作相关行为参数.

- mode (a value equal to: 'client-side', 'server-side'; default 'client-side'):
    表格数据加载控制方式，可选项有`'client-side'`（客户端加载）、`'server-side'`（服务端），其中服务端模式适用于大量数据展示需求，具体请参考[服务端数据加载模式](/AntdTable-server-side-mode)
    默认值：`'client-side'`.

- summaryRowContents (list of dicts; optional):
    配置总结栏内容，按数组顺序渲染.

    `summaryRowContents` is a list of dicts with keys:

    - content (a list of or a singular dash component, string or number; optional):
        组件型，当前总结栏单元格内容.

    - colSpan (number; optional):
        当前总结栏单元格横跨占据的字段数量  默认值：`1`.

    - align (a value equal to: 'left', 'center', 'right'; optional):
        当前总结栏列对齐方式，可选项有`'left'`、`'center'`、`'right'`.

- summaryRowBlankColumns (number; default 0):
    总结栏每行用于占位的列数，适用于同时使用行选择等功能的场景  默认值：`0`.

- summaryRowFixed (boolean | a value equal to: 'top', 'bottom'; default False):
    总结栏是否启用固定布局功能，也可设置为`'top'`、`'bottom'`控制总结栏固定在顶部或底部  默认值：`False`.

- conditionalStyleFuncs (dict with strings as keys and values of type string; optional):
    配置各字段条件格式化渲染对应的`javascript`函数字符串.

- expandedRowKeyToContent (list of dicts; optional):
    配置各数据行的行展开内容，键为数据行`key`值，值为对应行的展开内容.

    `expandedRowKeyToContent` is a list of dicts with keys:

    - key (string | number; required)

    - content (a list of or a singular dash component, string or number; optional)

- expandedRowWidth (string | number; optional):
    行展开控件所在列宽度.

- expandRowByClick (boolean; default False):
    是否允许通过直接点击行的方式展开对应行  默认值：`False`.

- defaultExpandedRowKeys (list of strings; optional):
    初始化处于展开状态的行对应`key`值.

- expandedRowKeys (list of strings; optional):
    监听或设置处于展开状态的行对应`key`值.

- enableCellClickListenColumns (list of strings; optional):
    是否启用单元格单击、双击、右键相关事件的监听，开启后可能会影响到部分其他功能，请根据实际情况进行使用  默认值：`False`.

- recentlyCellClickColumn (string; optional):
    当`enableCellClickListenColumns=True`时，监听最近一次单元格单击事件对应的字段`dataIndex`.

- recentlyCellClickRecord (dict; optional):
    当`enableCellClickListenColumns=True`时，监听最近一次单元格单击事件对应的行记录信息.

- nClicksCell (number; default 0):
    当`enableCellClickListenColumns=True`时，监听表格单元格单击事件累计发生次数  默认值：`0`.

- cellClickEvent (dict; optional):
    当`enableCellClickListenColumns=True`时，监听最近一次表格单元格单击事件详细参数.

    `cellClickEvent` is a dict with keys:

    - pageX (number; optional):
        以页面整体左上角为原点，记录x坐标.

    - pageY (number; optional):
        以页面整体左上角为原点，记录y坐标.

    - clientX (number; optional):
        以浏览器窗口左上角为原点，记录x坐标.

    - clientY (number; optional):
        以浏览器窗口左上角为原点，记录y坐标.

    - screenX (number; optional):
        以屏幕左上角为原点，记录x坐标.

    - screenY (number; optional):
        以屏幕左上角为原点，记录y坐标.

    - timestamp (number; optional):
        事件对应的时间戳.

- recentlyCellDoubleClickColumn (string; optional):
    当`enableCellClickListenColumns=True`时，监听最近一次单元格双击事件对应的字段`dataIndex`.

- recentlyCellDoubleClickRecord (dict; optional):
    当`enableCellClickListenColumns=True`时，监听最近一次单元格双击事件对应的行记录信息.

- nDoubleClicksCell (number; default 0):
    当`enableCellClickListenColumns=True`时，监听表格单元格双击事件累计发生次数  默认值：`0`.

- cellDoubleClickEvent (dict; optional):
    当`enableCellClickListenColumns=True`时，监听最近一次表格单元格双击事件详细参数.

    `cellDoubleClickEvent` is a dict with keys:

    - pageX (number; optional):
        以页面整体左上角为原点，记录x坐标.

    - pageY (number; optional):
        以页面整体左上角为原点，记录y坐标.

    - clientX (number; optional):
        以浏览器窗口左上角为原点，记录x坐标.

    - clientY (number; optional):
        以浏览器窗口左上角为原点，记录y坐标.

    - screenX (number; optional):
        以屏幕左上角为原点，记录x坐标.

    - screenY (number; optional):
        以屏幕左上角为原点，记录y坐标.

    - timestamp (number; optional):
        事件对应的时间戳.

- recentlyContextMenuClickColumn (string; optional):
    当`enableCellClickListenColumns=True`时，监听最近一次单元格右键事件对应的字段`dataIndex`.

- recentlyContextMenuClickRecord (dict; optional):
    当`enableCellClickListenColumns=True`时，监听最近一次单元格右键事件对应的行记录信息.

- nContextMenuClicksCell (number; default 0):
    当`enableCellClickListenColumns=True`时，监听表格单元格右键事件累计发生次数  默认值：`0`.

- cellContextMenuClickEvent (dict; optional):
    当`enableCellClickListenColumns=True`时，监听最近一次表格单元格右键事件详细参数.

    `cellContextMenuClickEvent` is a dict with keys:

    - pageX (number; optional):
        以页面整体左上角为原点，记录x坐标.

    - pageY (number; optional):
        以页面整体左上角为原点，记录y坐标.

    - clientX (number; optional):
        以浏览器窗口左上角为原点，记录x坐标.

    - clientY (number; optional):
        以浏览器窗口左上角为原点，记录y坐标.

    - screenX (number; optional):
        以屏幕左上角为原点，记录x坐标.

    - screenY (number; optional):
        以屏幕左上角为原点，记录y坐标.

    - timestamp (number; optional):
        事件对应的时间戳.

- emptyContent (a list of or a singular dash component, string or number; optional):
    组件型，自定义空数据状态下，表格内的显示内容.

- cellUpdateOptimize (boolean; default False):
    是否严格启用单元格内容渲染优化，开启后，会基于单元格数据对单元格内容进行渲染优化，减少渲染次数  默认值：`False`.

- miniChartHeight (number; default 30):
    针对再渲染模式中的各迷你图模式，统一设置相关单元格像素高度  默认值：`30`.

- miniChartAnimation (boolean; default False):
    针对再渲染模式中的各迷你图模式，是否启用出场动画  默认值：`False`.

- recentlyButtonClickedRow (dict; optional):
    针对再渲染模式中的`'button'`模式，监听最近一次按钮点击对应的行记录信息.

- nClicksButton (number; default 0):
    针对再渲染模式中的`'button'`模式，监听表格中按钮点击累计次数  默认值：`0`.

- clickedContent (string; optional):
    针对再渲染模式中的`'button'`模式，监听最近一次按钮点击对应的按钮文字内容.

- clickedCustom (boolean | number | string | dict | list; optional):
    针对再渲染模式中的`'button'`模式，监听最近一次按钮点击对应的按钮数据项对应`'custom'`字段内容.

- recentlyButtonClickedDataIndex (string; optional):
    针对再渲染模式中的`'button'`模式，监听最近一次按钮点击对应的字段`dataIndex`.

- customFormatFuncs (dict with strings as keys and values of type string; optional):
    针对再渲染模式中的`'custom-format'`模式，键为对应字段`dataIndex`信息，值为对应的预处理`javascript`函数字符串.

- recentlyCheckedRow (dict; optional):
    针对再渲染模式中的`'checkbox'`模式，监听最近发生勾选事件的记录行.

- recentlyCheckedLabel (string; optional):
    针对再渲染模式中的`'checkbox'`模式，监听最近发生勾选事件的勾选框标签内容.

- recentlyCheckedDataIndex (string; optional):
    针对再渲染模式中的`'checkbox'`模式，监听最近发生勾选事件的字段`dataIndex`信息.

- recentlyCheckedStatus (boolean; optional):
    针对再渲染模式中的`'checkbox'`模式，监听最近发生勾选事件对应的勾选状态.

- recentlySwitchRow (dict; optional):
    针对再渲染模式中的`'switch'`模式，监听最近发生开关切换事件的记录行.

- recentlySwitchDataIndex (string; optional):
    针对再渲染模式中的`'switch'`模式，监听最近发生开关切换事件对应的开关状态.

- recentlySwitchStatus (boolean; optional):
    针对再渲染模式中的`'switch'`模式，监听最近发生开关切换事件对应的开关状态.

- nClicksDropdownItem (number; default 0):
    针对再渲染模式中的`'dropdown'`模式，监听表格中各下拉菜单项累计点击次数.

- recentlyClickedDropdownItemTitle (string; optional):
    针对再渲染模式中的`'dropdown'`模式，监听最近一次被点击的下拉菜单项`title`值.

- recentlyDropdownItemClickedDataIndex (string; optional):
    针对再渲染模式中的`'dropdown'`模式，监听最近一次被点击的下拉菜单项对应的字段dataIndex.

- recentlyDropdownItemClickedRow (dict; optional):
    针对再渲染模式中的`'dropdown'`模式，监听最近一次被点击的下拉菜单项对应的行记录.

- recentlySelectRow (dict; optional):
    针对再渲染模式中的`'select'`模式，监听最近发生下拉选项值更新的记录行.

- recentlySelectDataIndex (string; optional):
    针对再渲染模式中的`'select'`模式，监听最近发生下拉选项值更新对应的字段`dataIndex`.

- recentlySelectValue (number | string | list of number | strings; optional):
    针对再渲染模式中的`'select'`模式，监听最近发生下拉选项值更新对应的选项值.

- hiddenRowKeys (list of strings; optional):
    需要进行隐藏的行记录`key`值数组  默认值：`[]`.

- dataDeepCompare (boolean; optional):
    是否在表格底层进行重绘时，通过深度比较数据源`data`变化情况，来进行表格重绘优化，适用于中小数据量表格
    默认值：`False`.

- virtual (boolean; default False):
    是否开启虚拟滚动模式  默认值：`False`.

- title (a list of or a singular dash component, string or number; optional):
    组件型，表格整体标题内容.

- footer (a list of or a singular dash component, string or number; optional):
    组件型，表格整体页脚内容.

- loading (boolean; default False):
    是否启用表格自带加载中状态  默认值：`False`.

- rowClassName (dict; optional):
    表格行css类名，支持通过`func`字段定义`javascript`函数动态计算.

    `rowClassName` is a string | dict with keys:

    - func (string; optional):
        字符串形式的`javascript`函数.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配."""
    _children_props = ['columns[].title', 'data[]{}', 'summaryRowContents[].content', 'expandedRowKeyToContent[].content', 'emptyContent', 'title', 'footer']
    _base_nodes = ['emptyContent', 'title', 'footer', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdTable'
    ColumnsRenderOptionsRenderButtonPopConfirmProps = TypedDict(
        "ColumnsRenderOptionsRenderButtonPopConfirmProps",
            {
            "title": NotRequired[str],
            "okText": NotRequired[str],
            "cancelText": NotRequired[str]
        }
    )

    ColumnsRenderOptionsDropdownProps = TypedDict(
        "ColumnsRenderOptionsDropdownProps",
            {
            "title": NotRequired[str],
            "arrow": NotRequired[bool],
            "disabled": NotRequired[bool],
            "overlayClassName": NotRequired[str],
            "overlayStyle": NotRequired[dict],
            "placement": NotRequired[Literal["bottomLeft", "bottomCenter", "bottomRight", "topLeft", "topCenter", "topRight"]]
        }
    )

    ColumnsRenderOptions = TypedDict(
        "ColumnsRenderOptions",
            {
            "renderType": NotRequired[Literal["link", "ellipsis", "copyable", "ellipsis-copyable", "tags", "status-badge", "image", "custom-format", "corner-mark", "row-merge", "dropdown", "dropdown-links", "image-avatar", "mini-line", "mini-bar", "mini-progress", "mini-ring-progress", "mini-area", "button", "checkbox", "switch", "select"]],
            "renderLinkText": NotRequired[str],
            "renderButtonSplit": NotRequired[bool],
            "renderButtonPopConfirmProps": NotRequired["ColumnsRenderOptionsRenderButtonPopConfirmProps"],
            "miniChartColor": NotRequired[str],
            "tooltipCustomContent": NotRequired[str],
            "progressOneHundredPercentColor": NotRequired[str],
            "ringProgressFontSize": NotRequired[NumberType],
            "dropdownProps": NotRequired["ColumnsRenderOptionsDropdownProps"]
        }
    )

    ColumnsEditOptionsAutoSize = TypedDict(
        "ColumnsEditOptionsAutoSize",
            {
            "minRows": NotRequired[NumberType],
            "maxRows": NotRequired[NumberType]
        }
    )

    ColumnsEditOptions = TypedDict(
        "ColumnsEditOptions",
            {
            "mode": NotRequired[Literal["default", "text-area"]],
            "autoSize": NotRequired[typing.Union[bool, "ColumnsEditOptionsAutoSize"]],
            "maxLength": NotRequired[NumberType],
            "placeholder": NotRequired[str],
            "disabledKeys": NotRequired[typing.Sequence[str]]
        }
    )

    Columns = TypedDict(
        "Columns",
            {
            "title": typing.Union[typing.Any, ComponentType],
            "dataIndex": str,
            "group": NotRequired[typing.Union[str, typing.Sequence[str]]],
            "renderOptions": NotRequired["ColumnsRenderOptions"],
            "fixed": NotRequired[typing.Union[Literal["left", "right"], bool]],
            "editable": NotRequired[bool],
            "editOptions": NotRequired["ColumnsEditOptions"],
            "align": NotRequired[Literal["left", "center", "right"]],
            "headerAlign": NotRequired[Literal["left", "center", "right"]],
            "width": NotRequired[typing.Union[NumberType, str]],
            "minWidth": NotRequired[typing.Union[NumberType, str]],
            "hidden": NotRequired[bool],
            "className": NotRequired[str],
            "defaultSortOrder": NotRequired[Literal["ascend", "descend"]],
            "filterResetToDefaultFilteredValue": NotRequired[bool]
        }
    )

    Data = TypedDict(
        "Data",
            {
            "className": NotRequired[str],
            "style": NotRequired[dict],
            "options": NotRequired[typing.Sequence["DataOptions"]],
            "listHeight": NotRequired[NumberType],
            "mode": NotRequired[Literal["multiple", "tags"]],
            "disabled": NotRequired[bool],
            "size": NotRequired[Literal["small", "middle", "large"]],
            "bordered": NotRequired[bool],
            "placeholder": NotRequired[str],
            "placement": NotRequired[Literal["bottomLeft", "bottomRight", "topLeft", "topRight"]],
            "value": NotRequired[typing.Union[typing.Union[str, NumberType], typing.Sequence[typing.Union[str, NumberType]]]],
            "maxTagCount": NotRequired[typing.Union[NumberType, Literal["responsive"]]],
            "optionFilterProp": NotRequired[Literal["value", "label"]],
            "allowClear": NotRequired[bool]
        }
    )

    DataPopConfirmProps = TypedDict(
        "DataPopConfirmProps",
            {
            "title": NotRequired[str],
            "okText": NotRequired[str],
            "cancelText": NotRequired[str]
        }
    )

    DataTooltip = TypedDict(
        "DataTooltip",
            {
            "title": NotRequired[str],
            "placement": NotRequired[Literal["top", "left", "right", "bottom", "topLeft", "topRight", "bottomLeft", "bottomRight"]]
        }
    )

    DataSize = TypedDict(
        "DataSize",
            {
            "xs": NotRequired[NumberType],
            "sm": NotRequired[NumberType],
            "md": NotRequired[NumberType],
            "lg": NotRequired[NumberType],
            "xl": NotRequired[NumberType],
            "xxl": NotRequired[NumberType]
        }
    )

    DataOptions = TypedDict(
        "DataOptions",
            {
            "label": NotRequired[str],
            "value": NotRequired[typing.Union[str, NumberType]]
        }
    )

    Sticky = TypedDict(
        "Sticky",
            {
            "offsetHeader": NotRequired[NumberType],
            "offsetScroll": NotRequired[NumberType]
        }
    )

    TitlePopoverInfo = TypedDict(
        "TitlePopoverInfo",
            {
            "title": NotRequired[str],
            "content": NotRequired[str],
            "placement": NotRequired[Literal["top", "left", "right", "bottom", "topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]],
            "overlayStyle": NotRequired[dict]
        }
    )

    ColumnsFormatConstraint = TypedDict(
        "ColumnsFormatConstraint",
            {
            "rule": NotRequired[str],
            "content": NotRequired[str]
        }
    )

    SortOptions = TypedDict(
        "SortOptions",
            {
            "sortDataIndexes": NotRequired[typing.Sequence[str]],
            "multiple": NotRequired[typing.Union[bool, Literal["auto"]]],
            "forceCompareModes": NotRequired[typing.Dict[typing.Union[str, float, int], Literal["number", "custom"]]],
            "customOrders": NotRequired[typing.Dict[typing.Union[str, float, int], typing.Sequence]]
        }
    )

    FilterOptions = TypedDict(
        "FilterOptions",
            {
            "filterMode": NotRequired[Literal["checkbox", "keyword", "tree"]],
            "filterCustomItems": NotRequired[typing.Union[typing.Sequence[typing.Any], typing.Any]],
            "filterCustomTreeItems": NotRequired[typing.Sequence[dict]],
            "filterMultiple": NotRequired[bool],
            "filterSearch": NotRequired[bool]
        }
    )

    Pagination = TypedDict(
        "Pagination",
            {
            "position": NotRequired[Literal["topLeft", "topCenter", "topRight", "bottomLeft", "bottomCenter", "bottomRight"]],
            "pageSize": NotRequired[NumberType],
            "current": NotRequired[NumberType],
            "showSizeChanger": NotRequired[bool],
            "pageSizeOptions": NotRequired[typing.Sequence[NumberType]],
            "showTitle": NotRequired[bool],
            "showQuickJumper": NotRequired[bool],
            "showTotalPrefix": NotRequired[str],
            "showTotalSuffix": NotRequired[str],
            "hideOnSinglePage": NotRequired[bool],
            "simple": NotRequired[bool],
            "disabled": NotRequired[bool],
            "size": NotRequired[Literal["default", "small"]],
            "total": NotRequired[NumberType],
            "showLessItems": NotRequired[bool]
        }
    )

    Sorter = TypedDict(
        "Sorter",
            {
            "columns": NotRequired[typing.Sequence[str]],
            "orders": NotRequired[typing.Sequence[Literal["ascend", "descend"]]]
        }
    )

    SummaryRowContents = TypedDict(
        "SummaryRowContents",
            {
            "content": NotRequired[ComponentType],
            "colSpan": NotRequired[NumberType],
            "align": NotRequired[Literal["left", "center", "right"]]
        }
    )

    ExpandedRowKeyToContent = TypedDict(
        "ExpandedRowKeyToContent",
            {
            "key": typing.Union[str, NumberType],
            "content": NotRequired[ComponentType]
        }
    )

    CellClickEvent = TypedDict(
        "CellClickEvent",
            {
            "pageX": NotRequired[NumberType],
            "pageY": NotRequired[NumberType],
            "clientX": NotRequired[NumberType],
            "clientY": NotRequired[NumberType],
            "screenX": NotRequired[NumberType],
            "screenY": NotRequired[NumberType],
            "timestamp": NotRequired[NumberType]
        }
    )

    CellDoubleClickEvent = TypedDict(
        "CellDoubleClickEvent",
            {
            "pageX": NotRequired[NumberType],
            "pageY": NotRequired[NumberType],
            "clientX": NotRequired[NumberType],
            "clientY": NotRequired[NumberType],
            "screenX": NotRequired[NumberType],
            "screenY": NotRequired[NumberType],
            "timestamp": NotRequired[NumberType]
        }
    )

    CellContextMenuClickEvent = TypedDict(
        "CellContextMenuClickEvent",
            {
            "pageX": NotRequired[NumberType],
            "pageY": NotRequired[NumberType],
            "clientX": NotRequired[NumberType],
            "clientY": NotRequired[NumberType],
            "screenX": NotRequired[NumberType],
            "screenY": NotRequired[NumberType],
            "timestamp": NotRequired[NumberType]
        }
    )

    RowClassName = TypedDict(
        "RowClassName",
            {
            "func": NotRequired[str]
        }
    )


    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[str] = None,
        locale: typing.Optional[Literal["zh-cn", "en-us", "de-de", "ru-ru"]] = None,
        containerId: typing.Optional[str] = None,
        columns: typing.Optional[typing.Sequence["Columns"]] = None,
        showHeader: typing.Optional[bool] = None,
        rowHoverable: typing.Optional[bool] = None,
        tableLayout: typing.Optional[Literal["auto", "fixed"]] = None,
        data: typing.Optional[typing.Sequence[typing.Dict[typing.Union[str, float, int], typing.Union[typing.Sequence[typing.Any], ComponentType, str, NumberType, bool, "Data", typing.Sequence[NumberType], typing.Union["Data", typing.Sequence["Data"]], typing.Sequence["Data"], dict]]]] = None,
        bordered: typing.Optional[bool] = None,
        maxHeight: typing.Optional[typing.Union[NumberType, str]] = None,
        maxWidth: typing.Optional[typing.Union[NumberType, str, bool]] = None,
        scrollToFirstRowOnChange: typing.Optional[bool] = None,
        size: typing.Optional[Literal["small", "middle", "large"]] = None,
        rowSelectionType: typing.Optional[Literal["checkbox", "radio"]] = None,
        selectedRowKeys: typing.Optional[typing.Sequence[typing.Union[str, NumberType]]] = None,
        selectedRows: typing.Optional[typing.Sequence] = None,
        rowSelectionWidth: typing.Optional[typing.Union[str, NumberType]] = None,
        rowSelectionCheckStrictly: typing.Optional[bool] = None,
        rowSelectionIgnoreRowKeys: typing.Optional[typing.Sequence[typing.Union[str, NumberType]]] = None,
        selectedRowsSyncWithData: typing.Optional[bool] = None,
        sticky: typing.Optional[typing.Union[bool, "Sticky"]] = None,
        enableHoverListen: typing.Optional[bool] = None,
        recentlyMouseEnterColumnDataIndex: typing.Optional[str] = None,
        recentlyMouseEnterRowKey: typing.Optional[typing.Union[str, NumberType]] = None,
        recentlyMouseEnterRow: typing.Optional[dict] = None,
        titlePopoverInfo: typing.Optional[typing.Dict[typing.Union[str, float, int], "TitlePopoverInfo"]] = None,
        columnsFormatConstraint: typing.Optional[typing.Dict[typing.Union[str, float, int], "ColumnsFormatConstraint"]] = None,
        sortOptions: typing.Optional["SortOptions"] = None,
        showSorterTooltip: typing.Optional[bool] = None,
        showSorterTooltipTarget: typing.Optional[Literal["full-header", "sorter-icon"]] = None,
        filterOptions: typing.Optional[typing.Dict[typing.Union[str, float, int], "FilterOptions"]] = None,
        defaultFilteredValues: typing.Optional[typing.Dict[typing.Union[str, float, int], typing.Sequence]] = None,
        pagination: typing.Optional[typing.Union["Pagination", bool]] = None,
        currentData: typing.Optional[typing.Sequence] = None,
        recentlyChangedRow: typing.Optional[dict] = None,
        recentlyChangedColumn: typing.Optional[str] = None,
        sorter: typing.Optional["Sorter"] = None,
        filter: typing.Optional[dict] = None,
        mode: typing.Optional[Literal["client-side", "server-side"]] = None,
        summaryRowContents: typing.Optional[typing.Sequence["SummaryRowContents"]] = None,
        summaryRowBlankColumns: typing.Optional[NumberType] = None,
        summaryRowFixed: typing.Optional[typing.Union[bool, Literal["top", "bottom"]]] = None,
        conditionalStyleFuncs: typing.Optional[typing.Dict[typing.Union[str, float, int], str]] = None,
        expandedRowKeyToContent: typing.Optional[typing.Sequence["ExpandedRowKeyToContent"]] = None,
        expandedRowWidth: typing.Optional[typing.Union[str, NumberType]] = None,
        expandRowByClick: typing.Optional[bool] = None,
        defaultExpandedRowKeys: typing.Optional[typing.Sequence[str]] = None,
        expandedRowKeys: typing.Optional[typing.Sequence[str]] = None,
        enableCellClickListenColumns: typing.Optional[typing.Sequence[str]] = None,
        recentlyCellClickColumn: typing.Optional[str] = None,
        recentlyCellClickRecord: typing.Optional[dict] = None,
        nClicksCell: typing.Optional[NumberType] = None,
        cellClickEvent: typing.Optional["CellClickEvent"] = None,
        recentlyCellDoubleClickColumn: typing.Optional[str] = None,
        recentlyCellDoubleClickRecord: typing.Optional[dict] = None,
        nDoubleClicksCell: typing.Optional[NumberType] = None,
        cellDoubleClickEvent: typing.Optional["CellDoubleClickEvent"] = None,
        recentlyContextMenuClickColumn: typing.Optional[str] = None,
        recentlyContextMenuClickRecord: typing.Optional[dict] = None,
        nContextMenuClicksCell: typing.Optional[NumberType] = None,
        cellContextMenuClickEvent: typing.Optional["CellContextMenuClickEvent"] = None,
        emptyContent: typing.Optional[ComponentType] = None,
        cellUpdateOptimize: typing.Optional[bool] = None,
        miniChartHeight: typing.Optional[NumberType] = None,
        miniChartAnimation: typing.Optional[bool] = None,
        recentlyButtonClickedRow: typing.Optional[dict] = None,
        nClicksButton: typing.Optional[NumberType] = None,
        clickedContent: typing.Optional[str] = None,
        clickedCustom: typing.Optional[typing.Any] = None,
        recentlyButtonClickedDataIndex: typing.Optional[str] = None,
        customFormatFuncs: typing.Optional[typing.Dict[typing.Union[str, float, int], str]] = None,
        recentlyCheckedRow: typing.Optional[dict] = None,
        recentlyCheckedLabel: typing.Optional[str] = None,
        recentlyCheckedDataIndex: typing.Optional[str] = None,
        recentlyCheckedStatus: typing.Optional[bool] = None,
        recentlySwitchRow: typing.Optional[dict] = None,
        recentlySwitchDataIndex: typing.Optional[str] = None,
        recentlySwitchStatus: typing.Optional[bool] = None,
        nClicksDropdownItem: typing.Optional[NumberType] = None,
        recentlyClickedDropdownItemTitle: typing.Optional[str] = None,
        recentlyDropdownItemClickedDataIndex: typing.Optional[str] = None,
        recentlyDropdownItemClickedRow: typing.Optional[dict] = None,
        recentlySelectRow: typing.Optional[dict] = None,
        recentlySelectDataIndex: typing.Optional[str] = None,
        recentlySelectValue: typing.Optional[typing.Union[typing.Union[NumberType, str], typing.Sequence[typing.Union[NumberType, str]]]] = None,
        hiddenRowKeys: typing.Optional[typing.Sequence[str]] = None,
        dataDeepCompare: typing.Optional[bool] = None,
        virtual: typing.Optional[bool] = None,
        title: typing.Optional[ComponentType] = None,
        footer: typing.Optional[ComponentType] = None,
        loading: typing.Optional[bool] = None,
        rowClassName: typing.Optional[typing.Union[str, "RowClassName"]] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'style', 'className', 'locale', 'containerId', 'columns', 'showHeader', 'rowHoverable', 'tableLayout', 'data', 'bordered', 'maxHeight', 'maxWidth', 'scrollToFirstRowOnChange', 'size', 'rowSelectionType', 'selectedRowKeys', 'selectedRows', 'rowSelectionWidth', 'rowSelectionCheckStrictly', 'rowSelectionIgnoreRowKeys', 'selectedRowsSyncWithData', 'sticky', 'enableHoverListen', 'recentlyMouseEnterColumnDataIndex', 'recentlyMouseEnterRowKey', 'recentlyMouseEnterRow', 'titlePopoverInfo', 'columnsFormatConstraint', 'sortOptions', 'showSorterTooltip', 'showSorterTooltipTarget', 'filterOptions', 'defaultFilteredValues', 'pagination', 'currentData', 'recentlyChangedRow', 'recentlyChangedColumn', 'sorter', 'filter', 'mode', 'summaryRowContents', 'summaryRowBlankColumns', 'summaryRowFixed', 'conditionalStyleFuncs', 'expandedRowKeyToContent', 'expandedRowWidth', 'expandRowByClick', 'defaultExpandedRowKeys', 'expandedRowKeys', 'enableCellClickListenColumns', 'recentlyCellClickColumn', 'recentlyCellClickRecord', 'nClicksCell', 'cellClickEvent', 'recentlyCellDoubleClickColumn', 'recentlyCellDoubleClickRecord', 'nDoubleClicksCell', 'cellDoubleClickEvent', 'recentlyContextMenuClickColumn', 'recentlyContextMenuClickRecord', 'nContextMenuClicksCell', 'cellContextMenuClickEvent', 'emptyContent', 'cellUpdateOptimize', 'miniChartHeight', 'miniChartAnimation', 'recentlyButtonClickedRow', 'nClicksButton', 'clickedContent', 'clickedCustom', 'recentlyButtonClickedDataIndex', 'customFormatFuncs', 'recentlyCheckedRow', 'recentlyCheckedLabel', 'recentlyCheckedDataIndex', 'recentlyCheckedStatus', 'recentlySwitchRow', 'recentlySwitchDataIndex', 'recentlySwitchStatus', 'nClicksDropdownItem', 'recentlyClickedDropdownItemTitle', 'recentlyDropdownItemClickedDataIndex', 'recentlyDropdownItemClickedRow', 'recentlySelectRow', 'recentlySelectDataIndex', 'recentlySelectValue', 'hiddenRowKeys', 'dataDeepCompare', 'virtual', 'title', 'footer', 'loading', 'rowClassName', 'data-*', 'aria-*']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'style', 'className', 'locale', 'containerId', 'columns', 'showHeader', 'rowHoverable', 'tableLayout', 'data', 'bordered', 'maxHeight', 'maxWidth', 'scrollToFirstRowOnChange', 'size', 'rowSelectionType', 'selectedRowKeys', 'selectedRows', 'rowSelectionWidth', 'rowSelectionCheckStrictly', 'rowSelectionIgnoreRowKeys', 'selectedRowsSyncWithData', 'sticky', 'enableHoverListen', 'recentlyMouseEnterColumnDataIndex', 'recentlyMouseEnterRowKey', 'recentlyMouseEnterRow', 'titlePopoverInfo', 'columnsFormatConstraint', 'sortOptions', 'showSorterTooltip', 'showSorterTooltipTarget', 'filterOptions', 'defaultFilteredValues', 'pagination', 'currentData', 'recentlyChangedRow', 'recentlyChangedColumn', 'sorter', 'filter', 'mode', 'summaryRowContents', 'summaryRowBlankColumns', 'summaryRowFixed', 'conditionalStyleFuncs', 'expandedRowKeyToContent', 'expandedRowWidth', 'expandRowByClick', 'defaultExpandedRowKeys', 'expandedRowKeys', 'enableCellClickListenColumns', 'recentlyCellClickColumn', 'recentlyCellClickRecord', 'nClicksCell', 'cellClickEvent', 'recentlyCellDoubleClickColumn', 'recentlyCellDoubleClickRecord', 'nDoubleClicksCell', 'cellDoubleClickEvent', 'recentlyContextMenuClickColumn', 'recentlyContextMenuClickRecord', 'nContextMenuClicksCell', 'cellContextMenuClickEvent', 'emptyContent', 'cellUpdateOptimize', 'miniChartHeight', 'miniChartAnimation', 'recentlyButtonClickedRow', 'nClicksButton', 'clickedContent', 'clickedCustom', 'recentlyButtonClickedDataIndex', 'customFormatFuncs', 'recentlyCheckedRow', 'recentlyCheckedLabel', 'recentlyCheckedDataIndex', 'recentlyCheckedStatus', 'recentlySwitchRow', 'recentlySwitchDataIndex', 'recentlySwitchStatus', 'nClicksDropdownItem', 'recentlyClickedDropdownItemTitle', 'recentlyDropdownItemClickedDataIndex', 'recentlyDropdownItemClickedRow', 'recentlySelectRow', 'recentlySelectDataIndex', 'recentlySelectValue', 'hiddenRowKeys', 'dataDeepCompare', 'virtual', 'title', 'footer', 'loading', 'rowClassName', 'data-*', 'aria-*']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdTable, self).__init__(**args)

setattr(AntdTable, "__init__", _explicitize_args(AntdTable.__init__))
