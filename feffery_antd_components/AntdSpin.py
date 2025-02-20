# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
import numbers # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args
try:
    from dash.development.base_component import ComponentType # noqa: F401
except ImportError:
    ComponentType = typing.TypeVar("ComponentType", bound=Component)


class AntdSpin(Component):
    """An AntdSpin component.
加载动画组件AntdSpin

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

- wrapperClassName (string | dict; optional):
    外层容器css类名.

- spinning (boolean; default False):
    是否处于加载中状态.

- size (a value equal to: 'small', 'middle', 'large'; default 'middle'):
    默认加载状态图标的尺寸，可选项有`'small'`、`'middle'`、`'large'`  默认值：`'middle'`.

- delay (number; optional):
    加载动画渲染延时，单位：毫秒  默认值：`0`.

- text (string; optional):
    加载动画提示文字.

- fullscreen (boolean; default False):
    是否开启全屏模式  默认值：`False`.

- debug (boolean; default False):
    是否开启debug模式，开启后，每次动画加载都会在开发者工具的控制台打印相关`prop`信息  默认值：`False`.

- listenPropsMode (a value equal to: 'default', 'exclude', 'include'; default 'default'):
    监听模式，可选项有`'default'`、`'exclude'`、`'include'`  默认值：`'default'`.

- excludeProps (list of strings; optional):
    `listenPropsMode='exclude'`时，设置需要排除监听的回调目标列表，格式如`['组件id1.组件属性1',
    '组件id2.组件属性2', ...]`.

- includeProps (list of strings; optional):
    `listenPropsMode='include'`时，设置需要包含监听的回调目标列表，格式如`['组件id1.组件属性1',
    '组件id2.组件属性2', ...]`.

- indicator (a list of or a singular dash component, string or number; optional):
    组件型，自定义加载状态图标.

- manual (boolean; default False):
    是否开启手动控制模式，开启后是否处于加载状态将由`spinning`参数控制，与内部元素参与的回调状态无关
    默认值：`False`.

- percent (number | a value equal to: 'auto'; optional):
    控制加载中状态下的环状进度渲染形式，传入0到100之间数值型时表示实际进度，传入`'auto'`时会预估一个永远不会停止的进度.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配."""
    _children_props = ['indicator']
    _base_nodes = ['indicator', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdSpin'

    @_explicitize_args
    def __init__(
        self,
        children: typing.Optional[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[dict] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        wrapperClassName: typing.Optional[typing.Union[str, dict]] = None,
        spinning: typing.Optional[bool] = None,
        size: typing.Optional[Literal["small", "middle", "large"]] = None,
        delay: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        text: typing.Optional[str] = None,
        fullscreen: typing.Optional[bool] = None,
        debug: typing.Optional[bool] = None,
        listenPropsMode: typing.Optional[Literal["default", "exclude", "include"]] = None,
        excludeProps: typing.Optional[typing.Sequence[str]] = None,
        includeProps: typing.Optional[typing.Sequence[str]] = None,
        indicator: typing.Optional[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]] = None,
        manual: typing.Optional[bool] = None,
        percent: typing.Optional[typing.Union[typing.Union[int, float, numbers.Number], Literal["auto"]]] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'children', 'style', 'className', 'wrapperClassName', 'spinning', 'size', 'delay', 'text', 'fullscreen', 'debug', 'listenPropsMode', 'excludeProps', 'includeProps', 'indicator', 'manual', 'percent', 'data-*', 'aria-*']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'children', 'style', 'className', 'wrapperClassName', 'spinning', 'size', 'delay', 'text', 'fullscreen', 'debug', 'listenPropsMode', 'excludeProps', 'includeProps', 'indicator', 'manual', 'percent', 'data-*', 'aria-*']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdSpin, self).__init__(children=children, **args)
