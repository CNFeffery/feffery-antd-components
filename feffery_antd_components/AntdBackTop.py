# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdBackTop(Component):
    """An AntdBackTop component.
回到顶部组件AntdBackTop

Keyword arguments:

- id (string; optional):
    组件唯一id.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- containerId (string; optional):
    滚动事件监听的特定目标容器id.

- containerSelector (string; optional):
    滚动事件监听的特定目标容器js选择代码，优先级低于containerId.

- data-* (string; optional):
    `data-*`格式属性通配.

- duration (number; default 0.45):
    回到顶部过程耗时，单位：秒  默认值：`0.45`.

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

- style (dict; optional):
    当前组件css样式.

- visibilityHeight (number; default 400):
    回到顶部按钮显示时对应的页面滚动像素高度阈值  默认值：`400`."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdBackTop'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, duration=Component.UNDEFINED, visibilityHeight=Component.UNDEFINED, containerId=Component.UNDEFINED, containerSelector=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'aria-*', 'className', 'containerId', 'containerSelector', 'data-*', 'duration', 'key', 'loading_state', 'style', 'visibilityHeight']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'aria-*', 'className', 'containerId', 'containerSelector', 'data-*', 'duration', 'key', 'loading_state', 'style', 'visibilityHeight']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdBackTop, self).__init__(**args)
