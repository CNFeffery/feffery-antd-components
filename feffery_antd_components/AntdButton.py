# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdButton(Component):
    """An AntdButton component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional)

- id (string; optional)

- autoSpin (boolean; default False)

- block (boolean; default False)

- className (string | dict; optional)

- danger (boolean; default False)

- debounceWait (number; default 200)

- disabled (boolean; default False)

- href (string; optional)

- icon (a list of or a singular dash component, string or number; optional)

- key (string; optional)

- loading (boolean; optional)

- loadingChildren (a list of or a singular dash component, string or number; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- nClicks (number; default 0)

- shape (a value equal to: 'circle', 'round'; optional)

- size (a value equal to: 'small', 'middle', 'large'; default 'middle')

- style (dict; optional)

- target (string; optional)

- type (a value equal to: 'primary', 'ghost', 'dashed', 'link', 'text', 'default'; default 'default')"""
    _children_props = ['loadingChildren', 'icon']
    _base_nodes = ['loadingChildren', 'icon', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdButton'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, loadingChildren=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, type=Component.UNDEFINED, href=Component.UNDEFINED, target=Component.UNDEFINED, block=Component.UNDEFINED, danger=Component.UNDEFINED, disabled=Component.UNDEFINED, shape=Component.UNDEFINED, size=Component.UNDEFINED, nClicks=Component.UNDEFINED, debounceWait=Component.UNDEFINED, icon=Component.UNDEFINED, loading=Component.UNDEFINED, autoSpin=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'autoSpin', 'block', 'className', 'danger', 'debounceWait', 'disabled', 'href', 'icon', 'key', 'loading', 'loadingChildren', 'loading_state', 'nClicks', 'shape', 'size', 'style', 'target', 'type']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'autoSpin', 'block', 'className', 'danger', 'debounceWait', 'disabled', 'href', 'icon', 'key', 'loading', 'loadingChildren', 'loading_state', 'nClicks', 'shape', 'size', 'style', 'target', 'type']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdButton, self).__init__(children=children, **args)
