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


class AntdSegmentedColoring(Component):
    """An AntdSegmentedColoring component.
分段着色组件AntdSegmentedColoring

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- breakpoints (list of numbers; required):
    必填，监听或设置分段断点数组.

- colors (list of strings; required):
    必填，为各分段设置颜色，数组长度应为`breakpoints`长度减1.

- controls (boolean; default True):
    是否为各分段数值输入框添加增减按钮  默认值：`True`.

- keyboard (boolean; default True):
    是否可通过键盘上下方向键增减各分段数值输入框数值  默认值：`True`.

- min (number; optional):
    各分段数值输入框允许输入数值下限，默认无限制.

- max (number; optional):
    各分段数值输入框允许输入数值上限，默认无限制.

- step (number; default 0.01):
    各分段数值输入框数值调整步长  默认值：`0.01`.

- precision (number; default 2):
    各分段数值输入框数值精度  默认值：`2`.

- disabled (boolean; default False):
    是否禁用当前组件  默认值：`False`.

- size (a value equal to: 'small', 'middle', 'large'; default 'middle'):
    当前组件尺寸规格，可选项有`'small'`、`'middle'`、`'large'`  默认值：`'middle'`.

- bordered (boolean; default True):
    是否显示边框，设置为`True`时等价于`variant='outlined'`  默认值：`True`.

- variant (a value equal to: 'outlined', 'borderless', 'filled', 'underlined'; optional):
    形态变体类型，可选项有`'outlined'`、`'borderless'`、`'filled'`、`'underlined'`，其中`'outlined'`等价于`bordered=True`，但优先级更高.

- placeholder (string; optional):
    各分段数值输入框占位文字内容.

- readOnly (boolean; optional):
    是否渲染为只读状态  默认值：`False`.

- pureLegend (boolean; default False):
    是否开启纯图例模式  默认值：`False`.

- inputNumberStyle (dict; optional):
    各分段数值输入框统一css样式.

- colorBlockStyle (dict; optional):
    色块css样式.

- colorBlockPosition (a value equal to: 'left', 'right'; default 'right'):
    色块显示方位，可选项有`'left'`、`'right'`  默认值：`'right'`.

- colorBlockClickEvent (dict; optional):
    监听分段色块点击事件.

    `colorBlockClickEvent` is a dict with keys:

    - color (string; optional):
        被点击色块的颜色值.

    - range (list of numbers; optional):
        被点击色块对应范围值.

    - timestamp (number; optional):
        事件对应时间戳.

- pureLegendLabelStyle (dict; optional):
    当`pureLegend=True`时，设置各分段数值统一css样式.

- batchPropsNames (list of strings; optional):
    需要纳入[批量属性监听](/batch-props-values)的若干属性名.

- batchPropsValues (dict; optional):
    监听`batchPropsNames`中指定的若干属性值.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdSegmentedColoring'
    ColorBlockClickEvent = TypedDict(
        "ColorBlockClickEvent",
            {
            "color": NotRequired[str],
            "range": NotRequired[typing.Sequence[NumberType]],
            "timestamp": NotRequired[NumberType]
        }
    )


    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        breakpoints: typing.Optional[typing.Sequence[NumberType]] = None,
        colors: typing.Optional[typing.Sequence[str]] = None,
        controls: typing.Optional[bool] = None,
        keyboard: typing.Optional[bool] = None,
        min: typing.Optional[NumberType] = None,
        max: typing.Optional[NumberType] = None,
        step: typing.Optional[NumberType] = None,
        precision: typing.Optional[NumberType] = None,
        disabled: typing.Optional[bool] = None,
        size: typing.Optional[Literal["small", "middle", "large"]] = None,
        bordered: typing.Optional[bool] = None,
        variant: typing.Optional[Literal["outlined", "borderless", "filled", "underlined"]] = None,
        placeholder: typing.Optional[str] = None,
        readOnly: typing.Optional[bool] = None,
        pureLegend: typing.Optional[bool] = None,
        inputNumberStyle: typing.Optional[dict] = None,
        colorBlockStyle: typing.Optional[dict] = None,
        colorBlockPosition: typing.Optional[Literal["left", "right"]] = None,
        colorBlockClickEvent: typing.Optional["ColorBlockClickEvent"] = None,
        pureLegendLabelStyle: typing.Optional[dict] = None,
        batchPropsNames: typing.Optional[typing.Sequence[str]] = None,
        batchPropsValues: typing.Optional[dict] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'style', 'className', 'breakpoints', 'colors', 'controls', 'keyboard', 'min', 'max', 'step', 'precision', 'disabled', 'size', 'bordered', 'variant', 'placeholder', 'readOnly', 'pureLegend', 'inputNumberStyle', 'colorBlockStyle', 'colorBlockPosition', 'colorBlockClickEvent', 'pureLegendLabelStyle', 'batchPropsNames', 'batchPropsValues', 'data-*', 'aria-*']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'style', 'className', 'breakpoints', 'colors', 'controls', 'keyboard', 'min', 'max', 'step', 'precision', 'disabled', 'size', 'bordered', 'variant', 'placeholder', 'readOnly', 'pureLegend', 'inputNumberStyle', 'colorBlockStyle', 'colorBlockPosition', 'colorBlockClickEvent', 'pureLegendLabelStyle', 'batchPropsNames', 'batchPropsValues', 'data-*', 'aria-*']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        for k in ['breakpoints', 'colors']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(AntdSegmentedColoring, self).__init__(**args)

setattr(AntdSegmentedColoring, "__init__", _explicitize_args(AntdSegmentedColoring.__init__))
