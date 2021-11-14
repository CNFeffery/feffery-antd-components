# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdTree(Component):
    """An AntdTree component.


Keyword arguments:

- id (string; optional)

- checkStrictly (boolean; optional)

- checkable (boolean; default False)

- checkedKeys (list of dicts; optional)

    `checkedKeys` is a list | dict with keys:

    - checked (list; optional)

    - halfChecked (list; optional)

- className (string; optional)

- defaultCheckedKeys (list of strings; optional)

- defaultExpandAll (boolean; default False)

- defaultExpandParent (boolean; default False)

- defaultExpandedKeys (list of strings; optional)

- defaultSelectedKeys (list of strings; optional)

- height (number; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- multiple (boolean; default False)

- selectable (boolean; default True)

- selectedKeys (list; optional)

- showIcon (boolean; default True)

- showLine (dict; default { 'showLeafIcon': False })

    `showLine` is a boolean | dict with keys:

    - showLeafIcon (boolean; optional)

- style (dict; optional)

- treeData (optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, treeData=Component.UNDEFINED, showIcon=Component.UNDEFINED, checkable=Component.UNDEFINED, defaultExpandAll=Component.UNDEFINED, defaultExpandedKeys=Component.UNDEFINED, defaultExpandParent=Component.UNDEFINED, checkStrictly=Component.UNDEFINED, defaultCheckedKeys=Component.UNDEFINED, defaultSelectedKeys=Component.UNDEFINED, multiple=Component.UNDEFINED, selectable=Component.UNDEFINED, showLine=Component.UNDEFINED, selectedKeys=Component.UNDEFINED, checkedKeys=Component.UNDEFINED, height=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'checkStrictly', 'checkable', 'checkedKeys', 'className', 'defaultCheckedKeys', 'defaultExpandAll', 'defaultExpandParent', 'defaultExpandedKeys', 'defaultSelectedKeys', 'height', 'loading_state', 'multiple', 'selectable', 'selectedKeys', 'showIcon', 'showLine', 'style', 'treeData']
        self._type = 'AntdTree'
        self._namespace = 'feffery_antd_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'checkStrictly', 'checkable', 'checkedKeys', 'className', 'defaultCheckedKeys', 'defaultExpandAll', 'defaultExpandParent', 'defaultExpandedKeys', 'defaultSelectedKeys', 'height', 'loading_state', 'multiple', 'selectable', 'selectedKeys', 'showIcon', 'showLine', 'style', 'treeData']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdTree, self).__init__(**args)
