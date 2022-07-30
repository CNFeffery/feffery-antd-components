# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdCollapse(Component):
    """An AntdCollapse component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional)

- id (string; optional)

- bordered (boolean; optional)

- className (string; optional)

- collapsible (a value equal to: 'header', 'disabled'; optional)

- forceRender (boolean; optional)

- ghost (boolean; optional)

- is_open (boolean; default True)

- key (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- persisted_props (list of a value equal to: 'is_open's; default ['is_open']):
    Properties whose user interactions will persist after refreshing
    the  component or the page. Since only `value` is allowed this
    prop can  normally be ignored.

- persistence (boolean | string | number; optional):
    Used to allow user interactions in this component to be persisted
    when  the component - or the page - is refreshed. If `persisted`
    is truthy and  hasn't changed from its previous value, a `value`
    that the user has  changed while using the app will keep that
    change, as long as  the new `value` also matches what was given
    originally.  Used in conjunction with `persistence_type`.

- persistence_type (a value equal to: 'local', 'session', 'memory'; default 'local'):
    Where persisted user changes will be stored:  memory: only kept in
    memory, reset on page refresh.  local: window.localStorage, data
    is kept after the browser quit.  session: window.sessionStorage,
    data is cleared once the browser quit.

- showArrow (boolean; optional)

- style (dict; optional)

- title (string; default '')"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdCollapse'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, title=Component.UNDEFINED, is_open=Component.UNDEFINED, bordered=Component.UNDEFINED, showArrow=Component.UNDEFINED, ghost=Component.UNDEFINED, collapsible=Component.UNDEFINED, forceRender=Component.UNDEFINED, loading_state=Component.UNDEFINED, persistence=Component.UNDEFINED, persisted_props=Component.UNDEFINED, persistence_type=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'bordered', 'className', 'collapsible', 'forceRender', 'ghost', 'is_open', 'key', 'loading_state', 'persisted_props', 'persistence', 'persistence_type', 'showArrow', 'style', 'title']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'bordered', 'className', 'collapsible', 'forceRender', 'ghost', 'is_open', 'key', 'loading_state', 'persisted_props', 'persistence', 'persistence_type', 'showArrow', 'style', 'title']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdCollapse, self).__init__(children=children, **args)
