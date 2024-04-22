# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdAvatarGroup(Component):
    """An AntdAvatarGroup component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional)

- id (string; optional)

- aria-* (string; optional):
    `aria-*`格式属性通配.

- className (string | dict; optional)

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

- maxCount (number; optional)

- maxPopoverPlacement (a value equal to: 'top', 'bottom'; default 'top')

- maxPopoverTrigger (a value equal to: 'hover', 'click'; default 'hover')

- maxStyle (dict; optional)

- size (dict; default 'default')

    `size` is a number | a value equal to: 'large', 'small', 'default'
    | dict with keys:

    - lg (number; optional)

    - md (number; optional)

    - sm (number; optional)

    - xl (number; optional)

    - xs (number; optional)

    - xxl (number; optional)

- style (dict; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdAvatarGroup'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, key=Component.UNDEFINED, maxCount=Component.UNDEFINED, maxPopoverPlacement=Component.UNDEFINED, maxPopoverTrigger=Component.UNDEFINED, maxStyle=Component.UNDEFINED, size=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'aria-*', 'className', 'data-*', 'key', 'loading_state', 'maxCount', 'maxPopoverPlacement', 'maxPopoverTrigger', 'maxStyle', 'size', 'style']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['children', 'id', 'aria-*', 'className', 'data-*', 'key', 'loading_state', 'maxCount', 'maxPopoverPlacement', 'maxPopoverTrigger', 'maxStyle', 'size', 'style']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(AntdAvatarGroup, self).__init__(children=children, **args)
