# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdCarousel(Component):
    """An AntdCarousel component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional)

- id (string; optional)

- autoplay (boolean; optional)

- className (string; optional)

- dotPosition (a value equal to: 'top', 'bottom', 'left', 'right'; optional)

- easing (string; optional)

- effect (a value equal to: 'scrollx', 'fade'; optional)

- key (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- style (dict; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdCarousel'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, autoplay=Component.UNDEFINED, dotPosition=Component.UNDEFINED, easing=Component.UNDEFINED, effect=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'autoplay', 'className', 'dotPosition', 'easing', 'effect', 'key', 'loading_state', 'style']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'autoplay', 'className', 'dotPosition', 'easing', 'effect', 'key', 'loading_state', 'style']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdCarousel, self).__init__(children=children, **args)
