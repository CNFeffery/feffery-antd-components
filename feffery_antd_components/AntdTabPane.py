# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdTabPane(Component):
    """An AntdTabPane component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The content of the tab - will only be displayed if this tab is
    selected.

- id (string; optional)

- className (string; optional)

- closable (boolean; optional)

- disabled (boolean; optional)

- key (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- style (dict; optional)

- tab (string; optional)

- titleSideInfoPopover (dict; optional)

    `titleSideInfoPopover` is a dict with keys:

    - content (string; optional)

    - title (string; optional)"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, tab=Component.UNDEFINED, key=Component.UNDEFINED, disabled=Component.UNDEFINED, closable=Component.UNDEFINED, titleSideInfoPopover=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'closable', 'disabled', 'key', 'loading_state', 'style', 'tab', 'titleSideInfoPopover']
        self._type = 'AntdTabPane'
        self._namespace = 'feffery_antd_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'closable', 'disabled', 'key', 'loading_state', 'style', 'tab', 'titleSideInfoPopover']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdTabPane, self).__init__(children=children, **args)
