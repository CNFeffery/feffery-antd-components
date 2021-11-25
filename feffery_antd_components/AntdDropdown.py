# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdDropdown(Component):
    """An AntdDropdown component.


Keyword arguments:

- id (string; optional)

- arrow (boolean; optional)

- buttonMode (boolean; default False)

- className (string; optional)

- clickedKey (string; optional)

- disabled (boolean; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- menuItems (list of dicts; optional)

    `menuItems` is a list of dicts with keys:

    - disabled (boolean; optional)

    - href (string; optional)

    - icon (string; optional)

    - isDivider (boolean; optional)

    - key (string; optional)

    - target (string; optional)

    - title (string; optional)

- overlayClassName (string; optional)

- overlayStyle (dict; optional)

- placement (a value equal to: 'bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight'; optional)

- style (dict; optional)

- title (string; optional)

- trigger (a value equal to: 'click', 'hover'; default 'hover')

- visible (boolean; default False)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, title=Component.UNDEFINED, buttonMode=Component.UNDEFINED, clickedKey=Component.UNDEFINED, menuItems=Component.UNDEFINED, arrow=Component.UNDEFINED, disabled=Component.UNDEFINED, overlayClassName=Component.UNDEFINED, overlayStyle=Component.UNDEFINED, placement=Component.UNDEFINED, trigger=Component.UNDEFINED, visible=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'arrow', 'buttonMode', 'className', 'clickedKey', 'disabled', 'loading_state', 'menuItems', 'overlayClassName', 'overlayStyle', 'placement', 'style', 'title', 'trigger', 'visible']
        self._type = 'AntdDropdown'
        self._namespace = 'feffery_antd_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'arrow', 'buttonMode', 'className', 'clickedKey', 'disabled', 'loading_state', 'menuItems', 'overlayClassName', 'overlayStyle', 'placement', 'style', 'title', 'trigger', 'visible']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdDropdown, self).__init__(**args)
