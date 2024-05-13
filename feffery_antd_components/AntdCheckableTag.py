# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdCheckableTag(Component):
    """An AntdCheckableTag component.
可选择标签AntdCheckableTag

Keyword arguments:

- id (string; optional):
    组件唯一id.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- checked (boolean; default False):
    监听或设置当前标签的选择状态  默认值：`False`.

- checkedContent (a list of or a singular dash component, string or number; optional):
    组件型，选择状态下的标签内容.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- content (a list of or a singular dash component, string or number; optional):
    组件型，标签内容.

- data-* (string; optional):
    `data-*`格式属性通配.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- style (dict; optional):
    当前组件css样式.

- unCheckedContent (a list of or a singular dash component, string or number; optional):
    组件型，未选择状态下的标签内容."""
    _children_props = ['content', 'checkedContent', 'unCheckedContent']
    _base_nodes = ['content', 'checkedContent', 'unCheckedContent', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdCheckableTag'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, content=Component.UNDEFINED, checkedContent=Component.UNDEFINED, unCheckedContent=Component.UNDEFINED, checked=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'aria-*', 'checked', 'checkedContent', 'className', 'content', 'data-*', 'key', 'loading_state', 'style', 'unCheckedContent']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'aria-*', 'checked', 'checkedContent', 'className', 'content', 'data-*', 'key', 'loading_state', 'style', 'unCheckedContent']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdCheckableTag, self).__init__(**args)
