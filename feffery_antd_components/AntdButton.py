# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdButton(Component):
    """An AntdButton component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Children of current component.

- id (string; optional):
    Id of current component.

- autoSpin (boolean; default False):
    Setting whether to automatically update loading to True after each
    button click,   enabling callback operations with a non-clickable
    button effect; default is False.

- block (boolean; default False):
    Setting whether the button should span the full width of its
    parent element, default is False.

- className (string | dict; optional):
    CSS class of current component.

- danger (boolean; default False):
    Setting whether the button should be in a dangerous state, default
    is False.

- debounceWait (number; default 200):
    Used to set the debounce waiting duration (in milliseconds) for
    nClicks listener update; default is 0.

- disabled (boolean; default False):
    Setting whether the button should be rendered as a disabled state,
    default is False.

- href (string; optional):
    Setting the URL for redirection, similar to the functionality of
    an <a> tag.

- icon (a list of or a singular dash component, string or number; optional):
    Component-specific parameter for setting the prefix icon element
    of the button.

- key (string; optional):
    Refreshing the key can force a redraw of the current component.

- loading (boolean; optional):
    Used to set whether the button renders a \"loading, not
    clickable\" effect; default is False.

- loadingChildren (a list of or a singular dash component, string or number; optional):
    Children of current component while loading=True.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- nClicks (number; default 0):
    Recording the number of times the button has been clicked since
    rendering, default is 0.

- shape (a value equal to: 'circle', 'round'; optional):
    Setting the shape of the button (circle: circle, round: rounded
    rectangle; default is not set, i.e., normal rectangle).

- size (a value equal to: 'small', 'middle', 'large'; default 'middle'):
    Setting the size of the button, available options are 'small',
    'middle', and 'large'; default is 'middle'.

- style (dict; optional):
    CSS style dict of current component.

- target (string; optional):
    Used in conjunction with the href parameter to set the type of
    action for the redirection.

- type (a value equal to: 'primary', 'ghost', 'dashed', 'link', 'text', 'default'; default 'default'):
    Setting the overall style of the button (optional options are
    primary, ghost, dashed, link, text, default; default is default)."""
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
