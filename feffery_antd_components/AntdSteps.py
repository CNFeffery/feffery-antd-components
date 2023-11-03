# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdSteps(Component):
    """An AntdSteps component.


Keyword arguments:

- id (string; optional)

- allowClick (boolean; default False)

- className (string | dict; optional)

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

- responsive (boolean; default True)

- size (a value equal to: 'default', 'small'; default 'default')

- status (a value equal to: 'wait', 'process', 'finish', 'error'; default 'process')

- steps (list of dicts; required)

    `steps` is a list of dicts with keys:

    - description (a list of or a singular dash component, string or number; optional)

    - subTitle (a list of or a singular dash component, string or number; optional)

    - title (a list of or a singular dash component, string or number; required)

- style (dict; optional)

- type (a value equal to: 'default', 'navigation', 'inline'; default 'default'):
    设置步骤条渲染形式，可选的有'default'、'navigation'、'inline'  默认：'default'."""
    _children_props = ['steps[].title', 'steps[].subTitle', 'steps[].description']
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdSteps'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, steps=Component.REQUIRED, current=Component.UNDEFINED, direction=Component.UNDEFINED, labelPlacement=Component.UNDEFINED, progressDot=Component.UNDEFINED, size=Component.UNDEFINED, status=Component.UNDEFINED, type=Component.UNDEFINED, allowClick=Component.UNDEFINED, responsive=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'allowClick', 'className', 'current', 'direction', 'key', 'labelPlacement', 'loading_state', 'progressDot', 'responsive', 'size', 'status', 'steps', 'style', 'type']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'allowClick', 'className', 'current', 'direction', 'key', 'labelPlacement', 'loading_state', 'progressDot', 'responsive', 'size', 'status', 'steps', 'style', 'type']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        for k in ['steps']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(AntdSteps, self).__init__(**args)
