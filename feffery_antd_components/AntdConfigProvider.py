# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


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
    是否启用layer样式降权  默认值：`False`.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

    - component_name (string; optional):
        Holds the name of the component that is loading."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdConfigProvider'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, algorithm=Component.UNDEFINED, useOldTheme=Component.UNDEFINED, primaryColor=Component.UNDEFINED, componentDisabled=Component.UNDEFINED, componentSize=Component.UNDEFINED, locale=Component.UNDEFINED, wavesDisabled=Component.UNDEFINED, token=Component.UNDEFINED, componentsToken=Component.UNDEFINED, compatibilityMode=Component.UNDEFINED, enableLayer=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'key', 'children', 'algorithm', 'useOldTheme', 'primaryColor', 'componentDisabled', 'componentSize', 'locale', 'wavesDisabled', 'token', 'componentsToken', 'compatibilityMode', 'enableLayer', 'loading_state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'key', 'children', 'algorithm', 'useOldTheme', 'primaryColor', 'componentDisabled', 'componentSize', 'locale', 'wavesDisabled', 'token', 'componentsToken', 'compatibilityMode', 'enableLayer', 'loading_state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdConfigProvider, self).__init__(children=children, **args)
