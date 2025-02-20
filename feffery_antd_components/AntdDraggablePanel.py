# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
import numbers # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args
try:
    from dash.development.base_component import ComponentType # noqa: F401
except ImportError:
    ComponentType = typing.TypeVar("ComponentType", bound=Component)


class AntdDraggablePanel(Component):
    """An AntdDraggablePanel component.
可拖拽面板组件AntdDraggablePanel

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- children (a list of or a singular dash component, string or number; optional):
    组件型，内嵌元素.

- style (dict; optional):
    当前组件css样式.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- mode (a value equal to: 'fixed', 'float'; default 'fixed'):
    设置面板模式，可选项有`'fixed'`（固定模式）、`'float'`（浮动窗口模式）  默认值：`'fixed'`.

- defaultSize (dict; optional):
    设置当前面板默认尺寸.

    `defaultSize` is a dict with keys:

    - width (number | string; optional):
        设置像素宽度数值，或css宽度字符串.

    - height (number | string; optional):
        设置像素高度数值，或css高度字符串.

- defaultPosition (dict; optional):
    设置当前面板默认位置.

    `defaultPosition` is a dict with keys:

    - x (number; optional):
        设置距离文档左端像素距离.

    - y (number; optional):
        设置距离文档顶端像素距离.

- placement (a value equal to: 'right', 'left', 'top', 'bottom'; default 'right'):
    固定模式下，用于设置面板朝向，可选项有`'right'`、`'left'`、`'top'`、`'bottom'`
    默认值：`'right'`.

- minWidth (number; optional):
    面板最小像素宽度.

- minHeight (number; optional):
    面板最小像素高度.

- maxWidth (number; optional):
    面板最大像素宽度.

- maxHeight (number; optional):
    面板最大像素高度.

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

- expandable (boolean; default True):
    面板是否可展开  默认值：`True`.

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
    _type = 'AntdDraggablePanel'
    DefaultSize = TypedDict(
        "DefaultSize",
            {
            "width": NotRequired[typing.Union[typing.Union[int, float, numbers.Number], str]],
            "height": NotRequired[typing.Union[typing.Union[int, float, numbers.Number], str]]
        }
    )

    DefaultPosition = TypedDict(
        "DefaultPosition",
            {
            "x": NotRequired[typing.Union[int, float, numbers.Number]],
            "y": NotRequired[typing.Union[int, float, numbers.Number]]
        }
    )

    Resize = TypedDict(
        "Resize",
            {
            "bottom": NotRequired[bool],
            "bottomLeft": NotRequired[bool],
            "bottomRight": NotRequired[bool],
            "left": NotRequired[bool],
            "right": NotRequired[bool],
            "top": NotRequired[bool],
            "topLeft": NotRequired[bool],
            "topRight": NotRequired[bool]
        }
    )

    LoadingState = TypedDict(
        "LoadingState",
            {
            "is_loading": NotRequired[bool],
            "prop_name": NotRequired[str],
            "component_name": NotRequired[str]
        }
    )

    @_explicitize_args
    def __init__(
        self,
        children: typing.Optional[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[dict] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        mode: typing.Optional[Literal["fixed", "float"]] = None,
        defaultSize: typing.Optional["DefaultSize"] = None,
        defaultPosition: typing.Optional["DefaultPosition"] = None,
        placement: typing.Optional[Literal["right", "left", "top", "bottom"]] = None,
        minWidth: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        minHeight: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        maxWidth: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        maxHeight: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        resize: typing.Optional[typing.Union[bool, "Resize"]] = None,
        expandable: typing.Optional[bool] = None,
        loading_state: typing.Optional["LoadingState"] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'children', 'style', 'className', 'mode', 'defaultSize', 'defaultPosition', 'placement', 'minWidth', 'minHeight', 'maxWidth', 'maxHeight', 'resize', 'expandable', 'data-*', 'aria-*', 'loading_state']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'children', 'style', 'className', 'mode', 'defaultSize', 'defaultPosition', 'placement', 'minWidth', 'minHeight', 'maxWidth', 'maxHeight', 'resize', 'expandable', 'data-*', 'aria-*', 'loading_state']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdDraggablePanel, self).__init__(children=children, **args)
