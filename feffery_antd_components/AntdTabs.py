# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdTabs(Component):
    """An AntdTabs component.


Keyword arguments:

- id (string; optional)

- activeKey (string; optional)

- centered (boolean; default False)

- className (string | dict; optional)

- clickedContextMenu (dict; optional)

    `clickedContextMenu` is a dict with keys:

    - menuKey (string; optional)

    - tabKey (string; optional)

    - timestamp (number; optional)

- defaultActiveKey (string; optional)

- destroyInactiveTabPane (boolean; default False)

- disabledTabKeys (list of strings; optional)

- indicatorSize (dict; default {    subTractFromOrigin: False})

    `indicatorSize` is a dict with keys:

    - subTractFromOrigin (boolean; optional)

    - width (number; optional)

- inkBarAnimated (boolean; default True)

- itemKeys (list of strings; optional):
    用于按顺序同步记录items中各子项key值数组.

- items (list of dicts; optional)

    `items` is a list of dicts with keys:

    - children (a list of or a singular dash component, string or number; optional)

    - closable (boolean; optional)

    - closeIcon (boolean | a list of or a singular dash component, string or number; optional)

    - contextMenu (list of dicts; optional)

        `contextMenu` is a list of dicts with keys:

        - icon (string; optional)

        - iconRenderer (a value equal to: 'AntdIcon', 'fontawesome'; optional)

        - key (string; optional)

        - label (string; optional)

    - destroyInactiveTabPane (boolean; optional)

    - disabled (boolean; optional)

    - forceRender (boolean; optional)

    - key (string; optional)

    - label (a list of or a singular dash component, string or number; optional)

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

- size (a value equal to: 'small', 'default', 'large'; default 'default')

- style (dict; optional)

- tabBarGutter (number; optional)

- tabBarLeftExtraContent (a list of or a singular dash component, string or number; optional)

- tabBarRightExtraContent (a list of or a singular dash component, string or number; optional)

- tabCloseCounts (number; default 0)

- tabCount (number; optional)

- tabPaneAnimated (boolean; default False)

- tabPosition (a value equal to: 'top', 'left', 'right', 'bottom'; default 'top')

- type (a value equal to: 'line', 'card', 'editable-card'; default 'line')"""
    _children_props = ['items[].label', 'items[].children', 'items[].closeIcon', 'tabBarLeftExtraContent', 'tabBarRightExtraContent']
    _base_nodes = ['tabBarLeftExtraContent', 'tabBarRightExtraContent', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdTabs'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, items=Component.UNDEFINED, itemKeys=Component.UNDEFINED, activeKey=Component.UNDEFINED, defaultActiveKey=Component.UNDEFINED, disabledTabKeys=Component.UNDEFINED, tabPosition=Component.UNDEFINED, size=Component.UNDEFINED, type=Component.UNDEFINED, centered=Component.UNDEFINED, indicatorSize=Component.UNDEFINED, tabBarGutter=Component.UNDEFINED, inkBarAnimated=Component.UNDEFINED, tabPaneAnimated=Component.UNDEFINED, latestDeletePane=Component.UNDEFINED, tabCloseCounts=Component.UNDEFINED, tabBarLeftExtraContent=Component.UNDEFINED, tabBarRightExtraContent=Component.UNDEFINED, tabCount=Component.UNDEFINED, destroyInactiveTabPane=Component.UNDEFINED, clickedContextMenu=Component.UNDEFINED, loading_state=Component.UNDEFINED, persistence=Component.UNDEFINED, persisted_props=Component.UNDEFINED, persistence_type=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'activeKey', 'centered', 'className', 'clickedContextMenu', 'defaultActiveKey', 'destroyInactiveTabPane', 'disabledTabKeys', 'indicatorSize', 'inkBarAnimated', 'itemKeys', 'items', 'key', 'latestDeletePane', 'loading_state', 'persisted_props', 'persistence', 'persistence_type', 'size', 'style', 'tabBarGutter', 'tabBarLeftExtraContent', 'tabBarRightExtraContent', 'tabCloseCounts', 'tabCount', 'tabPaneAnimated', 'tabPosition', 'type']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'activeKey', 'centered', 'className', 'clickedContextMenu', 'defaultActiveKey', 'destroyInactiveTabPane', 'disabledTabKeys', 'indicatorSize', 'inkBarAnimated', 'itemKeys', 'items', 'key', 'latestDeletePane', 'loading_state', 'persisted_props', 'persistence', 'persistence_type', 'size', 'style', 'tabBarGutter', 'tabBarLeftExtraContent', 'tabBarRightExtraContent', 'tabCloseCounts', 'tabCount', 'tabPaneAnimated', 'tabPosition', 'type']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdTabs, self).__init__(**args)
