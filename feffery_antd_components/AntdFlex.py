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


class AntdFlex(Component):
    """An AntdFlex component.
弹性布局组件AntdFlex

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- children (a list of or a singular dash component, string or number; optional):
    组件型，内嵌元素.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- vertical (boolean; default False):
    是否使用垂直主轴 默认值：`False`.

- wrap (string | boolean; default 'nowrap'):
    子元素换行显示行为，同css中的flex-wrap，也可直接传入布尔型设置是否自动换行 默认值：`'nowrap'`.

- justify (string; default 'normal'):
    子元素在主轴方向上的对齐方式，同css中的justify-content 默认值：`'normal'`.

- align (string; default 'normal'):
    子元素在交叉轴方向上的对齐方式，同css中的align-items 默认值：`'normal'`.

- flex (string; default 'normal'):
    同css中的flex 默认值：`'normal'`.

- gap (string | number | a value equal to: 'small', 'middle', 'large'; optional):
    子元素之间的间隙，可选项有`'small'`、`'middle'`、`'large'`，也可传入字符型css宽度，或数值型像素宽度.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配."""
    _children_props: typing.List[str] = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdFlex'


    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        vertical: typing.Optional[bool] = None,
        wrap: typing.Optional[typing.Union[str, bool]] = None,
        justify: typing.Optional[str] = None,
        align: typing.Optional[str] = None,
        flex: typing.Optional[str] = None,
        gap: typing.Optional[typing.Union[str, NumberType, Literal["small", "middle", "large"]]] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'children', 'style', 'className', 'vertical', 'wrap', 'justify', 'align', 'flex', 'gap', 'data-*', 'aria-*']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'children', 'style', 'className', 'vertical', 'wrap', 'justify', 'align', 'flex', 'gap', 'data-*', 'aria-*']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdFlex, self).__init__(children=children, **args)

setattr(AntdFlex, "__init__", _explicitize_args(AntdFlex.__init__))
