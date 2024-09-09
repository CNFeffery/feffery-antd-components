# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdStatistic(Component):
    """An AntdStatistic component.
统计数值组件AntdStatistic

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- style (dict; optional):
    当前组件css样式.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- value (number | string | a list of or a singular dash component, string or number; optional):
    支持组件型，要展示的数值.

- showGroupSeparator (boolean; default True):
    是否为数值型`value`添加千分位符  默认值：`True`.

- precision (number; optional):
    针对数值型`value`，设置数值精度.

- prefix (a list of or a singular dash component, string or number; optional):
    组件型，数值前缀内容.

- suffix (a list of or a singular dash component, string or number; optional):
    组件型，数值后缀内容.

- title (a list of or a singular dash component, string or number; optional):
    组件型，标题内容.

- titleTooltip (string; optional):
    为标题内容添加额外鼠标悬停提示信息.

- valueStyle (dict; optional):
    数值内容css样式.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading."""
    _children_props = ['value', 'prefix', 'suffix', 'title']
    _base_nodes = ['value', 'prefix', 'suffix', 'title', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdStatistic'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, value=Component.UNDEFINED, showGroupSeparator=Component.UNDEFINED, precision=Component.UNDEFINED, prefix=Component.UNDEFINED, suffix=Component.UNDEFINED, title=Component.UNDEFINED, titleTooltip=Component.UNDEFINED, valueStyle=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'style', 'className', 'value', 'showGroupSeparator', 'precision', 'prefix', 'suffix', 'title', 'titleTooltip', 'valueStyle', 'data-*', 'aria-*', 'loading_state']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'style', 'className', 'value', 'showGroupSeparator', 'precision', 'prefix', 'suffix', 'title', 'titleTooltip', 'valueStyle', 'data-*', 'aria-*', 'loading_state']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdStatistic, self).__init__(**args)
