# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdSegmentedColoring(Component):
    """An AntdSegmentedColoring component.


Keyword arguments:

- id (string; optional)

- bordered (boolean; default True)

- breakpoints (list of numbers; required)

- className (string; optional)

- colorBlockPosition (a value equal to: 'left', 'right'; default 'right')

- colorBlockStyle (dict; optional)

- colors (list of strings; required)

- controls (boolean; default True)

- disabled (boolean; default False)

- inputNumberStyle (dict; optional)

- key (string; optional)

- keyboard (boolean; default True)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- max (number; optional)

- min (number; optional)

- placeholder (string; optional)

- precision (number; default 2)

- readOnly (boolean; default False)

- size (a value equal to: 'large', 'small', 'default'; default 'default')

- step (number; default 0.01)

- style (dict; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdSegmentedColoring'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, size=Component.UNDEFINED, bordered=Component.UNDEFINED, controls=Component.UNDEFINED, disabled=Component.UNDEFINED, keyboard=Component.UNDEFINED, placeholder=Component.UNDEFINED, min=Component.UNDEFINED, max=Component.UNDEFINED, step=Component.UNDEFINED, precision=Component.UNDEFINED, readOnly=Component.UNDEFINED, breakpoints=Component.REQUIRED, colors=Component.REQUIRED, inputNumberStyle=Component.UNDEFINED, colorBlockStyle=Component.UNDEFINED, colorBlockPosition=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'bordered', 'breakpoints', 'className', 'colorBlockPosition', 'colorBlockStyle', 'colors', 'controls', 'disabled', 'inputNumberStyle', 'key', 'keyboard', 'loading_state', 'max', 'min', 'placeholder', 'precision', 'readOnly', 'size', 'step', 'style']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'bordered', 'breakpoints', 'className', 'colorBlockPosition', 'colorBlockStyle', 'colors', 'controls', 'disabled', 'inputNumberStyle', 'key', 'keyboard', 'loading_state', 'max', 'min', 'placeholder', 'precision', 'readOnly', 'size', 'step', 'style']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in ['breakpoints', 'colors']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdSegmentedColoring, self).__init__(**args)
