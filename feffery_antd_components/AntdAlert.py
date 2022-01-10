# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdAlert(Component):
    """An AntdAlert component.


Keyword arguments:

- id (string; optional)

- className (string; optional)

- closable (boolean; default False)

- description (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- message (string | list of strings; optional)

- messageRenderMode (a value equal to: 'default', 'loop-text', 'marquee'; default 'default')

- renderLoopText (boolean; optional)

- showIcon (boolean; optional)

- style (dict; optional)

- type (a value equal to: 'success', 'info', 'warning', 'error'; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, description=Component.UNDEFINED, message=Component.UNDEFINED, type=Component.UNDEFINED, showIcon=Component.UNDEFINED, closable=Component.UNDEFINED, renderLoopText=Component.UNDEFINED, messageRenderMode=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'closable', 'description', 'loading_state', 'message', 'messageRenderMode', 'renderLoopText', 'showIcon', 'style', 'type']
        self._type = 'AntdAlert'
        self._namespace = 'feffery_antd_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'closable', 'description', 'loading_state', 'message', 'messageRenderMode', 'renderLoopText', 'showIcon', 'style', 'type']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdAlert, self).__init__(**args)
