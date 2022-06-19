# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdBadge(Component):
    """An AntdBadge component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional)

- id (string; optional)

- className (string; optional)

- color (string; optional)

- count (number; optional)

- dot (boolean; optional)

- key (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- nClicks (number; default 0)

- offset (list of numbers; optional)

- overflowCount (number; optional)

- showZero (boolean; optional)

- size (a value equal to: 'default', 'small'; optional)

- status (a value equal to: 'success', 'processing', 'default', 'error', 'warning'; optional)

- style (dict; optional)

- text (string; optional)

- title (string; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdBadge'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, color=Component.UNDEFINED, count=Component.UNDEFINED, dot=Component.UNDEFINED, offset=Component.UNDEFINED, overflowCount=Component.UNDEFINED, showZero=Component.UNDEFINED, status=Component.UNDEFINED, text=Component.UNDEFINED, title=Component.UNDEFINED, size=Component.UNDEFINED, nClicks=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'color', 'count', 'dot', 'key', 'loading_state', 'nClicks', 'offset', 'overflowCount', 'showZero', 'size', 'status', 'style', 'text', 'title']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'color', 'count', 'dot', 'key', 'loading_state', 'nClicks', 'offset', 'overflowCount', 'showZero', 'size', 'status', 'style', 'text', 'title']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdBadge, self).__init__(children=children, **args)
