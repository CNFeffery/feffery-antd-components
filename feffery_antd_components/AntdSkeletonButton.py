# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
import numbers # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args
try:
    from dash.development.base_component import ComponentType # noqa: F401
except ImportError:
    ComponentType = typing.TypeVar("ComponentType", bound=Component)


class AntdSkeletonButton(Component):
    """An AntdSkeletonButton component.
骨骼屏按钮占位图组件AntdSkeletonButton

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- active (boolean; default False):
    是否显示动画  默认值：`False`.

- block (boolean; default False):
    是否撑满父容器  默认值：`False`.

- shape (a value equal to: 'circle', 'round', 'default'; default 'default'):
    按钮占位图形状，可选项有`'circle'`、`'round'`、`'default'`  默认值：`'default'`.

- size (a value equal to: 'large', 'small', 'default'; default 'default'):
    按钮占位图尺寸，可选项有`'large'`、`'small'`、`'default'`  默认值：`'default'`.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdSkeletonButton'

    @_explicitize_args
    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        active: typing.Optional[bool] = None,
        block: typing.Optional[bool] = None,
        shape: typing.Optional[Literal["circle", "round", "default"]] = None,
        size: typing.Optional[Literal["large", "small", "default"]] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'style', 'className', 'active', 'block', 'shape', 'size', 'data-*', 'aria-*']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'style', 'className', 'active', 'block', 'shape', 'size', 'data-*', 'aria-*']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdSkeletonButton, self).__init__(**args)
