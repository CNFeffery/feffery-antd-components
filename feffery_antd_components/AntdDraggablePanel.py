# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdDraggablePanel(Component):
    """An AntdDraggablePanel component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    内部组件元素.

- id (string; optional):
    组件id.

- className (string | dict; optional):
    css类名.

- defaultPosition (dict; optional):
    设置当前面板默认位置.

    `defaultPosition` is a dict with keys:

    - x (number; optional):
        设置距离文档左端像素距离.

    - y (number; optional):
        设置距离文档顶端像素距离.

- defaultSize (dict; optional):
    设置当前面板默认尺寸.

    `defaultSize` is a dict with keys:

    - height (number | string; optional):
        设置像素高度数值，或css高度字符串.

    - width (number | string; optional):
        设置像素宽度数值，或css宽度字符串.

- expandable (boolean; default True):
    面板是否可展开  默认：True.

- key (string; optional):
    强制刷新用.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- maxHeight (number; optional):
    面板最大像素高度.

- maxWidth (number; optional):
    面板最大像素宽度.

- minHeight (number; optional):
    面板最小像素高度.

- minWidth (number; optional):
    面板最小像素宽度.

- mode (a value equal to: 'fixed', 'float'; default 'fixed'):
    设置面板模式，可选的有'fixed'（固定模式）、'float'（浮动窗口模式）  默认：'fixed'.

- placement (a value equal to: 'right', 'left', 'top', 'bottom'; default 'right'):
    固定模式下，用于设置面板朝向，可选的有'right'、'left'、'top'、'bottom'  默认：'right'.

- resize (dict; optional):
    配置尺寸可调整性，可独立控制各个方向，也可直接控制所有方向是否可调整尺寸.

    `resize` is a boolean | dict with keys:

    - bottom (boolean; optional)

    - bottomLeft (boolean; optional)

    - bottomRight (boolean; optional)

    - left (boolean; optional)

    - right (boolean; optional)

    - top (boolean; optional)

    - topLeft (boolean; optional)

    - topRight (boolean; optional)

- style (dict; optional):
    css样式."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdDraggablePanel'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, key=Component.UNDEFINED, mode=Component.UNDEFINED, defaultSize=Component.UNDEFINED, defaultPosition=Component.UNDEFINED, placement=Component.UNDEFINED, minWidth=Component.UNDEFINED, minHeight=Component.UNDEFINED, maxWidth=Component.UNDEFINED, maxHeight=Component.UNDEFINED, resize=Component.UNDEFINED, expandable=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'defaultPosition', 'defaultSize', 'expandable', 'key', 'loading_state', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'mode', 'placement', 'resize', 'style']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'defaultPosition', 'defaultSize', 'expandable', 'key', 'loading_state', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'mode', 'placement', 'resize', 'style']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdDraggablePanel, self).__init__(children=children, **args)
