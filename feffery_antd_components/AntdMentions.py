# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdMentions(Component):
    """An AntdMentions component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional)

- id (string; optional)

- autoSize (dict; optional)

    `autoSize` is a boolean | dict with keys:

    - maxRows (number; optional)

    - minRows (number; optional)

- className (string; optional)

- defaultValue (string; optional)

- disabled (boolean; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- options (list of dicts; optional)

    `options` is a list of dicts with keys:

    - label (string; optional)

    - value (string; optional)

- placement (a value equal to: 'top', 'bottom'; optional)

- prefix (string; optional)

- selectedOptions (list of strings; optional)

- style (dict; optional)

- value (string; optional)"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, autoSize=Component.UNDEFINED, prefix=Component.UNDEFINED, defaultValue=Component.UNDEFINED, placement=Component.UNDEFINED, options=Component.UNDEFINED, selectedOptions=Component.UNDEFINED, value=Component.UNDEFINED, disabled=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'autoSize', 'className', 'defaultValue', 'disabled', 'loading_state', 'options', 'placement', 'prefix', 'selectedOptions', 'style', 'value']
        self._type = 'AntdMentions'
        self._namespace = 'feffery_antd_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'autoSize', 'className', 'defaultValue', 'disabled', 'loading_state', 'options', 'placement', 'prefix', 'selectedOptions', 'style', 'value']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdMentions, self).__init__(children=children, **args)
