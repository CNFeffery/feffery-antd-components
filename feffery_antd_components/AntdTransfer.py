# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdTransfer(Component):
    """An AntdTransfer component.


Keyword arguments:

- id (string; optional)

- className (string; optional)

- dataSource (list of dicts; optional)

    `dataSource` is a list of dicts with keys:

    - key (string | number; optional)

    - title (string; optional)

- disabled (boolean; optional)

- height (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- moveDirection (string; optional)

- moveKeys (list; optional)

- operations (list; optional)

- pagination (dict; default False)

    `pagination` is a boolean | dict with keys:

    - pageSize (number; optional)

- showSearch (boolean; default False)

- showSelectAll (boolean; default True)

- style (dict; optional)

- targetKeys (list; optional)

- titles (list; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, dataSource=Component.UNDEFINED, height=Component.UNDEFINED, pagination=Component.UNDEFINED, operations=Component.UNDEFINED, showSearch=Component.UNDEFINED, showSelectAll=Component.UNDEFINED, titles=Component.UNDEFINED, targetKeys=Component.UNDEFINED, moveDirection=Component.UNDEFINED, moveKeys=Component.UNDEFINED, disabled=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'dataSource', 'disabled', 'height', 'loading_state', 'moveDirection', 'moveKeys', 'operations', 'pagination', 'showSearch', 'showSelectAll', 'style', 'targetKeys', 'titles']
        self._type = 'AntdTransfer'
        self._namespace = 'feffery_antd_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'dataSource', 'disabled', 'height', 'loading_state', 'moveDirection', 'moveKeys', 'operations', 'pagination', 'showSearch', 'showSelectAll', 'style', 'targetKeys', 'titles']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdTransfer, self).__init__(**args)
