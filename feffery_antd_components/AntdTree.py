# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdTree(Component):
    """An AntdTree component.


Keyword arguments:

- id (string; optional)

- checkStrictly (boolean; optional)

- checkable (boolean; optional)

- checkedKeys (list; optional)

- className (string; optional)

- defaultCheckedKeys (list of strings; optional)

- defaultExpandAll (boolean; optional)

- defaultExpandParent (boolean; optional)

- defaultExpandedKeys (list of strings; optional)

- defaultSelectedKeys (list of strings; optional)

- draggable (boolean; optional)

- expandedKeys (list of strings; optional)

- halfCheckedKeys (list; optional)

- height (number; optional)

- key (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- multiple (boolean; optional)

- persisted_props (list of a value equal to: 'selectedKeys', 'checkedKeys', 'expandedKeys's; default ['selectedKeys', 'checkedKeys', 'expandedKeys']):
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

- selectable (boolean; optional)

- selectedKeys (list; optional)

- showIcon (boolean; default True)

- showLine (dict; default { 'showLeafIcon': False })

    `showLine` is a boolean | dict with keys:

    - showLeafIcon (boolean; optional)

- style (dict; optional)

- treeData (list; optional)

- treeDataMode (a value equal to: 'tree', 'flat'; default 'tree')"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdTree'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, treeData=Component.UNDEFINED, treeDataMode=Component.UNDEFINED, showIcon=Component.UNDEFINED, checkable=Component.UNDEFINED, defaultExpandAll=Component.UNDEFINED, defaultExpandedKeys=Component.UNDEFINED, defaultExpandParent=Component.UNDEFINED, checkStrictly=Component.UNDEFINED, defaultCheckedKeys=Component.UNDEFINED, defaultSelectedKeys=Component.UNDEFINED, multiple=Component.UNDEFINED, selectable=Component.UNDEFINED, showLine=Component.UNDEFINED, selectedKeys=Component.UNDEFINED, checkedKeys=Component.UNDEFINED, halfCheckedKeys=Component.UNDEFINED, expandedKeys=Component.UNDEFINED, height=Component.UNDEFINED, draggable=Component.UNDEFINED, loading_state=Component.UNDEFINED, persistence=Component.UNDEFINED, persisted_props=Component.UNDEFINED, persistence_type=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'checkStrictly', 'checkable', 'checkedKeys', 'className', 'defaultCheckedKeys', 'defaultExpandAll', 'defaultExpandParent', 'defaultExpandedKeys', 'defaultSelectedKeys', 'draggable', 'expandedKeys', 'halfCheckedKeys', 'height', 'key', 'loading_state', 'multiple', 'persisted_props', 'persistence', 'persistence_type', 'selectable', 'selectedKeys', 'showIcon', 'showLine', 'style', 'treeData', 'treeDataMode']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'checkStrictly', 'checkable', 'checkedKeys', 'className', 'defaultCheckedKeys', 'defaultExpandAll', 'defaultExpandParent', 'defaultExpandedKeys', 'defaultSelectedKeys', 'draggable', 'expandedKeys', 'halfCheckedKeys', 'height', 'key', 'loading_state', 'multiple', 'persisted_props', 'persistence', 'persistence_type', 'selectable', 'selectedKeys', 'showIcon', 'showLine', 'style', 'treeData', 'treeDataMode']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdTree, self).__init__(**args)
