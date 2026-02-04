# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401

from dash.development.base_component import Component, _explicitize_args
from typing_extensions import Literal, NotRequired, TypedDict  # noqa: F401

ComponentSingleType = typing.Union[str, int, float, Component, None]
ComponentType = typing.Union[
    ComponentSingleType,
    typing.Sequence[ComponentSingleType],
]

NumberType = typing.Union[typing.SupportsFloat, typing.SupportsInt, typing.SupportsComplex]


class AntdFloatButtonGroup(Component):
    """An AntdFloatButtonGroup component.
    悬浮按钮组组件AntdFloatButtonGroup

    Keyword arguments:

    - id (string; optional):
        组件唯一id.

    - key (string; optional):
        对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

    - children (a list of or a singular dash component, string or number; optional):
        当前悬浮按钮组内悬浮按钮.

    - className (string | dict; optional):
        当前组件css类名，支持[动态css](/advanced-classname).

    - icon (a list of or a singular dash component, string or number; optional):
        图标元素.

    - description (a list of or a singular dash component, string or number; optional):
        描述内容.

    - tooltip (dict; optional):
        气泡卡片内容.

        `tooltip` is a a list of or a singular dash component, string or
        number | dict with keys:

        - title (a list of or a singular dash component, string or number; optional):
            气泡卡片内容.

        - color (string; optional):
            气泡卡片背景色.

        - placement (a value equal to: 'top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom'; optional):
            气泡卡片展开方向，可选项有`'top'`、`'left'`、`'right'`、`'bottom'`、`'topLeft'`、`'topRight'`、`'bottomLeft'`、`'bottomRight'`、`'leftTop'`、`'leftBottom'`、`'rightTop'`、`'rightBottom'`.

    - type (a value equal to: 'default', 'primary'; default 'default'):
        按钮类型，可选项有`'default'`、`'primary'` 默认值：`'default'`.

    - shape (a value equal to: 'circle', 'square'; default 'circle'):
        内部各悬浮按钮形状，可选项有`'circle'`、`'square'` 默认值：`'circle'`.

    - trigger (a value equal to: 'click', 'hover'; optional):
        菜单展开模式触发方式，可选项有`'click'`、`'hover'`.

    - placement (a value equal to: 'top', 'right', 'bottom', 'left'; optional):
        菜单展开方向，可选项有`'top'`、`'right'`、`'bottom'`、`'left'`.

    - open (boolean; optional):
        设置或监听当前悬浮按钮组展开状态.

    - data-* (string; optional):
        `data-*`格式属性通配.

    - aria-* (string; optional):
        `aria-*`格式属性通配."""

    _children_props: typing.List[str] = ['icon', 'description', 'tooltip', 'tooltip.title']
    _base_nodes = ['icon', 'description', 'tooltip', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdFloatButtonGroup'
    Tooltip = TypedDict(
        'Tooltip',
        {
            'title': NotRequired[ComponentType],
            'color': NotRequired[str],
            'placement': NotRequired[
                Literal[
                    'top',
                    'left',
                    'right',
                    'bottom',
                    'topLeft',
                    'topRight',
                    'bottomLeft',
                    'bottomRight',
                    'leftTop',
                    'leftBottom',
                    'rightTop',
                    'rightBottom',
                ]
            ],
        },
    )

    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        icon: typing.Optional[ComponentType] = None,
        description: typing.Optional[ComponentType] = None,
        tooltip: typing.Optional[typing.Union[ComponentType, 'Tooltip']] = None,
        type: typing.Optional[Literal['default', 'primary']] = None,
        shape: typing.Optional[Literal['circle', 'square']] = None,
        trigger: typing.Optional[Literal['click', 'hover']] = None,
        placement: typing.Optional[Literal['top', 'right', 'bottom', 'left']] = None,
        open: typing.Optional[bool] = None,
        **kwargs,
    ):
        self._prop_names = [
            'id',
            'key',
            'children',
            'style',
            'className',
            'icon',
            'description',
            'tooltip',
            'type',
            'shape',
            'trigger',
            'placement',
            'open',
            'data-*',
            'aria-*',
        ]
        self._valid_wildcard_attributes = ['data-', 'aria-']
        self.available_properties = [
            'id',
            'key',
            'children',
            'style',
            'className',
            'icon',
            'description',
            'tooltip',
            'type',
            'shape',
            'trigger',
            'placement',
            'open',
            'data-*',
            'aria-*',
        ]
        self.available_wildcard_properties = ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdFloatButtonGroup, self).__init__(children=children, **args)


setattr(AntdFloatButtonGroup, '__init__', _explicitize_args(AntdFloatButtonGroup.__init__))
