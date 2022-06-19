# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdDivider(Component):
    """An AntdDivider component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional)

- id (string; optional)

- className (string; optional)

- direction (a value equal to: 'horizontal', 'vertical'; default 'horizontal')

- fontFamily (string; default 'initial')

- fontSize (string; optional)

- fontStyle (string; default 'initial')

- fontWeight (string; default 'initial')

- innerTextOrientation (a value equal to: 'left', 'center', 'right'; default 'center')

- isDashed (boolean; default False)

- key (string; optional)

- lineColor (string; default 'lightgrey')

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdDivider'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, key=Component.UNDEFINED, innerTextOrientation=Component.UNDEFINED, isDashed=Component.UNDEFINED, direction=Component.UNDEFINED, fontSize=Component.UNDEFINED, lineColor=Component.UNDEFINED, fontStyle=Component.UNDEFINED, fontWeight=Component.UNDEFINED, fontFamily=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'direction', 'fontFamily', 'fontSize', 'fontStyle', 'fontWeight', 'innerTextOrientation', 'isDashed', 'key', 'lineColor', 'loading_state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'direction', 'fontFamily', 'fontSize', 'fontStyle', 'fontWeight', 'innerTextOrientation', 'isDashed', 'key', 'lineColor', 'loading_state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdDivider, self).__init__(children=children, **args)
