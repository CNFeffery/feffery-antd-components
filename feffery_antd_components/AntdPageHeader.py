# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdPageHeader(Component):
    """An AntdPageHeader component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The content of the tab - will only be displayed if this tab is
    selected.

- id (string; optional)

- backClicks (number; default 0)

- className (string; optional)

- ghost (boolean; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- showBackIcon (boolean; optional)

- style (dict; optional)

- subTitle (string; optional)

- title (string; optional)"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, title=Component.UNDEFINED, subTitle=Component.UNDEFINED, showBackIcon=Component.UNDEFINED, backClicks=Component.UNDEFINED, ghost=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'backClicks', 'className', 'ghost', 'loading_state', 'showBackIcon', 'style', 'subTitle', 'title']
        self._type = 'AntdPageHeader'
        self._namespace = 'feffery_antd_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'backClicks', 'className', 'ghost', 'loading_state', 'showBackIcon', 'style', 'subTitle', 'title']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdPageHeader, self).__init__(children=children, **args)
