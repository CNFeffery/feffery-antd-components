# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdDropdown(Component):
    """An AntdDropdown component.
下拉菜单组件AntdDropdown

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    组件型，下拉菜单触发锚定元素.

- id (string; optional):
    组件唯一id.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- arrow (boolean; default False):
    下拉菜单是否渲染指示箭头  默认值：`False`.

- autoAdjustOverflow (boolean; default True):
    下拉菜单是否在被遮挡时自动调整位置  默认值：`True`.

- batchPropsNames (list of strings; optional):
    需要纳入批属性监听的属性名  默认值：`[]`.

- batchPropsValues (dict; optional):
    批量监听与当前batchPropsNames对应的属性值.

- buttonMode (boolean; default False):
    下拉菜单触发元素是否渲染为按钮形式，children参数未设置时有效  默认值：`False`.

- buttonProps (dict; optional):
    针对下拉菜单触发元素的按钮形式进行进一步配置.

    `buttonProps` is a dict with keys:

    - className (string; optional):
        按钮css类名.

    - danger (boolean; optional):
        按钮是否呈现危险样式  默认值：`False`.

    - size (a value equal to: 'small', 'middle', 'large'; optional):
        按钮尺寸规格，可选项有`'small'`、`'middle'`、`'large'`  默认值：`'middle'`.

    - style (dict; optional):
        按钮css样式.

    - type (a value equal to: 'default', 'primary', 'ghost', 'dashed', 'link', 'text'; optional):
        按钮类型，可选项有`'default'`、`'primary'`、`'ghost'`、`'dashed'`、`'link'`、`'text'`
        默认值：`'default'`.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- clickedKey (string; optional):
    监听被点击的下拉菜单选项key值.

- data-* (string; optional):
    `data-*`格式属性通配.

- disabled (boolean; default False):
    是否禁用组件功能  默认值：`False`.

- freePosition (boolean; default False):
    是否开启自由位置模式  默认值：`False`.

- freePositionClassName (string; optional):
    自由位置模式开启后，控制挂载位置对应css类名.

- freePositionStyle (dict; optional):
    自由位置模式开启后，控制挂载位置对应css样式.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- menuItems (list of dicts; optional):
    下拉菜单数据结构.

    `menuItems` is a list of dicts with keys:

    - disabled (boolean; optional):
        是否禁用节点  默认值：`False`.

    - href (string; optional):
        节点链接地址.

    - icon (string; optional):
        节点前缀图标名称，与`iconRenderer`方式相关联，`'AntdIcon'`方式下同AntdIcon的icon参数，`'fontawesome'`方式下代表图标的css类名.

    - iconRenderer (a value equal to: 'AntdIcon', 'fontawesome'; optional):
        前缀图标渲染方式，可选项有`'AntdIcon'`、`'fontawesome'`  默认值：`'AntdIcon'`.

    - isDivider (boolean; optional):
        节点是否渲染为分割线.

    - key (string; optional):
        节点唯一key值.

    - target (string; optional):
        节点链接跳转行为.

    - title (a list of or a singular dash component, string or number; optional):
        组件型，节点标题.

- multiple (boolean; default False):
    菜单项是否可多选  默认值：`False`.

- nClicks (number; default 0):
    监听下拉菜单选项累计被点击次数  默认值：`0`.

- nonSelectableKeys (list of strings; optional):
    设置不可选中项key值数组  默认值：`[]`.

- overlayClassName (string | dict; optional):
    下拉菜单容器css类名，支持[动态css](/advanced-classname).

- overlayStyle (dict; optional):
    下拉菜单容器css样式.

- placement (a value equal to: 'bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight'; optional):
    下拉菜单弹出方位，可选项有`'bottomLeft'`、`'bottomCenter'`、`'bottomRight'`、`'topLeft'`、`'topCenter'`、`'topRight'`.

- popupContainer (a value equal to: 'parent', 'body'; default 'body'):
    下拉菜单展开层锚定策略，可选项有`'parent'`、`'body'`  默认值：`'body'`.

- selectable (boolean; default False):
    菜单项是否可选择  默认值：`False`.

- selectedKeys (list of strings; optional):
    设置或监听当前已选中菜单项key值.

- style (dict; optional):
    当前组件css样式.

- title (string; optional):
    下拉菜单触发元素标题内容，children参数未设置时有效.

- trigger (a value equal to: 'click', 'hover'; default 'hover'):
    下拉菜单显示触发方式，可选项有`'click'`、`'hover'`  默认值：`'hover'`.

- visible (boolean; default False):
    监听或设置下拉菜单是否展开  默认值：`False`.

- wrapperClassName (string | dict; optional):
    锚定元素父容器css类名.

- wrapperStyle (dict; optional):
    锚定元素父容器css样式."""
    _children_props = ['menuItems[].title']
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdDropdown'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, wrapperStyle=Component.UNDEFINED, wrapperClassName=Component.UNDEFINED, title=Component.UNDEFINED, buttonMode=Component.UNDEFINED, buttonProps=Component.UNDEFINED, freePosition=Component.UNDEFINED, freePositionStyle=Component.UNDEFINED, freePositionClassName=Component.UNDEFINED, clickedKey=Component.UNDEFINED, nClicks=Component.UNDEFINED, menuItems=Component.UNDEFINED, selectable=Component.UNDEFINED, multiple=Component.UNDEFINED, selectedKeys=Component.UNDEFINED, nonSelectableKeys=Component.UNDEFINED, arrow=Component.UNDEFINED, disabled=Component.UNDEFINED, overlayClassName=Component.UNDEFINED, overlayStyle=Component.UNDEFINED, placement=Component.UNDEFINED, trigger=Component.UNDEFINED, autoAdjustOverflow=Component.UNDEFINED, visible=Component.UNDEFINED, popupContainer=Component.UNDEFINED, batchPropsNames=Component.UNDEFINED, batchPropsValues=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'aria-*', 'arrow', 'autoAdjustOverflow', 'batchPropsNames', 'batchPropsValues', 'buttonMode', 'buttonProps', 'className', 'clickedKey', 'data-*', 'disabled', 'freePosition', 'freePositionClassName', 'freePositionStyle', 'key', 'loading_state', 'menuItems', 'multiple', 'nClicks', 'nonSelectableKeys', 'overlayClassName', 'overlayStyle', 'placement', 'popupContainer', 'selectable', 'selectedKeys', 'style', 'title', 'trigger', 'visible', 'wrapperClassName', 'wrapperStyle']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'aria-*', 'arrow', 'autoAdjustOverflow', 'batchPropsNames', 'batchPropsValues', 'buttonMode', 'buttonProps', 'className', 'clickedKey', 'data-*', 'disabled', 'freePosition', 'freePositionClassName', 'freePositionStyle', 'key', 'loading_state', 'menuItems', 'multiple', 'nClicks', 'nonSelectableKeys', 'overlayClassName', 'overlayStyle', 'placement', 'popupContainer', 'selectable', 'selectedKeys', 'style', 'title', 'trigger', 'visible', 'wrapperClassName', 'wrapperStyle']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdDropdown, self).__init__(children=children, **args)
