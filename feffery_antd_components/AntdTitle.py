# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdTitle(Component):
    """An AntdTitle component.


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

- key (string; optional)

- keyboard (boolean; optional)

- level (number; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- locale (a value equal to: 'zh-cn', 'en-us'; default 'zh-cn')

- mark (boolean; optional)

- strikethrough (boolean; optional)

- strong (boolean; optional)

- style (dict; optional)

- type (a value equal to: 'secondary', 'success', 'warning', 'danger'; optional)

- underline (boolean; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdTitle'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, locale=Component.UNDEFINED, level=Component.UNDEFINED, code=Component.UNDEFINED, copyable=Component.UNDEFINED, strikethrough=Component.UNDEFINED, disabled=Component.UNDEFINED, mark=Component.UNDEFINED, strong=Component.UNDEFINED, italic=Component.UNDEFINED, underline=Component.UNDEFINED, keyboard=Component.UNDEFINED, type=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'code', 'copyable', 'disabled', 'italic', 'key', 'keyboard', 'level', 'loading_state', 'locale', 'mark', 'strikethrough', 'strong', 'style', 'type', 'underline']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'code', 'copyable', 'disabled', 'italic', 'key', 'keyboard', 'level', 'loading_state', 'locale', 'mark', 'strikethrough', 'strong', 'style', 'type', 'underline']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdTitle, self).__init__(children=children, **args)
