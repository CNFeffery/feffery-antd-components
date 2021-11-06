# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdText(Component):
    """An AntdText component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The content of the tab - will only be displayed if this tab is
    selected.

- id (string; optional)

- className (string; optional)

- code (boolean; optional)

- copyable (boolean; optional)

- disabled (boolean; optional)

- italic (boolean; optional)

- keyboard (boolean; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- mark (boolean; optional)

- strikethrough (boolean; optional)

- strong (boolean; optional)

- style (dict; optional)

- type (a value equal to: 'secondary', 'success', 'warning', 'danger'; optional)

- underline (boolean; optional)"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, code=Component.UNDEFINED, copyable=Component.UNDEFINED, strikethrough=Component.UNDEFINED, disabled=Component.UNDEFINED, mark=Component.UNDEFINED, strong=Component.UNDEFINED, italic=Component.UNDEFINED, underline=Component.UNDEFINED, keyboard=Component.UNDEFINED, type=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'code', 'copyable', 'disabled', 'italic', 'keyboard', 'loading_state', 'mark', 'strikethrough', 'strong', 'style', 'type', 'underline']
        self._type = 'AntdText'
        self._namespace = 'feffery_antd_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'code', 'copyable', 'disabled', 'italic', 'keyboard', 'loading_state', 'mark', 'strikethrough', 'strong', 'style', 'type', 'underline']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdText, self).__init__(children=children, **args)
