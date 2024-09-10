# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdFloatButtonGroup(Component):
    """An AntdFloatButtonGroup component.
悬浮按钮组组件AntdFloatButtonGroup

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- children (a list of or a singular dash component, string or number; optional):
    当前悬浮按钮组内悬浮按钮.

- style (dict; optional):
    当前组件css样式.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- icon (a list of or a singular dash component, string or number; optional):
    图标元素.

- description (a list of or a singular dash component, string or number; optional):
    描述内容.

- tooltip (a list of or a singular dash component, string or number; optional):
    气泡卡片内容.

- type (a value equal to: 'default', 'primary'; default 'default'):
    按钮类型，可选项有`'default'`、`'primary'`  默认值：`'default'`.

- shape (a value equal to: 'circle', 'square'; default 'circle'):
    内部各悬浮按钮形状，可选项有`'circle'`、`'square'`  默认值：`'circle'`.

- trigger (a value equal to: 'click', 'hover'; optional):
    菜单展开模式触发方式，可选项有`'click'`、`'hover'`.

- open (boolean; optional):
    设置或监听当前悬浮按钮组展开状态.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

    - component_name (string; optional):
        Holds the name of the component that is loading."""
    _children_props = ['icon', 'description', 'tooltip']
    _base_nodes = ['icon', 'description', 'tooltip', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdFloatButtonGroup'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, icon=Component.UNDEFINED, description=Component.UNDEFINED, tooltip=Component.UNDEFINED, type=Component.UNDEFINED, shape=Component.UNDEFINED, trigger=Component.UNDEFINED, open=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'children', 'style', 'className', 'icon', 'description', 'tooltip', 'type', 'shape', 'trigger', 'open', 'loading_state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'children', 'style', 'className', 'icon', 'description', 'tooltip', 'type', 'shape', 'trigger', 'open', 'loading_state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdFloatButtonGroup, self).__init__(children=children, **args)
