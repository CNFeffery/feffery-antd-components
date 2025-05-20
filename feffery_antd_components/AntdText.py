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


class AntdText(Component):
    """An AntdText component.
文字组件AntdText

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- children (a list of or a singular dash component, string or number; optional):
    组件型，内嵌元素.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- locale (a value equal to: 'zh-cn', 'en-us', 'de-de', 'ru-ru'; default 'zh-cn'):
    组件文案语种，可选项有`'zh-cn'`（简体中文）、`'en-us'`（英语）、`'de-de'`（德语）、`'ru-ru'`（俄语）
    默认值：`'zh-cn'`.

- code (boolean; optional):
    是否渲染为代码形式.

- copyable (boolean; optional):
    是否开启快捷复制功能.

- strikethrough (boolean; optional):
    是否渲染为删除线形式.

- disabled (boolean; optional):
    是否渲染为禁用形式.

- mark (boolean; optional):
    是否渲染为高亮形式.

- strong (boolean; optional):
    是否渲染为加粗形式.

- italic (boolean; optional):
    是否渲染为斜体形式.

- underline (boolean; optional):
    是否渲染为下划线形式.

- keyboard (boolean; optional):
    是否渲染为键盘形式.

- type (a value equal to: 'secondary', 'success', 'warning', 'danger'; optional):
    设置内容特殊状态形式，可选项有`'secondary'`、`'success'`、`'warning'`、`'danger'`.

- ellipsis (dict; default False):
    配置内容省略相关功能，设置为`False`则不开启  默认值：`False`.

    `ellipsis` is a boolean | dict with keys:

    - suffix (string; optional):
        自定义内容省略后缀.

- data-* (string; optional):
    `data-*`格式属性通配.

- aria-* (string; optional):
    `aria-*`格式属性通配."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdText'
    Ellipsis = TypedDict(
        "Ellipsis",
            {
            "suffix": NotRequired[str]
        }
    )


    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        locale: typing.Optional[Literal["zh-cn", "en-us", "de-de", "ru-ru"]] = None,
        code: typing.Optional[bool] = None,
        copyable: typing.Optional[bool] = None,
        strikethrough: typing.Optional[bool] = None,
        disabled: typing.Optional[bool] = None,
        mark: typing.Optional[bool] = None,
        strong: typing.Optional[bool] = None,
        italic: typing.Optional[bool] = None,
        underline: typing.Optional[bool] = None,
        keyboard: typing.Optional[bool] = None,
        type: typing.Optional[Literal["secondary", "success", "warning", "danger"]] = None,
        ellipsis: typing.Optional[typing.Union[bool, "Ellipsis"]] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'children', 'style', 'className', 'locale', 'code', 'copyable', 'strikethrough', 'disabled', 'mark', 'strong', 'italic', 'underline', 'keyboard', 'type', 'ellipsis', 'data-*', 'aria-*']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'key', 'children', 'style', 'className', 'locale', 'code', 'copyable', 'strikethrough', 'disabled', 'mark', 'strong', 'italic', 'underline', 'keyboard', 'type', 'ellipsis', 'data-*', 'aria-*']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdText, self).__init__(children=children, **args)

setattr(AntdText, "__init__", _explicitize_args(AntdText.__init__))
