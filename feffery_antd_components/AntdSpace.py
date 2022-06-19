# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdSpace(Component):
    """An AntdSpace component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The content of the tab - will only be displayed if this tab is
    selected.

- id (string; optional)

- addSplitLine (boolean; default False)

- align (a value equal to: 'start', 'end', 'center', 'baseline'; optional)

- className (string; optional)

- direction (a value equal to: 'vertical', 'horizontal'; default 'horizontal')

- key (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- size (a value equal to: 'small', 'middle', 'large' | number; optional)

- style (dict; optional)

- wrap (boolean; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdSpace'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, align=Component.UNDEFINED, direction=Component.UNDEFINED, size=Component.UNDEFINED, addSplitLine=Component.UNDEFINED, wrap=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'addSplitLine', 'align', 'className', 'direction', 'key', 'loading_state', 'size', 'style', 'wrap']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'addSplitLine', 'align', 'className', 'direction', 'key', 'loading_state', 'size', 'style', 'wrap']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdSpace, self).__init__(children=children, **args)
