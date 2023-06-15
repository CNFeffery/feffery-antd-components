# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdDivider(Component):
    """An AntdDivider component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Text content of the inline text.

- id (string; optional):
    Component id.

- className (string | dict; optional):
    CSS class name.

- direction (a value equal to: "horizontal", "vertical"; default "horizontal"):
    Direction of the divider. Possible values are 'horizontal' and
    'vertical'. Default is 'horizontal'.

- fontColor (string; default "#000000"):
    Color of the inline text. Accepts valid color values in CSS.

- fontFamily (string; default "initial"):
    Font family of the inline text. Accepts valid font-family values
    in CSS.

- fontSize (string; optional):
    Font size of the inline text. Accepts valid font-size values in
    CSS.

- fontStyle (string; default "initial"):
    Font style of the inline text. Accepts valid font-style values in
    CSS.

- fontWeight (string; default "initial"):
    Font weight of the inline text. Accepts valid font-weight values
    in CSS.

- innerTextOrientation (a value equal to: "left", "center", "right"; default "center"):
    Text alignment of the inline text. Possible values are 'left',
    'center', and 'right'. Default is 'center'.

- isDashed (boolean; default False):
    Whether to render the divider as dashed line. True for dashed
    line, False for solid line. Default is False.

- key (string; optional):
    A unique identifier key used for refreshing assistance.

- lineColor (string; default "lightgrey"):
    Color of the divider. Accepts valid color values in CSS.

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
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, key=Component.UNDEFINED, innerTextOrientation=Component.UNDEFINED, isDashed=Component.UNDEFINED, direction=Component.UNDEFINED, fontSize=Component.UNDEFINED, lineColor=Component.UNDEFINED, fontStyle=Component.UNDEFINED, fontWeight=Component.UNDEFINED, fontFamily=Component.UNDEFINED, fontColor=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'direction', 'fontColor', 'fontFamily', 'fontSize', 'fontStyle', 'fontWeight', 'innerTextOrientation', 'isDashed', 'key', 'lineColor', 'loading_state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'direction', 'fontColor', 'fontFamily', 'fontSize', 'fontStyle', 'fontWeight', 'innerTextOrientation', 'isDashed', 'key', 'lineColor', 'loading_state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdDivider, self).__init__(children=children, **args)
