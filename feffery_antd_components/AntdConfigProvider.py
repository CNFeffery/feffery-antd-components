# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdConfigProvider(Component):
    """An AntdConfigProvider component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional)

- id (string; optional)

- algorithm (a value equal to: 'default', 'dark', 'compact' | list of a value equal to: 'default', 'dark', 'compact's; default 'default'):
    为内部组件设置快捷主题算法，支持多种主题组合，可选的主题有'default'、'dark'、'compact'
    默认：'default'.

- componentDisabled (boolean; optional)

- componentSize (a value equal to: 'small', 'middle', 'large'; optional)

- key (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- locale (a value equal to: 'zh-cn', 'en-us'; optional)

- primaryColor (string; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdConfigProvider'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, key=Component.UNDEFINED, algorithm=Component.UNDEFINED, primaryColor=Component.UNDEFINED, componentDisabled=Component.UNDEFINED, componentSize=Component.UNDEFINED, locale=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'algorithm', 'componentDisabled', 'componentSize', 'key', 'loading_state', 'locale', 'primaryColor']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'algorithm', 'componentDisabled', 'componentSize', 'key', 'loading_state', 'locale', 'primaryColor']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdConfigProvider, self).__init__(children=children, **args)
