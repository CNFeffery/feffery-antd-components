# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdSpace(Component):
    """An AntdSpace component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The content of the tab - will only be displayed if this tab is
    selected.

- id (string; optional)

- addSplitLine (boolean; default False)

- align (a value equal to: 'start', 'end', 'center', 'baseline'; optional)

- className (string | dict; optional)

- classNames (dict; optional):
    细分控制子元素css类.

    `classNames` is a dict with keys:

    - item (string; optional):
        控制子项容器元素css类.

- customSplit (a list of or a singular dash component, string or number; optional)

- direction (a value equal to: 'vertical', 'horizontal'; default 'horizontal')

- key (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- size (a value equal to: 'small', 'middle', 'large' | number; default 'small')

- style (dict; optional)

- styles (dict; optional):
    细分控制子元素css样式.

    `styles` is a dict with keys:

    - item (dict; optional):
        控制子项容器元素css样式.

- wrap (boolean; default False)"""
    _children_props = ['customSplit']
    _base_nodes = ['customSplit', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdSpace'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, styles=Component.UNDEFINED, classNames=Component.UNDEFINED, key=Component.UNDEFINED, align=Component.UNDEFINED, direction=Component.UNDEFINED, size=Component.UNDEFINED, addSplitLine=Component.UNDEFINED, customSplit=Component.UNDEFINED, wrap=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'addSplitLine', 'align', 'className', 'classNames', 'customSplit', 'direction', 'key', 'loading_state', 'size', 'style', 'styles', 'wrap']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'addSplitLine', 'align', 'className', 'classNames', 'customSplit', 'direction', 'key', 'loading_state', 'size', 'style', 'styles', 'wrap']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdSpace, self).__init__(children=children, **args)
