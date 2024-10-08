# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdEditorLayout(Component):
    """An AntdEditorLayout component.
编辑器布局组件AntdEditorLayout

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- style (dict; optional):
    当前组件css样式.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- header (dict; optional):
    配置页首布局内容，设置为`False`时不显示.

    `header` is a dict with keys:

    - title (a list of or a singular dash component, string or number; optional):
        页首标题元素.

    - extra (a list of or a singular dash component, string or number; optional):
        页首额外操作区元素.

    - style (dict; optional):
        页首css样式.

    - className (string; optional):
        页首css类名.

    - children (a list of or a singular dash component, string or number; optional):
        页首主要区域子元素.

    - themeType (a value equal to: 'ghost', 'block', 'pure'; optional):
        页首主题类型，可选的有`'ghost'`、`'block'`、`'pure'`. | boolean

- footer (dict; optional):
    配置页脚布局内容，设置为`False`时不显示.

    `footer` is a dict with keys:

    - title (a list of or a singular dash component, string or number; optional):
        页脚标题元素.

    - extra (a list of or a singular dash component, string or number; optional):
        页脚额外操作区元素.

    - style (dict; optional):
        页脚css样式.

    - className (string; optional):
        页脚css类名.

    - children (a list of or a singular dash component, string or number; optional):
        页脚主要区域子元素.

    - themeType (a value equal to: 'ghost', 'block', 'pure'; optional):
        页脚主题类型，可选的有`'ghost'`、`'block'`、`'pure'`. | boolean

- leftPannel (dict; optional):
    配置左侧面板布局内容，设置为`False`时不显示.

    `leftPannel` is a dict with keys:

    - children (a list of or a singular dash component, string or number; optional):
        面板子元素内容.

    - direction (a value equal to: 'horizontal', 'vertical'; optional):
        面板方向，可选的有`'horizontal'`、`'vertical'`.

    - minWidth (number; optional):
        面板最小像素宽度.

    - minHeight (number; optional):
        面板最小像素高度.

    - maxWidth (number; optional):
        面板最大像素宽度.

    - maxHeight (number; optional):
        面板最大像素高度.

    - style (dict; optional):
        面板css样式.

    - className (string; optional):
        面板css类名.

    - themeType (a value equal to: 'ghost', 'block', 'pure'; optional):
        面板主题类型，可选的有`'ghost'`、`'block'`、`'pure'`. | boolean

- rightPannel (dict; optional):
    配置右侧面板布局内容，设置为`False`时不显示.

    `rightPannel` is a dict with keys:

    - children (a list of or a singular dash component, string or number; optional):
        面板子元素内容.

    - direction (a value equal to: 'horizontal', 'vertical'; optional):
        面板方向，可选的有`'horizontal'`、`'vertical'`.

    - minWidth (number; optional):
        面板最小像素宽度.

    - minHeight (number; optional):
        面板最小像素高度.

    - maxWidth (number; optional):
        面板最大像素宽度.

    - maxHeight (number; optional):
        面板最大像素高度.

    - style (dict; optional):
        面板css样式.

    - className (string; optional):
        面板css类名.

    - themeType (a value equal to: 'ghost', 'block', 'pure'; optional):
        面板主题类型，可选的有`'ghost'`、`'block'`、`'pure'`. | boolean

- bottomPannel (dict; optional):
    配置底部面板布局内容，设置为`False`时不显示.

    `bottomPannel` is a dict with keys:

    - children (a list of or a singular dash component, string or number; optional):
        面板子元素内容.

    - direction (a value equal to: 'horizontal', 'vertical'; optional):
        面板方向，可选的有`'horizontal'`、`'vertical'`.

    - minWidth (number; optional):
        面板最小像素宽度.

    - minHeight (number; optional):
        面板最小像素高度.

    - maxWidth (number; optional):
        面板最大像素宽度.

    - maxHeight (number; optional):
        面板最大像素高度.

    - style (dict; optional):
        面板css样式.

    - className (string; optional):
        面板css类名.

    - themeType (a value equal to: 'ghost', 'block', 'pure'; optional):
        面板主题类型，可选的有`'ghost'`、`'block'`、`'pure'`. | boolean

- centerPannel (dict; optional):
    配置中心面板布局内容，设置为`False`时不显示.

    `centerPannel` is a dict with keys:

    - children (a list of or a singular dash component, string or number; optional):
        面板子元素内容.

    - direction (a value equal to: 'horizontal', 'vertical'; optional):
        面板方向，可选的有`'horizontal'`、`'vertical'`.

    - minWidth (number; optional):
        面板最小像素宽度.

    - minHeight (number; optional):
        面板最小像素高度.

    - maxWidth (number; optional):
        面板最大像素宽度.

    - maxHeight (number; optional):
        面板最大像素高度.

    - style (dict; optional):
        面板css样式.

    - className (string; optional):
        面板css类名.

    - themeType (a value equal to: 'ghost', 'block', 'pure'; optional):
        面板主题类型，可选的有`'ghost'`、`'block'`、`'pure'`. | boolean

- type (a value equal to: 'Left&Right', 'LeftFull', 'RightFull', 'Bottom'; optional):
    布局类型，可选的有`'Left&Right'`、`'LeftFull'`、`'RightFull'`、`'Bottom'`.

- themeType (a value equal to: 'ghost', 'block', 'pure'; optional):
    整体主题类型，可选的有`'ghost'`、`'block'`、`'pure'`.

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
    _children_props = ['header.title', 'header.extra', 'header.children', 'footer.title', 'footer.extra', 'footer.children', 'leftPannel.children', 'rightPannel.children', 'bottomPannel.children', 'centerPannel.children']
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdEditorLayout'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, header=Component.UNDEFINED, footer=Component.UNDEFINED, leftPannel=Component.UNDEFINED, rightPannel=Component.UNDEFINED, bottomPannel=Component.UNDEFINED, centerPannel=Component.UNDEFINED, type=Component.UNDEFINED, themeType=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'style', 'className', 'header', 'footer', 'leftPannel', 'rightPannel', 'bottomPannel', 'centerPannel', 'type', 'themeType', 'data-*', 'aria-*', 'loading_state']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'style', 'className', 'header', 'footer', 'leftPannel', 'rightPannel', 'bottomPannel', 'centerPannel', 'type', 'themeType', 'data-*', 'aria-*', 'loading_state']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdEditorLayout, self).__init__(**args)
