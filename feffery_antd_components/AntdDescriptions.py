# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdDescriptions(Component):
    """An AntdDescriptions component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional)

- id (string; optional)

- aria-* (string; optional):
    `aria-*`格式属性通配.

- bordered (boolean; default False)

- className (string | dict; optional)

- column (dict; default 3)

    `column` is a number | dict with keys:

    - lg (number; optional)

    - md (number; optional)

    - sm (number; optional)

    - xl (number; optional)

    - xs (number; optional)

    - xxl (number; optional)

- contentStyle (dict; optional)

- data-* (string; optional):
    `data-*`格式属性通配.

- items (list of dicts; optional)

    `items` is a list of dicts with keys:

    - children (a list of or a singular dash component, string or number; optional)

    - className (string; optional)

    - contentStyle (dict; optional)

    - label (a list of or a singular dash component, string or number; optional)

    - labelStyle (dict; optional)

    - span (number; optional)

    - style (dict; optional)

- key (string; optional)

- labelStyle (dict; optional)

- layout (a value equal to: 'horizontal', 'vertical'; default 'horizontal')

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- size (a value equal to: 'small', 'default', 'large'; default 'default')

- style (dict; optional)

- title (a list of or a singular dash component, string or number; optional)"""
    _children_props = ['items[].label', 'items[].children', 'title']
    _base_nodes = ['title', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdDescriptions'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, items=Component.UNDEFINED, title=Component.UNDEFINED, column=Component.UNDEFINED, bordered=Component.UNDEFINED, size=Component.UNDEFINED, layout=Component.UNDEFINED, labelStyle=Component.UNDEFINED, contentStyle=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'aria-*', 'bordered', 'className', 'column', 'contentStyle', 'data-*', 'items', 'key', 'labelStyle', 'layout', 'loading_state', 'size', 'style', 'title']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'aria-*', 'bordered', 'className', 'column', 'contentStyle', 'data-*', 'items', 'key', 'labelStyle', 'layout', 'loading_state', 'size', 'style', 'title']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdDescriptions, self).__init__(children=children, **args)
