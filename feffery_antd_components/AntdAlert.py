# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdAlert(Component):
    """An AntdAlert component.


Keyword arguments:

- id (string; optional)

- action (a list of or a singular dash component, string or number; optional)

- className (string; optional)

- closable (boolean; default False)

- description (a list of or a singular dash component, string or number; optional)

- key (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- message (a list of or a singular dash component, string or number; optional)

- messageRenderMode (a value equal to: 'default', 'loop-text', 'marquee'; default 'default')

- showIcon (boolean; optional)

- style (dict; optional)

- type (a value equal to: 'success', 'info', 'warning', 'error'; optional)"""
    _children_props = ['description', 'message', 'action']
    _base_nodes = ['description', 'message', 'action', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdAlert'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, description=Component.UNDEFINED, message=Component.UNDEFINED, type=Component.UNDEFINED, showIcon=Component.UNDEFINED, closable=Component.UNDEFINED, messageRenderMode=Component.UNDEFINED, action=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'action', 'className', 'closable', 'description', 'key', 'loading_state', 'message', 'messageRenderMode', 'showIcon', 'style', 'type']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'action', 'className', 'closable', 'description', 'key', 'loading_state', 'message', 'messageRenderMode', 'showIcon', 'style', 'type']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdAlert, self).__init__(**args)
