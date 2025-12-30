# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args

ComponentType = typing.Union[
    str,
    int,
    float,
    Component,
    None,
    typing.Sequence[typing.Union[str, int, float, Component, None]],
]

NumberType = typing.Union[
    typing.SupportsFloat, typing.SupportsInt, typing.SupportsComplex
]


class AntdSplitter(Component):
    """An AntdSplitter component.
分隔面板组件AntdSplitter

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- layout (a value equal to: 'horizontal', 'vertical'; default 'horizontal'):
    布局方向，可选项有`'horizontal'`、`'vertical'`  默认值：`'horizontal'`.

- items (list of dicts; required):
    配置分隔面板子项.

    `items` is a list of dicts with keys:

    - key (string; optional):
        当前子项唯一识别`key`.

    - children (a list of or a singular dash component, string or number; optional):
        组件型，内嵌元素.

    - style (dict; optional):
        当前子项`css`样式.

    - className (string; optional):
        当前子项`css`类名.

    - defaultSize (number

      Or string; optional):
        初始面板尺寸，支持数字`px`或者文字`'百分比%'`类型.

    - size (number | string; optional):
        面板尺寸，支持数字`px`或者文字`'百分比%'`类型.

    - min (number | string; optional):
        最小尺寸，支持数字`px`或者文字`'百分比%'`类型.

    - max (number | string; optional):
        最大尺寸，支持数字`px`或者文字`'百分比%'`类型.

    - collapsible (dict; optional):
        是否可折叠  默认值：`False`.

        `collapsible` is a boolean | dict with keys:

        - start (boolean; optional)

        - end (boolean; optional)

    - resizable (boolean; optional):
        是否开启拖拽伸缩  默认值：`True`.

- lazy (boolean; default False):
    是否开启延迟渲染模式，开启后面板将在拖拽调整完成后才进行更新渲染  默认值：`False`.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配."""
    _children_props: typing.List[str] = ['items[].children']
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdSplitter'
    ItemsCollapsible = TypedDict(
        "ItemsCollapsible",
            {
            "start": NotRequired[bool],
            "end": NotRequired[bool]
        }
    )

    Items = TypedDict(
        "Items",
            {
            "key": NotRequired[str],
            "children": NotRequired[ComponentType],
            "style": NotRequired[dict],
            "className": NotRequired[str],
            "defaultSize": NotRequired[typing.Union[NumberType, str]],
            "size": NotRequired[typing.Union[NumberType, str]],
            "min": NotRequired[typing.Union[NumberType, str]],
            "max": NotRequired[typing.Union[NumberType, str]],
            "collapsible": NotRequired[typing.Union[bool, "ItemsCollapsible"]],
            "resizable": NotRequired[bool]
        }
    )


    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        layout: typing.Optional[Literal["horizontal", "vertical"]] = None,
        items: typing.Optional[typing.Sequence["Items"]] = None,
        lazy: typing.Optional[bool] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'style', 'className', 'layout', 'items', 'lazy', 'data-*', 'aria-*']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'style', 'className', 'layout', 'items', 'lazy', 'data-*', 'aria-*']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        for k in ['items']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(AntdSplitter, self).__init__(**args)

setattr(AntdSplitter, "__init__", _explicitize_args(AntdSplitter.__init__))
