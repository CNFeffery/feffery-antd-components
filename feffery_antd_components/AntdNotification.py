# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdNotification(Component):
    """An AntdNotification component.
通知提醒框组件AntdNotification

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- style (dict; optional):
    当前组件css样式.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- message (string; optional):
    通知提醒主要信息.

- description (string; optional):
    通知提醒描述信息.

- type (a value equal to: 'default', 'success', 'error', 'info', 'warning'; default 'default'):
    通知提醒类型，可选项有`'default'`、`'success'`、`'error'`、`'info'`、`'warning'`
    默认值：`'default'`.

- placement (a value equal to: 'top', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'; default 'topRight'):
    通知提醒框在屏幕中的弹出位置，可选项有`'top'`、`'bottom'`、`'topLeft'`、`'topRight'`、`'bottomLeft'`、`'bottomRight'`
    默认值：`'topRight'`.

- top (number; default 24):
    当通知从顶部弹出时，设置距离顶部的像素距离  默认值：`24`.

- bottom (number; default 24):
    当通知从底部弹出时，设置距离底部的像素距离  默认值：`24`.

- duration (number; default 4.5):
    通知从显示到自动消失的时长，单位：秒，当传入`None`时会一直显示  默认值：`4.5`.

- closable (boolean; default True):
    是否显示关闭按钮  默认值：`True`.

- closeButton (dict; optional):
    配置右下方关闭按钮相关参数，默认不显示关闭按钮.

    `closeButton` is a dict with keys:

    - content (string; optional):
        按钮内容.

    - style (dict; optional):
        按钮css样式.

    - className (string; optional):
        按钮css类名.

    - type (a value equal to: 'default', 'primary', 'ghost', 'dashed', 'link', 'text'; optional):
        按钮类型，可选项有`'default'`、`'primary'`、`'ghost'`、`'dashed'`、`'link'`、`'text'`
        默认值：`'default'`.

    - danger (boolean; optional):
        按钮是否呈现危险状态  默认值：`False`.

- underCompatibilityMode (boolean; optional):
    当前通知提醒框组件是否位于设置了`compatibilityMode=True`的`AntdConfigProvider`内部.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

    - component_name (string; optional):
        Holds the name of the component that is loading."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdNotification'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, message=Component.UNDEFINED, description=Component.UNDEFINED, type=Component.UNDEFINED, placement=Component.UNDEFINED, top=Component.UNDEFINED, bottom=Component.UNDEFINED, duration=Component.UNDEFINED, closable=Component.UNDEFINED, closeButton=Component.UNDEFINED, underCompatibilityMode=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'style', 'className', 'message', 'description', 'type', 'placement', 'top', 'bottom', 'duration', 'closable', 'closeButton', 'underCompatibilityMode', 'loading_state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'style', 'className', 'message', 'description', 'type', 'placement', 'top', 'bottom', 'duration', 'closable', 'closeButton', 'underCompatibilityMode', 'loading_state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdNotification, self).__init__(**args)
