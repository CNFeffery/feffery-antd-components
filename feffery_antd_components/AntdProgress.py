# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdProgress(Component):
    """An AntdProgress component.


Keyword arguments:

- id (string; optional)

- className (string; optional)

- format (dict; optional)

    `format` is a dict with keys:

    - content (string; optional)

    - prefix (string; optional)

    - suffix (string; optional)

- gapDegree (number; optional)

- gapPosition (a value equal to: 'top', 'bottom', 'left', 'right'; optional)

- key (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- percent (number; optional)

- showInfo (boolean; optional)

- size (a value equal to: 'default', 'small'; optional)

- status (a value equal to: 'success', 'exception', 'normal', 'active'; optional)

- steps (number; optional)

- strokeColor (dict; optional)

    `strokeColor` is a string | dict with keys:

    - from (string; optional)

    - to (string; optional)

- strokeLinecap (a value equal to: 'round', 'square'; optional)

- strokeWidth (number; optional)

- style (dict; optional)

- trailColor (string; optional)

- type (a value equal to: 'line', 'circle', 'dashboard'; optional)

- width (number; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdProgress'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, type=Component.UNDEFINED, size=Component.UNDEFINED, percent=Component.UNDEFINED, format=Component.UNDEFINED, status=Component.UNDEFINED, showInfo=Component.UNDEFINED, strokeColor=Component.UNDEFINED, strokeLinecap=Component.UNDEFINED, strokeWidth=Component.UNDEFINED, trailColor=Component.UNDEFINED, width=Component.UNDEFINED, gapDegree=Component.UNDEFINED, gapPosition=Component.UNDEFINED, steps=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'format', 'gapDegree', 'gapPosition', 'key', 'loading_state', 'percent', 'showInfo', 'size', 'status', 'steps', 'strokeColor', 'strokeLinecap', 'strokeWidth', 'style', 'trailColor', 'type', 'width']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'format', 'gapDegree', 'gapPosition', 'key', 'loading_state', 'percent', 'showInfo', 'size', 'status', 'steps', 'strokeColor', 'strokeLinecap', 'strokeWidth', 'style', 'trailColor', 'type', 'width']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdProgress, self).__init__(**args)
