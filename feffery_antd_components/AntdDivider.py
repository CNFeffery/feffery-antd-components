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

    - innerTextOrientation (a value equal to: 'left', 'center', 'right'; default 'center'):
        内嵌元素对齐方式，可选项有`'left'`、`'center'`、`'right'` 默认值：`'center'`.

    - isDashed (boolean; default False):
        是否渲染为虚线形式 默认值：`False`.

    - direction (a value equal to: 'horizontal', 'vertical'; default 'horizontal'):
        分割线方向，可选项有`'horizontal'`、`'vertical'` 默认值：`'horizontal'`.

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
        文字内容是否呈现为常规正文形式 默认值：`True`.

    - size (a value equal to: 'small', 'middle', 'large'; optional):
        间距大小，仅当``direction='horizontal'``时有效，可选项有`'small'`、`'middle'`、`'large'`.

    - data-* (string; optional):
        `data-*`格式属性通配.

    - aria-* (string; optional):
        `aria-*`格式属性通配."""

    _children_props: typing.List[str] = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdDivider'

    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        style: typing.Optional[typing.Any] = None,
        innerTextOrientation: typing.Optional[Literal['left', 'center', 'right']] = None,
        isDashed: typing.Optional[bool] = None,
        direction: typing.Optional[Literal['horizontal', 'vertical']] = None,
        fontSize: typing.Optional[typing.Union[str, NumberType]] = None,
        lineColor: typing.Optional[str] = None,
        fontStyle: typing.Optional[str] = None,
        fontWeight: typing.Optional[str] = None,
        fontFamily: typing.Optional[str] = None,
        fontColor: typing.Optional[str] = None,
        variant: typing.Optional[Literal['dashed', 'dotted', 'solid']] = None,
        plain: typing.Optional[bool] = None,
        size: typing.Optional[Literal['small', 'middle', 'large']] = None,
        **kwargs,
    ):
        self._prop_names = [
            'id',
            'key',
            'children',
            'className',
            'style',
            'innerTextOrientation',
            'isDashed',
            'direction',
            'fontSize',
            'lineColor',
            'fontStyle',
            'fontWeight',
            'fontFamily',
            'fontColor',
            'variant',
            'plain',
            'size',
            'data-*',
            'aria-*',
        ]
        self._valid_wildcard_attributes = ['data-', 'aria-']
        self.available_properties = [
            'id',
            'key',
            'children',
            'className',
            'style',
            'innerTextOrientation',
            'isDashed',
            'direction',
            'fontSize',
            'lineColor',
            'fontStyle',
            'fontWeight',
            'fontFamily',
            'fontColor',
            'variant',
            'plain',
            'size',
            'data-*',
            'aria-*',
        ]
        self.available_wildcard_properties = ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdDivider, self).__init__(children=children, **args)


setattr(AntdDivider, '__init__', _explicitize_args(AntdDivider.__init__))
