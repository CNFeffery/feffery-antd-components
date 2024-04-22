# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdPageHeader(Component):
    """An AntdPageHeader component.
页头组件AntdPageHeader

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    组件型，内嵌元素.

- id (string; optional):
    组件唯一id.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- backClicks (number; default 0):
    返回按钮累计点击次数，用于监听返回按钮点击行为  默认值：`0`.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- data-* (string; optional):
    `data-*`格式属性通配.

- ghost (boolean; default False):
    是否开启透明背景模式  默认值：`False`.

- historyBackDisabled (boolean; default False):
    是否禁用点击返回按钮回退上一地址的功能  默认值：`False`.

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

- showBackIcon (boolean; default True):
    是否渲染返回按钮  默认值：`True`.

- style (dict; optional):
    当前组件css样式.

- subTitle (a list of or a singular dash component, string or number; optional):
    组件型，页头副标题内容.

- title (a list of or a singular dash component, string or number; optional):
    组件型，页头标题内容."""
    _children_props = ['title', 'subTitle']
    _base_nodes = ['title', 'subTitle', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdPageHeader'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, title=Component.UNDEFINED, subTitle=Component.UNDEFINED, showBackIcon=Component.UNDEFINED, historyBackDisabled=Component.UNDEFINED, backClicks=Component.UNDEFINED, ghost=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'aria-*', 'backClicks', 'className', 'data-*', 'ghost', 'historyBackDisabled', 'key', 'loading_state', 'showBackIcon', 'style', 'subTitle', 'title']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'aria-*', 'backClicks', 'className', 'data-*', 'ghost', 'historyBackDisabled', 'key', 'loading_state', 'showBackIcon', 'style', 'subTitle', 'title']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdPageHeader, self).__init__(children=children, **args)
