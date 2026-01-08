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


class AntdCard(Component):
    """An AntdCard component.


Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- children (a list of or a singular dash component, string or number; optional):
    组件型，内嵌元素.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- styles (dict; optional):
    细分控制子元素css样式.

    `styles` is a dict with keys:

    - header (dict; optional):
        设置卡片头部区域css样式.

    - title (dict; optional):
        设置卡片标题css样式.

    - extra (dict; optional):
        设置卡片右上角的操作区域css样式.

    - cover (dict; optional):
        设置标题封面css样式.

    - body (dict; optional):
        设置卡片内容区域css样式.

    - actions (dict; optional):
        设置卡片底部操作组css样式.

- classNames (dict; optional):
    细分控制子元素css类名.

    `classNames` is a dict with keys:

    - header (string; optional):
        设置卡片头部区域css类名.

    - title (string; optional):
        设置卡片标题css类名.

    - extra (string; optional):
        设置卡片右上角的操作区域css类名.

    - cover (string; optional):
        设置标题封面css类名.

    - body (string; optional):
        设置卡片内容区域css类名.

    - actions (string; optional):
        设置卡片底部操作组css类名.

- actions (a list of or a singular dash component, string or number; optional):
    组件型，底部操作区元素.

- title (a list of or a singular dash component, string or number; optional):
    组件型，标题内容.

- extraLink (dict; optional):
    配置卡片右上角额外链接相关参数.

    `extraLink` is a dict with keys:

    - content (string; optional):
        链接文字内容.

    - href (string; optional):
        链接地址.

    - target (string; optional):
        链接跳转行为.

    - className (string; optional):
        链接css类名.

    - style (dict; optional):
        链接css样式.

- extra (a list of or a singular dash component, string or number; optional):
    组件型，卡片右上角额外元素，优先级高于`extraLink`.

- coverImg (dict; optional):
    配置封面图片相关参数.

    `coverImg` is a dict with keys:

    - src (string; optional):
        图片资源地址.

    - alt (string; optional):
        图片alt信息.

    - className (string; optional):
        图片css类名.

    - style (dict; optional):
        图片css样式.

- variant (a value equal to: 'outlined', 'borderless'; default 'outlined'):
    卡片形态变体，可选项有`'outlined'`、`'borderless'` 默认值：`'outlined'`.

- hoverable (boolean; default False):
    是否在鼠标悬停时显示特殊样式 默认值：`False`.

- size (a value equal to: 'default', 'small'; default 'default'):
    卡片尺寸规格，可选项有`'default'`、`'small'` 默认值：`'default'`.

- nClicks (number; default 0):
    监听当前卡片累计点击次数 默认值：`0`.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配."""
    _children_props: typing.List[str] = ['actions', 'title', 'extra']
    _base_nodes = ['actions', 'title', 'extra', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdCard'
    Styles = TypedDict(
        "Styles",
            {
            "header": NotRequired[dict],
            "title": NotRequired[dict],
            "extra": NotRequired[dict],
            "cover": NotRequired[dict],
            "body": NotRequired[dict],
            "actions": NotRequired[dict]
        }
    )

    ClassNames = TypedDict(
        "ClassNames",
            {
            "header": NotRequired[str],
            "title": NotRequired[str],
            "extra": NotRequired[str],
            "cover": NotRequired[str],
            "body": NotRequired[str],
            "actions": NotRequired[str]
        }
    )

    ExtraLink = TypedDict(
        "ExtraLink",
            {
            "content": NotRequired[str],
            "href": NotRequired[str],
            "target": NotRequired[str],
            "className": NotRequired[str],
            "style": NotRequired[dict]
        }
    )

    CoverImg = TypedDict(
        "CoverImg",
            {
            "src": NotRequired[str],
            "alt": NotRequired[str],
            "className": NotRequired[str],
            "style": NotRequired[dict]
        }
    )


    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        styles: typing.Optional["Styles"] = None,
        classNames: typing.Optional["ClassNames"] = None,
        actions: typing.Optional[ComponentType] = None,
        title: typing.Optional[ComponentType] = None,
        extraLink: typing.Optional["ExtraLink"] = None,
        extra: typing.Optional[ComponentType] = None,
        coverImg: typing.Optional["CoverImg"] = None,
        variant: typing.Optional[Literal["outlined", "borderless"]] = None,
        hoverable: typing.Optional[bool] = None,
        size: typing.Optional[Literal["default", "small"]] = None,
        nClicks: typing.Optional[NumberType] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'children', 'style', 'className', 'styles', 'classNames', 'actions', 'title', 'extraLink', 'extra', 'coverImg', 'variant', 'hoverable', 'size', 'nClicks', 'data-*', 'aria-*']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'children', 'style', 'className', 'styles', 'classNames', 'actions', 'title', 'extraLink', 'extra', 'coverImg', 'variant', 'hoverable', 'size', 'nClicks', 'data-*', 'aria-*']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdCard, self).__init__(children=children, **args)

setattr(AntdCard, "__init__", _explicitize_args(AntdCard.__init__))
