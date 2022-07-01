# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdTabs(Component):
    """An AntdTabs component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The content of the tab - will only be displayed if this tab is
    selected.

- id (string; optional)

- activeKey (string; optional)

- centered (boolean; optional)

- className (string; optional)

- defaultActiveKey (string; optional)

- inkBarAnimated (boolean; default True)

- key (string; optional)

- latestDeletePane (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- persisted_props (list of a value equal to: 'activeKey's; default ['activeKey']):
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

- size (a value equal to: 'small', 'default', 'large'; optional)

- style (dict; optional)

- tabBarGutter (number; optional)

- tabBarLeftExtraContent (a list of or a singular dash component, string or number; optional)

- tabBarRightExtraContent (a list of or a singular dash component, string or number; optional)

- tabPaneAnimated (boolean; default False)

- tabPosition (a value equal to: 'top', 'left', 'right', 'bottom'; optional)

- type (a value equal to: 'line', 'card', 'editable-card'; optional)"""
    _children_props = ['tabBarLeftExtraContent', 'tabBarRightExtraContent']
    _base_nodes = ['tabBarLeftExtraContent', 'tabBarRightExtraContent', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdTabs'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, tabBarLeftExtraContent=Component.UNDEFINED, tabBarRightExtraContent=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, defaultActiveKey=Component.UNDEFINED, tabPosition=Component.UNDEFINED, size=Component.UNDEFINED, type=Component.UNDEFINED, centered=Component.UNDEFINED, tabBarGutter=Component.UNDEFINED, inkBarAnimated=Component.UNDEFINED, tabPaneAnimated=Component.UNDEFINED, activeKey=Component.UNDEFINED, latestDeletePane=Component.UNDEFINED, loading_state=Component.UNDEFINED, persistence=Component.UNDEFINED, persisted_props=Component.UNDEFINED, persistence_type=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'activeKey', 'centered', 'className', 'defaultActiveKey', 'inkBarAnimated', 'key', 'latestDeletePane', 'loading_state', 'persisted_props', 'persistence', 'persistence_type', 'size', 'style', 'tabBarGutter', 'tabBarLeftExtraContent', 'tabBarRightExtraContent', 'tabPaneAnimated', 'tabPosition', 'type']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'activeKey', 'centered', 'className', 'defaultActiveKey', 'inkBarAnimated', 'key', 'latestDeletePane', 'loading_state', 'persisted_props', 'persistence', 'persistence_type', 'size', 'style', 'tabBarGutter', 'tabBarLeftExtraContent', 'tabBarRightExtraContent', 'tabPaneAnimated', 'tabPosition', 'type']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdTabs, self).__init__(children=children, **args)
