# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdAlert(Component):
    """An AntdAlert component.
警告提示组件AntdAlert

Keyword arguments:

- id (string; optional):
    组件唯一id.

- action (a list of or a singular dash component, string or number; optional):
    组件型，定义右上角额外操作区元素.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- banner (boolean; default False):
    是否用作顶部公告  默认值：`False`.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- closable (boolean; default False):
    是否可关闭  默认值：`False`.

- data-* (string; optional):
    `data-*`格式属性通配.

- description (a list of or a singular dash component, string or number; optional):
    额外提示信息内容.

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

- message (a list of or a singular dash component, string or number; optional):
    主要提示信息内容.

- messageRenderMode (a value equal to: 'default', 'loop-text', 'marquee'; default 'default'):
    渲染模式，可选项有`'default'`、`'loop-text'`、`'marquee'`  默认值：`'default'`.

- showIcon (boolean; default False):
    是否显示额外图标  默认值：`False`.

- style (dict; optional):
    当前组件css样式.

- type (a value equal to: 'success', 'info', 'warning', 'error'; default 'info'):
    提示信息类型，可选项有`'success'`、`'info'`、`'warning'`、`'error'`
    默认值：`'info'`."""
    _children_props = ['message', 'description', 'action']
    _base_nodes = ['message', 'description', 'action', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdAlert'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, message=Component.UNDEFINED, description=Component.UNDEFINED, type=Component.UNDEFINED, showIcon=Component.UNDEFINED, closable=Component.UNDEFINED, messageRenderMode=Component.UNDEFINED, action=Component.UNDEFINED, banner=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'action', 'aria-*', 'banner', 'className', 'closable', 'data-*', 'description', 'key', 'loading_state', 'message', 'messageRenderMode', 'showIcon', 'style', 'type']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'action', 'aria-*', 'banner', 'className', 'closable', 'data-*', 'description', 'key', 'loading_state', 'message', 'messageRenderMode', 'showIcon', 'style', 'type']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdAlert, self).__init__(**args)
