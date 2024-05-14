# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdEmpty(Component):
    """An AntdEmpty component.
空状态组件AntdEmpty

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    组件型，内嵌元素.

- id (string; optional):
    组件唯一id.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- data-* (string; optional):
    `data-*`格式属性通配.

- description (a list of or a singular dash component, string or number | boolean; optional):
    描述信息内容.

- image (string | a value equal to: 'default', 'simple'; default 'default'):
    状态图片地址，也可以使用内置图片，可选项有`'default'`、`'simple'`  默认值：`'default'`.

- imageStyle (dict; optional):
    状态图片css样式.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- locale (a value equal to: 'zh-cn', 'en-us'; default 'zh-cn'):
    组件文案语种，可选项有`'zh-cn'`、`'en-us'`  默认值：`'zh-cn'`.

- style (dict; optional):
    当前组件css样式."""
    _children_props = ['description']
    _base_nodes = ['description', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdEmpty'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, locale=Component.UNDEFINED, description=Component.UNDEFINED, image=Component.UNDEFINED, imageStyle=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'aria-*', 'className', 'data-*', 'description', 'image', 'imageStyle', 'key', 'loading_state', 'locale', 'style']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'aria-*', 'className', 'data-*', 'description', 'image', 'imageStyle', 'key', 'loading_state', 'locale', 'style']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdEmpty, self).__init__(children=children, **args)
