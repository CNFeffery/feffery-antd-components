# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdText(Component):
    """An AntdText component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The content of the text.

- id (string; optional):
    Component id.

- className (string | dict; optional):
    CSS class name.

- code (boolean; optional):
    Sets whether to render the content in code mode.

- copyable (boolean; optional):
    Sets whether the content can be quickly copied.

- disabled (boolean; optional):
    Sets whether the content is disabled.

- italic (boolean; optional):
    Sets whether the content should be italic.

- key (string; optional):
    A unique identifier key used for refreshing assistance.

- keyboard (boolean; optional):
    Sets whether to add keyboard key style.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- locale (a value equal to: 'zh-cn', 'en-us'; default 'zh-cn'):
    Sets the language environment. Possible options are 'zh-cn' and
    'en-us'.

- mark (boolean; optional):
    Sets whether to add mark style.

- strikethrough (boolean; optional):
    Sets whether to render the content with strikethrough mode.

- strong (boolean; optional):
    Sets whether the content should be bold.

- style (dict; optional):
    Custom CSS styles.

- type (a value equal to: 'secondary', 'success', 'warning', 'danger'; optional):
    Sets the text status type for rendering. Possible options are
    'secondary', 'success', 'warning', and 'danger'. Default is no
    status.

- underline (boolean; optional):
    Sets whether to add underline."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdText'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, locale=Component.UNDEFINED, code=Component.UNDEFINED, copyable=Component.UNDEFINED, strikethrough=Component.UNDEFINED, disabled=Component.UNDEFINED, mark=Component.UNDEFINED, strong=Component.UNDEFINED, italic=Component.UNDEFINED, underline=Component.UNDEFINED, keyboard=Component.UNDEFINED, type=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'code', 'copyable', 'disabled', 'italic', 'key', 'keyboard', 'loading_state', 'locale', 'mark', 'strikethrough', 'strong', 'style', 'type', 'underline']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'code', 'copyable', 'disabled', 'italic', 'key', 'keyboard', 'loading_state', 'locale', 'mark', 'strikethrough', 'strong', 'style', 'type', 'underline']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdText, self).__init__(children=children, **args)
