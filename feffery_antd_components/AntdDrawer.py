# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdDrawer(Component):
    """An AntdDrawer component.
抽屉组件AntdDrawer

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- children (a list of or a singular dash component, string or number; optional):
    组件型，内嵌元素.

- style (dict; optional):
    当前组件css样式.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- classNames (dict; optional):
    配置各子元素的css类名.

    `classNames` is a dict with keys:

    - header (string; optional):
        头部元素css类名.

    - body (string; optional):
        内容元素css类名.

    - footer (string; optional):
        底部元素css类名.

    - mask (string; optional):
        遮罩层元素css类名.

    - content (string; optional):
        抽屉容器元素css类名.

- styles (dict; optional):
    配置各子元素的css样式.

    `styles` is a dict with keys:

    - header (dict; optional):
        头部元素css样式.

    - body (dict; optional):
        内容元素css样式.

    - footer (dict; optional):
        底部元素css样式.

    - mask (dict; optional):
        遮罩层元素css样式.

    - content (dict; optional):
        抽屉容器元素css样式.

- rootStyle (dict; optional):
    抽屉根节点css样式（包含遮罩层），特殊的，当设置了`containerId`或`containerSelector`时，该参数会自动设置`position`为`absolute`.

- visible (boolean; default False):
    监听或设置抽屉是否可见  默认值：`False`.

- title (a list of or a singular dash component, string or number; optional):
    组件型，抽屉标题内容.

- placement (a value equal to: 'left', 'right', 'top', 'bottom'; default 'right'):
    抽屉弹出位置，可选项有`'left'`、`'right'`、`'top'`、`'bottom'`  默认值：`'right'`.

- closable (boolean; default True):
    是否显示关闭按钮  默认值：`True`.

- forceRender (boolean; default False):
    是否对抽屉内的子元素进行预渲染  默认值：`False`.

- destroyOnClose (boolean; default False):
    是否在关闭时销毁抽屉内的子元素  默认值：`False`.

- width (number | string; default 256):
    抽屉像素宽度，`placement`为`'left'`、`'right'`时有效  默认值：`256`.

- height (number | string; default 256):
    抽屉像素高度，`placement`为`'top'`、`'bottom'`时有效  默认值：`256`.

- mask (boolean; default True):
    是否显示遮罩层  默认值：`True`.

- maskClosable (boolean; default True):
    是否允许点击遮罩区域关闭抽屉  默认值：`True`.

- zIndex (number; default 1000):
    抽屉整体`z-index`  默认值：`1000`.

- loading (boolean; default False):
    是否渲染为加载中状态  默认值：`False`.

- extra (a list of or a singular dash component, string or number; optional):
    组件型，额外操作区元素.

- footer (a list of or a singular dash component, string or number; optional):
    组件型，底部元素.

- containerId (string; optional):
    用于设置`position`为`relative`的局部容器id.

- containerSelector (string; optional):
    当目标容器定位较为复杂时，可传入获取元素对应的js代码字符串，优先级低于`containerId`.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

    - component_name (string; optional):
        Holds the name of the component that is loading."""
    _children_props = ['title', 'extra', 'footer']
    _base_nodes = ['title', 'extra', 'footer', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdDrawer'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, classNames=Component.UNDEFINED, styles=Component.UNDEFINED, rootStyle=Component.UNDEFINED, visible=Component.UNDEFINED, title=Component.UNDEFINED, placement=Component.UNDEFINED, closable=Component.UNDEFINED, forceRender=Component.UNDEFINED, destroyOnClose=Component.UNDEFINED, width=Component.UNDEFINED, height=Component.UNDEFINED, mask=Component.UNDEFINED, maskClosable=Component.UNDEFINED, zIndex=Component.UNDEFINED, loading=Component.UNDEFINED, extra=Component.UNDEFINED, footer=Component.UNDEFINED, containerId=Component.UNDEFINED, containerSelector=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'children', 'style', 'className', 'classNames', 'styles', 'rootStyle', 'visible', 'title', 'placement', 'closable', 'forceRender', 'destroyOnClose', 'width', 'height', 'mask', 'maskClosable', 'zIndex', 'loading', 'extra', 'footer', 'containerId', 'containerSelector', 'data-*', 'aria-*', 'loading_state']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'children', 'style', 'className', 'classNames', 'styles', 'rootStyle', 'visible', 'title', 'placement', 'closable', 'forceRender', 'destroyOnClose', 'width', 'height', 'mask', 'maskClosable', 'zIndex', 'loading', 'extra', 'footer', 'containerId', 'containerSelector', 'data-*', 'aria-*', 'loading_state']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdDrawer, self).__init__(children=children, **args)
