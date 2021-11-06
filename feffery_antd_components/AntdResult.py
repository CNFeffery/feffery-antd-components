# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdResult(Component):
    """An AntdResult component.


Keyword arguments:

- id (string; optional)

- className (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- status (a value equal to: 'success', 'error', 'info', 'warning', '404', '403', '500'; optional)

- style (dict; optional)

- subTitle (string; optional)

- title (string; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, loading_state=Component.UNDEFINED, status=Component.UNDEFINED, title=Component.UNDEFINED, subTitle=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'loading_state', 'status', 'style', 'subTitle', 'title']
        self._type = 'AntdResult'
        self._namespace = 'feffery_antd_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'loading_state', 'status', 'style', 'subTitle', 'title']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdResult, self).__init__(**args)
