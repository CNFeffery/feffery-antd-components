# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdMessage(Component):
    """An AntdMessage component.
全局提示组件AntdMessage

Keyword arguments:

- id (string; optional):
    组件唯一id.

- className (string; optional):
    当前组件css类名.

- content (string; optional):
    提示信息内容.

- duration (number; default 3):
    提示信息自动消失对应的延时，单位：秒，设置为`0`时不会自动消失  默认值：`3`.

- icon (string; optional):
    自定义前缀图标，同`AntdIcon`的`icon`参数.

- iconRenderer (a value equal to: 'AntdIcon', 'fontawesome'; default 'AntdIcon'):
    自定义前缀图标渲染方式，可选项有`'AntdIcon'`、`'fontawesome'`.

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

- maxCount (number; optional):
    最多允许同时出现的提示信息数量.

- style (dict; optional):
    当前组件css样式.

- top (number; default 8):
    提示信息距离顶端的像素距离  默认值：`8`.

- type (a value equal to: 'default', 'success', 'error', 'info', 'warning'; default 'default'):
    提示信息类型，可选项有`'default'`、`'success'`、`'error'`、`'info'`、`'warning'`
    默认值：'default'.

- underCompatibilityMode (boolean; optional):
    当前消息提示组件是否位于设置了`compatibilityMode=True`的`AntdConfigProvider`内部."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdMessage'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, content=Component.UNDEFINED, type=Component.UNDEFINED, duration=Component.UNDEFINED, top=Component.UNDEFINED, maxCount=Component.UNDEFINED, icon=Component.UNDEFINED, iconRenderer=Component.UNDEFINED, underCompatibilityMode=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'content', 'duration', 'icon', 'iconRenderer', 'key', 'loading_state', 'maxCount', 'style', 'top', 'type', 'underCompatibilityMode']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'content', 'duration', 'icon', 'iconRenderer', 'key', 'loading_state', 'maxCount', 'style', 'top', 'type', 'underCompatibilityMode']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdMessage, self).__init__(**args)
