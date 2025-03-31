# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
import numbers # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args
try:
    from dash.development.base_component import ComponentType # noqa: F401
except ImportError:
    ComponentType = typing.TypeVar("ComponentType", bound=Component)


class AntdTooltip(Component):
    """An AntdTooltip component.
文字提示组件AntdTooltip

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- children (a list of or a singular dash component, string or number; optional):
    组件型，文字提示挂载目标.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- styles (dict; optional):
    细分控制子元素css样式.

    `styles` is a dict with keys:

    - root (dict; optional):
        根元素（包含箭头、内容元素）css样式.

    - body (dict; optional):
        内容元素css样式.

- classNames (dict; optional):
    细分控制子元素css类名.

    `classNames` is a dict with keys:

    - root (string; optional):
        根元素（包含箭头、内容元素）css类名.

    - body (string; optional):
        内容元素css类名.

- title (a list of or a singular dash component, string or number; optional):
    组件型，文字提示内容.

- placement (a value equal to: 'top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'; default 'top'):
    文字提示弹出方向，可选项有`'top'`、`'left'`、`'right'`、`'bottom'`、`'topLeft'`、`'topRight'`、`'bottomLeft'`、`'bottomRight'`、`'leftTop'`、`'leftBottom'`、`'rightTop'`、`'rightBottom'`
    默认值：`'top'`.

- color (string; optional):
    背景颜色.

- mouseEnterDelay (number; default 0.1):
    鼠标移入到文字提示弹出延时，单位：秒  默认值：`0.1`.

- mouseLeaveDelay (number; default 0.1):
    鼠标移出到文字提示消失延时，单位：秒  默认值：`0.1`.

- overlayClassName (string | dict; optional):
    文字提示卡片css类名，支持[动态css](/advanced-classname).

- overlayStyle (dict; optional):
    文字提示卡片css样式.

- overlayInnerStyle (dict; optional):
    内容区css样式.

- trigger (a value equal to: 'hover', 'focus', 'click' | list of a value equal to: 'hover', 'focus', 'click's; default 'hover'):
    触发方式，可选项有`'hover'`、`'focus'`、`'click'`，可多选  默认值：`'hover'`.

- zIndex (number; optional):
    文字提示卡片z-index.

- arrow (a value equal to: 'show', 'hide', 'center'; default 'show'):
    文字提示卡片附带箭头显示形式，可选项有`'show'`、`'hide'`、`'center'`  默认值：`'show'`.

- fresh (boolean; default False):
    是否始终保持更新内容  默认值：`False`.

- open (boolean; default False):
    监听或设置当前文字提示卡片的展开状态  默认值：`False`.

- permanent (boolean; default False):
    是否保持文字提示卡片处于`open`对应状态不变  默认值：`False`.

- popupContainer (a value equal to: 'parent', 'body'; default 'body'):
    文字提示卡片展开层锚定策略，可选项有`'parent'`、`'body'`  默认值：`'body'`.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

    - component_name (string; optional):
        Holds the name of the component that is loading."""
    _children_props = ['title']
    _base_nodes = ['title', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdTooltip'
    Styles = TypedDict(
        "Styles",
            {
            "root": NotRequired[dict],
            "body": NotRequired[dict]
        }
    )

    ClassNames = TypedDict(
        "ClassNames",
            {
            "root": NotRequired[str],
            "body": NotRequired[str]
        }
    )

    LoadingState = TypedDict(
        "LoadingState",
            {
            "is_loading": NotRequired[bool],
            "prop_name": NotRequired[str],
            "component_name": NotRequired[str]
        }
    )

    @_explicitize_args
    def __init__(
        self,
        children: typing.Optional[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        styles: typing.Optional["Styles"] = None,
        classNames: typing.Optional["ClassNames"] = None,
        title: typing.Optional[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]] = None,
        placement: typing.Optional[Literal["top", "left", "right", "bottom", "topLeft", "topRight", "bottomLeft", "bottomRight"]] = None,
        color: typing.Optional[str] = None,
        mouseEnterDelay: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        mouseLeaveDelay: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        overlayClassName: typing.Optional[typing.Union[str, dict]] = None,
        overlayStyle: typing.Optional[dict] = None,
        overlayInnerStyle: typing.Optional[dict] = None,
        trigger: typing.Optional[typing.Union[Literal["hover", "focus", "click"], typing.Sequence[Literal["hover", "focus", "click"]]]] = None,
        zIndex: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        arrow: typing.Optional[Literal["show", "hide", "center"]] = None,
        fresh: typing.Optional[bool] = None,
        open: typing.Optional[bool] = None,
        permanent: typing.Optional[bool] = None,
        popupContainer: typing.Optional[Literal["parent", "body"]] = None,
        loading_state: typing.Optional["LoadingState"] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'children', 'style', 'className', 'styles', 'classNames', 'title', 'placement', 'color', 'mouseEnterDelay', 'mouseLeaveDelay', 'overlayClassName', 'overlayStyle', 'overlayInnerStyle', 'trigger', 'zIndex', 'arrow', 'fresh', 'open', 'permanent', 'popupContainer', 'data-*', 'aria-*', 'loading_state']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'children', 'style', 'className', 'styles', 'classNames', 'title', 'placement', 'color', 'mouseEnterDelay', 'mouseLeaveDelay', 'overlayClassName', 'overlayStyle', 'overlayInnerStyle', 'trigger', 'zIndex', 'arrow', 'fresh', 'open', 'permanent', 'popupContainer', 'data-*', 'aria-*', 'loading_state']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdTooltip, self).__init__(children=children, **args)
