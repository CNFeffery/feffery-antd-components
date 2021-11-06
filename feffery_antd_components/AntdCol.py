# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdCol(Component):
    """An AntdCol component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The content of the tab - will only be displayed if this tab is
    selected.

- id (string; optional)

- className (string; optional)

- flex (string | number; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- offset (number; optional)

- order (number; optional)

- pull (number; optional)

- push (number; optional)

- span (number; optional)

- style (dict; optional)"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, loading_state=Component.UNDEFINED, span=Component.UNDEFINED, offset=Component.UNDEFINED, order=Component.UNDEFINED, pull=Component.UNDEFINED, push=Component.UNDEFINED, flex=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'flex', 'loading_state', 'offset', 'order', 'pull', 'push', 'span', 'style']
        self._type = 'AntdCol'
        self._namespace = 'feffery_antd_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'flex', 'loading_state', 'offset', 'order', 'pull', 'push', 'span', 'style']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdCol, self).__init__(children=children, **args)
