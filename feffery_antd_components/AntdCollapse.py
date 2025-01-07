# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdCollapse(Component):
    """An AntdCollapse component.
折叠面板组件AntdCollapse

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

- styles (dict; optional):
    细分控制子元素css样式.

    `styles` is a dict with keys:

    - header (dict; optional):
        头部元素css样式.

    - body (dict; optional):
        内容元素css样式.

- classNames (dict; optional):
    细分控制子元素css类名.

    `classNames` is a dict with keys:

    - header (string; optional):
        头部元素css类名.

    - body (string; optional):
        内容元素css类名.

- title (a list of or a singular dash component, string or number; optional):
    组件型，标题内容.

- isOpen (boolean; default True):
    是否展开  默认值：`True`.

- size (a value equal to: 'large', 'middle', 'small'; default 'middle'):
    组件尺寸规格，可选项有`'small'`、`'middle'`、`'large'`  默认值：`'middle'`.

- bordered (boolean; default True):
    是否渲染边框  默认值：`True`.

- showArrow (boolean; default True):
    是否渲染箭头  默认值：`True`.

- ghost (boolean; default False):
    是否开启透明背景模式  默认值：`False`.

- collapsible (a value equal to: 'header', 'disabled', 'icon'; optional):
    折叠交互触发行为，可选项有`'header'`（仅标题区域）、`'disabled'`（禁用折叠）、`'icon'`（仅图标区域）.

- forceRender (boolean; default False):
    初始化未展开时，是否强制渲染内部元素  默认值：`False`.

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
        Holds the name of the component that is loading.

- persistence (boolean | string | number; optional):
    是否开启[属性持久化](/prop-persistence).

- persisted_props (list of a value equal to: 'isOpen's; default ['isOpen']):
    开启属性持久化功能的若干属性名，可选项有`'isOpen'`  默认值：`['isOpen']`.

- persistence_type (a value equal to: 'local', 'session', 'memory'; default 'local'):
    属性持久化存储类型，可选项有`'local'`（本地持久化），`'session'`（会话持久化），`'memory'`（内存持久化）
    默认值：`'local'`."""
    _children_props = ['title']
    _base_nodes = ['title', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdCollapse'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, styles=Component.UNDEFINED, classNames=Component.UNDEFINED, title=Component.UNDEFINED, isOpen=Component.UNDEFINED, size=Component.UNDEFINED, bordered=Component.UNDEFINED, showArrow=Component.UNDEFINED, ghost=Component.UNDEFINED, collapsible=Component.UNDEFINED, forceRender=Component.UNDEFINED, loading_state=Component.UNDEFINED, persistence=Component.UNDEFINED, persisted_props=Component.UNDEFINED, persistence_type=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'children', 'style', 'className', 'styles', 'classNames', 'title', 'isOpen', 'size', 'bordered', 'showArrow', 'ghost', 'collapsible', 'forceRender', 'data-*', 'aria-*', 'loading_state', 'persistence', 'persisted_props', 'persistence_type']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'children', 'style', 'className', 'styles', 'classNames', 'title', 'isOpen', 'size', 'bordered', 'showArrow', 'ghost', 'collapsible', 'forceRender', 'data-*', 'aria-*', 'loading_state', 'persistence', 'persisted_props', 'persistence_type']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdCollapse, self).__init__(children=children, **args)
