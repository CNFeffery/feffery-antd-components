# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdDivider(Component):
    """An AntdDivider component.
分割线组件AntdDivider

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- children (a list of or a singular dash component, string or number; optional):
    组件型，分割线内嵌元素.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- style (dict; optional):
    当前组件css样式.

- innerTextOrientation (a value equal to: "left", "center", "right"; default 'center'):
    内嵌元素对齐方式，可选项有`'left'`、`'center'`、`'right'`  默认值：`'center'`.

- isDashed (boolean; default False):
    是否渲染为虚线形式  默认值：`False`.

- direction (a value equal to: "horizontal", "vertical"; default 'horizontal'):
    分割线方向，可选项有`'horizontal'`、`'vertical'`  默认值：`'horizontal'`.

- fontSize (string | number; optional):
    内嵌元素字体大小.

- lineColor (string; optional):
    分割线颜色.

- fontStyle (string; optional):
    内嵌元素字体风格.

- fontWeight (string; optional):
    内嵌元素字重.

- fontFamily (string; optional):
    内嵌元素字体.

- fontColor (string; optional):
    内嵌元素字体颜色.

- variant (a value equal to: 'dashed', 'dotted', 'solid'; default 'solid'):
    分割线变体，可选项有`'dashed'`（虚线）、`'dotted'`（点线）、`'solid'`（实线）
    默认值：`'solid'`.

- plain (boolean; default True):
    文字内容是否呈现为常规正文形式  默认值：`True`.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配.

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
    _type = 'AntdDivider'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, innerTextOrientation=Component.UNDEFINED, isDashed=Component.UNDEFINED, direction=Component.UNDEFINED, fontSize=Component.UNDEFINED, lineColor=Component.UNDEFINED, fontStyle=Component.UNDEFINED, fontWeight=Component.UNDEFINED, fontFamily=Component.UNDEFINED, fontColor=Component.UNDEFINED, variant=Component.UNDEFINED, plain=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'children', 'className', 'style', 'innerTextOrientation', 'isDashed', 'direction', 'fontSize', 'lineColor', 'fontStyle', 'fontWeight', 'fontFamily', 'fontColor', 'variant', 'plain', 'data-*', 'aria-*', 'loading_state']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'children', 'className', 'style', 'innerTextOrientation', 'isDashed', 'direction', 'fontSize', 'lineColor', 'fontStyle', 'fontWeight', 'fontFamily', 'fontColor', 'variant', 'plain', 'data-*', 'aria-*', 'loading_state']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdDivider, self).__init__(children=children, **args)
