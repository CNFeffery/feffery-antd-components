# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdSpoiler(Component):
    """An AntdSpoiler component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional)

- id (string; optional)

- className (string; optional)

- contentClassName (string; optional)

- contentStyle (dict; optional)

- hideLabel (string; optional)

- key (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- locale (a value equal to: 'zh-cn', 'en-us'; default 'zh-cn')

- maxHeight (number; default 50)

- open (boolean; default False)

- showLabel (string; optional)

- style (dict; optional)

- transitionDuration (string; default '0.1s')"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdSpoiler'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, contentClassName=Component.UNDEFINED, contentStyle=Component.UNDEFINED, key=Component.UNDEFINED, locale=Component.UNDEFINED, hideLabel=Component.UNDEFINED, showLabel=Component.UNDEFINED, open=Component.UNDEFINED, maxHeight=Component.UNDEFINED, transitionDuration=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'contentClassName', 'contentStyle', 'hideLabel', 'key', 'loading_state', 'locale', 'maxHeight', 'open', 'showLabel', 'style', 'transitionDuration']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'contentClassName', 'contentStyle', 'hideLabel', 'key', 'loading_state', 'locale', 'maxHeight', 'open', 'showLabel', 'style', 'transitionDuration']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdSpoiler, self).__init__(children=children, **args)
