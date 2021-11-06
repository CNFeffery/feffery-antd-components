# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdCollapse(Component):
    """An AntdCollapse component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The content of the tab - will only be displayed if this tab is
    selected.

- id (string; optional)

- bordered (boolean; optional)

- className (string; optional)

- collapsible (a value equal to: 'header', 'disabled'; optional)

- ghost (boolean; optional)

- is_open (boolean; default True)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- pureMode (boolean; default False)

- showArrow (boolean; optional)

- style (dict; optional)

- title (string; default '')"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, loading_state=Component.UNDEFINED, title=Component.UNDEFINED, is_open=Component.UNDEFINED, pureMode=Component.UNDEFINED, bordered=Component.UNDEFINED, showArrow=Component.UNDEFINED, ghost=Component.UNDEFINED, collapsible=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'bordered', 'className', 'collapsible', 'ghost', 'is_open', 'loading_state', 'pureMode', 'showArrow', 'style', 'title']
        self._type = 'AntdCollapse'
        self._namespace = 'feffery_antd_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'bordered', 'className', 'collapsible', 'ghost', 'is_open', 'loading_state', 'pureMode', 'showArrow', 'style', 'title']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdCollapse, self).__init__(children=children, **args)
