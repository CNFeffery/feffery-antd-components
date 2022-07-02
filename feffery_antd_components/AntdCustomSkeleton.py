# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdCustomSkeleton(Component):
    """An AntdCustomSkeleton component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional)

- id (string; optional)

- className (string; optional)

- debug (boolean; default False)

- excludeProps (list of strings; optional)

- includeProps (list of strings; optional)

- key (string; optional)

- listenPropsMode (a value equal to: 'default', 'exclude', 'include'; default 'default')

- loading (boolean; default False)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- skeletonContent (a list of or a singular dash component, string or number; optional)

- style (dict; optional)"""
    _children_props = ['skeletonContent']
    _base_nodes = ['skeletonContent', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdCustomSkeleton'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, skeletonContent=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, loading=Component.UNDEFINED, debug=Component.UNDEFINED, listenPropsMode=Component.UNDEFINED, excludeProps=Component.UNDEFINED, includeProps=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'debug', 'excludeProps', 'includeProps', 'key', 'listenPropsMode', 'loading', 'loading_state', 'skeletonContent', 'style']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'debug', 'excludeProps', 'includeProps', 'key', 'listenPropsMode', 'loading', 'loading_state', 'skeletonContent', 'style']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdCustomSkeleton, self).__init__(children=children, **args)
