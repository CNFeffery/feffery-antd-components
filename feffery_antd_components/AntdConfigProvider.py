# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
import numbers # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args
try:
    from dash.development.base_component import ComponentType # noqa: F401
except ImportError:
    ComponentType = typing.TypeVar("ComponentType", bound=Component)


class AntdConfigProvider(Component):
    """An AntdConfigProvider component.
参数配置组件AntdConfigProvider

Keyword arguments:

- id (string; optional):
    组件唯一id.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- children (a list of or a singular dash component, string or number; optional):
    组件型，内嵌元素.

- algorithm (a value equal to: 'default', 'dark', 'compact' | list of a value equal to: 'default', 'dark', 'compact's; default 'default'):
    为内部组件设置快捷主题算法，支持多种主题组合，可选项有`'default'`、`'dark'`、`'compact'`
    默认值：`'default'`.

- useOldTheme (a value equal to: 'default', 'dark'; optional):
    是否强制使用`0.3.x`版本之前的主题样式，可选项有`'default'`、`'dark'`.

- primaryColor (string; optional):
    主题色.

- componentDisabled (boolean; optional):
    是否针后代元素中的所有组件强制设置禁用状态.

- componentSize (a value equal to: 'small', 'middle', 'large'; optional):
    强制设置后代元素的尺寸规格，可选项有`'small'`、`'middle'`、`'large'`，其中`'default'`兼容`'middle'`.

- locale (a value equal to: 'zh-cn', 'en-us', 'de-de'; optional):
    强制设置后代元素的语言，可选项有`'zh-cn'`（简体中文）、`'en-us'`（英语）、`'de-de'`（德语）.

- wavesDisabled (boolean; default False):
    是否禁用内部组件水波纹动效  默认值：`False`.

- token (dict; optional):
    配置`design token`相关参数.

    `token` is a dict with keys:

    - motion (boolean; optional):
        是否开启动画效果  默认值：`True`.

- componentsToken (dict; optional):
    配置针对具体组件的`design token`相关参数.

    `componentsToken` is a dict with strings as keys and values of
    type dict with keys:

    - algorithm (boolean; optional):
        是否开启派生样式自动推导运算  默认值：`False`.

- compatibilityMode (boolean; default False):
    是否开启针对`88`及以下版本`Chromium`内核浏览器的向下兼容模式  默认值：`False`.

- enableLayer (boolean; default False):
    是否启用layer样式降权  默认值：`False`."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdConfigProvider'
    Token = TypedDict(
        "Token",
            {
            "motion": NotRequired[bool]
        }
    )

    ComponentsToken = TypedDict(
        "ComponentsToken",
            {
            "algorithm": NotRequired[bool]
        }
    )

    @_explicitize_args
    def __init__(
        self,
        children: typing.Optional[typing.Union[str, int, float, ComponentType, typing.Sequence[typing.Union[str, int, float, ComponentType]]]] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        key: typing.Optional[str] = None,
        algorithm: typing.Optional[typing.Union[Literal["default", "dark", "compact"], typing.Sequence[Literal["default", "dark", "compact"]]]] = None,
        useOldTheme: typing.Optional[Literal["default", "dark"]] = None,
        primaryColor: typing.Optional[str] = None,
        componentDisabled: typing.Optional[bool] = None,
        componentSize: typing.Optional[Literal["small", "middle", "large"]] = None,
        locale: typing.Optional[Literal["zh-cn", "en-us", "de-de"]] = None,
        wavesDisabled: typing.Optional[bool] = None,
        token: typing.Optional["Token"] = None,
        componentsToken: typing.Optional[typing.Dict[typing.Union[str, float, int], "ComponentsToken"]] = None,
        compatibilityMode: typing.Optional[bool] = None,
        enableLayer: typing.Optional[bool] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'key', 'children', 'algorithm', 'useOldTheme', 'primaryColor', 'componentDisabled', 'componentSize', 'locale', 'wavesDisabled', 'token', 'componentsToken', 'compatibilityMode', 'enableLayer']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'children', 'algorithm', 'useOldTheme', 'primaryColor', 'componentDisabled', 'componentSize', 'locale', 'wavesDisabled', 'token', 'componentsToken', 'compatibilityMode', 'enableLayer']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdConfigProvider, self).__init__(children=children, **args)
