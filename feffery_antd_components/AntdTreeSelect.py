# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdTreeSelect(Component):
    """An AntdTreeSelect component.


Keyword arguments:

- id (string; optional)

- allowClear (boolean; default True)

- bordered (boolean; optional)

- className (string; optional)

- defaultValue (string | list of strings; optional)

- disabled (boolean; optional)

- listHeight (number; default 256)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- maxTagCount (number; optional)

- multiple (boolean; optional)

- placeholder (string; optional)

- size (a value equal to: 'small', 'middle', 'large'; optional)

- style (dict; optional)

- treeCheckStrictly (boolean; optional)

- treeCheckable (boolean; optional)

- treeData (optional)

- treeDefaultExpandAll (boolean; optional)

- treeDefaultExpandedKeys (list of strings; optional)

- treeExpandedKeys (list of strings; optional)

- treeLine (boolean; optional)

- value (string | list of strings; optional)

- virtual (boolean; default False)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, treeData=Component.UNDEFINED, allowClear=Component.UNDEFINED, bordered=Component.UNDEFINED, treeLine=Component.UNDEFINED, placeholder=Component.UNDEFINED, value=Component.UNDEFINED, defaultValue=Component.UNDEFINED, maxTagCount=Component.UNDEFINED, listHeight=Component.UNDEFINED, multiple=Component.UNDEFINED, size=Component.UNDEFINED, treeCheckable=Component.UNDEFINED, treeCheckStrictly=Component.UNDEFINED, treeDefaultExpandAll=Component.UNDEFINED, treeDefaultExpandedKeys=Component.UNDEFINED, treeExpandedKeys=Component.UNDEFINED, virtual=Component.UNDEFINED, disabled=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'allowClear', 'bordered', 'className', 'defaultValue', 'disabled', 'listHeight', 'loading_state', 'maxTagCount', 'multiple', 'placeholder', 'size', 'style', 'treeCheckStrictly', 'treeCheckable', 'treeData', 'treeDefaultExpandAll', 'treeDefaultExpandedKeys', 'treeExpandedKeys', 'treeLine', 'value', 'virtual']
        self._type = 'AntdTreeSelect'
        self._namespace = 'feffery_antd_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'allowClear', 'bordered', 'className', 'defaultValue', 'disabled', 'listHeight', 'loading_state', 'maxTagCount', 'multiple', 'placeholder', 'size', 'style', 'treeCheckStrictly', 'treeCheckable', 'treeData', 'treeDefaultExpandAll', 'treeDefaultExpandedKeys', 'treeExpandedKeys', 'treeLine', 'value', 'virtual']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdTreeSelect, self).__init__(**args)
