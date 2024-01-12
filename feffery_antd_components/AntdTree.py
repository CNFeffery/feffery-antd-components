# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdTree(Component):
    """An AntdTree component.


Keyword arguments:

- id (string; optional)

- batchPropsNames (list of strings; optional)

- batchPropsValues (dict; optional)

- caseSensitive (boolean; default True)

- checkStrictly (boolean; default False)

- checkable (boolean; default False)

- checkedKeys (list of strings; optional)

- className (string | number; optional)

- clickedContextMenu (dict; optional)

    `clickedContextMenu` is a dict with keys:

    - menuKey (string; optional)

    - nodeKey (string; optional)

    - timestamp (number; optional)

- defaultCheckedKeys (list of strings; optional)

- defaultExpandAll (boolean; default False)

- defaultExpandParent (boolean; default False)

- defaultExpandedKeys (list of strings; optional)

- defaultSelectedKeys (list of strings; optional)

- dragInSameLevel (boolean; default False)

- draggable (boolean; default False)

- draggedNodeKey (string; optional)

- enableNodeFavorites (boolean; default False)

- expandedKeys (list of strings; optional)

- favoritedKeys (list of strings; optional)

- halfCheckedKeys (list of strings; optional)

- height (number; optional)

- highlightStyle (dict; default {    fontWeight: 'bold',    backgroundColor: 'transparent',    padding: 0,    color: '#ff5500'})

- key (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- multiple (boolean; default False)

- nodeCheckedStyle (dict; optional)

- nodeCheckedSuffix (a list of or a singular dash component, string or number; optional)

- nodeUncheckedStyle (dict; optional)

- nodeUncheckedSuffix (a list of or a singular dash component, string or number; optional)

- persisted_props (list of a value equal to: 'selectedKeys', 'checkedKeys', 'expandedKeys', 'halfCheckedKeys's; default ['selectedKeys', 'checkedKeys', 'expandedKeys', 'halfCheckedKeys']):
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

- scrollTarget (dict; optional)

    `scrollTarget` is a dict with keys:

    - align (a value equal to: 'top', 'bottom', 'auto'; optional)

    - key (string; required)

    - offset (number; optional)

- searchKeyword (string | list of strings; optional)

- selectable (boolean; default True)

- selectedKeys (list of strings; optional)

- showIcon (boolean; default False)

- showLine (dict; default { 'showLeafIcon': False })

    `showLine` is a boolean | dict with keys:

    - showLeafIcon (boolean; optional)

- style (dict; optional)

- treeData (list; optional)

- treeDataMode (a value equal to: 'tree', 'flat'; default 'tree')

- treeNodeKeyToTitle (dict with strings as keys and values of type a list of or a singular dash component, string or number; optional)"""
    _children_props = ['treeNodeKeyToTitle{}', 'nodeCheckedSuffix', 'nodeUncheckedSuffix']
    _base_nodes = ['nodeCheckedSuffix', 'nodeUncheckedSuffix', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdTree'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, treeDataMode=Component.UNDEFINED, treeData=Component.UNDEFINED, treeNodeKeyToTitle=Component.UNDEFINED, showIcon=Component.UNDEFINED, selectable=Component.UNDEFINED, multiple=Component.UNDEFINED, checkable=Component.UNDEFINED, defaultExpandAll=Component.UNDEFINED, expandedKeys=Component.UNDEFINED, defaultExpandedKeys=Component.UNDEFINED, defaultExpandParent=Component.UNDEFINED, selectedKeys=Component.UNDEFINED, defaultSelectedKeys=Component.UNDEFINED, checkedKeys=Component.UNDEFINED, defaultCheckedKeys=Component.UNDEFINED, halfCheckedKeys=Component.UNDEFINED, checkStrictly=Component.UNDEFINED, showLine=Component.UNDEFINED, height=Component.UNDEFINED, draggable=Component.UNDEFINED, dragInSameLevel=Component.UNDEFINED, draggedNodeKey=Component.UNDEFINED, clickedContextMenu=Component.UNDEFINED, enableNodeFavorites=Component.UNDEFINED, favoritedKeys=Component.UNDEFINED, scrollTarget=Component.UNDEFINED, searchKeyword=Component.UNDEFINED, caseSensitive=Component.UNDEFINED, highlightStyle=Component.UNDEFINED, nodeCheckedSuffix=Component.UNDEFINED, nodeUncheckedSuffix=Component.UNDEFINED, nodeCheckedStyle=Component.UNDEFINED, nodeUncheckedStyle=Component.UNDEFINED, batchPropsNames=Component.UNDEFINED, batchPropsValues=Component.UNDEFINED, loading_state=Component.UNDEFINED, persistence=Component.UNDEFINED, persisted_props=Component.UNDEFINED, persistence_type=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'batchPropsNames', 'batchPropsValues', 'caseSensitive', 'checkStrictly', 'checkable', 'checkedKeys', 'className', 'clickedContextMenu', 'defaultCheckedKeys', 'defaultExpandAll', 'defaultExpandParent', 'defaultExpandedKeys', 'defaultSelectedKeys', 'dragInSameLevel', 'draggable', 'draggedNodeKey', 'enableNodeFavorites', 'expandedKeys', 'favoritedKeys', 'halfCheckedKeys', 'height', 'highlightStyle', 'key', 'loading_state', 'multiple', 'nodeCheckedStyle', 'nodeCheckedSuffix', 'nodeUncheckedStyle', 'nodeUncheckedSuffix', 'persisted_props', 'persistence', 'persistence_type', 'scrollTarget', 'searchKeyword', 'selectable', 'selectedKeys', 'showIcon', 'showLine', 'style', 'treeData', 'treeDataMode', 'treeNodeKeyToTitle']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'batchPropsNames', 'batchPropsValues', 'caseSensitive', 'checkStrictly', 'checkable', 'checkedKeys', 'className', 'clickedContextMenu', 'defaultCheckedKeys', 'defaultExpandAll', 'defaultExpandParent', 'defaultExpandedKeys', 'defaultSelectedKeys', 'dragInSameLevel', 'draggable', 'draggedNodeKey', 'enableNodeFavorites', 'expandedKeys', 'favoritedKeys', 'halfCheckedKeys', 'height', 'highlightStyle', 'key', 'loading_state', 'multiple', 'nodeCheckedStyle', 'nodeCheckedSuffix', 'nodeUncheckedStyle', 'nodeUncheckedSuffix', 'persisted_props', 'persistence', 'persistence_type', 'scrollTarget', 'searchKeyword', 'selectable', 'selectedKeys', 'showIcon', 'showLine', 'style', 'treeData', 'treeDataMode', 'treeNodeKeyToTitle']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdTree, self).__init__(**args)
