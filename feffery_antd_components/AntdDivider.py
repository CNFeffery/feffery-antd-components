# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdDivider(Component):
    """An AntdDivider component.
分割线组件AntdDivider

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    组件型，分割线内嵌元素.

- id (string; optional):
    组件唯一id.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- data-* (string; optional):
    `data-*`格式属性通配.

- direction (a value equal to: "horizontal", "vertical"; default 'horizontal'):
    分割线方向，可选项有`'horizontal'`、`'vertical'`  默认值：`'horizontal'`.

- fontColor (string; optional):
    内嵌元素字体颜色.

- fontFamily (string; optional):
    内嵌元素字体.

- fontSize (string | number; optional):
    内嵌元素字体大小.

- fontStyle (string; optional):
    内嵌元素字体风格.

- fontWeight (string; optional):
    内嵌元素字重.

- innerTextOrientation (a value equal to: "left", "center", "right"; default 'center'):
    内嵌元素对齐方式，可选项有`'left'`、`'center'`、`'right'`  默认值：`'center'`.

- isDashed (boolean; default False):
    是否渲染为虚线形式  默认值：`False`.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- lineColor (string; optional):
    分割线颜色.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- style (dict; optional):
    当前组件css样式."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdDivider'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, innerTextOrientation=Component.UNDEFINED, isDashed=Component.UNDEFINED, direction=Component.UNDEFINED, fontSize=Component.UNDEFINED, lineColor=Component.UNDEFINED, fontStyle=Component.UNDEFINED, fontWeight=Component.UNDEFINED, fontFamily=Component.UNDEFINED, fontColor=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'aria-*', 'className', 'data-*', 'direction', 'fontColor', 'fontFamily', 'fontSize', 'fontStyle', 'fontWeight', 'innerTextOrientation', 'isDashed', 'key', 'lineColor', 'loading_state', 'style']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'aria-*', 'className', 'data-*', 'direction', 'fontColor', 'fontFamily', 'fontSize', 'fontStyle', 'fontWeight', 'innerTextOrientation', 'isDashed', 'key', 'lineColor', 'loading_state', 'style']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdDivider, self).__init__(children=children, **args)
