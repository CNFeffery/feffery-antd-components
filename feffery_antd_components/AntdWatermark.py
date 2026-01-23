# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args

ComponentSingleType = typing.Union[str, int, float, Component, None]
ComponentType = typing.Union[
    ComponentSingleType,
    typing.Sequence[ComponentSingleType],
]

NumberType = typing.Union[
    typing.SupportsFloat, typing.SupportsInt, typing.SupportsComplex
]


class AntdWatermark(Component):
    """An AntdWatermark component.
水印组件AntdWatermark

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- children (a list of or a singular dash component, string or number; optional):
    组件型，内嵌元素.

- className (string; optional):
    当前组件css类名.

- markClassName (string; optional):
    水印层css类名.

- markStyle (dict; optional):
    水印层css样式.

- content (string | list of strings; optional):
    配置水印内容，传入数组时渲染多行水印.

- rotate (number; default -22):
    水印旋转角度 默认值：`-22`.

- zIndex (number; optional):
    水印z-index.

- fontColor (string; optional):
    文字水印颜色.

- fontSize (number; default 16):
    文字水印字体大小 默认值：`16`.

- gapX (number; default 212):
    水印之间的水平像素间距 默认值：`212`.

- gapY (number; default 222):
    水印之间的垂直像素间距 默认值：`222`.

- image (string; optional):
    图片水印地址.

- width (number; optional):
    图片水印像素宽度.

- height (number; optional):
    图片水印像素高度.

- inherit (boolean; default True):
    是否将水印传导给`AntdModal`、`AntdDrawer`等弹出类组件 默认值：`True`.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配."""
    _children_props: typing.List[str] = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdWatermark'


    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[str] = None,
        markClassName: typing.Optional[str] = None,
        markStyle: typing.Optional[dict] = None,
        content: typing.Optional[typing.Union[str, typing.Sequence[str]]] = None,
        rotate: typing.Optional[NumberType] = None,
        zIndex: typing.Optional[NumberType] = None,
        fontColor: typing.Optional[str] = None,
        fontSize: typing.Optional[NumberType] = None,
        gapX: typing.Optional[NumberType] = None,
        gapY: typing.Optional[NumberType] = None,
        image: typing.Optional[str] = None,
        width: typing.Optional[NumberType] = None,
        height: typing.Optional[NumberType] = None,
        inherit: typing.Optional[bool] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'children', 'style', 'className', 'markClassName', 'markStyle', 'content', 'rotate', 'zIndex', 'fontColor', 'fontSize', 'gapX', 'gapY', 'image', 'width', 'height', 'inherit', 'data-*', 'aria-*']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'children', 'style', 'className', 'markClassName', 'markStyle', 'content', 'rotate', 'zIndex', 'fontColor', 'fontSize', 'gapX', 'gapY', 'image', 'width', 'height', 'inherit', 'data-*', 'aria-*']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdWatermark, self).__init__(children=children, **args)

setattr(AntdWatermark, "__init__", _explicitize_args(AntdWatermark.__init__))
