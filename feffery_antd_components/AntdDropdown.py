# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdDropdown(Component):
    """An AntdDropdown component.


Keyword arguments:

- id (string; optional)

- arrow (boolean; default False)

- autoAdjustOverflow (boolean; default True)

- buttonMode (boolean; default False)

- buttonProps (dict; optional)

    `buttonProps` is a dict with keys:

    - className (string; optional)

    - danger (boolean; optional)

    - size (a value equal to: 'default', 'small', 'large'; optional)

    - style (dict; optional)

    - type (a value equal to: 'primary', 'ghost', 'dashed', 'link', 'text', 'default'; optional)

- className (string | dict; optional)

- clickedKey (string; optional)

- disabled (boolean; default False)

- freePosition (boolean; default False)

- freePositionClassName (string; optional)

- freePositionStyle (dict; optional)

- key (string; optional)

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

    - iconRenderer (a value equal to: 'AntdIcon', 'fontawesome'; optional)

    - isDivider (boolean; optional)

    - key (string; optional)

    - target (string; optional)

    - title (string; optional)

- nClicks (number; default 0)

- overlayClassName (string | dict; optional)

- overlayStyle (dict; optional)

- placement (a value equal to: 'bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight'; optional)

- popupContainer (a value equal to: 'parent', 'body'; default 'body')

- style (dict; optional)

- title (string; optional)

- trigger (a value equal to: 'click', 'hover'; default 'hover')

- visible (boolean; default False)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdDropdown'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, title=Component.UNDEFINED, buttonMode=Component.UNDEFINED, buttonProps=Component.UNDEFINED, freePosition=Component.UNDEFINED, freePositionStyle=Component.UNDEFINED, freePositionClassName=Component.UNDEFINED, clickedKey=Component.UNDEFINED, nClicks=Component.UNDEFINED, menuItems=Component.UNDEFINED, arrow=Component.UNDEFINED, disabled=Component.UNDEFINED, overlayClassName=Component.UNDEFINED, overlayStyle=Component.UNDEFINED, placement=Component.UNDEFINED, trigger=Component.UNDEFINED, autoAdjustOverflow=Component.UNDEFINED, visible=Component.UNDEFINED, popupContainer=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'arrow', 'autoAdjustOverflow', 'buttonMode', 'buttonProps', 'className', 'clickedKey', 'disabled', 'freePosition', 'freePositionClassName', 'freePositionStyle', 'key', 'loading_state', 'menuItems', 'nClicks', 'overlayClassName', 'overlayStyle', 'placement', 'popupContainer', 'style', 'title', 'trigger', 'visible']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'arrow', 'autoAdjustOverflow', 'buttonMode', 'buttonProps', 'className', 'clickedKey', 'disabled', 'freePosition', 'freePositionClassName', 'freePositionStyle', 'key', 'loading_state', 'menuItems', 'nClicks', 'overlayClassName', 'overlayStyle', 'placement', 'popupContainer', 'style', 'title', 'trigger', 'visible']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdDropdown, self).__init__(**args)
