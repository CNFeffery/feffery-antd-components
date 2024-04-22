# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdCheckableTag(Component):
    """An AntdCheckableTag component.


Keyword arguments:

- id (string; optional)

- aria-* (string; optional):
    `aria-*`格式属性通配.

- checked (boolean; default False):
    设置或监听当前标签的选择状态  默认：False.

- checkedContent (a list of or a singular dash component, string or number; optional)

- className (string | dict; optional)

- content (a list of or a singular dash component, string or number; optional)

- data-* (string; optional):
    `data-*`格式属性通配.

- key (string; optional)

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- style (dict; optional)

- unCheckedContent (a list of or a singular dash component, string or number; optional)"""
    _children_props = ['content', 'checkedContent', 'unCheckedContent']
    _base_nodes = ['content', 'checkedContent', 'unCheckedContent', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdCheckableTag'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, content=Component.UNDEFINED, checkedContent=Component.UNDEFINED, unCheckedContent=Component.UNDEFINED, checked=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'aria-*', 'checked', 'checkedContent', 'className', 'content', 'data-*', 'key', 'loading_state', 'style', 'unCheckedContent']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'aria-*', 'checked', 'checkedContent', 'className', 'content', 'data-*', 'key', 'loading_state', 'style', 'unCheckedContent']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdCheckableTag, self).__init__(**args)
