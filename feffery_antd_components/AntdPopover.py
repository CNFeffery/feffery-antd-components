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


class AntdPopover(Component):
    """An AntdPopover component.
    气泡卡片组件Popover

    Keyword arguments:

    - id (string; optional):
        组件唯一id.

    - key (string; optional):
        对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

    - children (a list of or a singular dash component, string or number; optional):
        组件型，气泡卡片触发目标元素.

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
        组件型，标题内容.

    - content (a list of or a singular dash component, string or number; optional):
        组件型，内容区元素.

    - placement (a value equal to: 'top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom'; default 'top'):
        气泡卡片展开方向，可选项有`'top'`、`'left'`、`'right'`、`'bottom'`、`'topLeft'`、`'topRight'`、`'bottomLeft'`、`'bottomRight'`、`'leftTop'`、`'leftBottom'`、`'rightTop'`、`'rightBottom'`
        默认值：`top'`.

    - color (string; optional):
        背景颜色.

    - mouseEnterDelay (number; default 0.1):
        鼠标移入到气泡卡片弹出延时，单位：秒 默认值：`0.1`.

    - mouseLeaveDelay (number; default 0.1):
        鼠标移出到气泡卡片消失延时，单位：秒 默认值：`0.1`.

    - trigger (a value equal to: 'hover', 'focus', 'click' | list of a value equal to: 'hover', 'focus', 'click's; default 'hover'):
        触发方式，可选项有`'hover'`、`'focus'`、`'click'`，可多选 默认值：`'hover'`.

    - zIndex (number; optional):
        气泡卡片z-index.

    - arrow (a value equal to: 'show', 'hide', 'center'; default 'show'):
        控制气泡卡片附带箭头显示形式，可选项有`'show'`、`'hide'`、`'center'` 默认值：`'show'`.

    - fresh (boolean; default False):
        是否始终保持更新内容 默认值：`False`.

    - open (boolean; default False):
        监听或设置当前气泡卡片的展开状态 默认值：`False`.

    - permanent (boolean; default False):
        是否保持气泡卡片处于`open`对应状态不变 默认值：`False`.

    - popupContainer (a value equal to: 'parent', 'body'; default 'body'):
        气泡卡片展开层锚定策略，可选项有`'parent'`、`'body'` 默认值：`'body'`.

    - data-* (string; optional):
        `data-*`格式属性通配.

    - aria-* (string; optional):
        `aria-*`格式属性通配."""

    _children_props: typing.List[str] = ['title', 'content']
    _base_nodes = ['title', 'content', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdPopover'
    Styles = TypedDict('Styles', {'root': NotRequired[dict], 'body': NotRequired[dict]})

    ClassNames = TypedDict('ClassNames', {'root': NotRequired[str], 'body': NotRequired[str]})

    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        styles: typing.Optional['Styles'] = None,
        classNames: typing.Optional['ClassNames'] = None,
        title: typing.Optional[ComponentType] = None,
        content: typing.Optional[ComponentType] = None,
        placement: typing.Optional[
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
        ] = None,
        color: typing.Optional[str] = None,
        mouseEnterDelay: typing.Optional[NumberType] = None,
        mouseLeaveDelay: typing.Optional[NumberType] = None,
        trigger: typing.Optional[
            typing.Union[
                Literal['hover', 'focus', 'click'],
                typing.Sequence[Literal['hover', 'focus', 'click']],
            ]
        ] = None,
        zIndex: typing.Optional[NumberType] = None,
        arrow: typing.Optional[Literal['show', 'hide', 'center']] = None,
        fresh: typing.Optional[bool] = None,
        open: typing.Optional[bool] = None,
        permanent: typing.Optional[bool] = None,
        popupContainer: typing.Optional[Literal['parent', 'body']] = None,
        **kwargs,
    ):
        self._prop_names = [
            'id',
            'key',
            'children',
            'style',
            'className',
            'styles',
            'classNames',
            'title',
            'content',
            'placement',
            'color',
            'mouseEnterDelay',
            'mouseLeaveDelay',
            'trigger',
            'zIndex',
            'arrow',
            'fresh',
            'open',
            'permanent',
            'popupContainer',
            'data-*',
            'aria-*',
        ]
        self._valid_wildcard_attributes = ['data-', 'aria-']
        self.available_properties = [
            'id',
            'key',
            'children',
            'style',
            'className',
            'styles',
            'classNames',
            'title',
            'content',
            'placement',
            'color',
            'mouseEnterDelay',
            'mouseLeaveDelay',
            'trigger',
            'zIndex',
            'arrow',
            'fresh',
            'open',
            'permanent',
            'popupContainer',
            'data-*',
            'aria-*',
        ]
        self.available_wildcard_properties = ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdPopover, self).__init__(children=children, **args)


setattr(AntdPopover, '__init__', _explicitize_args(AntdPopover.__init__))
