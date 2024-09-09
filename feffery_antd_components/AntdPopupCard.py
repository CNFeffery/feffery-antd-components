# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdPopupCard(Component):
    """An AntdPopupCard component.
弹出式卡片组件AntdPopupCard

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

- title (a list of or a singular dash component, string or number; optional):
    组件型，标题内容.

- visible (boolean; default True):
    设置或监听当前弹出式卡片是否显示  默认值：`True`.

- width (number | string; optional):
    弹出式卡片像素宽度.

- transitionType (a value equal to: 'none', 'fade', 'zoom', 'zoom-big', 'zoom-big-fast', 'slide-up', 'slide-down', 'slide-left', 'slide-right', 'move-up', 'move-down', 'move-left', 'move-right'; default 'fade'):
    卡片显隐动画类型，可选项有`'none'`、`'fade'`、`'zoom'`、`'zoom-big'`、`'zoom-big-fast'`、`'slide-up'`、`'slide-down'`、`'slide-left'`、`'slide-right'`、`'move-up'`、`'move-down'`、`'move-left'`、`'move-right'`
    默认值：`'zoom'`.

- closable (boolean; default True):
    是否显示右上角的关闭按钮  默认值：`True`.

- closeIconType (a value equal to: 'default', 'outlined', 'two-tone'; default 'default'):
    关闭按钮类型，可选项有`'default'`、`'outlined'`、`'two-tone'`  默认值：`'default'`.

- draggable (boolean; default False):
    是否可拖拽  默认值：`False`.

- dragClassName (string | dict; optional):
    顶部可拖拽区域css类名.

- zIndex (number; default 1000):
    弹出式卡片z-index  默认值：`1000`.

- bodyStyle (dict; optional):
    内容区域css样式.

- loading (boolean; default False):
    是否整体渲染为加载中状态  默认值：`False`.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading."""
    _children_props = ['title']
    _base_nodes = ['title', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdPopupCard'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, title=Component.UNDEFINED, visible=Component.UNDEFINED, width=Component.UNDEFINED, transitionType=Component.UNDEFINED, closable=Component.UNDEFINED, closeIconType=Component.UNDEFINED, draggable=Component.UNDEFINED, dragClassName=Component.UNDEFINED, zIndex=Component.UNDEFINED, bodyStyle=Component.UNDEFINED, loading=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'children', 'style', 'className', 'title', 'visible', 'width', 'transitionType', 'closable', 'closeIconType', 'draggable', 'dragClassName', 'zIndex', 'bodyStyle', 'loading', 'data-*', 'aria-*', 'loading_state']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'children', 'style', 'className', 'title', 'visible', 'width', 'transitionType', 'closable', 'closeIconType', 'draggable', 'dragClassName', 'zIndex', 'bodyStyle', 'loading', 'data-*', 'aria-*', 'loading_state']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdPopupCard, self).__init__(children=children, **args)
