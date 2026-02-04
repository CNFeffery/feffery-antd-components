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


class AntdFloatButton(Component):
    """An AntdFloatButton component.
    悬浮按钮组件AntdFloatButton

    Keyword arguments:

    - id (string; optional):
        组件唯一id.

    - key (string; optional):
        对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

    - className (string | dict; optional):
        当前组件css类名，支持[动态css](/advanced-classname).

    - icon (a list of or a singular dash component, string or number; optional):
        组件型，按钮内嵌前缀图标元素.

    - description (a list of or a singular dash component, string or number; optional):
        组件型，按钮内嵌元素，仅`shape='square'`时可用.

    - tooltip (dict; optional):
        组件型，按钮额外气泡卡片内容.

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
        按钮形状，可选项有`'circle'`、`'square'` 默认值：`'circle'`.

    - href (string; optional):
        按钮点击跳转链接地址.

    - target (string; default '_blank'):
        按钮点击跳转链接方式 默认值：`'_blank'`.

    - nClicks (number; default 0):
        按钮累计点击次数，用于监听按钮点击行为 默认值：`0`.

    - data-* (string; optional):
        `data-*`格式属性通配.

    - aria-* (string; optional):
        `aria-*`格式属性通配."""

    _children_props: typing.List[str] = ['icon', 'description', 'tooltip', 'tooltip.title']
    _base_nodes = ['icon', 'description', 'tooltip', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdFloatButton'
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
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        icon: typing.Optional[ComponentType] = None,
        description: typing.Optional[ComponentType] = None,
        tooltip: typing.Optional[typing.Union[ComponentType, 'Tooltip']] = None,
        type: typing.Optional[Literal['default', 'primary']] = None,
        shape: typing.Optional[Literal['circle', 'square']] = None,
        href: typing.Optional[str] = None,
        target: typing.Optional[str] = None,
        nClicks: typing.Optional[NumberType] = None,
        **kwargs,
    ):
        self._prop_names = [
            'id',
            'key',
            'style',
            'className',
            'icon',
            'description',
            'tooltip',
            'type',
            'shape',
            'href',
            'target',
            'nClicks',
            'data-*',
            'aria-*',
        ]
        self._valid_wildcard_attributes = ['data-', 'aria-']
        self.available_properties = [
            'id',
            'key',
            'style',
            'className',
            'icon',
            'description',
            'tooltip',
            'type',
            'shape',
            'href',
            'target',
            'nClicks',
            'data-*',
            'aria-*',
        ]
        self.available_wildcard_properties = ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdFloatButton, self).__init__(**args)


setattr(AntdFloatButton, '__init__', _explicitize_args(AntdFloatButton.__init__))
