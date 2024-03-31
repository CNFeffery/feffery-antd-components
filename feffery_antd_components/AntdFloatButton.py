# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdFloatButton(Component):
    """An AntdFloatButton component.
悬浮按钮组件AntdFloatButton

Keyword arguments:

- id (string; optional):
    组件唯一id.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- description (a list of or a singular dash component, string or number; optional):
    组件型，按钮内嵌元素，仅`shape='square'`时可用.

- href (string; optional):
    按钮点击跳转链接地址.

- icon (a list of or a singular dash component, string or number; optional):
    组件型，按钮内嵌前缀图标元素.

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

- nClicks (number; default 0):
    按钮累计点击次数，用于监听按钮点击行为  默认值：`0`.

- shape (a value equal to: 'circle', 'square'; default 'circle'):
    按钮形状，可选项有`'circle'`、`'square'`  默认值：`'circle'`.

- style (dict; optional):
    当前组件css样式.

- target (string; default '_blank'):
    按钮点击跳转链接方式  默认值：`'_blank'`.

- tooltip (a list of or a singular dash component, string or number; optional):
    组件型，按钮额外气泡卡片内容.

- type (a value equal to: 'default', 'primary'; default 'default'):
    按钮类型，可选项有`'default'`、`'primary'`  默认值：`'default'`."""
    _children_props = ['icon', 'description', 'tooltip']
    _base_nodes = ['icon', 'description', 'tooltip', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdFloatButton'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, icon=Component.UNDEFINED, description=Component.UNDEFINED, tooltip=Component.UNDEFINED, type=Component.UNDEFINED, shape=Component.UNDEFINED, href=Component.UNDEFINED, target=Component.UNDEFINED, nClicks=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'description', 'href', 'icon', 'key', 'loading_state', 'nClicks', 'shape', 'style', 'target', 'tooltip', 'type']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'description', 'href', 'icon', 'key', 'loading_state', 'nClicks', 'shape', 'style', 'target', 'tooltip', 'type']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdFloatButton, self).__init__(**args)
