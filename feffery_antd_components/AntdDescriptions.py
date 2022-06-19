# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdDescriptions(Component):
    """An AntdDescriptions component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional)

- id (string; optional)

- bordered (boolean; optional)

- className (string; optional)

- column (dict; optional)

    `column` is a number | dict with keys:

    - lg (number; optional)

    - md (number; optional)

    - sm (number; optional)

    - xl (number; optional)

    - xs (number; optional)

    - xxl (number; optional)

- contentStyle (dict; optional)

- key (string; optional)

- labelStyle (dict; optional)

- layout (a value equal to: 'horizontal', 'vertical'; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- size (a value equal to: 'small', 'default', 'large'; default 'default')

- style (dict; optional)

- title (string; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdDescriptions'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, title=Component.UNDEFINED, column=Component.UNDEFINED, bordered=Component.UNDEFINED, size=Component.UNDEFINED, layout=Component.UNDEFINED, labelStyle=Component.UNDEFINED, contentStyle=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'bordered', 'className', 'column', 'contentStyle', 'key', 'labelStyle', 'layout', 'loading_state', 'size', 'style', 'title']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'bordered', 'className', 'column', 'contentStyle', 'key', 'labelStyle', 'layout', 'loading_state', 'size', 'style', 'title']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdDescriptions, self).__init__(children=children, **args)
