# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdFloatButton(Component):
    """An AntdFloatButton component.


Keyword arguments:

- id (string; optional)

- className (string | dict; optional)

- description (a list of or a singular dash component, string or number; optional):
    组件型，用于设置文字及其他内容，仅shape='square'时可用.

- href (string; optional):
    为按钮设置点击后跳转的链接地址.

- icon (a list of or a singular dash component, string or number; optional):
    组件型，用于设置自定义图标元素.

- key (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- nClicks (number; default 0):
    监听当前悬浮按钮累计点击次数.

- shape (a value equal to: 'circle', 'square'; default 'circle'):
    设置按钮形状，可选的有'circle'、'square'  默认：'circle'.

- style (dict; optional)

- target (string; default '_blank'):
    设置链接点击跳转行为  默认：'_blank'.

- tooltip (a list of or a singular dash component, string or number; optional):
    组件型，用于设置附加气泡卡片的内部元素.

- type (a value equal to: 'default', 'primary'; default 'default'):
    设置按钮类型，可选的有'default'、'primary'  默认：'default'."""
    _children_props = ['icon', 'description', 'tooltip']
    _base_nodes = ['icon', 'description', 'tooltip', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdFloatButton'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, icon=Component.UNDEFINED, description=Component.UNDEFINED, tooltip=Component.UNDEFINED, type=Component.UNDEFINED, shape=Component.UNDEFINED, href=Component.UNDEFINED, target=Component.UNDEFINED, nClicks=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'description', 'href', 'icon', 'key', 'loading_state', 'nClicks', 'shape', 'style', 'target', 'tooltip', 'type']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'description', 'href', 'icon', 'key', 'loading_state', 'nClicks', 'shape', 'style', 'target', 'tooltip', 'type']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdFloatButton, self).__init__(**args)
