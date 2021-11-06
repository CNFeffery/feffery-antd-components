# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdMenu(Component):
    """An AntdMenu component.


Keyword arguments:

- id (string; optional)

- className (string; optional)

- currentKey (string; optional)

- defaultOpenKeys (list of strings; optional)

- defaultSelectedKey (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- menuItems (list; optional)

- mode (a value equal to: 'vertical', 'horizontal', 'inline'; default 'vertical')

- renderCollapsedButton (boolean; default False)

- style (dict; optional)

- theme (a value equal to: 'light', 'dark'; default 'light')"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, menuItems=Component.UNDEFINED, mode=Component.UNDEFINED, theme=Component.UNDEFINED, currentKey=Component.UNDEFINED, defaultOpenKeys=Component.UNDEFINED, defaultSelectedKey=Component.UNDEFINED, renderCollapsedButton=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'currentKey', 'defaultOpenKeys', 'defaultSelectedKey', 'loading_state', 'menuItems', 'mode', 'renderCollapsedButton', 'style', 'theme']
        self._type = 'AntdMenu'
        self._namespace = 'feffery_antd_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'currentKey', 'defaultOpenKeys', 'defaultSelectedKey', 'loading_state', 'menuItems', 'mode', 'renderCollapsedButton', 'style', 'theme']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdMenu, self).__init__(**args)
