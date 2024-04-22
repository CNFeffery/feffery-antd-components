# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdAnchor(Component):
    """An AntdAnchor component.
锚点组件AntdAnchor

Keyword arguments:

- id (string; optional):
    组件唯一id.

- affix (boolean; default True):
    是否开启固定模式  默认值：`True`.

- align (a value equal to: 'left', 'right'; default 'right'):
    锚点位置，可选项有`'left'`、`'right'`  默认值：`'right'`.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- bounds (number; default 5):
    锚点像素边距  默认值：`5`.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- clickedLink (dict; optional):
    监听锚点节点点击事件.

- containerId (string; optional):
    锚点目标容器id.

- data-* (string; optional):
    `data-*`格式属性通配.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- linkDict (optional):
    目录层次数据结构.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- offsetTop (number; optional):
    设置距离窗口顶部触发锚定效果的指定像素偏移量.

- style (dict; optional):
    当前组件css样式.

- targetOffset (number; optional):
    锚点位移偏移量，默认同参数offsetTop."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdAnchor'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, linkDict=Component.UNDEFINED, align=Component.UNDEFINED, containerId=Component.UNDEFINED, targetOffset=Component.UNDEFINED, affix=Component.UNDEFINED, bounds=Component.UNDEFINED, offsetTop=Component.UNDEFINED, clickedLink=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'affix', 'align', 'aria-*', 'bounds', 'className', 'clickedLink', 'containerId', 'data-*', 'key', 'linkDict', 'loading_state', 'offsetTop', 'style', 'targetOffset']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'affix', 'align', 'aria-*', 'bounds', 'className', 'clickedLink', 'containerId', 'data-*', 'key', 'linkDict', 'loading_state', 'offsetTop', 'style', 'targetOffset']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdAnchor, self).__init__(**args)
