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


class AntdProgress(Component):
    """An AntdProgress component.
进度条组件AntdProgress

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- type (a value equal to: 'line', 'circle', 'dashboard'; default 'line'):
    进度条类型，可选项有`'line'`、`'circle'`、`'dashboard'`  默认值：`'line'`.

- size (dict; default 'default'):
    进度条尺寸规格，可选项有`'small'`、`'default'`、`'large'`，传入数值型表示像素尺寸，传入字典型可分别控制宽度和高度
    默认值：`'default'`.

    `size` is a number | list of number | strings | a value equal to:
    'small', 'default' | dict with keys:

    - width (number; optional):
        像素宽度.

    - height (number; optional):
        像素高度.

- percent (number; default 0):
    进度条进度，取值应在`0`到`100`之间，当`100`时默认会渲染为完成状态  默认值：`0`.

- success (dict; optional):
    配置进度条完成状态相关参数.

    `success` is a dict with keys:

    - percent (number; optional):
        达到完成状态对应的进度，取值应在`0`到`100`之间  默认值：`100`.

    - strokeColor (dict; optional):
        完成状态进度条颜色，支持渐变色.

        `strokeColor` is a string

      Or dict with keys:

        - from (string; optional):

            渐变色开端颜色.

        - to (string; optional):

            渐变色末端颜色.

- format (dict; optional):
    配置进度提示相关参数.

    `format` is a dict with keys:

    - prefix (string; optional):
        进度提示前缀文字  默认值：`''`.

    - suffix (string; optional):
        进度提示后缀文字  默认值：`'%'`.

    - content (a list of or a singular dash component, string or number; optional):
        组件型，强制设置显示内容.

- status (a value equal to: 'success', 'exception', 'normal', 'active'; optional):
    进度条状态，可选项有`'success'`、`'exception'`、`'normal'`、`'active'`，其中`'active'`仅在`type='line'`时生效
    默认值：`'normal'`.

- showInfo (boolean; default True):
    是否显示进度数值或状态图标  默认值：`True`.

- percentPosition (dict; optional):
    适用于`'line'`型进度条，配置进度条附带进度数值信息显示位置.

    `percentPosition` is a dict with keys:

    - align (a value equal to: 'start', 'center', 'end'; optional):
        对齐方式，可选项有`'start'`、`'center'`、`'end'`.

    - type (a value equal to: 'inner', 'outer'; optional):
        内外位置，可选项有`'inner'`、`'outer'`.

- strokeColor (dict; optional):
    配置进度条颜色，支持渐变色.

    `strokeColor` is a string | dict with keys:

    - from (string; optional):
        渐变色开端颜色.

    - to (string; optional):
        渐变色末端颜色.

- strokeLinecap (a value equal to: 'round', 'butt', 'square'; optional):
    进度条线型，可选项有`'round'`、`'butt'`、`'square'`  默认值：`'round'`.

- strokeWidth (number; optional):
    进度条线的宽度，单位是进度条画布宽度的百分比.

- trailColor (string; optional):
    未完成分段部分的颜色，默认无颜色.

- gapDegree (number; optional):
    进度条缺口角度，取值应在`0`到`295`之间，仅`type='dashboard'`时可用  默认值：`75`.

- gapPosition (a value equal to: 'top', 'bottom', 'left', 'right'; default 'bottom'):
    仪表盘缺口方向，可选项有`'top'`、`'bottom'`、`'left'`、`'right'`，仅`type='dashboard'`时可用
    默认值：`'bottom'`.

- steps (number; optional):
    进度条分段数量.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配."""
    _children_props = ['format.content']
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdProgress'
    Size = TypedDict(
        "Size",
            {
            "width": NotRequired[NumberType],
            "height": NotRequired[NumberType]
        }
    )

    SuccessStrokeColor = TypedDict(
        "SuccessStrokeColor",
            {
            "from": NotRequired[str],
            "to": NotRequired[str]
        }
    )

    Success = TypedDict(
        "Success",
            {
            "percent": NotRequired[NumberType],
            "strokeColor": NotRequired[typing.Union[str, "SuccessStrokeColor"]]
        }
    )

    Format = TypedDict(
        "Format",
            {
            "prefix": NotRequired[str],
            "suffix": NotRequired[str],
            "content": NotRequired[ComponentType]
        }
    )

    PercentPosition = TypedDict(
        "PercentPosition",
            {
            "align": NotRequired[Literal["start", "center", "end"]],
            "type": NotRequired[Literal["inner", "outer"]]
        }
    )

    StrokeColor = TypedDict(
        "StrokeColor",
            {
            "from": NotRequired[str],
            "to": NotRequired[str]
        }
    )


    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        type: typing.Optional[Literal["line", "circle", "dashboard"]] = None,
        size: typing.Optional[typing.Union[NumberType, typing.Sequence[typing.Union[NumberType, str]], Literal["small", "default"], "Size"]] = None,
        percent: typing.Optional[NumberType] = None,
        success: typing.Optional["Success"] = None,
        format: typing.Optional["Format"] = None,
        status: typing.Optional[Literal["success", "exception", "normal", "active"]] = None,
        showInfo: typing.Optional[bool] = None,
        percentPosition: typing.Optional["PercentPosition"] = None,
        strokeColor: typing.Optional[typing.Union[str, "StrokeColor"]] = None,
        strokeLinecap: typing.Optional[Literal["round", "butt", "square"]] = None,
        strokeWidth: typing.Optional[NumberType] = None,
        trailColor: typing.Optional[str] = None,
        gapDegree: typing.Optional[NumberType] = None,
        gapPosition: typing.Optional[Literal["top", "bottom", "left", "right"]] = None,
        steps: typing.Optional[NumberType] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'style', 'className', 'type', 'size', 'percent', 'success', 'format', 'status', 'showInfo', 'percentPosition', 'strokeColor', 'strokeLinecap', 'strokeWidth', 'trailColor', 'gapDegree', 'gapPosition', 'steps', 'data-*', 'aria-*']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'style', 'className', 'type', 'size', 'percent', 'success', 'format', 'status', 'showInfo', 'percentPosition', 'strokeColor', 'strokeLinecap', 'strokeWidth', 'trailColor', 'gapDegree', 'gapPosition', 'steps', 'data-*', 'aria-*']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdProgress, self).__init__(**args)

setattr(AntdProgress, "__init__", _explicitize_args(AntdProgress.__init__))
