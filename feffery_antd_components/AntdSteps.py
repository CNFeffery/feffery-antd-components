# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdSteps(Component):
    """An AntdSteps component.


Keyword arguments:

- id (string; optional)

- allowClick (boolean; default False)

- className (string; optional)

- current (number; default 0)

- direction (a value equal to: 'horizontal', 'vertical'; default 'horizontal')

- key (string; optional)

- labelPlacement (a value equal to: 'horizontal', 'vertical'; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- progressDot (boolean; default False)

- size (a value equal to: 'default', 'small'; default 'default')

- status (a value equal to: 'wait', 'process', 'finish', 'error'; default 'process')

- steps (list of dicts; optional)

    `steps` is a list of dicts with keys:

    - description (string; optional)

    - subTitle (string; optional)

    - title (string; required)

- style (dict; optional)

- type (a value equal to: 'default', 'navigation'; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdSteps'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, loading_state=Component.UNDEFINED, current=Component.UNDEFINED, direction=Component.UNDEFINED, labelPlacement=Component.UNDEFINED, progressDot=Component.UNDEFINED, size=Component.UNDEFINED, status=Component.UNDEFINED, type=Component.UNDEFINED, allowClick=Component.UNDEFINED, steps=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'allowClick', 'className', 'current', 'direction', 'key', 'labelPlacement', 'loading_state', 'progressDot', 'size', 'status', 'steps', 'style', 'type']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'allowClick', 'className', 'current', 'direction', 'key', 'labelPlacement', 'loading_state', 'progressDot', 'size', 'status', 'steps', 'style', 'type']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdSteps, self).__init__(**args)
