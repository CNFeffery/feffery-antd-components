# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdAvatar(Component):
    """An AntdAvatar component.


Keyword arguments:

- id (string; optional)

- alt (string; optional)

- className (string; optional)

- gap (number; optional)

- icon (string; optional)

- key (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- mode (a value equal to: 'text', 'icon', 'image'; default 'icon')

- shape (a value equal to: 'circle', 'square'; optional)

- size (dict; optional)

    `size` is a number | a value equal to: 'large', 'small', 'default'
    | dict with keys:

    - lg (number; optional)

    - md (number; optional)

    - sm (number; optional)

    - xl (number; optional)

    - xs (number; optional)

    - xxl (number; optional)

- src (string; optional)

- srcSet (string; optional)

- style (dict; optional)

- text (string; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdAvatar'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, gap=Component.UNDEFINED, mode=Component.UNDEFINED, text=Component.UNDEFINED, icon=Component.UNDEFINED, alt=Component.UNDEFINED, src=Component.UNDEFINED, srcSet=Component.UNDEFINED, size=Component.UNDEFINED, shape=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'alt', 'className', 'gap', 'icon', 'key', 'loading_state', 'mode', 'shape', 'size', 'src', 'srcSet', 'style', 'text']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'alt', 'className', 'gap', 'icon', 'key', 'loading_state', 'mode', 'shape', 'size', 'src', 'srcSet', 'style', 'text']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdAvatar, self).__init__(**args)
