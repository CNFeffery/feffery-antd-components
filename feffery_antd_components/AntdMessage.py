# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdMessage(Component):
    """An AntdMessage component.


Keyword arguments:

- id (string; optional)

- className (string; optional)

- content (string; optional)

- duration (number; default 3)

- icon (string; optional)

- iconRenderer (a value equal to: 'AntdIcon', 'fontawesome'; default 'AntdIcon')

- key (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- maxCount (number; optional)

- style (dict; optional)

- top (number; default 8)

- type (a value equal to: 'default', 'success', 'error', 'info', 'warning'; default 'default')

- underCompatibilityMode (boolean; optional):
    设置当前消息提示组件是否处于设置了compatibilityMode=True的AntdConfigProvider内部."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdMessage'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, content=Component.UNDEFINED, type=Component.UNDEFINED, duration=Component.UNDEFINED, top=Component.UNDEFINED, maxCount=Component.UNDEFINED, icon=Component.UNDEFINED, iconRenderer=Component.UNDEFINED, underCompatibilityMode=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'content', 'duration', 'icon', 'iconRenderer', 'key', 'loading_state', 'maxCount', 'style', 'top', 'type', 'underCompatibilityMode']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'content', 'duration', 'icon', 'iconRenderer', 'key', 'loading_state', 'maxCount', 'style', 'top', 'type', 'underCompatibilityMode']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdMessage, self).__init__(**args)
