# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdSider(Component):
    """An AntdSider component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The content of the tab - will only be displayed if this tab is
    selected.

- id (string; optional)

- breakpoint (a value equal to: 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'; optional)

- className (string; optional)

- collapsed (boolean; default False)

- collapsedWidth (number; optional)

- collapsible (boolean; optional)

- defaultCollapsed (boolean; optional)

- key (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- reverseArrow (boolean; optional)

- style (dict; optional)

- theme (a value equal to: 'light', 'dark'; optional)

- trigger (a list of or a singular dash component, string or number; optional)

- width (number; optional)"""
    _children_props = ['trigger']
    _base_nodes = ['trigger', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdSider'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, collapsed=Component.UNDEFINED, collapsedWidth=Component.UNDEFINED, collapsible=Component.UNDEFINED, defaultCollapsed=Component.UNDEFINED, reverseArrow=Component.UNDEFINED, theme=Component.UNDEFINED, width=Component.UNDEFINED, trigger=Component.UNDEFINED, breakpoint=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'breakpoint', 'className', 'collapsed', 'collapsedWidth', 'collapsible', 'defaultCollapsed', 'key', 'loading_state', 'reverseArrow', 'style', 'theme', 'trigger', 'width']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'breakpoint', 'className', 'collapsed', 'collapsedWidth', 'collapsible', 'defaultCollapsed', 'key', 'loading_state', 'reverseArrow', 'style', 'theme', 'trigger', 'width']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdSider, self).__init__(children=children, **args)
