# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
import numbers # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args
try:
    from dash.development.base_component import ComponentType # noqa: F401
except ImportError:
    ComponentType = typing.TypeVar("ComponentType", bound=Component)


class AntdTimeline(Component):
    """An AntdTimeline component.
时间轴组件AntdTimeline

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- style (dict; optional):
    当前组件css样式.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- items (list of dicts; required):
    必填，定义时间轴节点.

    `items` is a list of dicts with keys:

    - content (a list of or a singular dash component, string or number; optional):
        组件型，当前节点正文内容.

    - color (string; optional):
        当前节点颜色，可用于表达节点状态，常用方案有`'blue'`（进行中或默认状态）、`'green'`（已完成状态）、`'red'`（警告或错误状态）、`'grey'`（未完成或失效状态）.

    - icon (a list of or a singular dash component, string or number; optional):
        组件型，自定义作为图标的元素.

    - label (a list of or a singular dash component, string or number; optional):
        组件型，当前节点标签内容.

    - position (a value equal to: 'left', 'right'; optional):
        当前节点位置，可选项有`'left'`、`'right'`.

- mode (a value equal to: 'left', 'alternate', 'right'; default 'left'):
    时间轴与内容的相对位置，可选项有`'left'`、`'alternate'`、`'right'`.

- pending (a list of or a singular dash component, string or number; optional):
    组件型，设置时间轴末尾额外幽灵节点标题内容，默认不添加.

- pendingDot (a list of or a singular dash component, string or number; optional):
    组件型，自定义幽灵节点图标.

- reverse (boolean; default False):
    是否逆序排列时间轴  默认值：`False`.

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
    _children_props = ['items[].content', 'items[].icon', 'items[].label', 'pending', 'pendingDot']
    _base_nodes = ['pending', 'pendingDot', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdTimeline'
    Items = TypedDict(
        "Items",
            {
            "content": NotRequired[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]],
            "color": NotRequired[str],
            "icon": NotRequired[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]],
            "label": NotRequired[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]],
            "position": NotRequired[Literal["left", "right"]]
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
        id: typing.Optional[str] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[dict] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        items: typing.Optional[typing.Sequence["Items"]] = None,
        mode: typing.Optional[Literal["left", "alternate", "right"]] = None,
        pending: typing.Optional[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]] = None,
        pendingDot: typing.Optional[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]] = None,
        reverse: typing.Optional[bool] = None,
        loading_state: typing.Optional["LoadingState"] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'style', 'className', 'items', 'mode', 'pending', 'pendingDot', 'reverse', 'data-*', 'aria-*', 'loading_state']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'style', 'className', 'items', 'mode', 'pending', 'pendingDot', 'reverse', 'data-*', 'aria-*', 'loading_state']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        for k in ['items']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(AntdTimeline, self).__init__(**args)
