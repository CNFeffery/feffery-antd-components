# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
import numbers # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component
try:
    from dash.development.base_component import ComponentType # noqa: F401
except ImportError:
    ComponentType = typing.TypeVar("ComponentType", bound=Component)


class AntdSteps(Component):
    """An AntdSteps component.
步骤条组件AntdSteps

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- steps (list of dicts; required):
    必填，步骤内容定义数据结构.

    `steps` is a list of dicts with keys:

    - title (a list of or a singular dash component, string or number; required):
        步骤标题.

    - subTitle (a list of or a singular dash component, string or number; optional):
        步骤子标题.

    - description (a list of or a singular dash component, string or number; optional):
        步骤描述内容.

    - icon (a list of or a singular dash component, string or number; optional):
        步骤自定义图标.

    - disabled (boolean; optional):
        是否禁用当前步骤.

    - status (a value equal to: 'wait', 'process', 'finish', 'error'; optional):
        强制设置当前步骤状态，同参数status.

- current (number; default 0):
    当前所处的步骤序号  默认值：`0`.

- direction (a value equal to: 'horizontal', 'vertical'; default 'horizontal'):
    步骤条显示方向，可选项有`'horizontal'`、`'vertical'`  默认值：`'horizontal'`.

- labelPlacement (a value equal to: 'horizontal', 'vertical'; optional):
    标签内容显示方位，可选项有`'horizontal'`、`'vertical'`.

- progressDot (boolean; default False):
    是否渲染为点状步骤条  默认值：`False`.

- size (a value equal to: 'default', 'small'; default 'default'):
    步骤条尺寸规格，可选项有`'default'`、`'small'`  默认值：`'default'`.

- status (a value equal to: 'wait', 'process', 'finish', 'error'; default 'process'):
    步骤条状态，可选项有`'wait'`、`'process'`、`'finish'`、`'error'`
    默认值：`'process'`.

- type (a value equal to: 'default', 'navigation', 'inline'; default 'default'):
    步骤条类型，可选项有`'default'`、`'navigation'`、`'inline'`  默认值：`'default'`.

- allowClick (boolean; default False):
    是否可点击切换步骤  默认值：`False`.

- responsive (boolean; default True):
    是否在页面宽度小于532px时自动强制垂直显示  默认值：`True`.

- percent (number; optional):
    当前步骤进度，取值应在0到100之间，适用于常规步骤条.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配."""
    _children_props = ['steps[].title', 'steps[].subTitle', 'steps[].description', 'steps[].icon']
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdSteps'
    Steps = TypedDict(
        "Steps",
            {
            "title": typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]],
            "subTitle": NotRequired[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]],
            "description": NotRequired[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]],
            "icon": NotRequired[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]],
            "disabled": NotRequired[bool],
            "status": NotRequired[Literal["wait", "process", "finish", "error"]]
        }
    )

    _explicitize_dash_init = True

    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        steps: typing.Optional[typing.Sequence["Steps"]] = None,
        current: typing.Optional[typing.Union[typing.SupportsFloat, typing.SupportsInt, typing.SupportsComplex]] = None,
        direction: typing.Optional[Literal["horizontal", "vertical"]] = None,
        labelPlacement: typing.Optional[Literal["horizontal", "vertical"]] = None,
        progressDot: typing.Optional[bool] = None,
        size: typing.Optional[Literal["default", "small"]] = None,
        status: typing.Optional[Literal["wait", "process", "finish", "error"]] = None,
        type: typing.Optional[Literal["default", "navigation", "inline"]] = None,
        allowClick: typing.Optional[bool] = None,
        responsive: typing.Optional[bool] = None,
        percent: typing.Optional[typing.Union[typing.SupportsFloat, typing.SupportsInt, typing.SupportsComplex]] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'style', 'className', 'steps', 'current', 'direction', 'labelPlacement', 'progressDot', 'size', 'status', 'type', 'allowClick', 'responsive', 'percent', 'data-*', 'aria-*']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'style', 'className', 'steps', 'current', 'direction', 'labelPlacement', 'progressDot', 'size', 'status', 'type', 'allowClick', 'responsive', 'percent', 'data-*', 'aria-*']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        for k in ['steps']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(AntdSteps, self).__init__(**args)
