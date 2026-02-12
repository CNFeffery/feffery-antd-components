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


class AntdEmpty(Component):
    """An AntdEmpty component.
    空状态组件AntdEmpty

    Keyword arguments:

    - id (string; optional):
        组件唯一id.

    - key (string; optional):
        对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

    - children (a list of or a singular dash component, string or number; optional):
        组件型，内嵌元素.

    - styles (dict; optional):
        细分控制子元素css样式.

        `styles` is a dict with keys:

        - root (dict; optional):
            根元素css样式.

        - image (dict; optional):
            图标元素css样式.

        - description (dict; optional):
            描述元素css样式.

        - footer (dict; optional):
            底部元素css样式.

    - classNames (dict; optional):
        细分控制子元素css类名.

        `classNames` is a dict with keys:

        - root (string; optional):
            根元素css类名.

        - image (string; optional):
            图标元素css类名.

        - description (string; optional):
            描述元素css类名.

        - footer (string; optional):
            底部元素css类名.

    - className (string | dict; optional):
        当前组件css类名，支持[动态css](/advanced-classname).

    - locale (a value equal to: 'zh-cn', 'en-us', 'de-de', 'ru-ru', 'fr-fr'; default 'zh-cn'):
        组件文案语种，可选项有`'zh-cn'`（简体中文）、`'en-us'`（英语）、`'de-de'`（德语）、`'fr-fr'`（法语）、`'ru-ru'`（俄语）
        默认值：`'zh-cn'`.

    - description (a list of or a singular dash component, string or number | boolean; optional):
        描述信息内容.

    - image (string | a value equal to: 'default', 'simple'; default 'default'):
        状态图片地址，也可以使用内置图片，可选项有`'default'`、`'simple'` 默认值：`'default'`.

    - data-* (string; optional):
        `data-*`格式属性通配.

    - aria-* (string; optional):
        `aria-*`格式属性通配."""

    _children_props: typing.List[str] = ['description']
    _base_nodes = ['description', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdEmpty'
    Styles = TypedDict(
        'Styles',
        {
            'root': NotRequired[dict],
            'image': NotRequired[dict],
            'description': NotRequired[dict],
            'footer': NotRequired[dict],
        },
    )

    ClassNames = TypedDict(
        'ClassNames',
        {
            'root': NotRequired[str],
            'image': NotRequired[str],
            'description': NotRequired[str],
            'footer': NotRequired[str],
        },
    )

    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        styles: typing.Optional['Styles'] = None,
        classNames: typing.Optional['ClassNames'] = None,
        className: typing.Optional[typing.Union[str, dict]] = None,
        locale: typing.Optional[Literal['zh-cn', 'en-us', 'de-de', 'ru-ru', 'fr-fr']] = None,
        description: typing.Optional[typing.Union[ComponentType, bool]] = None,
        image: typing.Optional[typing.Union[str, Literal['default', 'simple']]] = None,
        **kwargs,
    ):
        self._prop_names = [
            'id',
            'key',
            'children',
            'style',
            'styles',
            'classNames',
            'className',
            'locale',
            'description',
            'image',
            'data-*',
            'aria-*',
        ]
        self._valid_wildcard_attributes = ['data-', 'aria-']
        self.available_properties = [
            'id',
            'key',
            'children',
            'style',
            'styles',
            'classNames',
            'className',
            'locale',
            'description',
            'image',
            'data-*',
            'aria-*',
        ]
        self.available_wildcard_properties = ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdEmpty, self).__init__(children=children, **args)


setattr(AntdEmpty, '__init__', _explicitize_args(AntdEmpty.__init__))
